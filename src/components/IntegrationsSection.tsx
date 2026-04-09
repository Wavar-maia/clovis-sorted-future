const integrations = [
  "Salesforce", "SAP", "Oracle", "NetSuite", "Infor",
  "Microsoft Dynamics 365", "RingCentral", "Sage", "Odoo", "Epicor",
];

const IntegrationsSection = () => {
  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <span className="text-primary font-semibold text-sm uppercase tracking-[0.2em] mb-4 block">
            Intégrations
          </span>
          <h2 className="text-2xl md:text-4xl font-bold mb-4 leading-tight">
            Une plateforme qui fonctionne avec tous vos systèmes.
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Clovis se connecte directement à votre ERP, CRM, boîte mail et système téléphonique. Accédez aux stocks en temps réel et aux tarifs spécifiques par client.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          {/* Grid of integration cards with Clovis logo in center */}
          <div className="grid grid-cols-3 md:grid-cols-5 gap-4 items-center justify-items-center">
            {integrations.slice(0, 4).map((name) => (
              <div
                key={name}
                className="w-full aspect-square max-w-[120px] rounded-2xl border border-border/50 bg-card flex items-center justify-center shadow-sm p-3"
              >
                <span className="text-xs md:text-sm font-semibold text-muted-foreground text-center leading-tight">
                  {name}
                </span>
              </div>
            ))}
            <div className="hidden md:block" />

            {integrations.slice(4, 6).map((name) => (
              <div
                key={name}
                className="w-full aspect-square max-w-[120px] rounded-2xl border border-border/50 bg-card flex items-center justify-center shadow-sm p-3"
              >
                <span className="text-xs md:text-sm font-semibold text-muted-foreground text-center leading-tight">
                  {name}
                </span>
              </div>
            ))}

            {/* Clovis logo center */}
            <div className="w-full aspect-square max-w-[120px] rounded-2xl bg-primary flex items-center justify-center shadow-lg">
              <span className="text-2xl font-bold text-primary-foreground">C</span>
            </div>

            {integrations.slice(6, 8).map((name) => (
              <div
                key={name}
                className="w-full aspect-square max-w-[120px] rounded-2xl border border-border/50 bg-card flex items-center justify-center shadow-sm p-3"
              >
                <span className="text-xs md:text-sm font-semibold text-muted-foreground text-center leading-tight">
                  {name}
                </span>
              </div>
            ))}

            <div className="hidden md:block" />
            {integrations.slice(8, 10).map((name) => (
              <div
                key={name}
                className="w-full aspect-square max-w-[120px] rounded-2xl border border-border/50 bg-card flex items-center justify-center shadow-sm p-3"
              >
                <span className="text-xs md:text-sm font-semibold text-muted-foreground text-center leading-tight">
                  {name}
                </span>
              </div>
            ))}

            {/* Fill remaining on mobile */}
            <div className="md:hidden w-full aspect-square max-w-[120px]" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default IntegrationsSection;
