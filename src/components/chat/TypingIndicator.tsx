import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import mariaProfile from "@/assets/maria-profile.jpg";

export const TypingIndicator = () => {
  return (
    <div className="flex gap-4 mb-6 animate-slide-in-left">
      <Avatar className="w-12 h-12 shadow-md border-2 border-white">
        <AvatarImage src={mariaProfile} alt="Maria" />
        <AvatarFallback className="bg-gradient-button text-white font-semibold">M</AvatarFallback>
      </Avatar>
      <div className="bg-white text-foreground px-5 py-4 rounded-3xl rounded-bl-lg shadow-md border border-border/10">
        <div className="flex gap-1 items-center">
          <div className="w-2 h-2 bg-primary rounded-full animate-typing" style={{ animationDelay: '0ms' }}></div>
          <div className="w-2 h-2 bg-primary rounded-full animate-typing" style={{ animationDelay: '200ms' }}></div>
          <div className="w-2 h-2 bg-primary rounded-full animate-typing" style={{ animationDelay: '400ms' }}></div>
          <span className="ml-2 text-sm text-muted-foreground">Maria is typing...</span>
        </div>
      </div>
    </div>
  );
};