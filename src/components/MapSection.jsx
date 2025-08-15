import Map from '../assets/images/mapsection/Frame.png'

export default function MapSection() {
  return (
    <section className="relative bg-white overflow-hidden mt-10">

      {/* Content */}
      <div
        className="relative pt-20 sm:pt-24 md:pt-32 lg:pt-30 pb-16 sm:pb-20 md:pb-28 lg:pb-16 px-4 sm:px-6 md:px-12 lg:px-10 bg-black"
        style={{
          borderRadius: "50% 50% 0 0 / 200px 200px 0 0",
          transform: "scaleX(1.2)",
        }}
      >
        <div className="container mx-auto text-center p-6">

          {/* Header */}
          <div className="mb-12 sm:mb-16 md:mb-20">
            <button className="border-2 border-dashed border-secondary text-secondary px-3 sm:px-4 md:px-6 py-3 sm:py-2 md:py-3 rounded-full text-xs sm:text-sm md:text-base mb-4 sm:mb-6  transition-colors">
              View Our Locations
            </button>

            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 text-white leading-tight">
              Your Dream Website,
              <br />
              Made Reality
            </h2>

            <p className="text-gray-300 text-base sm:text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
              We provide bespoke solutions that bridge the gap between commercial possibilities and creative resolution
              while delivering effectiveness for our clients.
            </p>
          </div>

          {/* World Map */}
          <div className="relative max-w-4xl mx-auto">
            <img
              src={Map}
              alt="World map showing our global locations"
              className="w-full h-auto sm:h-[300px] md:h-[400px] lg:h-[450px] object-contain"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  )
}
