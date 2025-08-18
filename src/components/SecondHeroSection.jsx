import React from 'react'
import Monster from "../assets/images/herosection/monster.png";
import Roads from "../assets/images/herosection/roads.png";

function SecondHeroSection() {
  return (
    <>
    <section className="relative bg-black text-white md:min-h-screen  items-center justify-center overflow-hidden">
  <div className="relative z-10 flex flex-col md:flex-row justify-between w-full max-w-8xl mt-10 gap-2">
    <div className="absolute z-0 top-1/5 text-center w-full -mt-0 hidden md:block">
      <h1 className="text-4xl md:text-7xl/[80px] lg:text-9xl/[111px] font-bold scale-[0.95]">
        Best Website
        <span className="text-primary"> Design</span>
        <br />
        <span className="text-primary">& Development</span> <br />
        Agency in Dubai, UAE
      </h1>
    </div>
    {/* <div className="absolute max-w-md text-left leading-tight w-full top-160 left-30 text-[22px] hidden md:block">
      <p>
        Looking for Award Winning Website Designs and Web Development Company in
        Dubai?
      </p>
    </div> */}
    <div className="relative z-10 animate-float will-change-transform flex flex-col items-center justify-center mx-auto mt-10 md:mt-10">
      <div className="relative w-[90%] md:w-[100%] mx-auto">
        <img
          alt="VR Statue"
          className="mx-auto"
          data-nimg="1"
          decoding="async"
          height="802"
          loading="lazy"
          src={Monster}
          style={{
            color: "transparent",
          }}
          width="912"
        />
        <img
          alt="Dubai City"
          className="mx-auto -mt-[34%]"
          data-nimg="1"
          decoding="async"
          height="664"
          loading="lazy"
          src={Roads}
          style={{
            color: "transparent",
          }}
          width="910"
        />
      </div>
    </div>
    {/* <div className="absolute max-w-[400px] text-left leading-tight mt-160 right-30 w-full text-[16px] hidden md:block">
      <p>
        Dubai’s 1st Digital Experiential based Website Design & Development
        Company. No more B2B or B2C, we focus on H2H. Our Highly skilled Website
        designers and Web Developers in Dubai, UAE will help you grow Traffic,
        Leads, & Sales.
      </p>
    </div> */}
    <div className="absolute z-0 top-1/5 text-center w-full -mt-0 block md:hidden">
      <h1 className="text-4xl md:text-7xl/[80px] lg:text-9xl/[111px] font-bold scale-[0.95]">
        Best Website
        <span className="text-primary"> Design</span>
        <br />
        <span className="text-primary">& Development</span> <br />
        Agency in Dubai, UAE
      </h1>
    </div>
  </div>
</section>
    </>
  )
}

export default SecondHeroSection