import { Button } from "@mui/material"

export default function CurvedFooter() {
  return (
    <footer className="relative overflow-hidden bg-black">
      <div
        className="bg-lime-400 relative overflow-hidden"
        style={{
          borderRadius: "50% 50% 0 0 / 200px 200px 0 0",
          minHeight: "400px",
          transform: "scaleX(1.2)",
        }}
      >
        {/* Main footer content */}
        <div className="flex items-center justify-center pt-24 pb-16 px-8" style={{ transform: "scaleX(0.83)" }}>
          <div className="max-w-4xl mx-auto text-center">
            {/* Company name */}
            <h2 className="text-2xl font-bold text-black mb-4">hoplon & co.</h2>

            {/* Description text */}
            <p className="text-black text-sm leading-relaxed mb-8 max-w-3xl mx-auto">
             All third-party company names, brand names, trademarks, and logos featured on this website are the property of their respective owners. Hoplon & Co. does not claim any ownership or association with these third-party assets and has no control over the content or materials they represent. Any resemblance to content found elsewhere on the internet is purely coincidental.
            </p>
            <p className="text-black text-sm leading-relaxed mb-8 max-w-3xl mx-auto">

All logos, trademarks, designs, layouts, content, service marks, photos, and related materials mentioned or displayed on this website and in any associated proposals are the property of their respective copyright holders. These items are used solely for reference, demonstration, or to reflect the collective experience of our team, collaborators, contractors, or affiliates.
Hoplon & Co. is an independent entity and is not affiliated with any third-party brands unless explicitly stated.
            </p>

            {/* Call to action button */}
            <Button className="!bg-black !w-full !text-white px-8 !py-3 !rounded-2xl !font-sm">
              © 2025 Hoplon & Co. All rights reserved.
            </Button>
          </div>
        </div>
      </div>
    </footer>
  )
}
