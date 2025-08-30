import React from "react";
import { motion, type Variants } from "framer-motion";
import { ArrowDown, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import ParticlesCanvas from "@/components/ParticlesCanvas";

const container: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.1 },
  },
};

const item: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 120 as any } },
};

export const Hero: React.FC = () => {
  return (
    <section id="home" className="relative h-[100svh] overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(1200px_500px_at_50%_-10%,rgba(99,102,241,0.25),transparent)]" />
      <ParticlesCanvas className="pointer-events-none" color="rgba(56,189,248,0.25)" density={0.08} />
      <div className="relative z-10 mx-auto flex h-full max-w-6xl flex-col items-center justify-center px-6 text-center">
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="space-y-6"
        >
          <motion.h1
            variants={item}
            className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight gradient-text glow"
          >
            Chaitany Mishra
          </motion.h1>
          <motion.p variants={item} className="text-lg sm:text-xl text-slate-300">
            Frontend Web Developer
          </motion.p>
          <motion.p variants={item} className="max-w-2xl mx-auto text-slate-400">
            Fast-learning and dedicated developer building responsive, user-friendly web applications.
          </motion.p>
          <motion.div variants={item}>
            <Button
              size="lg"
              className="glow group"
              onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
            >
              View My Work
              <ChevronRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-0.5" />
            </Button>
          </motion.div>
        </motion.div>

        <motion.div
          className="absolute bottom-10 left-1/2 -translate-x-1/2 text-slate-400"
          initial={{ opacity: 0, y: -5 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.8, repeat: Infinity, repeatType: "mirror" }}
        >
          <ArrowDown className="h-6 w-6" />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;

