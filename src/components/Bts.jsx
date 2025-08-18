import ImageBanner from '../assets/images/btsSection/Group 1321314845.png';
import { IconButton } from '@mui/material';
import { ArrowBackIos, ArrowForwardIos } from '@mui/icons-material';
import Button from "@mui/material/Button";

export default function BtsSection() {
  return (
    <div className="relative bg-white py-20 pb-20 overflow-hidden">
      <div
        className="absolute top-0 left-0 w-full h-32 bg-white -translate-y-16"
        style={{
          borderRadius: "50% 50% 0 0 / 200px 200px 0 0",
          transform: "scaleX(1.2)",
        }}
      />

      {/* Content Container */}
        <div className="relative z-10 w-full">
        <div className="text-center mb-0 bg-gradient-to-b from-white to-[#F6FFD2] py-12 px-8 rounded-lg">
           <div className="my-4">
        <span className="text-black text-[14px] border-[1.2px] p-3 m-4 px-8 border-dashed rounded-full border-gray-300">
          View Our Locations
        </span>
      </div>
          {/* <p className="text-sm text-gray-600 mb-2 border-[1.2px] border-dashed border-gray-200 rounded-full">Client Studies</p> */}
          <h2 className="text-4xl font-bold text-black mb-4">Behind The Scenes</h2>
          <p className="text-xl text-black">Our Projects</p>
        </div>

          <div className="flex justify-center items-center min-h-[400px] relative -mb-20 z-20
          bg-gradient-to-b from-[#F6FFD2] to-white">
            <div className="relative w-full">
              <img
                src={ImageBanner}
                alt="Portfolio Showcase"
                className="w-full h-80 md:h-auto object-cover drop-shadow-2xl"
              />
            </div>
          </div>
        </div>
      </div>
  )
}
