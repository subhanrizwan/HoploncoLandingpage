"use client"
import { Button } from "@mui/material"
import { useState } from "react"

export default function ThirdAnimatedButton({ children="Talk To Our Expert", onClick, className = "" }) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <button
      className={`
        relative overflow-hidden
        px-8 py-4 md:px-10 md:text-sm
        text-white font-semibold text-lg
        rounded-full
        transition-all duration-1000 ease-in-out
        focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2
        ${className}
      `}
      onClick={onClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="absolute inset-0 bg-secondary rounded-full" />

      <div
        className={`
          absolute inset-0 bg-black rounded-full
          transition-all duration-[1.3s] ease-in-out
          ${isHovered ? "-translate-y-full opacity-0" : "translate-y-0 opacity-100"}
        `}
        style={{
          clipPath: "polygon(0 0, 100% 0, 100% 51%, 0 51%)",
        }}
      >
        <span
          className="absolute inset-0 flex items-center justify-center text-white"
          style={{
            clipPath: "polygon(0 0, 100% 0, 100% 51%, 0 51%)",
          }}
        >
          {children}
        </span>
      </div>

      <div
        className={`
          absolute inset-0 bg-black rounded-full
          transition-all duration-[1.3s] ease-in-out
          ${isHovered ? "translate-y-full opacity-0" : "translate-y-0 opacity-100"}
        `}
        style={{
          clipPath: "polygon(0 49%, 100% 49%, 100% 100%, 0 100%)",
        }}
      >
        <span
          className="absolute inset-0 flex items-center justify-center text-white"
          style={{
            clipPath: "polygon(0 49%, 100% 49%, 100% 100%, 0 100%)",
          }}
        >
          {children}
        </span>
      </div>

      <span
        className={`
          absolute inset-0 flex items-center justify-center text-black font-semibold
          transition-all duration-1000 ease-in-out
          ${isHovered ? "scale-110 opacity-100" : "scale-95 opacity-0"}
        `}
      >
        {children}
      </span>

      {/* Invisible text to maintain button dimensions */}
      <span className="opacity-0" aria-hidden="true">
        {children}
      </span>
    </button>
  )
}
