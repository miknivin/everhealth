'use client';

import React, { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { useRouter, useParams } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../redux/store";
import { addToCart } from "../redux/slices/cartSlice";
import { toast } from "sonner";
import imgProductFront from "@/assets/9002db158f30be1c2630bb19fe5fc7883cdd0ad0.png";
import imgProductBack from "@/assets/0edce0b8b7d3e2823b1bcdc0e9a26ebfc048ec4a.png";
import imgBag5 from "@/assets/0cc12c30ffef0466f2779edadcefe9250d10e34e.png";
import svgPaths from "../utils/productPageSvgPaths";
import { Reviews } from "../components/Reviews";
import { useGetProductDetailsQuery } from "../redux/api/productApi";
import { LoginRegisterModal } from "../components/LoginRegisterModal";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Thumbs, FreeMode } from 'swiper/modules';
import type { Swiper as SwiperType } from 'swiper';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/thumbs';
import 'swiper/css/free-mode';
import '../styles/swiper-custom.css';

function StarRating({ rating = 4, reviewCount = 124 }) {
  return (
    <div className="flex items-center gap-1 mb-4">
      <div className="flex">
        {[1, 2, 3, 4].map((i) => (
          <div key={i} className="w-[24px] h-[24px] flex items-center justify-center">
            <svg viewBox="0 0 36 34" className="w-[16px] h-[14px] fill-[#F7B90F]">
              <path d={svgPaths.p5d1d100} />
            </svg>
          </div>
        ))}
        {/* Partial or Empty Star if needed, just using solid for now based on design snippet showing filled */}
        <div className="w-[24px] h-[24px] flex items-center justify-center">
          {/* Using the path for 'Star 3' from import which might be the half star */}
          <svg viewBox="0 0 35 34" className="w-[16px] h-[14px] fill-[#F7B90F]">
            <path d={svgPaths.p1c682200} />
          </svg>
        </div>
      </div>
      <span className="text-[14px] font-semibold text-[#222]/75 font-['Roboto',sans-serif]">
        {rating} ({reviewCount} Review)
      </span>
    </div>
  );
}

export function ProductPage() {
  const params = useParams();
  const id = params.id as string;
  const router = useRouter();
  const dispatch = useDispatch();
  const { data, isLoading, isError, isFetching } = useGetProductDetailsQuery(id, { skip: !id });
  const { isAuthenticated } = useSelector((state: RootState) => state.user);

  const [selectedVariant, setSelectedVariant] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState("Description");
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperType | null>(null);

  const handleAddToCart = () => {
    if (!product) return;

    const currentVariant = product.variants?.[selectedVariant] || product.variants?.[0];
    const price = currentVariant?.price || product.price || 0;
    const discountPrice = currentVariant?.discountPrice || product.discountPrice || 0;
    const productImage = product.images?.[0]?.url || product.mainImage || imgProductFront;

    dispatch(addToCart({
      productId: product._id,
      name: product.name,
      price: price,
      discountPrice: discountPrice,
      quantity: quantity,
      image: typeof productImage === 'string' ? productImage : productImage.src,
      variant: currentVariant ? {
        size: currentVariant.size,
        price: currentVariant.price,
        discountPrice: currentVariant.discountPrice
      } : undefined
    }));

    toast.success(`${product.name} added to cart!`);
  };

  const handleBuyNow = () => {
    if (!product) return;

    // Check if user is authenticated
    if (!isAuthenticated) {
      setIsAuthModalOpen(true);
      return;
    }

    const currentVariant = product.variants?.[selectedVariant] || product.variants?.[0];
    const price = currentVariant?.price || product.price || 0;
    const discountPrice = currentVariant?.discountPrice || product.discountPrice || 0;
    const productImage = product.images?.[0]?.url || product.mainImage || imgProductFront;

    // Add to cart first
    dispatch(addToCart({
      productId: product._id,
      name: product.name,
      price: price,
      discountPrice: discountPrice,
      quantity: quantity,
      image: typeof productImage === 'string' ? productImage : productImage.src,
      variant: currentVariant ? {
        size: currentVariant.size,
        price: currentVariant.price,
        discountPrice: currentVariant.discountPrice
      } : undefined
    }));

    // Navigate to checkout
    router.push('/checkout');
  };


  if (isLoading || isFetching || !id) {
    return (
      <div className="w-full bg-white min-h-screen pb-[60px] flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#802367] mx-auto"></div>
          <p className="mt-4 text-[#222]/75">Loading product...</p>
        </div>
      </div>
    );
  }

  if (isError || !data?.productById) {
    return (
      <div className="w-full bg-white min-h-screen pb-[60px] flex items-center justify-center">
        <div className="text-center">
          <p className="text-[#222]/75 text-lg">Product not found</p>
          <button
            onClick={() => router.push('/products')}
            className="mt-4 px-6 py-2 bg-[#802367] text-white rounded-lg hover:bg-[#6f0a54] transition-colors"
          >
            Back to Products
          </button>
        </div>
      </div>
    );
  }

  const product = data.productById;
  const currentVariant = product.variants?.[selectedVariant] || product.variants?.[0];
  const price = currentVariant?.price || product.price || 0;
  const discountPrice = currentVariant?.discountPrice || product.discountPrice || 0;
  const sellingPrice = (discountPrice > 0 && discountPrice < price) ? discountPrice : price;
  const save = price - sellingPrice;
  const discountPercentage = price > 0 ? Math.round((save / price) * 100) : 0;
  const productImage = product.images?.[0]?.url || product.mainImage || imgProductFront;
  const averageRating = product.averageRating || 4;
  const reviewCount = product.reviews?.length || 0;

  return (
    <div className="w-full bg-white min-h-screen pb-[60px]">
      <div className="max-w-[1280px] mx-auto px-4 md:px-8 lg:px-[62px] pt-[140px] md:pt-[160px]">
        {/* Product Page Content */}

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 lg:gap-20 mb-[80px] md:mb-[100px] items-center">
          {/* Left Column - Image Gallery */}
          <div className="relative w-full">
            {/* Main Image Swiper */}
            <div className="relative h-[400px] md:h-[450px] lg:h-[500px] w-full flex items-center justify-center mb-4">
              {/* Background Blob/Shadow effect */}
              <div className="absolute w-[80%] h-[20%] bottom-[10%] bg-black/5 blur-[20px] rounded-full" />

              {product.images && product.images.length > 0 ? (
                <Swiper
                  modules={[Pagination, Thumbs]}
                  spaceBetween={10}
                  pagination={{ clickable: true }}
                  thumbs={{ swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null }}
                  className="w-full h-full"
                  style={{
                    '--swiper-pagination-color': '#802367',
                  } as React.CSSProperties}
                >
                  {product.images.map((image: any, index: number) => (
                    <SwiperSlide key={index}>
                      <div className="relative z-10 w-full h-full flex items-center justify-center">
                        <imgloading="lazy" src={image.url}
                          alt={image.alt || `${product.name} - Image ${index + 1}`}
                          className="max-w-[70%] max-h-[90%] object-contain drop-shadow-xl"
                        />
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>
              ) : (
                <div className="relative z-10 w-[50%] md:w-[45%] lg:w-[40%]">
                  <imgloading="lazy" src={typeof productImage === 'string' ? productImage : productImage.src}
                    alt={product.name}
                    className="w-full h-auto object-contain drop-shadow-xl"
                  />
                </div>
              )}
            </div>

            {/* Thumbnail Swiper */}
            {product.images && product.images.length > 1 && (
              <Swiper
                onSwiper={setThumbsSwiper}
                modules={[FreeMode, Thumbs]}
                spaceBetween={10}
                slidesPerView={4}
                freeMode={true}
                watchSlidesProgress={true}
                className="thumbs-swiper"
                breakpoints={{
                  640: {
                    slidesPerView: 5,
                  },
                  768: {
                    slidesPerView: 6,
                  },
                }}
              >
                {product.images.map((image: any, index: number) => (
                  <SwiperSlide key={index}>
                    <div className="cursor-pointer border-2 border-transparent hover:border-[#802367] rounded-lg overflow-hidden transition-all duration-200 aspect-square">
                      <imgloading="lazy" src={image.url}
                        alt={image.alt || `Thumbnail ${index + 1}`}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            )}
          </div>

          {/* Right Column - Details */}
          <div className="flex flex-col">
            <h2 className="text-[18px] md:text-[22px] lg:text-[24px] font-['Roboto',sans-serif] font-semibold text-[#222] mb-1 leading-tight">
              {product.name}
            </h2>

            {/* <StarRating rating={averageRating} reviewCount={reviewCount} /> */}

            {/* Price & Discount */}
            {discountPercentage > 0 && (
              <div className="flex items-center gap-4 mb-6 mt-4">
                <div className="bg-[#802367] text-white text-[14px] font-semibold px-4 py-1 rounded-bl-[10px] rounded-tr-[10px] font-['Roboto',sans-serif]">
                  {discountPercentage}% OFF
                </div>
                <span className="text-[14px] text-[#249B3E] font-semibold font-['Roboto',sans-serif]">
                  Save - ₹{save}
                </span>
              </div>
            )}

            <div className="flex items-baseline gap-4 mb-8">
              <span className="text-[28px] md:text-[32px] font-semibold text-[#222] font-['Roboto',sans-serif]">
                ₹{sellingPrice}
              </span>
              {discountPercentage > 0 && (
                <span className="text-[18px] md:text-[20px] font-semibold text-[#222]/75 line-through decoration-solid font-['Roboto',sans-serif]">
                  ₹{price}
                </span>
              )}
            </div>

            {/* Size/Variant Selector */}
            {product.variants && product.variants.length > 0 && (
              <div className="flex gap-4 mb-8 flex-wrap">
                {product.variants.map((variant: any, index: number) => (
                  <button
                    key={index}
                    onClick={() => setSelectedVariant(index)}
                    className={`px-6 py-1.5 rounded-[13px] text-[14px] font-semibold font-['Roboto',sans-serif] transition-colors ${selectedVariant === index
                      ? "bg-[#F5F5F5] text-[#222]/75 border-2 border-[#802367]"
                      : "bg-[#F5F5F5] text-[#222]/75 border-2 border-transparent"
                      }`}
                  >
                    {variant.size}
                  </button>
                ))}
              </div>
            )}

            {/* Quantity & Actions */}
            <div className="flex flex-wrap items-center gap-3 md:gap-4 mb-6">
              {/* Quantity Counter */}
              <div className="flex items-center justify-between border border-[#802367] rounded-[10px] h-[36px] md:h-[40px] w-[110px] md:w-[120px] px-3 shadow-sm bg-white">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="w-2.5 h-2.5 flex items-center justify-center">
                  <svg viewBox="0 0 28 4" className="w-full fill-black">
                    <path d={svgPaths.p35b8f000} />
                  </svg>
                </button>
                <span className="text-[16px] font-semibold text-[#802367] font-['Roboto',sans-serif]">
                  {quantity}
                </span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="w-2.5 h-2.5 flex items-center justify-center">
                  <svg viewBox="0 0 28 28" className="w-full fill-black">
                    <path d={svgPaths.p140e3200} />
                  </svg>
                </button>
              </div>

              {/* Buy Now Button */}
              <button
                onClick={handleBuyNow}
                className="h-[36px] md:h-[40px] w-[110px] md:w-[120px] border border-[#802367] rounded-[10px] shadow-sm flex items-center justify-center text-[13px] md:text-[14px] font-semibold text-[#802367] font-['Roboto',sans-serif] hover:bg-[#802367] hover:text-white transition-colors">
                Buy Now
              </button>

              {/* Cart Button */}
              <button
                onClick={handleAddToCart}
                className="h-[36px] md:h-[40px] w-[36px] md:w-[40px] bg-[#802367] rounded-[10px] shadow-sm flex items-center justify-center hover:bg-[#6f0a54] transition-colors">
                <img loading="lazy" src={imgBag5.src} alt="Cart" className="w-[16px] h-[16px] object-contain" />
              </button>
            </div>
          </div>
        </div>

        {/* Tabs & Description/Review */}
        <div className="w-full max-w-[1180px] mx-auto">
          <div className="flex gap-16 border-b-[3px] border-[#222]/10 relative mb-8">
            {/* Active Tab Indicator */}
            <div
              className={`absolute bottom-[-3px] left-0 h-[3px] bg-[#802367] transition-all duration-300 ease-out`}
              style={{
                width: activeTab === "Description" ? "80px" : "50px",
                transform: activeTab === "Description" ? "translateX(0)" : "translateX(128px)"
              }}
            />

            <button
              onClick={() => setActiveTab("Description")}
              className={`text-[14px] font-semibold font-['Roboto',sans-serif] pb-2 transition-colors ${activeTab === "Description" ? "text-[#802367]" : "text-[#222]/75"}`}
            >
              Description
            </button>
            {/* <button
              onClick={() => setActiveTab("Review")}
              className={`text-[14px] font-semibold font-['Roboto',sans-serif] pb-2 transition-colors ${activeTab === "Review" ? "text-[#802367]" : "text-[#222]/75"}`}
            >
              Review
            </button> */}
          </div>


          {activeTab === "Description" ? (
            <div className="text-[#222]/75 font-['Roboto',sans-serif] text-[14px] font-medium leading-[22px] space-y-6">
              {product.description && (
                <p>{product.description}</p>
              )}

              {product.shortDescription && (
                <p>{product.shortDescription}</p>
              )}

              {product.features && product.features.length > 0 && (
                <div>
                  <p className="mb-2 font-semibold">Key Features</p>
                  <ul className="list-disc pl-6 space-y-1">
                    {product.features.map((feature: string, index: number) => (
                      <li key={index}>{feature}</li>
                    ))}
                  </ul>
                </div>
              )}

              {!product.description && !product.shortDescription && !product.features?.length && (
                <p>No description available for this product.</p>
              )}
            </div>
          ) : (
            null
            /* <Reviews /> */
          )}
        </div>
      </div>

      <LoginRegisterModal
        isOpen={isAuthModalOpen}
        onClose={() => setIsAuthModalOpen(false)}
      />
    </div>
  );
}
