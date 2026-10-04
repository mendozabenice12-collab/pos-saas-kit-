export default function About() {
  return (
    <section id="about" className="py-20 px-5 bg-sabong-dark">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-sabong-gold text-sm font-semibold tracking-[0.3em] uppercase mb-2">Our Legacy</p>
          <h2 className="font-display text-4xl font-bold text-white">About the Derby</h2>
        </div>

        <div className="space-y-6 text-sabong-cream/80 text-lg leading-relaxed">
          <p>
            The <span className="text-sabong-gold font-semibold">Jap Gagalac Cockfighting Derby</span> returns
            for its fourth edition — bigger, bolder, and more thrilling than ever. Founded to celebrate
            the rich Filipino tradition of <em>sabong</em>, this derby brings together the finest
            breeders, handlers, and gamefowl from across the archipelago.
          </p>
          <p>
            For three years, the Jap Gagalac Derby has been a proving ground for champions. Breeders
            from Luzon, Visayas, and Mindanao converge to test their finest roosters in the pit,
            where skill, bloodline, and heart determine who takes home the crown.
          </p>
          <p>
            This year's 4th edition promises the largest prize pool yet, with over ₱1,000,000 in
            winnings and 128 entries competing across three action-packed days. Whether you're a
            seasoned breeder or a passionate fan, the Jap Gagalac 4th Derby is an event you
            won't want to miss.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-12">
          {[
            { icon: '🏆', title: 'Champion Breeders', text: 'Top gamefowl breeders from across the Philippines' },
            { icon: '🤝', title: 'Fair Competition', text: 'Strict rules and impartial refereeing for every match' },
            { icon: '🎉', title: 'Festival Atmosphere', text: 'Food, music, and camaraderie for the whole community' },
          ].map((f) => (
            <div key={f.title} className="bg-black/40 border border-sabong-gold/20 rounded-2xl p-6 text-center">
              <div className="text-4xl mb-3">{f.icon}</div>
              <h3 className="text-sabong-gold font-semibold text-lg mb-2">{f.title}</h3>
              <p className="text-sabong-cream/60 text-sm">{f.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
