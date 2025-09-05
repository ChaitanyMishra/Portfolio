

import { motion } from "framer-motion";
void motion;
import { Card } from "../components/ui/Card";
import { Button } from "../components/ui/Button";
import { SiGithub } from "react-icons/si";
import { FaGlobe } from "react-icons/fa";

const projects = [
  {
    title: "SnapFetch — Image Search Engine",
  image: "https://images.unsplash.com/photo-1506765515384-028b60a970df?q=80&w=1400&auto=format&fit=crop&ixlib=rb-4.0.3&s=abc123",
    description: (
      <ul className="list-disc ml-5 text-white/80">
        <li>Responsive image search engine using Unsplash and Pixabay APIs.</li>
        <li>Infinite scroll, live search, and image preview/download features.</li>
        <li>Deployed on Vercel with optimized performance.</li>
      </ul>
    ),
  github: "https://github.com/ChaitanyMishra/api-image-generator",
  live: "https://api-image-generator-j7bd-git-main-chaitanymishras-projects.vercel.app/",
  },
  // API Image Generator removed per request
  {
    title: "Mini Projects Collection",
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1200&auto=format&fit=crop&ixlib=rb-4.0.3&s=3e5f9c0d8f8f6f1d7a9e8e9a6d9b1e2a",
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
    <section id="projects" className="py-20 px-6">
      <h2 className="text-3xl font-bold mb-8 text-center text-indigo-600">Projects</h2>
      <div className="relative max-w-5xl mx-auto">
  <div className="absolute left-1/2 top-8 bottom-8 w-1 rounded-full z-0" style={{transform: 'translateX(-50%)', background: 'linear-gradient(180deg,#06b6d4, #7c3aed, #ec4899)'}}></div>
        <div className="flex flex-col gap-12">
          {projects.map((project, idx) => {
            const isLeft = idx % 2 === 0;
            return (
              <motion.div key={project.title} initial={{ opacity: 0, x: isLeft ? -120 : 120, y: 20 }} whileInView={{ opacity: 1, x: 0, y: 0 }} transition={{ duration: 0.8, delay: idx * 0.08 }} viewport={{ once: true }} className={`relative z-10 w-full md:w-5/12 ${isLeft ? 'md:ml-0 md:pl-12' : 'md:ml-auto md:pr-12'}`}>
                <motion.div className={`hidden md:block absolute top-1/2 h-1 transform -translate-y-1/2 ${isLeft ? 'right-0' : 'left-0'}`} style={{ width: '3rem', [isLeft ? 'right' : 'left']: '-3rem', background: isLeft ? 'linear-gradient(90deg, transparent, rgba(6,182,212,0.55), rgba(124,58,237,0.6))' : 'linear-gradient(270deg, transparent, rgba(124,58,237,0.55), rgba(236,72,153,0.6))' }} initial={{ scaleX: 0 }} whileInView={{ scaleX: 1 }} transition={{ duration: 0.6 }} viewport={{ once: true }} />
                <Card className="max-w-4xl p-0 overflow-hidden group shadow-xl card-surface" style={{borderRadius: '14px'}}>
                  <img src={project.image.startsWith('/') ? project.image : project.image} alt={project.title} className="w-full h-56 object-cover rounded-t-2xl group-hover:scale-105 transition-transform duration-500" />
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                    {project.description}
                    <div className="flex gap-4 mt-4">
                      <Button as="a" href={project.github} target="_blank" className="flex items-center gap-2 btn-primary btn-smooth">
                        <SiGithub /> GitHub
                      </Button>
                      {project.live && (
                        <Button as="a" href={project.live} target="_blank" className="flex items-center gap-2 btn-primary btn-smooth">
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
