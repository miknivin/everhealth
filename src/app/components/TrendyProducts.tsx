'use client';

import React from "react";
import { motion } from "framer-motion";
import dynamic from "next/dynamic";
const Slider = dynamic(() => import("react-slick"), { ssr: false });
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import imgBag5 from "@/assets/0cc12c30ffef0466f2779edadcefe9250d10e34e.png";
import svgPaths from "../utils/svgPaths";

function TrendyBackground() {
  return (
    <div className="absolute top-0 left-0 w-full h-full z-0 pointer-events-none">
      {/* Transparent background as requested or placeholder if needed */}
    </div>
  );
}

import { useRouter } from "next/navigation";

function ProductCard({
  title,
  // price,
  // originalPrice,
  desc,
  imageContent,
  productId
}: {
  title: string;
  // price: string;
  // originalPrice: string;
  desc: string;
  imageContent: React.ReactNode;
  productId: string;
}) {
  const router = useRouter();

  const handleShopNow = () => {
    router.push(`/products`);
  };

  return (
    <div className="px-2 md:px-4"> {/* Wrapper for Slider spacing */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="relative w-full max-w-[1036px] min-h-[354px] md:min-h-[400px] mx-auto rounded-[13px] border border-white bg-white/10 backdrop-blur-sm overflow-hidden flex flex-col lg:flex-row items-center"
      >
        <div className="w-full lg:w-[45%] h-[280px] md:h-[350px] lg:h-[400px] relative shrink-0 overflow-hidden flex items-center justify-center">
          {imageContent}
        </div>

        <div className="flex-1 flex flex-col items-start p-6 md:p-8 lg:p-0 lg:pr-[50px] w-full">
          <h3 className="text-[20px] md:text-[26px] lg:text-[28px] font-['Roboto',sans-serif] font-semibold text-[#91086c] leading-tight mb-2 md:mb-3">
            {title}
          </h3>
          <p className="text-[14px] md:text-[15px] lg:text-[16px] font-['Roboto',sans-serif] text-[#802367]/75 leading-normal md:leading-relaxed mb-6 w-full lg:w-[480px]">
            {desc}
          </p>

          {/* <div className="flex items-end gap-3 mb-6">
            <span className="text-[24px] md:text-[30px] lg:text-[32px] font-['Roboto',sans-serif] font-semibold text-[#802367] leading-none">
              Rs. {price}/-
            </span>
            <span className="text-[18px] md:text-[22px] lg:text-[24px] font-['Roboto',sans-serif] font-medium text-[#802367]/75 line-through leading-none decoration-[#802367]/75">
              {originalPrice}/-
            </span>
          </div> */}

          <div className="flex items-center gap-[15px] w-full lg:w-auto justify-center lg:justify-start">
            {/* Buy Now Button */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleShopNow}
              className="w-[140px] md:w-[150px] h-[45px] md:h-[48px] rounded-[10px] border border-[#802367] flex items-center justify-center filter drop-shadow-[0px_0px_3px_rgba(0,0,0,0.2)] bg-white/5 cursor-pointer"
            >
              <span className="text-[#802367] font-['Roboto',sans-serif] font-semibold text-[18px] md:text-[19px]">Shop Now</span>
            </motion.button>

            {/* Cart Button */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-[45px] md:w-[48px] h-[45px] md:h-[48px] rounded-[10px] bg-[#802367] shadow-[0px_0px_3px_rgba(0,0,0,0.2)] flex items-center justify-center"
            >
              <div className="w-[22px] h-[22px] relative">
                <img src={imgBag5.src} alt="Cart" className="w-full h-full object-contain" />
              </div>
            </motion.button>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export function TrendyProducts() {
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnHover: true,
    customPaging: (i: number) => (
      <div className="w-[12px] h-[12px] bg-[#802367] rounded-full opacity-50 hover:opacity-100 transition-opacity mt-4" />
    ),
    dotsClass: "slick-dots !bottom-[-10px]", // Move dots closer to the content
  };

  return (
    <section className="relative w-full pt-[50px] md:pt-[60px] lg:pt-[70px] pb-[40px] md:pb-[50px] lg:pb-[100px] overflow-hidden bg-[rgba(237,227,227,0)]">
      <TrendyBackground />

      <div className="relative z-10 max-w-[1280px] mx-auto px-4 md:px-8 lg:px-[62px]">
        <h2
          className="text-[32px] md:text-[38px] lg:text-[42px] font-['Inter',sans-serif] font-semibold mb-[30px] md:mb-[40px] lg:mb-[50px] drop-shadow-sm w-full text-center text-[#91086c]"
          style={{
            textShadow: "0px 4px 4px rgba(0, 0, 0, 0.1)"
          }}
        >
          Our Trendy Product
        </h2>

        <div className="pb-2">
          <Slider {...sliderSettings}>
            {/* Slide 1 - Baby Oil */}
            <ProductCard
              title="Baby Oil"
              // price="599"
              // originalPrice="799"
              desc="Our Baby Oil is specially formulated to gently nourish and protect your baby's delicate skin. Enriched with mild, skin-friendly ingredients, it helps lock in moisture and keeps the skin soft, smooth, and healthy"
              productId="69c100e3a1ddeb5dc97aed11"
              imageContent={
                <div className="w-full h-full flex items-center justify-center p-4">
                  <img
                    src="/trendyproduct/Baby Oil Mockup_Ever Health_500ml bottle copy.png"
                    className="max-sm:w-[60%] w-[75%] h-full object-contain"
                    alt="Baby Oil"
                  />
                </div>
              }
            />

            {/* Slide 2 - Banana Powder */}
            <ProductCard
              title="Raw Banana Powder"
              // price="599"
              // originalPrice="799"
              desc="Our Raw Banana Powder is a natural, organic food supplement for babies and adults. It's rich in fiber and essential nutrients, processed naturally to maintain its organic integrity."
              productId="6982e17cbb88e4dd12e2fdfa"
              imageContent={
                <div className="w-full h-full flex items-center justify-center p-4">
                  <img
                    src="/trendyproduct/Nendran Raw Banana Powder_Mockup 3 copy.png"
                    className="max-sm:w-[60%] w-[75%] h-full object-contain"
                    alt="Raw Banana Powder"
                  />
                </div>
              }
            />

            {/* Slide 3 - Jackfruit Powder */}
            <ProductCard
              title="Jackfruit powder"
              // price="599"
              // originalPrice="799"
              desc="Our Jackfruit Powder is a natural, organic food supplement for babies and adults. It's rich in fiber and essential nutrients, processed naturally to maintain its organic integrity."
              productId="696a14a7792387e531ed1d81"
              imageContent={
                <div className="w-full h-full flex items-center justify-center p-4">
                  <img
                    src="/trendyproduct/Raw Jackfruit Powder_Mockup 3 copy.png"
                    className="max-sm:w-[60%] w-[75%] h-full object-contain"
                    alt="Jackfruit Powder"
                  />
                </div>
              }
            />
          </Slider>
        </div>
      </div>
    </section>
  );
}
