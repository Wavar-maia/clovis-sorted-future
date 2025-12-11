import { useState, useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const visionCards = [
  {
    title: "Circularity at scale",
    description: "We believe textile waste isn't waste at all—it's untapped value. By sorting at industrial scale, we're building the infrastructure that makes textile circularity economically viable for the first time.",
  },
  {
    title: "Technology meets tradition",
    description: "Advanced AI and automation don't replace human expertise—they amplify it. We partner with traditional sorting centers to give them the tools they need to thrive in a circular economy.",
  },
  {
    title: "A new raw material",
    description: "Post-consumer textiles are the new cotton, the new polyester. We're creating reliable supply chains that treat recycled materials with the same respect as virgin resources.",
  },
];

const OurVision = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const scrollRef = useRef<HTMLDivElement>(null);

  const scrollToCard = (index: number) => {
    if (scrollRef.current) {
      const cardWidth = scrollRef.current.offsetWidth;
      scrollRef.current.scrollTo({
        left: index * cardWidth,
        behavior: "smooth",
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
    <section id="our-vision" className="py-24 md:py-32 bg-[hsl(220_10%_12%)] text-white relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <span className="text-white/60 font-medium text-sm uppercase tracking-wider mb-4 block">Our vision</span>
          <h2 className="text-3xl md:text-5xl font-bold mb-6 leading-tight text-white">
            Why we do this
          </h2>
          <p className="text-lg text-white/70 max-w-2xl">
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
                {/* Multicolored blur background */}
                <div className="relative rounded-3xl overflow-hidden aspect-[4/5] md:aspect-[3/4]">
                  {/* Gradient background */}
                  <div 
                    className="absolute inset-0"
                    style={{
                      background: index === 0 
                        ? 'linear-gradient(135deg, #4a7c59 0%, #8fbc8f 30%, #f0e68c 60%, #deb887 100%)'
                        : index === 1
                        ? 'linear-gradient(135deg, #2c3e50 0%, #3498db 30%, #1abc9c 60%, #f39c12 100%)'
                        : 'linear-gradient(135deg, #667eea 0%, #764ba2 30%, #f093fb 60%, #f5576c 100%)',
                      filter: 'blur(0px)',
                    }}
                  />
                  {/* Painterly overlay effect */}
                  <div 
                    className="absolute inset-0 opacity-60"
                    style={{
                      background: 'radial-gradient(ellipse at 30% 20%, rgba(255,255,255,0.2) 0%, transparent 50%), radial-gradient(ellipse at 70% 80%, rgba(0,0,0,0.2) 0%, transparent 50%)',
                    }}
                  />
                  {/* Content card */}
                  <div className="absolute inset-6 md:inset-8 flex items-center justify-center">
                    <div className="bg-white rounded-2xl p-6 md:p-8 shadow-2xl max-w-sm">
                      <span className="text-muted-foreground text-sm font-medium mb-2 block">
                        0{index + 1}
                      </span>
                      <h3 className="text-xl md:text-2xl font-bold text-foreground mb-4">
                        {card.title}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed text-sm md:text-base">
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
                  className={`w-2 h-2 rounded-full transition-colors ${
                    currentIndex === index ? 'bg-white' : 'bg-white/30'
                  }`}
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