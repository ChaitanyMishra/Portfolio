import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { ExternalLink, Github, Eye, Download, Zap, Star } from 'lucide-react';

const ProjectCard = ({ project, index }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const cardVariants = {
    hidden: { 
      opacity: 0, 
      y: 100,
      scale: 0.8
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut",
        delay: index * 0.2
      }
    }
  };

  return (
    <motion.div
      ref={ref}
      variants={cardVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      className="group relative bg-background-card rounded-2xl overflow-hidden border border-gray-700/50 backdrop-blur-sm card-hover"
    >
      {/* Project Image/Preview */}
      <div className="relative h-48 bg-gradient-to-br from-primary-600/20 to-accent-600/20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-500/10 to-accent-500/10" />
        <div className="absolute inset-0 flex items-center justify-center">
          <project.icon className="w-16 h-16 text-primary-400 group-hover:text-primary-300 transition-colors duration-300" />
        </div>
        
        {/* Hover Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-background-dark/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center">
          <div className="flex space-x-4">
            <button className="bg-primary-600 hover:bg-primary-500 text-white p-3 rounded-full transition-all duration-300 transform hover:scale-110 shadow-lg">
              <Eye className="w-5 h-5" />
            </button>
            <button className="bg-accent-600 hover:bg-accent-500 text-white p-3 rounded-full transition-all duration-300 transform hover:scale-110 shadow-lg">
              <ExternalLink className="w-5 h-5" />
            </button>
            {project.github && (
              <button className="bg-gray-600 hover:bg-gray-500 text-white p-3 rounded-full transition-all duration-300 transform hover:scale-110 shadow-lg">
                <Github className="w-5 h-5" />
              </button>
            )}
          </div>
        </div>

        {/* Project Badge */}
        <div className="absolute top-4 right-4 bg-gradient-to-r from-primary-600 to-accent-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
          {project.category}
        </div>
      </div>

      {/* Project Content */}
      <div className="p-6">
        <div className="flex items-start justify-between mb-4">
          <h3 className="text-xl font-bold text-white group-hover:text-gradient transition-all duration-300">
            {project.title}
          </h3>
          {project.featured && (
            <div className="flex items-center text-yellow-400 text-sm">
              <Star className="w-4 h-4 mr-1 fill-current" />
              <span>Featured</span>
            </div>
          )}
        </div>

        <p className="text-gray-400 mb-4 leading-relaxed">
          {project.description}
        </p>

        {/* Key Features */}
        <div className="mb-4">
          <h4 className="text-sm font-semibold text-primary-400 mb-2">Key Features:</h4>
          <ul className="space-y-1">
            {project.features.map((feature, idx) => (
              <li key={idx} className="flex items-start text-sm text-gray-300">
                <div className="w-1.5 h-1.5 bg-accent-400 rounded-full mt-2 mr-2 flex-shrink-0" />
                {feature}
              </li>
            ))}
          </ul>
        </div>

        {/* Tech Stack */}
        <div className="mb-4">
          <h4 className="text-sm font-semibold text-primary-400 mb-2">Tech Stack:</h4>
          <div className="flex flex-wrap gap-2">
            {project.techStack.map((tech, idx) => (
              <span
                key={idx}
                className="px-3 py-1 bg-background-darker text-gray-300 text-xs rounded-full border border-gray-600/50 hover:border-primary-500/50 transition-colors duration-300"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Project Stats */}
        {project.stats && (
          <div className="grid grid-cols-2 gap-4 mb-4">
            {project.stats.map((stat, idx) => (
              <div key={idx} className="text-center p-2 bg-background-darker rounded-lg">
                <div className="text-lg font-bold text-primary-400">{stat.value}</div>
                <div className="text-xs text-gray-400">{stat.label}</div>
              </div>
            ))}
          </div>
        )}

        {/* Action Buttons */}
        <div className="flex space-x-3">
          <button className="flex-1 bg-gradient-to-r from-primary-600 to-accent-600 hover:from-primary-500 hover:to-accent-500 text-white py-2 px-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2">
            <ExternalLink className="w-4 h-4" />
            <span>View Project</span>
          </button>
          {project.github && (
            <button className="bg-gray-700 hover:bg-gray-600 text-white py-2 px-4 rounded-lg transition-all duration-300 transform hover:scale-105">
              <Github className="w-4 h-4" />
            </button>
          )}
        </div>
      </div>
    </motion.div>
  );
};

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const headerVariants = {
    hidden: { opacity: 0, y: -50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  const projects = [
    {
      title: "SnapFetch",
      category: "Web App",
      description: "A responsive image search engine that delivers high-quality image results in real time using Unsplash and Pixabay APIs.",
      features: [
        "Real-time image search with multiple API integration",
        "Infinite scroll for seamless browsing experience",
        "Live search with instant results",
        "Image preview & direct download functionality",
        "Optimized build performance (under 1.5s load time)",
        "100% Lighthouse score on performance and accessibility"
      ],
      techStack: ["HTML5", "CSS3", "JavaScript", "API Integration", "Responsive Design"],
      icon: Eye,
      github: true,
      featured: true,
      stats: [
        { value: "100%", label: "Lighthouse Score" },
        { value: "<1.5s", label: "Load Time" }
      ]
    },
    {
      title: "Mini Projects Collection",
      category: "Learning Projects",
      description: "A collection of 10+ mini web applications, each focusing on specific UI/UX or JavaScript logic concepts.",
      features: [
        "To-Do App: CRUD functionality with local storage",
        "Weather App: Real-time weather using OpenWeatherMap API",
        "Shopping Cart: Dynamic cart with pricing logic",
        "AI Image Generator: OpenAI API integration",
        "Expense Tracker: Real-time management with charts",
        "Various utility apps: Timer, Color Changer, Password Generator"
      ],
      techStack: ["HTML5", "CSS3", "JavaScript", "Local Storage", "API Integration", "Chart.js"],
      icon: Zap,
      github: true,
      stats: [
        { value: "10+", label: "Projects" },
        { value: "100%", label: "Completion" }
      ]
    },
    {
      title: "Frontend Developer Portfolio",
      category: "Portfolio",
      description: "This very website - a modern, responsive portfolio showcasing my skills and projects with advanced animations.",
      features: [
        "Fully responsive design for all devices",
        "Advanced animations with Framer Motion",
        "Canvas-based particle background effects",
        "Modern dark-futuristic design theme",
        "Optimized performance and accessibility",
        "Interactive UI components and smooth scrolling"
      ],
      techStack: ["React.js", "Tailwind CSS", "Framer Motion", "Canvas API", "Vite"],
      icon: Star,
      github: true,
      featured: true,
      stats: [
        { value: "100%", label: "Responsive" },
        { value: "A+", label: "Performance" }
      ]
    }
  ];

  return (
    <section className="py-20 bg-background-darker relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary-500 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-accent-500 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          ref={ref}
          variants={headerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-gradient">Featured Projects</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            A showcase of my recent work and personal projects demonstrating my technical skills and creativity
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-primary-500 to-accent-500 mx-auto rounded-full mt-6" />
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} index={index} />
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center mt-16"
        >
          <p className="text-gray-400 mb-6">Want to see more of my work?</p>
          <button className="glow-button bg-gradient-to-r from-primary-600 to-accent-600 hover:from-primary-500 hover:to-accent-500 text-white font-semibold py-3 px-8 rounded-full transition-all duration-300 transform hover:scale-105 inline-flex items-center space-x-2">
            <Github className="w-5 h-5" />
            <span>View All on GitHub</span>
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;