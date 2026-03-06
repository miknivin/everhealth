'use client';

import React from "react";
import { motion } from "framer-motion";
import svgPaths from "../utils/svgPaths";

function FeatureBox({ text }: { text: string }) {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      className="relative w-full max-w-[400px] h-[80px] bg-[#f5f5f5] rounded-[13px] flex items-center justify-center gap-4 cursor-default mx-auto"
    >
      <span className="text-[20px] lg:text-[24px] font-['Roboto',sans-serif] font-medium text-[#802367]">{text}</span>
      <div className="w-[28px] lg:w-[36px] h-[28px] lg:h-[36px]">
        <svg viewBox="0 0 36 36" fill="none" className="w-full h-full">
          <path fillRule="evenodd" clipRule="evenodd" d={svgPaths.p1beb0700} fill="#249B3E" />
        </svg>
      </div>
    </motion.div>
  );
}

export function Wellness() {
  return (
    <section className="relative w-full py-[40px] lg:py-[50px] bg-white">
      <div className="max-w-[1280px] mx-auto px-4 lg:px-[62px] flex flex-col items-center">
        <h2
          className="text-[32px] lg:text-[40px] font-['Roboto',sans-serif] font-medium text-[#802367] mb-[20px] text-center drop-shadow-sm"
          style={{ textShadow: "0px 2px 2px rgba(0,0,0,0.1)" }}
        >
          Pure Natural Wellness
        </h2>
        <p className="text-[16px] lg:text-[20px] font-['Roboto',sans-serif] font-normal text-[#802367]/75 text-center max-w-[1047px] mb-[40px] lg:mb-[60px] leading-relaxed">
          At Everhealth, we are passionate about promoting a healthier lifestyle through nature’s best. Since our inception, we have been committed to providing 100% Natural products that deliver both quality and purity.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-[20px] lg:gap-x-[68px] gap-y-[20px] lg:gap-y-[40px] w-full max-w-[868px]">
          <FeatureBox text="Traditional Recipes" />
          <FeatureBox text="Chemical-Free" />
          <FeatureBox text="Hygiene Practices" />
          <FeatureBox text="No Artificial Flavors" />
        </div>
      </div>
    </section>
  );
}
