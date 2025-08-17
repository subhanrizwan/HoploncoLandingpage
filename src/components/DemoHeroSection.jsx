import Monster from '../assets/images/herosection/monster.png';
import Roads from '../assets/images/herosection/roads.png';
function DemoHeroSection() {
  return (
    <section className="relative bg-black text-white min-h-screen overflow flex items-center justify-center">
      {/* Background Image Container - Centered with slight bottom overflow */}
      <div className="absolute inset-0 flex items-center justify-center z-50">
        <div className="relative animate-float will-change-transform">
          <img
            alt="VR Statue"
            loading="lazy"
            width={912}
            height={802}
            decoding="async"
            className="w-auto h-[70vh] sm:h-[75vh] md:h-[80vh] lg:h-[85vh] xl:h-[90vh] object-contain"
            style={{ color: "transparent" }}
            src={Monster}
          />
          <img
            alt="Dubai City"
            loading="lazy"
            width={1150}
            height={664}
            decoding="async"
            className="absolute top-[65%] sm:top-[68%] md:top-[70%] lg:top-[72%] left-1/2 transform -translate-x-1/2 w-auto h-[45vh] sm:h-[50vh] md:h-[55vh] lg:h-[60vh] xl:h-[65vh] object-contain"
            style={{ color: "transparent" }}
            src={Roads}
          />
        </div>
      </div>

      {/* Content Container - Always centered */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Main Heading - Always centered */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-9xl font-bold font-sans leading-tight mb-8 sm:mb-12 md:mb-16">
          Best Website<span className="text-secondary"> Design</span>
          <br />
          <span className="text-secondary">&amp; Development</span>
          <br />
          Agency in Dubai, UAE
        </h1>

        {/* Sub-headings Container - Flex with justify-between */}
        <div className="flex flex-col sm:flex-row justify-between items-start gap-6 sm:gap-8 md:gap-12 max-w-6xl mx-auto">
          {/* Left-aligned sub-heading */}
          <div className="flex-1 text-left">
            <p className="text-sm sm:text-base md:text-lg leading-relaxed max-w-md">
              Looking for Award Winning Website Designs and Web Development Company in Dubai?
            </p>
          </div>

          {/* Right-aligned sub-heading */}
          <div className="flex-1 text-right">
            <p className="text-sm sm:text-base md:text-lg leading-relaxed max-w-md ml-auto">
              Dubai's 1st Digital Experiential based Website Design &amp; Development Company. No more B2B or B2C, we
              focus on H2H. Our Highly skilled Website designers and Web Developers in Dubai, UAE will help you grow
              Traffic, Leads, &amp; Sales.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default  DemoHeroSection;
