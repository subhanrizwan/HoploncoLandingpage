import { Button } from "@mui/material";
import HeadingCurve from "../assets/images/herosection/HOPLON & CO.png";
import Shad from "../assets/images/curveShadow/shadow.svg";
import FirstAnimatedButton from './AnimatedBtn1';
import Logo from "../assets/images//herobelow/logo-20.png";
import SecondAnimatedButton from './AnimatedBtn2';

export default function BelowHeroSection() {
  const topRowLogos = [
    { name: "LifeBuoy"},
    { name: "EMAAR"},
    { name: "Unilever" },
    { name: "du" },
    { name: "Arabic Brand"},
    { name: "Hutchison Ports"},
    { name: "Marina"},
  ];

  const bottomRowLogos = [
    { name: "Gitex Global"},
    { name: "LG"},
    { name: "Hisense"},
    { name: "Ramada"},
    { name: "Al Majid Exchange"},
    { name: "Marriott"},
  ];

  return (
    <>
      <div class="h-60 relative w-full aspect-[16/9] bg-black">
        <img
          src={Shad}
          alt=""
          class="absolute md:-top-40 top-10 xl:-top-56 w-full z-0 pointer-events-none "
          style={{
            objectFit: "cover",
          }}
        />
      </div>
      <section className=" bg-gray-700 border-none overflow-hidden pt-6">
        {/* Content */}
        <div className=" pt-12 pb-12 border-none overflow ">
          <div className="container mx-auto max-w-8xl">
            {/* Header */}
            
            <div className="text-center p-5 pt-0">   
              <button className="text-[#989898] w-[280px] lg:w-[348px] text-[14px] border-[1.5px] p-2 m-4 mb-10 px-md-8 border-dashed rounded-full">
                Trusted by Industry & Leaders Worldwide
              </button>

              <h1 className="text-4xl md:text-5xl lg:text-7xl/[90px] font-bold font-epilogue mb-6 text-black max-w-[1100px] mx-auto leading-tight">
                Grateful for the Partnership
                <br />
                with Our Esteemed Client
              </h1>
              <p class="text-[#888888] text-[20px] !font-[300] max-w-3xl mx-auto leading-relaxed">We are proud to partner with a valued client whose trust and collaboration drive us to deliver excellence. Their vision and commitment inspire us to continuously improve and provide top-quality solutions.</p>
            </div>

            {/* Logo Scrollers */}
            <div className="max-w-8xl mx-auto mb-16 p-12 px-0 pb-0">
              <div className="w-full overflow-hidden mb-8">
                <div className="flex animate-scroll-left whitespace-nowrap gap-3">
                  {[...topRowLogos, ...topRowLogos].map(
                    (company, index) => (
                      <button
                        key={index}
                        className="shrink-0 px-8 py-2 rounded-full bg-gray-200 border border-[#F5F5F5] flex items-center justify-center w-40 md:w-48"
                      >
                        <img
                          src={Logo || "/placeholder.svg"}
                          alt={company.name}
                        />
                      </button>
                    )
                  )}
                </div>
              </div>

              <div className="w-full overflow-hidden mb-12">
                <div className="flex animate-scroll-right whitespace-nowrap gap-3">
                  {[
                    ...bottomRowLogos,
                    ...bottomRowLogos,
                  ].map((company, index) => (
                    <button
                      key={index}
                        className="shrink-0 px-8 py-2 rounded-full bg-gray-200 border border-[#F5F5F5] flex items-center justify-center w-40 md:w-48"
                    >
                      <img
                        src={Logo || "/placeholder.svg"}
                        alt={company.name}
                      />
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:space-x-4 w-full sm:w-auto">
              <FirstAnimatedButton />
              <SecondAnimatedButton />

            </div>
          </div>
        </div>
      </section>
    </>
  );
}
