import { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Send } from "lucide-react";
import { ChatBubble } from "./ChatBubble";
import { TypingIndicator } from "./TypingIndicator";
import { QuickSuggestions } from "./QuickSuggestions";
import { mariaResponses, membersData, eventsData, monthMap } from "./mariaKnowledge";

interface Message {
  id: string;
  text: string;
  isUser: boolean;
  timestamp: string;
}

const quickSuggestions = [
  "What events are in July 2025?",
  "Who has birthdays in March?",
  "Tell me about the Malta retreat",
  "How can I join EO Goa?",
  "What's the vibe like?",
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

  const getMariaResponse = (userMessage: string): string => {
    const lowerMessage = userMessage.toLowerCase();

    // --- Intent 1: Check for Monthly Birthday Queries ---
    const birthdayRegex = /(?:birthdays|born)\s+in\s+(\w+)/i;
    const birthdayMatch = lowerMessage.match(birthdayRegex);
    if (birthdayMatch) {
      const monthName = birthdayMatch[1].toLowerCase();
      const monthNumber = monthMap[monthName];
      if (monthNumber) {
        const birthdays = membersData.filter(m => m.birthMonth === monthNumber);
        if (birthdays.length > 0) {
          const birthdayList = birthdays.map(b => `- ${b.name} on the ${b.birthDay}${getOrdinal(b.birthDay)}`).join('\n');
          return `Oh, I love celebrating birthdays! Here are the wonderful people celebrating in ${capitalize(monthName)}:\n${birthdayList}`;
        }
        return `I checked my list, but it seems there are no birthdays in ${capitalize(monthName)}. Maybe ask about another month?`;
      }
    }

    // --- Intent 2: Check for Monthly Event Queries ---
    const eventRegex = /(?:events|happening|what's on)\s+in\s+(\w+)(?:\s+(\d{4}))?/i;
    const eventMatch = lowerMessage.match(eventRegex);
    if (eventMatch) {
      const monthName = eventMatch[1].toLowerCase();
      const year = eventMatch[2] ? parseInt(eventMatch[2]) : null;
      const monthNumber = monthMap[monthName];
      if (monthNumber) {
        const events = eventsData.filter(e => e.month === monthNumber && (!year || e.year === year));
        if (events.length > 0) {
          const eventList = events.map(e => `- ${e.name}: ${e.details}`).join('\n');
          return `Yes! ${capitalize(monthName)} ${year || ''} is going to be so exciting. Here's what's on the calendar:\n${eventList}`;
        }
        return `It looks like ${capitalize(monthName)} ${year || ''} is a quiet month for now. But things change quickly, so check back! Is there another month I can look up for you?`;
      }
    }

    // --- Fallback to Simple Keyword Matching ---
    for (const [keywords, response] of Object.entries(mariaResponses)) {
      if (keywords.split('|').some(keyword => lowerMessage.includes(keyword))) {
        return response as string;
      }
    }
    
    // --- Default Fallback Response ---
    return "Oh, that's a new one! I don't think I have the details on that just yet, but I'll do my best to find out. Why don't you ask me about our upcoming Malta retreat or who has a birthday in May? I know everything about those and I'd love to tell you!";
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
  
  // Helper functions for formatting
  const getOrdinal = (n: number) => {
    const s = ["th", "st", "nd", "rd"];
    const v = n % 100;
    return (s[(v - 20) % 10] || s[v] || s[0]);
  }
  const capitalize = (s: string) => s.charAt(0).toUpperCase() + s.slice(1);

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
