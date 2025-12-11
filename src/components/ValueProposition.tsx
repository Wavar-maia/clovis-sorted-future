const ValueProposition = () => {
  return <section id="what-we-do" className="py-24 md:py-32 relative">
      <div className="container mx-auto px-4 md:px-6">
        {/* Section Header */}
        <div className="max-w-3xl mb-24 md:mb-32">
          <span className="text-muted-foreground font-medium text-sm uppercase tracking-wider mb-4 block">What we do</span>
          <h2 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
            Two streams, maximum value
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl">
            We provide sorting centers and recyclers with high quality feedstock for their needs. Building the foundation of a new industry where textile waste is a valuable raw material available at scale.
          </p>
        </div>

        {/* Sorting Centers Section */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center mb-32 md:mb-40">
          <div className="order-2 lg:order-1">
            <span className="inline-block px-4 py-1.5 rounded-full bg-secondary text-secondary-foreground text-xs font-semibold mb-6">
              Reuse fraction
            </span>
            <h3 className="text-2xl md:text-4xl font-bold mb-6">Sorting centers</h3>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              We produce a high-purity stream of reusable garments—over 90% wearable quality and 10% A grade quality. Traditional sorting centers receive pre-screened clothes worth sorting by hand, significantly boosting their efficiency and margins.
            </p>
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 rounded-full bg-foreground" />
              <span className="text-foreground font-medium">90%+ reuse purity · 
10% cream or A grade</span>
            </div>
          </div>
          <div className="order-1 lg:order-2">
            
          </div>
        </div>

        {/* Recyclers Section */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div>
            
          </div>
          <div>
            <span className="inline-block px-4 py-1.5 rounded-full bg-accent text-accent-foreground text-xs font-semibold mb-6">
              Recycling feedstock
            </span>
            <h3 className="text-2xl md:text-4xl font-bold mb-6">Recyclers</h3>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              We produce feedstock for textile-to-textile recycling, mechanical recycling, and other circular applications. We produce large and predictable volumes at constant quality and low costs, making recycling markets finally viable.
            </p>
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 rounded-full bg-foreground" />
              <span className="text-foreground font-medium">Large, predictable, affordable volumes</span>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default ValueProposition;