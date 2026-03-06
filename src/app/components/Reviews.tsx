'use client';

import React from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import '@/styles/reviews.css';
import imgReview1 from "@/assets/0ea0dcc8f0922b9597d6bf10e35abbf68b863f93.png";
import imgReview2 from "@/assets/99131567b63ac48b2ddcea0c0d906d2b8b3b984b.png";
import svgPaths from "../utils/productPageSvgPaths";

const reviews = [
  {
    id: 1,
    name: "Anjali Menon",

    text: "This baby oil is very gentle and keeps my baby’s skin soft all day. Perfect for daily massage and not sticky at all.",
    img: imgReview1,
  },
  {
    id: 2,
    name: "Rahul Nair",

    text: "Really happy with the quality. My baby has sensitive skin, and this oil suits perfectly without any irritation.",
    img: imgReview2,
  },
  {
    id: 3,
    name: "Sneha Varghese",

    text: "Nice fragrance and very smooth texture. I’ve been using it regularly and the results are great.",
    img: imgReview2, // Reusing image 2 as per import
  },
];

function StarRating() {
  return (
    <div className="flex gap-1">
      {[1, 2, 3, 4, 5].map((i) => (
        <div key={i} className="w-[35px] h-[33px]">
          <svg viewBox="0 0 36 34" className="w-full h-full fill-[#F7B90F]">
            <path d={svgPaths.p5d1d100} />
          </svg>
        </div>
      ))}
    </div>
  );
}

export function Reviews() {
  return (
    <div className="relative py-6">
      <Swiper
        modules={[Pagination, Autoplay]}
        spaceBetween={30}
        slidesPerView={1}
        pagination={{
          clickable: true,
          dynamicBullets: true
        }}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true
        }}
        loop={true}
        className="reviews-swiper pb-16"
      >
        {reviews.map((review) => (
          <SwiperSlide key={review.id}>
            <div className="flex flex-col items-center text-center max-w-[800px] mx-auto px-2">
              <h3 className="text-[#802367] text-[22px] font-['Lato',sans-serif] font-semibold leading-[1.2] mb-0.5">
                {review.name}
              </h3>


              <p className="text-[#222222]/75 text-[16px] font-['Roboto',sans-serif] font-bold leading-[25.6px] mb-3">
                {review.text}
              </p>

              <div className="mb-8">
                <StarRating />
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
