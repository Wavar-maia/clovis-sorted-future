const ProblemSection = () => {
  return (
    <section id="problem" className="py-16 md:py-24 border-t border-border/50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">
          {/* Left - Text */}
          <div>
            <span className="text-primary font-semibold text-sm uppercase tracking-[0.2em] mb-4 block">
              Le problème
            </span>
            <h2 className="text-2xl md:text-4xl font-bold mb-6 leading-tight text-foreground">
              La moitié de la journée de vos équipes disparaît dans le back-office.
            </h2>
            <p className="text-base text-muted-foreground mb-4 leading-relaxed">
              Chaque devis, chaque commande, chaque demande client oblige un commercial à fouiller dans ses emails, chercher dans l'ERP, vérifier les prix, et saisir manuellement les informations dans vos systèmes.
            </p>
            <p className="text-base text-foreground font-medium mb-6">
              Ce n'est pas de la vente. C'est de la saisie de données.
            </p>

            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                <span className="text-sm text-muted-foreground">2 à 3 heures par commercial et par jour perdues en recherche et re-saisie</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                <span className="text-sm text-muted-foreground">Des devis qui prennent des heures au lieu de quelques minutes</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                <span className="text-sm text-muted-foreground">Des prospects qui refroidissent pendant que vos commerciaux sont bloqués dans l'ERP</span>
              </li>
            </ul>
          </div>

          {/* Right - Horizontal flow diagram */}
          <div className="flex items-center justify-center">
            <div className="flex items-center gap-4">
              {/* Source documents */}
              <div className="space-y-3">
                {[
                  { label: "EMAIL", color: "bg-blue-500" },
                  { label: "BON DE COMMANDE", color: "bg-amber-500" },
                  { label: "APPEL", color: "bg-emerald-500" },
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <div className="w-14 h-12 bg-card border border-border rounded-lg flex items-center justify-center shadow-soft">
                      <div className="space-y-0.5">
                        <div className="w-8 h-1 bg-border rounded" />
                        <div className="w-6 h-1 bg-border rounded" />
                        <div className="w-8 h-1 bg-border rounded" />
                      </div>
                    </div>
                    <span className={`${item.color} text-white text-[10px] font-bold px-2 py-1 rounded-md whitespace-nowrap`}>
                      {item.label}
                    </span>
                  </div>
                ))}
              </div>

              {/* Arrow */}
              <div className="w-8 h-px bg-border flex-shrink-0" />

              {/* Central hub */}
              <div className="w-14 h-14 rounded-full border-2 border-border bg-card flex items-center justify-center shadow-card flex-shrink-0">
                <span className="text-foreground font-bold text-lg">C</span>
              </div>

              {/* Arrow */}
              <div className="w-8 h-px bg-border flex-shrink-0" />

              {/* Destination systems */}
              <div className="space-y-3">
                {["ERP", "CRM"].map((sys) => (
                  <div key={sys} className="w-16 h-12 bg-card border border-border rounded-lg flex items-center justify-center shadow-soft">
                    <span className="text-foreground font-semibold text-xs">{sys}</span>
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
