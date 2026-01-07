"use client";

import Link from "next/link";
import Image from "next/image";

const quickLinks = [
  { name: "Pricing", href: "#pricing" },
  { name: "Resources", href: "#resources" },
  { name: "About us", href: "#about" },
  { name: "FAQ", href: "#faq" },
  { name: "Contact us", href: "#contact" },
];

const socialLinks = [
  { name: "Facebook", href: "#" },
  { name: "Instagram", href: "#" },
  { name: "LinkedIn", href: "#" },
  { name: "Twitter", href: "#" },
  { name: "Youtube", href: "#" },
];

const legalLinks = [
  { name: "Terms of service", href: "/terms-of-service" },
  { name: "Privacy policy", href: "/privacy-policy" },
  { name: "Cookie policy", href: "/cookie-policy" },
];

const productLinks = [
  { name:"Infini8 Voice", icon: "", href: "#" },
  { name:"Infini8 SEO", icon: "", href: "#" },
  { name:"Infini8 Marketer", icon: "", href: "#" },
];

export const Footer = () => {
  return (
    <footer className="relative z-0 bg-[#0d0d12] pt-60 pb-8">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-12">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-3 mb-6 -mt-4">
              <Image
                src="/infini8_logo.png"
                alt="Infini8 AI Logo"
                width={200}
                height={67}
                className="h-16 md:h-24 w-auto"
                loading="lazy"
              />
              <span className="text-white font-semibold text-xl md:text-2xl">Infini8</span>
            </Link>

            <div className="text-gray-400 text-sm space-y-1 mb-6">
              <p> 3rd floor, Landmark: Polar, Bear Icecream Building</p>
              <p>88GB, 27th Main Rd, Parangi Palaya, Sector 2</p>
              <p>HSR Layout, Bengaluru</p>
              <p>Karnataka 560102</p>
            </div>

            <div className="space-y-2">
              <div className="flex gap-8">
                <div>
                  <p className="text-gray-500 text-xs mb-1">Phone number</p>
                  <p className="text-white text-sm">+91 6238260864</p>
                </div>
                <div>
                  <p className="text-gray-500 text-xs mb-1">Email</p>
                  <p className="text-white text-sm">connect@88gb.in</p>
                </div>
              </div>
            </div>
          </div>

          {/* Products */}
          <div>
            <h4 className="text-gray-500 text-sm font-medium mb-4">Products</h4>
            <ul className="space-y-3">
              {productLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="flex items-center space-x-2 text-gray-400 text-sm hover:text-white transition-colors"
                  >
                    <span>{link.icon}</span>
                    <span>{link.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-gray-500 text-sm font-medium mb-4">Quick links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-400 text-sm hover:text-white transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="text-gray-500 text-sm font-medium mb-4">Social</h4>
            <ul className="space-y-3">
              {socialLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-400 text-sm hover:text-white transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-gray-500 text-sm font-medium mb-4">Legal</h4>
            <ul className="space-y-3">
              {legalLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-400 text-sm hover:text-white transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-16 pt-8 border-t border-gray-800 text-center">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} Infini8. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
