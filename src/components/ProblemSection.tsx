const ProblemSection = () => {
  return (
    <section id="problem" className="py-24 md:py-32 border-t border-border/50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid md:grid-cols-2 gap-16 items-start max-w-6xl mx-auto">
          {/* Left - Text */}
          <div>
            <span className="text-primary font-semibold text-sm uppercase tracking-[0.2em] mb-6 block">
              Le problème
            </span>
            <h2 className="text-3xl md:text-5xl font-bold mb-8 leading-tight text-foreground">
              La moitié de la journée de vos équipes disparaît dans le back-office.
            </h2>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              Chaque devis, chaque commande, chaque demande client oblige un commercial à fouiller dans ses emails, chercher dans l'ERP, vérifier les prix, et saisir manuellement les informations dans vos systèmes.
            </p>
            <p className="text-lg text-foreground font-medium mb-8">
              Ce n'est pas de la vente. C'est de la saisie de données. Et ça dévore la majorité du temps de vos équipes.
            </p>

            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-primary mt-2.5 flex-shrink-0" />
                <span className="text-muted-foreground">2 à 3 heures par commercial et par jour perdues en recherche, copier-coller et re-saisie</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-primary mt-2.5 flex-shrink-0" />
                <span className="text-muted-foreground">Des devis qui prennent des heures au lieu de quelques minutes, laissant les affaires aux concurrents plus rapides</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-primary mt-2.5 flex-shrink-0" />
                <span className="text-muted-foreground">Des prospects qui refroidissent pendant que vos commerciaux sont bloqués dans l'ERP</span>
              </li>
            </ul>
          </div>

          {/* Right - Visual diagram */}
          <div className="flex items-center justify-center">
            <div className="relative w-full max-w-md">
              {/* Source documents */}
              <div className="space-y-4 mb-8">
                {[
                  { label: "EMAIL", color: "bg-blue-500" },
                  { label: "BON DE COMMANDE", color: "bg-amber-500" },
                  { label: "APPEL", color: "bg-emerald-500" },
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-4">
                    <div className="w-20 h-16 bg-card border border-border rounded-xl flex items-center justify-center shadow-soft">
                      <div className="space-y-1">
                        <div className="w-10 h-1 bg-border rounded" />
                        <div className="w-8 h-1 bg-border rounded" />
                        <div className="w-10 h-1 bg-border rounded" />
                      </div>
                    </div>
                    <span className={`${item.color} text-white text-xs font-bold px-3 py-1.5 rounded-md`}>
                      {item.label}
                    </span>
                  </div>
                ))}
              </div>

              {/* Arrow / connector */}
              <div className="flex justify-center mb-8">
                <div className="w-px h-12 bg-border" />
              </div>

              {/* Central hub */}
              <div className="flex justify-center mb-8">
                <div className="w-16 h-16 rounded-full border-2 border-border bg-card flex items-center justify-center shadow-card">
                  <span className="text-foreground font-bold text-lg">C</span>
                </div>
              </div>

              {/* Arrow / connector */}
              <div className="flex justify-center mb-8">
                <div className="w-px h-12 bg-border" />
              </div>

              {/* Destination systems */}
              <div className="flex justify-center gap-4">
                {["ERP", "CRM"].map((sys) => (
                  <div key={sys} className="w-24 h-16 bg-card border border-border rounded-xl flex items-center justify-center shadow-soft">
                    <span className="text-foreground font-semibold text-sm">{sys}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;
