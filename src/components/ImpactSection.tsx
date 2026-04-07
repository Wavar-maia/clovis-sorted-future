const stats = [
  {
    value: "3x",
    title: "Gains de productivité",
    description:
      "C'est comme tripler vos effectifs commerciaux sans les coûts de recrutement. Vos commerciaux ont plus de temps pour vendre et servir vos clients.",
    footnote: "L'IA traite 95 %+ automatiquement. Vos équipes valident et approuvent.",
  },
  {
    value: "+3-5%",
    title: "Taux de conversion",
    description:
      "Améliorez la conversion devis-commande en répondant plus vite et en améliorant le service client.",
    footnote: "35 % des affaires vont à celui qui répond en premier.",
  },
  {
    value: "25%",
    title: "Moins d'erreurs",
    description:
      "Moins de retours et de re-livraisons causés par des erreurs d'unités de mesure, de références ou de quantités.",
    footnote: "1 à 4 % des commandes saisies manuellement contiennent une erreur.",
  },
];

const ImpactSection = () => {
  return (
    <section id="impact" className="py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <span className="text-primary font-semibold text-sm uppercase tracking-[0.2em] mb-4 block">
            L'impact
          </span>
          <h2 className="text-2xl md:text-4xl font-bold mb-4 leading-tight text-foreground">
            Des résultats concrets pour votre équipe
          </h2>
          <p className="text-base text-muted-foreground max-w-2xl mx-auto">
            Clovis apporte des améliorations mesurables en productivité, chiffre d'affaires et précision dès le premier jour.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-px bg-border max-w-5xl mx-auto border border-border rounded-2xl overflow-hidden">
          {stats.map((stat, i) => (
            <div key={i} className="bg-card p-6 md:p-8 text-center">
              <div className="text-4xl md:text-5xl font-bold text-foreground mb-3">
                {stat.value}
              </div>
              <div className="text-lg font-bold text-foreground mb-3">
                {stat.title}
              </div>
              <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                {stat.description}
              </p>
              <p className="text-muted-foreground/70 text-xs italic">
                {stat.footnote}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ImpactSection;
