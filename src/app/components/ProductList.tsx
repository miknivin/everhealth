'use client';

import React from "react";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import imgProduct from "@/assets/9002db158f30be1c2630bb19fe5fc7883cdd0ad0.png";


import { useGetProductsQuery } from "../redux/api/productApi";

function ProductItem({ id, name, price, originalPrice, save, discount, img }: any) {
  const router = useRouter();
  return (
    <motion.div
      whileHover={{ y: -10 }}
      onClick={() => router.push(`/product/${id}`)}
      className="w-full sm:w-[227px] h-[295px] relative shrink-0 rounded-[16px] border border-[#ededed] bg-[#f5f5f5] overflow-hidden flex flex-col group cursor-pointer mx-auto"
    >
      <div className="absolute inset-[0.44%] top-[63.7%] bottom-[0.34%] bg-white rounded-b-[15px]" />

      {/* Image Area */}
      <div className="h-[180px] w-full relative flex items-center justify-center p-4">
        <img
          src={typeof img === 'string' ? img : img.src}
          alt={name}
          className="h-full object-contain drop-shadow-md group-hover:scale-110 transition-transform duration-300"
        />
      </div>

      {/* Discount Badge */}
      {discount > 0 && (
        <div className="absolute top-0 right-0 bg-[#802367] text-white text-[14px] font-['HK_Grotesk',sans-serif] font-semibold px-3 py-1 rounded-bl-[16px]">
          {discount}% OFF
        </div>
      )}

      <div className="relative z-10 px-4 mt-2">
        <h4 className="text-[16px] text-[#222] font-['Roboto',sans-serif] font-normal mb-2 truncate">{name}</h4>
        <div className="w-full h-[1px] bg-[#EDEDED] mb-2" />

        <div className="flex items-baseline justify-between">
          <span className="text-[16px] text-[#222] font-['Roboto',sans-serif] font-normal">₹{price}</span>
          {originalPrice > price && (
            <span className="text-[16px] text-[#222] font-['Roboto',sans-serif] font-normal line-through decoration-solid decoration-[#222]">₹{originalPrice}</span>
          )}
        </div>

        {save > 0 && (
          <p className="text-[16px] text-[#249b3e] font-['Roboto',sans-serif] font-normal mt-1">
            Save - ₹{save}
          </p>
        )}
      </div>
    </motion.div>
  );
}

export function ProductList() {
  const router = useRouter();
  const { data, isLoading } = useGetProductsQuery({ limit: 8 });
  const products = data?.allProducts || [];

  const formattedProducts = products.map((product: any) => {
    // If variants exist, use the first variant's prices
    const hasVariants = product.variants && product.variants.length > 0;
    const basePrice = hasVariants ? (product.variants[0].price || 0) : (product.price || 0);
    const baseDiscountPrice = hasVariants ? (product.variants[0].discountPrice || 0) : (product.discountPrice || 0);
    
    const price = basePrice;
    const discountPrice = baseDiscountPrice;
    
    const sellingPrice = (discountPrice > 0 && discountPrice < price) ? discountPrice : price;
    const save = price - sellingPrice;
    const discountPercentage = price > 0 ? Math.round((save / price) * 100) : 0;

    return {
      id: product._id,
      name: product.name,
      price: sellingPrice,
      originalPrice: price,
      save: save,
      discount: discountPercentage,
      img: product.images?.[0]?.url || imgProduct,
    };
  });

  return (
    <section className="relative w-full pt-0 pb-[15px] lg:pb-[80px] bg-white">
      <div className="max-w-[1280px] mx-auto px-4 lg:px-[62px]">
        {/* Banners */}
        <div className="row g-4" style={{ display: 'flex', flexWrap: 'nowrap', gap: '0.75rem', marginBottom: '40px', justifyContent: 'center' }}>
          {/* First Card */}
          <div className="col-md-6" style={{ flex: '1 1 50%', maxWidth: '571px' }}>
            <div
              onClick={() => router.push('/product-page')}
              className="relative overflow-hidden rounded-[13px] h-[120px] md:h-[180px] lg:h-[209px] cursor-pointer+ transition-transform duration-300 hover:scale-[1.02]"
            >
              <img
                src="/Group 1.png"
                alt="Product Banner"
                style={{
                  objectFit: 'cover',
                  width: '100%',
                  height: '100%',
                }}
              />
            </div>
          </div>

          {/* Second Card */}
          <div className="col-md-6" style={{ flex: '1 1 50%', maxWidth: '571px' }}>
            <div
              onClick={() => router.push('/product-page')}
              className="relative overflow-hidden rounded-[13px] h-[120px] md:h-[180px] lg:h-[209px] cursor-pointer transition-transform duration-300 hover:scale-[1.02]"
            >
              <img
                src="/Group 2.png"
                alt="Product Banner"
                style={{
                  objectFit: 'cover',
                  width: '100%',
                  height: '100%',
                }}
              />
            </div>
          </div>
        </div>

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

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-[12px] sm:gap-[20px] lg:gap-[56px]">
          {isLoading ? (
            <div className="col-span-full py-20 flex flex-col items-center justify-center">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#802367] mb-4"></div>
              <p className="text-gray-500">Loading products...</p>
            </div>
          ) : formattedProducts.length > 0 ? (
            formattedProducts.map((p: any) => (
              <ProductItem key={p.id} {...p} />
            ))
          ) : (
            <p className="col-span-full text-center py-20 text-gray-400">No products found.</p>
          )}
        </div>
      </div>
    </section>
  );
}

