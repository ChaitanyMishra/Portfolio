

import { motion } from "framer-motion";
import { SiGithub, SiLinkedin, SiGmail, SiTwitter } from "react-icons/si";
import { FaHeart, FaCode, FaRocket } from "react-icons/fa";
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
  return (
    <motion.footer
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="w-full py-8 text-center bg-gradient-to-br from-indigo-900 via-purple-900 to-zinc-900 text-white/80 border-t border-white/10 dark:border-zinc-800/40 shadow-lg"
    >
      <div className="flex flex-col items-center gap-2">
        <div className="text-lg font-semibold tracking-wide mb-2">Let's connect and build something amazing!</div>
        <div className="flex gap-6 justify-center mb-2">
          {socialLinks.map(link => (
            <a
              key={link.name}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-indigo-400 transition-colors text-xl"
            >
              <span className="mr-2">{link.icon}</span>{link.name}
            </a>
          ))}
        </div>
        <div className="text-xs text-white/60">
          &copy; {new Date().getFullYear()} Chaitanya Mishra. All rights reserved.
        </div>
        <div className="text-xs text-white/40 mt-1">Made with React, Tailwind CSS, shadcn/ui, and Framer Motion.</div>
      </div>
    </motion.footer>
  );
}

export default Footer
