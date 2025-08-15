import { Button } from "@mui/material";

export default function CurvedFooter() {
  return (
    <footer className="relative overflow-hidden bg-black">
      <div
        className="bg-lime-400 relative overflow-hidden pt-16 sm:pt-20 md:pt-24 lg:pt-28 pb-16 sm:pb-20 md:pb-24 lg:pb-24 px-4 sm:px-6 md:px-12 lg:px-24"
        style={{
          borderRadius: "50% 50% 0 0 / 200px 200px 0 0",
          minHeight: "400px",
          transform: "scaleX(1.2)",
        }}
      >
        {/* Main footer content */}
        <div
          className="flex items-center justify-center"
          style={{ transform: "scaleX(0.833)" }}
        >
          <div className="max-w-4xl mx-auto text-center space-y-6">

            {/* Company name */}
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-black mb-4">
              Hoplon & Co.
            </h2>

            {/* Description text */}
            <p className="text-xs sm:text-base md:text-base lg:text-lg text-black leading-relaxed mb-4 sm:mb-6">
              All third-party company names, brand names, trademarks, and logos featured on this website are the property of their respective owners. Hoplon & Co. does not claim any ownership or association with these third-party assets and has no control over the content or materials they represent. Any resemblance to content found elsewhere on the internet is purely coincidental.
            </p>
            <p className="text-xs sm:text-base md:text-base lg:text-lg text-black leading-relaxed mb-6 sm:mb-8">
              All logos, trademarks, designs, layouts, content, service marks, photos, and related materials mentioned or displayed on this website and in any associated proposals are the property of their respective copyright holders. These items are used solely for reference, demonstration, or to reflect the collective experience of our team, collaborators, contractors, or affiliates. Hoplon & Co. is an independent entity and is not affiliated with any third-party brands unless explicitly stated.
            </p>

            {/* Call to action button */}
            <Button
              variant="contained"
              sx={{
                backgroundColor: "#000",
                color: "#fff",
                borderRadius: "25px",
                padding: { xs: "10px 16px", sm: "12px 20px", md: "14px 24px" },
                fontSize: { xs: "12px", sm: "14px", md: "14px" },
                width: "100%",
                maxWidth: "400px",
                textTransform: "none",
                "&:hover": { backgroundColor: "#333" },
              }}
            >
              © 2025 Hoplon & Co. All rights reserved.
            </Button>
          </div>
        </div>
      </div>
    </footer>
  );
}
