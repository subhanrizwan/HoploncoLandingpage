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
// import FixButton from "./FixButton.jsx"
function App() {
  return (
      <div className="bg-transparent text-white min-h-screen">
        <FixedSection />
        {/* <FixButton /> */}
      <Navigation />
      <HeroSection1 />
      <BelowHeroSection />
      <SocialMediaMarket />
      <Technologies />
      <PartnerShip />
      <EngageSell />
      <OtherServices />
      <IndustriesSection />
      <BtsSection />
      <CurvedSection />
      <MapSection />
      <CurvedFooter />
    </div>
  )
}

export default App