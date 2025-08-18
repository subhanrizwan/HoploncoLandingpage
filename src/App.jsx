"use client"
import Navigation from "./components/Navigation.jsx"
import HeroSection1 from "./components/HeroSection1.jsx"
import CurvedSection from "./components/CurvedSection.jsx"
import MapSection from "./components/MapSection.jsx"
import CurvedFooter from "./components/Footer.jsx"
import BtsSection from "./components/Bts.jsx"
import IndustriesSection from "./components/Industry.jsx"
import FixedSection from "./components/FixedSection.jsx"
import OtherServices from "./components/OtherService.jsx"
import EngageSell from './components/EngageSell.jsx'
import PartnerShip from "./components/Partnership.jsx"
import SocialMediaMarket from "./components/SocialMediaMarket.jsx"
import Technologies from "./components/Technologies.jsx"
import BelowHeroSection from "./components/BelowHeroSection.jsx"
import HeroSection from "./components/HeroSection.jsx"
import DemoHeroSection from './components/DemoHeroSection.jsx'
import IndustriesOriginal from "./components/IndustriesOriginal.jsx"
import MapOriginal from "./components/MapOriginal.jsx"
// import FixButton from "./FixButton.jsx"
import FooterOriginal from "./components/FooterOriginal.jsx"
import OtherServicesOriginal from "./OtherServicesOriginal.jsx"
function App() {
  return (
      <div className="bg-transparent text-white min-h-screen">
        <FixedSection />
        {/* <FixButton /> */}
      <Navigation />
      <HeroSection />
      {/* <DemoHeroSection /> */}
      {/* <HeroSection1 /> */}
      <BelowHeroSection />
      <SocialMediaMarket />
      <Technologies />
      <PartnerShip />
      <EngageSell />
      {/* <OtherServices /> */}
      <OtherServicesOriginal />
      {/* <IndustriesSection /> */}
      <IndustriesOriginal />
      <BtsSection />
      <CurvedSection />
      {/* <MapSection /> */}
      {/* <CurvedFooter /> */}
      <MapOriginal />
      <FooterOriginal />
    </div>
  )
}

export default App