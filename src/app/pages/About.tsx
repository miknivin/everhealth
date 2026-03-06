'use client';

import React from "react";
import { motion } from "framer-motion";
import imgPostcard from "@/assets/8d05ee687cf04083eb2808fb562f541caf8e7fe4.png";
import imgOhKElOkQ3Re1 from "@/assets/0ea0dcc8f0922b9597d6bf10e35abbf68b863f93.png";
import imgGhMSApoKo0 from "@/assets/467affd29fd1afc796b25019a92722e0474a73f3.png";
import imgGhMSApoKo1 from "@/assets/99131567b63ac48b2ddcea0c0d906d2b8b3b984b.png";
import imgRukI4QZGlQs from "@/assets/f66d9da2ae2ee4fbe305351c838c2ed3294bbeb3.png";
import aboutSvgPaths from "../utils/aboutSvgPaths";
import { Reviews } from "../components/Reviews";

function FeatureCard({
   icon,
   title,
   desc
}: {
   icon: React.ReactNode;
   title: string;
   desc: string;
}) {
   return (
      <div className="bg-white p-8 rounded-[4px] shadow-[0px_8px_40px_rgba(49,32,138,0.05)] flex flex-col items-center text-center w-full h-[320px] justify-center relative">
         <div className="w-[65px] h-[65px] mb-6 relative shrink-0">
            {icon}
         </div>
         <h3 className="text-[22px] font-['Josefin_Sans',sans-serif] font-semibold text-[#151875] mb-4">
            {title}
         </h3>
         <p className="text-[16px] font-['Lato',sans-serif] font-bold text-[#1a0b5b]/30 leading-[26px]">
            {desc}
         </p>
      </div>
   );
}


export function About() {
   return (
      <div className="w-full bg-white overflow-hidden">
         {/* Hero Section */}
         <section className="relative w-full max-w-[1280px] mx-auto px-4 md:px-8 lg:px-[62px] pt-[60px] md:pt-[80px] lg:pt-[100px] pb-[40px] md:pb-[50px] lg:pb-[60px] flex flex-col lg:flex-row items-start justify-between min-h-auto lg:min-h-[500px]">
            <div className="w-full lg:w-[60%] z-10 pt-[20px]">
               <h1
                  className="text-[36px] md:text-[48px] lg:text-[55px] font-['Inter',sans-serif] font-semibold mb-6"
                  style={{
                     background: "linear-gradient(96.24deg, rgba(145, 8, 108, 0.9) 8.33%, #B44295 75.16%)",
                     WebkitBackgroundClip: "text",
                     WebkitTextFillColor: "transparent",
                  }}
               >
                  About Us
               </h1>
               <h2 className="text-[28px] md:text-[32px] lg:text-[35px] font-['Roboto',sans-serif] font-semibold text-[#91086C] mb-4 leading-tight">
                  Get The Best 100% Natural Products For You
               </h2>
               <p className="text-[16px] md:text-[18px] lg:text-[20px] font-['Roboto',sans-serif] text-[#802367]/75 leading-[28px] md:leading-[30px]">
                  Two generation deeply rooted with farming especially with coconuts. We third generation created the experience into nutrient rich products. Our well experience in the field of coconut farming and coconut processing to copra trigger us to think about making a healthy element contained coconut oil. From 2019 onwards we are satisfying our thousands of customers by giving the best coconut oil. The knowledge passed through two generation help us to develop a baby oil that we can declare as the best baby oil in the world. We are working with local farmers for the last decade.
               </p>
            </div>

            {/* Palm Leaves Image - Extra large to reach the Mission/Vision sections on desktop */}
            <div className="absolute top-[80px] md:top-[100px] lg:top-[120px] right-0 w-[300px] md:w-[500px] lg:w-[1000px] h-[400px] md:h-[600px] lg:h-[1200px] opacity-40 md:opacity-50 lg:opacity-60 pointer-events-none z-0">
               <div className="w-full h-full overflow-hidden relative">
                  <img
                     src={imgPostcard.src}
                     alt="Palm Leaves"
                     className="w-full h-full object-contain object-right-top transform lg:scale-110"
                  />
               </div>
            </div>
         </section>

         {/* Mission & Vision Section */}
         <section className="relative w-full overflow-hidden">
            {/* Mission Section */}
            <div className="relative isolate w-full py-[40px] lg:py-[50px] z-20">
               {/* Background - Mission */}
               <div className="absolute inset-0 w-full h-full -z-10 pointer-events-none overflow-hidden">
                  <svg className="w-full h-[105%] lg:h-full translate-y-[-1%]" preserveAspectRatio="none" viewBox="0 0 1280 248" fill="none">
                     <path d={aboutSvgPaths.p21794b00} fill="#FFF0E7" />
                  </svg>
               </div>
               <div className="relative z-10 max-w-[1280px] mx-auto px-4 lg:px-[62px]">
                  <div className="text-center max-w-[845px] mx-auto">
                     <h3 className="text-[35px] font-['Roboto',sans-serif] font-semibold text-[#91086C] mb-2">
                        Mission
                     </h3>
                     <p className="text-[18px] lg:text-[20px] font-['Roboto',sans-serif] text-[#802367]/75">
                        We are producing 100% natural foods by cooperate with our local farmers. It helps us be the part of the prosperity of our farming families and our community.
                     </p>
                  </div>
               </div>
            </div>

            {/* Vision Section */}
            <div className="relative isolate w-full py-[40px] lg:py-[50px] -mt-[45px] lg:-mt-[60px] z-10">
               {/* Background - Vision */}
               <div className="absolute inset-0 w-full h-full -z-10 pointer-events-none overflow-hidden">
                  <svg className="w-full h-full" preserveAspectRatio="none" viewBox="0 0 1280 249" fill="none">
                     <path d={aboutSvgPaths.p33fdf700} fill="#F7FFDF" />
                  </svg>
               </div>
               <div className="max-w-[1068px] mx-auto px-4 lg:px-[62px] relative z-10 pt-[15px] lg:pt-[20px]">
                  <div className="text-center mx-auto">
                     <h3 className="text-[35px] font-['Roboto',sans-serif] font-semibold text-[#91086C] mb-2">
                        Vision
                     </h3>
                     <p className="text-[18px] lg:text-[20px] font-['Roboto',sans-serif] text-[#802367]/75">
                        Our vision at EVERHEALTH is to be the best natural food products manufacturing company and drive our customer to embrace a healthier, happier and sustainable lifestyle. Our decades of farming experience, innovation and traditional practices can serve trusted food products. Be the right choice for healthy diets.
                     </p>
                  </div>
               </div>
            </div>
         </section>

         {/* Shopex Offers - Features */}
         <section className="py-[80px] bg-white">
            <div className="max-w-[1280px] mx-auto px-4 lg:px-[62px]">
               <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[30px]">
                  {/* Free Delivery */}
                  <FeatureCard
                     title="Free Delivery"
                     desc="Shop with confidence and convenience. We offer fast and reliable delivery at zero extra cost"
                     icon={
                        <svg width="65" height="65" viewBox="0 0 65 37" fill="none" className="mx-auto mt-4">
                           {/* Group 4 */}
                           <g transform="translate(16 19)">
                              <path d={aboutSvgPaths.p10704900} fill="#8B9BA9" />
                              <path d={aboutSvgPaths.p18697100} fill="#6C7A88" />
                           </g>
                           {/* Group 5 */}
                           <g transform="translate(0 6)">
                              <path d={aboutSvgPaths.p1aad1970} fill="#FF7E40" />
                              <path d={aboutSvgPaths.p3d680600} fill="#FF6344" />
                              <path d={aboutSvgPaths.p1cd5980} fill="#8B9BA9" />
                              <path d={aboutSvgPaths.p131b4200} fill="#9DC6FB" />
                              <path d={aboutSvgPaths.p25e1ba00} fill="#80B4FB" />
                           </g>
                           {/* Groups 6 & 7 & 8 - Wheels */}
                           <g transform="translate(39 22)">
                              <path d={aboutSvgPaths.p2bff5700} fill="#4D5967" />
                              <path d={aboutSvgPaths.p5af2c00} fill="#35404A" />
                              <path d={aboutSvgPaths.p17bb9100} fill="#FFF9EB" />
                           </g>
                           <g transform="translate(6 22)">
                              <path d={aboutSvgPaths.p2bff5700} fill="#4D5967" />
                              <path d={aboutSvgPaths.p2a3be300} fill="#35404A" />
                              <path d={aboutSvgPaths.p15201700} fill="#FFF9EB" />
                           </g>
                        </svg>
                     }
                  />

                  {/* 100% Cash Back */}
                  <FeatureCard
                     title="100% Cash Back"
                     desc="Get the full amount back on eligible orders. Shop worry-free and enjoy guaranteed savings"
                     icon={
                        <div className="w-[65px] h-[65px] mx-auto">
                           <svg width="65" height="65" viewBox="0 0 65 65" fill="none">
                              <path d={aboutSvgPaths.p3bc5fb70} fill="#507BE9" />
                              <path d={aboutSvgPaths.p375a5480} fill="#FFEE78" />
                              <path d={aboutSvgPaths.p10371600} fill="#FCD232" />
                              <path d={aboutSvgPaths.p2734a480} fill="#FCD232" />
                              <path d={aboutSvgPaths.p2dbfc600} fill="#F7B90F" />
                              <path d={aboutSvgPaths.p60ba200} fill="#FCD232" />
                              <path d={aboutSvgPaths.p12e49900} fill="#F7B90F" />
                              <path d={aboutSvgPaths.p1cceaa00} fill="#F7B90F" />
                              <path d={aboutSvgPaths.p2a9a7d00} fill="#FABE8C" />
                              <path d={aboutSvgPaths.p20031580} fill="#E6A578" />
                              <path d={aboutSvgPaths.p1baa6a80} fill="#FFD2AA" />
                              <path d={aboutSvgPaths.p1389c500} fill="#FABE8C" />
                              <path d={aboutSvgPaths.p2d492100} fill="#FABE8C" />
                              <path d={aboutSvgPaths.p3c7eee00} fill="#6496F7" />
                              <path d={aboutSvgPaths.p1d12e900} fill="#E6A578" />
                           </svg>
                        </div>
                     }
                  />

                  {/* Quality Product */}
                  <FeatureCard
                     title="Quality Product"
                     desc="We deliver products made with high-quality materials and strict quality checks you can trust"
                     icon={
                        <div className="w-[65px] h-[65px] mx-auto">
                           <svg width="65" height="65" viewBox="0 0 46 46" fill="none" className="mx-auto mt-2">
                              <g transform="translate(0 25)">
                                 <path d={aboutSvgPaths.p33067280} fill="#80AAFF" />
                                 <path d={aboutSvgPaths.p29cab200} fill="#80AAFF" />
                                 <path d={aboutSvgPaths.p9477380} fill="#EAF1FF" />
                              </g>
                              <g transform="translate(22 25)">
                                 <path d={aboutSvgPaths.p2ba60880} fill="#6680FF" />
                                 <path d={aboutSvgPaths.p3051ce00} fill="#6680FF" />
                                 <path d={aboutSvgPaths.p3869a000} fill="#B3CCFF" />
                              </g>
                              {/* Badge */}
                              <g transform="translate(8 0)">
                                 <path d={aboutSvgPaths.p39429580} fill="#EAF1FF" />
                                 <path d={aboutSvgPaths.p18d42c00} fill="#F9F9F9" />
                                 <path d={aboutSvgPaths.p1c9c7400} fill="#FDAE02" />
                                 <path d={aboutSvgPaths.p6d14f00} fill="#FDCB02" />
                              </g>
                              {/* Crown */}
                              <g transform="translate(15 9)">
                                 <path d={aboutSvgPaths.p97e39c0} fill="#FD9002" />
                                 <path d={aboutSvgPaths.p1a050d40} fill="#FDAE02" />
                              </g>
                           </svg>
                        </div>
                     }
                  />

                  {/* 24/7 Support */}
                  <FeatureCard
                     title="24/7 Support"
                     desc="Our support team is available around the clock to help you whenever you need assistance"
                     icon={
                        <div className="w-[65px] h-[65px] mx-auto">
                           <svg width="65" height="65" viewBox="0 0 63 63" fill="none" className="mx-auto">
                              <path d={aboutSvgPaths.p3ab1bf00} fill="#D3CDBF" />
                              <path d={aboutSvgPaths.p366bb80} fill="#D3CDBF" />
                              {/* Clock hands/details */}
                              <g transform="translate(8 15)">
                                 <path d={aboutSvgPaths.p6678b00} fill="#46525E" />
                                 <path d={aboutSvgPaths.p30571700} fill="#46525E" />
                                 <path d={aboutSvgPaths.pd218300} fill="#46525E" />
                              </g>
                              {/* Support Headset/Icon */}
                              <g transform="translate(26 26)">
                                 <path d={aboutSvgPaths.p33662840} fill="#6C7A88" />
                                 <path d={aboutSvgPaths.p10491600} fill="#596775" />
                              </g>
                           </svg>
                        </div>
                     }
                  />
               </div>
            </div>
         </section>

         {/* Client Say */}
         <section className="py-[80px] bg-white">
            <div className="max-w-[1280px] mx-auto px-4 lg:px-[62px]">
               <h2 className="text-[35px] font-['Roboto',sans-serif] font-semibold text-[#91086C] mb-[60px] text-center">
                  Our Client Say!
               </h2>

               <Reviews />
            </div>
         </section>
      </div>
   );
}
