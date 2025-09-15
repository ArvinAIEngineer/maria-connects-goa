export const HeroSection = () => {
  return (
    <div className="text-center mb-12 animate-fade-in-up relative z-10">
      {/* Modern AI Orb - inspired by reference image */}
      <div className="flex justify-center mb-8">
        <div className="relative">
          <div className="w-32 h-32 bg-gradient-orb rounded-full shadow-orb animate-orb-float"></div>
          <div className="absolute inset-0 w-32 h-32 bg-gradient-orb rounded-full opacity-60 animate-glow"></div>
          <div className="absolute inset-4 w-24 h-24 bg-white/20 rounded-full backdrop-blur-sm"></div>
        </div>
      </div>

      <div className="space-y-4 max-w-2xl mx-auto">
        <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
          Hi there, I'm Maria
        </h1>

        <h2 className="text-2xl md:text-3xl font-medium text-foreground/80">
          How can I help you today?
        </h2>

        <p className="text-lg text-muted-foreground max-w-xl mx-auto leading-relaxed">
          Your AI guide to the EO Goa community. I'm here to help you discover events,
          member celebrations, and everything about our entrepreneurial family.
        </p>
      </div>
    </div>
  );
};
