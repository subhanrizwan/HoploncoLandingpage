import { Button } from "@mui/material";
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ThirdAnimatedButton from './AnimatedBtn3';
import SecondAnimatedButton from './AnimatedBtn2';

export default function CurvedSection() {
  return (
    <div className="relative w-full overflow-hidden bg-white">

      {/* Curved Section */}
      <div
        className="relative bg-white pt-0 sm:pt-24 md:pt-20 lg:pt-0 pb-20 sm:pb-24 md:pb-32 lg:pb-10 px-4 sm:px-6 md:px-12 lg:px-24"
      >
        {/* Content Container - Counter-scale to maintain normal proportions */}
        <div
          className="flex flex-col items-center justify-center space-y-6"
        >
          {/* Navigation Arrows */}
          <div className="flex items-center justify-center space-x-4 sm:space-x-6 md:space-x-8 mb-4">
            <button className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 bg-black rounded-full flex items-center justify-center hover:bg-gray-800 transition-colors">
              <ChevronLeftIcon className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-white" />
            </button>
            <button className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 bg-black rounded-full flex items-center justify-center hover:bg-gray-800 transition-colors">
              <ChevronRightIcon className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-white" />
            </button>
          </div>
        </div>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 mt-6 w-full sm:w-auto">
         <ThirdAnimatedButton />
         <SecondAnimatedButton />
        </div>
      </div>
    </div>
  );
}
