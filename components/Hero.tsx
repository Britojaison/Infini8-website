"use client";

import { motion } from "framer-motion";
import { ArrowRight, Terminal, Shield, Cpu, Share2 } from "lucide-react";
import { Infini8Logo } from "./Infini8Logo";


const metrics = [
  { label: "Network Capacity", value: "10B+ graph nodes", color: "text-primary/60" },
  { label: "Execution Speed", value: "sub-1ms retrieval", color: "text-secondary/60" },
  { label: "Uptime Core", value: "99.999% SLA", color: "text-tertiary/60" },
];

const technicalDetails = [
  { icon: Share2, label: "Distributed Ledger v4.2" },
  { icon: Shield, label: "Quantum-Resistant Hash" },
  { icon: Terminal, label: "EVM-Native Bridge" },
  { icon: Cpu, label: "Multi-Regional Nexus" },
];

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center pt-32 pb-24 px-6 overflow-hidden">
      {/* Background Underglows */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-[20%] -left-[10%] w-[70%] h-[70%] bg-primary/10 blur-[120px] opacity-40 animate-pulse-fast"></div>
        <div className="absolute top-[10%] -right-[5%] w-[50%] h-[60%] bg-secondary/5 blur-[100px] rounded-full opacity-30"></div>
      </div>

      <div className="relative z-10 text-center max-w-5xl mx-auto flex flex-col items-center">
        {/* Substantially Improved Visual Anchor */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
          className="mb-16 relative w-40 h-40 md:w-56 md:h-56 flex items-center justify-center group"
        >
          <div className="absolute inset-0 bg-gradient-to-tr from-primary/30 via-secondary/10 to-transparent rounded-full blur-[60px] opacity-60 group-hover:opacity-100 transition-opacity duration-700" />
          <div className="relative w-full h-full flex items-center justify-center">
             <Infini8Logo className="w-24 h-24 md:w-32 md:h-32" />
          </div>
        </motion.div>

        {/* Professional Typography */}
        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="font-display text-5xl md:text-8xl font-bold tracking-[-0.04em] text-white mb-8 leading-[0.95] drop-shadow-2xl"
        >
          Infinite Scale.<br/>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-primary-dim to-secondary contrast-125">Singular Vision.</span>
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          className="text-white/60 text-lg md:text-xl max-w-2xl mx-auto mb-14 font-sans leading-relaxed px-4 font-light tracking-wide"
        >
          The autonomous intelligence ecosystem for the ether. Decouple your infrastructure from the constraints of traditional compute with high-fidelity graph traversals.
        </motion.p>

        {/* Action Group */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex flex-col sm:flex-row gap-6 justify-center mb-24"
        >
          <button className="bg-primary text-primary-foreground px-12 py-5 rounded-xl font-bold text-lg deliterate-transition hover:scale-105 shadow-btn-glow flex items-center gap-3">
            Get Started
            <ArrowRight className="w-6 h-6" />
          </button>
          
          <button className="bg-surface-variant/20 backdrop-blur-2xl border border-white/10 text-white px-12 py-5 rounded-xl font-bold text-lg deliterate-transition hover:bg-surface-variant/40">
            View Protocol
          </button>
        </motion.div>

        {/* Metric Bento Grid */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-[1px] w-full glass-panel rounded-2xl overflow-hidden bg-white/[0.02] border border-white/10"
        >
          {metrics.map((metric, i) => (
            <div key={i} className={`p-10 flex flex-col items-center ${i < 2 ? 'md:border-r border-white/10' : ''} border-b md:border-b-0 border-white/10`}>
              <span className={`font-mono text-[10px] uppercase tracking-[0.3em] ${metric.color} mb-3 font-bold`}>
                {metric.label}
              </span>
              <span className="font-display text-3xl font-medium text-white tracking-tight">
                {metric.value}
              </span>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Technical Ticker */}
      <div className="absolute bottom-0 left-0 w-full py-10 border-t border-white/5 bg-surface-container-lowest/30 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-6 flex flex-wrap justify-center gap-x-16 gap-y-6 opacity-40 grayscale hover:grayscale-0 transition-all duration-500">
          {technicalDetails.map((detail, i) => (
            <div key={i} className="flex items-center gap-3">
              <detail.icon className="w-4 h-4 text-primary" />
              <span className="font-mono text-[10px] uppercase tracking-widest text-white font-medium">
                {detail.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
