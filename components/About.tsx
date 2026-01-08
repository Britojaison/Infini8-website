"use client";

import { useRef, useEffect, useState, useMemo, useCallback } from "react";
import Particles from "./Particles";

const sections = [
  {
    id: 1,
    title: "What is Infini8?",
    content: "Infini8 is an AI-powered platform built to help businesses automate, scale, and optimize critical growth functions using intelligent systems. It brings together advanced AI capabilities across voice, content, automation, and data to solve real business problems with precision and control. Infini8 is designed not as a single tool, but as a growing ecosystem of AI products that work together to power modern businesses.",
  },
  {
    id: 2,
    title: "Why Infini8?",
    content: "Most businesses struggle with disconnected tools, manual processes, and systems that do not scale. Infini8 is built to remove that complexity. Every product under Infini8 is designed to be deeply customizable, integration-ready, and aligned with how real businesses operate. Instead of generic automation, Infini8 focuses on intelligence that understands context, intent, and outcomes—helping teams move faster, work smarter, and make better decisions.",
  },
  {
    id: 3,
    title: "How is Infini8?",
    content: "Infini8 works by turning everyday business interactions into actionable intelligence. Whether it is a voice conversation, a content requirement, or a workflow trigger, Infini8 uses AI to listen, analyse, and act in real time. It integrates seamlessly with your existing tools and systems, automating processes while maintaining visibility and control. As your business grows, Infini8 scales with you—continuously learning, improving, and adapting to your needs.",
  },
];

export const About = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const isLocked = useRef(false);
  const accumulatedDelta = useRef(0);
  const lastScrollTime = useRef(0);
  const rafId = useRef<number | null>(null);

  // Memoize particleColors to prevent Particles from re-initializing
  const particleColors = useMemo(() => ["#ffffff", "#ffffff"], []);
  
  // Optimize pixelRatio for performance (cap at 2 for high-DPI displays)
  const pixelRatio = useMemo(() => {
    if (typeof window !== "undefined") {
      return Math.min(window.devicePixelRatio || 1, 2);
    }
    return 1;
  }, []);

  const handleWheel = useCallback((e: WheelEvent) => {
      const container = containerRef.current;
      if (!container) return;
      
      const rect = container.getBoundingClientRect();
      const viewportHeight = window.innerHeight;
      
      // Check if section is in view
      const isInView = rect.bottom > 0 && rect.top < viewportHeight;
      
      // Check if section is mostly in view (70vh section)
      // Section is considered "active" if at least 60% is visible
      const sectionHeight = rect.height;
      const visibleTop = Math.max(0, -rect.top);
      const visibleBottom = Math.min(sectionHeight, viewportHeight - rect.top);
      const visibleHeight = visibleBottom - visibleTop;
      const isActive = visibleHeight >= sectionHeight * 0.6; // At least 60% visible
      
      // If section is not in view at all, don't interfere
      if (!isInView) {
        accumulatedDelta.current = 0;
        return;
      }

      // If locked during transition, prevent all scrolling
      if (isLocked.current) {
        e.preventDefault();
        return;
      }

      const now = Date.now();
      
      // Reset accumulated delta if too much time has passed
      if (now - lastScrollTime.current > 300) {
        accumulatedDelta.current = 0;
      }
      lastScrollTime.current = now;

      // Accumulate scroll delta
      accumulatedDelta.current += e.deltaY;

      const threshold = 60; // Reduced threshold for better responsiveness
      const direction = accumulatedDelta.current > 0 ? 1 : -1;
      const nextIndex = currentIndex + direction;

      const atFirstSlide = currentIndex === 0;
      const atLastSlide = currentIndex === sections.length - 1;
      const tryingToScrollUp = direction < 0;
      const tryingToScrollDown = direction > 0;

      // If section is not active yet, allow normal scrolling to enter/exit
      if (!isActive) {
        // If scrolling into the section, allow it
        if (tryingToScrollDown && rect.top > 0) {
          accumulatedDelta.current = 0;
          return;
        }
        if (tryingToScrollUp && rect.bottom < viewportHeight) {
          accumulatedDelta.current = 0;
          return;
        }
      }

      // Handle boundaries - allow exit when at edges
      if (atFirstSlide && tryingToScrollUp && isActive) {
        // At first slide, scrolling up - allow normal scroll to previous section
        if (Math.abs(accumulatedDelta.current) >= threshold * 1.5) {
          accumulatedDelta.current = 0;
          return; // Allow normal scroll
        }
        // Otherwise, prevent and wait for more scroll
        e.preventDefault();
        return;
      }
      
      if (atLastSlide && tryingToScrollDown && isActive) {
        // At last slide, scrolling down - allow normal scroll to next section
        if (Math.abs(accumulatedDelta.current) >= threshold * 1.5) {
          accumulatedDelta.current = 0;
          return; // Allow normal scroll
        }
        // Otherwise, prevent and wait for more scroll
        e.preventDefault();
        return;
      }

      // If we're in the section and not at boundaries, handle horizontal scroll
      if (isActive) {
        e.preventDefault();

        if (Math.abs(accumulatedDelta.current) < threshold) {
          return;
        }

        // Trigger slide change
        if (nextIndex >= 0 && nextIndex < sections.length) {
          isLocked.current = true;
          accumulatedDelta.current = 0;
          setCurrentIndex(nextIndex);
          setTimeout(() => {
            isLocked.current = false;
          }, 600); // Reduced lock duration for smoother transitions
        } else {
          // Reset delta if trying to go beyond boundaries
          accumulatedDelta.current = 0;
        }
      }
  }, [currentIndex]);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleWheelThrottled = (e: WheelEvent) => {
      // Cancel any pending RAF
      if (rafId.current) {
        cancelAnimationFrame(rafId.current);
      }

      // Schedule the handler in the next animation frame
      rafId.current = requestAnimationFrame(() => {
        handleWheel(e);
      });
    };

    window.addEventListener("wheel", handleWheelThrottled, { passive: false });

    return () => {
      window.removeEventListener("wheel", handleWheelThrottled);
      if (rafId.current) {
        cancelAnimationFrame(rafId.current);
      }
    };
  }, [handleWheel]);

  return (
    <section
      ref={containerRef}
      className="relative z-10 h-[70vh] overflow-hidden"
    >
      {/* Particles Background */}
      <Particles
        particleColors={particleColors}
        particleCount={500}
        particleSpread={20}
        speed={0.1}
        particleBaseSize={120}
        alphaParticles={false}
        disableRotation={false}
        pixelRatio={pixelRatio}
      />

      <div className="h-full flex items-center relative z-10">
        <div
          className="flex transition-transform duration-700 ease-in-out"
          style={{
            transform: `translateX(-${currentIndex * 100}vw)`,
            willChange: 'transform',
          }}
        >
          {sections.map((section) => (
            <div
              key={section.id}
              className="w-screen h-[70vh] flex-shrink-0 flex items-start justify-center px-6 md:px-12 lg:px-24 pt-20"
            >
              <div className="max-w-4xl mx-auto text-center">
                <h2 className="text-5xl md:text-7xl font-bold text-white mb-8">
                  {section.title}
                </h2>
                <p className="text-xl md:text-2xl text-gray-400 leading-relaxed">
                  {section.content}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

