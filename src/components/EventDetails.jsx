export default function EventDetails() {
  const details = [
    { label: 'Date', value: 'November 15–17, 2026', icon: '📅' },
    { label: 'Venue', value: 'Jap Gagalac Sports Arena, Tarlac City', icon: '📍' },
    { label: 'Format', value: '3-Cock Derby, Single Elimination', icon: '⚔️' },
    { label: 'Entry Fee', value: '₱5,500 per entry', icon: '💳' },
    { label: 'Min. Weight', value: '1.8 kg – 2.2 kg', icon: '⚖️' },
    { label: 'Registration Deadline', value: 'November 10, 2026', icon: '⏰' },
  ]

  return (
    <section id="event" className="py-20 px-5 bg-black">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-sabong-gold text-sm font-semibold tracking-[0.3em] uppercase mb-2">The Essentials</p>
          <h2 className="font-display text-4xl font-bold text-white">Event Details</h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {details.map((d) => (
            <div key={d.label} className="bg-sabong-dark/60 border border-sabong-gold/20 rounded-2xl p-6 hover:border-sabong-gold/50 transition-colors">
              <div className="text-3xl mb-3">{d.icon}</div>
              <p className="text-sabong-cream/50 text-xs uppercase tracking-wider mb-1">{d.label}</p>
              <p className="text-white font-semibold text-lg">{d.value}</p>
            </div>
          ))}
        </div>

        <div className="mt-10 bg-gradient-to-r from-sabong-red/20 to-sabong-gold/10 border border-sabong-gold/30 rounded-3xl p-8 text-center">
          <h3 className="font-display text-2xl font-bold text-sabong-gold mb-3">Grand Prize: ₱500,000</h3>
          <p className="text-sabong-cream/70 mb-6">
            Plus consolation prizes for runners-up and daily high-scoring handlers.
            Total prize pool exceeds ₱1,000,000.
          </p>
          <a href="#schedule" className="inline-block bg-sabong-red text-white font-semibold px-8 py-3 rounded-full hover:bg-red-700 transition-colors">
            Register Your Entry
          </a>
        </div>
      </div>
    </section>
  )
}
