"use client";

import { motion } from "framer-motion";
import { Phone, Calendar, ChevronDown } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const clients = [
  "JLL",
  "Paytm Money",
  "Chaatpot",
  "Google",
  "ELDA HEALTH",
  "itilite",
  "Black Tulip Flowers",
];

export default function Infini8VoicePage() {
  return (
    <main className="min-h-screen bg-gray-900 text-white">
      {/* Custom Navigation for Infini8 Voice */}
      <nav className="sticky top-0 z-50 w-full border-b border-gray-800 bg-gray-900/95 backdrop-blur">
        <div className="container mx-auto flex h-16 items-center justify-between px-4">
          <Link href="/" className="flex items-center space-x-2">
            <div className="flex items-center justify-center w-8 h-8 rounded bg-blue-600">
              <span className="text-lg">🎤</span>
            </div>
            <span className="text-xl font-bold text-white">Infini8 Voice</span>
          </Link>

          <div className="hidden md:flex items-center space-x-6">
            <Link href="#" className="text-gray-300 hover:text-white transition-colors">
              Benefits
            </Link>
            <Link href="#" className="text-gray-300 hover:text-white transition-colors">
              Customization
            </Link>
            <Link href="#" className="text-gray-300 hover:text-white transition-colors">
              How It Works
            </Link>
            <button className="flex items-center space-x-1 text-gray-300 hover:text-white transition-colors">
              <span>Case Studies</span>
              <ChevronDown className="h-4 w-4" />
            </button>
          </div>

          <div className="flex items-center space-x-4">
            <Button
              size="sm"
              className="bg-blue-600 hover:bg-blue-700 text-white flex items-center space-x-2"
            >
              <Phone className="h-4 w-4" />
              <span>Talk to Sales</span>
            </Button>
            <Button
              size="sm"
              className="bg-blue-600 hover:bg-blue-700 text-white flex items-center space-x-2"
            >
              <Calendar className="h-4 w-4" />
              <span>Book Demo</span>
            </Button>
          </div>
        </div>
      </nav>

      <div className="relative min-h-screen">
        {/* Background with waveform effect */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900"></div>
          <div className="absolute inset-0 opacity-30">
            {Array.from({ length: 20 }).map((_, i) => (
              <div
                key={i}
                className="absolute left-0 top-0 h-full w-px bg-blue-500"
                style={{
                  left: `${(i + 1) * 5}%`,
                  animation: `wave ${2 + Math.random() * 2}s ease-in-out infinite`,
                  animationDelay: `${Math.random() * 2}s`,
                }}
              />
            ))}
          </div>
        </div>

        <div className="relative container mx-auto px-4 py-12 lg:py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
            {/* Left Side - Headline */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
                Voice AI that treats every call like first-class service.
              </h1>
            </motion.div>

            {/* Right Side - Call to Action */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-6"
            >
              <div className="space-y-4">
                <p className="text-xl font-semibold">Don&apos;t believe us?</p>
                <p className="text-lg text-gray-300">
                  Have Infini8 Voice give you a call.
                </p>

                <div className="space-y-4">
                  <input
                    type="tel"
                    placeholder="Your Phone Number"
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                  <Button
                    size="lg"
                    className="w-full bg-white text-blue-600 hover:bg-gray-100 font-semibold py-6 text-base"
                  >
                    Let&apos;s Talk
                  </Button>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Client Logos */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="mt-20 pt-12 border-t border-gray-800"
          >
            <div className="flex flex-wrap justify-center items-center gap-8 lg:gap-12">
              {clients.map((client, index) => (
                <motion.div
                  key={client}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.5 + index * 0.1 }}
                  className="text-gray-400 hover:text-white transition-colors text-lg font-semibold"
                >
                  {client}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      <style jsx>{`
        @keyframes wave {
          0%,
          100% {
            transform: scaleY(0.3);
            opacity: 0.3;
          }
          50% {
            transform: scaleY(1);
            opacity: 1;
          }
        }
      `}</style>
    </main>
  );
}

