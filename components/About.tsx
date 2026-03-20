"use client";

import { motion } from "framer-motion";
import { Zap, Shield, Cpu, Globe } from "lucide-react";

const features = [
  {
    icon: <Zap className="w-8 h-8 text-accent-cyan" />,
    title: "Instant Intelligence",
    content: "Our AI engines process data with sub-50ms latency, providing real-time insights when you need them most."
  },
  {
    icon: <Shield className="w-8 h-8 text-accent-magenta" />,
    title: "Enterprise Security",
    content: "Built-in data privacy and encryption ensures your intellectual property remains yours, always."
  },
  {
    icon: <Cpu className="w-8 h-8 text-accent-amber" />,
    title: "Neural Synergy",
    content: "A unified AI ecosystem where Graph, SEO, and Voice tools learn from each other to amplify growth."
  },
  {
    icon: <Globe className="w-8 h-8 text-accent-emerald" />,
    title: "Global Scale",
    content: "Deploy intelligent agents across any language or region without sacrificing performance or quality."
  }
];

export const About = () => {
  return (
    <section id="about" className="relative z-10 py-32 px-6 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-heading font-bold text-white mb-6 tracking-tighter"
          >
            Built for the <span className="text-accent-cyan">Intelligent</span> Era
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-gray-400 text-xl max-w-2xl mx-auto leading-relaxed"
          >
            Infini8 isn&apos;t just another suite of tools—it&apos;s a cohesive intelligence layer that empowers your business to automate the impossible.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="glass-card p-8 group hover:scale-[1.02] transition-all duration-500"
            >
              <div className="mb-6 group-hover:scale-110 transition-transform duration-500">
                {feature.icon}
              </div>
              <h3 className="text-2xl font-heading font-bold text-white mb-4">
                {feature.title}
              </h3>
              <p className="text-gray-400 leading-relaxed font-sans">
                {feature.content}
              </p>
              
              {/* Bottom accent line */}
              <div className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-transparent via-white/20 to-transparent w-0 group-hover:w-full transition-all duration-700" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};


