import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import mariaProfile from "@/assets/maria-profile.jpg";

export const MessageSkeleton = () => {
  return (
    <div className="flex gap-4 mb-6 animate-fade-in">
      <Avatar className="w-12 h-12 shadow-md border-2 border-white">
        <AvatarImage src={mariaProfile} alt="Maria" />
        <AvatarFallback className="bg-gradient-button text-white font-semibold">M</AvatarFallback>
      </Avatar>
      <div className="bg-white rounded-3xl rounded-bl-lg shadow-md border border-border/10 p-5 max-w-sm lg:max-w-lg">
        <div className="animate-pulse space-y-3">
          <div className="h-4 bg-muted rounded-full w-3/4"></div>
          <div className="h-4 bg-muted rounded-full w-1/2"></div>
          <div className="h-4 bg-muted rounded-full w-5/6"></div>
        </div>
      </div>
    </div>
  );
};
