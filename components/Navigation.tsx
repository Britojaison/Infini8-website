"use client";

import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import { ChevronDown, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";

const products = [
  { name: "Infini8 Voice", icon: "🎤", href: "#" },
];

export function Navigation() {
  const [productsOpen, setProductsOpen] = React.useState(false);

  return (
    <nav className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60 relative">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-2">
          <Image
            src="/infini8_logo.png"
            alt="Infini8 AI Logo"
            width={180}
            height={60}
            className="h-14 md:h-16 w-auto"
            priority
          />
        </Link>

        {/* Navigation Links */}
        <div className="hidden md:flex items-center space-x-6">
          <div className="relative">
            <button
              onMouseEnter={() => setProductsOpen(true)}
              onMouseLeave={() => setProductsOpen(false)}
              className="flex items-center space-x-1 text-gray-700 hover:text-gray-900 transition-colors"
            >
              <span>Products</span>
              <ChevronDown className="h-4 w-4" />
            </button>
            {productsOpen && (
              <div
                onMouseEnter={() => setProductsOpen(true)}
                onMouseLeave={() => setProductsOpen(false)}
                className="absolute top-full left-0 mt-2 w-[250px] bg-gray-50 rounded-lg shadow-lg border border-gray-200 p-4"
              >
                {products.map((product) => (
                  <Link
                    key={product.name}
                    href={product.href}
                    className="flex items-center space-x-3 p-3 rounded-md hover:bg-white transition-colors"
                  >
                    <span className="text-2xl">{product.icon}</span>
                    <span className="text-sm font-medium text-gray-900">
                      {product.name}
                    </span>
                  </Link>
                ))}
              </div>
            )}
          </div>

          <button className="flex items-center space-x-1 text-gray-700 hover:text-gray-900 transition-colors">
            <span>Pricing</span>
            <ChevronDown className="h-4 w-4" />
          </button>

          <button className="flex items-center space-x-1 text-gray-700 hover:text-gray-900 transition-colors">
            <span>Partners</span>
            <ChevronDown className="h-4 w-4" />
          </button>

          <button className="flex items-center space-x-1 text-gray-700 hover:text-gray-900 transition-colors">
            <span>Resources</span>
            <ChevronDown className="h-4 w-4" />
          </button>
        </div>

        {/* Action Buttons */}
        <div className="flex items-center space-x-4">
          <Button
            variant="default"
            className="bg-blue-600 hover:bg-blue-700 text-white"
          >
            Free Sign up
          </Button>
          <Button variant="outline" className="border-gray-300">
            Login
          </Button>
          <div className="hidden md:flex items-center space-x-1 text-gray-700">
            <Globe className="h-4 w-4" />
            <span className="text-sm">EN</span>
          </div>
        </div>
      </div>
    </nav>
  );
}

