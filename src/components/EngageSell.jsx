import Bg from '../assets/images/engage/bg.png'
import Overlay from '../assets/images/engage/overlay.png'
import { Button } from "@mui/material"
import ThirdAnimatedButton from './AnimatedBtn3';
import SecondAnimatedButton from './AnimatedBtn2';
export default function OtherServices() {
  return (
    <section className="relative bg-secondary overflow-hidden mt-0 ">
      {/* Content */}
      <div
        className="relative pt-16 md:pt-24 lg:pt-32 pb-12 md:pb-16 lg:pb-20 px-4 bg-white"
        style={{
          borderRadius: "50% 50% 0 0 / 100px 100px 0 0",
          transform: "scaleX(1.1)",
        }}
      >
        <div className="container mx-auto text-center max-w-5xl">
          {/* Header */}
         <div className="mb-16">
            <button className="border-[1.2px] border-dashed border-gray-600 text-black px-4 py-2 rounded-full text-sm mb-8 hover:border-gray-400 transition-colors">
              Other Services
            </button>

            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-black">
              Your Dream Website,
              <br />
              Made Reality
            </h1>

            <p className="text-[#3F3F3F] text-lg max-w-2xl mx-auto leading-relaxed p-6 pt-0">
              We provide bespoke solutions that bridge the gap between commercial possibilities and creative resolution,
              while delivering effectiveness for our clients.
            </p>
          </div>

          {/* Cards */}
          <div className="relative max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8 items-start lg:items-center">
              {/* Left Column */}
              <div className="space-y-6 md:space-y-8 order-2 lg:order-1 p-6 ">
                {/* Generate Traffic Card */}
                <div className="bg-[#F8FAF2] backdrop-blur-sm rounded-2xl p-4 md:p-6 text-left">
                  <div className="w-10 h-10 md:w-12 md:h-12 bg-lime-400 rounded-full flex items-center justify-center mb-3 md:mb-4">
                    <svg className="w-5 h-5 md:w-6 md:h-6 text-black" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2L2 7v10c0 5.55 3.84 10 9 11 1.09-.21 2.09-.64 3-1.1 .91.46 1.91.89 3 1.1 5.16-1 9-5.45 9-11V7l-10-5z" />
                    </svg>
                  </div>
                  <h3 className="text-lg md:text-xl font-bold mb-2 md:mb-3 text-black">
                    I'M LOOKING TO GENERATE TRAFFIC
                  </h3>
                  <p className="text-black text-sm leading-relaxed">
                    Our proven social media strategies of generating website traffic will surely inspire you.
                  </p>
                </div>

                {/* Build Loyalty Card */}
                <div className="bg-[#F8FAF2] backdrop-blur-sm rounded-2xl p-4 md:p-6 text-left">
                  <div className="w-10 h-10 md:w-12 md:h-12 bg-lime-400 rounded-full flex items-center justify-center mb-3 md:mb-4">
                    <svg className="w-5 h-5 md:w-6 md:h-6 text-black" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                    </svg>
                  </div>
                  <h3 className="text-lg md:text-xl font-bold mb-2 md:mb-3 text-black">I WANT TO BUILD LOYALTY</h3>
                  <p className="text-black text-sm leading-relaxed">
                    Our social media retargeting tactics and intriguing offer ideas always keep customers loyal and
                    engaged.
                  </p>
                </div>
              </div>

              {/* Center Column - Laptop with Social Icons */}
              <div className="relative flex justify-center items-center order-1 lg:order-2 mb-8 lg:mb-0">
                <div className="relative w-full max-w-xs md:max-w-sm lg:max-w-md">
                  {/* Laptop Image Container */}
                  <div className="w-full aspect-[3/4] rounded-t-2xl relative overflow shadow-2xl ">
                    <div className="absolute inset-0 rounded-lg">
                      <img
                        src={Bg}
                        alt="City skyline background"
                        className="w-full h-full object-cover rounded-lg"
                      />
                    </div>
                    <div className="absolute inset-0 -top-64 flex items-center justify-center">
                      <img
                        src={Overlay}
                        alt="Social media overlay"
                        className="w-full h-auto max-w-[80%] object-contain"
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Column */}
              <div className="space-y-6 md:space-y-8 order-3 p-6">
                {/* More Conversions Card */}
                <div className="bg-[#F8FAF2] backdrop-blur-sm rounded-2xl p-4 md:p-6 text-left ">
                  <div className="w-10 h-10 md:w-12 md:h-12 bg-lime-400 rounded-full flex items-center justify-center mb-3 md:mb-4">
                    <svg className="w-5 h-5 md:w-6 md:h-6 text-black" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M16 6l2.29 2.29-4.88 4.88-4-4L2 16.59 3.41 18l6-6 4 4 6.3-6.29L22 12V6z" />
                    </svg>
                  </div>
                  <h3 className="text-lg md:text-xl font-bold mb-2 md:mb-3 text-black">I'D LIKE MORE CONVERSIONS</h3>
                  <p className="text-black text-sm leading-relaxed">
                    We can help you incline your conversion rate with our holistic social media management and
                    analytical approach.
                  </p>
                </div>

                {/* Delight & Engage Card */}
                <div className="bg-[#F8FAF2] backdrop-blur-sm rounded-2xl p-4 md:p-6 text-left">
                  <div className="w-10 h-10 md:w-12 md:h-12 bg-lime-400 rounded-full flex items-center justify-center mb-3 md:mb-4">
                    <svg className="w-5 h-5 md:w-6 md:h-6 text-black" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                    </svg>
                  </div>
                  <h3 className="text-lg md:text-xl font-bold mb-2 md:mb-3 text-black">DELIGHT & ENGAGE</h3>
                  <p className="text-black text-sm leading-relaxed">
                    Let us inspire the most eye catching and interesting content that would positively engage and
                    delight your audience.
                  </p>
                </div>
              </div>
            
            </div>
                  <div className="flex flex-col sm:flex-row items-center justify-center gap-3 lg:p-8 lg:pt-12 p-6 pt-8 sm:space-x-4 w-full sm:w-auto">
<ThirdAnimatedButton />
<SecondAnimatedButton />
</div>

         

          </div>
          
        </div>
        
      </div>
    </section>
  )
}
