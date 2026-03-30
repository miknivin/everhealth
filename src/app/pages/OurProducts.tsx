'use client';

import React from "react";
import { motion } from "framer-motion";
import { useRouter, useSearchParams } from "next/navigation";
import productsSvgPaths from "../utils/productsSvgPaths";
import imgGreenBanner from "@/assets/e7f631739fe5b98f15bc1b0773521ccdc02ec488.png";
import imgCoconutDrink from "@/assets/55eeab312663e944d50f5788beba1b877b88fb2b.png";
import imgCoconutRaw from "@/assets/625434014bd5687d5477dac25e94926f6c556c90.png";
import imgBanana from "@/assets/e5ccf50519c7d6ac6814ed5cf9acec069979c77e.png";
import imgBananaKiwi from "@/assets/171fd6e373aa62b021a8da30c121ee66fc472cd1.png";
import imgBaby from "@/assets/161b7ed8f597a1afb83708f2ad2184184619f73a.png";
import imgProduct1 from "@/assets/dd3edf2c163f1c002691407c122e76415a43d038.png"; // Jack Fruit Powder
import imgProduct2 from "@/assets/1d4153d04e55b77c3b6a805832c905fd1d6aded9.png";
import imgProduct3 from "@/assets/5b8737d58d8be441af1d863952c8e222a1e3efa7.png";
import imgProduct4 from "@/assets/9002db158f30be1c2630bb19fe5fc7883cdd0ad0.png";
import imgBottle from "@/assets/2f1f9fa35ae9a7d248c07ab758ee2b8aa50d43ac.png";

// Reusing the same images for the product grid for now as per the imported code which reuses them
const products = [
   { id: 1, name: "Jack Fruit Powder", price: 199, oldPrice: 359, save: 160, discount: "56%", img: imgProduct1 },
   { id: 2, name: "Jack Fruit Powder", price: 199, oldPrice: 359, save: 160, discount: "56%", img: imgProduct2 },
   { id: 3, name: "Jack Fruit Powder", price: 199, oldPrice: 359, save: 160, discount: "56%", img: imgProduct3 },
   { id: 4, name: "Jack Fruit Powder", price: 199, oldPrice: 359, save: 160, discount: "56%", img: imgProduct1 }, // Reusing 1
   { id: 5, name: "Jack Fruit Powder", price: 199, oldPrice: 359, save: 160, discount: "56%", img: imgProduct1 },
   { id: 6, name: "Jack Fruit Powder", price: 199, oldPrice: 359, save: 160, discount: "56%", img: imgProduct1 },
   { id: 7, name: "Jack Fruit Powder", price: 199, oldPrice: 359, save: 160, discount: "56%", img: imgProduct1 },
   { id: 8, name: "Jack Fruit Powder", price: 199, oldPrice: 359, save: 160, discount: "56%", img: imgProduct1 },
   { id: 9, name: "Jack Fruit Powder", price: 199, oldPrice: 359, save: 160, discount: "56%", img: imgProduct1 },
   { id: 10, name: "Jack Fruit Powder", price: 199, oldPrice: 359, save: 160, discount: "56%", img: imgProduct1 },
   { id: 11, name: "Jack Fruit Powder", price: 199, oldPrice: 359, save: 160, discount: "56%", img: imgProduct1 },
   { id: 12, name: "Jack Fruit Powder", price: 199, oldPrice: 359, save: 160, discount: "56%", img: imgProduct1 },
];

import { useGetProductsQuery } from "../redux/api/productApi";
import { BannerCards } from "../components/BannerCards";

function ProductCard({ product, isHighlighted }: { product: any; isHighlighted?: boolean }) {
   const router = useRouter();
   return (
      <motion.div
         whileHover={{ y: -10 }}
         onClick={() => router.push(`/product/${product.id}`)}
         className={`w-full sm:w-[227px] md:w-full h-[295px] md:h-[310px] relative shrink-0 rounded-[16px] border overflow-hidden flex flex-col group cursor-pointer mx-auto transition-all duration-300 ${isHighlighted
            ? 'border-[#802367] border-[3px] shadow-[0_0_20px_rgba(128,35,103,0.5)] scale-105 bg-gradient-to-b from-[#802367]/5 to-white'
            : 'border-[#ededed] bg-[#f5f5f5]'
            }`}
      >
         <div className="absolute inset-[0.44%] top-[63.7%] bottom-[0.34%] bg-white rounded-b-[15px]" />

         {/* Image Area */}
         <div className="h-[180px] w-full relative flex items-center justify-center p-4">
            <img src={typeof product.img === 'string' ? product.img : product.img.src} alt={product.name} className="h-full object-contain drop-shadow-md group-hover:scale-110 transition-transform duration-300" />
         </div>

         {/* Discount Badge */}
         {product.discount > 0 && (
            <div className="absolute top-0 right-0 bg-[#802367] text-white text-[14px] font-['HK_Grotesk',sans-serif] font-semibold px-3 py-1 rounded-bl-[16px]">
               {product.discount}% OFF
            </div>
         )}

         <div className="relative z-10 px-4 mt-2">
            <h4 className="text-[16px] text-[#222] font-['Roboto',sans-serif] font-normal mb-2 truncate">{product.name}</h4>
            <div className="w-full h-[1px] bg-[#EDEDED] mb-2" />

            <div className="flex items-baseline justify-between">
               <span className="text-[16px] text-[#222] font-['Roboto',sans-serif] font-normal">₹{product.price}</span>
               {product.oldPrice > product.price && (
                  <span className="text-[16px] text-[#222] font-['Roboto',sans-serif] font-normal line-through decoration-solid decoration-[#222]">₹{product.oldPrice}</span>
               )}
            </div>

            {product.save > 0 && (
               <p className="text-[16px] text-[#249b3e] font-['Roboto',sans-serif] font-normal mt-1">
                  Save - ₹{product.save}
               </p>
            )}
         </div>
      </motion.div>
   );
}

function CategoryItem({ label }: { label: string }) {
   return (
      <div className="flex flex-col items-center gap-4 min-w-[100px]">
         <div className="w-[100px] h-[100px] relative flex items-center justify-center">
            {/* Circle Border */}
            <div className="absolute inset-0 rounded-full border border-[#802367] bg-[#F5F5F5]" />

            {/* Bottle Image - Centered and slightly overlapping if needed */}
            <div className="relative w-[40px] h-[110px] z-10 -mt-3 shadow-md">
               <img src={imgBottle.src} alt={label} className="w-full h-full object-contain" />
            </div>
         </div>
         <span className="text-[14px] text-[#222] font-['Roboto',sans-serif]">{label}</span>
      </div>
   );
}

export function OurProducts() {
   const router = useRouter();
   const { data, isLoading } = useGetProductsQuery({});
   const searchParams = useSearchParams();
   const searchQuery = searchParams.get('search')?.toLowerCase() || '';
   const products = data?.allProducts || [];

    const formattedProducts = products.map((product: any) => {
      // If variants exist, use the first variant's prices
      const hasVariants = product.variants && product.variants.length > 0;
      const basePrice = hasVariants ? (product.variants[0].price || 0) : (product.price || 0);
      const baseDiscountPrice = hasVariants ? (product.variants[0].discountPrice || 0) : (product.discountPrice || 0);
      
      const price = basePrice;
      const discountPrice = baseDiscountPrice;
      
      // If discountPrice is present and less than price, use it as selling price.
      // Otherwise, default selling price to price.
      const sellingPrice = (discountPrice > 0 && discountPrice < price) ? discountPrice : price;
      const save = price - sellingPrice;
      const discountPercentage = price > 0 ? Math.round((save / price) * 100) : 0;

      return {
         id: product._id,
         name: product.name,
         price: sellingPrice,
         oldPrice: price,
         save: save,
         discount: discountPercentage,
         img: product.images?.[0]?.url || imgProduct1, // Fallback image
         matchesSearch: searchQuery ? product.name.toLowerCase().includes(searchQuery) : false,
      };
   });

   // Filter products if there's a search query
   const displayProducts = searchQuery
      ? formattedProducts.filter((p: any) => p.matchesSearch)
      : formattedProducts;

   return (
      <div className="w-full bg-white overflow-hidden pb-20">
         <div className="max-w-[1280px] mx-auto px-4 md:px-8 lg:px-[62px] pt-[140px] md:pt-[160px] lg:pt-[180px]">

            {/* Banner Cards */}
            <BannerCards />

            {/* Categories */}
            <div className="flex flex-nowrap overflow-x-auto md:flex-wrap md:justify-center gap-4 md:gap-6 lg:gap-8 mb-[70px] md:mb-[80px] pb-4 px-4 -mx-4 md:mx-0 md:px-0 md:pb-0 justify-start">
               {["Baby Oil", "Baby Oil", "Baby Oil", "Baby Oil", "Baby Oil", "Baby Oil"].map((label, i) => (
                  <div key={i} className="shrink-0 first:pl-4 lg:first:pl-0 last:pr-4 lg:last:pr-0">
                     <CategoryItem label={label} />
                  </div>
               ))}
            </div>

            {/* Baby Oil Section */}
            <div className="flex flex-col lg:flex-row items-center justify-between mb-[80px] md:mb-[100px] gap-8 md:gap-10">
               {/* Text Content */}
               <div className="flex-1 max-w-[600px]">
                  <h2 className="text-[32px] md:text-[38px] lg:text-[42px] font-['Inter',sans-serif] font-semibold text-[#802367] mb-4">
                     Baby Oil
                  </h2>
                  <ul className="list-disc pl-6 space-y-1.5 text-[16px] lg:text-[18px] text-[#802367]/75 font-['Roboto',sans-serif]">
                     <li>100% Natural</li>
                     <li>Single- ingredient (coconut milk)</li>
                     <li>A complete edible oil</li>
                     <li>Reduces dryness of the skin</li>
                     <li>Rich in anti-fungal, anti-bacterial, and anti-inflammatory properties</li>
                     <li>The gentlest care for a baby's delicate skin and hair</li>
                  </ul>
               </div>

               {/* Baby Image */}
               <div className="flex-1 relative flex justify-center">
                  {/* Background Blob/Blur */}
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-[#802367]/25 blur-[60px] rounded-full pointer-events-none" />

                  <div className="relative z-10 w-full max-w-[428px]">
                     <img src={imgBaby.src} alt="Baby" className="w-full h-auto object-contain" />
                  </div>
               </div>
            </div>

            {/* Our Products Section */}
            {!searchQuery && (
               <>
                  <div className="flex items-center justify-between mb-[30px] lg:mb-[40px]">
                     <h2
                        className="text-[28px] lg:text-[40px] font-['Roboto',sans-serif] font-medium text-[#802367] drop-shadow-sm"
                        style={{
                           textShadow: "0px 2px 2px rgba(0,0,0,0.1)"
                        }}
                     >
                        Our Products
                     </h2>
                     <button
                        onClick={() => router.push('/products')}
                        className="flex items-center gap-2 text-[#222] text-[16px] font-['Roboto',sans-serif] group hover:text-[#802367] transition-colors"
                     >
                        View All
                        <svg width="18" height="18" viewBox="0 0 12 7" fill="none" className="group-hover:translate-x-1 transition-transform">
                           <path d="M1 1L6 6L11 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                     </button>
                  </div>

                  <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-[12px] sm:gap-[20px] md:gap-[30px] lg:gap-[56px]">
                     {isLoading ? (
                        <div className="col-span-full py-20 flex flex-col items-center justify-center">
                           <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#802367] mb-4"></div>
                           <p className="text-gray-500">Loading products...</p>
                        </div>
                     ) : displayProducts.length > 0 ? (
                        displayProducts.slice(0, 8).map((product: any) => (
                           <ProductCard key={product.id} product={product} />
                        ))
                     ) : (
                        <p className="col-span-full text-center py-20 text-gray-400">No products found.</p>
                     )}
                  </div>
               </>
            )}

            {/* Search Results - Only show when searching */}
            {searchQuery && (
               <>
                  <div className="mb-6 flex items-center gap-3">
                     <h3 className="text-[24px] font-['Inter',sans-serif] font-semibold text-[#802367]">
                        Search Results for: "{searchParams.get('search')}"
                     </h3>
                     <span className="text-[16px] text-[#802367]/75 font-['Roboto',sans-serif]">
                        ({displayProducts.length} {displayProducts.length === 1 ? 'product' : 'products'} found)
                     </span>
                  </div>

                  <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-[12px] sm:gap-[20px] md:gap-[30px] lg:gap-[56px]">
                     {isLoading ? (
                        <p>Loading products...</p>
                     ) : displayProducts.length > 0 ? (
                        displayProducts.map((product: any) => (
                           <ProductCard key={product.id} product={product} isHighlighted={product.matchesSearch} />
                        ))
                     ) : (
                        <div className="col-span-full text-center py-20">
                           <p className="text-[20px] text-[#802367]/75 font-['Roboto',sans-serif]">
                              No products found matching "{searchParams.get('search')}"
                           </p>
                        </div>
                     )}
                  </div>
               </>
            )}

         </div>
      </div>
   );
}
