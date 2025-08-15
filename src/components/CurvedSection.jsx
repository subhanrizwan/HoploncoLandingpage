import { Button } from "@mui/material";
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

export default function CurvedSection() {
  return (
    <div className="relative w-full overflow-hidden bg-white">

      {/* Curved Section */}
      <div
        className="relative bg-white pt-0 sm:pt-24 md:pt-32 lg:pt-0 pb-20 sm:pb-24 md:pb-32 lg:pb-10 px-4 sm:px-6 md:px-12 lg:px-24"
        style={{
          borderRadius: "50% 50% 0 0 / 200px 200px 0 0",
          transform: "scaleX(1.2)",
        }}
      >
        {/* Content Container - Counter-scale to maintain normal proportions */}
        <div
          className="flex flex-col items-center justify-center space-y-6"
          style={{ transform: "scaleX(0.833)" }} // Counter the 1.2 scale
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
          <Button
            variant="contained"
            sx={{
              backgroundColor: "#000",
              color: "#fff",
              borderRadius: "25px",
              padding: { xs: "10px 16px", sm: "12px 20px", md: "12px 24px" },
              textTransform: "none",
              fontSize: { xs: "12px", sm: "14px", md: "14px" },
              fontWeight: 500,
              width: "100%", // full width on mobile
              maxWidth: "200px", // limit size
              "&:hover": {
                backgroundColor: "#333",
              },
            }}
          >
            Talk To Our Expert
          </Button>

          <Button
            variant="outlined"
            sx={{
              borderColor: "#000",
              color: "#000",
              borderRadius: "25px",
              padding: { xs: "10px 16px", sm: "12px 20px", md: "12px 24px" },
              textTransform: "none",
              fontSize: { xs: "12px", sm: "14px", md: "14px" },
              fontWeight: 500,
              width: "100%", // full width on mobile
              maxWidth: "200px",
              "&:hover": {
                borderColor: "#333",
                backgroundColor: "rgba(0,0,0,0.04)",
              },
            }}
          >
            Get a Quote
          </Button>
        </div>
      </div>
    </div>
  );
}
