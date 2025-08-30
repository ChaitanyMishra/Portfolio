import ParticleBackground from "./ParticleBackground";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  const socials = [
    {
      icon: <FaGithub size={24} />,
      href: "https://github.com/ChaitanyMishra", // placeholder
    },
    {
      icon: <FaLinkedin size={24} />,
      href: "https://linkedin.com/in/chaitanymishra", // placeholder
    },
    {
      icon: <FaEnvelope size={24} />,
      href: "mailto:chaitany.mishra.tech@gmail.com",
    },
  ];

  return (
    <footer className="relative py-12 bg-gradient-to-b from-transparent to-navy text-center">
      <ParticleBackground />
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex justify-center gap-6 mb-4">
          {socials.map((s) => (
            <motion.a
              whileHover={{ scale: 1.2, rotate: 10 }}
              whileTap={{ scale: 0.9 }}
              key={s.href}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-accent transition-colors"
            >
              {s.icon}
            </motion.a>
          ))}
        </div>
        <p className="text-sm text-gray-500 mb-6">
          © {new Date().getFullYear()} Chaitany Mishra. Built with React, Tailwind CSS, and
          Framer Motion.
        </p>
        <motion.a
          href="#hero"
          initial={{ y: 0 }}
          animate={{ y: [0, -10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="inline-block p-3 rounded-full bg-accent text-white shadow-lg hover:shadow-accent/50"
        >
          ↑
        </motion.a>
      </div>
    </footer>
  );
};

export default Footer;