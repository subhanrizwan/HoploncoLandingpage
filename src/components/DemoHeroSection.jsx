import Monster from '../assets/images/herosection/statue.png';
import Roads from '../assets/images/herosection/city.png';
function DemoHeroSection() {
  return (
    <section className="relative bg-black text-white md:min-h-screen  items-center justify-center overflow">
      <div className="relative z-10 flex flex-col md:flex-row justify-between w-full max-w-8xl sm:pt-36 lg:pt-48 pt-8 gap-2">
    <div className="absolute z-0 top-1/5 text-center w-full ">
          <h1 className="text-4xl sm:text-5xl md:!text-[4rem]/[80px] lg:!text-[7rem]/[110px] xl:!text-[7rem]/[120px] font-bold font-epilogue scale-[0.95] md:-mt-4 ">
            Best Website<span className="text-secondary"> Design</span>
            <br />
            <span className="text-secondary">&amp; Development</span> <br />
            Agency in Dubai, UAE
          </h1>
          {/* Sub-headings Container - Flex with justify-between */}
          <div className="hidden md:block">
            <div className="flex flex-col md:px-10 lg:px-0 sm:flex-row justify-between items-center gap-0 sm:gap-8 md:gap-12 max-w-6xl xl:max-w-6xl 2xl:max-w-[1600px] mx-auto">
              {/* Left-aligned sub-heading */}
              <div className="flex-1 text-left">
                <p className="text-lg leading-relaxed max-w-md">
                  Looking for Award Winning Website Designs and Web Development
                  Company in Dubai?
                </p>
              </div>

              {/* Right-aligned sub-heading */}
              <div className="flex-1 text-right">
                <p className="text-lg leading-relaxed max-w-md ml-auto">
                  Dubai's 1st Digital Experiential based Website Design &amp;
                  Development Company. No more B2B or B2C, we focus on H2H. Our
                  Highly skilled Website designers and Web Developers in Dubai,
                  UAE will help you grow Traffic, Leads, &amp; Sales.
                </p>
              </div>
            </div>
          </div>
        </div>
   
    <div className="relative z-50 animate-float will-change-transform flex flex-col items-center justify-center mx-auto -mt-16 md:-mt-40">
      <div className="relative w-[90%] md:w-[100%] mx-auto ">
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

    {/* <div className="absolute z-0 top-1/5 text-center w-full -mt-0 block md:hidden">
      <h1 className="text-4xl md:text-7xl/[80px] lg:text-9xl/[111px] font-bold scale-[0.95]">
        Best Website
        <span className="text-primary"> Design</span>
        <br />
        <span className="text-primary">& Development</span> <br />
        Agency in Dubai, UAE
      </h1>
    </div> */}
  </div>
</section>
  )
}

export default  DemoHeroSection;
