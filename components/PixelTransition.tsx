"use client";

import { useState, useEffect, useRef } from "react";

interface PixelTransitionProps {
  firstContent: React.ReactNode;
  secondContent: React.ReactNode;
  gridSize?: number;
  pixelColor?: string;
  animationStepDuration?: number;
  className?: string;
  style?: React.CSSProperties;
  trigger?: boolean;
}

const PixelTransition = ({
  firstContent,
  secondContent,
  gridSize = 30,
  pixelColor = "#FF9FFC",
  animationStepDuration = 0.01,
  className = "",
  style,
  trigger = false,
}: PixelTransitionProps) => {
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [showSecond, setShowSecond] = useState(false);
  const [pixels, setPixels] = useState<boolean[][]>([]);
  const containerRef = useRef<HTMLDivElement>(null);
  const animationFrameRef = useRef<number | null>(null);
  const stepRef = useRef(0);
  const prevTriggerRef = useRef(false);
  const currentTriggerRef = useRef(trigger);

  useEffect(() => {
    if (!containerRef.current) return;

    const container = containerRef.current;
    const width = container.offsetWidth;
    const height = container.offsetHeight;

    const cols = Math.ceil(width / gridSize);
    const rows = Math.ceil(height / gridSize);

    setPixels(
      Array(rows)
        .fill(null)
        .map(() => Array(cols).fill(false))
    );
  }, [gridSize]);

  useEffect(() => {
    currentTriggerRef.current = trigger;
    
    // Cancel any ongoing animation when trigger changes
    if (animationFrameRef.current) {
      cancelAnimationFrame(animationFrameRef.current);
      animationFrameRef.current = null;
    }

    const wasTriggered = prevTriggerRef.current;
    const isNowTriggered = trigger;

    if (isNowTriggered && !wasTriggered) {
      // Starting hover - transition to second content
      setPixels((prev) => {
        if (prev.length > 0 && prev[0]?.length > 0) {
          // Reset all pixels to false if transitioning
          return prev.map((row) => row.map(() => false));
        }
        return prev;
      });
      setIsTransitioning(false);
      setShowSecond(false);
      startTransition();
    } else if (!isNowTriggered && wasTriggered) {
      // Ending hover - transition back to first content
      startReverseTransition();
    }
    
    prevTriggerRef.current = trigger;
  }, [trigger]);

  const startTransition = () => {
    // Cancel any existing animation
    if (animationFrameRef.current) {
      cancelAnimationFrame(animationFrameRef.current);
    }
    setIsTransitioning(true);
    stepRef.current = 0;
    setShowSecond(false);
    animateTransition();
  };

  const startReverseTransition = () => {
    // Cancel any existing animation
    if (animationFrameRef.current) {
      cancelAnimationFrame(animationFrameRef.current);
    }
    setIsTransitioning(true);
    setShowSecond(true);
    animateReverseTransition();
  };

  const animateTransition = () => {
    if (!containerRef.current) return;
    
    // Stop if trigger is no longer active
    if (!currentTriggerRef.current) {
      setIsTransitioning(false);
      setShowSecond(false);
      return;
    }

    const container = containerRef.current;
    const width = container.offsetWidth;
    const height = container.offsetHeight;
    const cols = Math.ceil(width / gridSize);
    const rows = Math.ceil(height / gridSize);

    const totalPixels = rows * cols;
    const pixelsPerStep = Math.max(5, Math.ceil(totalPixels / 8));

    setPixels((prev) => {
      // Stop if trigger changed during state update
      if (!currentTriggerRef.current) {
        setIsTransitioning(false);
        setShowSecond(false);
        return prev.map((row) => row.map(() => false));
      }
      if (prev.length === 0 || prev[0]?.length === 0) {
        const newPixels = Array(rows)
          .fill(null)
          .map(() => Array(cols).fill(false));
        stepRef.current++;
        animationFrameRef.current = requestAnimationFrame(() => {
          setTimeout(() => animateTransition(), animationStepDuration * 1000);
        });
        return newPixels;
      }

      const newPixels = prev.map((row) => [...row]);
      const indices: number[][] = [];

      for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
          if (!newPixels[i]?.[j]) {
            indices.push([i, j]);
          }
        }
      }

      for (let i = indices.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [indices[i], indices[j]] = [indices[j], indices[i]];
      }

      for (let k = 0; k < Math.min(pixelsPerStep, indices.length); k++) {
        const [i, j] = indices[k];
        if (newPixels[i]) {
          newPixels[i][j] = true;
        }
      }

      const allActivated = newPixels.every((row) => row.every((pixel) => pixel));

      if (allActivated) {
        setShowSecond(true);
        setIsTransitioning(false);
        if (animationFrameRef.current) {
          cancelAnimationFrame(animationFrameRef.current);
        }
        return newPixels;
      }

      stepRef.current++;
      animationFrameRef.current = requestAnimationFrame(() => {
        requestAnimationFrame(() => animateTransition());
      });

      return newPixels;
    });
  };

  const animateReverseTransition = () => {
    if (!containerRef.current) return;
    
    // Stop if trigger is now active (hover returned)
    if (currentTriggerRef.current) {
      setIsTransitioning(false);
      setShowSecond(true);
      return;
    }

    const container = containerRef.current;
    const width = container.offsetWidth;
    const height = container.offsetHeight;
    const cols = Math.ceil(width / gridSize);
    const rows = Math.ceil(height / gridSize);

    const totalPixels = rows * cols;
    const pixelsPerStep = Math.max(5, Math.ceil(totalPixels / 8));

    setPixels((prev) => {
      // Stop if trigger changed during state update
      if (currentTriggerRef.current) {
        setIsTransitioning(false);
        setShowSecond(true);
        return prev;
      }
      if (prev.length === 0 || prev[0]?.length === 0) {
        setIsTransitioning(false);
        setShowSecond(false);
        return prev;
      }

      const newPixels = prev.map((row) => [...row]);
      const indices: number[][] = [];

      for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
          if (newPixels[i]?.[j]) {
            indices.push([i, j]);
          }
        }
      }

      for (let i = indices.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [indices[i], indices[j]] = [indices[j], indices[i]];
      }

      for (let k = 0; k < Math.min(pixelsPerStep, indices.length); k++) {
        const [i, j] = indices[k];
        if (newPixels[i]) {
          newPixels[i][j] = false;
        }
      }

      const allDeactivated = newPixels.every((row) => row.every((pixel) => !pixel));

      if (allDeactivated) {
        setShowSecond(false);
        setIsTransitioning(false);
        if (animationFrameRef.current) {
          cancelAnimationFrame(animationFrameRef.current);
        }
        return newPixels;
      }

      stepRef.current--;
      animationFrameRef.current = requestAnimationFrame(() => {
        requestAnimationFrame(() => animateReverseTransition());
      });

      return newPixels;
    });
  };

  useEffect(() => {
    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className={`relative overflow-hidden ${className}`}
      style={style}
    >
      <div
        className={`absolute inset-0 transition-opacity duration-300 ${
          showSecond ? "opacity-0 pointer-events-none" : "opacity-100"
        }`}
      >
        {firstContent}
      </div>

      <div
        className={`absolute inset-0 transition-opacity duration-300 ${
          showSecond ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
      >
        {secondContent}
      </div>

      {isTransitioning && (
        <div className="absolute inset-0 pointer-events-none" style={{ zIndex: 10 }}>
          {pixels.map((row, i) =>
            row.map((isActive, j) => (
              <div
                key={`${i}-${j}`}
                className="absolute"
                style={{
                  left: `${j * gridSize}px`,
                  top: `${i * gridSize}px`,
                  width: `${gridSize}px`,
                  height: `${gridSize}px`,
                  backgroundColor: isActive ? pixelColor : "transparent",
                  transition: "background-color 0.05s",
                }}
              />
            ))
          )}
        </div>
      )}
    </div>
  );
};

export default PixelTransition;

