import { useState } from "react";
import { ChevronDown } from "lucide-react";

const missionCards = [
  {
    title: "Enable reuse at scale",
    description: "We make it economically viable for sorting centers to handle more clothes by pre-selecting the valuable pieces, turning what was cost into profit.",
    color: "bg-vision-1",
    icon: (
      // Hands sorting/selecting illustration
      <svg viewBox="0 0 80 80" className="w-16 h-16 md:w-20 md:h-20" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20 55 C15 50, 15 40, 25 35" />
        <path d="M25 35 L30 30 L35 35 L40 28" />
        <rect x="35" y="40" width="20" height="15" rx="2" fill="white" stroke="currentColor" />
        <rect x="38" y="45" width="14" height="8" rx="1" />
        <path d="M60 55 C65 50, 65 40, 55 35" />
        <path d="M55 35 L50 30 L45 35" />
        <circle cx="40" cy="22" r="3" fill="white" />
        <circle cx="52" cy="25" r="2" fill="white" />
      </svg>
    )
  },
  {
    title: "Unlock recycling markets",
    description: "By providing consistent, affordable feedstock in large volumes, we're helping recyclers build sustainable business models for the first time.",
    color: "bg-vision-2",
    icon: (
      // Stacked materials/blocks illustration
      <svg viewBox="0 0 80 80" className="w-16 h-16 md:w-20 md:h-20" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="25" y="50" width="30" height="12" rx="2" fill="white" />
        <rect x="28" y="38" width="24" height="10" rx="2" fill="white" />
        <rect x="31" y="28" width="18" height="8" rx="2" fill="white" />
        <path d="M15 45 C12 42, 14 38, 20 40" />
        <path d="M20 40 L23 37" />
        <path d="M65 45 C68 42, 66 38, 60 40" />
        <path d="M60 40 L57 37" />
        <path d="M40 22 L40 28" />
        <path d="M36 24 L40 20 L44 24" />
      </svg>
    )
  },
  {
    title: "Zero waste potential",
    description: "Every piece of textile that comes through our system finds its highest-value destination. Nothing is wasted, everything is optimized.",
    color: "bg-vision-3",
    icon: (
      // Circular/recycling loop illustration
      <svg viewBox="0 0 80 80" className="w-16 h-16 md:w-20 md:h-20" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="30" y="45" width="20" height="15" rx="2" fill="white" />
        <path d="M35 50 L45 50" />
        <path d="M35 55 L42 55" />
        <path d="M25 40 L25 30 L40 22 L55 30 L55 40" />
        <path d="M22 32 L25 28 L28 32" />
        <path d="M52 32 L55 28 L58 32" />
        <circle cx="40" cy="22" r="4" fill="white" />
        <path d="M40 65 L35 70 L45 70 Z" fill="white" />
      </svg>
    )
  }
];

const OurMission = () => {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const toggleExpand = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <section id="our-mission" className="py-24 md:py-32 relative">
      <div className="container mx-auto px-4 md:px-6">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <span className="text-muted-foreground font-medium text-sm uppercase tracking-wider mb-4 block">Our mission</span>
          <h2 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">Our mission</h2>
        </div>

        {/* Mission Cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {missionCards.map((card, index) => (
            <div 
              key={index} 
              className={`${card.color} rounded-2xl p-8 md:p-10 min-h-[300px] md:min-h-[350px] flex flex-col transition-all duration-300 hover:-translate-y-1`}
            >
              {/* Icon */}
              <div className="text-foreground mb-6">
                {card.icon}
              </div>
              
              {/* Title */}
              <h3 className="text-xl md:text-2xl font-bold text-foreground mb-4">
                {card.title}
              </h3>
              
              {/* See more button */}
              <button 
                onClick={() => toggleExpand(index)}
                className="flex items-center gap-2 text-foreground/70 hover:text-foreground transition-colors mt-auto self-start group"
              >
                <span className="text-sm font-medium">See more</span>
                <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${expandedIndex === index ? 'rotate-180' : ''}`} />
              </button>
              
              {/* Expandable description */}
              <div className={`overflow-hidden transition-all duration-300 ${expandedIndex === index ? 'max-h-40 mt-4 opacity-100' : 'max-h-0 opacity-0'}`}>
                <p className="text-foreground/60 leading-relaxed font-light text-sm">
                  {card.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurMission;
