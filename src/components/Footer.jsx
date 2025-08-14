import { Button } from "@/components/ui/button"

export default function CurvedFooter() {
  return (
    <footer className="relative mt-20">
      {/* Curved top background */}
      <div className="absolute inset-x-0 top-0 h-20 bg-lime-400 rounded-t-[100px]"></div>

      {/* Main footer content */}
      <div className="bg-lime-400 pt-20 pb-8 px-8 mx-4 rounded-l-3xl rounded-r-3xl">
        <div className="max-w-4xl mx-auto text-center">
          {/* Company name */}
          <h2 className="text-2xl font-bold text-black mb-4">hoplon & co.</h2>

          {/* Description text */}
          <p className="text-black text-sm leading-relaxed mb-8 max-w-3xl mx-auto">
            Hoplon & Co. is a creative agency specializing in brand identity, digital experiences, and strategic
            communications. We work with forward-thinking companies to create meaningful connections between brands and
            their audiences through innovative design solutions and compelling storytelling. Our team combines strategic
            thinking with creative excellence to deliver results that drive business growth and cultural impact.
          </p>

          {/* Call to action button */}
          <Button className="bg-black text-lime-400 hover:bg-gray-800 px-8 py-3 rounded-full font-medium">
            Let's work on the right project
          </Button>
        </div>
      </div>
    </footer>
  )
}
