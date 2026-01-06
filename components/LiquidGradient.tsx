"use client";

import { useEffect, useRef } from "react";

interface LiquidGradientProps {
  colors?: string[];
  className?: string;
}

export const LiquidGradient = ({
  colors = ["#5227FF", "#FF9FFC", "#B19EEF"],
  className = "",
}: LiquidGradientProps) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<number>(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let width = canvas.offsetWidth;
    let height = canvas.offsetHeight;

    const resize = () => {
      width = canvas.offsetWidth;
      height = canvas.offsetHeight;
      canvas.width = width;
      canvas.height = height;
    };

    resize();
    window.addEventListener("resize", resize);

    // Blob configuration - fewer blobs for performance
    const blobs = colors.map((color, i) => ({
      x: width * (0.3 + i * 0.2),
      y: height * (0.3 + i * 0.2),
      vx: (Math.random() - 0.5) * 0.5,
      vy: (Math.random() - 0.5) * 0.5,
      radius: Math.min(width, height) * (0.3 + Math.random() * 0.2),
      color,
    }));

    const animate = () => {
      ctx.clearRect(0, 0, width, height);

      // Update and draw blobs
      blobs.forEach((blob) => {
        // Move blob
        blob.x += blob.vx;
        blob.y += blob.vy;

        // Bounce off edges
        if (blob.x < blob.radius * 0.5 || blob.x > width - blob.radius * 0.5) {
          blob.vx *= -1;
        }
        if (blob.y < blob.radius * 0.5 || blob.y > height - blob.radius * 0.5) {
          blob.vy *= -1;
        }

        // Draw gradient blob
        const gradient = ctx.createRadialGradient(
          blob.x,
          blob.y,
          0,
          blob.x,
          blob.y,
          blob.radius
        );
        gradient.addColorStop(0, blob.color + "60");
        gradient.addColorStop(0.5, blob.color + "30");
        gradient.addColorStop(1, blob.color + "00");

        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(blob.x, blob.y, blob.radius, 0, Math.PI * 2);
        ctx.fill();
      });

      animationRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(animationRef.current);
    };
  }, [colors]);

  return (
    <canvas
      ref={canvasRef}
      className={`w-full h-full ${className}`}
      style={{ filter: "blur(60px)" }}
    />
  );
};
