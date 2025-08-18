import { Button } from "@mui/material";

export default function Technologies() {
  return (
    <section className="relative bg-black overflow-hidden ">
      {/* Main Curved Background */}
      <div className="relative  bg-gradient-to-b from-[#F6FFD2] to-white px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
        <div className="container mx-auto max-w-6xl pt-12 p-6">
          {/* Header Badge */}
          <div className="text-center mb-6 sm:mb-8">
            <span className="inline-block bg-white/80 backdrop-blur-sm text-gray-700 px-4 py-2 rounded-full text-xs sm:text-sm font-medium border border-gray-200">
              Technologies we work with
            </span>
          </div>

          {/* Main Heading */}
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-3xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-black mb-6 leading-tight max-w-4xl mx-auto">
              Trusted By Industry & Leaders{" "}
              <span className="relative">
                Worldwide
                <div className="absolute -bottom-2 left-0 right-0 h-1rounded-full"></div>
              </span>
            </h2>
          </div>

          {/* Technology Container */}
          <div className="max-w-4xl mx-auto">
            <div className="bg-transparent rounded-2xl  p-6 sm:p-8 lg:p-12 ">
              {/* Technology Tabs */}
              <div className="flex flex-wrap justify-center gap-2 sm:gap-4 lg:gap-6 mb-8 sm:mb-12">
                {[
                  "Mobile",
                  "Front End",
                  "Database",
                  "Backend",
                  "CMS",
                  "Infra And Devops",
                ].map((tech, index) => (
                  <div
                    key={index}
                    className={`px-3 sm:px-4 py-2 text-xs sm:text-sm font-medium rounded-full transition-colors cursor-pointer ${
                      index === 1
                        ? "bg-gray-800 text-white"
                        : "text-gray-600 hover:text-gray-800"
                    }`}
                  >
                    {tech}
                  </div>
                ))}
              </div>

              {/* Center Technology Icon */}
              <div className="flex justify-center mb-8 sm:mb-12">
                <div className="w-24 h-24 sm:w-32 sm:h-32 lg:w-40 lg:h-40 bg-red-500 rounded-full flex items-center justify-center shadow-lg">
                  <img
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Vector-5xo9VXAYVuqTHQyokqPYhaTKe5aUFw.svg"
                    alt="Swift Technology Logo"
                    className="w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20 text-white"
                  />
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:space-x-4 w-full sm:w-auto">
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
                    padding: "12px 24px",
                    textTransform: "none",
                    fontSize: "14px",
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
        </div>
      </div>

      {/* Bottom Green Curved Section */}
      {/* <div
        className="h-16 sm:h-20 lg:h-24"
        style={{
          background: "linear-gradient(135deg, #c4f82a 0%, #a8e600 100%)",
          borderRadius: "50% 50% 0 0 / 100px 100px 0 0",
        }}
      ></div> */}
    </section>
  );
}
