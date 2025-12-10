import { Scan, Cpu, ArrowRight, PackageCheck } from "lucide-react";
const steps = [{
  icon: Scan,
  title: "Intake & Analysis",
  description: "Textiles arrive at our facility where they're rapidly scanned using advanced sensors and computer vision."
}, {
  icon: Cpu,
  title: "AI Classification",
  description: "Our proprietary AI instantly classifies each item by condition, fiber type, and optimal destination."
}, {
  icon: PackageCheck,
  title: "Precision Sorting",
  description: "Automated systems separate items into two streams: premium reuse and recycling feedstock."
}];
const HowItWorks = () => {
  return <section id="how-it-works" className="py-24 md:py-32 bg-muted/30 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-24">
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">WHY WE DO IT</span>
          <h2 className="text-3xl md:text-5xl font-bold mt-4 mb-6">Our vision</h2>
          <p className="text-lg text-muted-foreground">Textile waste is a plague. But when sorted</p>
        </div>

        {/* Steps */}
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 md:gap-4">
            {steps.map((step, index) => <div key={index} className="relative">
                {/* Connector Arrow (desktop only) */}
                {index < steps.length - 1 && <div className="hidden md:block absolute top-12 left-[calc(100%-1rem)] z-10">
                    <ArrowRight className="w-8 h-8 text-primary/30" />
                  </div>}
                
                <div className="text-center md:text-left">
                  {/* Step Number & Icon */}
                  <div className="relative inline-flex items-center justify-center mb-6">
                    <div className="w-24 h-24 rounded-2xl bg-card shadow-card border border-border/50 flex items-center justify-center">
                      <step.icon className="w-10 h-10 text-primary" />
                    </div>
                    <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-gradient-hero flex items-center justify-center">
                      <span className="text-primary-foreground text-sm font-bold">{index + 1}</span>
                    </div>
                  </div>
                  
                  {/* Content */}
                  <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{step.description}</p>
                </div>
              </div>)}
          </div>
        </div>

        {/* Tech Highlight */}
        <div className="mt-20 md:mt-28 max-w-3xl mx-auto">
          <div className="bg-card rounded-2xl p-8 md:p-12 shadow-card border border-border/50 text-center">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Built for <span className="text-gradient">industrial scale</span>
            </h3>
            <p className="text-muted-foreground text-lg mb-8 max-w-xl mx-auto">
              Our system processes thousands of items per hour, designed to handle 
              the volume that modern textile recycling demands.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[{
              value: "24/7",
              label: "Operation"
            }, {
              value: "5k+",
              label: "Items/hour"
            }, {
              value: "99%",
              label: "Uptime"
            }, {
              value: "<1s",
              label: "Per item"
            }].map((stat, index) => <div key={index} className="p-4 rounded-xl bg-muted/50">
                  <div className="text-2xl font-bold text-primary">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </div>)}
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default HowItWorks;