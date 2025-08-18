"use client"
import ThirdAnimatedButton from './AnimatedBtn3';
import SecondAnimatedButton from './AnimatedBtn2';
import { useState, useEffect } from "react"
import { Tabs, Tab, Box } from "@mui/material"

const commonTechnologies = [
  { name: "React", icon: "https://cdn.simpleicons.org/react" },
  { name: "Ionic", icon: "https://cdn.simpleicons.org/ionic" },
  { name: "Next.js", icon: "https://cdn.simpleicons.org/nextdotjs" },
  { name: "Vue", icon: "https://cdn.simpleicons.org/vuedotjs" },
  { name: "Angular", icon: "https://cdn.simpleicons.org/angular" },
  { name: "Svelte", icon: "https://cdn.simpleicons.org/svelte" },
]

// Technology data for each category - all using the same icons now
const technologyData = {
  mobile: commonTechnologies,
  frontend: commonTechnologies,
  database: commonTechnologies,
  backend: commonTechnologies,
  cms: commonTechnologies,
  devops: commonTechnologies,
}

function TechnologiesOriginal() {
  const [activeTab, setActiveTab] = useState(1) // Start with Front End tab

  const handleTabChange = (event, newValue) => {
    console.log("[v0] Tab clicked - Old value:", activeTab, "New value:", newValue)
    setActiveTab(newValue)
  }

  const getCurrentTechnologies = () => {
    const tabNames = ["mobile", "frontend", "database", "backend", "cms", "devops"]
    const currentCategory = tabNames[activeTab]
    console.log("[v0] Getting technologies for tab:", activeTab, "Category:", currentCategory)
    return technologyData[currentCategory] || technologyData.frontend
  }

  useEffect(() => {
    console.log("[v0] Active tab state changed to:", activeTab)
  }, [activeTab])

  return (
    <>
      <div className="" style={{ position: "relative", overflow: "hidden", background: "#000" }}>
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
            <linearGradient id="_R_b5fdb_" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#F6FFD2" />
              <stop offset="100%" stopColor="#F6FFD2" />
            </linearGradient>
          </defs>
          <ellipse cx={960} cy={120} rx={1000} ry={120} fill="url(#_R_b5fdb_)" />
        </svg>
        <div style={{ position: "relative", zIndex: 1 }}>
          <section
            className="bg-transparent flex flex-col items-center justify-center px-6"
            style={{ background: "linear-gradient(180deg, #F6FFD2, #fff)" }}
          >
            <div className="my-4">
              <span className="bg-white text-black text-[14px] border-[1.2px] p-3 m-4 px-8 border-dashed rounded-full border-[#D9D9D9]">
                Technologies&nbsp;we work with
              </span>
            </div>
            <h1 className="text-black font-[700] text-4xl md:text-7xl max-w-[800px] text-center leading-tight my-6">
              Trusted by Industry &amp; Leaders Worldwide
            </h1>
            <h2 className="text-black text-center w-full max-w-[800px] font-[300] text-[20px] px-4">
              We provide bespoke solutions that bridge the gap between commercial possibilities and creative resolution,
              while delivering effectiveness for our clients.
            </h2>

            <Box className='flex justify-center' sx={{ width: "100%", maxWidth: "800px", mt: 4, mb: 10 }}>
              <Tabs
                value={activeTab}
                onChange={handleTabChange}
                variant="scrollable"
                scrollButtons="auto"
                allowScrollButtonsMobile
                sx={{
                  "& .MuiTabs-indicator": {
                    height: 3,
                    background: "linear-gradient(90deg, #4ade80, #facc15)",
                    borderRadius: "2px",
                  },
                  "& .MuiTab-root": {
                    textTransform: "none",
                    fontSize: { xs: "14px", md: "16px" },
                    fontWeight: 500,
                    color: "#666",
                    minWidth: { xs: "auto", md: 120 },
                    padding: { xs: "12px 16px", md: "12px 24px" },
                    cursor: "pointer",
                    "&.Mui-selected": {
                      color: "#000",
                      fontWeight: 600,
                    },
                    "&:hover": {
                      color: "#000",
                      transition: "color 0.2s ease",
                    },
                  },
                  "& .MuiTabs-scrollButtons": {
                    "&.Mui-disabled": {
                      opacity: 0.3,
                    },
                  },
                }}
              >
                <Tab label="Mobile" value={0} />
                <Tab label="Front End" value={1} />
                <Tab label="Database" value={2} />
                <Tab label="Backend" value={3} />
                <Tab label="CMS" value={4} />
                <Tab label="Infra & DevOps" value={5} />
              </Tabs>
            </Box>

            <div className="w-full max-w-[400px] px-4 mb-8 mx-auto">
  <div
    key={`tab-content-${activeTab}`}
    className="flex items-center justify-center flex-wrap md:flex-nowrap gap-x-16 gap-y-4"
  >
    {getCurrentTechnologies().map((tech, index) => (
      <div
        key={`${activeTab}-${tech.name}-${index}`}
        className={`flex flex-col items-center justify-center transition-transform duration-300 ${
          index % 2 === 0 ? "md:translate-y-4" : "md:-translate-y-4"
        }`}
      >
        {/* Circular white container with shadow */}
        <div className="w-20 h-20 md:w-28 md:h-28 bg-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 flex items-center justify-center mb-3">
          <img
            alt={tech.name}
            loading="lazy"
            width={48}
            height={48}
            decoding="async"
            data-nimg={1}
            src={tech.icon || "/placeholder.svg"}
            style={{ color: "transparent" }}
            className="w-12 h-12 md:w-[93px] md:h-[93px] object-contain"
          />
        </div>
        {/* Technology name below the circle */}
        <span className="text-sm md:text-base font-medium text-gray-800 text-center">
          {tech.name}
        </span>
      </div>
    ))}
  </div>
</div>


            <div className="hidden md:flex space-x-2 text-black font-medium my-10">
              <ThirdAnimatedButton />
              <SecondAnimatedButton />
            </div>
          </section>
        </div>
      </div>
    </>
  )
}

export default TechnologiesOriginal

