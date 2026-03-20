"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Infini8Logo } from "./Infini8Logo";


const navLinks = [
  { name: "Protocol", href: "#protocol" },
  { name: "Security", href: "#security" },
  { name: "Nexus", href: "#nexus" },
];

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 w-full transition-all duration-500 border-b border-white/5 ${
        isScrolled ? "py-4 bg-[#0e0e11]/80 backdrop-blur-3xl" : "py-6 bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 group">
          <Infini8Logo className="w-8 h-8" />
          <div className="text-xl font-bold tracking-tight text-white font-display group-hover:text-primary deliterate-transition">
            Infini8
          </div>
        </Link>


        {/* Center Navigation */}
        <div className="hidden md:flex items-center gap-12">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="font-sans text-[13px] font-medium tracking-wide text-white/50 hover:text-primary deliterate-transition uppercase"
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Right side - CTA Button */}
        <div className="flex gap-6 items-center">
            <button className="hidden sm:block bg-primary text-primary-foreground px-8 py-2.5 rounded-lg font-bold shadow-btn-glow active:scale-95 deliterate-transition text-xs">
                Launch App
            </button>
        </div>
      </div>
    </nav>
  );
};
