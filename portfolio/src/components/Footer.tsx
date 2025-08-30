import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, ArrowUp, Heart, Code } from 'lucide-react';
import ParticleBackground from './ParticleBackground';

const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const socialLinks = [
    {
      icon: Github,
      href: 'https://github.com/chaitany-mishra',
      label: 'GitHub',
      color: 'hover:text-gray-300'
    },
    {
      icon: Linkedin,
      href: 'https://linkedin.com/in/chaitany-mishra',
      label: 'LinkedIn',
      color: 'hover:text-blue-400'
    },
    {
      icon: Mail,
      href: 'mailto:chaitany.mishra.tech@gmail.com',
      label: 'Email',
      color: 'hover:text-cyan-400'
    }
  ];

  const techStack = [
    'React.js',
    'TypeScript',
    'Tailwind CSS',
    'Framer Motion',
    'Node.js'
  ];

  return (
    <footer className="relative bg-gradient-to-br from-navy-950 via-navy-900 to-violet-950 overflow-hidden">
      <ParticleBackground className="opacity-30" />
      
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Main footer content */}
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-4"
          >
            <h3 className="text-2xl font-bold gradient-text">Chaitany Mishra</h3>
            <p className="text-gray-400 leading-relaxed">
              Frontend Developer passionate about creating beautiful, functional web experiences 
              that make a difference in people's lives.
            </p>
            <div className="flex items-center text-sm text-gray-500">
              <span>Based in Kanpur, India</span>
            </div>
          </motion.div>

          {/* Quick links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="space-y-4"
          >
            <h4 className="text-lg font-semibold text-white">Quick Links</h4>
            <nav className="space-y-2">
              {['About', 'Skills', 'Projects', 'Contact'].map((link, index) => (
                <motion.a
                  key={link}
                  href={`#${link.toLowerCase()}`}
                  className="block text-gray-400 hover:text-cyan-400 transition-colors"
                  whileHover={{ x: 5 }}
                  onClick={(e) => {
                    e.preventDefault();
                    const element = document.getElementById(link.toLowerCase());
                    element?.scrollIntoView({ behavior: 'smooth' });
                  }}
                >
                  {link}
                </motion.a>
              ))}
            </nav>
          </motion.div>

          {/* Contact info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-4"
          >
            <h4 className="text-lg font-semibold text-white">Get In Touch</h4>
            <div className="space-y-2 text-gray-400">
              <p>chaitany.mishra.tech@gmail.com</p>
              <p>+91 9305224208</p>
              <p>Available for freelance work</p>
            </div>
          </motion.div>
        </div>

        {/* Social links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex justify-center space-x-6 mb-8"
        >
          {socialLinks.map((social, index) => (
            <motion.a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className={`p-3 glass-card text-gray-400 ${social.color} transition-all duration-300 group`}
              whileHover={{ scale: 1.1, y: -5 }}
              whileTap={{ scale: 0.95 }}
              aria-label={social.label}
            >
              <social.icon className="w-5 h-5 group-hover:animate-pulse" />
            </motion.a>
          ))}
        </motion.div>

        {/* Tech stack */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mb-8"
        >
          <p className="text-gray-400 text-sm mb-3">Built with</p>
          <div className="flex flex-wrap justify-center gap-3">
            {techStack.map((tech, index) => (
              <motion.span
                key={tech}
                className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-xs text-cyan-300"
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                whileHover={{ scale: 1.1 }}
              >
                {tech}
              </motion.span>
            ))}
          </div>
        </motion.div>

        {/* Copyright */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="border-t border-white/10 pt-8"
        >
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex items-center text-gray-400 text-sm">
              <span>© 2024 Chaitany Mishra. Made with</span>
              <Heart className="w-4 h-4 text-red-400 mx-1 animate-pulse" />
              <span>and</span>
              <Code className="w-4 h-4 text-cyan-400 ml-1" />
            </div>
            
            <div className="text-gray-400 text-sm">
              <span>All rights reserved</span>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Back to top button */}
      <motion.button
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 p-3 glass-card text-cyan-400 hover:text-white hover:bg-cyan-500/20 transition-all duration-300 z-50 group"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.3, delay: 1 }}
        whileHover={{ scale: 1.1, y: -2 }}
        whileTap={{ scale: 0.9 }}
        aria-label="Back to top"
      >
        <ArrowUp className="w-5 h-5 group-hover:animate-bounce" />
      </motion.button>
    </footer>
  );
};

export default Footer;