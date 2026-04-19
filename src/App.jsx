import Nav from './components/Nav'
import Hero from './components/Hero'
import About from './components/About'
import Portfolio from './components/Portfolio'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="min-h-screen bg-paper text-ink grain-overlay">
      <Nav />
      <main>
        <Hero />
        <About />
        <Portfolio />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
