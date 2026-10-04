export default function Schedule() {
  const days = [
    {
      day: 'Day 1',
      date: 'Nov 15, 2026',
      title: 'Opening Round',
      events: [
        { time: '8:00 AM', desc: 'Registration & Weigh-in' },
        { time: '10:00 AM', desc: 'Opening Ceremony & Blessing of Gamefowl' },
        { time: '11:00 AM', desc: 'First Round Matches Begin' },
        { time: '5:00 PM', desc: 'Day 1 Results & Standings' },
      ],
    },
    {
      day: 'Day 2',
      date: 'Nov 16, 2026',
      title: 'Quarter & Semi Finals',
      events: [
        { time: '9:00 AM', desc: 'Quarterfinal Matches' },
        { time: '1:00 PM', desc: 'Lunch Break & Breeder Showcase' },
        { time: '2:30 PM', desc: 'Semifinal Matches' },
        { time: '6:00 PM', desc: 'Finalists Announced' },
      ],
    },
    {
      day: 'Day 3',
      date: 'Nov 17, 2026',
      title: 'Grand Finals',
      events: [
        { time: '10:00 AM', desc: 'Championship Matches' },
        { time: '2:00 PM', desc: 'Grand Finale — Championship Bout' },
        { time: '4:00 PM', desc: 'Awarding Ceremony & Prize Distribution' },
        { time: '6:00 PM', desc: 'Celebration Dinner & Fellowship' },
      ],
    },
  ]

  return (
    <section id="schedule" className="py-20 px-5 bg-black">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-sabong-gold text-sm font-semibold tracking-[0.3em] uppercase mb-2">Three Days of Action</p>
          <h2 className="font-display text-4xl font-bold text-white">Event Schedule</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {days.map((d) => (
            <div key={d.day} className="bg-sabong-dark/60 border border-sabong-gold/20 rounded-2xl overflow-hidden">
              <div className="bg-sabong-red/15 border-b border-sabong-gold/20 px-6 py-4">
                <p className="text-sabong-gold text-xs font-semibold tracking-wider uppercase">{d.day} · {d.date}</p>
                <h3 className="font-display text-xl font-bold text-white mt-1">{d.title}</h3>
              </div>
              <div className="p-6 space-y-4">
                {d.events.map((e, i) => (
                  <div key={i} className="flex gap-3">
                    <div className="flex-shrink-0">
                      <span className="text-sabong-gold text-sm font-semibold">{e.time}</span>
                    </div>
                    <div>
                      <p className="text-sabong-cream/70 text-sm leading-snug">{e.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <p className="text-sabong-cream/50 text-sm mb-4">
            Gates open at 7:00 AM daily. Food and refreshments available on-site.
          </p>
          <a href="#top" className="inline-block border-2 border-sabong-gold text-sabong-gold font-semibold px-8 py-3 rounded-full hover:bg-sabong-gold hover:text-sabong-dark transition-colors">
            Back to Top
          </a>
        </div>
      </div>
    </section>
  )
}
