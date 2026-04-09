import { FileText, MessageSquare, Database } from "lucide-react";

const steps = [
  {
    number: 1,
    title: "Lecture et matching produits",
    description:
      "Clovis comprend les emails et autres formats et associe intelligemment les produits à votre catalogue.",
    icon: (
      <div className="w-20 h-24 rounded-xl border border-border/50 bg-card flex flex-col items-center justify-center gap-1 shadow-sm">
        <div className="w-10 h-[1px] bg-border" />
        <div className="w-12 h-[1px] bg-border" />
        <div className="w-8 h-[1px] bg-border" />
        <div className="w-10 h-[1px] bg-primary/40 mt-2" />
        <div className="w-12 h-[1px] bg-primary/40" />
      </div>
    ),
  },
  {
    number: 2,
    title: "Vérification et approbation",
    description:
      "Votre commercial vérifie le résultat de l'IA, apporte des corrections et approuve. Chaque modification entraîne le modèle.",
    icon: (
      <div className="space-y-2">
        <div className="rounded-full border border-border/50 bg-card px-4 py-2 flex items-center gap-2 shadow-sm text-sm text-muted-foreground">
          <MessageSquare className="w-4 h-4 text-primary" />
          Ajouter un commentaire...
        </div>
        <div className="text-sm text-center">
          <span className="text-primary font-medium underline">SKU-4421 · 200 unités</span>{" "}
          <span className="text-muted-foreground">matché et prêt à valider.</span>
        </div>
      </div>
    ),
  },
  {
    number: 3,
    title: "Envoi vers l'ERP instantané",
    description:
      "Un devis ou une commande précise est prête dans votre ERP en quelques minutes.",
    icon: (
      <div className="relative w-20 h-24 rounded-xl border border-border/50 bg-card flex flex-col items-center justify-center gap-1 shadow-sm">
        <div className="grid grid-cols-3 gap-1">
          {Array.from({ length: 9 }).map((_, i) => (
            <div key={i} className="w-3 h-3 rounded-sm bg-muted" />
          ))}
        </div>
        <span className="absolute -bottom-2 -right-2 bg-primary text-primary-foreground text-[10px] font-bold px-2 py-0.5 rounded-md">
          ERP
        </span>
      </div>
    ),
  },
];

const HowItWorksSection = () => {
  return (
    <section className="py-16 md:py-24 bg-muted/30">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <span className="text-primary font-semibold text-sm uppercase tracking-[0.2em] mb-4 block">
            Processus
          </span>
          <h2 className="text-2xl md:text-4xl font-bold mb-4 leading-tight">
            Comment ça marche
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Une demande arrive. Clovis la traite. Votre commercial approuve.
          </p>
        </div>

        <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-8 md:gap-6 items-start">
          {steps.map((step, index) => (
            <div key={step.number} className="flex flex-col items-center text-center">
              {/* Number */}
              <div className="w-10 h-10 rounded-full bg-muted border border-border flex items-center justify-center text-sm font-semibold text-foreground mb-6">
                {step.number}
              </div>

              {/* Visual */}
              <div className="h-28 flex items-center justify-center mb-6">
                {step.icon}
              </div>

              {/* Arrow between steps (hidden on mobile) */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute" />
              )}

              {/* Text */}
              <h3 className="text-lg font-bold mb-2">{step.title}</h3>
              <p className="text-sm text-muted-foreground max-w-xs leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
