

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
    description: "Responsive image search engine using Unsplash and Pixabay APIs with infinite scroll, live search, and image preview/download features. Deployed on Vercel with optimized performance.",
    github: "https://github.com/ChaitanyMishra/SnapFetch",
    live: "https://snapfetch.vercel.app/",
    tech: ["React", "JavaScript", "API Integration", "Vercel"],
    color: "from-blue-500 to-cyan-500"
  },
  {
    title: "API Image Generator",
    image: "/vite.svg",
    description: "Text-to-image generator using an API endpoint with live demo and GitHub repository. Features modern UI and seamless API integration.",
    github: "https://github.com/ChaitanyMishra/api-image-generator",
    live: "https://api-image-generator-j7bd-git-main-chaitanymishras-projects.vercel.app/",
    tech: ["React", "API", "JavaScript", "Vercel"],
    color: "from-purple-500 to-pink-500"
  },
  {
    title: "Mini Projects Collection",
    image: "/react.svg",
    description: "Collection of 10+ mini apps demonstrating JavaScript, React, and UI patterns. Showcasing various web development concepts and best practices.",
    github: "https://github.com/ChaitanyMishra/daily-dev-evolution",
    live: "",
    tech: ["JavaScript", "React", "CSS", "HTML"],
    color: "from-green-500 to-emerald-500"
  },
];

export default function Projects() {
  const { theme } = useTheme();
  
  return (
    <section id="projects" className={`py-20 px-6 ${theme.colors.secondary} relative overflow-hidden`}>
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/3 -right-20 w-40 h-40 bg-white/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/3 -left-20 w-40 h-40 bg-white/5 rounded-full blur-3xl" />
      </div>
      
      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent mb-4">
            Featured Projects
          </h2>
          <p className="text-white/70 text-lg max-w-2xl mx-auto">
            A showcase of my recent work and side projects
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, idx) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className={`${theme.colors.glass} backdrop-blur-md border border-white/20 rounded-2xl overflow-hidden shadow-2xl hover:shadow-3xl transition-all duration-500 hover:scale-105 h-full`}>
                {/* Project Image */}
                <div className="relative overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500" 
                  />
                  <div className={`absolute inset-0 bg-gradient-to-t ${project.color} opacity-0 group-hover:opacity-20 transition-opacity duration-500`} />
                  
                  {/* Tech Stack Overlay */}
                  <div className="absolute top-4 right-4 flex flex-wrap gap-2">
                    {project.tech.slice(0, 2).map((tech, techIdx) => (
                      <span 
                        key={techIdx}
                        className="px-2 py-1 bg-black/50 backdrop-blur-sm text-white text-xs rounded-full border border-white/20"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Project Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-300 transition-colors">
                    {project.title}
                  </h3>
                  
                  <p className="text-white/70 text-sm leading-relaxed mb-4">
                    {project.description}
                  </p>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((tech, techIdx) => (
                      <span 
                        key={techIdx}
                        className="px-3 py-1 bg-white/10 text-white/80 text-xs rounded-full border border-white/20 hover:bg-white/20 transition-colors"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-3">
                    <motion.a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-white/10 hover:bg-white/20 text-white text-sm font-medium rounded-lg border border-white/20 transition-all duration-300 hover:scale-105"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <SiGithub size={16} />
                      GitHub
                    </motion.a>
                    
                    {project.live && (
                      <motion.a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-400 hover:to-purple-400 text-white text-sm font-medium rounded-lg transition-all duration-300 hover:scale-105"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <FaExternalLinkAlt size={14} />
                        Live Demo
                      </motion.a>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
