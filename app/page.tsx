import dynamic from "next/dynamic";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";

// Lazy load components below the fold
const TrustedBy = dynamic(
  () => import("@/components/TrustedBy").then((mod) => ({ default: mod.TrustedBy })),
  {
    loading: () => (
      <section className="py-20 px-6 md:px-12 lg:px-24">
        <div className="h-32 bg-[#0a0a0f]" />
      </section>
    ),
  }
);

const Products = dynamic(
  () => import("@/components/Products").then((mod) => ({ default: mod.Products })),
  {
    loading: () => (
      <section className="relative z-10 py-20 px-6 md:px-12 lg:px-24">
        <div className="h-96 bg-[#0a0a0f]" />
      </section>
    ),
  }
);

const Moments = dynamic(
  () => import("@/components/Moments").then((mod) => ({ default: mod.Moments })),
  {
    loading: () => (
      <section className="relative z-10 py-32 px-6 md:px-12 lg:px-24">
        <div className="h-[700px] bg-[#0a0a0f]" />
      </section>
    ),
  }
);

const About = dynamic(
  () => import("@/components/About").then((mod) => ({ default: mod.About })),
  {
    loading: () => (
      <section className="relative z-10 h-[70vh] bg-[#0a0a0f]" />
    ),
    ssr: false, // Disable SSR for WebGL components
  }
);

const WhatYouDontHaveToDo = dynamic(
  () => import("@/components/WhatYouDontHaveToDo").then((mod) => ({ default: mod.WhatYouDontHaveToDo })),
  {
    loading: () => (
      <section className="relative z-10 py-32 px-6 md:px-12 lg:px-24">
        <div className="h-96 bg-[#0a0a0f]" />
      </section>
    ),
  }
);

const Contact = dynamic(
  () => import("@/components/Contact").then((mod) => ({ default: mod.Contact })),
  {
    loading: () => (
      <section className="relative z-10 py-20 px-6 md:px-12 lg:px-24">
        <div className="h-96 bg-[#0a0a0f]" />
      </section>
    ),
  }
);

const Footer = dynamic(
  () => import("@/components/Footer").then((mod) => ({ default: mod.Footer })),
  {
    loading: () => (
      <footer className="relative z-10 py-12">
        <div className="h-48 bg-[#0a0a0f]" />
      </footer>
    ),
  }
);

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0a0a0f] relative">
      <Navbar />
      <Hero />
      <TrustedBy />
      <Products />
      <Moments />
      <About />
      <WhatYouDontHaveToDo />
      <Contact />
      <Footer />
    </main>
  );
}

