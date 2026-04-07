import { Button } from "@/components/ui/button";

const Header = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between h-16 md:h-20">
          <a href="/" className="flex items-center gap-2">
            <img src="/logo-clovis.png" alt="Clovis logo" className="h-8 w-8" />
            <span className="text-2xl font-bold text-foreground tracking-tight">Clovis</span>
          </a>

          <Button
            variant="default"
            size="sm"
            onClick={() => scrollToSection("contact")}
            className="rounded-full px-6"
          >
            Nous contacter
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
