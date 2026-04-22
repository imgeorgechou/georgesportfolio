import TopMarquee from '../components/TopMarquee'
import Nav from '../components/Nav'
import Hero from '../components/Hero'
import FeaturedCarousel from '../components/FeaturedCarousel'
import About from '../components/About'
import Portfolio from '../components/Portfolio'
import Contact from '../components/Contact'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <>
      <TopMarquee />
      <Nav />
      <main>
        <Hero />
        <FeaturedCarousel />
        <About />
        <Portfolio />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
