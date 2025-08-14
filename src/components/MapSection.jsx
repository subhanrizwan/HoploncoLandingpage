
import Map from '../assets/images/mapsection/Frame.png'
export default function MapSection() {
  return (
    <section className="relative bg-white text-white overflow-hidden mt-10">
      {/* Top curved border */}
      {/* <div
        className="absolute top-0 left-0 right-0 h-24 bg-gray-500"
        style={{
          borderRadius: "50% 50% 0 0 / 200px 200px 0 0",
          transform: "scaleX(1.2)",
        }}
      /> */}

      {/* Content */}
      <div className="relative pt-32 pb-20 px-4 bg-black"  style={{
          borderRadius: "50% 50% 0 0 / 200px 200px 0 0",
          transform: "scaleX(1.2)",
        }}>
        <div className="container mx-auto text-center">
          {/* Header */}
          <div className="mb-16">
           <button className="border-2 border-dashed border-gray-600 text-gray-300 px-4 py-2 rounded-full text-sm mb-8 hover:border-gray-400 transition-colors">
  View Our Locations
</button>


            <h2 className="text-5xl md:text-6xl font-bold mb-6">
              Your Dream Website,
              <br />
              Made Reality
            </h2>

            <p className="text-gray-300 text-lg max-w-2xl mx-auto leading-relaxed">
              We provide bespoke solutions that bridge the gap between commercial possibilities and creative resolution
              while delivering effectiveness for our clients
            </p>
          </div>

          {/* World Map */}
          <div className="relative max-w-4xl mx-auto">
            <img
              src={Map}
              alt="World map showing our global locations"
              width={800}
              height={400}
              className="w-full h-auto"
              priority
            />

            {/* Location markers - positioned absolutely over the map */}
            {/* <div className="absolute top-1/4 left-1/3 w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-lg">
              <div className="w-3 h-3 bg-gray-800 rounded-full"></div>
            </div>

            <div className="absolute top-1/2 right-1/3 w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-lg">
              <div className="w-3 h-3 bg-gray-800 rounded-full"></div>
            </div> */}
          </div>
        </div>
      </div>

      {/* Bottom curved border that connects to footer */}
      {/* <div
        className="absolute bottom-0 left-0 right-0 h-24 bg-lime-400"
        style={{
          borderRadius: "50% 50% 0 0 / 200px 200px 0 0",
          transform: "scaleX(1.2)",
        }}
      /> */}
    </section>
  )
}
