import { Button } from "./ui/Button";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import ParallaxBackdrop from "./ui/ParallaxBackdrop";
import ParticleCanvas from "./ui/ParticleCanvas";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center items-center text-center pt-16 sm:pt-20 md:pt-24 pb-8 sm:pb-12 bg-gradient-to-br from-indigo-900 via-purple-900 to-zinc-900 overflow-hidden">
      <div className="hidden sm:block">
        <ParallaxBackdrop />
        <ParticleCanvas />
      </div>
      <motion.div
        className="max-w-2xl mx-auto relative z-10"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: {},
          visible: { transition: { staggerChildren: 0.12 } },
        }}
      >
        <motion.h1
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white mb-4 drop-shadow-lg px-4"
          variants={{
            hidden: { opacity: 0, y: 24 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          Chaitanya Mishra
        </motion.h1>
        <motion.h2
          className="text-xl sm:text-2xl md:text-3xl font-semibold text-indigo-300 mb-6 px-4"
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          Full Stack Developer
        </motion.h2>
        <motion.p
          className="text-base sm:text-lg md:text-xl text-white/80 mb-8 px-4"
          variants={{ hidden: { opacity: 0 }, visible: { opacity: 0.95 } }}
        >
          Building beautiful, performant web experiences with modern tech.
        </motion.p>

        <motion.div
          variants={{
            hidden: { opacity: 0, scale: 0.96 },
            visible: { opacity: 1, scale: 1 },
          }}
        >
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 px-4">
            <Button
              className="text-base sm:text-lg px-6 sm:px-8 py-3 shadow-xl hover:scale-105 hover:shadow-indigo-500/40 w-full sm:w-auto"
              onClick={() => {
                const el = document.getElementById('projects');
                if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
              }}
            >
              View My Work
            </Button>

            <button
              className="inline-block text-base sm:text-lg px-6 py-3 rounded-xl font-semibold transition-all duration-200 shadow-lg bg-white/6 text-white hover:bg-white/10 hover:scale-105 w-full sm:w-auto text-center"
              onClick={async () => {
                try {
                  const resumeUrl = `${import.meta.env.BASE_URL}resume.pdf`;
                  const response = await fetch(resumeUrl);
                  if (!response.ok) {
                    throw new Error('Failed to fetch resume');
                  }
                  const blob = await response.blob();
                  const url = window.URL.createObjectURL(blob);
                  const link = document.createElement('a');
                  link.href = url;
                  link.download = 'Chaitany_Mishra_Resume.pdf';
                  document.body.appendChild(link);
                  link.click();
                  document.body.removeChild(link);
                  window.URL.revokeObjectURL(url);
                } catch (error) {
                  console.error('Error downloading resume:', error);
                  // Fallback: open in new tab
                  const resumeUrl = `${import.meta.env.BASE_URL}resume.pdf`;
                  window.open(resumeUrl, '_blank');
                }
              }}
            >
              Download Resume
            </button>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
