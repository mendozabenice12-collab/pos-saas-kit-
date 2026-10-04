export default function Breeds() {
  const breeds = [
    { name: 'Sweater', origin: 'USA', desc: 'Fast, powerful cutters known for their speed and gameness in the pit.' },
    { name: 'Hatch', origin: 'USA', desc: 'Versatile and aggressive, with deep game and excellent cutting ability.' },
    { name: 'Kelso', origin: 'USA', desc: 'Smart fighters that outthink opponents with precise, calculated strikes.' },
    { name: 'Roundhead', origin: 'USA', desc: 'Athletic and accurate, prized for their high-breaking fighting style.' },
    { name: 'Shamo', origin: 'Japan', desc: 'Tall, upright Japanese breed with devastating power and endurance.' },
    { name: 'Asil', origin: 'India', desc: 'Ancient breed with unmatched stamina and fierce, close-quarters fighting.' },
  ]

  return (
    <section id="breeds" className="py-20 px-5 bg-sabong-dark">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-sabong-gold text-sm font-semibold tracking-[0.3em] uppercase mb-2">Champion Bloodlines</p>
          <h2 className="font-display text-4xl font-bold text-white">Featured Gamefowl Breeds</h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {breeds.map((b) => (
            <div key={b.name} className="bg-black/40 border border-sabong-gold/20 rounded-2xl p-6 hover:border-sabong-red/50 hover:transform hover:-translate-y-1 transition-all duration-300">
              <div className="flex items-center justify-between mb-3">
                <h3 className="font-display text-xl font-bold text-sabong-gold">{b.name}</h3>
                <span className="text-xs bg-sabong-red/20 text-sabong-red border border-sabong-red/30 px-2.5 py-1 rounded-full font-medium">
                  {b.origin}
                </span>
              </div>
              <p className="text-sabong-cream/60 text-sm leading-relaxed">{b.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
