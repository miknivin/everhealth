'use client';

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Phone, PhoneCall } from "lucide-react";
import imgLogo2 from "@/assets/91af2b2974b632c0dcaf1add2472d0679b8ab69b.png";
import svgPaths from "../utils/svgPaths"; // Assuming you have general svgPaths, but about specific ones are in aboutSvgPaths. 
// For footer social icons, if they are standard, we can use lucide-react or the svgPaths if they are custom.
// The design uses specific social icons. Let's stick to Lucide for consistency or use the svgPaths if I had them.
// The About import had social icons as SVGs. Let's use Lucide for simplicity and robustness unless requested otherwise.
// Actually, I should check if I have the social icons in svgPaths from the About import. Yes, p27bf5700 (Twitter), etc.
import aboutSvgPaths from "../utils/aboutSvgPaths";

export function Footer() {
  return (
    <footer className="relative bg-[#FDF8F5] text-[#802367] pt-[24px] pb-[12px] mt-[40px] w-full overflow-hidden">
      {/* Top Border Line */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-[#802367]/20" />

      <div className="max-w-[1280px] mx-auto px-4 lg:px-[62px]">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-[16px]">
          {/* Column 1: Logo & Contact */}
          <div className="flex flex-col gap-3">
            <Link href="/" className="w-[160px] block">
              <img loading="lazy" src={imgLogo2.src} alt="EverHealth" className="w-full h-auto" />
            </Link>

            <div className="flex flex-col gap-2 mt-1">
              <h3 className="font-['Roboto',sans-serif] text-[18px] font-normal mb-1">Contact Us</h3>

              <div className="flex items-start gap-2">
                <div className="w-[24px] h-[24px] mt-1">
                  {/* Phone Icon */}
                  <svg width="24" height="24" viewBox="0 0 21 21" fill="none">
                    <path d={aboutSvgPaths.p90a5500} stroke="#802367" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    <path d={aboutSvgPaths.pb0ba700} stroke="#802367" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <div className="flex flex-col">
                  <span className="text-[16px] font-['Roboto',sans-serif] font-medium">Phone</span>
                  <a href="tel:+918606914249" className="text-[16px] font-['Roboto',sans-serif] hover:text-[#802367]/70 transition-colors">+91 8606914249</a>
                </div>
              </div>
              {/* 
              <div className="flex items-start gap-3">
                <div className="w-[24px] h-[24px] mt-1">
               
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d={aboutSvgPaths.p18202900} fill="white" />
                    <path d={aboutSvgPaths.p6ef0e00} fill="white" />
                  </svg>
                </div>
                <div className="flex flex-col">
                  <span className="text-[16px] font-['Roboto',sans-serif] font-medium">WhatsApp</span>
                  <a href="https://wa.me/918606914249" target="_blank" rel="noopener noreferrer" className="text-[16px] font-['Roboto',sans-serif] hover:text-[#802367]/70 transition-colors">+91 8606914249</a>
                </div>
              </div> */}

              <div className="flex items-start gap-3">
                <div className="w-[24px] h-[24px] mt-1">
                  {/* Email Icon */}
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#802367" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="4" width="20" height="16" rx="2" />
                    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                  </svg>
                </div>
                <div className="flex flex-col">
                  <span className="text-[16px] font-['Roboto',sans-serif] font-medium">Mail</span>
                  <a href="mailto:everhealth.org@gmail.com" className="text-[16px] font-['Roboto',sans-serif] hover:text-[#802367]/70 transition-colors break-all">everhealth.org@gmail.com</a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-[24px] h-[24px] mt-1">
                  {/* Location Icon */}
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#802367" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                </div>
                <div className="flex flex-col">
                  <span className="text-[16px] font-['Roboto',sans-serif] font-medium mb-1">Address</span>
                  <span className="text-[16px] font-['Roboto',sans-serif] leading-relaxed max-w-[280px]">
                    Everhealth, 14/211 Police station road, Kadirur, Thalassery, Kannur-670642, Kerala, India
                  </span>
                </div>
              </div>
            </div>

            {/* Social Icons */}
            <div className="flex items-center gap-3 mt-1">
              {/* Facebook */}
              <a
                href="https://www.facebook.com/share/14cWhCaVRxC/?mibextid=wwXIfr"
                target="_blank"
                rel="noopener noreferrer"
                className="w-[28px] h-[28px] bg-[#802367] rounded-full flex items-center justify-center hover:opacity-80 transition-opacity"
              >
                <svg width="7" height="13" viewBox="0 0 7 13" fill="none">
                  <path d={aboutSvgPaths.p16f66d00} fill="white" />
                </svg>
              </a>
              {/* Instagram */}
              <a
                href="https://www.instagram.com/everhealthindia?igsh=MWkxNXFiNmhtdDNzYg=="
                target="_blank"
                rel="noopener noreferrer"
                className="w-[28px] h-[28px] bg-[#802367] rounded-full flex items-center justify-center hover:opacity-80 transition-opacity"
              >
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <path d={aboutSvgPaths.pb96a380} fill="white" />
                  <path d={aboutSvgPaths.pb23d800} fill="white" />
                  <path d={aboutSvgPaths.p1d3a1c80} fill="white" />
                </svg>
              </a>
            </div>
          </div>

          {/* Column 2: Most Popular Categories */}
          <div>
            <h3 className="font-['HK_Grotesk',sans-serif] font-semibold text-[18px] mb-2">Most Popular Categories</h3>
            <div className="w-[219px] h-[2px] bg-[#802367]/30 mb-2" />
            <ul className="flex flex-col gap-2 font-['Roboto',sans-serif] text-[14px]">
              <li>Staples</li>
              <li>Beverages</li>
              <li>Personal Care</li>
              <li>Home Care</li>
              <li>Baby Care</li>

            </ul>
          </div>

          {/* Column 3: Customer Services */}
          <div>
            <h3 className="font-['Roboto',sans-serif] font-normal text-[18px] mb-2">Customer Services</h3>
            <div className="w-[167px] h-[2px] bg-[#802367]/30 mb-2" />
            <ul className="flex flex-col gap-3 font-['Roboto',sans-serif] text-[16px]">
              <li>
                <Link href="/about" className="hover:text-[#802367]/70 transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/terms-and-conditions" className="hover:text-[#802367]/70 transition-colors">
                  Terms & Conditions
                </Link>
              </li>
              <li>
                <Link href="/privacy-policy" className="hover:text-[#802367]/70 transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/cancellation-return-policy" className="hover:text-[#802367]/70 transition-colors">
                  Cancellation & Return Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-[#802367]/20 pt-4 text-center">
          <p className="font-['Roboto',sans-serif] text-[16px] font-normal text-[#802367]/80">
            © 2022 All rights reserved. Everhealth.
          </p>
        </div>
      </div>
    </footer>
  );
}
