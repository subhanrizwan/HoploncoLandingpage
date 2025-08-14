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
        <div className="text-center mb-0 bg-yellow-100 py-12 px-8 rounded-lg">
          <p className="text-sm text-gray-600 mb-2">Client Studies</p>
          <h2 className="text-4xl font-bold text-black mb-4">Behind The Scenes</h2>
          <p className="text-xl text-black">Our Projects</p>
        </div>

          <div className="flex justify-center items-center min-h-[400px] relative -mb-20 z-20">
            <div className="relative w-full">
              <img
                src={ImageBanner}
                alt="Portfolio Showcase"
                className="w-full h-auto object-cover drop-shadow-2xl"
              />
            </div>
          </div>
        </div>
      </div>
  )
}
