import dynamic from "next/dynamic";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";

// Lazy load components below the fold
const TrustedBy = dynamic(
  () => import("@/components/TrustedBy").then((mod) => ({ default: mod.TrustedBy })),
  { loading: () => <div className="h-32 bg-background" /> }
);

const Products = dynamic(
  () => import("@/components/Products").then((mod) => ({ default: mod.Products })),
  { loading: () => <div className="h-96 bg-background" /> }
);

const ValueMetrics = dynamic(
  () => import("@/components/ValueMetrics").then((mod) => ({ default: mod.ValueMetrics })),
  { loading: () => <div className="h-96 bg-background" /> }
);

const Moments = dynamic(
  () => import("@/components/Moments").then((mod) => ({ default: mod.Moments })),
  { loading: () => <div className="h-[700px] bg-background" /> }
);

const About = dynamic(
  () => import("@/components/About").then((mod) => ({ default: mod.About })),
  {
    loading: () => <div className="h-[70vh] bg-background" />,
    ssr: false,
  }
);

const UnifiedCTA = dynamic(
  () => import("@/components/UnifiedCTA").then((mod) => ({ default: mod.UnifiedCTA })),
  { loading: () => <div className="h-64 bg-background" /> }
);

const Footer = dynamic(
  () => import("@/components/Footer").then((mod) => ({ default: mod.Footer })),
  { loading: () => <div className="h-48 bg-background" /> }
);

export default function Home() {
  return (
    <main className="min-h-screen bg-background relative selection:bg-primary/30">
      {/* Kinetic Ether Mesh Background */}
      <div className="mesh-bg" />
      <div className="noise-overlay" />
      
      <Navbar />
      <Hero />
      
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6">
        <TrustedBy />
        <Products />
        <ValueMetrics />
        <Moments />
        <About />
        <UnifiedCTA />
        <Footer />
      </div>
    </main>
  );
}
