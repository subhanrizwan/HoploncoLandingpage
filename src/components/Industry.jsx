import { Button } from "@mui/material";
import Aged from "../assets/images/industry/Aged.png";
const IndustriesSection = () => {
  const industries = [
    { name: ["Security &", "Manpower"], icon: "🏦" },
    { name: ["E-Learning &", "Auditing"], icon: "📚" },
    { name: ["Event", "Marketing"], icon: "📅" },
    { name: ["Accounting &", "Auditing"], icon: "📊" },
    { name: ["Automotive", "Car Dealers"], icon: "🚗" },
    { name: ["Travel &", "Tourism"], icon: "✈️" },
    { name: ["Wholesale", "and Retail", "Brands"], icon: "🏪" },
    { name: ["Food &", "Beverage"], icon: "🍽️" },
    { name: ["Restaurants", "& Hotels"], icon: "🏨" },
    { name: ["Healthcare", "Services"], icon: "🏥" },
    { name: ["Telecom", "Integrations"], icon: "📡" },
    { name: ["Medical &", "Clinics"], icon: "⚕️" },
    { name: ["Legal &", "Lawyers"], icon: "⚖️" },
    { name: ["Oil & Gas", "Companies"], icon: "⛽" },
    { name: ["Real Estate", "Construction"], icon: "🏠" },
    { name: ["Public", "Affairs"], icon: "🏛️" },
  ];

  const getColumnItems = (columnIndex) => {
    const itemsPerColumn = Math.ceil(industries.length / 4);
    const startIndex = columnIndex * itemsPerColumn;
    const endIndex = Math.min(startIndex + itemsPerColumn, industries.length);
    return industries.slice(startIndex, endIndex);
  };

  return (
    <section className="bg-gradient-to-b from-gray-200/100 via-white to-white py-16 px-6 md:px-10 shadow-inner"
  >      <style jsx>{`
          @keyframes scrollUp {
            0% {
              transform: translateY(0);
            }
            100% {
              transform: translateY(-50%);
            }
          }

          @keyframes scrollDown {
            0% {
              transform: translateY(-50%);
            }
            100% {
              transform: translateY(0);
            }
          }

          .scroll-up {
            animation: scrollUp 15s linear infinite;
          }

          .scroll-down {
            animation: scrollDown 15s linear infinite;
          }

          .column-container {
            height: 400px;
            overflow: hidden;
            position: relative;
          }

          .scroll-content {
            display: flex;
            flex-direction: column;
            gap: 16px;
          }
        `}</style>

      <div className="max-w-7xl mx-auto">
        {/* Header Badge - moved to left alignment */}
        <div className="text-left mb-8">
          <div className="inline-block bg-lime-400 text-black px-6 py-2 rounded-full text-sm font-medium mb-6">
            Industries We Serve
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left Content */}
          <div className="space-y-6">
            <h2 className="text-4xl lg:text-5xl font-bold text-black leading-tight">
              We Designed & Developed
              <br />
              Websites For
            </h2>

            <p className="text-gray-600 text-lg leading-relaxed max-w-lg">
              Our specialized expert professionals to create, develop and design
              responsive websites which will be displayed on any device
              according to its screen size.
            </p>

            {/* Character Illustration */}
            <div className="relative w-full max-w-md mx-auto lg:mx-0 mt-8">
              <img
                src={Aged}
                alt="Professional character with laptop"
                width={400}
                height={300}
                className="w-full h-auto"
              />
            </div>
          </div>
          

          <div className="px-0 md:px-4">
            <div className="grid grid-cols-4 gap-0 md:gap-4">
              {[0, 1, 2, 3].map((columnIndex) => {
                const columnItems = getColumnItems(columnIndex);
                const isEvenColumn = columnIndex % 2 === 0;

                return (
                  <div key={columnIndex} className="column-container">
                    <div
                      className={`scroll-content ${
                        isEvenColumn ? "scroll-up" : "scroll-down"
                      }`}
                    >
                      {/* Double the items for seamless infinite loop */}
                      {[...columnItems, ...columnItems].map(
                        (industry, index) => (
                          <div
                            key={`${columnIndex}-${index}`}
                            className="bg-white rounded-full border-2 border-dashed border-gray-300 p-3 shadow-md hover:shadow-lg transition-shadow duration-200 flex flex-col items-center justify-center text-center w-20 h-20 mx-auto relative flex-shrink-0"
                          >
                            <div className="text-lg mb-1">{industry.icon}</div>
                            <div className="text-[9px] text-gray-800 font-medium leading-tight">
                              {industry.name.map((line, lineIndex) => (
                                <div key={lineIndex}>{line}</div>
                              ))}
                            </div>
                          </div>
                        )
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:space-x-4 w-full sm:w-auto p-6 lg:pb-0 pb-0">
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
    </section>
  );
};

export default IndustriesSection;
