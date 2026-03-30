'use client';

import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../redux/store";
import { removeFromCart, updateQuantity } from "../redux/slices/cartSlice";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { LoginRegisterModal } from "../components/LoginRegisterModal";
import imgLogo2 from "@/assets/91af2b2974b632c0dcaf1add2472d0679b8ab69b.png";
import imgChatGptImageDec172025045850Pm118 from "@/assets/9002db158f30be1c2630bb19fe5fc7883cdd0ad0.png";
import svgPathsImports from "../../imports/svg-ampvtmyoqe"; // Specific imports for Cart if any

export function CartPage() {
  const router = useRouter();
  const dispatch = useDispatch();
  const cartItems = useSelector((state: RootState) => state.cart.items);
  const { isAuthenticated } = useSelector((state: RootState) => state.user);
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);

  const handleCheckout = () => {
    if (!isAuthenticated) {
      setIsAuthModalOpen(true);
      return;
    }
    router.push('/billing-address');
  };

  return (
    <div className="bg-white min-h-screen w-full font-['Roboto',sans-serif] flex flex-col">
      <Header />

      {/* Main Content */}
      <div className="w-full max-w-[1280px] mx-auto px-4 lg:px-[62px] pt-[160px] pb-4 flex-grow">

        {/* Cart Grid: Items Left, Summary Right */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">

          {/* Left Column: Cart Items */}
          <div className="lg:col-span-2 space-y-8">
            {cartItems.length === 0 ? (
              <div className="text-center py-12">
                <p className="text-[18px] text-[#222]/75 mb-4">Your cart is empty</p>
                <button
                  onClick={() => router.push('/products')}
                  className="px-6 py-2 bg-[#802367] text-white rounded-lg hover:bg-[#6f0a54] transition-colors"
                >
                  Continue Shopping
                </button>
              </div>
            ) : (
              cartItems.map((item) => {
                const sellingPrice = (item.discountPrice > 0 && item.discountPrice < item.price)
                  ? item.discountPrice
                  : item.price;
                const save = item.price - sellingPrice;
                const discountPercentage = item.price > 0 ? Math.round((save / item.price) * 100) : 0;

                return (
                  <div key={`${item.productId}-${item.variant?.size || 'default'}`} className="relative flex flex-col sm:flex-row items-center gap-6 border-b pb-8">
                    {/* Image */}
                    <div className="w-[140px] h-[187px] bg-[#f0eeed] rounded-[13px] overflow-hidden flex items-center justify-center shrink-0 p-2">
                      <imgloading="lazy" src={item.image}
                        alt={item.name}
                        className="max-w-full max-h-full object-contain"
                      />
                    </div>

                    {/* Details */}
                    <div className="flex flex-col items-center sm:items-start flex-grow text-center sm:text-left">
                      <div className="flex items-center justify-between w-full sm:justify-start gap-4 mb-2">
                        <h3 className="text-[18px] font-medium text-[#222]">{item.name}</h3>
                        {/* Delete Icon - Mobile Only */}
                        <button
                          onClick={() => dispatch(removeFromCart({
                            productId: item.productId,
                            variantSize: item.variant?.size
                          }))}
                          className="sm:hidden w-[44px] h-[44px] bg-[#F0EEED] rounded-full flex items-center justify-center hover:bg-red-100 transition-colors shadow-sm"
                        >
                          <svg viewBox="0 0 40 40" className="w-full h-full p-3">
                            <g>
                              <path d={svgPathsImports.p287f4700} fill="#FF3333" />
                            </g>
                          </svg>
                        </button>
                      </div>

                      {item.variant && (
                        <div className="flex items-center gap-2 mb-4 bg-[#f5f5f5] px-3 py-1.5 rounded-[10px]">
                          <span className="text-[14px] font-semibold text-[#222]/75 lowercase">{item.variant.size}</span>
                        </div>
                      )}

                      <div className="flex flex-col sm:flex-row items-center gap-4">
                        <span className="text-[28px] font-semibold text-[#222]">₹{sellingPrice}</span>
                        {discountPercentage > 0 && (
                          <span className="text-[14px] font-semibold text-[#249b3e]">Save - ₹{save}</span>
                        )}
                      </div>
                    </div>

                    {/* Quantity & Delete */}
                    <div className="flex flex-col items-center sm:items-end gap-6 self-stretch sm:self-auto py-2">
                      {/* Delete Icon - Desktop Only */}
                      <button
                        onClick={() => dispatch(removeFromCart({
                          productId: item.productId,
                          variantSize: item.variant?.size
                        }))}
                        className="hidden sm:flex w-[44px] h-[44px] bg-[#F0EEED] rounded-full items-center justify-center hover:bg-red-100 transition-colors shadow-sm"
                      >
                        <svg viewBox="0 0 40 40" className="w-full h-full p-3">
                          <g>
                            <path d={svgPathsImports.p287f4700} fill="#FF3333" />
                          </g>
                        </svg>
                      </button>

                      <div className="flex items-center justify-between border border-[#802367] rounded-[10px] h-[40px] w-[120px] px-4 shadow-sm bg-white mt-auto">
                        <button
                          onClick={() => dispatch(updateQuantity({
                            productId: item.productId,
                            variantSize: item.variant?.size,
                            quantity: item.quantity - 1
                          }))}
                          className="w-3 h-3 flex items-center justify-center"
                        >
                          <svg viewBox="0 0 28 4" className="w-full fill-black">
                            <path d={svgPathsImports.p35b8f000} />
                          </svg>
                        </button>
                        <span className="text-[18px] font-semibold text-[#802367] font-['Roboto',sans-serif]">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => dispatch(updateQuantity({
                            productId: item.productId,
                            variantSize: item.variant?.size,
                            quantity: item.quantity + 1
                          }))}
                          className="w-3 h-3 flex items-center justify-center"
                        >
                          <svg viewBox="0 0 28 28" className="w-full fill-black">
                            <path d={svgPathsImports.p140e3200} />
                          </svg>
                        </button>
                      </div>
                    </div>
                  </div>
                );
              })
            )}
          </div>

          {/* Right Column: Order Summary */}
          <div className="lg:col-span-1">
            <div className="border border-black/10 rounded-[20px] p-5 sticky top-8">
              <h3 className="text-[18px] font-semibold text-black mb-6">Order Summary</h3>

              <div className="space-y-4 mb-6">
                <div className="flex justify-between text-[14px]">
                  <span className="text-black/60">Subtotal</span>
                  <span className="text-black font-medium">
                    {cartItems.reduce((total, item) => total + (item.price * item.quantity), 0)}
                  </span>
                </div>
                <div className="flex justify-between text-[14px]">
                  <span className="text-black/60">Discount</span>
                  <span className="text-[#f33] font-medium">
                    -{cartItems.reduce((total, item) => {
                      const sellingPrice = (item.discountPrice > 0 && item.discountPrice < item.price)
                        ? item.discountPrice
                        : item.price;
                      return total + ((item.price - sellingPrice) * item.quantity);
                    }, 0)}
                  </span>
                </div>
                <div className="flex justify-between text-[14px]">
                  <span className="text-black/60">Delivery Fee</span>
                  <span className="text-black font-medium">FREE</span>
                </div>

                <div className="h-px bg-black/10 my-4" />

                <div className="flex justify-between text-[18px] font-semibold">
                  <span className="text-black">Total</span>
                  <span className="text-black">
                    {cartItems.reduce((total, item) => {
                      const sellingPrice = (item.discountPrice > 0 && item.discountPrice < item.price)
                        ? item.discountPrice
                        : item.price;
                      return total + (sellingPrice * item.quantity);
                    }, 0)}
                  </span>
                </div>
              </div>

              {/* Promo Code */}
              <div className="flex gap-3 mb-6">
                <div className="flex-grow bg-[#f0f0f0] rounded-[13px] px-4 py-3 flex items-center gap-3">
                  <svg viewBox="0 0 24 24" className="w-6 h-6 fill-black/40">
                    <path d={svgPathsImports.p22141602} />
                  </svg>
                  <input
                    type="text"
                    placeholder="Add promo code"
                    className="bg-transparent w-full outline-none text-[16px] text-black"
                  />
                </div>
                <button className="bg-[#802367] text-white px-6 py-3 rounded-[13px] font-medium">
                  Apply
                </button>
              </div>

              {/* Checkout Button */}
              <button
                onClick={handleCheckout}
                className="w-full bg-[#802367] text-white h-[48px] rounded-[10px] flex items-center justify-center gap-3 hover:bg-[#6f0a54] transition-colors"
              >
                <span className="text-[14px] font-semibold">Go to Checkout</span>
                <span className="rotate-[-90deg]">
                  <svg viewBox="0 0 24 24" className="w-5 h-5 fill-white">
                    <path d={svgPathsImports.p4601600} />
                  </svg>
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>

      <LoginRegisterModal
        isOpen={isAuthModalOpen}
        onClose={() => setIsAuthModalOpen(false)}
      />

      <Footer />
    </div>
  );
}
