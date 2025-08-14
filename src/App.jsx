"use client"
import Navigation from "./components/Navigation.jsx"
import HeroSection from "./components/HeroSection.jsx"
import HeroSection1 from "./components/HeroSection1.jsx"
// import HeroSection2 from "./components/HeroSection2.jsx"
import AboutSection from "./components/AboutSection.jsx"
import CurvedSection from "./components/CurvedSection.jsx"
import MapSection from "./components/MapSection.jsx"
import CurvedFooter from "./components/Footer.jsx"
import SkillsSection from "./components/SkillsSection.jsx"
import PortfolioSection from "./components/PortfolioSection.jsx"
import EducationSection from "./components/EducationSection.jsx"
import ResumeSection from "./components/ResumeSection.jsx"
import ContactSection from "./components/ContactSection.jsx"
import BtsSection from "./components/Bts.jsx"
function App() {
  return (
      <div className="bg-transparent text-white min-h-screen">
      <Navigation />
      <HeroSection1 />
      <BtsSection />
      <CurvedSection />
      <MapSection />
      {/* <AboutSection /> */}
      {/* <SkillsSection /> */}
      {/* <PortfolioSection /> */}
      {/* <ResumeSection /> */}
      {/* <EducationSection /> */}
      {/* <CurvedSection /> */}
      {/* <ContactSection /> */}
      <CurvedFooter />
    </div>
  )
}

export default App