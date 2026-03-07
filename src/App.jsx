import { useState } from 'react'
import HeroSection from "./components/HeroSection";
import BenefitsSection from "./components/BenefitsSection";
import AboutSection from "./components/AboutSection";
import ServicesSection from "./components/ServicesSection";
import PricingSection from './components/PricingSection';
import ProjectCarousel from './components/ProjectCarousel';
import ContactPage from './components/ContactPage';
import Footer from './components/Footer';
import FloatingContact from "./components/FloatingContact";



function App() {

  return (
    <>
    <HeroSection />
    <BenefitsSection />
    <AboutSection />
    <ServicesSection />
    <PricingSection/>
    <ProjectCarousel />
    <ContactPage/>
    <Footer/>

      <FloatingContact />


    </>
  )
}

export default App
