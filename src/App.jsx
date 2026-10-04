import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import About from './components/About.jsx'
import EventDetails from './components/EventDetails.jsx'
import Breeds from './components/Breeds.jsx'
import Schedule from './components/Schedule.jsx'
import Footer from './components/Footer.jsx'

export default function App() {
  return (
    <div className="min-h-screen bg-sabong-dark text-sabong-cream font-sans">
      <Navbar />
      <Hero />
      <About />
      <EventDetails />
      <Breeds />
      <Schedule />
      <Footer />
    </div>
  )
}
