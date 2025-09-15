import { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Send, Calendar, Users, Info, Sparkles } from "lucide-react";
import { ChatBubble } from "./ChatBubble";
import { TypingIndicator } from "./TypingIndicator";
import { QuickSuggestions } from "./QuickSuggestions";
import { LoadingSpinner } from "@/components/ui/loading-spinner";
import { MessageSkeleton } from "@/components/ui/message-skeleton";
import { getLlmResponse } from "@/lib/llm";

interface Message {
  id: string;
  text: string;
  isUser: boolean;
  timestamp: string;
}

interface LlmHistoryPart {
  role: 'user' | 'model';
  parts: { text: string }[];
}

const categorizedSuggestions = [
  {
    category: "Upcoming Events",
    icon: <Calendar className="w-4 h-4 text-primary" />,
    items: [
      "What events are happening in July 2025?",
      "Tell me about the Malta retreat in April",
      "What's the surprise WOW event in May?",
      "Show me all 2025 learning workshops"
    ]
  },
  {
    category: "Member Celebrations",
    icon: <Users className="w-4 h-4 text-accent" />,
    items: [
      "Who has birthdays in March?",
      "Show me anniversaries this month",
      "List all member children's birthdays",
      "What celebrations are coming up?"
    ]
  },
  {
    category: "Membership & Community",
    icon: <Info className="w-4 h-4 text-secondary" />,
    items: [
      "How do I join EO Goa?",
      "What are the membership requirements?",
      "Tell me about the EO Goa community",
      "What makes EO Goa special?"
    ]
  },
  {
    category: "Special Activities",
    icon: <Sparkles className="w-4 h-4 text-muted-foreground" />,
    items: [
      "What are SLP events?",
      "Tell me about MyEO activities",
      "Show me family-friendly events",
      "What learning opportunities are available?"
    ]
  }
];

export const ChatInterface = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      text: "Hello! I'm Maria, your dedicated guide to the EO Goa community. I'm here to help you discover upcoming events, member celebrations, membership information, and all the exciting activities our entrepreneurial family has to offer. How can I assist you today?",
      isUser: false,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    },
  ]);
  const [currentMessage, setCurrentMessage] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [showSuggestions, setShowSuggestions] = useState(true);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping]);
  
  const handleSendMessage = async (messageText: string = currentMessage) => {
    if (!messageText.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text: messageText,
      isUser: true,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    };

    setMessages(prev => [...prev, userMessage]);
    setCurrentMessage("");
    setShowSuggestions(false);
    setIsTyping(true);

    const history: LlmHistoryPart[] = messages
      .slice(1)
      .map(msg => ({
        role: msg.isUser ? 'user' : 'model',
        parts: [{ text: msg.text }],
      }));

    const responseText = await getLlmResponse(messageText, history);
    
    const mariaResponse: Message = {
      id: (Date.now() + 1).toString(),
      text: responseText,
      isUser: false,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    };

    setMessages(prev => [...prev, mariaResponse]);
    setIsTyping(false);
  };

  const handleSuggestionClick = (suggestion: string) => {
    handleSendMessage(suggestion);
  };

  return (
    <div
      className="flex flex-col h-full max-h-[700px] md:max-h-[800px] bg-gradient-card rounded-3xl shadow-elegant overflow-hidden border border-border/20 backdrop-blur-sm"
      role="main"
      aria-label="Chat interface with Maria"
    >
      <div className="bg-gradient-header p-4 md:p-6 border-b border-border/10">
        <div className="flex items-center gap-3">
          <div
            className="w-3 h-3 bg-primary rounded-full animate-glow"
            aria-hidden="true"
          ></div>
          <h1 className="font-semibold text-foreground text-lg">Chat with Maria</h1>
          <div className="ml-auto text-xs text-muted-foreground hidden md:block">
            AI Assistant
          </div>
        </div>
      </div>

      <div
        className="flex-1 overflow-y-auto p-4 md:p-6 space-y-4 md:space-y-6"
        role="log"
        aria-live="polite"
        aria-label="Chat messages"
      >
        {messages.map((message) => (
          <ChatBubble
            key={message.id}
            message={message.text}
            isUser={message.isUser}
            timestamp={message.timestamp}
          />
        ))}

        {isTyping && (
          <div aria-live="polite" aria-label="Maria is typing">
            <TypingIndicator />
          </div>
        )}

        {showSuggestions && !isTyping && (
          <div className="animate-fade-in-up space-y-4 md:space-y-6">
            <div className="text-center px-4">
              <h2 className="text-lg md:text-xl font-medium text-foreground mb-2">What would you like to know?</h2>
              <p className="text-sm text-muted-foreground">Choose a topic below or ask me anything</p>
            </div>
            <QuickSuggestions
              suggestions={categorizedSuggestions}
              onSuggestionClick={handleSuggestionClick}
            />
          </div>
        )}

        <div ref={messagesEndRef} aria-hidden="true" />
      </div>

      <div className="p-4 md:p-6 border-t border-border/10 bg-gradient-header">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleSendMessage();
          }}
          className="space-y-2"
        >
          <div className="flex gap-2 md:gap-3">
            <Input
              value={currentMessage}
              onChange={(e) => setCurrentMessage(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && !e.shiftKey && handleSendMessage()}
              placeholder="Type your message here..."
              className="flex-1 bg-background border-border/20 focus:border-primary shadow-sm rounded-2xl px-4 py-3 text-base transition-all resize-none"
              aria-label="Type your message to Maria"
              aria-describedby="input-help"
              disabled={isTyping}
            />
            <Button
              type="submit"
              disabled={!currentMessage.trim() || isTyping}
              className="bg-gradient-button hover:shadow-lg text-white shadow-md rounded-2xl px-4 md:px-6 py-3 transition-all hover:scale-105 active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed"
              aria-label={isTyping ? "Sending message" : "Send message"}
            >
              {isTyping ? (
                <LoadingSpinner size="sm" className="text-white" />
              ) : (
                <Send className="w-4 h-4 md:w-5 md:h-5" />
              )}
            </Button>
          </div>
          <div
            id="input-help"
            className="text-xs text-muted-foreground text-center md:text-left"
          >
            Press Enter to send, Shift+Enter for new line
          </div>
        </form>
      </div>
    </div>
  );
};
