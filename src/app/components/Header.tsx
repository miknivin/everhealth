'use client';

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import imgLogo from "../../assets/89f199b8c0610e515928d4b8f3de9b1e7dc1946c.png";
import imgBag5 from "../../assets/0cc12c30ffef0466f2779edadcefe9250d10e34e.png";
import svgPaths from "../utils/svgPaths";

import { User as UserIcon } from "lucide-react";
import { LoginRegisterModal } from "./LoginRegisterModal";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";
import { useGetProductsQuery } from "../redux/api/productApi";
import { AnimatePresence } from "framer-motion";

export function Header() {
  const [isAuthModalOpen, setIsAuthModalOpen] = React.useState(false);
  const [searchQuery, setSearchQuery] = React.useState("");
  const { isAuthenticated } = useSelector((state: RootState) => state.user);
  const cartItems = useSelector((state: RootState) => state.cart.items);
  const cartItemCount = cartItems.reduce((total: number, item: any) => total + item.quantity, 0);
  const pathname = usePathname();
  const router = useRouter();

  // Search suggestions logic
  const [debouncedQuery, setDebouncedQuery] = React.useState("");
  const [showSuggestions, setShowSuggestions] = React.useState(false);
  const searchRef = React.useRef<HTMLDivElement>(null);

  const { data } = useGetProductsQuery(
    { keyword: debouncedQuery },
    { skip: !debouncedQuery || debouncedQuery.length < 1 }
  );

  const suggestions = data?.allProducts || [];

  React.useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedQuery(searchQuery);
    }, 300);
    return () => clearTimeout(timer);
  }, [searchQuery]);

  React.useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setShowSuggestions(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    { name: "Our Products", path: "/products" },
    { name: "Contact Us", path: "/contact" }
  ];

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      router.push(`/products?search=${encodeURIComponent(searchQuery.trim())}`);
    }
  };

  return (
    <header className="absolute top-0 left-0 w-full z-50 px-4 md:px-8 lg:px-[62px] py-4 md:py-6 lg:py-[40px]">
      <div className="max-w-[1280px] mx-auto flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="w-[120px] md:w-[145px] lg:w-[160px] h-[36px] md:h-[44px] lg:h-[49px] shrink-0">
          <img loading="lazy" src={imgLogo.src} alt="Everhealth Logo" className="w-full h-full object-contain" />
        </Link>

        {/* Navigation - Desktop (Centered) */}
        <nav className="hidden lg:flex items-center gap-[40px] absolute left-1/2 -translate-x-1/2">
          {navItems.map((item) => {
            const isActive = pathname === item.path;
            return (
              <Link
                key={item.name}
                href={item.path}
                className="relative"
              >
                <motion.span
                  className={`text-[20px] font-medium font-['Roboto',sans-serif] whitespace-nowrap ${isActive ? "text-[#802367]" : "text-[#7c5f47]"
                    }`}
                  whileHover={{ scale: 1.05, color: "#802367" }}
                >
                  {item.name}
                </motion.span>
                {isActive && (
                  <motion.div
                    layoutId="underline"
                    className="h-[3px] bg-[#802367] rounded-full mt-1 w-full absolute left-0 bottom-[-5px]"
                  />
                )}
              </Link>
            );
          })}
        </nav>

        {/* Actions - Right Side */}
        <div className="flex items-center gap-3 md:gap-4 lg:gap-[35px]">
          {/* Search Bar */}
          <div ref={searchRef} className="relative w-[188px] md:w-[220px] h-[41px] hidden sm:block">
            <form onSubmit={handleSearch} className="relative w-full h-full">
              <button
                type="submit"
                className="absolute left-0 top-0 w-[41px] h-[41px] bg-[#802367] rounded-[13px] shadow-sm flex items-center justify-center z-10 cursor-pointer hover:bg-[#902367] transition-colors"
              >
                <svg
                  className="w-[19px] h-[21px]"
                  viewBox="0 0 19 22"
                  fill="none"
                >
                  <path d={svgPaths.p18f30b80} fill="white" />
                </svg>
              </button>

              <input
                type="text"
                value={searchQuery}
                onChange={(e) => {
                  setSearchQuery(e.target.value);
                  setShowSuggestions(true);
                }}
                onFocus={() => setShowSuggestions(true)}
                placeholder="Search..."
                className="absolute left-0 top-0 w-full h-full pl-[53px] pr-3 font-['Roboto',sans-serif] font-medium text-[15px] text-[#802367] placeholder:text-[#802367]/75 bg-transparent border-none outline-none"
              />
            </form>

            {/* Suggestions Dropdown */}
            <AnimatePresence>
              {showSuggestions && searchQuery.length >= 1 && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  className="absolute top-[50px] left-0 w-[250px] bg-white rounded-[13px] shadow-xl border border-[#802367]/10 overflow-hidden z-50 py-1"
                >
                  {suggestions.length > 0 ? (
                    <div className="flex flex-col">
                      {suggestions.map((product: any) => (
                        <button
                          key={product._id}
                          onClick={() => {
                            router.push(`/product/${product._id}`);
                            setShowSuggestions(false);
                            setSearchQuery("");
                          }}
                          className="flex items-center gap-3 px-4 py-2 hover:bg-[#802367]/5 transition-colors text-left"
                        >
                          {product.images && product.images[0] && (
                            <imgloading="lazy" src={product.images[0].url}
                              alt={product.name}
                              className="w-8 h-8 object-cover rounded-md"
                            />
                          )}
                          <span className="text-[13px] font-medium text-[#7c5f47] truncate">
                            {product.name}
                          </span>
                        </button>
                      ))}
                    </div>
                  ) : (
                    <div className="px-4 py-4 text-[13px] text-[#7c5f47]/60 italic">
                      No products found
                    </div>
                  )}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <div className="flex items-center gap-3">
            {isAuthenticated ? (
              <Link href="/profile">
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-[41px] h-[41px] bg-[#802367]/10 border-2 border-[#802367]/20 rounded-[13px] shadow-sm flex items-center justify-center text-[#802367] transition-all"
                  title="Profile"
                >
                  <UserIcon className="w-5 h-5" />
                </motion.button>
              </Link>
            ) : (
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setIsAuthModalOpen(true)}
                className="w-[41px] h-[41px] bg-white border-2 border-[#802367]/10 rounded-[13px] shadow-sm flex items-center justify-center text-[#802367] transition-all"
              >
                <UserIcon className="w-5 h-5" />
              </motion.button>
            )}

            {/* Cart */}
            <Link href="/cart">
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="w-[41px] h-[41px] bg-[#802367] rounded-[13px] shadow-sm flex items-center justify-center relative"
              >
                <div className="w-[22px] h-[22px]">
                  <img loading="lazy" src={imgBag5.src} alt="Cart" className="w-full h-full object-contain" />
                </div>
                {cartItemCount > 0 && (
                  <span className="absolute -top-1 -right-1 bg-[#FF3333] text-white text-[10px] font-bold rounded-full w-5 h-5 flex items-center justify-center">
                    {cartItemCount > 9 ? '9+' : cartItemCount}
                  </span>
                )}
              </motion.button>
            </Link>
          </div>
        </div>

        <LoginRegisterModal
          isOpen={isAuthModalOpen}
          onClose={() => setIsAuthModalOpen(false)}
        />
      </div>
    </header>
  );
}
