
import { motion } from "framer-motion";
import Tilt from "react-parallax-tilt";

export default function About() {
  return (
    <section className="min-h-[60vh] flex flex-col md:flex-row items-center justify-center gap-12 py-20 px-6 bg-gradient-to-br from-zinc-900 via-indigo-900 to-purple-900">
      <motion.div
        initial={{ opacity: 0, x: -40 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="flex-1 flex justify-center"
      >
        <Tilt glareEnable={true} glareMaxOpacity={0.3} scale={1.05} className="rounded-full shadow-2xl">
          <img
            src="/public/chaitany.jpg"
            alt="Profile"
            className="w-48 h-48 rounded-full object-cover border-4 border-indigo-500 shadow-lg hover:shadow-pink-500/40 transition-all duration-300"
          />
        </Tilt>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, x: 40 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="flex-1 max-w-xl text-white/90"
      >
        <h2 className="text-3xl font-bold mb-4 text-indigo-400">About Me</h2>
        <p className="text-lg mb-2">
          Hi! I'm Chaitanya, a passionate developer who loves crafting beautiful and performant web apps. I specialize in React, Node.js, and modern UI/UX.
        </p>
        <p className="text-lg">
          Always learning, always building. Let's create something amazing together!
        </p>
      </motion.div>
    </section>
  );
}