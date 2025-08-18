import React from 'react'
import { Button } from "@mui/material";
import HeadingCurve from "../assets/images/herosection/HOPLON & CO.png";
import Shad from "../assets/images/curveShadow/shadow.svg";
import FirstAnimatedButton from './AnimatedBtn1';
import Logo from "../assets/images//herobelow/logo-20.png";
import SecondAnimatedButton from './AnimatedBtn2';

function HeroBelowOriginal() {
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
    <div className="max-w-[2080px] mx-auto -mt-36 md:-mt-80">
  <div className="h-52 md:h-96 lg:h-[450px] relative w-full aspect-[16/9]">
    <img
      alt=""
      className="absolute md:-top-100 w-full h-auto z-0 pointer-events-none"
      src={Shad}
      style={{
        objectFit: "cover",
      }}
    />
  </div>
  <div className="relative z-10 mt-0">
    <section className="bg-white flex flex-col items-center justify-center px-6 my-6">
      <div className="my-4 lg:pt-8">
        <span className="text-[#989898] md:text-[14px] text-[10px] border-[1.2px] p-3 m-4 px-md-8 border-dashed rounded-full">
          Trusted by Industry & Leaders Worldwide
        </span>
      </div>
      <h1 className="font-[700] text-3xl text-black md:text-5xl max-w-[1100px] text-center leading-tight my-6">
        Grateful for the Partnership with Our Esteemed Client
      </h1>
      <h2 className="text-[#888888] text-center max-w-[800px] font-[300] text-[20px]">
        We are proud to partner with a valued client whose trust and
        collaboration drive us to deliver excellence. Their vision and
        commitment inspire us to continuously improve and provide top-quality
        solutions.
      </h2>
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
        <div className="hidden md:flex space-x-2 text-black font-medium my-10">
          <FirstAnimatedButton />
          <SecondAnimatedButton />
         
        </div>
    </section>
  </div>
</div>
    </>
  )
}

export default HeroBelowOriginal