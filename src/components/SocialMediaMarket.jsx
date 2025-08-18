import { TiDeviceDesktop } from "react-icons/ti";

export default function SocialMediaMarket() {
  return (
    <section className="relative bg-white text-white overflow-hidden mt-0">
      {/* Content */}
      <div
        className="relative pt-32 pb-10 md:pb-20  bg-black"
        style={{
          borderRadius: "50% 50% 0 0 / 200px 200px 0 0",
          transform: "scaleX(1.2)",
        }}
      >
        <div className="container mx-auto text-center p-6 md:p-10">
          {/* Header */}
          <div className="header bg-gray-400">
            <button className="border-2 border-dashed border-secondary text-secondary px-4 py-3 rounded-full text-sm mb-8 hover:border-gray-400 transition-colors">
              We provide quality services
            </button>

            <h2 className="text-3xl md:text-6xl font-bold mb-6">
              Our Social Media Marketing
              <br />
              Service Deliverables
            </h2>

            <p className="text-gray-300 text-sm p-6 pt-2">
              WWe deliver effective, efficient & innovative digital services.
            </p>
          </div>

          {/* Cards Row - Made responsive: single column on mobile, 2 columns on tablet, 4 columns on desktop */}
          <div className="flex justify-center flex-wrap gap-6 max-w-4xl md:max-w-5xl mx-auto">
            {[...Array(9)].map((_, index) => (
              <div
                key={index}
                className="relative w-full max-w-xs mx-auto group cursor-pointer"
              >
                <div
                  style={{
                    position: "relative",
                    width: 280,
                    height: 250,
                    margin: "0 auto",
                    transform: "translateY(0px)",
                    transition: "transform 800ms ease-out",
                  }}
                >
                  {/* Card Background SVG */}
                  <svg
                    width="100%"
                    height="100%"
                    viewBox="0 0 326 251"
                    xmlns="http://www.w3.org/2000/svg"
                    style={{ position: "absolute", top: 0, left: 0, zIndex: 0 }}
                  >
                    <defs>
                      <filter id="dropShadow">
                        <feDropShadow
                          dx={0}
                          dy={4}
                          stdDeviation={4}
                          floodColor="black"
                          floodOpacity="0.15"
                        />
                      </filter>
                    </defs>
                    <path
                      d="M284 0C305.539 0 323 17.461 323 39V206C323 227.539 305.539 245 284 245H42C20.461 245 3 227.539 3 206V79C3 70.716 9.716 64 18 64H54C62.284 64 70 56.284 70 48V16C70 7.716 76.716 1 85 1H284Z"
                      fill="white"
                      filter="url(#dropShadow)"
                      className="group-hover:opacity-0 transition-opacity duration-700 ease-out"
                    />
                    <path
                      d="M42 3C20.461 3 3 20.461 3 42V206C3 227.539 20.461 245 42 245H284C305.539 245 323 227.539 323 206V42C323 20.461 305.539 3 284 3H42Z"
                      fill="white"
                      filter="url(#dropShadow)"
                      className="opacity-0 group-hover:opacity-100 transition-opacity duration-700 ease-out"
                    />
                  </svg>

                  {/* Icon Container */}
                  <div
                    style={{
                      position: "relative",
                      top: "1.5rem",
                      left: "0.8rem",
                      width: 48,
                      height: 48,
                      zIndex: 2,
                    }}
                  >
                    <div className="absolute h-12 w-12 bg-transparent rounded-full top-0 flex items-center justify-center opacity-100 scale-100 group-hover:opacity-0 group-hover:scale-75 transition-all duration-700 ease-out">
                      <TiDeviceDesktop className="text-gray-200 text-3xl transition-colors duration-700" />
                    </div>

                    <div
                      className="absolute p-4 bg-secondary rounded-full -top-5 -left-5 opacity-0 scale-50 -translate-x-2 -translate-y-2 group-hover:opacity-100 group-hover:scale-100 group-hover:translate-x-5 group-hover:translate-y-7 "
                      style={{
                        transition: "all 0.69s ease-out",
                      }}
                    >
                      <TiDeviceDesktop className="text-black text-lg transition-colors duration-100" />
                    </div>
                  </div>

                  {/* Card Title */}
                  <div
                    style={{
                      position: "relative",
                      zIndex: 1,
                      width: 190,
                      height: 48,
                      top: -8,
                      left: 70,
                    }}
                  >
                    <h3 className="font-bold text-[16px] text-gray-800 leading-tight">
                      Web development
                    </h3>
                  </div>

                  {/* Card Description */}
                  <div
                    style={{
                      position: "relative",
                      zIndex: 1,
                      padding: "0.8rem 1.5rem 1.5rem 3rem",
                    }}
                  >
                    <p className="text-gray-600 text-xs leading-relaxed">
                      At Enum Digital, we confidently deliver the stunning
                      website design & development service in a very discounted
                      price. Our Best and Affordable Web Design
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
