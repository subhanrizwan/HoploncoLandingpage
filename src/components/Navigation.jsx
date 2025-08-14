"use client";
import { Button } from "@mui/material";
export default function Navigation() {
  return (
    <>
    {/* Navigation */}
        <nav className="relative z-20 flex justify-end items-center bg-black p-6 md:p-8">
          <div className="flex items-center space-x-6">
            <button className="text-white border-1 border-gradiant border px-6 py-2 rounded-full transition-colors">Talk To Our Expert </button>
            <button className="bg-white text-black px-6 py-2 rounded-full font-semibold  transition-colors">
              Get Started
            </button>
         
          </div>
        </nav>
        </>
  );
}
