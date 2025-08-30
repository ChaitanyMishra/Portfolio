import { useEffect, useRef } from "react";

interface Particle {
  x: number;
  y: number;
  radius: number;
  speedX: number;
  speedY: number;
}

const useCanvas = (draw: (ctx: CanvasRenderingContext2D, frameCount: number) => void) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let frameCount = 0;
    let animationFrameId: number;
    const render = () => {
      frameCount++;
      draw(ctx, frameCount);
      animationFrameId = requestAnimationFrame(render);
    };
    render();

    return () => cancelAnimationFrame(animationFrameId);
  }, [draw]);

  return canvasRef;
};

const ParticleBackground: React.FC = () => {
  const particles = useRef<Particle[]>([]);
  const canvasRef = useCanvas((ctx) => {
    const canvas = ctx.canvas;
    if (particles.current.length === 0) {
      const num = Math.floor((canvas.width + canvas.height) / 8);
      particles.current = Array.from({ length: num }).map(() => ({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: Math.random() * 2 + 0.5,
        speedX: (Math.random() - 0.5) * 0.5,
        speedY: (Math.random() - 0.5) * 0.5,
      }));
    }

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = "rgba(255,255,255,0.7)";
    particles.current.forEach((p) => {
      p.x += p.speedX;
      p.y += p.speedY;
      if (p.x < 0 || p.x > canvas.width) p.speedX = -p.speedX;
      if (p.y < 0 || p.y > canvas.height) p.speedY = -p.speedY;

      ctx.beginPath();
      ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
      ctx.fill();
    });
  });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener("resize", resize);
    return () => window.removeEventListener("resize", resize);
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 -z-10 opacity-40 pointer-events-none"
    />
  );
};

export default ParticleBackground;