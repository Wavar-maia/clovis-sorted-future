import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const missionCards = [
  {
    title: "Support graders and sorters",
    description: "We make it economically viable for sorting centers to handle more clothes by pre-selecting the valuable pieces, turning what was cost into profit."
  },
  {
    title: "Unlock the supply of recycling feedstock",
    description: "By providing consistent, affordable feedstock in large volumes, we're helping recyclers build sustainable business models for the first time."
  },
  {
    title: "Process 100% of textile waste",
    description: "Every piece of textile that comes through our system finds its highest-value destination. Nothing is wasted, everything is optimized."
  }
];

// Purple/pink/peach painterly style
const paintBrushStyle = `
  radial-gradient(ellipse 75% 65% at 30% 20%, hsl(280 30% 45%) 0%, transparent 50%),
  radial-gradient(ellipse 65% 75% at 70% 75%, hsl(340 40% 60%) 0%, transparent 55%),
  radial-gradient(ellipse 80% 60% at 50% 85%, hsl(25 45% 75%) 0%, transparent 45%),
  radial-gradient(ellipse 55% 45% at 10% 60%, hsl(260 25% 40%) 0%, transparent 40%),
  radial-gradient(ellipse 45% 50% at 90% 25%, hsl(15 50% 70%) 0%, transparent 35%),
  linear-gradient(155deg, hsl(270 30% 40%) 0%, hsl(330 35% 55%) 50%, hsl(20 40% 70%) 100%)
`;

const OurMission = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? missionCards.length - 1 : prev - 1));
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev === missionCards.length - 1 ? 0 : prev + 1));
  };

  return (
    <section id="our-mission" className="py-24 md:py-32 relative bg-[hsl(var(--section-blue))]">
      <div className="container mx-auto px-4 md:px-6">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <span className="text-white/60 font-medium text-sm uppercase tracking-wider mb-4 block">Our mission</span>
          <h2 className="text-3xl md:text-5xl font-semibold mb-6 leading-tight text-white">Our mission</h2>
        </div>

        {/* Stacked Cards Container */}
        <div className="flex justify-center items-center">
          <div className="relative w-full max-w-2xl h-[400px] md:h-[450px]">
            {/* Cards Stack */}
            {missionCards.map((card, index) => {
              const offset = index - currentIndex;
              const isActive = index === currentIndex;
              
              // Calculate transform for stacking effect
              let transform = '';
              let zIndex = missionCards.length - Math.abs(offset);
              let opacity = 1;
              
              if (offset === 0) {
                transform = 'translateX(0) scale(1)';
                zIndex = 10;
              } else if (offset === 1 || offset === -(missionCards.length - 1)) {
                transform = 'translateX(30px) translateY(15px) scale(0.95)';
                zIndex = 5;
                opacity = 0.7;
              } else if (offset === -1 || offset === (missionCards.length - 1)) {
                transform = 'translateX(-30px) translateY(15px) scale(0.95)';
                zIndex = 5;
                opacity = 0.7;
              } else {
                transform = 'translateX(60px) translateY(30px) scale(0.9)';
                zIndex = 1;
                opacity = 0.4;
              }

              return (
                <div
                  key={index}
                  className="absolute inset-0 rounded-3xl overflow-hidden transition-all duration-500 ease-out"
                  style={{
                    background: paintBrushStyle,
                    transform,
                    zIndex,
                    opacity,
                  }}
                >
                  {/* Texture overlay */}
                  <div 
                    className="absolute inset-0 opacity-20 mix-blend-overlay"
                    style={{
                      backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`
                    }}
                  />
                  
                  {/* Content */}
                  <div className="relative z-10 h-full flex flex-col justify-center p-8 md:p-12">
                    <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-8 md:p-10 shadow-lg">
                      <h3 className="text-2xl md:text-3xl font-semibold text-foreground mb-4">
                        {card.title}
                      </h3>
                      <p className="text-foreground/70 text-base md:text-lg leading-relaxed font-light">
                        {card.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Navigation Arrows */}
        <div className="flex justify-center items-center gap-6 mt-8">
          <button
            onClick={goToPrevious}
            className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center hover:bg-white/10 transition-colors"
            aria-label="Previous card"
          >
            <ChevronLeft className="w-5 h-5 text-white" />
          </button>
          
          {/* Dots indicator */}
          <div className="flex gap-2">
            {missionCards.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full transition-colors ${
                  index === currentIndex ? 'bg-white' : 'bg-white/30'
                }`}
                aria-label={`Go to card ${index + 1}`}
              />
            ))}
          </div>
          
          <button
            onClick={goToNext}
            className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center hover:bg-white/10 transition-colors"
            aria-label="Next card"
          >
            <ChevronRight className="w-5 h-5 text-white" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default OurMission;
