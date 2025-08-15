"use client";
export default function Navigation() {
  return (
    <>
    {/* Navigation */}
<nav className="relative flex justify-center md:justify-end items-center bg-black p-4 sm:p-6 md:p-8">
  <div className="flex flex-row items-center justify-center gap-4">
    <button className="text-white border border-gradient hover:!bg-white hover:text-black px-4 sm:px-6 py-2 rounded-full transition-colors text-sm sm:text-base">
      Talk To Our Expert
    </button>
    <button className="bg-white text-black px-4 sm:px-6 py-2 hover:!bg-secondary hover:text-black rounded-full font-semibold transition-colors text-sm sm:text-base">
      Get Started
    </button>
  </div>
</nav>


        </>
  );
}
