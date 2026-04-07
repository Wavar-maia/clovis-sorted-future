const features = [
  {
    number: "01",
    title: "Tous les formats. Aucun template.",
    description:
      "Clovis lit ce que vos clients envoient réellement : emails, images, appels téléphoniques. Pas de templates ni de mapping de champs. La plupart des équipes sont opérationnelles en quelques jours.",
    tags: ["Email", "Images", "Appels"],
  },
  {
    number: "02",
    title: "Respecte vos procédures, exactement.",
    description:
      "Définissez les étapes que vous voulez suivre et Clovis les exécute sur chaque tâche, de manière cohérente. Du contrôle croisé de devis dans votre CRM à l'application de règles de frais de port, vos procédures deviennent la norme.",
  },
  {
    number: "03",
    title: "Sécurisé par design.",
    description:
      "Vos données sont chiffrées en transit et au repos, jamais utilisées pour entraîner des modèles partagés, et traitées sous des contrôles d'accès stricts. Intégrez l'IA dans votre workflow commercial en toute confiance.",
  },
  {
    number: "04",
    title: "S'améliore chaque jour.",
    description:
      "Chaque fois que votre équipe donne un feedback sur un résultat, Clovis apprend instantanément. Pas de ré-entraînement, pas d'attente. Plus vous l'utilisez, plus il est précis.",
  },
];

const WhyClovisSection = () => {
  return (
    <section id="why-clovis" className="py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <span className="text-primary font-semibold text-sm uppercase tracking-[0.2em] mb-4 block">
            Pourquoi Clovis
          </span>
          <h2 className="text-2xl md:text-4xl font-bold mb-4 leading-tight text-foreground">
            Une plateforme différente
          </h2>
          <p className="text-base text-muted-foreground max-w-2xl mx-auto">
            La plupart des outils d'automatisation nécessitent des mois de mise en place et cassent dès qu'un format change. Clovis est conçu pour comprendre, pas pour faire du matching.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-px bg-border max-w-5xl mx-auto border border-border rounded-2xl overflow-hidden">
          {features.map((feature, i) => (
            <div key={i} className="bg-card p-8 md:p-10">
              <span className="text-muted-foreground/50 text-sm font-medium mb-4 block">
                {feature.number}
              </span>
              <h3 className="text-xl font-bold text-foreground mb-3">
                {feature.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                {feature.description}
              </p>
              {feature.tags && (
                <div className="flex gap-2">
                  {feature.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1.5 bg-secondary text-secondary-foreground text-xs font-medium rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyClovisSection;
