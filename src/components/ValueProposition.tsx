import { useEffect, useRef, useState } from "react";
import sortingCenterImg from "@/assets/sorting-center.png";
import recyclingFeedstockImg from "@/assets/recycling-feedstock.jpg";
const ValueProposition = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [sortingVisible, setSortingVisible] = useState(false);
  const [recyclersVisible, setRecyclersVisible] = useState(false);
  const headerRef = useRef<HTMLDivElement>(null);
  const sortingRef = useRef<HTMLDivElement>(null);
  const recyclersRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
      }
    }, {
      threshold: 0.3
    });
    const sortingObserver = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setSortingVisible(true);
      }
    }, {
      threshold: 0.2
    });
    const recyclersObserver = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setRecyclersVisible(true);
      }
    }, {
      threshold: 0.2
    });
    if (headerRef.current) {
      observer.observe(headerRef.current);
    }
    if (sortingRef.current) {
      sortingObserver.observe(sortingRef.current);
    }
    if (recyclersRef.current) {
      recyclersObserver.observe(recyclersRef.current);
    }
    return () => {
      observer.disconnect();
      sortingObserver.disconnect();
      recyclersObserver.disconnect();
    };
  }, []);
  return <section id="what-we-do" className="py-24 md:py-32 relative">
      <div className="container mx-auto px-4 md:px-6">
        {/* Section Header - Centered with fade animation */}
        <div ref={headerRef} className={`max-w-3xl mx-auto text-center mb-24 md:mb-32 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <span className="text-foreground/60 font-medium text-sm uppercase tracking-wider mb-4 block">What we do</span>
          <h2 className="text-3xl md:text-5xl font-semibold mb-6 leading-tight text-foreground">
            Two streams, maximum value
          </h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto font-light">
            We provide sorting centers and recyclers with high quality feedstock for their needs. Building the foundation of a new industry where textile waste is a valuable raw material available at scale.
          </p>
        </div>

        {/* Sorting Centers Section - Always side by side */}
        <div ref={sortingRef} className={`flex flex-row gap-6 sm:gap-8 md:gap-16 lg:gap-24 items-center mb-32 md:mb-40 max-w-5xl mx-auto px-2 sm:px-4 md:px-8 transition-all duration-1000 ${sortingVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="flex-1 min-w-0 pr-2 sm:pr-4 md:pr-8">
            <span className="inline-block px-3 sm:px-4 py-1.5 rounded-full bg-secondary text-foreground text-xs font-medium mb-4 sm:mb-6">Reuse feedstock</span>
            <h3 className="text-xl sm:text-2xl md:text-4xl font-semibold mb-4 sm:mb-6 text-foreground">Sorting centers</h3>
            <p className="text-foreground/70 text-sm sm:text-base md:text-lg leading-relaxed mb-4 sm:mb-6 font-light">
              We produce a high-purity stream of reusable garments—over 90% wearable quality and 10% A grade quality. Traditional sorting centers receive pre-screened clothes worth sorting by hand, significantly boosting their efficiency and margins.
            </p>
            <div className="flex items-center gap-2 sm:gap-3">
              <div className="w-1.5 sm:w-2 h-1.5 sm:h-2 rounded-full bg-foreground" />
              <span className="text-foreground font-medium text-xs sm:text-sm md:text-base">90%+ reuse purity · 10% cream or A grade</span>
            </div>
          </div>
          <div className="flex-shrink-0 w-[30%] sm:w-[35%] md:w-2/5">
            <div className="aspect-[4/3] rounded-xl sm:rounded-2xl overflow-hidden shadow-card">
              <img src={sortingCenterImg} alt="Textile sorting center with workers sorting clothes on conveyor belt" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>

        {/* Recyclers Section - Always side by side */}
        <div ref={recyclersRef} className={`flex flex-row gap-6 sm:gap-8 md:gap-16 lg:gap-24 items-center max-w-5xl mx-auto px-2 sm:px-4 md:px-8 transition-all duration-1000 ${recyclersVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="flex-shrink-0 w-[30%] sm:w-[35%] md:w-2/5">
            <div className="aspect-[4/3] rounded-xl sm:rounded-2xl overflow-hidden shadow-card">
              <img src={recyclingFeedstockImg} alt="Textile recycling feedstock - processed white textile fibers" className="w-full h-full object-cover" />
            </div>
          </div>
          <div className="flex-1 min-w-0 pl-2 sm:pl-4 md:pl-8">
            <span className="inline-block px-3 sm:px-4 py-1.5 rounded-full bg-accent/50 text-foreground text-xs font-medium mb-4 sm:mb-6">
              Recycling feedstock
            </span>
            <h3 className="text-xl sm:text-2xl md:text-4xl font-semibold mb-4 sm:mb-6 text-foreground">Recyclers</h3>
            <p className="text-foreground/70 text-sm sm:text-base md:text-lg leading-relaxed mb-4 sm:mb-6 font-light">
              We produce feedstock for textile-to-textile recycling, mechanical recycling, and other circular applications. We produce large and predictable volumes at constant quality and low costs, making recycling markets finally viable.
            </p>
            <div className="flex items-center gap-2 sm:gap-3">
              <div className="w-1.5 sm:w-2 h-1.5 sm:h-2 rounded-full bg-foreground" />
              <span className="text-foreground font-medium text-xs sm:text-sm md:text-base">Large, predictable, affordable volumes</span>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default ValueProposition;