import React from 'react';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import ParticleBackground from './ParticleBackground';

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        staggerChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  const scrollToNext = () => {
    const aboutSection = document.getElementById('about');
    aboutSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-hero-gradient overflow-hidden">
      <ParticleBackground />
      
      {/* Main Content */}
      <motion.div
        className="relative z-10 text-center px-6 max-w-4xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div
          variants={itemVariants}
          className="animate-float"
        >
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6">
            <span className="text-gradient animate-gradient bg-gradient-to-r from-primary-400 via-accent-500 to-primary-600 bg-300% bg-clip-text text-transparent">
              Chaitany Mishra
            </span>
          </h1>
        </motion.div>

        <motion.div
          variants={itemVariants}
          className="animate-float"
          style={{ animationDelay: '1s' }}
        >
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold mb-4 text-primary-200">
            Frontend Web Developer
          </h2>
        </motion.div>

        <motion.div
          variants={itemVariants}
          className="animate-float"
          style={{ animationDelay: '2s' }}
        >
          <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed">
            Fast-learning and dedicated developer passionate about creating responsive, 
            user-friendly web applications. Building impactful solutions with modern technologies.
          </p>
        </motion.div>

        <motion.div
          variants={itemVariants}
          className="animate-float"
          style={{ animationDelay: '3s' }}
        >
          <button
            onClick={scrollToNext}
            className="glow-button bg-gradient-to-r from-primary-600 to-accent-600 hover:from-primary-500 hover:to-accent-500 text-white font-semibold py-4 px-8 rounded-full text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-primary-500/50"
          >
            View My Work
          </button>
        </motion.div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2, duration: 0.8 }}
        onClick={scrollToNext}
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="flex flex-col items-center text-primary-400 hover:text-primary-300 transition-colors"
        >
          <span className="text-sm mb-2 font-medium">Scroll Down</span>
          <ChevronDown size={24} />
        </motion.div>
      </motion.div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background-dark/20 pointer-events-none" />
    </section>
  );
};

export default Hero;