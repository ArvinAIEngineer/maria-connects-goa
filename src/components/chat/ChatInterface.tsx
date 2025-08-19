import { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Send } from "lucide-react";
import { ChatBubble } from "./ChatBubble";
import { TypingIndicator } from "./TypingIndicator";
import { QuickSuggestions } from "./QuickSuggestions";
import { mariaResponses } from "./mariaKnowledge";

interface Message {
  id: string;
  text: string;
  isUser: boolean;
  timestamp: string;
}

const quickSuggestions = [
  "Tell me about EO Goa",
  "Who are the current members?",
  "What events are coming up?",
  "How can I join EO Goa?",
  "What's the Goa business scene like?",
];

export const ChatInterface = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      text: "Hello! I'm Maria, your knowledgeable guide to everything EO Goa. I have extensive insights into our distinguished entrepreneurial community, upcoming events, and networking opportunities. How may I assist you today?",
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

  const getMariaResponse = (userMessage: string) => {
    const lowerMessage = userMessage.toLowerCase();
    
    for (const [keywords, response] of Object.entries(mariaResponses)) {
      if (keywords.split('|').some(keyword => lowerMessage.includes(keyword))) {
        return response as string;
      }
    }
    
    return "Oh darling, that's an interesting question! While I'm quite knowledgeable about EO Goa and our vibrant business community, I might need you to be a bit more specific. What exactly would you like to know about our entrepreneurs, events, or networking opportunities?";
  };

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

    // Simulate typing delay
    setTimeout(() => {
      const mariaResponse: Message = {
        id: (Date.now() + 1).toString(),
        text: getMariaResponse(messageText),
        isUser: false,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      };

      setMessages(prev => [...prev, mariaResponse]);
      setIsTyping(false);
    }, 1500 + Math.random() * 1000);
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
            <p className="text-sm text-muted-foreground mb-3 font-medium">Try asking about:</p>
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
            placeholder="Ask Maria anything about EO Goa..."
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