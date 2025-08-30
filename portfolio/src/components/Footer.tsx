import React from "react";
import { motion } from "framer-motion";
import ParticlesCanvas from "@/components/ParticlesCanvas";
import { Github, Linkedin, Mail, ArrowUp } from "lucide-react";

export const Footer: React.FC = () => {
  return (
    <footer className="relative mt-24 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(1200px_400px_at_50%_120%,rgba(99,102,241,0.25),transparent)]" />
      <ParticlesCanvas className="pointer-events-none" color="rgba(34,211,238,0.18)" density={0.06} />
      <div className="relative z-10 mx-auto max-w-6xl px-6 py-16">
        <div className="flex flex-col items-center gap-6">
          <div className="flex items-center gap-4">
            <motion.a whileHover={{ scale: 1.08, rotate: 2 }} href="https://github.com/" target="_blank" rel="noreferrer" className="p-3 rounded-full bg-white/5 border border-white/10">
              <Github className="h-5 w-5" />
            </motion.a>
            <motion.a whileHover={{ scale: 1.08, rotate: -2 }} href="https://linkedin.com/" target="_blank" rel="noreferrer" className="p-3 rounded-full bg-white/5 border border-white/10">
              <Linkedin className="h-5 w-5" />
            </motion.a>
            <motion.a whileHover={{ scale: 1.08 }} href="mailto:chaitany.mishra.tech@gmail.com" className="p-3 rounded-full bg-white/5 border border-white/10">
              <Mail className="h-5 w-5" />
            </motion.a>
          </div>
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="group flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm hover:bg-white/10"
          >
            Back to Top
            <ArrowUp className="h-4 w-4 transition-transform group-hover:-translate-y-0.5" />
          </button>
          <div className="text-center text-slate-400 text-xs">
            © {new Date().getFullYear()} Chaitany Mishra. Built with React, Tailwind, shadcn-style UI, Framer Motion.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

