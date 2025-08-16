import Monster from '../assets/images/herosection/monster.png';
import Roads from '../assets/images/herosection/roads.png';
// import Instagram from '../assets/images/social-media-icons/instagram.png';
// import Fb from '../assets/images/social-media-icons/fb.png';
// import Tiktok from '../assets/images/social-media-icons/tiktok.png';
// import Youtube from '../assets/images/social-media-icons/youtube.png';
// import Massenger from '../assets/images/social-media-icons/massenger.png';
// import Like from '../assets/images/social-media-icons/Like.png';
function HeroSection() {
  return (
<section className="relative bg-black text-white sm:h-[600px] md:h-[850px] lg:h-[1000px] h-72 items-center justify-center overflow">
  <div className="relative z-10 flex flex-col md:flex-row justify-between w-full max-w-8xl sm:pt-36 lg:pt-48 pt-10 gap-2">
    <div className="absolute z-0 top-1/5 text-center w-full">
      <h1 className="text-4xl sm:text-5xl md:!text-[3.8rem]/[80px] lg:!text-[5.5rem]/[110px] xl:!text-[8rem]/[110px] font-bold font-epilogue scale-[0.95] md:-mt-4 ">
        Best Website<span className="text-secondary"> Design</span>
        <br />
        <span className="text-secondary">&amp; Development</span> <br />
        Agency in Dubai, UAE
      </h1>
    </div>
    <div className="absolute md:!top-[42%] md:!left-8 sm:top-[43%] lg:!top-[45%] lg:!left-0 xl:!left-40 sm:text-xs lg:text-md max-w-md text-left leading-tight w-full hidden md:block">
      <p className='md:px-12'>
        Looking for Award Winning Website Designs and Web Development Company in
        Dubai?
      </p>
    </div>
    <div className="relative z-50 animate-float will-change-transform flex flex-col items-center justify-center mx-auto mt-[-4.5rem] sm:mt-[-10.5rem] md:!mt-[-12rem] lg:!mt-[-14.5rem]">
      <div className="relative w-[100%] md:w-[100%] mx-auto ">
        <img
          alt="VR Statue"
          loading="lazy"
          width={912}
          height={802}
          decoding="async"
          data-nimg={1}
          className="mx-auto"
          style={{ color: "transparent" }}
          src={Monster}
        />
        <img
          alt="Dubai City"
          loading="lazy"
          width={1150}
          height={664}
          decoding="async"
          data-nimg={1}
          className="mx-auto lg:-mt-[28%] -mt-[34%]"
          style={{ color: "transparent" }}
          src={Roads}
        />
      </div>
    </div>
    <div className="absolute max-w-[400px] text-right leading-tight sm:top-[42%] sm:right-0 md:!right-6 md:!top-[42%] lg:!right-0 lg:!top-[45%] xl:!right-40 xl:text-sm w-full text-sm hidden md:block">
      <p className='sm:px-16'>
        Dubai’s 1st Digital Experiential based Website Design &amp; Development
        Company. No more B2B or B2C, we focus on H2H. Our Highly
        skilled&nbsp;Website designers&nbsp;and&nbsp;Web Developers in Dubai,
        UAE&nbsp;will help you grow Traffic, Leads, &amp; Sales.
      </p>
    </div>
    {/* <div className="absolute z-0 -top-28 text-center w-full  block md:hidden">
      <h1 className="text-4xl md:text-7xl/[80px] lg:text-9xl/[111px] font-bold scale-[0.95]">
        Best Website<span className="text-secondary"> Design</span>
        <br />
        <span className="text-secondary">&amp; Development</span> <br />
        Agency in Dubai, UAE
      </h1>
    </div> */}
  </div>
</section>

  )
}

export default HeroSection