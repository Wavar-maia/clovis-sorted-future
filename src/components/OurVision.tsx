const visionCards = [
  {
    title: "Circularity at scale",
    description: "We believe textile waste isn't waste at all—it's untapped value. By sorting at industrial scale, we're building the infrastructure that makes textile circularity economically viable for the first time."
  },
  {
    title: "Technology meets tradition",
    description: "Advanced AI and automation don't replace human expertise—they amplify it. We partner with traditional sorting centers to give them the tools they need to thrive in a circular economy."
  },
  {
    title: "A new raw material",
    description: "Post-consumer textiles are the new cotton, the new polyester. We're creating reliable supply chains that treat recycled materials with the same respect as virgin resources."
  }
];

// Purple/pink/peach painterly style (the rightmost one)
const paintBrushStyle = `
  radial-gradient(ellipse 75% 65% at 30% 20%, hsl(280 30% 45%) 0%, transparent 50%),
  radial-gradient(ellipse 65% 75% at 70% 75%, hsl(340 40% 60%) 0%, transparent 55%),
  radial-gradient(ellipse 80% 60% at 50% 85%, hsl(25 45% 75%) 0%, transparent 45%),
  radial-gradient(ellipse 55% 45% at 10% 60%, hsl(260 25% 40%) 0%, transparent 40%),
  radial-gradient(ellipse 45% 50% at 90% 25%, hsl(15 50% 70%) 0%, transparent 35%),
  linear-gradient(155deg, hsl(270 30% 40%) 0%, hsl(330 35% 55%) 50%, hsl(20 40% 70%) 100%)
`;

const OurVision = () => {
  return (
    <section id="our-vision" className="py-24 md:py-32 bg-[hsl(220_8%_14%)] text-white relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <span className="text-white/50 font-medium text-sm uppercase tracking-wider mb-4 block">WHY WE DO IT</span>
          <h2 className="text-3xl md:text-5xl font-semibold mb-6 leading-tight text-white">Our vision</h2>
          <p className="text-lg text-white/60 max-w-2xl font-light">
            Textile waste is a plague. But once properly sorted, it becomes a high value resource that powers several industries.
          </p>
        </div>

        {/* Single Painterly Box with 3 Text Cards */}
        <div className="relative rounded-3xl overflow-hidden">
          {/* Raw painterly gradient background */}
          <div 
            className="absolute inset-0" 
            style={{ background: paintBrushStyle }}
          />
          
          {/* Texture overlay for brush stroke effect */}
          <div 
            className="absolute inset-0 opacity-30 mix-blend-overlay"
            style={{
              background: `
                repeating-linear-gradient(
                  75deg,
                  transparent 0px,
                  rgba(255,255,255,0.1) 1px,
                  transparent 2px,
                  transparent 8px
                ),
                repeating-linear-gradient(
                  -10deg,
                  transparent 0px,
                  rgba(0,0,0,0.05) 1px,
                  transparent 3px,
                  transparent 12px
                )
              `
            }}
          />
          
          {/* Soft light spots for depth */}
          <div 
            className="absolute inset-0 opacity-40"
            style={{
              background: `
                radial-gradient(circle at 30% 20%, rgba(255,255,255,0.15) 0%, transparent 30%),
                radial-gradient(circle at 70% 80%, rgba(0,0,0,0.1) 0%, transparent 35%)
              `
            }}
          />
          
          {/* Content - 3 cards inside */}
          <div className="relative p-8 md:p-12 lg:p-16">
            <div className="grid md:grid-cols-3 gap-6">
              {visionCards.map((card, index) => (
                <div 
                  key={index} 
                  className="bg-white rounded-2xl p-6 md:p-8 shadow-2xl"
                >
                  <span className="text-foreground/50 text-sm font-medium mb-2 block">
                    0{index + 1}
                  </span>
                  <h3 className="text-xl md:text-2xl font-semibold text-foreground mb-4">
                    {card.title}
                  </h3>
                  <p className="text-foreground/70 leading-relaxed text-sm md:text-base font-light">
                    {card.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurVision;
