// import React from 'react';
import Aged from '../assets/images/industry/Aged.png';
import ThirdAnimatedButton from './AnimatedBtn3';
import SecondAnimatedButton from './AnimatedBtn2';
import IndustryScroller from './ScrollerIndustry';
function IndustriesOriginal() {
  return (
    <section className="bg-transparent flex flex-col justify-center px-6 mt-0 max-w-7xl mx-auto overflow-hidden">
      <div className="my-5 flex flex-col md:flex-col  max-w-[1400px]">
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
       <ThirdAnimatedButton />
       <SecondAnimatedButton />
      </div>
    </section>
  );
}

export default IndustriesOriginal;
