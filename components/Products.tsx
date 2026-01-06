"use client";

import { useState } from "react";
import Image from "next/image";
import { LiquidGradient } from "./LiquidGradient";

const products = [
  {
    id: 1,
    title: "Infini8 Voice",
    description: "Custom AI calling agents that capture intent and trigger real-time automations.",
    image: "/Infini8_Voice.jpg",
  },
  {
    id: 2,
    title: "Infini8 SEO",
    description: "AI-powered research and content generation to dominate search and answer engines.",
    image: "/infini8_SEO.png",
  },
  {
    id: 3,
    title: "Infini8 Marketer",
    description: "An intelligent AI mentor for marketing strategy and campaign execution.",
    image: "/Infini8_performance.png",
  },
];

export const Products = () => {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  return (
    <section className="relative z-10 py-20 px-6 md:px-12 lg:px-24 overflow-hidden">
      {/* Liquid Gradient Background - behind cards */}
      <div className="absolute inset-0 -z-10">
        <LiquidGradient colors={["#5227FF", "#FF9FFC", "#B19EEF"]} />
      </div>
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Products
          </h2>
        </div>

        {/* Cards Grid - Overlapping Layout */}
        <div className="flex justify-center items-center relative h-[500px] w-full">
          <div className="relative w-[900px] h-full flex items-center justify-center">
            {products.map((product, index) => {
              const baseRotation = index === 0 ? -12 : index === 1 ? 0 : 12;
              const baseLeft = index === 0 ? "10%" : index === 1 ? "35%" : "60%";
              const isHovered = hoveredCard === index;

              return (
                <div
                  key={product.id}
                  className="absolute transition-all duration-500 ease-out"
                  style={{
                    left: baseLeft,
                    transform: isHovered
                      ? "rotate(0deg) scale(1.1) translateY(-20px)"
                      : `rotate(${baseRotation}deg) scale(1)`,
                    zIndex: isHovered ? 50 : index === 1 ? 20 : 10,
                  }}
                  onMouseEnter={() => setHoveredCard(index)}
                  onMouseLeave={() => setHoveredCard(null)}
                >
                  <div className="w-72 h-96 bg-gradient-to-br from-purple-900/20 to-pink-900/20 backdrop-blur-sm rounded-3xl overflow-hidden border border-purple-500/30 shadow-2xl shadow-purple-500/20 cursor-pointer relative">
                    <Image
                      src={product.image}
                      alt={product.title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 288px"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/40 to-transparent" />
                    <div className="relative w-full h-full p-6 flex flex-col justify-start z-10">
                      <h3 className="text-2xl font-bold text-white mb-2">
                        {product.title}
                      </h3>
                      <p className="text-gray-400">{product.description}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
