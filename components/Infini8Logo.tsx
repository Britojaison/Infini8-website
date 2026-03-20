"use client";

import { motion } from "framer-motion";

export const Infini8Logo = ({ className = "w-8 h-8", glow = true }) => {
  const transition = {
    duration: 3,
    repeat: Infinity,
    ease: "easeInOut",
  };

  return (
    <div className={`relative flex items-center justify-center ${className}`}>
      {/* Outer Glow Area */}
      {glow && (
        <motion.div
          animate={{ 
            opacity: [0.2, 0.4, 0.2],
            scale: [1, 1.2, 1] 
          }}
          transition={{ 
            duration: 6, 
            repeat: Infinity, 
            ease: "easeInOut" 
          }}
          className="absolute inset-[-60%] bg-primary/20 blur-2xl rounded-full -z-10"
        />
      )}

      <svg
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full drop-shadow-glow-cyan"
      >
        <defs>
          <linearGradient id="logoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#00F5FF" stopOpacity="0.8" />
            <stop offset="50%" stopColor="#00DCE5" stopOpacity="1" />
            <stop offset="100%" stopColor="#008891" stopOpacity="0.7" />
          </linearGradient>
          <filter id="glow">
            <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
            <feMerge>
                <feMergeNode in="coloredBlur"/>
                <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
        </defs>

        {/* The Möbius Infini8 Symbol */}
        {/* Layer 1: Ambient Shadow Path */}
        <motion.path
          d="M50 50 C30 50 15 75 35 85 C55 95 70 75 50 50 C30 25 15 5 35 15 C55 25 70 50 50 50"
          stroke="rgba(255,255,255,0.05)"
          strokeWidth="10"
          strokeLinecap="round"
        />

        {/* Layer 2: Core Geometric Path (Base) */}
        <motion.path
          d="M50 50 C70 50 85 25 65 15 C45 5 30 25 50 50 C70 75 85 95 65 85 C45 75 30 50 50 50"
          stroke="#00F5FF"
          strokeWidth="6"
          strokeLinecap="round"
          strokeOpacity="0.3"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 2, ease: "easeInOut" }}
        />

        {/* Layer 3: The "Flow" - Animating Möbius Loop */}
        <motion.path
          d="M50 50 C30 50 15 75 35 85 C55 95 70 75 50 50 C30 25 15 5 35 15 C55 25 70 50 50 50 Z"
          stroke="url(#logoGradient)"
          strokeWidth="6"
          strokeLinecap="round"
          filter="url(#glow)"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ 
            pathLength: [0, 1, 1],
            opacity: [0, 1, 0.8],
            strokeDashoffset: [0, 0, -200]
          }}
          transition={{ 
            pathLength: { duration: 2, ease: "easeInOut" },
            opacity: { duration: 2 },
            strokeDashoffset: { duration: 10, repeat: Infinity, ease: "linear" }
          }}
          strokeDasharray="100 200"
        />

        {/* Central Intelligence Core */}
        <motion.circle
          cx="50"
          cy="50"
          r="4"
          fill="white"
          className="shadow-glow-white"
          animate={{ scale: [0.8, 1.2, 0.8] }}
          transition={{ duration: 3, repeat: Infinity }}
        />
      </svg>
    </div>
  );
};
