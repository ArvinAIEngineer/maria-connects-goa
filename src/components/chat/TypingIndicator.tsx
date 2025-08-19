import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import mariaProfile from "@/assets/maria-profile.jpg";

export const TypingIndicator = () => {
  return (
    <div className="flex gap-3 mb-4 animate-fade-in-up">
      <Avatar className="w-10 h-10 shadow-elegant">
        <AvatarImage src={mariaProfile} alt="Maria" />
        <AvatarFallback className="bg-primary text-primary-foreground">M</AvatarFallback>
      </Avatar>
      <div className="bg-chat-bubble-maria text-chat-bubble-maria-foreground px-4 py-3 rounded-2xl shadow-chat">
        <div className="flex gap-1">
          <div className="w-2 h-2 bg-muted-foreground rounded-full animate-typing" style={{ animationDelay: '0ms' }}></div>
          <div className="w-2 h-2 bg-muted-foreground rounded-full animate-typing" style={{ animationDelay: '200ms' }}></div>
          <div className="w-2 h-2 bg-muted-foreground rounded-full animate-typing" style={{ animationDelay: '400ms' }}></div>
        </div>
      </div>
    </div>
  );
};