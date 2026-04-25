import TopMarquee from '../components/TopMarquee'
import Nav from '../components/Nav'
import Hero from '../components/Hero'
import About from '../components/About'
import Contact from '../components/Contact'
import Footer from '../components/Footer'

export default function AboutPage() {
  return (
    <>
      <TopMarquee />
      <Nav />
      <main>
        <Hero />
        <About />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
