"use client";

import Image from "next/image";

export const Hero = () => {
  return (
    <section className="relative z-10 min-h-screen flex items-center pt-20">
      <div className="w-full flex items-center">
        {/* Left Content - with padding */}
        <div className="flex-1 pl-6 md:pl-12 lg:pl-24 pr-12">
          <div className="max-w-xl">
            {/* Badge */}
            <div className="inline-block mb-6">
              <span className="bg-[#2a2a35] text-[#FF9FFC] px-4 py-2 rounded-full text-sm font-medium">
                FUTURE OF AI
              </span>
            </div>

            {/* Main Heading */}
            <h1 className="text-5xl md:text-6xl font-bold text-white leading-tight mb-6">
              Shaping Tomorrow's Growth, Today with Infini8.
            </h1>

            {/* Subheading */}
            <p className="text-gray-400 text-lg mb-8 leading-relaxed">
              Harness the power of AI to fuel your business success and stay ahead of the curve.
            </p>

            {/* CTA Button */}
            <button className="bg-white text-black px-8 py-3 rounded-full text-base font-semibold hover:bg-gray-200 transition-colors flex items-center gap-2">
              Get Started
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>

        {/* Right Image - No padding/margin on right, flush to edge */}
        <div className="absolute right-0 bottom-0 w-1/2 h-[82vh]">
          <div className="relative w-full h-full overflow-hidden shadow-2xl shadow-purple-500/20">
            <Image
              src="/hero_dashboard.jpeg"
              alt="Infini8 Dashboard"
              fill
              className="object-cover object-left-top"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
};
