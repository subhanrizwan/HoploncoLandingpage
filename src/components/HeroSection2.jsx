"use client"
"use client"
import Monster from '../assets/images/herosection/monster.png';
import Roads from '../assets/images/herosection/roads.png';

import Instagram from '../assets/images/social-media-icons/instagram.png';
import Fb from '../assets/images/social-media-icons/fb.png'
import Massenger from '../assets/images/social-media-icons/massenger.png'
import Tiktok from '../assets/images/social-media-icons/tiktok.png'
import Youtube from '../assets/images/social-media-icons/youtube.png'
import Like from '../assets/images/social-media-icons/like.png'
// Social Media Icons
import { useState, useEffect } from "react"

export default function HeroSection() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const Details = {
    Heading1: "Top Rated",
    Social: "Social",
    Heading2: "Media Marketing",
    Heading3: "Agency in Dubai UAE",
    para1: `Award Winning Social Media Marketing Agency in Dubai.`,
    para2: `Your Partner in Performance, Dubai's 1st Digital Experiential Agency. Our Social Media Marketing Company will help you Grow Traffic, Leads, & Sales.`,
  }

  if (!mounted) return null

  return (
    <>
      <section id="home" className="min-h-screen bg-black relative overflow-hidden pt-16 md:pt-20">
        <div className="absolute inset-0 z-50">
          {/* Instagram - Top Left */}
          <div className="absolute top-24 left-8 md:top-36 md:left-16 animate-bounce">
            <div className="w-12 h-12 md:w-16 md:h-16 bg-gradient-to-br from-purple-500 via-pink-500 to-orange-500 rounded-2xl flex items-center justify-center transform rotate-12 hover:rotate-0 transition-transform duration-300">
              <svg className="w-6 h-6 md:w-8 md:h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
              </svg>
            </div>
          </div>

          {/* Facebook - Top Right */}
          <div className="absolute top-20 right-12 md:top-28 md:right-20 animate-pulse">
            <div className="w-10 h-10 md:w-14 md:h-14 bg-blue-600 rounded-xl flex items-center justify-center transform -rotate-12 hover:rotate-0 transition-transform duration-300">
              <svg className="w-5 h-5 md:w-7 md:h-7 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
              </svg>
            </div>
          </div>

          {/* TikTok - Left Middle */}
          <div className="absolute top-1/2 left-4 md:left-8 transform -translate-y-1/2 animate-bounce delay-150">
            <div className="w-11 h-11 md:w-15 md:h-15 bg-black border-2 border-white rounded-2xl flex items-center justify-center transform rotate-6 hover:rotate-0 transition-transform duration-300">
              <svg className="w-6 h-6 md:w-8 md:h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z" />
              </svg>
            </div>
          </div>

          {/* YouTube - Right Middle */}
          <div className="absolute top-1/2 right-6 md:right-12 transform -translate-y-1/2 animate-pulse delay-300">
            <div className="w-12 h-12 md:w-16 md:h-16 bg-red-600 rounded-2xl flex items-center justify-center transform -rotate-6 hover:rotate-0 transition-transform duration-300">
              <svg className="w-6 h-6 md:w-8 md:h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
              </svg>
            </div>
          </div>

          {/* Messenger - Bottom Left */}
          <div className="absolute bottom-40 left-16 md:bottom-48 md:left-24 animate-bounce delay-500">
            <div className="w-10 h-10 md:w-14 md:h-14 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center transform rotate-12 hover:rotate-0 transition-transform duration-300">
              <svg className="w-5 h-5 md:w-7 md:h-7 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0C5.374 0 0 4.975 0 11.111c0 3.498 1.744 6.614 4.469 8.654V24l4.088-2.242c1.092.301 2.246.464 3.443.464 6.626 0 12-4.974 12-11.111C24 4.975 18.626 0 12 0zm1.191 14.963l-3.055-3.26-5.963 3.26L10.732 8.1l3.13 3.26L19.752 8.1l-6.561 6.863z" />
              </svg>
            </div>
          </div>

          {/* Like Icon - Bottom Right */}
          <div className="absolute bottom-36 right-20 md:bottom-44 md:right-28 animate-pulse delay-700">
            <div className="w-11 h-11 md:w-15 md:h-15 bg-pink-500 rounded-full flex items-center justify-center transform -rotate-12 hover:rotate-0 transition-transform duration-300">
              <svg className="w-6 h-6 md:w-8 md:h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
              </svg>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="container mx-auto px-4 md:px-6 py-8 md:py-16 relative z-30 flex justify-center">
          <div className="heading-section text-center font-extrabold max-w-6xl">
            <h1 className="text-3xl md:text-5xl lg:text-7xl xl:text-8xl font-bold mb-2 md:mb-3 text-white leading-tight">
              {Details.Heading1} <span className="text-lime-400">{Details.Social}</span>
            </h1>
            <h1 className="text-3xl md:text-5xl lg:text-7xl xl:text-8xl font-bold mb-2 md:mb-3 text-lime-400 leading-tight">
              {Details.Heading2}
            </h1>
            <h1 className="text-3xl md:text-5xl lg:text-7xl xl:text-8xl font-bold mb-6 md:mb-8 text-white leading-tight">
              {Details.Heading3}
            </h1>

            <div className="flex flex-col md:flex-row justify-between gap-4 md:gap-8 max-w-4xl mx-auto">
              <p className="text-sm md:text-base font-light text-white text-left md:text-left max-w-[280px] md:max-w-[320px]">
                {Details.para1}
              </p>
              <p className="text-sm md:text-base font-light text-white text-left md:text-right max-w-[280px] md:max-w-[320px] md:ml-auto">
                {Details.para2}
              </p>
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 z-40 w-full max-w-4xl bg-transparent">
          <div className="relative bg-transparent">
            {/* Person with VR */}
            <img
              alt="VR Person"
              loading="lazy"
              width={912}
              height={802}
              className="mx-auto w-[80%] md:w-[70%] lg:w-[60%] h-auto"
              style={{ color: "transparent" }}
              src={Monster}
            />

            {/* Dubai Cityscape */}
            <img
              alt="Dubai City Roads"
              loading="lazy"
              width={1100}
              height={664}
              className="absolute -bottom-8 md:-bottom-12 left-1/2 transform -translate-x-1/2 w-[100%] md:w-[90%] lg:w-[80%] h-auto"
              style={{ color: "transparent" }}
              src={Roads}
            />
          </div>
        </div>

        {/* Top Navigation Buttons */}
        
      </section>

      <section className="relative bg-white">
        <div className="absolute top-0 left-0 w-full overflow-hidden leading-none">
          <svg
            className="relative block w-full h-20 md:h-28 lg:h-36"
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path
              d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"
              opacity=".25"
              className="fill-black"
            ></path>
            <path
              d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z"
              opacity=".5"
              className="fill-black"
            ></path>
            <path
              d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z"
              className="fill-black"
            ></path>
          </svg>
        </div>
        <div className="pt-20 md:pt-28 lg:pt-36 pb-16 md:pb-24">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                Ready to Transform Your Social Media Presence?
              </h2>
              <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
                Let's create engaging content that drives results and grows your business.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
