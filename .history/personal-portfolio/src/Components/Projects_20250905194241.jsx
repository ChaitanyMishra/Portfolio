

import { motion } from "framer-motion";
import { useTheme } from "../contexts/ThemeContext";
import { Card } from "../components/ui/Card";
import { Button } from "../components/ui/Button";
import { SiGithub } from "react-icons/si";
import { FaGlobe, FaExternalLinkAlt } from "react-icons/fa";
void motion;

const projects = [
  {
    title: "SnapFetch — Image Search Engine",
    image: "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=500&h=300&fit=crop&crop=center",
    description: "A powerful image search engine built with React that integrates Unsplash and Pixabay APIs. Features infinite scroll, real-time search, image preview, and download functionality. Optimized for performance with lazy loading and responsive design.",
    github: "https://github.com/ChaitanyMishra/SnapFetch",
    live: "https://snapfetch.vercel.app/",
    tech: ["React", "JavaScript", "API Integration", "Tailwind CSS", "Vercel"],
    color: "from-blue-500 to-cyan-500",
    featured: true
  },
  {
    title: "Portfolio Website",
    image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=500&h=300&fit=crop&crop=center",
    description: "A modern, responsive portfolio website showcasing my projects and skills. Built with React, Framer Motion for animations, and Tailwind CSS for styling. Features multiple themes, smooth transitions, and interactive elements.",
    github: "https://github.com/ChaitanyMishra/portfolio",
    live: "https://chaitanymishra.vercel.app/",
    tech: ["React", "Framer Motion", "Tailwind CSS", "JavaScript", "Vercel"],
    color: "from-purple-500 to-pink-500",
    featured: true
  },
  {
    title: "Mini Projects Collection",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=500&h=300&fit=crop&crop=center",
    description: "A collection of 15+ mini applications demonstrating various JavaScript concepts, React patterns, and UI/UX principles. Each project focuses on different aspects of web development including DOM manipulation, state management, and modern CSS techniques.",
    github: "https://github.com/ChaitanyMishra/daily-dev-evolution",
    live: "https://daily-dev-evolution.vercel.app/",
    tech: ["JavaScript", "React", "CSS3", "HTML5", "GitHub"],
    color: "from-green-500 to-emerald-500",
    featured: false
  },
  {
    title: "Weather App",
    image: "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=500&h=300&fit=crop&crop=center",
    description: "A beautiful weather application that provides current weather conditions and forecasts. Features location-based weather data, interactive maps, and responsive design. Built with modern web technologies and clean UI/UX.",
    github: "https://github.com/ChaitanyMishra/weather-app",
    live: "https://weather-app-chaitany.vercel.app/",
    tech: ["React", "API", "JavaScript", "CSS3", "Vercel"],
    color: "from-orange-500 to-red-500",
    featured: false
  },
  {
    title: "Task Manager",
    image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=500&h=300&fit=crop&crop=center",
    description: "A comprehensive task management application with drag-and-drop functionality, priority settings, and deadline tracking. Features local storage persistence, filtering options, and intuitive user interface for productivity enhancement.",
    github: "https://github.com/ChaitanyMishra/task-manager",
    live: "https://task-manager-chaitany.vercel.app/",
    tech: ["React", "JavaScript", "Local Storage", "CSS3", "Vercel"],
    color: "from-indigo-500 to-purple-500",
    featured: false
  },
  {
    title: "E-commerce Landing Page",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=500&h=300&fit=crop&crop=center",
    description: "A modern e-commerce landing page with product showcase, shopping cart functionality, and responsive design. Demonstrates advanced CSS techniques, JavaScript interactions, and mobile-first design principles.",
    github: "https://github.com/ChaitanyMishra/ecommerce-landing",
    live: "https://ecommerce-landing-chaitany.vercel.app/",
    tech: ["HTML5", "CSS3", "JavaScript", "Responsive Design", "Vercel"],
    color: "from-pink-500 to-rose-500",
    featured: false
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
