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
      <div className="absolute inset-0 bg-[linear-gradient(to_right,hsl(var(--border)/0.3)_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--border)/0.3)_1px,transparent_1px)] bg-[size:80px_80px]" />

      {/* Complex Morphing Background Shapes */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Large morphing shape 1 */}
        <div className="absolute top-[10%] right-[5%] w-[500px] h-[500px] md:w-[700px] md:h-[700px] animate-morph animate-drift opacity-[0.08]">
          <div className="w-full h-full bg-foreground rounded-[60%_40%_30%_70%/60%_30%_70%_40%]" />
        </div>
        
        {/* Large morphing shape 2 */}
        <div className="absolute top-[30%] right-[15%] w-[400px] h-[400px] md:w-[550px] md:h-[550px] animate-morph-delay animate-drift-reverse opacity-[0.05]">
          <div className="w-full h-full bg-foreground rounded-[30%_60%_70%_40%/50%_60%_30%_60%]" />
        </div>

        {/* Smaller morphing shape 3 */}
        <div className="absolute bottom-[20%] right-[25%] w-[300px] h-[300px] md:w-[400px] md:h-[400px] animate-morph-delay-2 opacity-[0.04]">
          <div className="w-full h-full bg-foreground rounded-[50%_60%_30%_60%/30%_60%_70%_40%]" />
        </div>

        {/* Rotating rings */}
        <div className="absolute top-1/2 right-0 -translate-y-1/2 translate-x-1/4">
          <div className="relative w-[600px] h-[600px] md:w-[800px] md:h-[800px]">
            {/* Outer ring with dashes */}
            <div className="absolute inset-0 animate-spin-slow">
              <svg viewBox="0 0 400 400" className="w-full h-full opacity-[0.12]">
                <circle cx="200" cy="200" r="190" fill="none" stroke="hsl(var(--foreground))" strokeWidth="0.5" strokeDasharray="4 8" />
                <circle cx="200" cy="200" r="170" fill="none" stroke="hsl(var(--foreground))" strokeWidth="0.3" strokeDasharray="2 12" />
              </svg>
            </div>
            
            {/* Middle ring */}
            <div className="absolute inset-[12%] animate-spin-slower">
              <svg viewBox="0 0 400 400" className="w-full h-full opacity-[0.08]">
                <circle cx="200" cy="200" r="180" fill="none" stroke="hsl(var(--foreground))" strokeWidth="0.5" strokeDasharray="1 6" />
                <circle cx="200" cy="200" r="150" fill="none" stroke="hsl(var(--foreground))" strokeWidth="0.3" />
              </svg>
            </div>
            
            {/* Inner ring */}
            <div className="absolute inset-[25%] animate-spin-slowest">
              <svg viewBox="0 0 400 400" className="w-full h-full opacity-[0.06]">
                <circle cx="200" cy="200" r="180" fill="none" stroke="hsl(var(--foreground))" strokeWidth="0.4" strokeDasharray="8 4" />
              </svg>
            </div>

            {/* Floating dots/particles */}
            <div className="absolute top-[15%] left-[20%] w-3 h-3 bg-foreground/10 rounded-full animate-float" />
            <div className="absolute top-[40%] right-[30%] w-2 h-2 bg-foreground/8 rounded-full animate-float" style={{ animationDelay: '1s' }} />
            <div className="absolute bottom-[35%] left-[25%] w-4 h-4 bg-foreground/6 rounded-full animate-float" style={{ animationDelay: '2s' }} />
            <div className="absolute bottom-[20%] right-[20%] w-2 h-2 bg-foreground/10 rounded-full animate-float" style={{ animationDelay: '3s' }} />
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-3xl">
          {/* Main Headline */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-semibold mb-8 animate-fade-up leading-[1.1] tracking-tight text-foreground">
            Turning textile waste into{" "}
            <span className="underline decoration-1 underline-offset-4">valuable resources</span>
          </h1>

          {/* Subheadline */}
          <p className="text-lg md:text-xl text-foreground/80 max-w-xl mb-10 animate-fade-up-delay leading-relaxed font-light">
            We use advanced AI to sort post-consumer textiles at unprecedented speed and precision, unlocking supply of high quality feedstock for reuse and recycling.
          </p>

          {/* CTA Buttons */}
          <div className="animate-fade-up-delay flex gap-4" style={{ animationDelay: "0.4s" }}>
            <Button 
              variant="default" 
              size="lg" 
              onClick={() => scrollToSection("what-we-do")}
              className="rounded-full px-8"
            >
              Discover how
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              onClick={() => scrollToSection("contact")}
              className="rounded-full px-8 bg-background text-foreground border-foreground hover:bg-foreground hover:text-background"
            >
              Contact us
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;