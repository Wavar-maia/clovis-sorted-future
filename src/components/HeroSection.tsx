import { Button } from "@/components/ui/button";
import { ArrowDown, Sparkles } from "lucide-react";
const HeroSection = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth"
      });
    }
  };
  return <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 -left-20 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/4 -right-20 w-80 h-80 bg-secondary/10 rounded-full blur-3xl animate-float" style={{
        animationDelay: "2s"
      }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent/5 rounded-full blur-3xl" />
      </div>

      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,hsl(var(--border)/0.3)_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--border)/0.3)_1px,transparent_1px)] bg-[size:60px_60px]" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-8 animate-fade-up">
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">AI-Powered Textile Sorting</span>
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold mb-6 animate-fade-up leading-tight">
            Turning textile waste into{" "}
            <span className="text-gradient">valuable ressources</span>
          </h1>

          {/* Subheadline */}
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 animate-fade-up-delay leading-relaxed text-center px-px">We use advanced AI to sort post-consumer textiles at unprecedented speed and precision, unlocking supply of high quality feedstock for reuse and recycling</p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-up-delay" style={{
          animationDelay: "0.4s"
        }}>
            <Button variant="hero" size="xl" onClick={() => scrollToSection("what-we-do")}>
              Discover how
            </Button>
            <Button variant="heroOutline" size="xl" onClick={() => scrollToSection("contact")}>
              Get in touch
            </Button>
          </div>

          {/* Stats Preview */}
          <div className="grid grid-cols-3 gap-4 md:gap-8 mt-16 md:mt-24 animate-fade-up-delay" style={{
          animationDelay: "0.6s"
        }}>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-gradient">90%+</div>
              <div className="text-sm text-muted-foreground mt-1">Reuse purity</div>
            </div>
            
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-gradient">
            </div>
              <div className="text-sm text-muted-foreground mt-1">large, constant, predictable supply</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <button onClick={() => scrollToSection("what-we-do")} className="p-2 rounded-full bg-card/50 backdrop-blur-sm border border-border/50 hover:bg-card transition-colors">
          <ArrowDown className="w-5 h-5 text-muted-foreground" />
        </button>
      </div>
    </section>;
};
export default HeroSection;