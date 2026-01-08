"use client";

import { useState } from "react";

const problems = [
  "Missed leads and delayed follow-ups",
  "Content created without clear demand signals",
  "Uncertainty around what is actually working",
  "Too many disconnected tools and workflows",
  "Teams reacting late instead of acting early",
];

const solutions = [
  {
    title: "Chasing missed leads",
    description: "Every inbound interaction is captured and acted on automatically.",
  },
  {
    title: "Writing content blindly",
    description: "Content is created based on real-time search and intent data.",
  },
  {
    title: "Guessing what's working",
    description: "Decisions are guided by continuous performance signals.",
  },
  {
    title: "Switching between disconnected tools",
    description: "Voice, content, automation, and insights work as one system.",
  },
  {
    title: "Reacting instead of acting",
    description: "Systems anticipate change and respond before impact is felt.",
  },
];

export const WhatYouDontHaveToDo = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section className="relative z-10 py-32 px-6 md:px-12 lg:px-24 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            Less Manual. Less Guesswork. Less Chaos.
          </h2>
          <p className="text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Infini8 removes the friction that slows modern teams down.
          </p>
        </div>

        {/* Content Grid */}
        <div className="max-w-6xl mx-auto">
          {/* Labels Row - Aligned on same line */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 mb-6">
            <div>
              <p className="text-sm md:text-base text-gray-500 italic">
                These are the pain signals teams live with daily:
              </p>
            </div>
            <div>
              <p className="text-sm md:text-base text-[#FF9FFC] font-medium">
                These are what Infini8 eliminates:
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-start">
            {/* Left Side - Problem Statements (Muted/Secondary) */}
            <div className="space-y-6">
              {problems.map((problem, index) => (
                <div
                  key={index}
                  className="relative"
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                >
                  <div className="flex items-start">
                    <div className="flex-1 relative">
                      <p className="text-lg md:text-xl text-gray-500/50 leading-relaxed">
                        {problem}
                      </p>
                      {/* Fade overlay for muted effect */}
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-gray-900/20 to-transparent pointer-events-none" />
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Right Side - Highlighted Resolution States */}
            <div className="space-y-6">
              {solutions.map((solution, index) => {
                const isHovered = hoveredIndex === index;
                return (
                  <div
                    key={index}
                    className="relative transition-all duration-300"
                    style={{
                      transform: isHovered ? "translateX(-10px)" : "translateX(0)",
                    }}
                    onMouseEnter={() => setHoveredIndex(index)}
                    onMouseLeave={() => setHoveredIndex(null)}
                  >
                    <div className="relative p-5 md:p-6 rounded-xl bg-gradient-to-r from-purple-900/30 to-pink-900/30 backdrop-blur-md border border-purple-500/40 shadow-lg shadow-purple-500/20 transition-all duration-300">
                      {/* Glow effect on hover */}
                      <div
                        className={`absolute inset-0 rounded-xl bg-gradient-to-r from-purple-500/20 to-pink-500/20 transition-opacity duration-300 ${
                          isHovered ? "opacity-100" : "opacity-0"
                        }`}
                      />
                      
                      {/* Content */}
                      <div className="relative z-10">
                        <h3 className="text-lg md:text-xl text-white font-semibold mb-2">
                          {solution.title}
                        </h3>
                        <p className="text-sm md:text-base text-gray-300 leading-relaxed">
                          {solution.description}
                        </p>
                      </div>
                      
                      {/* Glowing line at bottom */}
                      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#FF9FFC] to-transparent opacity-70" />
                      
                      {/* Left glow accent */}
                      <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-transparent via-[#FF9FFC] to-transparent opacity-50" />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Closing Message */}
          <div className="mt-20 text-center">
            <p className="text-2xl md:text-3xl lg:text-4xl font-bold text-white">
              Infini8 replaces reactive work with intelligent systems that stay ahead.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

