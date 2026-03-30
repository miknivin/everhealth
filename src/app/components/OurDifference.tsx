'use client';

import React from "react";
import { motion } from "framer-motion";
import svgPaths from "../utils/svgPaths";
import { useState } from "react";

const products = [
  {
    id: "coconut",
    title: "Coconut Oil",
    image: "/img/coconut oil.jpeg",
    desc: "We follow healthy elements protected manufacturing process. This coconut oil is extracted from the copra which is produced from the selected coconut species handpicked from northern part of Kerala. We ensure the high quality of copra by processing it in our own customized drier. We process the coconut oil in our own facilities (customized chakku).",
    thumb: "/img/coconut oil.jpeg"
  },
  {
    id: "virgin-coconut",
    title: "Virgin Coconut Oil",
    image: "/img/virgin coconut oil.jpeg",
    desc: "Our Virgin Coconut Oil is cold-pressed from fresh organic coconuts within 24 hours of harvest. This process retains all the natural nutrients, antioxidants, and the delicate aroma of fresh coconuts, making it perfect for both culinary and skin care uses.",
    thumb: "/img/virgin coconut oil.jpeg"
  },
  {
    id: "banana-powder-adukkan",
    title: "Adukkan Banana Powder",
    image: "/img/banana powder.jpeg",
    desc: "Traditionally prepared from selected Adukkan bananas, this powder is a natural, healthy food supplement for babies and adults. It's rich in fiber and essential nutrients, processed naturally to maintain its organic integrity.",
    thumb: "/img/banana powder.jpeg"
  },
  {
    id: "banana-powder-nendra",
    title: "Banana Powder Nendra",
    image: "/img/banana nendra.jpeg",
    desc: "Made from premium Nendran bananas, this powder is widely used as a traditional weaning food for infants. It is highly nutritious, easily digestible, and processed without any additives or preservatives.",
    thumb: "/img/banana nendra.jpeg"
  },
  {
    id: "jack-fruit",
    title: "Jack Fruit Powder",
    image: "/img/jackfruit image.png",
    desc: "The ingredient is raw jack fruit, collecting from our nearby paces. The raw jackfruit is dehydrated in a customized dryer and then ground into a fine powder. It is enriched with soluble fiber and protein. Because of low glycemic index nature, it helps to control blood sugar level. you can add one or two teaspoon jackfruit flour in other flours and batters like Idly, Dosa, Chapatti, for balancing the glycemic index.",
    thumb: "/img/jackfruit image.png"
  }
];

function Thumbnail({ img, title, active, onClick }: { img: any; title: string; active?: boolean; onClick: () => void }) {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={onClick}
      className={`flex items-center gap-3 px-4 py-2 rounded-full cursor-pointer transition-all ${active ? "bg-white shadow-md scale-105 border border-[#91086c]/20" : "bg-transparent opacity-60 hover:opacity-100 hover:bg-white/50"}`}
    >
      <div className="w-[36px] lg:w-[44px] h-[36px] lg:h-[44px] rounded-full overflow-hidden bg-white shrink-0 shadow-sm border border-[#F5F5F5]">
        <img loading="lazy" src={typeof img === 'string' ? img : img.src} alt={title} className="w-full h-full object-cover" />
      </div>
      <span className={`text-[12px] lg:text-[14px] font-['Roboto',sans-serif] font-medium whitespace-nowrap ${active ? "text-[#91086c]" : "text-[#7c5f47]"}`}>
        {title}
      </span>
    </motion.div>
  );
}

export function OurDifference() {
  const [activeIndex, setActiveIndex] = useState(0);
  const currentProduct = products[activeIndex];

  return (
    <section className="relative w-full py-[40px] lg:py-[50px] bg-white overflow-hidden">
      <div className="relative z-10 max-w-[1102px] mx-auto px-4">
        <h2 className="text-[32px] lg:text-[50px] font-['Roboto',sans-serif] font-semibold text-[#91086c] text-center mb-4" style={{ textShadow: "0px 4px 10px rgba(0,0,0,0.15)" }}>
          Our Difference
        </h2>
        <p className="max-w-[800px] mx-auto text-center text-[#91086c]/70 text-[16px] lg:text-[18px] font-['Roboto',sans-serif] mb-[40px] lg:mb-[60px] leading-relaxed">
          At Everhealth, we take pride in offering a unique selection of Natural products designed to enhance your health and well-being. Our specialties reflect our commitment to quality, sustainability, and customer satisfaction.
        </p>

        <div className="flex flex-col lg:flex-row items-center gap-[30px] md:gap-[40px] lg:gap-[60px] mb-[60px] lg:mb-[80px]">
          {/* Main Image */}
          <motion.div
            key={`img-${currentProduct.id}`}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="w-full max-w-[400px] md:max-w-[420px] lg:max-w-[480px] h-[320px] md:h-[400px] lg:h-[480px] relative shrink-0 overflow-hidden mx-auto lg:mx-0"
            style={{ borderRadius: "42% 58% 70% 30% / 45% 45% 55% 55%" }}
          >
            {/* Background overlay for better contrast */}
            <div
              className="absolute inset-0 bg-[#FFDABC]/30 z-0"
            />
            <imgloading="lazy" src={typeof currentProduct.image === 'string' ? currentProduct.image : (currentProduct.image as any).src}
              alt={currentProduct.title}
              className="absolute inset-0 w-full h-full object-cover"
            />
          </motion.div>

          {/* Content */}
          <motion.div
            key={`txt-${currentProduct.id}`}
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex-1 text-center lg:text-left px-4 md:px-6 lg:px-0"
          >
            <h3 className="text-[28px] md:text-[36px] lg:text-[45px] font-['Roboto',sans-serif] font-bold text-[#91086c] mb-4 md:mb-5 lg:mb-6">
              {currentProduct.title}
            </h3>
            <p className="text-[14px] md:text-[16px] lg:text-[18px] font-['Roboto',sans-serif] font-normal text-[#91086c]/80 leading-relaxed max-w-[600px] mx-auto lg:mx-0">
              {currentProduct.desc}
            </p>
          </motion.div>
        </div>

        {/* Thumbnails */}
        <div className="flex flex-wrap justify-center gap-[12px] lg:gap-[24px] w-full">
          {products.map((p, idx) => (
            <Thumbnail
              key={p.id}
              img={p.thumb}
              title={p.title}
              active={activeIndex === idx}
              onClick={() => setActiveIndex(idx)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
