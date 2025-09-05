import { motion } from "framer-motion";
import { Button } from "../components/ui/Button";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center items-center text-center pt-24 pb-12 bg-gradient-to-br from-indigo-900 via-purple-900 to-zinc-900">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-2xl mx-auto"
      >
        <h1 className="text-5xl md:text-7xl font-extrabold text-white mb-4 drop-shadow-lg">
          Chaitanya Mishra
        </h1>
        <h2 className="text-2xl md:text-3xl font-semibold text-indigo-300 mb-6">
          Full Stack Developer
        </h2>
        <p className="text-lg md:text-xl text-white/80 mb-8">
          Building beautiful, performant web experiences with modern tech.
        </p>
        <Button className="text-lg px-8 py-3 shadow-xl hover:scale-105 hover:shadow-indigo-500/40">
          View My Work
        </Button>
      </motion.div>
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.3 }}
          transition={{ duration: 1.2 }}
          className="w-full h-full bg-gradient-to-tr from-pink-500/30 via-indigo-500/20 to-purple-500/30 blur-3xl"
        />
      </div>
    </section>
  );
}
