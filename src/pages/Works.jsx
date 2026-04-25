import TopMarquee from '../components/TopMarquee'
import Nav from '../components/Nav'
import FeaturedCarousel from '../components/FeaturedCarousel'
import Portfolio from '../components/Portfolio'
import Footer from '../components/Footer'

export default function Works() {
  return (
    <>
      <TopMarquee />
      <Nav />
      <main>
        <FeaturedCarousel />
        <Portfolio />
      </main>
      <Footer />
    </>
  )
}
