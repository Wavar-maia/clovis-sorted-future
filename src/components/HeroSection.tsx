import { Button } from "@/components/ui/button";

const HeroSection = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="min-h-[70vh] flex items-center justify-center pt-20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 animate-fade-up leading-[1.1] tracking-tight text-foreground">
            Vos commerciaux devraient vendre, pas saisir des données.
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 animate-fade-up-delay leading-relaxed">
            Clovis automatise le travail manuel derrière chaque devis et chaque commande pour que vos équipes se concentrent sur ce qui génère du chiffre d'affaires.
          </p>

          <div className="animate-fade-up-delay" style={{ animationDelay: "0.4s" }}>
            <Button
              variant="default"
              size="lg"
              onClick={() => scrollToSection("contact")}
              className="rounded-full px-10 text-base"
            >
              Démarrer
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
