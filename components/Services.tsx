"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";

const services = [
  {
    id: 1,
    title: "Automations",
    description: "Streamline your business processes with intelligent automation solutions that save time and reduce errors.",
    image: null,
  },
  {
    id: 2,
    title: "Web Development",
    description: "Create stunning, responsive websites that engage your audience and drive business growth.",
    image: "/web.jpg",
  },
  {
    id: 3,
    title: "App Development",
    description: "Build powerful mobile and web applications that deliver exceptional user experiences.",
    image: null,
  },
];

export const Services = () => {
  const cardsRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    const handleScroll = () => {
      cardsRef.current.forEach((card, index) => {
        if (!card) return;

        const rect = card.getBoundingClientRect();
        const stickyTop = 96; // top-24 = 6rem = 96px
        
        // Check if card is stuck at the top
        const isStuck = rect.top <= stickyTop + 5;
        
        // Check if next card is about to cover this one
        const nextCard = cardsRef.current[index + 1];
        let isCovered = false;
        
        if (nextCard) {
          const nextRect = nextCard.getBoundingClientRect();
          // If next card is close to or at the sticky position, this card is being covered
          isCovered = nextRect.top <= stickyTop + 50;
        }

        const bgOverlay = card.querySelector('.bg-overlay') as HTMLElement;
        
        if (bgOverlay) {
          if (isStuck && !isCovered) {
            // Card is on top and visible - make it opaque
            bgOverlay.style.opacity = '1';
          } else {
            // Card is not stuck or is covered - keep glass effect
            bgOverlay.style.opacity = '0';
          }
        }
      });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <section className="relative z-10 py-20">
      <div className="text-center mb-20">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
          Our Services
        </h2>
        <p className="text-gray-400 text-lg max-w-2xl mx-auto">
          Comprehensive solutions to accelerate your business growth
        </p>
      </div>

      <div className="max-w-6xl mx-auto px-6 md:px-12 lg:px-24">
        <div className="relative">
          {services.map((service, index) => (
            <div
              key={service.id}
              ref={(el) => {
                if (el) cardsRef.current[index] = el;
              }}
              className="sticky top-24 rounded-2xl p-8 md:p-12 mb-8 border border-purple-500/30 overflow-hidden"
              style={{
                zIndex: 10 + index,
                minHeight: '450px',
              }}
            >
              {/* Glass background (default) */}
              <div 
                className="absolute inset-0 bg-gradient-to-br from-purple-900/30 to-pink-900/30 backdrop-blur-md"
              />
              
              {/* Solid opaque background (shown when stacked on top) */}
              <div 
                className="bg-overlay absolute inset-0 transition-opacity duration-300"
                style={{
                  opacity: 0,
                  background: `linear-gradient(135deg, 
                    rgb(${88 + index * 20}, ${28 + index * 10}, ${135 - index * 20}) 0%, 
                    rgb(${131 + index * 15}, ${24 + index * 8}, ${67 - index * 10}) 100%)`,
                }}
              />
              
              {/* Image Background (for Web Development) */}
              {service.image && (
                <div className="absolute inset-0 z-0">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover"
                    sizes="100vw"
                  />
                </div>
              )}

              {/* Content */}
              <div className="relative z-10 max-w-4xl">
                <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">
                  {service.title}
                </h3>
                <p className="text-gray-200 text-lg leading-relaxed">
                  {service.description}
                </p>
                <button className="mt-8 px-6 py-3 bg-white text-black font-semibold rounded-full hover:bg-gray-200 transition-colors">
                  Learn More
                </button>
              </div>
            </div>
          ))}
        </div>
        {/* Spacer to allow last card to fully stack */}
        <div className="h-[200px]" />
      </div>
    </section>
  );
};
