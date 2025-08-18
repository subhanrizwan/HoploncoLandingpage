import Map from '../assets/images/mapsection/locations-2.svg'

function MapOriginal() {
  return (
    <>
    <div
  className=""
  style={{ position: "relative", overflow: "hidden", backgroundColor: "#fff" }}
>
  <svg
    width="100%"
    style={{ height: "clamp(80px, 1vw, 120px)" }}
    className="block "
    viewBox="0 0 1920 120"
    xmlns="http://www.w3.org/2000/svg"
    preserveAspectRatio="none"
    aria-hidden="true"
  >
    <defs>
      <linearGradient id="_S_3_" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stopColor="#000" />
        <stop offset="100%" stopColor="#000" />
      </linearGradient>
    </defs>
    <ellipse cx={960} cy={120} rx={1000} ry={120} fill="url(#_S_3_)" />
  </svg>
  <div style={{ position: "relative", zIndex: 1 }}>
    <section className="bg-black flex flex-col items-center justify-center px-6">
      <div className="my-4">
        <span className="text-secondary text-[14px] border-[1.2px] p-3 m-4 px-8 border-dashed rounded-full border-secondary">
          View Our Locations
        </span>
      </div>
      <div className="flex justify-center flex-col items-center px-6">
      <h1 className="text-white font-[700] text-4xl md:text-7xl text-center leading-tight my-6">
        Your Dream Website, Made Reality
      </h1>
      <h2 className="text-[#979595] text-center font-[300] text-[20px] mb-10">
        We provide bespoke solutions that bridge the gap between commercial
        possibilities and creative resolution, while delivering effectiveness
        for our clients.
      </h2>
      </div>
      <div className="my-10 max-w-[1200px]">
        <img
          alt="locations"
          loading="lazy"
          width={1443}
          height={570}
          decoding="async"
          data-nimg={1}
          style={{ color: "transparent" }}
          src={Map}
        />
      </div>
    </section>
  </div>
</div>

    </>
  )
}

export default MapOriginal