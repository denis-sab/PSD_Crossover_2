import AboutUs from "../components/AboutUs"
import Newsletter from "../components/Newsletter"
import Hero from "../components/Hero"
import Foursection from "../components/foursection"

function Home() {
  return (
    <>
    <div>
      <Hero/>
      <Foursection/>
      <Newsletter />
      <AboutUs/>
    </div>
    </>
  )
}

export default Home