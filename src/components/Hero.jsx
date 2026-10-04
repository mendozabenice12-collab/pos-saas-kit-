export default function Hero() {
  return (
    <section id="top" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-sabong-dark to-black" />
      <div className="absolute inset-0 opacity-20" style={{
        backgroundImage: 'radial-gradient(circle at 50% 40%, #c8102e 0%, transparent 60%)',
      }} />

      {/* Decorative pattern */}
      <div className="absolute inset-0 opacity-5" style={{
        backgroundImage: 'repeating-linear-gradient(45deg, #d4af37 0, #d4af37 1px, transparent 1px, transparent 20px)',
      }} />

      <div className="relative z-10 text-center px-5 max-w-3xl mx-auto">
        <div className="text-6xl mb-4">🐓</div>
        <p className="text-sabong-gold text-sm font-semibold tracking-[0.3em] uppercase mb-3">
          4th Annual Derby
        </p>
        <h1 className="font-display text-5xl md:text-7xl font-bold text-white mb-4 leading-tight">
          Jap Gagalac
          <span className="block text-sabong-red">Cockfighting Derby</span>
        </h1>
        <p className="text-sabong-cream/70 text-lg md:text-xl mb-8 max-w-xl mx-auto">
          The Philippines' premier gamefowl competition. Where champions are bred, battles are fought, and legends are born.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="#event" className="bg-sabong-red text-white font-semibold px-8 py-3.5 rounded-full hover:bg-red-700 transition-colors text-lg">
            View Event Details
          </a>
          <a href="#schedule" className="border-2 border-sabong-gold text-sabong-gold font-semibold px-8 py-3.5 rounded-full hover:bg-sabong-gold hover:text-sabong-dark transition-colors text-lg">
            See Schedule
          </a>
        </div>

        <div className="mt-12 flex justify-center gap-8 text-center">
          <div>
            <div className="text-3xl font-bold text-sabong-gold">₱1M+</div>
            <div className="text-xs text-sabong-cream/60 uppercase tracking-wider">Prize Pool</div>
          </div>
          <div className="border-l border-sabong-gold/30" />
          <div>
            <div className="text-3xl font-bold text-sabong-gold">128</div>
            <div className="text-xs text-sabong-cream/60 uppercase tracking-wider">Entries</div>
          </div>
          <div className="border-l border-sabong-gold/30" />
          <div>
            <div className="text-3xl font-bold text-sabong-gold">3</div>
            <div className="text-xs text-sabong-cream/60 uppercase tracking-wider">Days</div>
          </div>
        </div>
      </div>
    </section>
  )
}
