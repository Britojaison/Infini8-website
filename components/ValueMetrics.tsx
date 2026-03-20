"use client";

import { motion } from "framer-motion";
import { Zap, Terminal, Shield, Globe, GitMerge } from "lucide-react";

const metrics = [
  {
    title: "sub-10ms",
    description: "Graph traversal latency across petabyte-scale clusters.",
    icon: Zap,
    color: "text-primary",
    span: "md:col-span-2",
  },
  {
    title: "Real-time",
    description: "Continuous technical audits for edge delivery.",
    icon: Terminal,
    color: "text-tertiary",
    span: "",
  },
  {
    title: "Zero Trust",
    description: "Protocol-level encryption for every data point.",
    icon: Shield,
    color: "text-secondary",
    span: "",
  },
  {
    title: "120+",
    description: "Regional edges for global intelligence propagation.",
    icon: Globe,
    color: "text-primary-dim",
    span: "",
  },
  {
    title: "Unified Ecosystem",
    description: "Every module in the Infini8 Suite communicates through a single, secure GraphQL API layer.",

    icon: GitMerge,
    color: "text-secondary-dim",
    span: "md:col-span-2 lg:col-span-3",
  },
];

export const ValueMetrics = () => {
  return (
    <section className="py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-24">
          <motion.h3 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-display text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight"
          >
            Intelligence as a Service
          </motion.h3>
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-white/40 uppercase tracking-[0.3em] font-sans text-xs"
          >
            Performance metrics by the numbers
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {metrics.map((metric, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`glass-panel p-8 rounded-2xl hover:bg-surface-variant/40 transition-colors group ${metric.span}`}
            >
              <div className={`mb-6 p-3 rounded-xl bg-white/5 w-fit group-hover:scale-110 deliterate-transition`}>
                <metric.icon className={`w-8 h-8 ${metric.color}`} />
              </div>
              <h4 className="text-3xl font-bold text-white mb-3 font-display tracking-tight">{metric.title}</h4>
              <p className="text-white/50 leading-relaxed">{metric.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
