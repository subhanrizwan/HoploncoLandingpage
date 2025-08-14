"use client"
import Navigation from "./components/Navigation.jsx"
import HeroSection from "./components/HeroSection.jsx"
import HeroSection1 from "./components/HeroSection1.jsx"
// import HeroSection2 from "./components/HeroSection2.jsx"
import AboutSection from "./components/AboutSection.jsx"
import CurvedFooter from "./components/Footer.jsx"
import SkillsSection from "./components/SkillsSection.jsx"
import PortfolioSection from "./components/PortfolioSection.jsx"
import EducationSection from "./components/EducationSection.jsx"
import ResumeSection from "./components/ResumeSection.jsx"
import ContactSection from "./components/ContactSection.jsx"
import CurvedSection from "./components/NewSection.jsx"

function App() {
  return (
      <div className="bg-black text-white min-h-screen">
      <Navigation />
      <HeroSection1 />
      {/* <HeroSection2 /> */}
      <AboutSection />
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