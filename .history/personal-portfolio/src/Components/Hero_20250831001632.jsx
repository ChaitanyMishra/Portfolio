
import { Button } from "../components/ui/Button";
import  {motion}  from "framer-motion"
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
        <motion.h1 
  className="text-5xl md:text-7xl font-extrabold mb-4 drop-shadow-lg 
             bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-500 
             bg-clip-text text-transparent animate-gradient-x"
  variants={{ hidden: { opacity: 0, y: 24 }, visible: { opacity: 1, y: 0 } }}
>
  Chaitanya Mishra
</motion.h1>

        <motion.h2 className="text-2xl md:text-3xl font-semibold text-indigo-300 mb-6" variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}>
          Full Stack Developer
        </motion.h2>
        <motion.p className="text-lg md:text-xl text-white/80 mb-8" variants={{ hidden: { opacity: 0 }, visible: { opacity: 0.95 } }}>
          Building beautiful, performant web experiences with modern tech.
        </motion.p>
        <motion.div variants={{ hidden: { opacity: 0, scale: 0.96 }, visible: { opacity: 1, scale: 1 } }} className="flex gap-4 justify-center">
          <Button as="a" href="#projects" className="relative text-lg px-8 py-3 shadow-xl hover:scale-105 hover:shadow-indigo-500/40">
    <span className="relative z-10">View My Work</span>
    <span className="absolute inset-0 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 opacity-30 blur-xl rounded-full animate-pulse" />
  </Button>
  <Button as="a" href="/resume.pdf" download className="relative text-lg px-6 py-3 shadow-xl btn-primary hover:scale-105">
    Download Resume
  </Button>

        </motion.div>
      </motion.div>
    </section>
  );
}
