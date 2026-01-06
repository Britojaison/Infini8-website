"use client";

import { useState } from "react";

export const Contact = () => {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const res = await fetch("https://formspree.io/f/mkoglewg", {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      });

      if (res.ok) {
        setStatus("success");
        form.reset();
        // Hide message after 5 seconds
        setTimeout(() => {
          setStatus("idle");
        }, 5000);
      } else {
        setStatus("error");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setStatus("error");
    }
  }

  return (
    <section className="relative z-10 pt-24 px-6 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto relative">
        {/* Contact Card - Overlapping Footer */}
        <div className="bg-gradient-to-br from-[#1a1a2e] to-[#16162a] rounded-3xl p-12 md:p-16 relative overflow-hidden mb-[-120px] z-20">
          {/* Globe/World Map Decoration */}
          <div className="absolute right-0 top-0 w-1/2 h-full opacity-30 pointer-events-none">
            <div className="absolute inset-0 bg-gradient-to-l from-transparent to-[#1a1a2e]" />
            <svg
              viewBox="0 0 400 400"
              className="w-full h-full"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle
                cx="200"
                cy="200"
                r="150"
                stroke="#ffffff"
                strokeWidth="0.5"
                opacity="0.3"
              />
              <circle
                cx="200"
                cy="200"
                r="120"
                stroke="#ffffff"
                strokeWidth="0.5"
                opacity="0.2"
              />
              <circle
                cx="200"
                cy="200"
                r="90"
                stroke="#ffffff"
                strokeWidth="0.5"
                opacity="0.15"
              />
              <ellipse
                cx="200"
                cy="200"
                rx="150"
                ry="60"
                stroke="#ffffff"
                strokeWidth="0.5"
                opacity="0.2"
              />
              <ellipse
                cx="200"
                cy="200"
                rx="150"
                ry="60"
                stroke="#ffffff"
                strokeWidth="0.5"
                opacity="0.2"
                transform="rotate(60 200 200)"
              />
              <ellipse
                cx="200"
                cy="200"
                rx="150"
                ry="60"
                stroke="#ffffff"
                strokeWidth="0.5"
                opacity="0.2"
                transform="rotate(120 200 200)"
              />
              {[...Array(50)].map((_, i) => (
                <circle
                  key={i}
                  cx={200 + Math.cos(i * 0.5) * (50 + Math.random() * 100)}
                  cy={200 + Math.sin(i * 0.7) * (30 + Math.random() * 80)}
                  r="2"
                  fill="#ffffff"
                  opacity={0.3 + Math.random() * 0.4}
                />
              ))}
            </svg>
          </div>

          {/* Content */}
          <div className="relative z-10 max-w-xl">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Talk to Us
            </h2>
            <p className="text-gray-400 text-lg mb-8">
              Get in touch with us and let&apos;s discuss how we can help your business grow.
            </p>

            {/* Email Form */}
            <form onSubmit={handleSubmit} className="flex gap-4 flex-wrap">
              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                className="flex-1 min-w-[250px] px-6 py-4 bg-[#0a0a0f] border border-gray-700 rounded-full text-white placeholder-gray-500 focus:outline-none focus:border-purple-500 transition-colors"
                required
                disabled={status === "loading"}
              />
              <input type="hidden" name="source" value="Homepage Connect Widget" />
              <button
                type="submit"
                disabled={status === "loading"}
                className="px-8 py-4 bg-white text-black font-semibold rounded-full hover:bg-gray-200 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {status === "loading" ? "Sending..." : "Connect with us"}
              </button>
            </form>

            {/* Success Message */}
            {status === "success" && (
              <div className="mt-4 p-4 bg-green-500/20 border border-green-500/50 rounded-lg text-green-400">
                <p className="text-sm">Thanks, we will contact you shortly.</p>
              </div>
            )}

            {/* Error Message */}
            {status === "error" && (
              <div className="mt-4 p-4 bg-red-500/20 border border-red-500/50 rounded-lg text-red-400">
                <p className="text-sm">Something went wrong. Please try again.</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
