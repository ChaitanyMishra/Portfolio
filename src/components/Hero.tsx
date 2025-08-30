import { motion } from "framer-motion";
import ParticleBackground from "./ParticleBackground";
import { FiChevronDown } from "react-icons/fi";
import classNames from "classnames";

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

const Hero = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col justify-center items-center text-center overflow-hidden"
    >
      <ParticleBackground />
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="z-10 px-4"
      >
        <motion.h1
          variants={item}
          className="text-5xl md:text-7xl font-extrabold bg-gradient-to-r from-cyan to-accent bg-clip-text text-transparent drop-shadow-lg"
        >
          Chaitany Mishra
        </motion.h1>
        <motion.h2
          variants={item}
          className="mt-4 text-xl md:text-3xl font-semibold text-gray-300"
        >
          Frontend Web Developer
        </motion.h2>
        <motion.p
          variants={item}
          className="mt-2 max-w-xl mx-auto text-gray-400"
        >
          Fast-learning and dedicated developer crafting responsive user-friendly web
          applications.
        </motion.p>
        <motion.a
          variants={item}
          href="#projects"
          className={classNames(
            "inline-block mt-8 px-8 py-3 rounded-full text-lg font-semibold",
            "bg-accent hover:bg-opacity-90 text-white shadow-lg hover:shadow-accent/50",
            "transition-transform transform hover:scale-105"
          )}
        >
          View My Work
        </motion.a>
      </motion.div>
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-10 text-accent"
      >
        <FiChevronDown size={32} />
      </motion.div>
    </section>
  );
};

export default Hero;