import React from "react";

function FixButton() {
  return (
    <>
      <div className="absolute right-0 top-1/2 transform -translate-y-1/2">
        <div className="flex flex-col">
          <div className="w-[67px] h-[83px] bg-[#d8ff36] rounded-l-[25px]" />
          <div className="w-[67px] h-[83px] bg-[#989898] rounded-l-[25px] flex items-center justify-center">
            <img className="w-[47px] h-12 object-cover" alt="Asset" />
          </div>
          <div className="w-[69px] h-[255px] rounded-l-[25px] border border-white bg-gradient-to-b from-[#d8ff36] to-[#829920] flex items-center justify-center">
            <span className="-rotate-90 [font-family:'Epilogue',Helvetica] font-semibold text-black text-2xl whitespace-nowrap">
              Call Back
            </span>
          </div>
        </div>
      </div>
    </>
  );
}

export default FixButton;
