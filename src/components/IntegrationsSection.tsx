import { useEffect, useRef } from "react";

const integrations = [
  { name: "SAP", color: "#0FAAFF" },
  { name: "Oracle", color: "#F80000" },
  { name: "NetSuite", color: "#1A3C5E" },
  { name: "Salesforce", color: "#00A1E0" },
  { name: "Sage", color: "#00DC00" },
  { name: "Epicor", color: "#E4002B" },
  { name: "Infor", color: "#007CC3" },
  { name: "Odoo", color: "#714B67" },
  { name: "Gmail", color: "#EA4335" },
  { name: "Outlook", color: "#0078D4" },
  { name: "Dynamics 365", color: "#002050" },
  { name: "HubSpot", color: "#FF7A59" },
];

const LogoCard = ({ name, color }: { name: string; color: string }) => (
  <div className="flex-shrink-0 w-20 h-20 md:w-24 md:h-24 rounded-2xl border border-border/50 bg-card flex flex-col items-center justify-center shadow-sm gap-1 mx-3">
    <div
      className="w-8 h-8 md:w-10 md:h-10 rounded-lg flex items-center justify-center text-white font-bold text-sm md:text-base"
      style={{ backgroundColor: color }}
    >
      {name.charAt(0)}
    </div>
    <span className="text-[10px] md:text-xs font-medium text-muted-foreground text-center leading-tight px-1">
      {name}
    </span>
  </div>
);

const IntegrationsSection = () => {
  const row1Ref = useRef<HTMLDivElement>(null);
  const row2Ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const animate = (el: HTMLDivElement, speed: number) => {
      let pos = 0;
      const totalWidth = el.scrollWidth / 2;
      const step = () => {
        pos -= speed;
        if (Math.abs(pos) >= totalWidth) pos = 0;
        el.style.transform = `translateX(${pos}px)`;
        requestAnimationFrame(step);
      };
      requestAnimationFrame(step);
    };

    if (row1Ref.current) animate(row1Ref.current, 0.4);
    if (row2Ref.current) animate(row2Ref.current, 0.3);
  }, []);

  const row1 = integrations.slice(0, 6);
  const row2 = integrations.slice(6, 12);

  return (
    <section className="py-16 md:py-24 overflow-hidden">
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

        {/* Animated logos with Clovis center */}
        <div className="relative max-w-4xl mx-auto">
          {/* Scrolling rows */}
          <div className="space-y-4">
            {/* Row 1 - scrolls left */}
            <div className="overflow-hidden">
              <div ref={row1Ref} className="flex w-max">
                {[...row1, ...row1, ...row1, ...row1].map((item, i) => (
                  <LogoCard key={`r1-${i}`} {...item} />
                ))}
              </div>
            </div>

            {/* Row 2 - scrolls left (slower) */}
            <div className="overflow-hidden">
              <div ref={row2Ref} className="flex w-max">
                {[...row2, ...row2, ...row2, ...row2].map((item, i) => (
                  <LogoCard key={`r2-${i}`} {...item} />
                ))}
              </div>
            </div>
          </div>

          {/* Clovis logo overlay - centered and static */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div className="w-20 h-20 md:w-28 md:h-28 rounded-2xl bg-primary flex items-center justify-center shadow-xl ring-4 ring-background">
              <span className="text-3xl md:text-4xl font-bold text-primary-foreground">C</span>
            </div>
          </div>

          {/* Fade edges */}
          <div className="absolute inset-y-0 left-0 w-16 md:w-24 bg-gradient-to-r from-background to-transparent pointer-events-none z-10" />
          <div className="absolute inset-y-0 right-0 w-16 md:w-24 bg-gradient-to-l from-background to-transparent pointer-events-none z-10" />
        </div>
      </div>
    </section>
  );
};

export default IntegrationsSection;
