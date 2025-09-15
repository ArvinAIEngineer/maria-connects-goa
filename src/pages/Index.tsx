import { HeroSection } from "@/components/HeroSection";
import { ChatInterface } from "@/components/chat/ChatInterface";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-main">
      <div className="container mx-auto px-4 py-12">
        <main className="max-w-5xl mx-auto flex flex-col items-center">
          <HeroSection />

          <div className="w-full max-w-4xl">
            <ChatInterface />
          </div>

          <footer className="mt-20 text-center">
            <p className="text-sm text-muted-foreground">
              © 2024 EO Goa. Bringing together Goa's most sophisticated entrepreneurs.
            </p>
          </footer>
        </main>
      </div>
    </div>
  );
};

export default Index;
