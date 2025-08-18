// import React from 'react';
import Aged from '../assets/images/industry/Aged.png';
import IndustryScroller from './ScrollerIndustry';
function IndustriesOriginal() {
  return (
    <section className="bg-transparent flex flex-col justify-center px-6 mt-24 max-w-7xl mx-auto">
      <div className="my-5 flex flex-col md:flex-row max-w-[1400px]">
        <div>
          <div className="my-4">
            <span className="bg-secondary text-black text-[14px] border-1 p-3 px-8 border-dashed rounded-full border-primary">
              Industries We Serve
            </span>
          </div>
          <h1 className="text-black font-[700] text-4xl md:text-7xl max-w-[800px] leading-tight my-6">
            We Designed & Developed <br /> Websites For
          </h1>
          <h2 className="text-[#888888] max-w-[800px] font-[300] text-[20px]">
            Our specialized expert professionals to create, develop and design
            responsive websites which will be displayed on any device according
            to its screen size.
          </h2>
          <img
            alt="statue"
            data-nimg="1"
            decoding="async"
            height="674"
            loading="lazy"
            src={Aged}
            style={{
              color: "transparent",
            }}
            width="806"
          />
        </div>
        {/* scroller vertically */}
        <IndustryScroller />
      </div>
      <div className="hidden md:flex space-x-2 text-black font-medium my-10 mx-auto">
        <a
          className="text-white border border-primary bg-black px-4 py-2 rounded-full text-sm hover:bg-white hover:text-black transition"
          href="/contact/"
        >
          Talk To Our Expert
        </a>
        <a
          className="text-black border border-primary bg-white px-4 py-2 rounded-full text-sm hover:bg-white hover:text-black transition"
          href="#"
        >
          Get a Quote
        </a>
      </div>
    </section>
  );
}

export default IndustriesOriginal;
