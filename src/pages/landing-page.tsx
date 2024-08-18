import ExpandYourSkills from "../components/home/expand-your-skills"
import Footer from "../components/home/footer"
import GettingStarted from "../components/home/getting-started"
import HeroSection from "../components/home/hero-section"
import SpecialFeatures from "../components/home/special-features"
import Testimonies from "../components/home/testimonies"
import Navbar from "../components/navbar"

const LandingPage = () => {
  return (
    <div className="w-full">
      <Navbar />
      <HeroSection />
      <img src="/logo-slide.png" className="w-full" />

      <SpecialFeatures />
      <GettingStarted />

      <Testimonies />

      <ExpandYourSkills />

      <Footer />
    </div>
  )
}

export default LandingPage
