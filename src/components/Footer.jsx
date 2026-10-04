export default function Footer() {
  return (
    <footer className="bg-sabong-dark border-t border-sabong-gold/20 py-12 px-5">
      <div className="max-w-5xl mx-auto text-center">
        <div className="text-4xl mb-3">🐓</div>
        <h3 className="font-display text-2xl font-bold text-sabong-gold mb-2">Jap Gagalac 4th Derby</h3>
        <p className="text-sabong-cream/50 text-sm mb-6">
          Celebrating the Filipino tradition of sabong — where champions are made.
        </p>

        <div className="flex justify-center gap-6 mb-6">
          <a href="#about" className="text-sabong-cream/60 hover:text-sabong-gold text-sm transition-colors">About</a>
          <a href="#event" className="text-sabong-cream/60 hover:text-sabong-gold text-sm transition-colors">Event</a>
          <a href="#breeds" className="text-sabong-cream/60 hover:text-sabong-gold text-sm transition-colors">Breeds</a>
          <a href="#schedule" className="text-sabong-cream/60 hover:text-sabong-gold text-sm transition-colors">Schedule</a>
        </div>

        <div className="border-t border-sabong-gold/10 pt-6">
          <p className="text-sabong-cream/40 text-xs">
            © 2026 Jap Gagalac Cockfighting Derby · Tarlac City, Philippines
          </p>
          <p className="text-sabong-cream/30 text-xs mt-2">
            This event is conducted in compliance with Philippine cockfighting regulations.
          </p>
        </div>
      </div>
    </footer>
  )
}
