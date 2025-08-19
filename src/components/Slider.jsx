"use client"

import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import Slider from "react-slick"
import { Palette, PhoneAndroid } from "@mui/icons-material"

function FocusOnSelect() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: "0px",
  }

  return (
    <div style={{ width: "95%", margin: "0 auto" }}>
      <style>
        {`
          .slick-slide {
            padding: 0;
          }
          .slick-list {
            margin: 0;
          }
          .slick-slide > div {
            display: flex !important;
            justify-content: center !important;
          }
        `}
      </style>

      {/* <h2 className="text-white"> React Slick Example </h2> */}
      <div className="block md:hidden my-10">

      <Slider {...settings}>
       
        <div className=" text-black">
          {/* Mobile App Development */}
          <div
            className="group cursor-pointer"
            style={{
              position: "relative",
              width: 300, // Reduced from 360 to 300 to make card smaller
              height: 280, // Reduced from 320 to 280 to make card smaller
              margin: "1rem auto", // Reduced margin from 2rem to 1rem
            }}
          >
            {/* Background shapes */}
            <svg
              width="100%"
              height="100%"
              viewBox="0 0 419 322"
              xmlns="http://www.w3.org/2000/svg"
              style={{ position: "absolute", top: 0, left: 0, zIndex: 0 }}
            >
              <defs>
                <filter id="dropShadow2">
                  <feDropShadow dx={0} dy={4} stdDeviation={4} floodColor="black" floodOpacity="0.15" />
                </filter>
              </defs>
              {/* Pehla shape (slow hide) */}
              <path
                d="M365 0C392.614 0 415 22.3858 415 50V264C415 291.614 392.614 314 365 314H54C26.3858 314 4 291.614 4 264V102C4 90.9543 12.9543 82 24 82H70C81.0457 82 90 73.0457 90 62V20C90 8.95431 98.9543 0 110 0H365Z"
                fill="white"
                filter="url(#dropShadow2)"
                className="transition-all duration-[1.5s] ease-in-out group-hover:opacity-0"
              />
              {/* Dusra shape (slow show) */}
              <rect
                x={4}
                y={0}
                width={411}
                height={314}
                rx={50}
                ry={50}
                fill="white"
                filter="url(#dropShadow2)"
                className="transition-all duration-[1.5s] ease-in-out opacity-0 group-hover:opacity-100"
              />
            </svg>

            {/* Icon + Circle wrapper */}
            <div
              className="relative w-[50px] h-[50px] top-8 left-4 z-10
              transition-transform duration-[1.5s] ease-in-out
              group-hover:translate-x-3 group-hover:translate-y-3 group-hover:text-secondary"
            >
              {/* Circle background (slow opacity + move) */}
              <div
                className="absolute opacity-0 top-1/2 left-1/2 h-[3.8rem] w-[3.8rem] 
                bg-secondary rounded-full 
                transition-all duration-[1.5s] ease-in-out
                -translate-x-[80px] -translate-y-[40px] 
                group-hover:opacity-100 group-hover:-translate-x-1/2 group-hover:-translate-y-1/2"
              />

              {/* Icon (slow color change) */}
              <PhoneAndroid
                style={{
                  width: 40,
                  height: 40,
                  color: "#fff",
                  position: "absolute",
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                  zIndex: 3,
                }}
                className="group-hover:!text-[#000] transition-all duration-[3000] ease-in-out"
              />
            </div>

            {/* Title (slow slide) */}
            <div
              style={{
                position: "relative",
                zIndex: 1,
                width: 200, // Reduced width from 250 to 200
                height: 50, // Reduced height from 60 to 50
                top: 0,
                left: 90,
                transition: "transform 1500ms ease-in-out",
              }}
              className="group-hover:translate-x-4"
            >
              <h3 className="font-bold text-[14px]">
                Mobile App <br /> Development
              </h3>
            </div>

            {/* Description (slow slide) */}
            <div
              style={{
                position: "relative",
                zIndex: 1,
                padding: "2rem",
                paddingLeft: "4rem",
                transform: "translateX(0)",
                transition: "transform 3000ms ease-in-out",
              }}
            >
              <p className="text-xs ">
                We create stunning mobile applications with modern UI/UX design principles. Our team delivers
                high-quality apps for both iOS and Android platforms.
              </p>
            </div>
          </div>
        </div>
        <div className="flex gap-2 flex-wrap justify-center text-black">
          {/* Mobile App Development */}
          <div
            className="group cursor-pointer"
            style={{
              position: "relative",
              width: 300, // Reduced from 360 to 300 to make card smaller
              height: 280, // Reduced from 320 to 280 to make card smaller
              margin: "1rem auto", // Reduced margin from 2rem to 1rem
            }}
          >
            {/* Background shapes */}
            <svg
              width="100%"
              height="100%"
              viewBox="0 0 419 322"
              xmlns="http://www.w3.org/2000/svg"
              style={{ position: "absolute", top: 0, left: 0, zIndex: 0 }}
            >
              <defs>
                <filter id="dropShadow2">
                  <feDropShadow dx={0} dy={4} stdDeviation={4} floodColor="black" floodOpacity="0.15" />
                </filter>
              </defs>
              {/* Pehla shape (slow hide) */}
              <path
                d="M365 0C392.614 0 415 22.3858 415 50V264C415 291.614 392.614 314 365 314H54C26.3858 314 4 291.614 4 264V102C4 90.9543 12.9543 82 24 82H70C81.0457 82 90 73.0457 90 62V20C90 8.95431 98.9543 0 110 0H365Z"
                fill="white"
                filter="url(#dropShadow2)"
                className="transition-all duration-[1.5s] ease-in-out group-hover:opacity-0"
              />
              {/* Dusra shape (slow show) */}
              <rect
                x={4}
                y={0}
                width={411}
                height={314}
                rx={50}
                ry={50}
                fill="white"
                filter="url(#dropShadow2)"
                className="transition-all duration-[1.5s] ease-in-out opacity-0 group-hover:opacity-100"
              />
            </svg>

            {/* Icon + Circle wrapper */}
            <div
              className="relative w-[50px] h-[50px] top-8 left-4 z-10
              transition-transform duration-[1.5s] ease-in-out
              group-hover:translate-x-3 group-hover:translate-y-3 group-hover:text-secondary"
            >
              {/* Circle background (slow opacity + move) */}
              <div
                className="absolute opacity-0 top-1/2 left-1/2 h-[3.8rem] w-[3.8rem] 
                bg-secondary rounded-full 
                transition-all duration-[1.5s] ease-in-out
                -translate-x-[80px] -translate-y-[40px] 
                group-hover:opacity-100 group-hover:-translate-x-1/2 group-hover:-translate-y-1/2"
              />

              {/* Icon (slow color change) */}
              <PhoneAndroid
                style={{
                  width: 40,
                  height: 40,
                  color: "#fff",
                  position: "absolute",
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                  zIndex: 3,
                }}
                className="group-hover:!text-[#000] transition-all duration-[3000] ease-in-out"
              />
            </div>

            {/* Title (slow slide) */}
            <div
              style={{
                position: "relative",
                zIndex: 1,
                width: 200, // Reduced width from 250 to 200
                height: 50, // Reduced height from 60 to 50
                top: 0,
                left: 90,
                transition: "transform 1500ms ease-in-out",
              }}
              className="group-hover:translate-x-4"
            >
              <h3 className="font-bold text-[14px]">
                Mobile App <br /> Development
              </h3>
            </div>

            {/* Description (slow slide) */}
            <div
              style={{
                position: "relative",
                zIndex: 1,
                padding: "2rem",
                paddingLeft: "4rem",
                transform: "translateX(0)",
                transition: "transform 3000ms ease-in-out",
              }}
            >
              <p className="text-xs ">
                We create stunning mobile applications with modern UI/UX design principles. Our team delivers
                high-quality apps for both iOS and Android platforms.
              </p>
            </div>
          </div>
        </div>
        
      </Slider>
    </div>
    </div>
  )
}

export default FocusOnSelect
