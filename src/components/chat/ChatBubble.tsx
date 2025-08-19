import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import mariaProfile from "@/assets/maria-profile.jpg";

interface ChatBubbleProps {
  message: string;
  isUser: boolean;
  timestamp?: string;
}

export const ChatBubble = ({ message, isUser, timestamp }: ChatBubbleProps) => {
  return (
    <div className={`flex gap-3 mb-4 animate-fade-in-up ${isUser ? 'flex-row-reverse' : 'flex-row'}`}>
      {!isUser && (
        <Avatar className="w-10 h-10 shadow-elegant">
          <AvatarImage src={mariaProfile} alt="Maria" />
          <AvatarFallback className="bg-primary text-primary-foreground">M</AvatarFallback>
        </Avatar>
      )}
      <div
        className={`max-w-xs lg:max-w-md px-4 py-3 rounded-2xl shadow-chat ${
          isUser
            ? 'bg-chat-bubble-user text-chat-bubble-user-foreground ml-auto'
            : 'bg-chat-bubble-maria text-chat-bubble-maria-foreground'
        }`}
      >
        <p className="text-sm leading-relaxed">{message}</p>
        {timestamp && (
          <p className="text-xs opacity-70 mt-1">{timestamp}</p>
        )}
      </div>
      {isUser && (
        <Avatar className="w-10 h-10 shadow-elegant">
          <AvatarFallback className="bg-secondary text-secondary-foreground">U</AvatarFallback>
        </Avatar>
      )}
    </div>
  );
};