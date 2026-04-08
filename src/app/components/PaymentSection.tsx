'use client';

import React, { useState } from "react";
import svgPaths from "../../imports/svg-ogfbi766fk";

function GooglePayLogo() {
  return (
    <div className="h-[24px] relative shrink-0 w-[58.2px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 58.2 24">
        <g clipPath="url(#clip0_46_281)">
          <path d={svgPaths.p2ac5d200} fill="white" />
          <path d={svgPaths.pef80780} fill="white" />
          <path d={svgPaths.pd6018b0} fill="white" />
          <path d={svgPaths.p3fca4b70} fill="#4285F4" />
          <path d={svgPaths.p25dad100} fill="#34A853" />
          <path d={svgPaths.p32c21f80} fill="#FBBC04" />
          <path d={svgPaths.p123e7c00} fill="#EA4335" />
        </g>
        <defs>
          <clipPath id="clip0_46_281">
            <rect fill="white" height="24" width="58.2" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function ShippingOption({
  label,
  duration,
  price,
  selected,
  onSelect
}: {
  label: string;
  duration: string;
  price: string;
  selected: boolean;
  onSelect: () => void;
}) {
  return (
    <div
      className={`relative w-full p-3 flex items-center justify-between cursor-pointer transition-colors ${selected ? 'z-10 bg-white' : 'bg-white'}`}
      onClick={onSelect}
    >
      <div className="flex items-center gap-3">
        <div className="relative w-[12px] h-[12px] shrink-0">
          {selected ? (
            <svg viewBox="0 0 12 12" className="w-full h-full">
              <rect fill="white" height="11" rx="5.5" width="11" x="0.5" y="0.5" />
              <rect height="11" rx="5.5" stroke="#1A1F36" width="11" x="0.5" y="0.5" />
              <circle cx="6" cy="6" fill="#1A1F36" r="3" />
            </svg>
          ) : (
            <div className="w-full h-full rounded-full border border-black/10 bg-white" />
          )}
        </div>
        <div className="flex flex-col">
          <span className={`text-[16px] ${selected ? 'text-[#1a1f36]' : 'text-[#3c4257]'} font-normal`}>{label}</span>
          <span className="text-[12px] text-[#697386] tracking-[0.18px]">{duration}</span>
        </div>
      </div>
      <span className={`text-[16px] font-medium ${selected ? 'text-[#1a1f36]' : 'text-[#3c4257]'}`}>{price}</span>

      {/* Separator Line */}
      {!selected && <div className="absolute bottom-0 left-0 right-0 h-px bg-black/5" />}
    </div>
  );
}

export function PaymentSection({ onPay, cartTotal = 0 }: { onPay: (amount: string, method: 'prepaid' | 'cod') => void; cartTotal?: number }) {
  const [selectedMethod, setSelectedMethod] = useState<'prepaid' | 'cod'>('prepaid');

  // Calculate amounts based on payment method
  const prepaidAmount = cartTotal;
  const codAmount = cartTotal; // No extra charge for COD

  return (
    <div className="w-full flex flex-col gap-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
      {/* Shipping Method */}
      <div className="w-full">
        <h3 className="text-[14px] font-['SF_Pro_Display',sans-serif] font-medium text-[#697386] mb-2">Select Payment Method</h3>
        <div className="w-full bg-white border border-[#3c4257]/10 rounded-[6px] overflow-hidden shadow-sm flex flex-col">
          <ShippingOption
            label="Online Payment (UPI, Cards, Netbanking)"
            duration="Secure online payment via Razorpay"
            price={`₹${prepaidAmount.toFixed(2)}`}
            selected={selectedMethod === 'prepaid'}
            onSelect={() => setSelectedMethod('prepaid')}
          />
          <div className="h-px bg-[#3c4257]/10 w-full" />
          <ShippingOption
            label="Cash on Delivery"
            duration="Pay directly at your doorstep"
            price={`₹${codAmount.toFixed(2)}`}
            selected={selectedMethod === 'cod'}
            onSelect={() => setSelectedMethod('cod')}
          />
        </div>
      </div>

      {/* Payment Button */}
      <div className="w-full">
        <button
          onClick={() => onPay(selectedMethod === 'prepaid' ? prepaidAmount.toFixed(2) : codAmount.toFixed(2), selectedMethod)}
          className="h-[52px] w-full bg-[#802367] rounded-[8px] shadow-sm flex items-center justify-center text-white text-[16px] xs:text-[20px] font-['Roboto',sans-serif] font-medium hover:bg-[#6f0a54] transition-all hover:shadow-md active:scale-[0.98] border-none"
        >
          {selectedMethod === 'prepaid' ? (
            <div className="flex items-center gap-2">
              <span>Pay & Place Order</span>
              <span className="text-[14px] opacity-80">(via Razorpay)</span>
            </div>
          ) : (
            `Place COD Order (₹${codAmount.toFixed(2)})`
          )}
        </button>
        <p className="text-center text-[12px] text-[#697386] mt-3">
          {selectedMethod === 'prepaid' 
            ? "Safe & secure encrypted transactions" 
            : "Please keep the exact amount ready for delivery"}
        </p>
      </div>
    </div>
  );
}
