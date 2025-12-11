import { Button } from "@/components/ui/button";

const HeroSection = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-20">
      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,hsl(var(--border)/0.4)_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--border)/0.4)_1px,transparent_1px)] bg-[size:80px_80px]" />

      {/* Circular Background Element */}
      <div className="absolute top-1/2 right-0 -translate-y-1/2 translate-x-1/4 pointer-events-none">
        <div className="relative w-[600px] h-[600px] md:w-[800px] md:h-[800px]">
          {/* Outer ring */}
          <div className="absolute inset-0 animate-spin-slow">
            <svg viewBox="0 0 400 400" className="w-full h-full opacity-20">
              <circle cx="200" cy="200" r="180" fill="none" stroke="hsl(var(--foreground))" strokeWidth="0.5" strokeDasharray="8 8" />
            </svg>
          </div>
          {/* Middle ring */}
          <div className="absolute inset-[15%] animate-spin-slower">
            <svg viewBox="0 0 400 400" className="w-full h-full opacity-15">
              <circle cx="200" cy="200" r="180" fill="none" stroke="hsl(var(--foreground))" strokeWidth="0.5" strokeDasharray="4 12" />
            </svg>
          </div>
          {/* Inner ring */}
          <div className="absolute inset-[30%] animate-spin-slow">
            <svg viewBox="0 0 400 400" className="w-full h-full opacity-10">
              <circle cx="200" cy="200" r="180" fill="none" stroke="hsl(var(--foreground))" strokeWidth="0.5" />
            </svg>
          </div>
          {/* Small decorative elements */}
          <div className="absolute top-[20%] left-[15%] w-8 h-2 bg-secondary/40 rounded-full transform rotate-45 animate-float" />
          <div className="absolute top-[35%] right-[25%] w-6 h-1.5 bg-secondary/30 rounded-full transform -rotate-12 animate-float" style={{ animationDelay: '1s' }} />
          <div className="absolute bottom-[30%] left-[20%] w-10 h-2 bg-secondary/35 rounded-full transform rotate-[30deg] animate-float" style={{ animationDelay: '2s' }} />
          <div className="absolute bottom-[45%] right-[15%] w-4 h-1 bg-secondary/25 rounded-full transform rotate-[60deg] animate-float" style={{ animationDelay: '3s' }} />
        </div>
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-3xl">
          {/* Main Headline */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-8 animate-fade-up leading-[1.1] tracking-tight">
            Turning textile waste into{" "}
            <span className="underline decoration-2 underline-offset-4">valuable resources</span>
          </h1>

          {/* Subheadline */}
          <p className="text-lg md:text-xl text-muted-foreground max-w-xl mb-10 animate-fade-up-delay leading-relaxed">
            We use advanced AI to sort post-consumer textiles at unprecedented speed and precision, unlocking supply of high quality feedstock for reuse and recycling.
          </p>

          {/* CTA Button */}
          <div className="animate-fade-up-delay" style={{ animationDelay: "0.4s" }}>
            <Button 
              variant="default" 
              size="lg" 
              onClick={() => scrollToSection("what-we-do")}
              className="rounded-full px-8"
            >
              Discover how
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;