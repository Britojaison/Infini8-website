"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export const UnifiedCTA = () => {
  return (
    <section className="py-32 px-6">
      <motion.div 
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="max-w-5xl mx-auto glass-panel rounded-[2rem] p-12 md:p-24 text-center relative overflow-hidden group shadow-2xl shadow-indigo-500/10"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-secondary/10 opacity-50 group-hover:opacity-100 deliterate-transition" />
        
        <div className="relative z-10">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-display text-5xl md:text-7xl font-bold text-white mb-8 tracking-tighter"
          >
            Ready for the <span className="text-primary italic">Ether</span>?
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-white/60 text-xl max-w-2xl mx-auto mb-12 font-sans leading-relaxed"
          >
            Join the next generation of digital curators. Scale your vision with the autonomous suite designed for high-end intelligence.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="flex flex-col sm:flex-row gap-6 justify-center"
          >
            <button className="bg-primary text-primary-foreground px-12 py-5 rounded-xl font-bold text-xl deliterate-transition hover:scale-105 shadow-btn-glow flex items-center gap-3 mx-auto sm:mx-0">
              Launch Infini8 Suite
              <ArrowRight className="w-6 h-6" />
            </button>

          </motion.div>
          
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="mt-12 text-white/30 font-display tracking-widest text-[10px] uppercase font-bold"
          >
            No Credit Card Required • Enterprise Ready • 24/7 Neural Support
          </motion.p>
        </div>
      </motion.div>
    </section>
  );
};
