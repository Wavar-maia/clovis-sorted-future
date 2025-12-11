const missionCards = [{
  title: "Enable reuse at scale",
  description: "We make it economically viable for sorting centers to handle more clothes by pre-selecting the valuable pieces, turning what was cost into profit.",
  color: "bg-vision-1"
}, {
  title: "Unlock recycling markets",
  description: "By providing consistent, affordable feedstock in large volumes, we're helping recyclers build sustainable business models for the first time.",
  color: "bg-vision-2"
}, {
  title: "Zero waste potential",
  description: "Every piece of textile that comes through our system finds its highest-value destination. Nothing is wasted, everything is optimized.",
  color: "bg-vision-3"
}];
const OurMission = () => {
  return <section id="our-mission" className="py-24 md:py-32 relative">
      <div className="container mx-auto px-4 md:px-6">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <span className="text-muted-foreground font-medium text-sm uppercase tracking-wider mb-4 block">Our mission</span>
          <h2 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">Our mission</h2>
        </div>

        {/* Mission Cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {missionCards.map((card, index) => <div key={index} className={`${card.color} rounded-2xl p-8 md:p-10 min-h-[300px] md:min-h-[350px] flex flex-col justify-end transition-transform hover:-translate-y-1`}>
              <h3 className="text-xl md:text-2xl font-bold text-foreground mb-4">
                {card.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {card.description}
              </p>
            </div>)}
        </div>
      </div>
    </section>;
};
export default OurMission;