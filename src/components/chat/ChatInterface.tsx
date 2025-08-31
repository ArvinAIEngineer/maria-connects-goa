import { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Send } from "lucide-react";
import { ChatBubble } from "./ChatBubble";
import { TypingIndicator } from "./TypingIndicator";
import { QuickSuggestions } from "./QuickSuggestions";
import { getLlmResponse } from "@/lib/llm";

interface Message {
  id: string;
  text: string;
  isUser: boolean;
  timestamp: string;
}

// For converting message state to LLM history format
interface LlmHistoryPart {
  role: 'user' | 'model';
  parts: { text: string }[];
}

const quickSuggestions = [
  "What's happening in July 2025?",
  "Tell me about the Malta retreat",
  "Who has a birthday in March?",
  "How do I join?",
];

export const ChatInterface = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      text: "Hello! I'm so glad you're here. I've been waiting to tell someone all about our wonderful EO Goa community. Please, don't be shy, ask me anything!",
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

    // Prepare history for the LLM
    const history: LlmHistoryPart[] = messages
      .slice(1) // remove initial greeting
      .map(msg => ({
        role: msg.isUser ? 'user' : 'model',
        parts: [{ text: msg.text }],
      }));

    // Get response from the LLM
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
    <div className="flex flex-col h-full max-h-[600px] bg-gradient-elegant rounded-3xl shadow-elegant overflow-hidden">
      <div className="bg-gradient-header p-4 border-b border-border/50">
        <div className="flex items-center gap-3">
          <div className="w-3 h-3 bg-accent rounded-full animate-glow"></div>
          <h3 className="font-medium text-foreground">Chat with Maria</h3>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.map((message) => (
          <ChatBubble
            key={message.id}
            message={message.text}
            isUser={message.isUser}
            timestamp={message.timestamp}
          />
        ))}
        
        {isTyping && <TypingIndicator />}
        
        {showSuggestions && !isTyping && (
          <div className="animate-fade-in-up">
            <p className="text-sm text-muted-foreground mb-3 font-medium">Try asking me:</p>
            <QuickSuggestions
              suggestions={quickSuggestions}
              onSuggestionClick={handleSuggestionClick}
            />
          </div>
        )}
        
        <div ref={messagesEndRef} />
      </div>

      <div className="p-4 border-t border-border/50 bg-gradient-header">
        <div className="flex gap-2">
          <Input
            value={currentMessage}
            onChange={(e) => setCurrentMessage(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
            placeholder="Ask me anything about EO Goa..."
            className="flex-1 bg-background/80 border-primary/20 focus:border-primary shadow-chat"
          />
          <Button
            onClick={() => handleSendMessage()}
            disabled={!currentMessage.trim() || isTyping}
            className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-elegant"
          >
            <Send className="w-4 h-4" />
          </Button>
        </div>
      </div>
    </div>
  );
};
