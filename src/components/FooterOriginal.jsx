import Logo from '../assets/images/logo/logo.png'
import Shad from "../assets/images/Footer/HOPLON & CO.svg";

function FooterOriginal() {
  return (
    <>
      <div
        className=""
        style={{
          position: "relative",
          overflow: "hidden",
          backgroundColor: "#000",
        }}
      >
        <svg
          width="100%"
          style={{ height: "clamp(80px, 1vw, 120px)" }}
          className="block "
          viewBox="0 0 1920 120"
          xmlns={Shad}
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          <defs>
            <linearGradient id="_S_4_" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#D8FF36" />
              <stop offset="100%" stopColor="#D8FF36" />
            </linearGradient>
          </defs>
          <ellipse cx={960} cy={120} rx={1000} ry={120} fill="url(#_S_4_)" />
        </svg>
        <div style={{ position: "relative", zIndex: 1 }}>
          <img
            src={Shad}
            alt=""
            className="absolute bottom-[7rem] w-full h-auto z-0 pointer-events-none opacity-5"
            style={{ objectFit: "cover" }}
          />
          <section className="bg-[#D8FF36] flex flex-col text-black items-center justify-center px-6 ">
            <img
              alt="logo"
              loading="lazy"
              width={300}
              height={100}
              decoding="async"
              data-nimg={1}
              className="-mt-0 filter grayscale brightness-0"
              style={{ color: "transparent" }}
              src={Logo}
            />
            <h2 className="my-2 mt-0">DISCLAIMER</h2>
            <h2 className="text-black text-center w-[920px] font-[300] text-[13px] mb-10">
              All third-party company names, brand names, trademarks, and logos
              featured on this website are the property of their respective
              owners. Hoplon &amp; Co. does not claim any ownership or
              association with these third-party assets and has no control over
              the content or materials they represent. Any resemblance to
              content found elsewhere on the internet is purely coincidental.
            </h2>
            <h2 className="text-black text-center w-[920px] font-[300] text-[13px] mb-10">
              All logos, trademarks, designs, layouts, content, service marks,
              photos, and related materials mentioned or displayed on this
              website and in any associated proposals are the property of their
              respective copyright holders. These items are used solely for
              reference, demonstration, or to reflect the collective experience
              of our team, collaborators, contractors, or affiliates.
            </h2>
            <h2 className="text-black text-center w-[920px] font-[300] text-[13px] mb-10">
              Hoplon &amp; Co. is an independent entity and is not affiliated
              with any third-party brands unless explicitly stated.
            </h2>
            <h2 className="w-full text-center border-1 rounded-full p-2 text-white bg-black border-black">
              © 2025 Hoplon &amp; Co. All rights reserved.
            </h2>
            <div className="h-10" />
          </section>
        </div>
      </div>
    </>
  );
}

export default FooterOriginal;
