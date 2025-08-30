import React, { useEffect, useRef } from "react";

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  r: number;
}

interface ParticlesCanvasProps {
  className?: string;
  density?: number; // particles per 10,000 px^2
  color?: string; // rgba string
}

// Performance-optimized particles with requestAnimationFrame and pooled arrays
export const ParticlesCanvas: React.FC<ParticlesCanvasProps> = ({
  className,
  density = 0.06,
  color = "rgba(88, 28, 135, 0.6)", // violet-ish
}) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const particlesRef = useRef<Particle[]>([]);
  const rafRef = useRef<number | null>(null);
  const dpiRef = useRef<number>(1);

  useEffect(() => {
    const canvas = canvasRef.current!;
    const ctx = canvas.getContext("2d", { alpha: true })!;

    function resize() {
      const { innerWidth, innerHeight } = window;
      const dpi = Math.min(window.devicePixelRatio || 1, 2);
      dpiRef.current = dpi;
      canvas.width = Math.floor(innerWidth * dpi);
      canvas.height = Math.floor(innerHeight * dpi);
      canvas.style.width = `${innerWidth}px`;
      canvas.style.height = `${innerHeight}px`;

      // Compute number of particles based on area
      const area = innerWidth * innerHeight;
      const count = Math.floor((area / 10000) * density);
      const particles = particlesRef.current;
      particles.length = count;
      for (let i = 0; i < count; i++) {
        const existing = particles[i];
        if (existing) continue;
        particles[i] = {
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          vx: (Math.random() - 0.5) * 0.25 * dpi,
          vy: (Math.random() - 0.5) * 0.25 * dpi,
          r: Math.random() * 1.8 * dpi + 0.6 * dpi,
        };
      }
    }

    resize();
    window.addEventListener("resize", resize);

    function animate() {
      rafRef.current = requestAnimationFrame(animate);
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.globalCompositeOperation = "lighter";
      ctx.fillStyle = color;
      const particles = particlesRef.current;
      const width = canvas.width;
      const height = canvas.height;
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0 || p.x > width) p.vx *= -1;
        if (p.y < 0 || p.y > height) p.vy *= -1;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    animate();
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      window.removeEventListener("resize", resize);
    };
  }, [color, density]);

  return (
    <canvas
      ref={canvasRef}
      className={className}
      aria-hidden
      style={{ position: "absolute", inset: 0, width: "100%", height: "100%" }}
    />
  );
};

export default ParticlesCanvas;

