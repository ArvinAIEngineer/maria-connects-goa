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
      
      <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-sunset bg-clip-text text-transparent">
        Meet Maria
      </h1>
      
      <h2 className="text-xl md:text-2xl text-muted-foreground mb-6 font-medium">
        Your Sophisticated AI Guide to EO Goa
      </h2>
      
      <p className="text-lg text-foreground/80 max-w-2xl mx-auto leading-relaxed">
        Hello darling! I'm your insider connection to Goa's most elite entrepreneurial community. 
        Whether you're curious about membership, upcoming events, or just want to know what's happening 
        in our fabulous business circle, I'm here to help with all the sophistication and warmth 
        you'd expect from a true Goa socialite.
      </p>
    </div>
  );
};