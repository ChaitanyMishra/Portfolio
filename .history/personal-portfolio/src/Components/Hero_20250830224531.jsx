
import { Button } from "../components/ui/Button";
import  {motion}  from framer-motion'
import ParallaxBackdrop from './ui/ParallaxBackdrop'
import ParticleCanvas from './ui/ParticleCanvas'

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center items-center text-center pt-24 pb-12 bg-gradient-to-br from-indigo-900 via-purple-900 to-zinc-900 overflow-hidden">
      <ParallaxBackdrop />
      <ParticleCanvas />
      <motion.div className="max-w-2xl mx-auto relative z-10"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: {},
          visible: { transition: { staggerChildren: 0.12 } }
        }}
      >
        <motion.h1 className="text-5xl md:text-7xl font-extrabold text-white mb-4 drop-shadow-lg" variants={{ hidden: { opacity: 0, y: 24 }, visible: { opacity: 1, y: 0 } }}>
          Chaitanya Mishra
        </motion.h1>
        <motion.h2 className="text-2xl md:text-3xl font-semibold text-indigo-300 mb-6" variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}>
          Full Stack Developer
        </motion.h2>
        <motion.p className="text-lg md:text-xl text-white/80 mb-8" variants={{ hidden: { opacity: 0 }, visible: { opacity: 0.95 } }}>
          Building beautiful, performant web experiences with modern tech.
        </motion.p>
        <motion.div variants={{ hidden: { opacity: 0, scale: 0.96 }, visible: { opacity: 1, scale: 1 } }}>
          <Button className="text-lg px-8 py-3 shadow-xl hover:scale-105 hover:shadow-indigo-500/40">View My Work</Button>
        </motion.div>
      </motion.div>
    </section>
  );
}
