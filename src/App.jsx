import "./app.css"
import Navbar from "./component/navbar"
import HeroScetion from "./component/HeroSection"
import BenefitsSection from "./component/BenefitsSection"
import AboutSection from "./component/AboutSection"
import ServicesSection from "./component/ServicesSection"
import PricingSection from "./component/PricingSection"
import ProjectCarousel from "./component/ProjectCarousel"
import ContactPage from "./component/ContactPage"
import Footer from "./component/Footer"
import FloatingContact from "./component/FloatingContact"
import ReviewSection from "./component/ReviewSection"
import FAQSection from "./component/FAQSection"
import ContactPopup from "./component/ContactPopup"
function app(){
  return(
      <>
      <div  id="home" className="hero-section-container">
        <Navbar />
        <ContactPopup />
        <HeroScetion />
      </div>
              <BenefitsSection />
        <AboutSection />
        <ServicesSection />
        <PricingSection/>
        < ProjectCarousel />
          <ReviewSection />
           <FAQSection />
       <ContactPage/>
       <Footer/>
      <FloatingContact />
  
      </>
  )
}

export default app;