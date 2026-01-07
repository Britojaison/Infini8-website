"use client";

import { useState } from "react";
import PixelTransition from "./PixelTransition";

const moments = [
  {
    id: 1,
    product: "Infini8 Voice",
    text: "A lead calls after office hours and still gets qualified instantly.",
  },
  {
    id: 2,
    product: "Infini8 Voice",
    text: "High intent conversations trigger follow ups automatically.",
  },
  {
    id: 3,
    product: "Infini8 SEO",
    text: "A competitor ranks for a new keyword and your content goes live before ground is lost.",
  },
  {
    id: 4,
    product: "Infini8 SEO",
    text: "Ranking gaps are identified and optimized articles are published at scale.",
  },
  {
    id: 5,
    product: "Infini8 Marketer",
    text: "Campaign performance dips and optimization decisions are made in real time.",
  },
  {
    id: 6,
    product: "Infini8 Marketer",
    text: "A marketer gets stuck and expert guidance appears exactly when needed.",
  },
];

export const Moments = () => {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  return (
    <section className="relative z-10 py-32 px-6 md:px-12 lg:px-24 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            Built for the Moments That Matter
          </h2>
          <p className="text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Infini8 steps in exactly when speed, clarity, and decisions matter most.
          </p>
        </div>

        {/* Cards Container - Organized by Product */}
        <div className="relative">
          <div className="max-w-7xl mx-auto">
            {/* Mobile: Grid Layout */}
            <div className="md:hidden grid grid-cols-1 gap-6">
              {moments.map((moment, index) => {
                const isHovered = hoveredCard === index;
                return (
                  <div
                    key={moment.id}
                    className="relative"
                    onMouseEnter={(e) => {
                      e.stopPropagation();
                      setHoveredCard(index);
                    }}
                    onMouseLeave={(e) => {
                      e.stopPropagation();
                      setHoveredCard(null);
                    }}
                  >
                    <div
                      className={`
                        relative rounded-2xl overflow-hidden
                        bg-gradient-to-br from-purple-900/20 to-pink-900/20
                        backdrop-blur-md border border-purple-500/30
                        cursor-pointer
                        ${isHovered ? "shadow-2xl shadow-purple-500/50" : "shadow-lg shadow-purple-500/20"}
                      `}
                      style={{
                        boxShadow: isHovered
                          ? "0 20px 60px rgba(255, 159, 252, 0.3), 0 0 40px rgba(255, 159, 252, 0.2)"
                          : "0 10px 30px rgba(255, 159, 252, 0.1)",
                        transition: "all 0.5s cubic-bezier(0.4, 0, 0.2, 1)",
                        transform: isHovered ? "translateY(-10px) scale(1.02)" : "translateY(0) scale(1)",
                        minHeight: "140px",
                      }}
                    >
                      <PixelTransition
                        firstContent={
                          <div className="relative z-10 h-full flex flex-col justify-center p-6">
                            <div className="mb-3">
                              <span className="text-sm font-semibold text-[#FF9FFC] uppercase tracking-wide">
                                {moment.product}
                              </span>
                            </div>
                            <p className="text-base text-white leading-relaxed">
                              {moment.text}
                            </p>
                          </div>
                        }
                        secondContent={
                          <div className="relative z-10 h-full flex flex-col justify-center items-center p-6 bg-gradient-to-br from-purple-900/30 to-pink-900/30">
                            <span className="text-xl md:text-2xl font-bold text-[#FF9FFC] uppercase tracking-wide text-center">
                              {moment.product}
                            </span>
                          </div>
                        }
                        gridSize={25}
                        pixelColor="#FF9FFC"
                        animationStepDuration={0.01}
                        trigger={isHovered}
                        className="h-full"
                        style={{ height: "100%", minHeight: "140px" }}
                      />
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Desktop: Clean Grid Layout - No Overlapping */}
            <div className="hidden md:block">
              <div className="grid grid-cols-3 gap-8 max-w-6xl mx-auto">
                {/* Left Column - Infini8 Voice */}
                <div className="flex flex-col gap-6">
                  {moments
                    .filter((m) => m.product === "Infini8 Voice")
                    .map((moment) => {
                      const index = moments.findIndex((m) => m.id === moment.id);
                      const isHovered = hoveredCard === index;
                      return (
                        <div
                          key={moment.id}
                          className="relative"
                          onMouseEnter={(e) => {
                            e.stopPropagation();
                            setHoveredCard(index);
                          }}
                          onMouseLeave={(e) => {
                            e.stopPropagation();
                            setHoveredCard(null);
                          }}
                          style={{
                            transform: isHovered
                              ? "translateY(-10px) rotate(0deg) scale(1.03)"
                              : "translateY(0) rotate(-2deg) scale(1)",
                            transition: "all 0.5s cubic-bezier(0.4, 0, 0.2, 1)",
                          }}
                        >
                          <div
                            className={`
                              relative rounded-2xl overflow-hidden
                              bg-gradient-to-br from-purple-900/20 to-pink-900/20
                              backdrop-blur-md border border-purple-500/30
                              cursor-pointer
                              ${isHovered ? "shadow-2xl shadow-purple-500/50" : "shadow-lg shadow-purple-500/20"}
                            `}
                            style={{
                              boxShadow: isHovered
                                ? "0 20px 60px rgba(255, 159, 252, 0.3), 0 0 40px rgba(255, 159, 252, 0.2)"
                                : "0 10px 30px rgba(255, 159, 252, 0.1)",
                              transition: "all 0.5s cubic-bezier(0.4, 0, 0.2, 1)",
                              minHeight: "160px",
                            }}
                          >
                            {/* Glow effect on hover */}
                            <div
                              className={`
                                absolute inset-0 rounded-2xl
                                transition-opacity duration-500 pointer-events-none
                                ${isHovered ? "opacity-100" : "opacity-0"}
                              `}
                              style={{
                                background: isHovered
                                  ? "radial-gradient(circle at center, rgba(255, 159, 252, 0.2) 0%, transparent 70%)"
                                  : "transparent",
                                zIndex: 1,
                              }}
                            />
                            {isHovered && (
                              <div
                                className="absolute inset-0 rounded-2xl border-2 border-purple-400/50 animate-pulse pointer-events-none"
                                style={{
                                  animation: "pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite",
                                  zIndex: 1,
                                }}
                              />
                            )}
                            <PixelTransition
                              firstContent={
                                <div className="relative z-10 h-full flex flex-col justify-center p-4 md:p-5">
                                  <div className="mb-3">
                                    <span className="text-xs md:text-sm font-semibold text-[#FF9FFC] uppercase tracking-wide">
                                      {moment.product}
                                    </span>
                                  </div>
                                  <p className="text-sm md:text-base text-white leading-relaxed">
                                    {moment.text}
                                  </p>
                                </div>
                              }
                              secondContent={
                                <div className="relative z-10 h-full flex flex-col justify-center items-center p-4 md:p-5 bg-gradient-to-br from-purple-900/30 to-pink-900/30">
                                  <span className="text-lg md:text-xl font-bold text-[#FF9FFC] uppercase tracking-wide text-center">
                                    {moment.product}
                                  </span>
                                </div>
                              }
                              gridSize={25}
                              pixelColor="#FF9FFC"
                              animationStepDuration={0.01}
                              trigger={isHovered}
                              className="h-full"
                              style={{ height: "100%", minHeight: "160px" }}
                            />
                          </div>
                        </div>
                      );
                    })}
                </div>

                {/* Middle Column - Infini8 Marketer (Centered) */}
                <div className="flex flex-col gap-6">
                  {moments
                    .filter((m) => m.product === "Infini8 Marketer")
                    .map((moment) => {
                      const index = moments.findIndex((m) => m.id === moment.id);
                      const isHovered = hoveredCard === index;
                      return (
                        <div
                          key={moment.id}
                          className="relative"
                          onMouseEnter={(e) => {
                            e.stopPropagation();
                            setHoveredCard(index);
                          }}
                          onMouseLeave={(e) => {
                            e.stopPropagation();
                            setHoveredCard(null);
                          }}
                          style={{
                            transform: isHovered
                              ? "translateY(-10px) rotate(0deg) scale(1.03)"
                              : "translateY(0) rotate(0deg) scale(1)",
                            transition: "all 0.5s cubic-bezier(0.4, 0, 0.2, 1)",
                          }}
                        >
                          <div
                            className={`
                              relative rounded-2xl overflow-hidden
                              bg-gradient-to-br from-purple-900/20 to-pink-900/20
                              backdrop-blur-md border border-purple-500/30
                              cursor-pointer
                              ${isHovered ? "shadow-2xl shadow-purple-500/50" : "shadow-lg shadow-purple-500/20"}
                            `}
                            style={{
                              boxShadow: isHovered
                                ? "0 20px 60px rgba(255, 159, 252, 0.3), 0 0 40px rgba(255, 159, 252, 0.2)"
                                : "0 10px 30px rgba(255, 159, 252, 0.1)",
                              transition: "all 0.5s cubic-bezier(0.4, 0, 0.2, 1)",
                              minHeight: "160px",
                            }}
                          >
                            {/* Glow effect on hover */}
                            <div
                              className={`
                                absolute inset-0 rounded-2xl
                                transition-opacity duration-500 pointer-events-none
                                ${isHovered ? "opacity-100" : "opacity-0"}
                              `}
                              style={{
                                background: isHovered
                                  ? "radial-gradient(circle at center, rgba(255, 159, 252, 0.2) 0%, transparent 70%)"
                                  : "transparent",
                                zIndex: 1,
                              }}
                            />
                            {isHovered && (
                              <div
                                className="absolute inset-0 rounded-2xl border-2 border-purple-400/50 animate-pulse pointer-events-none"
                                style={{
                                  animation: "pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite",
                                  zIndex: 1,
                                }}
                              />
                            )}
                            <PixelTransition
                              firstContent={
                                <div className="relative z-10 h-full flex flex-col justify-center p-4 md:p-5">
                                  <div className="mb-3">
                                    <span className="text-xs md:text-sm font-semibold text-[#FF9FFC] uppercase tracking-wide">
                                      {moment.product}
                                    </span>
                                  </div>
                                  <p className="text-sm md:text-base text-white leading-relaxed">
                                    {moment.text}
                                  </p>
                                </div>
                              }
                              secondContent={
                                <div className="relative z-10 h-full flex flex-col justify-center items-center p-4 md:p-5 bg-gradient-to-br from-purple-900/30 to-pink-900/30">
                                  <span className="text-lg md:text-xl font-bold text-[#FF9FFC] uppercase tracking-wide text-center">
                                    {moment.product}
                                  </span>
                                </div>
                              }
                              gridSize={25}
                              pixelColor="#FF9FFC"
                              animationStepDuration={0.01}
                              trigger={isHovered}
                              className="h-full"
                              style={{ height: "100%", minHeight: "160px" }}
                            />
                          </div>
                        </div>
                      );
                    })}
                </div>

                {/* Right Column - Infini8 SEO */}
                <div className="flex flex-col gap-6">
                  {moments
                    .filter((m) => m.product === "Infini8 SEO")
                    .map((moment) => {
                      const index = moments.findIndex((m) => m.id === moment.id);
                      const isHovered = hoveredCard === index;
                      return (
                        <div
                          key={moment.id}
                          className="relative"
                          onMouseEnter={(e) => {
                            e.stopPropagation();
                            setHoveredCard(index);
                          }}
                          onMouseLeave={(e) => {
                            e.stopPropagation();
                            setHoveredCard(null);
                          }}
                          style={{
                            transform: isHovered
                              ? "translateY(-10px) rotate(0deg) scale(1.03)"
                              : "translateY(0) rotate(2deg) scale(1)",
                            transition: "all 0.5s cubic-bezier(0.4, 0, 0.2, 1)",
                          }}
                        >
                          <div
                            className={`
                              relative rounded-2xl overflow-hidden
                              bg-gradient-to-br from-purple-900/20 to-pink-900/20
                              backdrop-blur-md border border-purple-500/30
                              cursor-pointer
                              ${isHovered ? "shadow-2xl shadow-purple-500/50" : "shadow-lg shadow-purple-500/20"}
                            `}
                            style={{
                              boxShadow: isHovered
                                ? "0 20px 60px rgba(255, 159, 252, 0.3), 0 0 40px rgba(255, 159, 252, 0.2)"
                                : "0 10px 30px rgba(255, 159, 252, 0.1)",
                              transition: "all 0.5s cubic-bezier(0.4, 0, 0.2, 1)",
                              minHeight: "160px",
                            }}
                          >
                            {/* Glow effect on hover */}
                            <div
                              className={`
                                absolute inset-0 rounded-2xl
                                transition-opacity duration-500 pointer-events-none
                                ${isHovered ? "opacity-100" : "opacity-0"}
                              `}
                              style={{
                                background: isHovered
                                  ? "radial-gradient(circle at center, rgba(255, 159, 252, 0.2) 0%, transparent 70%)"
                                  : "transparent",
                                zIndex: 1,
                              }}
                            />
                            {isHovered && (
                              <div
                                className="absolute inset-0 rounded-2xl border-2 border-purple-400/50 animate-pulse pointer-events-none"
                                style={{
                                  animation: "pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite",
                                  zIndex: 1,
                                }}
                              />
                            )}
                            <PixelTransition
                              firstContent={
                                <div className="relative z-10 h-full flex flex-col justify-center p-4 md:p-5">
                                  <div className="mb-3">
                                    <span className="text-xs md:text-sm font-semibold text-[#FF9FFC] uppercase tracking-wide">
                                      {moment.product}
                                    </span>
                                  </div>
                                  <p className="text-sm md:text-base text-white leading-relaxed">
                                    {moment.text}
                                  </p>
                                </div>
                              }
                              secondContent={
                                <div className="relative z-10 h-full flex flex-col justify-center items-center p-4 md:p-5 bg-gradient-to-br from-purple-900/30 to-pink-900/30">
                                  <span className="text-lg md:text-xl font-bold text-[#FF9FFC] uppercase tracking-wide text-center">
                                    {moment.product}
                                  </span>
                                </div>
                              }
                              gridSize={25}
                              pixelColor="#FF9FFC"
                              animationStepDuration={0.01}
                              trigger={isHovered}
                              className="h-full"
                              style={{ height: "100%", minHeight: "160px" }}
                            />
                          </div>
                        </div>
                      );
                    })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

