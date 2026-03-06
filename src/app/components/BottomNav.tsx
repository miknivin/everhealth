'use client';

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, Info, ShoppingBag, Phone } from "lucide-react";

export function BottomNav() {
  const pathname = usePathname();
  const navItems = [
    { name: "Home", path: "/", icon: Home },
    { name: "About", path: "/about", icon: Info },
    { name: "Products", path: "/products", icon: ShoppingBag },
    { name: "Contact", path: "/contact", icon: Phone }
  ];

  return (
    <div className="fixed bottom-0 left-0 w-full bg-white border-t border-[#EDEDED] z-50 flex justify-around items-center h-[70px] px-2 shadow-[0_-2px_10px_rgba(0,0,0,0.05)] lg:hidden">
      {navItems.map((item) => {
        const Icon = item.icon;
        const isActive = pathname === item.path;
        return (
          <Link
            key={item.name}
            href={item.path}
            className={`flex flex-col items-center justify-center w-full h-full transition-colors duration-200 ${isActive ? "text-[#802367]" : "text-[#7C5F47] hover:text-[#802367]"
              }`}
          >
            <Icon size={24} strokeWidth={isActive ? 2.5 : 2} />
            <span className="text-[12px] font-['Roboto',sans-serif] font-medium mt-1">{item.name}</span>
          </Link>
        );
      })}
    </div>
  );
}
