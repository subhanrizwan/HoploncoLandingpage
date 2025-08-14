import React from "react";

export default function CurvedBackgroundSection() {
  return (
    <section className="relative overflow-hidden">
      {/* Curved background */}
      <div className="absolute inset-0 bg-gradient-to-b from-lime-300 to-white">
        <svg
          className="absolute top-0 left-0 w-full h-24"
          viewBox="0 0 1040 620"
          preserveAspectRatio="none"
        >
          <path
            fill="white"
            d="M0,128 C480,256 960,0 1440,128 L1440,0 L0,0 Z"
          />
        </svg>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto py-24 text-center">
        <h1 className="text-4xl font-bold">Top Social Media Marketing Agency in Dubai UAE</h1>
        <p className="mt-4 text-lg">Your tagline or subheading goes here</p>
      </div>
    </section>
  );
}
