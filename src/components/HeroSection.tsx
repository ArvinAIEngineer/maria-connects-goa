import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import mariaProfile from "@/assets/maria-profile.jpg";

export const HeroSection = () => {
  return (
    <div className="text-center mb-8 animate-fade-in-up">
      <div className="flex justify-center mb-6">
        <Avatar className="w-24 h-24 shadow-glow animate-glow">
          <AvatarImage src={mariaProfile} alt="Maria" />
          <AvatarFallback className="bg-primary text-primary-foreground text-2xl">M</AvatarFallback>
        </Avatar>
      </div>
      
      <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">
        Meet Maria
      </h1>
      
      <h2 className="text-xl md:text-2xl text-white/90 mb-6 font-medium">
        Your AI Guide to EO Goa
      </h2>
      
      <p className="text-lg text-white/80 max-w-2xl mx-auto leading-relaxed">
        Hello! I'm your knowledgeable guide to Goa's distinguished entrepreneurial community. 
        Whether you're curious about membership, upcoming events, or networking opportunities, 
        Ask, Away!
      </p>
    </div>
  );
};
