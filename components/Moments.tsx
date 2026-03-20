"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Mic, Search, Briefcase, Sparkles } from "lucide-react";

const moments = [
  {
    id: 1,
    product: "Infini8 Voice",
    icon: Mic,
    text: "A lead calls after office hours and still gets qualified instantly.",
    color: "from-cyan-500/20 to-blue-500/20",
    accent: "text-cyan-400",
  },
  {
    id: 2,
    product: "Infini8 Voice",
    icon: Mic,
    text: "High intent conversations trigger follow ups automatically.",
    color: "from-blue-500/20 to-indigo-500/20",
    accent: "text-blue-400",
  },
  {
    id: 3,
    product: "Infini8 SEO",
    icon: Search,
    text: "A competitor ranks for a new keyword and your content goes live before ground is lost.",
    color: "from-purple-500/20 to-pink-500/20",
    accent: "text-purple-400",
  },
  {
    id: 4,
    product: "Infini8 SEO",
    icon: Search,
    text: "Ranking gaps are identified and optimized articles are published at scale.",
    color: "from-pink-500/20 to-rose-500/20",
    accent: "text-pink-400",
  },
  {
    id: 5,
    product: "Infini8 Marketer",
    icon: Briefcase,
    text: "Campaign performance dips and optimization decisions are made in real time.",
    color: "from-emerald-500/20 to-teal-500/20",
    accent: "text-emerald-400",
  },
  {
    id: 6,
    product: "Infini8 Marketer",
    icon: Briefcase,
    text: "A marketer gets stuck and expert guidance appears exactly when needed.",
    color: "from-teal-500/20 to-cyan-500/20",
    accent: "text-teal-400",
  },
];

export const Moments = () => {
  return (
    <section className="relative z-10 py-32 px-6 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-24">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-panel border-white/10 mb-6"
          >
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-xs font-mono uppercase tracking-[0.2em] text-primary/80">Real-time Intelligence</span>
          </motion.div>
          <h2 className="font-display text-4xl md:text-6xl font-bold text-white mb-8 tracking-tight">
            Built for the Moments <br/> <span className="text-white/40">That Matter Most.</span>
          </h2>
          <p className="text-lg md:text-xl text-white/50 max-w-2xl mx-auto leading-relaxed font-light">
            Infini8 steps in exactly when speed, clarity, and autonomous decisions are the difference between growth and stagnation.
          </p>
        </div>

        {/* Improved Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {moments.map((moment, index) => (
            <MomentCard key={moment.id} moment={moment} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

const MomentCard = ({ moment, index }: { moment: typeof moments[0]; index: number }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="relative group cursor-hover"
    >
      <div 
        className={`
          relative h-full min-h-[220px] p-8 rounded-2xl overflow-hidden
          glass-panel border-white/5 deliterate-transition
          ${isHovered ? 'bg-white/[0.04] border-white/20' : 'bg-white/[0.01]'}
        `}
      >
        {/* Animated Background Content */}
        <div 
          className={`
            absolute inset-0 opacity-0 group-hover:opacity-100 deliterate-transition
            bg-gradient-to-br ${moment.color} blur-3xl -z-10
          `}
        />

        {/* Card Content */}
        <div className="relative z-10 flex flex-col h-full">
          <div className="flex items-center justify-between mb-6">
            <div className={`flex items-center gap-3 ${moment.accent}`}>
              <moment.icon className="w-5 h-5" />
              <span className="text-xs font-mono uppercase tracking-[0.2em] font-bold">
                {moment.product}
              </span>
            </div>
            <div className="w-2 h-2 rounded-full bg-white/20 group-hover:bg-primary deliterate-transition" />
          </div>

          <p className="text-lg text-white/90 leading-tight font-display tracking-tight group-hover:text-white deliterate-transition">
            &quot;{moment.text}&quot;
          </p>


          <div className="mt-auto pt-6 flex items-center gap-2">
            <div className="h-[1px] flex-grow bg-white/5 group-hover:bg-white/10 deliterate-transition" />
            <span className="text-[10px] font-mono uppercase tracking-tighter text-white/20 group-hover:text-white/40 deliterate-transition">
              Autonomous Trigger
            </span>
          </div>
        </div>

        {/* Hover Border Glow */}
        <AnimatePresence>
          {isHovered && (
            <motion.div
              layoutId={`border-glow-${moment.id}`}
              className="absolute inset-0 border border-primary/30 rounded-2xl pointer-events-none"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            />
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
};
