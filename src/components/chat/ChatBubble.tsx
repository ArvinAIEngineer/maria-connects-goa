import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import mariaProfile from "@/assets/maria-profile.jpg";
import ReactMarkdown from "react-markdown";
import { User } from "lucide-react";

interface ChatBubbleProps {
  message: string;
  isUser: boolean;
  timestamp?: string;
}

export const ChatBubble = ({ message, isUser, timestamp }: ChatBubbleProps) => {
  return (
    <div className={`flex gap-3 md:gap-4 mb-4 md:mb-6 ${isUser ? 'flex-row-reverse animate-slide-in-right' : 'flex-row animate-slide-in-left'}`}>
      {!isUser && (
        <Avatar className="w-10 h-10 md:w-12 md:h-12 shadow-md border-2 border-white flex-shrink-0">
          <AvatarImage src={mariaProfile} alt="Maria" />
          <AvatarFallback className="bg-gradient-button text-white font-semibold">M</AvatarFallback>
        </Avatar>
      )}
      <div
        className={`max-w-[280px] sm:max-w-sm lg:max-w-lg px-4 md:px-5 py-3 md:py-4 rounded-3xl shadow-md text-left transition-all ${
          isUser
            ? 'bg-gradient-button text-white rounded-br-lg'
            : 'bg-white text-foreground border border-border/10 rounded-bl-lg'
        }`}
      >
        <div className="text-sm md:text-base leading-relaxed markdown-content">
            <ReactMarkdown>{message}</ReactMarkdown>
        </div>
        {timestamp && (
          <p className={`text-xs mt-2 ${isUser ? 'text-white/70' : 'text-muted-foreground'}`}>
            {timestamp}
          </p>
        )}
      </div>
      {isUser && (
        <Avatar className="w-10 h-10 md:w-12 md:h-12 shadow-md border-2 border-white flex-shrink-0">
          <AvatarFallback className="bg-secondary text-secondary-foreground">
            <User className="w-5 h-5 md:w-6 md:h-6" />
          </AvatarFallback>
        </Avatar>
      )}
    </div>
  );
};
