import { useState, useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

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

// Painterly brush stroke backgrounds
const paintBrushStyles = [
  // Olive/green/yellow painterly style
  `
    radial-gradient(ellipse 80% 60% at 20% 30%, hsl(75 45% 45%) 0%, transparent 60%),
    radial-gradient(ellipse 70% 80% at 80% 70%, hsl(55 50% 65%) 0%, transparent 55%),
    radial-gradient(ellipse 90% 70% at 50% 90%, hsl(35 40% 70%) 0%, transparent 50%),
    radial-gradient(ellipse 60% 50% at 10% 80%, hsl(180 25% 35%) 0%, transparent 45%),
    radial-gradient(ellipse 50% 40% at 90% 20%, hsl(85 35% 50%) 0%, transparent 40%),
    linear-gradient(135deg, hsl(80 40% 40%) 0%, hsl(60 45% 55%) 50%, hsl(40 35% 65%) 100%)
  `,
  // Blue/teal/coral painterly style
  `
    radial-gradient(ellipse 70% 60% at 25% 25%, hsl(200 35% 35%) 0%, transparent 55%),
    radial-gradient(ellipse 80% 70% at 75% 65%, hsl(170 40% 50%) 0%, transparent 50%),
    radial-gradient(ellipse 60% 80% at 60% 90%, hsl(25 50% 60%) 0%, transparent 45%),
    radial-gradient(ellipse 50% 50% at 15% 70%, hsl(220 30% 30%) 0%, transparent 40%),
    radial-gradient(ellipse 40% 45% at 85% 30%, hsl(45 45% 65%) 0%, transparent 35%),
    linear-gradient(145deg, hsl(210 35% 35%) 0%, hsl(180 35% 45%) 50%, hsl(30 40% 55%) 100%)
  `,
  // Purple/pink/peach painterly style
  `
    radial-gradient(ellipse 75% 65% at 30% 20%, hsl(280 30% 45%) 0%, transparent 50%),
    radial-gradient(ellipse 65% 75% at 70% 75%, hsl(340 40% 60%) 0%, transparent 55%),
    radial-gradient(ellipse 80% 60% at 50% 85%, hsl(25 45% 75%) 0%, transparent 45%),
    radial-gradient(ellipse 55% 45% at 10% 60%, hsl(260 25% 40%) 0%, transparent 40%),
    radial-gradient(ellipse 45% 50% at 90% 25%, hsl(15 50% 70%) 0%, transparent 35%),
    linear-gradient(155deg, hsl(270 30% 40%) 0%, hsl(330 35% 55%) 50%, hsl(20 40% 70%) 100%)
  `
];

const OurVision = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const scrollRef = useRef<HTMLDivElement>(null);

  const scrollToCard = (index: number) => {
    if (scrollRef.current) {
      const cardWidth = scrollRef.current.offsetWidth;
      scrollRef.current.scrollTo({
        left: index * cardWidth,
        behavior: "smooth"
      });
      setCurrentIndex(index);
    }
  };

  const handlePrev = () => {
    const newIndex = currentIndex > 0 ? currentIndex - 1 : visionCards.length - 1;
    scrollToCard(newIndex);
  };

  const handleNext = () => {
    const newIndex = currentIndex < visionCards.length - 1 ? currentIndex + 1 : 0;
    scrollToCard(newIndex);
  };

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

        {/* Carousel */}
        <div className="relative">
          <div 
            ref={scrollRef} 
            className="flex gap-6 overflow-x-auto snap-x snap-mandatory scrollbar-hide pb-4" 
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {visionCards.map((card, index) => (
              <div 
                key={index} 
                className="flex-shrink-0 w-full md:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] snap-start"
              >
                {/* Painterly brush background */}
                <div className="relative rounded-3xl overflow-hidden aspect-[4/5] md:aspect-[3/4]">
                  {/* Raw painterly gradient background */}
                  <div 
                    className="absolute inset-0" 
                    style={{ background: paintBrushStyles[index] }}
                  />
                  
                  {/* Texture overlay for brush stroke effect */}
                  <div 
                    className="absolute inset-0 opacity-30 mix-blend-overlay"
                    style={{
                      background: `
                        repeating-linear-gradient(
                          ${45 + index * 30}deg,
                          transparent 0px,
                          rgba(255,255,255,0.1) 1px,
                          transparent 2px,
                          transparent 8px
                        ),
                        repeating-linear-gradient(
                          ${-30 + index * 20}deg,
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
                  
                  {/* Content card */}
                  <div className="absolute inset-6 md:inset-8 flex items-center justify-center">
                    <div className="bg-white rounded-2xl p-6 md:p-8 shadow-2xl max-w-sm">
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
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation Arrows */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <button 
              onClick={handlePrev} 
              className="w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
              aria-label="Previous card"
            >
              <ChevronLeft className="w-5 h-5 text-white" />
            </button>
            <div className="flex gap-2">
              {visionCards.map((_, index) => (
                <button 
                  key={index} 
                  onClick={() => scrollToCard(index)} 
                  className={`w-2 h-2 rounded-full transition-colors ${currentIndex === index ? 'bg-white' : 'bg-white/30'}`}
                  aria-label={`Go to card ${index + 1}`}
                />
              ))}
            </div>
            <button 
              onClick={handleNext} 
              className="w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
              aria-label="Next card"
            >
              <ChevronRight className="w-5 h-5 text-white" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurVision;