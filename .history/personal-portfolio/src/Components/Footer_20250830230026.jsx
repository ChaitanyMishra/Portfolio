

import { motion } from "framer-motion";
void motion;
"use client";

import { useRef, useEffect } from "react";
import { motion } from "framer-motion";

const socialLinks = [
  { name: "GitHub", url: "https://github.com/ChaitanyMishra", icon: "🌐" },
  { name: "LinkedIn", url: "https://linkedin.com/in/chaitanya-mishra-1b7b2a1b2", icon: "💼" },
  { name: "Email", url: "mailto:chaitanyamishra@gmail.com", icon: "✉️" },
];

// Canvas for animated background particles/glow
const FooterCanvas = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    let animationFrameId = 0;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = Math.max(200, Math.floor(window.innerHeight / 4)); // footer height
    };
    resize();
    window.addEventListener("resize", resize);

    // Generate particles
    const particles = Array.from({ length: 60 }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      r: Math.random() * 2 + 1,
      dx: (Math.random() - 0.5) * 0.5,
      dy: (Math.random() - 0.5) * 0.5,
      color: `hsla(${Math.random() * 360}, 80%, 60%, 0.6)`,
    }));

    const animate = () => {
      if (!ctx) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach((p) => {
        p.x += p.dx;
        p.y += p.dy;

        // Bounce edges
        if (p.x < 0 || p.x > canvas.width) p.dx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.dy *= -1;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.fill();
      });
      animationFrameId = requestAnimationFrame(animate);
    };
    animate();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full z-0 pointer-events-none"
    />
  );
};

const Footer = () => {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="relative w-full py-12 text-center overflow-hidden bg-gradient-to-br from-indigo-800 to-indigo-900 text-white/90 border-t border-slate-200/10 shadow-lg"
    >
      {/* Animated Canvas Background */}
      <FooterCanvas />

      <div className="relative z-10 flex flex-col items-center gap-3">
        <div className="text-lg font-semibold tracking-wide mb-2">
          Let's connect and build something amazing!
        </div>

        <motion.div
          className="flex gap-6 justify-center mb-3"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.12 } },
          }}
        >
          {socialLinks.map((link) => (
            <motion.a
              key={link.name}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
              className="flex items-center gap-1 text-xl group"
              whileHover={{ scale: 1.05 }}
            >
              <motion.span
                className="mr-1"
                whileHover={{ scale: 1.4, rotate: 15 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                {link.icon}
              </motion.span>
              <span className="group-hover:text-indigo-300 transition-colors">{link.name}</span>
            </motion.a>
          ))}
        </motion.div>

        <div className="text-xs text-white/70">&copy; {new Date().getFullYear()} Chaitanya Mishra. All rights reserved.</div>
        <div className="text-xs text-white/40 mt-1">Made with React, Tailwind CSS, shadcn/ui, and Framer Motion.</div>

        {/* Optional Scroll Up Button */}
        <motion.button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="mt-4 px-3 py-2 rounded-full bg-indigo-500/20 hover:bg-indigo-500/40 text-white shadow-lg"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          ↑ Top
        </motion.button>
      </div>
    </motion.footer>
  );
};

export default Footer;
