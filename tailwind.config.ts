import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        heading: ["var(--font-space-grotesk)", "sans-serif"],
        sans: ["var(--font-inter)", "sans-serif"],
        mono: ["var(--font-jetbrains-mono)", "monospace"],
        display: ["var(--font-space-grotesk)", "sans-serif"],
      },
      colors: {
        border: "rgba(255, 255, 255, 0.08)",
        input: "rgba(255, 255, 255, 0.05)",
        ring: "#00F5FF",
        background: "#030305",
        foreground: "#ffffff",
        primary: {
          DEFAULT: "#00F5FF",
          foreground: "#003739",
          dim: "#008891",
        },
        secondary: {
          DEFAULT: "#6366f1",
          foreground: "#ffffff",
          dim: "#4f46e5",
        },
        tertiary: {
          DEFAULT: "#10b981",
          foreground: "#ffffff",
          dim: "#059669",
        },
        surface: {
          DEFAULT: "#131317",
          bright: "#39393d",
          variant: "#26252b",
          dim: "#0e0e11",
          container: {
            lowest: "#0e0e11",
            low: "#1b1b1f",
            DEFAULT: "#201f23",
            high: "#2a292e",
            highest: "#353438",
          },
        },
      },
      borderRadius: {
        lg: "1rem",
        md: "0.75rem",
        sm: "0.5rem",
        "32": "2rem",
      },
      boxShadow: {
        'glow-cyan': '0 0 40px rgba(0, 245, 255, 0.15)',
        'btn-glow': '0 0 20px rgba(0, 245, 255, 0.3)',
      },
      animation: {
        'slow-spin': 'spin 12s linear infinite',
        'pulse-fast': 'pulse 1.5s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
    },
  },
  plugins: [],
};
export default config;
