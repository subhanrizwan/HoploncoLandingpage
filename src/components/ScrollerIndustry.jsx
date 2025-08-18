
"use client"
import Logo from '../assets/images/industriesscroller/industry-3.png';

function IndustryScroller() {
  const CircleItem = () => (
    <li className="flex flex-col !items-center text-center">
      <div className="border-2 border-dashed border-gray-300 rounded-full w-24 h-24 md:w-28 md:h-28 flex flex-col items-center justify-center bg-[#F5F5F5]">
        <img src={Logo} alt="Industry Logo" className="w-12 h-12 object-contain" />
        <span className="mt-2 text-[13px] break-all text-[#6D6D6D] leading-tight max-w-[5rem]">
          Industry
        </span>
      </div>
    </li>
  )

  return (
    <>
      <style jsx>{`
        @keyframes marqueeY {
          0% { transform: translateY(0); }
          100% { transform: translateY(-50%); } /* sirf half tak */
        }
        @keyframes marqueeYReverse {
          0% { transform: translateY(-50%); }
          100% { transform: translateY(0); }
        }
        .animate-marqueeY {
          animation: marqueeY var(--marquee-duration, 30s) linear infinite;
        }
        .animate-marqueeYReverse {
          animation: marqueeYReverse var(--marquee-duration, 30s) linear infinite;
        }
      `}</style>

      {/* scroller vertically */}
      <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-2 md:gap-2 md:mt-50 items-center overflow-hidden mx-auto">
        {/* Column 1 - Top to Bottom */}
        <div
          className="relative h-[560px] w-[160px] md:w-[200px] overflow-hidden 
          [mask-image:linear-gradient(to_bottom,transparent,black_12%,black_88%,transparent)] 
          [-webkit-mask-image:linear-gradient(to_bottom,transparent,black_12%,black_88%,transparent)]"
          style={{ "--marquee-duration": "30s" }}
        >
          <ul className="flex flex-col items-center gap-6 animate-marqueeY">
            {Array.from({ length: 12 }, (_, i) => <CircleItem key={i} />)}
            {Array.from({ length: 12 }, (_, i) => <CircleItem key={`dup-${i}`} />)}
          </ul>
        </div>

        {/* Column 2 - Bottom to Top */}
        <div className="hidden md:block">
          <div
            className="relative h-[560px] w-[160px] md:w-[200px] overflow-hidden 
            [mask-image:linear-gradient(to_bottom,transparent,black_12%,black_88%,transparent)] 
            [-webkit-mask-image:linear-gradient(to_bottom,transparent,black_12%,black_88%,transparent)]"
            style={{ "--marquee-duration": "34s" }}
          >
            <ul className="flex flex-col items-center gap-6 animate-marqueeYReverse">
              {Array.from({ length: 12 }, (_, i) => <CircleItem key={i} />)}
              {Array.from({ length: 12 }, (_, i) => <CircleItem key={`dup-${i}`} />)}
            </ul>
          </div>
        </div>

        {/* Column 3 - Top to Bottom */}
        <div className="hidden md:block">
          <div
            className="relative h-[560px] w-[160px] md:w-[200px] overflow-hidden 
            [mask-image:linear-gradient(to_bottom,transparent,black_12%,black_88%,transparent)] 
            [-webkit-mask-image:linear-gradient(to_bottom,transparent,black_12%,black_88%,transparent)]"
            style={{ "--marquee-duration": "32s" }}
          >
            <ul className="flex flex-col items-center gap-6 animate-marqueeY">
              {Array.from({ length: 12 }, (_, i) => <CircleItem key={i} />)}
              {Array.from({ length: 12 }, (_, i) => <CircleItem key={`dup-${i}`} />)}
            </ul>
          </div>
        </div>

        {/* Column 4 - Bottom to Top */}
        <div
          className="relative h-[560px] w-[160px] md:w-[200px] overflow-hidden 
          [mask-image:linear-gradient(to_bottom,transparent,black_12%,black_88%,transparent)] 
          [-webkit-mask-image:linear-gradient(to_bottom,transparent,black_12%,black_88%,transparent)]"
          style={{ "--marquee-duration": "36s" }}
        >
          <ul className="flex flex-col items-center gap-6 animate-marqueeYReverse">
            {Array.from({ length: 12 }, (_, i) => <CircleItem key={i} />)}
            {Array.from({ length: 12 }, (_, i) => <CircleItem key={`dup-${i}`} />)}
          </ul>
        </div>
      </div>
    </>
  )
}

export default IndustryScroller
