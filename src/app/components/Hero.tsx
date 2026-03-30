'use client';

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import imgBackground from "@/assets/4818e82e106630ba07a42e41f1542c927a48718b.png";
import imgProduct from "@/assets/bdcb29ea89d3341d85d778aec5bb7b3f6fde78db.png";

export function Hero() {
  return (
    <section className="relative w-full min-h-[600px] md:min-h-[700px] lg:h-[861px] overflow-hidden bg-[#FBF6F3]">
      {/* Background Fallback Image + Videos */}
      <div className="absolute inset-0 z-0 bg-[#FBF6F3]">
        {/* The fallback image shows instantly. If video plays successfully, it fades out. If low power mode blocks video, the image stays forever, hiding the play button. */}
        <img
          src={imgBackground.src}
          className="absolute inset-0 w-full h-full object-cover z-20 pointer-events-none"
          alt="Background"
          style={{ transition: "opacity 1s ease" }}
          id="heroFallbackImage"
        />

        {/* Desktop Video */}
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          onPlaying={() => {
            const fallback = document.getElementById('heroFallbackImage');
            if (fallback) fallback.style.opacity = '0';
          }}
          className="hidden lg:block w-full h-full object-cover pointer-events-none z-10 relative"
        >
          <source src="/video1.mp4" type="video/mp4" />
        </video>
        {/* Mobile/Tablet Video */}
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          onPlaying={() => {
            const fallback = document.getElementById('heroFallbackImage');
            if (fallback) fallback.style.opacity = '0';
          }}
          className="block lg:hidden w-full h-full object-cover pointer-events-none z-10 relative"
        >
          <source src="/video2.mp4" type="video/mp4" />
        </video>
      </div>

      <div className="relative z-10 flex flex-col justify-center h-full px-4 md:px-8 lg:px-[62px] max-w-[1280px] mx-auto py-20 md:py-28 lg:py-0">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mt-[160px] md:mt-[100px] lg:mt-[40px]"
        >
          <h1
            className="text-[36px] md:text-[55px] lg:text-[65px] font-['Inter',sans-serif] font-semibold leading-tight max-w-full md:max-w-[600px] lg:max-w-[650px] mb-6 drop-shadow-sm pb-4"
            style={{
              color: "#a52677ff",
              textShadow: "0px 100px 80px rgba(0, 0, 0, 0.3)"
            }}
          >
            A Healthy Future <br /> Begins Now
          </h1>
          <p className="text-[14px] md:text-[16px] lg:text-[15px] font-['Roboto',sans-serif] font-normal text-[#7c5f47] max-w-full md:max-w-[550px] lg:max-w-[502px] mb-10 leading-relaxed md:leading-loose">
            Pure, natural wellness elevated — 100% oil and banana powder, thoughtfully crafted for skin, hair, and nutrition, from nature to nourishment without compromise.
          </p>

          <div className="flex flex-wrap items-center gap-[20px] lg:gap-[35px]">

            <Link href="/products">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-[134px] md:w-[150px] h-[44px] md:h-[48px] rounded-[13px] bg-[#802367] text-white text-[18px] md:text-[19px] lg:text-[20px] font-['Roboto',sans-serif] font-medium flex items-center justify-center shadow-[0px_0px_4px_0px_rgba(0,0,0,0.25)]"
              >
                View more
              </motion.button>
            </Link>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="hidden lg:block absolute right-0 top-[30%] -translate-y-1/2 w-[550px]"
        >
          {/* Using Next.js Image for optimization */}
          <img 
            src={imgProduct.src}
            alt="Product"
            loading="eager"
            fetchPriority="high"
            className="w-full h-auto object-contain drop-shadow-2xl"
          />
        </motion.div>
      </div>
    </section>

  )
}
