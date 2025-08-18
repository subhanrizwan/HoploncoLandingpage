// import React from 'react'
// function ScrollerIndustry() {
    

//   return (
//     <>
//      <style jsx>{`
//           @keyframes scrollUp {
//             0% {
//               transform: translateY(0);
//             }
//             100% {
//               transform: translateY(-50%);
//             }
//           }

//           @keyframes scrollDown {
//             0% {
//               transform: translateY(-50%);
//             }
//             100% {
//               transform: translateY(0);
//             }
//           }

//           .scroll-up {
//             animation: scrollUp 15s linear infinite;
//           }

//           .scroll-down {
//             animation: scrollDown 15s linear infinite;
//           }

//           .column-container {
//             height: 400px;
//             overflow: hidden;
//             position: relative;
//           }

//           .scroll-content {
//             display: flex;
//             flex-direction: column;
//             gap: 16px;
//           }
//         `}</style>
//      {/* scroller vertically */}
//         <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-2 md:gap-2 md:mt-50 overflow-hidden mx-auto">
//           <div
//             className="relative h-[560px] w-[160px] md:w-[200px] overflow-hidden   [mask-image:linear-gradient(to_bottom,transparent,black_12%,black_88%,transparent)]   [-webkit-mask-image:linear-gradient(to_bottom,transparent,black_12%,black_88%,transparent)]"
//             style={{
//               "--marquee-duration": "30s",
//             }}
//           >
//             <ul className="flex flex-col items-center gap-6 animate-marqueeY ">
//               <li className="flex flex-col items-center text-center">
//                 <div className="border-2 border-dashed border-gray-300 rounded-full w-24 h-24 md:w-28 md:h-28 flex flex-col items-center justify-center bg-[#F5F5F5]">
//                   <span className="text-3xl select-none">
//                     <img
//                       alt="Public Affairs24"
//                       data-nimg="1"
//                       decoding="async"
//                       height="32"
//                       loading="lazy"
//                       src="/industries/industry-20.png"
//                       style={{
//                         color: "transparent",
//                       }}
//                       width="32"
//                     />
//                   </span>
//                   <span className="mt-2 text-[13px] break-all text-[#6D6D6D] leading-tight max-w-[5rem]">
//                     Public Affairs
//                   </span>
//                 </div>
//               </li>
//               <li className="flex flex-col items-center text-center">
//                 <div className="border-2 border-dashed border-gray-300 rounded-full w-24 h-24 md:w-28 md:h-28 flex flex-col items-center justify-center bg-[#F5F5F5]">
//                   <span className="text-3xl select-none">
//                     <img
//                       alt="Education / Schools / Universities25"
//                       data-nimg="1"
//                       decoding="async"
//                       height="32"
//                       loading="lazy"
//                       src="/industries/industry-19.png"
//                       style={{
//                         color: "transparent",
//                       }}
//                       width="32"
//                     />
//                   </span>
//                   <span className="mt-2 text-[13px] break-all text-[#6D6D6D] leading-tight max-w-[5rem]">
//                     Education / Schools / Universities
//                   </span>
//                 </div>
//               </li>
//               <li className="flex flex-col items-center text-center">
//                 <div className="border-2 border-dashed border-gray-300 rounded-full w-24 h-24 md:w-28 md:h-28 flex flex-col items-center justify-center bg-[#F5F5F5]">
//                   <span className="text-3xl select-none">
//                     <img
//                       alt="Lifestyle Apparel26"
//                       data-nimg="1"
//                       decoding="async"
//                       height="32"
//                       loading="lazy"
//                       src="/industries/industry-27.png"
//                       style={{
//                         color: "transparent",
//                       }}
//                       width="32"
//                     />
//                   </span>
//                   <span className="mt-2 text-[13px] break-all text-[#6D6D6D] leading-tight max-w-[5rem]">
//                     Lifestyle Apparel
//                   </span>
//                 </div>
//               </li>
//               <li className="flex flex-col items-center text-center">
//                 <div className="border-2 border-dashed border-gray-300 rounded-full w-24 h-24 md:w-28 md:h-28 flex flex-col items-center justify-center bg-[#F5F5F5]">
//                   <span className="text-3xl select-none">
//                     <img
//                       alt="Insurance27"
//                       data-nimg="1"
//                       decoding="async"
//                       height="32"
//                       loading="lazy"
//                       src="/industries/industry-26.png"
//                       style={{
//                         color: "transparent",
//                       }}
//                       width="32"
//                     />
//                   </span>
//                   <span className="mt-2 text-[13px] break-all text-[#6D6D6D] leading-tight max-w-[5rem]">
//                     Insurance
//                   </span>
//                 </div>
//               </li>
//               <li className="flex flex-col items-center text-center">
//                 <div className="border-2 border-dashed border-gray-300 rounded-full w-24 h-24 md:w-28 md:h-28 flex flex-col items-center justify-center bg-[#F5F5F5]">
//                   <span className="text-3xl select-none">
//                     <img
//                       alt="Insurance27"
//                       data-nimg="1"
//                       decoding="async"
//                       height="32"
//                       loading="lazy"
//                       src="/industries/industry-26.png"
//                       style={{
//                         color: "transparent",
//                       }}
//                       width="32"
//                     />
//                   </span>
//                   <span className="mt-2 text-[13px] break-all text-[#6D6D6D] leading-tight max-w-[5rem]">
//                     Insurance
//                   </span>
//                 </div>
//               </li>
//               <li className="flex flex-col items-center text-center">
//                 <div className="border-2 border-dashed border-gray-300 rounded-full w-24 h-24 md:w-28 md:h-28 flex flex-col items-center justify-center bg-[#F5F5F5]">
//                   <span className="text-3xl select-none">
//                     <img
//                       alt="Insurance27"
//                       data-nimg="1"
//                       decoding="async"
//                       height="32"
//                       loading="lazy"
//                       src="/industries/industry-26.png"
//                       style={{
//                         color: "transparent",
//                       }}
//                       width="32"
//                     />
//                   </span>
//                   <span className="mt-2 text-[13px] break-all text-[#6D6D6D] leading-tight max-w-[5rem]">
//                     Insurance
//                   </span>
//                 </div>
//               </li>
//             </ul>
//           </div>
//           <div className="hidden md:block">
//             <div
//               className="relative h-[560px] w-[160px] md:w-[200px] overflow-hidden   [mask-image:linear-gradient(to_bottom,transparent,black_12%,black_88%,transparent)]   [-webkit-mask-image:linear-gradient(to_bottom,transparent,black_12%,black_88%,transparent)]"
//               style={{
//                 "--marquee-duration": "34s",
//               }}
//             >
//               <ul className="flex flex-col items-center gap-6 animate-marqueeYReverse">
//                 <li className="flex flex-col items-center text-center">
//                   <div className="border-2 border-dashed border-gray-300 rounded-full w-24 h-24 md:w-28 md:h-28 flex flex-col items-center justify-center bg-[#F5F5F5]">
//                     <span className="text-3xl select-none">
//                       <img
//                         alt="Homecare Services0"
//                         data-nimg="1"
//                         decoding="async"
//                         height="32"
//                         loading="lazy"
//                         src="/industries/industry-13.png"
//                         style={{
//                           color: "transparent",
//                         }}
//                         width="32"
//                       />
//                     </span>
//                     <span className="mt-2 text-[13px] break-all text-[#6D6D6D] leading-tight max-w-[5rem]">
//                       Homecare Services
//                     </span>
//                   </div>
//                 </li>
//                 <li className="flex flex-col items-center text-center">
//                   <div className="border-2 border-dashed border-gray-300 rounded-full w-24 h-24 md:w-28 md:h-28 flex flex-col items-center justify-center bg-[#F5F5F5]">
//                     <span className="text-3xl select-none">
//                       <img
//                         alt="Medical & Clinics1"
//                         data-nimg="1"
//                         decoding="async"
//                         height="32"
//                         loading="lazy"
//                         src="/industries/industry-6.png"
//                         style={{
//                           color: "transparent",
//                         }}
//                         width="32"
//                       />
//                     </span>
//                     <span className="mt-2 text-[13px] break-all text-[#6D6D6D] leading-tight max-w-[5rem]">
//                       Medical & Clinics
//                     </span>
//                   </div>
//                 </li>
//                 <li className="flex flex-col items-center text-center">
//                   <div className="border-2 border-dashed border-gray-300 rounded-full w-24 h-24 md:w-28 md:h-28 flex flex-col items-center justify-center bg-[#F5F5F5]">
//                     <span className="text-3xl select-none">
//                       <img
//                         alt="Oil & Gas Companies2"
//                         data-nimg="1"
//                         decoding="async"
//                         height="32"
//                         loading="lazy"
//                         src="/industries/industry-12.png"
//                         style={{
//                           color: "transparent",
//                         }}
//                         width="32"
//                       />
//                     </span>
//                     <span className="mt-2 text-[13px] break-all text-[#6D6D6D] leading-tight max-w-[5rem]">
//                       Oil & Gas Companies
//                     </span>
//                   </div>
//                 </li>
//                 <li className="flex flex-col items-center text-center">
//                   <div className="border-2 border-dashed border-gray-300 rounded-full w-24 h-24 md:w-28 md:h-28 flex flex-col items-center justify-center bg-[#F5F5F5]">
//                     <span className="text-3xl select-none">
//                       <img
//                         alt="Public Affairs3"
//                         data-nimg="1"
//                         decoding="async"
//                         height="32"
//                         loading="lazy"
//                         src="/industries/industry-20.png"
//                         style={{
//                           color: "transparent",
//                         }}
//                         width="32"
//                       />
//                     </span>
//                     <span className="mt-2 text-[13px] break-all text-[#6D6D6D] leading-tight max-w-[5rem]">
//                       Public Affairs
//                     </span>
//                   </div>
//                 </li>
//                 <li className="flex flex-col items-center text-center">
//                   <div className="border-2 border-dashed border-gray-300 rounded-full w-24 h-24 md:w-28 md:h-28 flex flex-col items-center justify-center bg-[#F5F5F5]">
//                     <span className="text-3xl select-none">
//                       <img
//                         alt="Education / Schools / Universities4"
//                         data-nimg="1"
//                         decoding="async"
//                         height="32"
//                         loading="lazy"
//                         src="/industries/industry-19.png"
//                         style={{
//                           color: "transparent",
//                         }}
//                         width="32"
//                       />
//                     </span>
//                     <span className="mt-2 text-[13px] break-all text-[#6D6D6D] leading-tight max-w-[5rem]">
//                       Education / Schools / Universities
//                     </span>
//                   </div>
//                 </li>
//                 <li className="flex flex-col items-center text-center">
//                   <div className="border-2 border-dashed border-gray-300 rounded-full w-24 h-24 md:w-28 md:h-28 flex flex-col items-center justify-center bg-[#F5F5F5]">
//                     <span className="text-3xl select-none">
//                       <img
//                         alt="Lifestyle Apparel5"
//                         data-nimg="1"
//                         decoding="async"
//                         height="32"
//                         loading="lazy"
//                         src="/industries/industry-27.png"
//                         style={{
//                           color: "transparent",
//                         }}
//                         width="32"
//                       />
//                     </span>
//                     <span className="mt-2 text-[13px] break-all text-[#6D6D6D] leading-tight max-w-[5rem]">
//                       Lifestyle Apparel
//                     </span>
//                   </div>
//                 </li>
//                 <li className="flex flex-col items-center text-center">
//                   <div className="border-2 border-dashed border-gray-300 rounded-full w-24 h-24 md:w-28 md:h-28 flex flex-col items-center justify-center bg-[#F5F5F5]">
//                     <span className="text-3xl select-none">
//                       <img
//                         alt="Insurance6"
//                         data-nimg="1"
//                         decoding="async"
//                         height="32"
//                         loading="lazy"
//                         src="/industries/industry-26.png"
//                         style={{
//                           color: "transparent",
//                         }}
//                         width="32"
//                       />
//                     </span>
//                     <span className="mt-2 text-[13px] break-all text-[#6D6D6D] leading-tight max-w-[5rem]">
//                       Insurance
//                     </span>
//                   </div>
//                 </li>
//               </ul>
//             </div>
//           </div>
//           <div className="hidden md:block">
//             <div
//               className="relative h-[560px] w-[160px] md:w-[200px] overflow-hidden   [mask-image:linear-gradient(to_bottom,transparent,black_12%,black_88%,transparent)]   [-webkit-mask-image:linear-gradient(to_bottom,transparent,black_12%,black_88%,transparent)]"
//               style={{
//                 "--marquee-duration": "32s",
//               }}
//             >
//               <ul className="flex flex-col items-center gap-6 animate-marqueeY">
//                 <li className="flex flex-col items-center text-center">
//                   <div className="border-2 border-dashed border-gray-300 rounded-full w-24 h-24 md:w-28 md:h-28 flex flex-col items-center justify-center bg-[#F5F5F5]">
//                     <span className="text-3xl select-none">
//                       <img
//                         alt="Accounting & Auditing0"
//                         data-nimg="1"
//                         decoding="async"
//                         height="32"
//                         loading="lazy"
//                         src="/industries/industry-1.png"
//                         style={{
//                           color: "transparent",
//                         }}
//                         width="32"
//                       />
//                     </span>
//                     <span className="mt-2 text-[13px] break-all text-[#6D6D6D] leading-tight max-w-[5rem]">
//                       Accounting & Auditing
//                     </span>
//                   </div>
//                 </li>
//                 <li className="flex flex-col items-center text-center">
//                   <div className="border-2 border-dashed border-gray-300 rounded-full w-24 h-24 md:w-28 md:h-28 flex flex-col items-center justify-center bg-[#F5F5F5]">
//                     <span className="text-3xl select-none">
//                       <img
//                         alt="Event Marketing1"
//                         data-nimg="1"
//                         decoding="async"
//                         height="32"
//                         loading="lazy"
//                         src="/industries/industry-30.png"
//                         style={{
//                           color: "transparent",
//                         }}
//                         width="32"
//                       />
//                     </span>
//                     <span className="mt-2 text-[13px] break-all text-[#6D6D6D] leading-tight max-w-[5rem]">
//                       Event Marketing
//                     </span>
//                   </div>
//                 </li>
//                 <li className="flex flex-col items-center text-center">
//                   <div className="border-2 border-dashed border-gray-300 rounded-full w-24 h-24 md:w-28 md:h-28 flex flex-col items-center justify-center bg-[#F5F5F5]">
//                     <span className="text-3xl select-none">
//                       <img
//                         alt="Accounting & Auditing2"
//                         data-nimg="1"
//                         decoding="async"
//                         height="32"
//                         loading="lazy"
//                         src="/industries/industry-7.png"
//                         style={{
//                           color: "transparent",
//                         }}
//                         width="32"
//                       />
//                     </span>
//                     <span className="mt-2 text-[13px] break-all text-[#6D6D6D] leading-tight max-w-[5rem]">
//                       Accounting & Auditing
//                     </span>
//                   </div>
//                 </li>
//                 <li className="flex flex-col items-center text-center">
//                   <div className="border-2 border-dashed border-gray-300 rounded-full w-24 h-24 md:w-28 md:h-28 flex flex-col items-center justify-center bg-[#F5F5F5]">
//                     <span className="text-3xl select-none">
//                       <img
//                         alt="Travel & Tourism3"
//                         data-nimg="1"
//                         decoding="async"
//                         height="32"
//                         loading="lazy"
//                         src="/industries/industry-14.png"
//                         style={{
//                           color: "transparent",
//                         }}
//                         width="32"
//                       />
//                     </span>
//                     <span className="mt-2 text-[13px] break-all text-[#6D6D6D] leading-tight max-w-[5rem]">
//                       Travel & Tourism
//                     </span>
//                   </div>
//                 </li>
//                 <li className="flex flex-col items-center text-center">
//                   <div className="border-2 border-dashed border-gray-300 rounded-full w-24 h-24 md:w-28 md:h-28 flex flex-col items-center justify-center bg-[#F5F5F5]">
//                     <span className="text-3xl select-none">
//                       <img
//                         alt="Wholesale / Retail4"
//                         data-nimg="1"
//                         decoding="async"
//                         height="32"
//                         loading="lazy"
//                         src="/industries/industry-21.png"
//                         style={{
//                           color: "transparent",
//                         }}
//                         width="32"
//                       />
//                     </span>
//                     <span className="mt-2 text-[13px] break-all text-[#6D6D6D] leading-tight max-w-[5rem]">
//                       Wholesale / Retail
//                     </span>
//                   </div>
//                 </li>
//                 <li className="flex flex-col items-center text-center">
//                   <div className="border-2 border-dashed border-gray-300 rounded-full w-24 h-24 md:w-28 md:h-28 flex flex-col items-center justify-center bg-[#F5F5F5]">
//                     <span className="text-3xl select-none">
//                       <img
//                         alt="Consumer Products & Brands5"
//                         data-nimg="1"
//                         decoding="async"
//                         height="32"
//                         loading="lazy"
//                         src="/industries/industry-28.png"
//                         style={{
//                           color: "transparent",
//                         }}
//                         width="32"
//                       />
//                     </span>
//                     <span className="mt-2 text-[13px] break-all text-[#6D6D6D] leading-tight max-w-[5rem]">
//                       Consumer Products & Brands
//                     </span>
//                   </div>
//                 </li>
//                 <li className="flex flex-col items-center text-center">
//                   <div className="border-2 border-dashed border-gray-300 rounded-full w-24 h-24 md:w-28 md:h-28 flex flex-col items-center justify-center bg-[#F5F5F5]">
//                     <span className="text-3xl select-none">
//                       <img
//                         alt="Restaurants & Hotels6"
//                         data-nimg="1"
//                         decoding="async"
//                         height="32"
//                         loading="lazy"
//                         src="/industries/industry-2.png"
//                         style={{
//                           color: "transparent",
//                         }}
//                         width="32"
//                       />
//                     </span>
//                     <span className="mt-2 text-[13px] break-all text-[#6D6D6D] leading-tight max-w-[5rem]">
//                       Restaurants & Hotels
//                     </span>
//                   </div>
//                 </li>
//                 <li className="flex flex-col items-center text-center">
//                   <div className="border-2 border-dashed border-gray-300 rounded-full w-24 h-24 md:w-28 md:h-28 flex flex-col items-center justify-center bg-[#F5F5F5]">
//                     <span className="text-3xl select-none">
//                       <img
//                         alt="Security & Manpower7"
//                         data-nimg="1"
//                         decoding="async"
//                         height="32"
//                         loading="lazy"
//                         src="/industries/industry-3.png"
//                         style={{
//                           color: "transparent",
//                         }}
//                         width="32"
//                       />
//                     </span>
//                     <span className="mt-2 text-[13px] break-all text-[#6D6D6D] leading-tight max-w-[5rem]">
//                       Security & Manpower
//                     </span>
//                   </div>
//                 </li>
               
              
//               </ul>
//             </div>
//           </div>
//           <div
//             className="relative h-[560px] w-[160px] md:w-[200px] overflow-hidden   [mask-image:linear-gradient(to_bottom,transparent,black_12%,black_88%,transparent)]   [-webkit-mask-image:linear-gradient(to_bottom,transparent,black_12%,black_88%,transparent)]"
//             style={{
//               "--marquee-duration": "36s",
//             }}
//           >
//             <ul className="flex flex-col items-center gap-6 animate-marqueeYReverse">
//               <li className="flex flex-col items-center text-center">
//                 <div className="border-2 border-dashed border-gray-300 rounded-full w-24 h-24 md:w-28 md:h-28 flex flex-col items-center justify-center bg-[#F5F5F5]">
//                   <span className="text-3xl select-none">
//                     <img
//                       alt="Travel & Tourism10"
//                       data-nimg="1"
//                       decoding="async"
//                       height="32"
//                       loading="lazy"
//                       src="/industries/industry-14.png"
//                       style={{
//                         color: "transparent",
//                       }}
//                       width="32"
//                     />
//                   </span>
//                   <span className="mt-2 text-[13px] break-all text-[#6D6D6D] leading-tight max-w-[5rem]">
//                     Travel & Tourism
//                   </span>
//                 </div>
//               </li>
//               <li className="flex flex-col items-center text-center">
//                 <div className="border-2 border-dashed border-gray-300 rounded-full w-24 h-24 md:w-28 md:h-28 flex flex-col items-center justify-center bg-[#F5F5F5]">
//                   <span className="text-3xl select-none">
//                     <img
//                       alt="Wholesale / Retail11"
//                       data-nimg="1"
//                       decoding="async"
//                       height="32"
//                       loading="lazy"
//                       src="/industries/industry-21.png"
//                       style={{
//                         color: "transparent",
//                       }}
//                       width="32"
//                     />
//                   </span>
//                   <span className="mt-2 text-[13px] break-all text-[#6D6D6D] leading-tight max-w-[5rem]">
//                     Wholesale / Retail
//                   </span>
//                 </div>
//               </li>
//               <li className="flex flex-col items-center text-center">
//                 <div className="border-2 border-dashed border-gray-300 rounded-full w-24 h-24 md:w-28 md:h-28 flex flex-col items-center justify-center bg-[#F5F5F5]">
//                   <span className="text-3xl select-none">
//                     <img
//                       alt="Consumer Products & Brands12"
//                       data-nimg="1"
//                       decoding="async"
//                       height="32"
//                       loading="lazy"
//                       src="/industries/industry-28.png"
//                       style={{
//                         color: "transparent",
//                       }}
//                       width="32"
//                     />
//                   </span>
//                   <span className="mt-2 text-[13px] break-all text-[#6D6D6D] leading-tight max-w-[5rem]">
//                     Consumer Products & Brands
//                   </span>
//                 </div>
//               </li>
//               <li className="flex flex-col items-center text-center">
//                 <div className="border-2 border-dashed border-gray-300 rounded-full w-24 h-24 md:w-28 md:h-28 flex flex-col items-center justify-center bg-[#F5F5F5]">
//                   <span className="text-3xl select-none">
//                     <img
//                       alt="Restaurants & Hotels13"
//                       data-nimg="1"
//                       decoding="async"
//                       height="32"
//                       loading="lazy"
//                       src="/industries/industry-2.png"
//                       style={{
//                         color: "transparent",
//                       }}
//                       width="32"
//                     />
//                   </span>
//                   <span className="mt-2 text-[13px] break-all text-[#6D6D6D] leading-tight max-w-[5rem]">
//                     Restaurants & Hotels
//                   </span>
//                 </div>
//               </li>
//               <li className="flex flex-col items-center text-center">
//                 <div className="border-2 border-dashed border-gray-300 rounded-full w-24 h-24 md:w-28 md:h-28 flex flex-col items-center justify-center bg-[#F5F5F5]">
//                   <span className="text-3xl select-none">
//                     <img
//                       alt="Security & Manpower14"
//                       data-nimg="1"
//                       decoding="async"
//                       height="32"
//                       loading="lazy"
//                       src="/industries/industry-3.png"
//                       style={{
//                         color: "transparent",
//                       }}
//                       width="32"
//                     />
//                   </span>
//                   <span className="mt-2 text-[13px] break-all text-[#6D6D6D] leading-tight max-w-[5rem]">
//                     Security & Manpower
//                   </span>
//                 </div>
//               </li>
            
             
//             </ul>
//           </div>
//         </div>
//     </>
//   )
// }

// export default ScrollerIndustry
"use client"
import Logo from '../assets/images/industriesscroller/industry-3.png';

function IndustryScroller() {
  const CircleItem = () => (
    <li className="flex flex-col !items-center text-center">
      <div className="border-2 border-dashed border-gray-300 rounded-full w-24 h-24 md:w-28 md:h-28 flex flex-col items-center justify-center bg-[#F5F5F5]">
        <img src={Logo} alt="Industry Logo" className="w-12 h-12 object-contain" />
        <span className="mt-2 text-[13px] break-all text-[#6D6D6D] leading-tight max-w-[5rem]">
          Industry
        </span>
      </div>
    </li>
  )

  return (
    <>
      <style jsx>{`
        @keyframes marqueeY {
          0% { transform: translateY(0); }
          100% { transform: translateY(-50%); } /* sirf half tak */
        }
        @keyframes marqueeYReverse {
          0% { transform: translateY(-50%); }
          100% { transform: translateY(0); }
        }
        .animate-marqueeY {
          animation: marqueeY var(--marquee-duration, 30s) linear infinite;
        }
        .animate-marqueeYReverse {
          animation: marqueeYReverse var(--marquee-duration, 30s) linear infinite;
        }
      `}</style>

      {/* scroller vertically */}
      <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-2 md:gap-2 md:mt-50 items-center overflow-hidden mx-auto">
        {/* Column 1 - Top to Bottom */}
        <div
          className="relative h-[560px] w-[160px] md:w-[200px] overflow-hidden 
          [mask-image:linear-gradient(to_bottom,transparent,black_12%,black_88%,transparent)] 
          [-webkit-mask-image:linear-gradient(to_bottom,transparent,black_12%,black_88%,transparent)]"
          style={{ "--marquee-duration": "30s" }}
        >
          <ul className="flex flex-col items-center gap-6 animate-marqueeY">
            {Array.from({ length: 12 }, (_, i) => <CircleItem key={i} />)}
            {Array.from({ length: 12 }, (_, i) => <CircleItem key={`dup-${i}`} />)}
          </ul>
        </div>

        {/* Column 2 - Bottom to Top */}
        <div className="hidden md:block">
          <div
            className="relative h-[560px] w-[160px] md:w-[200px] overflow-hidden 
            [mask-image:linear-gradient(to_bottom,transparent,black_12%,black_88%,transparent)] 
            [-webkit-mask-image:linear-gradient(to_bottom,transparent,black_12%,black_88%,transparent)]"
            style={{ "--marquee-duration": "34s" }}
          >
            <ul className="flex flex-col items-center gap-6 animate-marqueeYReverse">
              {Array.from({ length: 12 }, (_, i) => <CircleItem key={i} />)}
              {Array.from({ length: 12 }, (_, i) => <CircleItem key={`dup-${i}`} />)}
            </ul>
          </div>
        </div>

        {/* Column 3 - Top to Bottom */}
        <div className="hidden md:block">
          <div
            className="relative h-[560px] w-[160px] md:w-[200px] overflow-hidden 
            [mask-image:linear-gradient(to_bottom,transparent,black_12%,black_88%,transparent)] 
            [-webkit-mask-image:linear-gradient(to_bottom,transparent,black_12%,black_88%,transparent)]"
            style={{ "--marquee-duration": "32s" }}
          >
            <ul className="flex flex-col items-center gap-6 animate-marqueeY">
              {Array.from({ length: 12 }, (_, i) => <CircleItem key={i} />)}
              {Array.from({ length: 12 }, (_, i) => <CircleItem key={`dup-${i}`} />)}
            </ul>
          </div>
        </div>

        {/* Column 4 - Bottom to Top */}
        <div
          className="relative h-[560px] w-[160px] md:w-[200px] overflow-hidden 
          [mask-image:linear-gradient(to_bottom,transparent,black_12%,black_88%,transparent)] 
          [-webkit-mask-image:linear-gradient(to_bottom,transparent,black_12%,black_88%,transparent)]"
          style={{ "--marquee-duration": "36s" }}
        >
          <ul className="flex flex-col items-center gap-6 animate-marqueeYReverse">
            {Array.from({ length: 12 }, (_, i) => <CircleItem key={i} />)}
            {Array.from({ length: 12 }, (_, i) => <CircleItem key={`dup-${i}`} />)}
          </ul>
        </div>
      </div>
    </>
  )
}

export default IndustryScroller
