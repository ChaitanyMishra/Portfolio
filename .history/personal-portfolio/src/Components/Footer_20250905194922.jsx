

import { motion } from "framer-motion";
import { SiGithub, SiLinkedin, SiGmail } from "react-icons/si";
import { FaHeart, FaCode, FaRocket, FaTwitter } from "react-icons/fa";
import { useTheme } from "../contexts/ThemeContext";
void motion;

const socialLinks = [
  { 
    name: "GitHub", 
    url: "https://github.com/ChaitanyMishra", 
    icon: SiGithub,
    color: "hover:text-gray-300",
    bgColor: "hover:bg-gray-800/50"
  },
  { 
    name: "LinkedIn", 
    url: "https://www.linkedin.com/in/chaitany-dev-hash/", 
    icon: SiLinkedin,
    color: "hover:text-blue-400",
    bgColor: "hover:bg-blue-500/20"
  },
  { 
    name: "Email", 
    url: "mailto:chaitany.mishra.tech@gmail.com", 
    icon: SiGmail,
    color: "hover:text-red-400",
    bgColor: "hover:bg-red-500/20"
  },
  { 
    name: "Twitter", 
    url: "https://twitter.com/chaitany_dev", 
    icon: SiTwitter,
    color: "hover:text-cyan-400",
    bgColor: "hover:bg-cyan-500/20"
  },
];

const Footer = () => {
  const { theme } = useTheme();
  
  return (
    <motion.footer
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className={`w-full py-16 ${theme.colors.secondary} relative overflow-hidden`}
    >
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-96 h-96 bg-white/5 rounded-full blur-3xl" />
      </div>
      
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Brand Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <h3 className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
              Chaitany Mishra
            </h3>
            <p className="text-white/70 leading-relaxed">
              Frontend Developer passionate about creating beautiful, functional, and user-friendly web experiences. 
              Let's build something amazing together!
            </p>
            <div className="flex gap-4">
              {socialLinks.map((link, index) => {
                const Icon = link.icon;
                return (
                  <motion.a
                    key={link.name}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-12 h-12 bg-white/10 ${link.bgColor} rounded-lg flex items-center justify-center text-white text-xl transition-all duration-300 ${link.color}`}
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    title={link.name}
                  >
                    <Icon />
                  </motion.a>
                );
              })}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <h4 className="text-xl font-semibold text-white mb-4">Quick Links</h4>
            <div className="space-y-3">
              {['About', 'Skills', 'Projects', 'Contact'].map((link, index) => (
                <motion.a
                  key={link}
                  href={`#${link.toLowerCase()}`}
                  className="block text-white/70 hover:text-cyan-300 transition-colors duration-300 hover:translate-x-2"
                  whileHover={{ x: 8 }}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  {link}
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Tech Stack */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <h4 className="text-xl font-semibold text-white mb-4">Tech Stack</h4>
            <div className="flex flex-wrap gap-2">
              {['React', 'JavaScript', 'HTML5', 'CSS3', 'Tailwind', 'Git'].map((tech, index) => (
                <motion.span
                  key={tech}
                  className="px-3 py-1 bg-white/10 text-white/80 text-sm rounded-full border border-white/20 hover:bg-white/20 transition-colors"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.05 }}
                >
                  {tech}
                </motion.span>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
          className="pt-8 border-t border-white/20"
        >
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-white/60 text-sm">
              &copy; {new Date().getFullYear()} Chaitany Mishra. All rights reserved.
            </div>
            <div className="flex items-center gap-2 text-white/60 text-sm">
              <span>Made with</span>
              <motion.span
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 1, repeat: Infinity, repeatDelay: 2 }}
                className="text-red-400"
              >
                <FaHeart />
              </motion.span>
              <span>using</span>
              <FaCode className="text-cyan-400" />
              <span>React, Tailwind CSS, and Framer Motion</span>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.footer>
  );
}

export default Footer
