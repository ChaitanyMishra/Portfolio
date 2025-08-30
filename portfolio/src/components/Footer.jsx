import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, ArrowUp, Heart, Code } from 'lucide-react';
import { ParticleSystem } from '../lib/particles';

const Footer = () => {
  const canvasRef = useRef(null);
  const particleSystemRef = useRef(null);
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    if (canvasRef.current && !particleSystemRef.current) {
      particleSystemRef.current = new ParticleSystem(canvasRef.current, {
        particleCount: 30,
        particleSize: 1.5,
        particleSpeed: 0.2,
        particleColor: 'rgba(6, 182, 212, 0.3)',
        connectionDistance: 100
      });
    }

    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 500);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const socialLinks = [
    {
      name: 'GitHub',
      icon: Github,
      href: 'https://github.com/chaitanymishra',
      color: 'hover:text-gray-300'
    },
    {
      name: 'LinkedIn',
      icon: Linkedin,
      href: 'https://linkedin.com/in/chaitanymishra',
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
    'React.js', 'Tailwind CSS', 'Framer Motion', 'Vite', 'JavaScript ES6+'
  ];

  return (
    <footer className="relative bg-gradient-to-br from-dark-950 via-dark-900 to-dark-800 overflow-hidden">
      {/* Animated Particle Background */}
      <canvas
        ref={canvasRef}
        className="particle-canvas"
        style={{ zIndex: 1 }}
      />
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-dark-950/80 to-transparent z-10" />
      
      {/* Main Footer Content */}
      <div className="relative z-20 pt-20 pb-8">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Top Section */}
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h3 className="text-3xl sm:text-4xl font-bold mb-6">
                <span className="gradient-text">Let's Build Something Amazing</span>
              </h3>
              <p className="text-xl text-gray-400 max-w-2xl mx-auto mb-8">
                Ready to turn your ideas into reality? I'm just a message away.
              </p>
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-primary inline-flex items-center gap-2"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                <Mail className="w-5 h-5" />
                Start a Conversation
              </motion.a>
            </motion.div>
          </div>

          {/* Divider */}
          <div className="w-full h-px bg-gradient-to-r from-transparent via-cyan-500/30 to-transparent mb-12" />

          {/* Bottom Section */}
          <div className="grid md:grid-cols-3 gap-8 text-center md:text-left">
            {/* Brand */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h4 className="text-2xl font-bold gradient-text mb-4">
                Chaitany Mishra
              </h4>
              <p className="text-gray-400 leading-relaxed">
                Frontend Web Developer passionate about creating 
                beautiful, functional, and user-friendly web experiences.
              </p>
            </motion.div>

            {/* Quick Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="md:text-center"
            >
              <h5 className="text-lg font-semibold text-white mb-4">Quick Links</h5>
              <nav className="space-y-2">
                {['About', 'Projects', 'Contact'].map((link) => (
                  <motion.a
                    key={link}
                    href={`#${link.toLowerCase()}`}
                    whileHover={{ x: 5 }}
                    className="block text-gray-400 hover:text-cyan-400 transition-colors"
                    onClick={(e) => {
                      e.preventDefault();
                      document.getElementById(link.toLowerCase())?.scrollIntoView({ behavior: 'smooth' });
                    }}
                  >
                    {link}
                  </motion.a>
                ))}
              </nav>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="md:text-right"
            >
              <h5 className="text-lg font-semibold text-white mb-4">Connect</h5>
              <div className="space-y-2 mb-4">
                <p className="text-gray-400">chaitany.mishra.tech@gmail.com</p>
                <p className="text-gray-400">+91 9305224208</p>
                <p className="text-gray-400">Kanpur, India</p>
              </div>
              
              {/* Social Links */}
              <div className="flex justify-center md:justify-end gap-4">
                {socialLinks.map((social) => {
                  const Icon = social.icon;
                  return (
                    <motion.a
                      key={social.name}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.2, rotate: 10 }}
                      whileTap={{ scale: 0.9 }}
                      className={`w-10 h-10 bg-dark-700 rounded-full flex items-center justify-center text-gray-400 ${social.color} transition-colors border border-gray-600 hover:border-current`}
                    >
                      <Icon className="w-5 h-5" />
                    </motion.a>
                  );
                })}
              </div>
            </motion.div>
          </div>

          {/* Tech Stack */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="mt-12 pt-8 border-t border-gray-800"
          >
            <div className="text-center">
              <p className="text-gray-400 mb-4 flex items-center justify-center gap-2">
                <Code className="w-4 h-4" />
                Built with modern technologies:
              </p>
              <div className="flex flex-wrap justify-center gap-2">
                {techStack.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 bg-dark-700 text-cyan-400 rounded-full text-sm border border-cyan-500/20"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Copyright */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="mt-8 pt-8 border-t border-gray-800 text-center"
          >
            <p className="text-gray-400 flex items-center justify-center gap-2">
              © 2024 Chaitany Mishra. Made with 
              <Heart className="w-4 h-4 text-red-500 animate-pulse" />
              and lots of coffee.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Back to Top Button */}
      <motion.button
        initial={{ opacity: 0, scale: 0 }}
        animate={{ 
          opacity: showBackToTop ? 1 : 0, 
          scale: showBackToTop ? 1 : 0 
        }}
        transition={{ duration: 0.3 }}
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-full flex items-center justify-center shadow-lg hover:shadow-cyan-500/25 hover:scale-110 transition-all duration-300 z-50"
        whileHover={{ y: -2 }}
        whileTap={{ scale: 0.9 }}
      >
        <ArrowUp className="w-5 h-5" />
      </motion.button>
    </footer>
  );
};

export default Footer;