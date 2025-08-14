"use client"
import Monster from '../assets/images/herosection/monster.png';
import Roads from '../assets/images/herosection/roads.png';
import Instagram from '../assets/images/social-media-icons/instagram.png';
import Fb from '../assets/images/social-media-icons/fb.png'
import Massenger from '../assets/images/social-media-icons/massenger.png'
import Tiktok from '../assets/images/social-media-icons/tiktok.png'
import Youtube from '../assets/images/social-media-icons/youtube.png'
import Like from '../assets/images/social-media-icons/like.png'
export default function HeroSection() {
  const Details = {
    Heading1: "Top Rated",
    Social:'Social',
    Heading2: "Media Marketing",
    Heading3: "Agency in Dubai UAE",
    para1: `Do you want to improve your brand’s online social presence?`,
  }
  return (
     <section
      id="home"
      className="min-h-screen h-[180vh] bg-black relative overflow-hidden border-b border-white"
    >
      <div className="absolute inset-0 z-50">
          {/* Instagram - Top Left */}
          {/* <div className="absolute top-20 left-8 md:top-36 md:left-16 animate-bounce">
            <div className="w-12 h-12 md:w-16 md:h-16 relative left-20 -top-12 bg-gradient-to-br from-purple-500 via-pink-500 to-orange-500 rounded-2xl flex items-center justify-center transform rotate-12 hover:rotate-0 transition-transform duration-300">
              <img src={Instagram} alt="" />
            </div>
          </div> */}

          {/* Facebook - Top Right */}
          {/* <div className="absolute top-20 right-12 md:top-28 md:right-20 animate-pulse">
            <div className="w-10 h-10 md:w-14 md:h-14 bg-blue-600 rounded-xl flex items-center justify-center transform -rotate-12 hover:rotate-0 transition-transform duration-300">
             <img src={Fb} alt="" />
            </div>
          </div> */}

          {/* TikTok - Left Middle */}
          {/* <div className="absolute top-1/2 left-4 md:left-8 transform -translate-y-1/2 animate-bounce delay-150">
            <div className="w-11 h-11 md:w-15 md:h-15 bg-black border-2 border-white rounded-2xl flex items-center justify-center transform rotate-6 hover:rotate-0 transition-transform duration-300">
              <img src={Massenger} alt="" />
            </div>
          </div> */}

          {/* YouTube - Right Middle */}
          {/* <div className="absolute top-1/2 right-6 md:right-12 transform -translate-y-1/2 animate-pulse delay-300">
            <div className="w-12 h-12 md:w-16 md:h-16 bg-red-600 rounded-2xl flex items-center justify-center transform -rotate-6 hover:rotate-0 transition-transform duration-300">
              <img src={Tiktok} alt="" srcset="" />
            </div>
          </div> */}

          {/* Messenger - Bottom Left */}
          {/* <div className="absolute bottom-40 left-16 md:bottom-48 md:left-24 animate-bounce delay-500">
            <div className="w-10 h-10 md:w-14 md:h-14 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center transform rotate-12 hover:rotate-0 transition-transform duration-300">
              <img src={Youtube} alt="" srcset="" />
            </div>
          </div> */}

          {/* Like Icon - Bottom Right */}
          {/* <div className="absolute bottom-36 right-20 md:bottom-44 md:right-28 animate-pulse delay-700">
            <div className="w-11 h-11 md:w-15 md:h-15 bg-pink-500 rounded-full flex items-center justify-center transform -rotate-12 hover:rotate-0 transition-transform duration-300">
             <img src={Like} alt="" srcset="" />
            </div>
          </div> */}
        </div>
      {/* Headings */}
      <div className="container mx-auto px-2 md:px-6 py-10 md:py-16 relative z-30 flex justify-center">
        <div className="heading-section text-center font-extrabold">
          <h1 className="text-4xl md:text-5xl lg:text-8xl font-bold mb-3 text-white">
            {Details.Heading1} <b className="text-secondary">{Details.Social}</b>
          </h1>
          <h1 className="text-4xl md:text-5xl lg:text-8xl font-bold mb-3 text-secondary">
            {Details.Heading2}
          </h1>
          <h1 className="text-4xl md:text-5xl lg:text-8xl font-bold mb-4 text-white">
            {Details.Heading3}
          </h1>
          <div className="flex justify-between">
          <p className="text-xs mb-4 font-light text-white text-left">
            {Details.para1}
          </p>
          <p className="text-xs mb-4 font-light text-white text-left">
            {Details.para1}
          </p>
          </div>
        </div>
      </div>

<div className="relative md:bottom-[53%] bottom-[28%] z-40 animate-float will-change-transform flex flex-col items-center justify-center mx-auto mt-10 md:mt-10">
  <div className="relative w-[90%] md:w-[100%] mx-auto">
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
  alt="road City"
  loading="lazy"
  width={1100}
  height={664}
  decoding="async"
  data-nimg={1}
  className="relative md:-mt-[26%] -mt-[34%] w-[120%] md:w-[100%] max-w-none left-1/2 -translate-x-1/2"
  style={{ color: "transparent" }}
  src={Roads}
/>


  </div>
</div>


      
    </section>

  )
}
