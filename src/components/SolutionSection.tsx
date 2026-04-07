const useCases = [
  {
    number: "01",
    title: "Devis",
    description:
      "Générez des devis précis instantanément. Clovis lit les demandes entrantes, identifie les produits dans votre catalogue et crée des devis professionnels sans recherche manuelle.",
    visual: {
      ref: "QUO-78432",
      amount: "284 342,57 €",
      validity: "Valide 30 jours",
    },
  },
  {
    number: "02",
    title: "Saisie de commande",
    description:
      "Transformez les bons de commande en entrées ERP automatiquement. Clovis extrait les lignes, résout les références articles et pousse les commandes propres directement dans votre système.",
    visual: {
      ref: "PO-2024-00891",
      title: "Bon de commande",
      items: [
        { qty: 200 },
        { qty: 50 },
        { qty: 120 },
        { qty: 10 },
        { qty: 75 },
      ],
    },
  },
];

const SolutionSection = () => {
  return (
    <section id="solution" className="py-24 md:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto text-center mb-20">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 leading-tight text-foreground">
            Une automatisation conçue pour votre workflow
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Commencez par un cas d'usage ou déployez la plateforme complète. Tout se connecte à vos systèmes existants.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-px bg-border max-w-5xl mx-auto border border-border rounded-2xl overflow-hidden">
          {useCases.map((uc, i) => (
            <div key={i} className="bg-card p-8 md:p-10">
              {/* Visual mock */}
              <div className="bg-background border border-border rounded-xl p-6 mb-8 min-h-[220px] flex flex-col justify-center">
                {i === 0 ? (
                  <div>
                    <div className="text-primary/40 text-2xl mb-1">#</div>
                    <div className="text-sm text-muted-foreground">{uc.visual.ref}</div>
                    <div className="text-3xl font-bold text-foreground mt-1">{uc.visual.amount}</div>
                    <div className="text-sm text-muted-foreground mt-1">{uc.visual.validity}</div>
                    <div className="mt-4 space-y-2">
                      <div className="flex justify-between text-sm text-muted-foreground">
                        <span>Destinataire</span>
                        <div className="w-16 h-2 bg-border rounded" />
                      </div>
                      <div className="flex justify-between text-sm text-muted-foreground">
                        <span>Expéditeur</span>
                        <div className="w-20 h-2 bg-border rounded" />
                      </div>
                    </div>
                  </div>
                ) : (
                  <div>
                    <div className="text-sm text-muted-foreground">{uc.visual.ref}</div>
                    <div className="text-lg font-bold text-foreground">{uc.visual.title}</div>
                    <div className="mt-4 border-t border-border pt-3">
                      <div className="flex justify-between text-sm font-medium text-muted-foreground mb-2">
                        <span>Article</span>
                        <span>Qté</span>
                      </div>
                      {uc.visual.items?.map((item, j) => (
                        <div key={j} className="flex justify-between items-center py-1.5 border-b border-border/50 last:border-0">
                          <div className="w-3/4 h-2 bg-border rounded" />
                          <span className="text-sm text-foreground font-medium">{item.qty}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              <h3 className="text-xl font-bold text-foreground mb-3">{uc.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{uc.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SolutionSection;
