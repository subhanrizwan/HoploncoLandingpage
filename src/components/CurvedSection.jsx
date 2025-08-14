import { Button } from "@mui/material"
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

export default function CurvedSection() {
  return (
    <>
    <div className="relative w-full top-0 overflow-hidden bg-white" >

      {/* Curved Section */}
      <div
        className="relative bg-white pt-0 pb-32 px-8 "
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
          <div className="flex items-center justify-center space-x-8 mb-4">
            <button className="w-12 h-12 bg-black rounded-full flex items-center justify-center hover:bg-gray-800 transition-colors">
              <ChevronLeftIcon className="w-6 h-6 text-white" />
            </button>
            <button className="w-12 h-12 bg-black rounded-full flex items-center justify-center hover:bg-gray-800 transition-colors">
              <ChevronRightIcon className="w-6 h-6 text-white" />
            </button>
          </div>

          {/* Buttons */}
          <div className="flex items-center space-x-4">
            <Button
              variant="contained"
              sx={{
                backgroundColor: "#000",
                color: "#fff",
                borderRadius: "25px",
                padding: "12px 24px",
                textTransform: "none",
                fontSize: "14px",
                fontWeight: 500,
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
                padding: "12px 24px",
                textTransform: "none",
                fontSize: "14px",
                fontWeight: 500,
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
    </div>
     {/* <div
        className="relative bg-gray-100 pt-16 pb-20 px-8 "
        style={{
          borderRadius: "50% 50% 0 0 / 200px 200px 0 0",
          transform: "scaleX(1.2)",
        }}

      ></div> */}
      </>
  )
}
