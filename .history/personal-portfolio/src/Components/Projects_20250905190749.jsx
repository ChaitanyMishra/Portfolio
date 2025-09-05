

import { motion } from "framer-motion";
import { useTheme } from "../../contexts/ThemeContext";
import { Card } from "../components/ui/Card";
import { Button } from "../components/ui/Button";
import { SiGithub } from "react-icons/si";
import { FaGlobe, FaExternalLinkAlt } from "react-icons/fa";
void motion;

const projects = [
  {
    title: "SnapFetch — Image Search Engine",
    image: "/chaitany.jpg",
    description: (
      <ul className="list-disc ml-5 text-white/80">
        <li>Responsive image search engine using Unsplash and Pixabay APIs.</li>
        <li>Infinite scroll, live search, and image preview/download features.</li>
        <li>Deployed on Vercel with optimized performance.</li>
      </ul>
    ),
    github: "https://github.com/ChaitanyMishra/SnapFetch",
    live: "https://snapfetch.vercel.app/",
  },
  {
    title: "API Image Generator (SnapFetch API Image Generator)",
    image: "/vite.svg",
    description: (
      <ul className="list-disc ml-5 text-white/80">
        <li>Text-to-image generator using an API endpoint (project: api-image-generator).</li>
        <li>Live demo and GitHub repository provided below.</li>
      </ul>
    ),
    github: "https://github.com/ChaitanyMishra/api-image-generator",
    live: "https://api-image-generator-j7bd-git-main-chaitanymishras-projects.vercel.app/",
  },
  {
    title: "Mini Projects Collection",
    image: "/react.svg",
    description: (
      <ul className="list-disc ml-5 text-white/80">
        <li>Collection of 10+ mini apps demonstrating JS, React, and UI patterns.</li>
        <li>Code and demos on GitHub (daily-dev-evolution).</li>
      </ul>
    ),
    github: "https://github.com/ChaitanyMishra/daily-dev-evolution",
    live: "",
  },
];

export default function Projects() {
  return (
    <section className="py-20 px-6 bg-gradient-to-br from-zinc-900 via-indigo-900 to-purple-900">
      <h2 className="text-3xl font-bold mb-8 text-center text-indigo-400">Projects</h2>
      <div className="relative max-w-5xl mx-auto">
        <div className="absolute left-1/2 top-8 bottom-8 w-1 bg-gradient-to-b from-indigo-500 via-purple-500 to-pink-500 rounded-full z-0" style={{transform: 'translateX(-50%)'}}></div>
        <div className="flex flex-col gap-12">
          {projects.map((project, idx) => {
            const isLeft = idx % 2 === 0;
            return (
              <motion.div key={project.title} initial={{ opacity: 0, x: isLeft ? -80 : 80 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.7, delay: idx * 0.08 }} viewport={{ once: true }} className={`relative z-10 w-full md:w-3/4 ${isLeft ? 'md:ml-0 md:pl-8' : 'md:ml-auto md:pr-8'}`}>
                <motion.div className={`hidden md:block absolute top-1/2 h-1 transform -translate-y-1/2 ${isLeft ? 'right-0 bg-gradient-to-r from-transparent via-indigo-500 to-purple-500' : 'left-0 bg-gradient-to-l from-transparent via-purple-500 to-pink-500'}`} style={{ width: '2rem', [isLeft ? 'right' : 'left']: '-2rem' }} initial={{ scaleX: 0 }} whileInView={{ scaleX: 1 }} transition={{ duration: 0.5 }} viewport={{ once: true }} />
                <Card className="max-w-4xl p-0 overflow-hidden group">
                  <img src={project.image} alt={project.title} className="w-full h-56 object-cover rounded-t-2xl group-hover:scale-105 transition-transform duration-300" />
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-indigo-300 mb-2">{project.title}</h3>
                    {project.description}
                    <div className="flex gap-4 mt-4">
                      <Button as="a" href={project.github} target="_blank" className="flex items-center gap-2">
                        <SiGithub /> GitHub
                      </Button>
                      {project.live && (
                        <Button as="a" href={project.live} target="_blank" className="flex items-center gap-2 bg-pink-500/80">
                          <FaGlobe /> Live
                        </Button>
                      )}
                    </div>
                  </div>
                </Card>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  );
}
