"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { 
  Zap, Share2, Activity, Target, ShieldCheck, 
  BarChart3, Search, TrendingUp, Layers, PenTool,
  Mic, Volume2, Cpu, MessageSquare, AudioLines,
  ArrowRight
} from "lucide-react";
import Image from "next/image";
import { useRef } from "react";

const products = [
  {
    id: "graph",
    name: "Infini8Graph",
    tag: "Intelligence Core",
    accent: "#00F5FF",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuALVZD8se-Ni1A2v7f0eVee3sdT_PnsHuAOlleYmXMtdsHk_pf5KnY7ddvKSA0_rRBO5XARuo0OVxBtdiYkcL97NRhI02LjQUwen4Pzyr27SZGMZKDaXcTxlxXcKb13OBOhT4sqjPbixFiH2VesZAWhuRSsbac_hRqtAi6QAMMH916UR8Ru-ey9J-y2C8TtfEn__KSI4ohE1xmgjn0FiDQVu0xUlt9Zx9SelVUy0y7Z-K1u2-OAfaZv2rfwl6PhCfcjCiotBQR5cls",
    features: [
      { icon: Zap, title: "Sub-1ms Retrieval", desc: "Proprietary graph traversal algorithms optimized for extreme throughput." },
      { icon: Share2, title: "Multi-Dimensional Mapping", desc: "Visualize complex data relationships in n-dimensional space." },
      { icon: Activity, title: "Real-time Node Sync", desc: "Synchronize across global clusters with atomic consistency." },
      { icon: Target, title: "Predictive Flow Analysis", desc: "Anticipate system bottlenecks before they occur with ML-driven signals." },
      { icon: ShieldCheck, title: "Recursive Security Logic", desc: "Identity-aware access control baked into the graph traversal layer." }
    ]
  },
  {
    id: "seo",
    name: "Infini8SEO",
    tag: "Discovery Layer",
    accent: "#6366f1",
    image: "https://images.unsplash.com/photo-1614850523296-d8c1af93d400?auto=format&fit=crop&q=80&w=1200",
    reverse: true,
    features: [
      { icon: Search, title: "SERP Sentinel", desc: "Continuous monitoring of search intent shifts and ranking fluctuations." },
      { icon: BarChart3, title: "Competitor Gap Engine", desc: "Identify untapped keyword clusters where your competitors are missing." },
      { icon: PenTool, title: "Semantic Autopilot", desc: "AI-driven content optimization based on topical authority mapping." },
      { icon: TrendingUp, title: "Organic Forecasts", desc: "Predict future traffic trends with high-confidence statistical models." },
      { icon: Layers, title: "Technical Health Guard", desc: "Automated core web vital audits and schema validation in real-time." }
    ]
  },
  {
    id: "voice",
    name: "Infini8Voice",
    tag: "Synthesis Engine",
    accent: "#10b981",
    image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?auto=format&fit=crop&q=80&w=1200",
    features: [
      { icon: AudioLines, title: "Sub-100ms TTL", desc: "Human-grade synthesis latency for fluid, lag-free conversations." },
      { icon: Volume2, title: "Emotional Synthesis", desc: "Dynamic tone adjustment based on user sentiment and context." },
      { icon: Cpu, title: "Zero-Shot Cloning", desc: "High-fidelity voice replica creation from just seconds of reference audio." },
      { icon: MessageSquare, title: "Context Memory", desc: "Long-term conversation storage for deeply personalized interactions." },
      { icon: Mic, title: "Neural Noise Filter", desc: "Studio-quality audio output even from low-bitrate input streams." }
    ]
  }
];

export const Products = () => {
  return (
    <section id="products" className="py-48 px-6 space-y-72 max-w-[1440px] mx-auto overflow-hidden">
      {products.map((product) => (
        <ProductSection key={product.id} product={product} />
      ))}
    </section>
  );
};

const ProductSection = ({ product }: { product: typeof products[0] }) => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const opacity = useTransform(scrollYProgress, [0, 0.1, 0.9, 1], [0, 1, 1, 0]);

  return (
    <motion.div
      ref={containerRef}
      style={{ opacity }}
      className={`flex flex-col lg:flex-row gap-16 lg:gap-24 items-start w-full`}
    >
      {/* Text Content - Narrower for more image space */}
      <div className={`w-full lg:w-[35%] space-y-16 py-12 ${product.reverse ? "lg:order-2" : "lg:order-1"}`}>
        <div className="space-y-6">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-panel border-white/10"
            style={{ color: product.accent }}
          >
            <span className="w-2 h-2 rounded-full animate-pulse" style={{ backgroundColor: product.accent }} />
            <span className="text-[10px] font-bold uppercase tracking-[0.2em] font-mono">{product.tag}</span>
          </motion.div>
          
          <h2 className="font-display text-5xl md:text-7xl font-bold text-white tracking-tighter leading-none">
            {product.name}
          </h2>
          <p className="text-white/40 text-lg font-light leading-relaxed">
            The technical benchmark for {product.name.replace("Infini8", "")} intelligence systems.
          </p>
        </div>

        {/* Feature List */}
        <div className="space-y-12">
          {product.features.map((feature, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group flex gap-6"
            >
              <div className="flex-shrink-0">
                <div 
                  className="w-12 h-12 rounded-xl border border-white/5 bg-white/[0.02] flex items-center justify-center deliterate-transition group-hover:border-primary/50 group-hover:bg-primary/5"
                  style={{ color: product.accent }}
                >
                  <feature.icon className="w-6 h-6" />
                </div>
              </div>
              <div className="space-y-2">
                <h4 className="text-white text-lg font-bold tracking-tight group-hover:text-primary deliterate-transition">
                  {feature.title}
                </h4>
                <p className="text-white/30 text-sm leading-relaxed max-w-xs group-hover:text-white/50 deliterate-transition">
                  {feature.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        <button 
          className="group flex items-center gap-3 text-white font-bold tracking-wide hover:text-primary deliterate-transition pt-8"
        >
          <span>Explore Documentation</span>
          <ArrowRight className="w-5 h-5 group-hover:translate-x-2 deliterate-transition" />
        </button>
      </div>

      {/* Visual Content - Expansive Wider Container */}
      <div className={`flex-1 w-full lg:w-[65%] sticky top-32 ${product.reverse ? "lg:order-1" : "lg:order-2"}`}>
        <motion.div 
            style={{ y }}
            className={`relative w-full aspect-[16/18] md:aspect-[16/20] lg:aspect-[16/21] rounded-[2.5rem] overflow-hidden glass-panel border-white/10 p-2 shadow-2xl ${
              product.reverse ? "lg:-ml-12" : "lg:-mr-12"
            }`}
        >
          {/* Animated Glow behind image */}
          <div 
            className="absolute inset-x-0 -bottom-20 h-[800px] blur-[180px] opacity-10 group-hover:opacity-30 transition-opacity" 
            style={{ background: `radial-gradient(circle, ${product.accent} 0%, transparent 70%)` }}
          />

          <div className="relative w-full h-full rounded-[2.3rem] overflow-hidden bg-surface-container-low/50">
            <Image
              src={product.image}
              alt={product.name}
              fill
              className="object-cover grayscale active:grayscale-0 hover:grayscale-0 transition-all duration-1000"
              sizes="(max-width: 1024px) 100vw, 800px"
              priority={product.id === "graph"}
            />
            
            {/* Overlay Gradient for data readability */}
            <div className="absolute inset-0 bg-gradient-to-tr from-background/90 via-background/20 to-transparent opacity-80" />
            
            {/* UI ELEMENTS - Distributed to occupy horizontal space */}
            <div className="absolute top-10 left-10 flex flex-col gap-4">
                <div className="px-4 py-1.5 rounded-full bg-black/60 backdrop-blur-xl border border-white/10 text-[11px] font-mono text-primary flex items-center gap-2 w-fit">
                   <div className="w-2 h-2 rounded-full bg-primary animate-pulse shadow-[0_0_8px_#00F5FF]" />
                   MOD_V4.2_ACTIVE
                </div>
                <div className="px-4 py-1.5 rounded-full bg-black/60 backdrop-blur-xl border border-white/10 text-[11px] font-mono text-white/50 w-fit">
                   Syncing: 100.00%
                </div>
            </div>

            <div className="absolute top-10 right-10 flex flex-col gap-2 items-end">
                <div className="text-[10px] text-white/20 uppercase tracking-[0.3em] font-bold">Traffic Pulse</div>
                <div className="flex gap-1 h-8 items-end">
                    {[0.4, 0.7, 0.5, 0.9, 0.6, 0.8, 0.5].map((h, i) => (
                        <motion.div 
                            key={i}
                            animate={{ height: [`${h*100}%`, `${(h+0.1)*100}%`, `${h*100}%`] }}
                            transition={{ duration: 2, repeat: Infinity, delay: i * 0.2 }}
                            className="w-1 bg-primary/40 rounded-full"
                        />
                    ))}
                </div>
            </div>
            
            <div className="absolute bottom-12 left-12 right-12 flex justify-between items-end">
                <div className="space-y-2">
                    <p className="text-white/20 text-[10px] uppercase tracking-widest font-bold">Core Node Latency</p>
                    <p className="text-primary font-display text-4xl font-bold tracking-tighter glow-text shadow-primary">0.8ms</p>
                </div>
                <div className="text-right space-y-1">
                    <p className="text-white/20 text-[10px] uppercase tracking-widest font-bold">Network Load</p>
                    <p className="text-white/80 font-mono text-xl">14.2 GB/s</p>
                </div>
            </div>

            {/* Grid Pattern Overlay */}
            <div className="absolute inset-0 bg-[radial-gradient(#ffffff03_1px,transparent_1px)] [background-size:40px_40px] pointer-events-none" />
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};
