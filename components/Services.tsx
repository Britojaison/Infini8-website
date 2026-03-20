"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Zap, Layout, Globe, ArrowRight } from "lucide-react";

const services = [
  {
    id: 1,
    title: "Intelligent Automation",
    icon: Zap,
    description: "Streamline your business processes with autonomous agents designed to scale your operational velocity without increasing overhead.",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=1600",
  },
  {
    id: 2,
    title: "High-Fidelity Web",
    icon: Globe,
    description: "Architecting immersive digital experiences that combine performance with a premium, obsidian-inspired aesthetic for modern brands.",
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80&w=1600",
  },
  {
    id: 3,
    title: "Ecosystem Architecture",
    icon: Layout,
    description: "Building powerful cross-platform applications that deliver exceptional user experiences through integrated intelligence ecosystems.",
    image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?auto=format&fit=crop&q=80&w=1600",
  },
];

export const Services = () => {
  const cardsRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    const currentCards = cardsRef.current;
    
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const card = entry.target as HTMLElement;
          const index = parseInt(card.dataset.index || "0");
          
          const stickyTop = 96; 
          const rect = card.getBoundingClientRect();
          const isStuck = rect.top <= stickyTop + 5;
          
          const nextCard = currentCards[index + 1];
          let isCovered = false;
          
          if (nextCard) {
            const nextRect = nextCard.getBoundingClientRect();
            isCovered = nextRect.top <= stickyTop + 50;
          }

          const overlay = card.querySelector('.service-overlay') as HTMLElement;
          if (overlay) {
            overlay.style.opacity = (isStuck && !isCovered && entry.isIntersecting) ? '1' : '0';
          }
        });
      },
      { threshold: [0, 0.5, 1], rootMargin: '0px' }
    );

    currentCards.forEach((card) => {
      if (card) observer.observe(card);
    });

    return () => {
      currentCards.forEach((card) => {
        if (card) observer.unobserve(card);
      });
    };
  }, []);

  return (
    <section className="relative z-10 py-32 bg-black/20">
      <div className="text-center mb-24 max-w-3xl mx-auto px-6">
        <h2 className="font-display text-4xl md:text-6xl font-bold text-white mb-8 tracking-tight">
          Core <span className="text-primary">Intelligence</span> Capabilities
        </h2>
        <p className="text-white/50 text-lg md:text-xl font-light leading-relaxed">
          Comprehensive infrastructure for the autonomous era. We rebuild your operations from the ground up with a focus on scale and precision.
        </p>
      </div>

      <div className="max-w-6xl mx-auto px-6 md:px-12">
        <div className="relative space-y-24 md:space-y-0">
          {services.map((service, index) => (
            <div
              key={service.id}
              ref={(el) => {
                if (el) {
                  cardsRef.current[index] = el;
                  el.dataset.index = index.toString();
                }
              }}
              className="sticky top-32 rounded-3xl p-8 md:p-16 mb-12 overflow-hidden glass-panel border-white/10 group deliterate-transition"
              style={{
                zIndex: 10 + index,
                minHeight: '480px',
              }}
            >
              {/* Background Glow */}
              <div className="service-overlay absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-background opacity-0 transition-opacity duration-700 -z-10" />

              {/* Image with Parallax-lite */}
              <div className="absolute inset-0 z-0 opacity-20 group-hover:opacity-30 deliterate-transition grayscale group-hover:grayscale-0">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover transition-transform duration-1000 group-hover:scale-110"
                  sizes="100vw"
                  loading="lazy"
                />
              </div>

              {/* Content Grid */}
              <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-12 items-center h-full">
                <div className="space-y-8">
                  <div className="w-14 h-14 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center">
                    <service.icon className="w-7 h-7 text-primary" />
                  </div>
                  
                  <h3 className="font-display text-3xl md:text-5xl font-bold text-white tracking-tight leading-none group-hover:text-primary deliterate-transition">
                    {service.title}
                  </h3>
                  
                  <p className="text-white/60 text-lg leading-relaxed font-light pr-4">
                    {service.description}
                  </p>
                  
                  <button className="flex items-center gap-3 text-primary font-bold tracking-wide group/btn">
                    <span>Explore Capability</span>
                    <ArrowRight className="w-5 h-5 group-hover/btn:translate-x-2 deliterate-transition" />
                  </button>
                </div>

                <div className="hidden md:flex justify-end p-8">
                    <div className="w-full aspect-video rounded-2xl overflow-hidden glass-panel border-white/20 shadow-2xl relative">
                         <Image
                            src={service.image}
                            alt={service.title}
                            fill
                            className="object-cover"
                            sizes="400px"
                        />
                        <div className="absolute inset-0 bg-primary/5" />
                    </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="h-[200px]" />
      </div>
    </section>
  );
};
