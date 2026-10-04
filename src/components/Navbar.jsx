import { useState, useEffect } from 'react'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const links = [
    { label: 'About', href: '#about' },
    { label: 'Event', href: '#event' },
    { label: 'Breeds', href: '#breeds' },
    { label: 'Schedule', href: '#schedule' },
    { label: 'Register', href: '#register' },
  ]

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-sabong-dark/95 backdrop-blur shadow-lg' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-5 py-4 flex items-center justify-between">
        <a href="#top" className="flex items-center gap-2">
          <span className="text-2xl">🐓</span>
          <span className="font-display text-lg font-bold text-sabong-gold tracking-wide">
            JAP GAGALAC
          </span>
        </a>

        <div className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="text-sm font-medium text-sabong-cream/80 hover:text-sabong-gold transition-colors">
              {l.label}
            </a>
          ))}
          <a href="#register" className="bg-sabong-red text-white text-sm font-semibold px-5 py-2 rounded-full hover:bg-red-700 transition-colors">
            Register Now
          </a>
        </div>

        <button className="md:hidden text-sabong-cream text-2xl" onClick={() => setOpen(!open)} aria-label="Menu">
          {open ? '✕' : '☰'}
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-sabong-dark/98 backdrop-blur border-t border-sabong-gold/20">
          <div className="flex flex-col px-5 py-4 gap-4">
            {links.map((l) => (
              <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="text-base font-medium text-sabong-cream/80 hover:text-sabong-gold transition-colors">
                {l.label}
              </a>
            ))}
            <a href="#register" onClick={() => setOpen(false)} className="bg-sabong-red text-white text-center text-sm font-semibold px-5 py-2.5 rounded-full">
              Register Now
            </a>
          </div>
        </div>
      )}
    </nav>
  )
}
