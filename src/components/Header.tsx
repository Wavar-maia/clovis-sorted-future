import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <a href="/" className="flex items-center gap-2">
            <img src="/logo-clovis.png" alt="Clovis logo" className="h-8 w-8" />
            <span className="text-2xl font-bold text-foreground tracking-tight">Clovis</span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <button
              onClick={() => scrollToSection("what-we-do")}
              className="text-muted-foreground hover:text-foreground transition-colors text-sm font-medium"
            >
              What we do
            </button>
            <button
              onClick={() => scrollToSection("our-vision")}
              className="text-muted-foreground hover:text-foreground transition-colors text-sm font-medium"
            >
              Our vision
            </button>
            <button
              onClick={() => scrollToSection("our-mission")}
              className="text-muted-foreground hover:text-foreground transition-colors text-sm font-medium"
            >
              Our mission
            </button>
            <Button
              variant="default"
              size="sm"
              onClick={() => scrollToSection("contact")}
              className="rounded-full px-6"
            >
              Contact us
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="w-6 h-6 text-foreground" />
            ) : (
              <Menu className="w-6 h-6 text-foreground" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden py-4 border-t border-border/50 animate-fade-up">
            <div className="flex flex-col gap-4">
              <button
                onClick={() => scrollToSection("what-we-do")}
                className="text-muted-foreground hover:text-foreground transition-colors text-sm font-medium text-left py-2"
              >
                What we do
              </button>
              <button
                onClick={() => scrollToSection("our-vision")}
                className="text-muted-foreground hover:text-foreground transition-colors text-sm font-medium text-left py-2"
              >
                Our vision
              </button>
              <button
                onClick={() => scrollToSection("our-mission")}
                className="text-muted-foreground hover:text-foreground transition-colors text-sm font-medium text-left py-2"
              >
                Our mission
              </button>
              <Button
                variant="default"
                size="sm"
                onClick={() => scrollToSection("contact")}
                className="w-full rounded-full"
              >
                Contact us
              </Button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;