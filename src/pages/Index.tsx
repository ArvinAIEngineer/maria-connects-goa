import { HeroSection } from "@/components/HeroSection";
import { ChatInterface } from "@/components/chat/ChatInterface";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-sunset">
      <div className="container mx-auto px-4 py-8">
        <main className="max-w-4xl mx-auto">
          <HeroSection />
          
          <div className="grid lg:grid-cols-1 gap-8">
            <div className="w-full max-w-3xl mx-auto">
              <ChatInterface />
            </div>
          </div>
          
          <footer className="mt-16 text-center text-muted-foreground">
            <p className="text-sm">
              © 2024 EO Goa. Bringing together Goa's most sophisticated entrepreneurs.
            </p>
          </footer>
        </main>
      </div>
    </div>
  );
};

export default Index;
