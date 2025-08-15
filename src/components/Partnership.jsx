import { Button } from "@mui/material"
export default function PartnerShip() {
  return (
   <section className="relative bg-white text-white overflow-hidden mt-0">
      {/* Content */}
      <div
        className="relative pt-32 pb-20 px-4 bg-secondary"
         style={{
          borderRadius: "50% 50% 0 0 / 200px 200px 0 0",
          transform: "scaleX(1.2)",
        }}
      >
        <div className="container mx-auto max-w-7xl p-6 px-10 pt-0">
          {/* Header Badge */}
          <div className="text-center mb-6 sm:mb-8">
            <span className="inline-block bg-white/20 backdrop-blur-sm text-black px-4 py-2 rounded-full text-xs sm:text-sm font-medium">
              Unlocking Influence & Credibility Through
            </span>
          </div>

          {/* Main Heading */}
          <div className="text-center mb-8 sm:mb-12 lg:mb-16">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-black mb-4 sm:mb-6 leading-tight max-w-4xl mx-auto">
              Grateful for the Partnership with Our Esteemed Client
            </h2>
            <p className="text-black/80 text-sm sm:text-base lg:text-lg max-w-3xl mx-auto leading-relaxed">
              From Digital Doors That Define Success! - No matter we are building a website for our clients or boosting
              their business through our marketing strategies... We talk about facts like the dedicated health icons,
              optimisation services and speeds, no of clicks on ad feeds, Cost per lead, and more.
            </p>
          </div>

          {/* Main Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 xl:gap-16 items-center">
            {/* Left Side - Statue with Social Icons */}
            <div className="relative flex justify-center lg:justify-end order-2 lg:order-1">
              <div className="relative w-full max-w-sm sm:max-w-md lg:max-w-lg">
                <img
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/add%20a%20hope%20men%20statue%20instead%20of%20men%20same%20style%20png%20image%201-gEPKyoPjnYDqQk1XyWNcSCtNUMg5hg.png"
                  alt="Classical statue with megaphone and social media icons"
                  className="w-full h-auto object-contain"
                />
              </div>
            </div>

            {/* Right Side - Content */}
            <div className="order-1 lg:order-2 space-y-6 sm:space-y-8">
              {/* Description Text */}
              <p className="text-black/80 text-sm sm:text-base leading-relaxed">
                Social Media Brand Management is a tricky business. Some campaign works well, others provide us with
                learnings to improve. With try and experiment with social media best-practices like ad creatives, and
                text targeting, and website landing pages or conversions. We take the guesswork out and save your time
                to help get results in cost-effective manner. Social media brand management is all about consistently
                implementing the right techniques to present your business and services in the most effective and
                result-oriented manner.
              </p>

              {/* At ENUM Digital Agency Section */}
              <div className="space-y-4">
                <h3 className="text-lg sm:text-xl font-bold text-black">At ENUM Digital Agency:</h3>

                <div className="space-y-2 sm:space-y-3">
                  {[
                    "We Perform in-depth social media audits",
                    "Establish your unique brand voice",
                    "Ensure your social media posts align with your branding guidelines",
                    "Adapt your brand tone in crafting content",
                    "Maintain a social media calendar",
                    "Measure the impact of your branding efforts",
                    "Develop your marketing persona",
                  ].map((item, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <div className="flex-shrink-0 w-5 h-5 sm:w-6 sm:h-6 bg-black rounded-full flex items-center justify-center mt-0.5">
                        <svg className="w-3 h-3 sm:w-4 sm:h-4 text-lime-400" fill="currentColor" viewBox="0 0 20 20">
                          <path
                            fillRule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </div>
                      <span className="text-black text-sm sm:text-base">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Achievement Badges */}
          <div className="mt-12 sm:mt-16 lg:mt-20">
            <div className="flex flex-wrap justify-center gap-4 sm:gap-6 lg:gap-8 mb-8 sm:mb-12">
              {[
                { title: "13+", subtitle: "YEARS!", description: "The Optimized Approach" },
                { title: "13+", subtitle: "YEARS!", description: "The Optimized Approach" },
                { title: "13+", subtitle: "YEARS!", description: "The Optimized Approach" },
                { title: "13+", subtitle: "YEARS!", description: "The Optimized Approach" },
                { title: "13+", subtitle: "YEARS!", description: "The Optimized Approach" },
              ].map((badge, index) => (
                <div
                  key={index}
                  className="w-20 h-20 sm:w-24 sm:h-24 lg:w-28 lg:h-28 bg-black rounded-full flex flex-col items-center justify-center text-center"
                >
                  <div className="text-lime-400 font-bold text-lg sm:text-xl lg:text-2xl leading-none">
                    {badge.title}
                  </div>
                  <div className="text-white text-xs sm:text-sm font-medium leading-none mt-1">{badge.subtitle}</div>
                  <div className="text-white/80 text-[8px] sm:text-[10px] leading-tight mt-1 px-1">
                    {badge.description}
                  </div>
                </div>
              ))}
            </div>

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
      </div>
    </section>
  )
}
