import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  Github, 
  Linkedin, 
  Mail, 
  ArrowUp, 
  Heart, 
  Code, 
  Palette,
  Zap
} from 'lucide-react';
import ParticleBackground from './ParticleBackground';

const BackToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <motion.button
      className={`fixed bottom-8 right-8 z-50 bg-gradient-to-r from-primary-600 to-accent-600 hover:from-primary-500 hover:to-accent-500 text-white p-4 rounded-full shadow-2xl transition-all duration-300 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'
      }`}
      onClick={scrollToTop}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ 
        opacity: isVisible ? 1 : 0, 
        y: isVisible ? 0 : 20 
      }}
      transition={{ duration: 0.3 }}
    >
      <ArrowUp className="w-6 h-6" />
    </motion.button>
  );
};

const Footer = () => {
  const socialLinks = [
    {
      name: 'GitHub',
      icon: Github,
      href: 'https://github.com/chaitany',
      color: 'hover:text-gray-300'
    },
    {
      name: 'LinkedIn',
      icon: Linkedin,
      href: 'https://linkedin.com/in/chaitany-mishra',
      color: 'hover:text-blue-400'
    },
    {
      name: 'Email',
      icon: Mail,
      href: 'mailto:chaitany.mishra.tech@gmail.com',
      color: 'hover:text-red-400'
    }
  ];

  const techStack = [
    { name: 'React.js', icon: Code },
    { name: 'Tailwind CSS', icon: Palette },
    { name: 'Framer Motion', icon: Zap }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <>
      <footer className="relative bg-hero-gradient overflow-hidden">
        <ParticleBackground className="opacity-30" />
        
        <div className="relative z-10 container mx-auto px-6 py-16">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="max-w-4xl mx-auto text-center"
          >
            {/* Main Footer Content */}
            <motion.div variants={itemVariants} className="mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                <span className="text-gradient">Let's Build Something Amazing</span>
              </h2>
              <p className="text-gray-300 text-lg max-w-2xl mx-auto leading-relaxed">
                Ready to bring your ideas to life? I'm always excited to work on new projects 
                and collaborate with creative minds.
              </p>
            </motion.div>

            {/* Social Links */}
            <motion.div variants={itemVariants} className="mb-12">
              <h3 className="text-xl font-semibold text-white mb-6">Connect With Me</h3>
              <div className="flex justify-center space-x-8">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`group flex flex-col items-center space-y-2 text-gray-400 ${social.color} transition-all duration-300`}
                    whileHover={{ y: -5 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <div className="w-16 h-16 bg-background-card border border-gray-700/50 rounded-2xl flex items-center justify-center group-hover:border-primary-500/50 group-hover:bg-primary-500/10 transition-all duration-300">
                      <social.icon className="w-8 h-8 group-hover:scale-110 transition-transform duration-300" />
                    </div>
                    <span className="text-sm font-medium">{social.name}</span>
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* Tech Stack */}
            <motion.div variants={itemVariants} className="mb-12">
              <h3 className="text-lg font-semibold text-white mb-4">Built With</h3>
              <div className="flex justify-center items-center space-x-6">
                {techStack.map((tech, index) => (
                  <motion.div
                    key={tech.name}
                    className="flex items-center space-x-2 text-gray-400"
                    whileHover={{ scale: 1.05 }}
                  >
                    <tech.icon className="w-5 h-5 text-primary-400" />
                    <span className="text-sm font-medium">{tech.name}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Divider */}
            <motion.div variants={itemVariants} className="mb-8">
              <div className="w-full h-px bg-gradient-to-r from-transparent via-gray-600 to-transparent" />
            </motion.div>

            {/* Copyright and Additional Info */}
            <motion.div variants={itemVariants} className="space-y-4">
              <div className="flex flex-col md:flex-row justify-center items-center space-y-2 md:space-y-0 md:space-x-6 text-gray-400 text-sm">
                <div className="flex items-center space-x-2">
                  <span>© 2025 Chaitany Mishra</span>
                  <span>•</span>
                  <span>All rights reserved</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span>Made with</span>
                  <Heart className="w-4 h-4 text-red-400 animate-pulse" />
                  <span>in India</span>
                </div>
              </div>
              
              <p className="text-gray-500 text-xs max-w-2xl mx-auto">
                This portfolio showcases my journey as a Frontend Developer. 
                Every project represents hours of learning, coding, and passion for creating 
                beautiful, functional web experiences.
              </p>
            </motion.div>

            {/* Call to Action */}
            <motion.div
              variants={itemVariants}
              className="mt-12 pt-8 border-t border-gray-700/50"
            >
              <motion.button
                className="glow-button bg-gradient-to-r from-primary-600 to-accent-600 hover:from-primary-500 hover:to-accent-500 text-white font-semibold py-3 px-8 rounded-full transition-all duration-300 transform hover:scale-105 inline-flex items-center space-x-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => {
                  const contactSection = document.getElementById('contact');
                  contactSection?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                <Mail className="w-5 h-5" />
                <span>Start a Conversation</span>
              </motion.button>
            </motion.div>
          </motion.div>
        </div>

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-background-dark/50 to-transparent pointer-events-none" />
      </footer>

      {/* Back to Top Button */}
      <BackToTopButton />
    </>
  );
};

export default Footer;