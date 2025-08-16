import { Button } from "@mui/material"; 
import HeadingCurve from '../assets/images/herosection/HOPLON & CO.png'
import Logo from '../assets/images//herobelow/logo-20.png';
import Shad from '../assets/images/curveShadow/shadow.svg'
export default function BelowHeroSection() {
  const topRowLogos = [
    { name: "LifeBuoy", logo: "/lifebuoy-logo.png" },
    { name: "EMAAR", logo: "/emaar-logo.png" },
    { name: "Unilever", logo: "/generic-corporate-logo.png" },
    { name: "du", logo: "/du-telecom-logo.png" },
    { name: "Arabic Brand", logo: "/arabic-brand-logo.png" },
    { name: "Hutchison Ports", logo: "/hutchison-ports-logo.png" },
    { name: "Marina", logo: "/marina-logo.png" },
  ];

  const bottomRowLogos = [
    { name: "Gitex Global", logo: "/gitex-global-logo.png" },
    { name: "LG", logo: "/lg-logo.png" },
    { name: "Hisense", logo: "/hisense-logo.png" },
    { name: "Ramada", logo: "/generic-hotel-logo.png" },
    { name: "Al Majid Exchange", logo: "/al-majid-exchange-logo.png" },
    { name: "Marriott", logo: "/marriott-hotel-logo.png" },
  ];

  return (
    
    <>
     <div class="h-40 md:h-36 lg:h-60 xl:h-80 sm:mb-0 mb-0 relative w-full aspect-[16/9] bg-black">
      <img src={Shad} alt="" class="absolute md:-top-40 top-10 w-full h-auto z-0 pointer-events-none" style={{
        objectFit:'cover',
      }}/>
      </div>
    <section className="relative bg-gray-100 border-none overflow-hidden mt-0 mb-0 pb-0 ">
      {/* Content */}
     
      <div
        className=" relative sm:pt-0 pt-20 pb-12 border-none px-4 bg-white"
       
      >
     
        <div className="container mx-auto text-center max-w-5xl p-6">
          {/* Header */}
          <div className="mb-16 ">
             <button className="border-2 border-dashed border-black text-black px-4 py-2 rounded-full text-sm mb-8  transition-colors">
              We provide quality services
            </button>

            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 text-black max-w-4xl mx-auto leading-tight">
              Grateful for the Partnership
              <br />
              with Our Esteemed Client
            </h1>

            <p className="text-black hidden text-sm max-w-2xl mx-auto leading-relaxed">
              We are proud to partner with a valued client whose trust and
              collaboration drive us to deliver excellence. Their vision and
              commitment inspire us to continuously improve and provide
              top-quality solutions.
            </p>
          </div>

          {/* Logo Scrollers */}
<div className="relative max-w-6xl mx-auto mb-16">
  {/* Top Row Logos - Left to Right */}
  <div className="w-full overflow-hidden mb-8">
    <div className="flex animate-scroll-left whitespace-nowrap">
      {[...topRowLogos, ...topRowLogos, ...topRowLogos].map(
        (company, index) => (
          <button
            key={index}
            className="flex-shrink-0 mx-3 md:mx-4 bg-gray-200 hover:bg-gray-300 rounded-full px-6 py-1 transition-all duration-300 hover:shadow-md"
          >
            <img
              src={Logo || "/placeholder.svg"}
              alt={company.name}
              className="h-8 md:h-10 w-auto object-contain"
            />
          </button>
        )
      )}
    </div>
  </div>

  {/* Bottom Row Logos - Right to Left */}
  <div className="w-full overflow-hidden mb-12">
    <div className="flex animate-scroll-right whitespace-nowrap">
      {[...bottomRowLogos, ...bottomRowLogos, ...bottomRowLogos].map(
        (company, index) => (
          <button
            key={index}
            className="flex-shrink-0 mx-3 md:mx-4 bg-gray-200 hover:bg-gray-300 rounded-full px-6 py-1 transition-all duration-300 hover:shadow-md"
          >
            <img
              src={Logo || "/placeholder.svg"}
              alt={company.name}
              className="h-8 md:h-10 w-auto object-contain"
            />
          </button>
        )
      )}
    </div>
  </div>
</div>


          {/* Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:space-x-4 w-full sm:w-auto">
            <Button
              variant="contained"
              sx={{
                backgroundColor: "#000",
                color: "#fff",
                borderRadius: "25px",
                padding: "12px 24px",
                textTransform: "none",
                fontSize: "14px",
                fontWeight: 500,
                width: "100%", // full width on mobile
                maxWidth: "200px", // limit size
                "&:hover": {
                  backgroundColor: "#333",
                },
              }}
            >
              Talk To Our Expert
            </Button>

            <Button
              variant="outlined"
              sx={{
                borderColor: "#000",
                color: "#000",
                borderRadius: "25px",
                padding: "12px 24px",
                textTransform: "none",
                fontSize: "14px",
                fontWeight: 500,
                width: "100%", // full width on mobile
                maxWidth: "200px",
                "&:hover": {
                  borderColor: "#333",
                  backgroundColor: "rgba(0,0,0,0.04)",
                },
              }}
            >
              Get a Quote
            </Button>
      
          </div>
        </div>
      </div>
    </section>
    </>
  );
}
