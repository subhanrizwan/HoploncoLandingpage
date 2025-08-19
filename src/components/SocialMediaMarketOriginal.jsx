import React from "react";
import { Share, Palette, PhoneAndroid, TrendingUp } from "@mui/icons-material";
import FirstAnimatedButton from "./AnimatedBtn1";
import SecondAnimatedButton from "./AnimatedBtn2";
import FocusOnSelect from "./Slider";
function SocialMediaMarketOriginal() {
  return (
    <>
      <div className="relative mt-0 ">
        <div className="relative z-10">
          <svg
            width="100%"
            style={{ height: "clamp(80px, 1vw, 120px)" }}
            className="block "
            viewBox="0 0 1920 120"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <defs>
              <linearGradient id="_S_1_" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#000" />
                <stop offset="100%" stopColor="#000" />
              </linearGradient>
            </defs>
            <ellipse cx={960} cy={120} rx={1000} ry={120} fill="url(#_S_1_)" />
          </svg>
          <section className="bg-black flex flex-col items-center justify-center px-6 ">
            <div className="my-4">
              <span className="text-[#989898] text-[14px] border-[1.5px] p-3 m-4 px-8 border-dashed rounded-full border-secondary">
                We provide quality services
              </span>
            </div>
            <h1 className="text-white font-[700] text-4xl md:text-7xl max-w-[1100px] text-center leading-tight my-6">
              Our&nbsp;Website development Service Deliverables
            </h1>
            <h2 className="text-[#979595] text-center max-w-[800px] font-[300] text-[20px]">
              We deliver effective, efficient &amp; innovative digital services.
            </h2>
            <div className="my-5 hidden sm:block">
              <div className="flex gap-2 flex-wrap justify-center text-black">
                {/* UX/UI Design */}
                <div
                  className="group cursor-pointer bg-gr"
                  style={{
                    position: "relative",
                    width: 360,
                    height: 320,
                    margin: "2rem auto",
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
                      <filter id="dropShadow">
                        <feDropShadow
                          dx={0}
                          dy={4}
                          stdDeviation={4}
                          floodColor="black"
                          floodOpacity="0.15"
                        />
                      </filter>
                    </defs>
                    {/* Pehla shape (slow hide) */}
                    <path
                      d="M365 0C392.614 0 415 22.3858 415 50V264C415 291.614 392.614 314 365 314H54C26.3858 314 4 291.614 4 264V102C4 90.9543 12.9543 82 24 82H70C81.0457 82 90 73.0457 90 62V20C90 8.95431 98.9543 0 110 0H365Z"
                      fill="white"
                      filter="url(#dropShadow)"
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
                      filter="url(#dropShadow)"
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
                      className="absolute opacity-0 top-1/2 left-1/2 h-[4.3rem] w-[4.3rem] 
        bg-secondary rounded-full 
        transition-all duration-[1.5s] ease-in-out
        -translate-x-[80px] -translate-y-[40px] 
        group-hover:opacity-100 group-hover:-translate-x-1/2 group-hover:-translate-y-1/2"
                    />

                    {/* Icon (slow color change) */}
                    <Palette
                      style={{
                        width: 48,
                        height: 48,
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
                      width: 250,
                      height: 60,
                      top: 0,
                      left: 90,
                      transition: "transform 1500ms ease-in-out",
                    }}
                    className="group-hover:translate-x-4"
                  >
                    <h3 className="font-bold text-[18px]">
                      UX/UI <br /> Design
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
                    <p>
                      At Enum Digital, we confidently deliver the stunning
                      website design &amp; development service in a very
                      discounted price. Our Best and Affordable Web Design
                    </p>
                  </div>
                </div>
                {/* UX/UI Design */}
                <div
                  className="group cursor-pointer bg-gr"
                  style={{
                    position: "relative",
                    width: 360,
                    height: 320,
                    margin: "2rem auto",
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
                      <filter id="dropShadow">
                        <feDropShadow
                          dx={0}
                          dy={4}
                          stdDeviation={4}
                          floodColor="black"
                          floodOpacity="0.15"
                        />
                      </filter>
                    </defs>
                    {/* Pehla shape (slow hide) */}
                    <path
                      d="M365 0C392.614 0 415 22.3858 415 50V264C415 291.614 392.614 314 365 314H54C26.3858 314 4 291.614 4 264V102C4 90.9543 12.9543 82 24 82H70C81.0457 82 90 73.0457 90 62V20C90 8.95431 98.9543 0 110 0H365Z"
                      fill="white"
                      filter="url(#dropShadow)"
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
                      filter="url(#dropShadow)"
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
                      className="absolute opacity-0 top-1/2 left-1/2 h-[4.3rem] w-[4.3rem] 
        bg-secondary rounded-full 
        transition-all duration-[1.5s] ease-in-out
        -translate-x-[80px] -translate-y-[40px] 
        group-hover:opacity-100 group-hover:-translate-x-1/2 group-hover:-translate-y-1/2"
                    />

                    {/* Icon (slow color change) */}
                    <Palette
                      style={{
                        width: 48,
                        height: 48,
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
                      width: 250,
                      height: 60,
                      top: 0,
                      left: 90,
                      transition: "transform 1500ms ease-in-out",
                    }}
                    className="group-hover:translate-x-4"
                  >
                    <h3 className="font-bold text-[18px]">
                      UX/UI <br /> Design
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
                    <p>
                      At Enum Digital, we confidently deliver the stunning
                      website design &amp; development service in a very
                      discounted price. Our Best and Affordable Web Design
                    </p>
                  </div>
                </div>
                {/* UX/UI Design */}
                <div
                  className="group cursor-pointer bg-gr"
                  style={{
                    position: "relative",
                    width: 360,
                    height: 320,
                    margin: "2rem auto",
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
                      <filter id="dropShadow">
                        <feDropShadow
                          dx={0}
                          dy={4}
                          stdDeviation={4}
                          floodColor="black"
                          floodOpacity="0.15"
                        />
                      </filter>
                    </defs>
                    {/* Pehla shape (slow hide) */}
                    <path
                      d="M365 0C392.614 0 415 22.3858 415 50V264C415 291.614 392.614 314 365 314H54C26.3858 314 4 291.614 4 264V102C4 90.9543 12.9543 82 24 82H70C81.0457 82 90 73.0457 90 62V20C90 8.95431 98.9543 0 110 0H365Z"
                      fill="white"
                      filter="url(#dropShadow)"
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
                      filter="url(#dropShadow)"
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
                      className="absolute opacity-0 top-1/2 left-1/2 h-[4.3rem] w-[4.3rem] 
        bg-secondary rounded-full 
        transition-all duration-[1.5s] ease-in-out
        -translate-x-[80px] -translate-y-[40px] 
        group-hover:opacity-100 group-hover:-translate-x-1/2 group-hover:-translate-y-1/2"
                    />

                    {/* Icon (slow color change) */}
                    <Palette
                      style={{
                        width: 48,
                        height: 48,
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
                      width: 250,
                      height: 60,
                      top: 0,
                      left: 90,
                      transition: "transform 1500ms ease-in-out",
                    }}
                    className="group-hover:translate-x-4"
                  >
                    <h3 className="font-bold text-[18px]">
                      UX/UI <br /> Design
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
                    <p>
                      At Enum Digital, we confidently deliver the stunning
                      website design &amp; development service in a very
                      discounted price. Our Best and Affordable Web Design
                    </p>
                  </div>
                </div>
                {/* UX/UI Design */}
                <div
                  className="group cursor-pointer bg-gr"
                  style={{
                    position: "relative",
                    width: 360,
                    height: 320,
                    margin: "2rem auto",
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
                      <filter id="dropShadow">
                        <feDropShadow
                          dx={0}
                          dy={4}
                          stdDeviation={4}
                          floodColor="black"
                          floodOpacity="0.15"
                        />
                      </filter>
                    </defs>
                    {/* Pehla shape (slow hide) */}
                    <path
                      d="M365 0C392.614 0 415 22.3858 415 50V264C415 291.614 392.614 314 365 314H54C26.3858 314 4 291.614 4 264V102C4 90.9543 12.9543 82 24 82H70C81.0457 82 90 73.0457 90 62V20C90 8.95431 98.9543 0 110 0H365Z"
                      fill="white"
                      filter="url(#dropShadow)"
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
                      filter="url(#dropShadow)"
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
                      className="absolute opacity-0 top-1/2 left-1/2 h-[4.3rem] w-[4.3rem] 
        bg-secondary rounded-full 
        transition-all duration-[1.5s] ease-in-out
        -translate-x-[80px] -translate-y-[40px] 
        group-hover:opacity-100 group-hover:-translate-x-1/2 group-hover:-translate-y-1/2"
                    />

                    {/* Icon (slow color change) */}
                    <Palette
                      style={{
                        width: 48,
                        height: 48,
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
                      width: 250,
                      height: 60,
                      top: 0,
                      left: 90,
                      transition: "transform 1500ms ease-in-out",
                    }}
                    className="group-hover:translate-x-4"
                  >
                    <h3 className="font-bold text-[18px]">
                      UX/UI <br /> Design
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
                    <p>
                      At Enum Digital, we confidently deliver the stunning
                      website design &amp; development service in a very
                      discounted price. Our Best and Affordable Web Design
                    </p>
                  </div>
                </div>
              </div>
            </div>
          {/*  */}
          {" "}
  <FocusOnSelect className="!block sm:!hidden" />
          {" "}
            <div className="hidden md:flex space-x-2 text-black font-medium my-10">
              <FirstAnimatedButton />
              <SecondAnimatedButton />
            </div>
          </section>
        </div>
      </div>
    </>
  );
}

export default SocialMediaMarketOriginal;
