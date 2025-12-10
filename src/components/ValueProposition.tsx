import { Recycle, Shirt, Zap, TrendingUp } from "lucide-react";
const ValueProposition = () => {
  return <section id="what-we-do" className="py-24 md:py-32 relative">
      <div className="container mx-auto px-4 md:px-6">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-24">
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">What we do</span>
          <h2 className="text-3xl md:text-5xl font-bold mt-4 mb-6">
            Two streams, maximum value
          </h2>
          <p className="text-lg text-muted-foreground">We provide sorting centers and recyclers with high quality feedstock for their needs. Building the foundation of a new industry where textile waste is a valuable raw material available at scale</p>
        </div>

        {/* Two Fractions */}
        <div className="grid md:grid-cols-2 gap-6 md:gap-10 max-w-5xl mx-auto">
          {/* Fraction 1: Reuse */}
          <div className="group relative">
            <div className="absolute inset-0 bg-gradient-hero rounded-2xl opacity-0 group-hover:opacity-10 transition-opacity duration-500" />
            <div className="relative bg-card rounded-2xl p-8 md:p-10 shadow-card border border-border/50 h-full transition-all duration-300 hover:shadow-glow hover:-translate-y-1">
              <div className="w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                <Shirt className="w-8 h-8 text-primary" />
              </div>
              <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold mb-4">Reuse fraction</span>
              <h3 className="text-2xl font-bold mb-4">Sorting centers</h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">We produce a high-purity stream of reusable garments—over 90% wearable quality and 10% A grade quality. Traditional sorting centers receive pre-screened clothes worth sorting by hand, significantly boosting their efficiency and margins.</p>
              <div className="flex items-center gap-2 text-primary font-medium">
                <TrendingUp className="w-5 h-5" />
                <span>90%+ reuse purity 1
0% cream or A grade</span>
              </div>
            </div>
          </div>

          {/* Fraction 2: Recycling */}
          <div className="group relative">
            <div className="absolute inset-0 bg-gradient-accent rounded-2xl opacity-0 group-hover:opacity-10 transition-opacity duration-500" />
            <div className="relative bg-card rounded-2xl p-8 md:p-10 shadow-card border border-border/50 h-full transition-all duration-300 hover:shadow-glow hover:-translate-y-1">
              <div className="w-16 h-16 rounded-xl bg-secondary/10 flex items-center justify-center mb-6">
                <Recycle className="w-8 h-8 text-secondary" />
              </div>
              <span className="inline-block px-3 py-1 rounded-full bg-secondary/10 text-secondary text-xs font-semibold mb-4">Recycling feedstock</span>
              <h3 className="text-2xl font-bold mb-4">Recyclers</h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">We produce feedstock for textile-to-textile recycling, mechanical recycling, and other circular applications.  
We produce large and predictable volumes at constant quality and low costs, making recycling markets finally viable.

            </p>
              <div className="flex items-center gap-2 text-secondary font-medium">
                <Zap className="w-5 h-5" />
                <span>Large, predictable, affordable volumes</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Message */}
        <div className="mt-16 md:mt-24 text-center">
          <div className="inline-flex items-center gap-3 px-6 py-4 rounded-2xl bg-muted/50 border border-border/50">
            <div className="w-2 h-2 rounded-full bg-accent animate-pulse" />
            <span className="text-muted-foreground">We adapt our production to every order, depending on quality / quantity / items requested<strong className="text-foreground">zero wasted potential</strong> in every textile batch.
            </span>
          </div>
        </div>
      </div>
    </section>;
};
export default ValueProposition;