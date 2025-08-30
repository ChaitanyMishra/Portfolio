import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, Zap, Search, ShoppingCart, CloudRain, Palette, Calculator } from 'lucide-react';

const Projects: React.FC = () => {
  const projects = [
    {
      id: 1,
      title: 'SnapFetch',
      subtitle: 'Image Search Engine',
      description: 'A responsive image search engine delivering high-quality results in real-time using Unsplash and Pixabay APIs. Features infinite scroll, live search, and direct download functionality.',
      image: '/api/placeholder/400/250',
      tech: ['React.js', 'JavaScript', 'APIs', 'CSS3'],
      highlights: ['100% Lighthouse Score', 'Under 1.5s Load Time', 'Infinite Scroll', 'Real-time Search'],
      github: '#',
      live: '#',
      icon: Search,
      gradient: 'from-cyan-400 to-blue-500'
    },
    {
      id: 2,
      title: 'To-Do App',
      subtitle: 'Task Management',
      description: 'Full-featured task management application with CRUD functionality and local storage integration. Clean, intuitive interface for productivity.',
      image: '/api/placeholder/400/250',
      tech: ['HTML5', 'CSS3', 'JavaScript', 'Local Storage'],
      highlights: ['CRUD Operations', 'Local Storage', 'Responsive Design', 'Clean UI'],
      github: '#',
      live: '#',
      icon: Calculator,
      gradient: 'from-violet-400 to-purple-500'
    },
    {
      id: 3,
      title: 'Weather App',
      subtitle: 'Real-time Weather',
      description: 'Dynamic weather application providing real-time weather information using OpenWeatherMap API. Location-based forecasts with beautiful UI.',
      image: '/api/placeholder/400/250',
      tech: ['JavaScript', 'Weather API', 'CSS3', 'HTML5'],
      highlights: ['Real-time Data', 'Location-based', 'API Integration', 'Beautiful UI'],
      github: '#',
      live: '#',
      icon: CloudRain,
      gradient: 'from-blue-400 to-cyan-500'
    },
    {
      id: 4,
      title: 'Shopping Cart',
      subtitle: 'E-commerce Logic',
      description: 'Dynamic shopping cart with item addition/removal and pricing logic. Demonstrates e-commerce functionality and state management.',
      image: '/api/placeholder/400/250',
      tech: ['JavaScript', 'HTML5', 'CSS3', 'Local Storage'],
      highlights: ['Dynamic Cart', 'Price Calculation', 'State Management', 'Responsive'],
      github: '#',
      live: '#',
      icon: ShoppingCart,
      gradient: 'from-green-400 to-emerald-500'
    },
    {
      id: 5,
      title: 'AI Image Generator',
      subtitle: 'Text-to-Image',
      description: 'AI-powered image generator using OpenAI API for text-to-image generation. Demonstrates API integration and modern AI capabilities.',
      image: '/api/placeholder/400/250',
      tech: ['React.js', 'OpenAI API', 'JavaScript', 'CSS3'],
      highlights: ['AI Integration', 'Text-to-Image', 'Modern UI', 'API Handling'],
      github: '#',
      live: '#',
      icon: Palette,
      gradient: 'from-pink-400 to-rose-500'
    },
    {
      id: 6,
      title: 'Expense Tracker',
      subtitle: 'Financial Management',
      description: 'Real-time expense management application with chart visualization. Track spending patterns with interactive charts and analytics.',
      image: '/api/placeholder/400/250',
      tech: ['JavaScript', 'Chart.js', 'HTML5', 'CSS3'],
      highlights: ['Chart Visualization', 'Real-time Updates', 'Analytics', 'Data Management'],
      github: '#',
      live: '#',
      icon: Zap,
      gradient: 'from-yellow-400 to-orange-500'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6
      }
    }
  };

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-navy-950 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-violet-950/20 to-cyan-950/20"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            <span className="gradient-text">Featured Projects</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            A collection of projects showcasing my skills in frontend development and modern web technologies.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projects.map((project) => (
            <motion.div
              key={project.id}
              variants={cardVariants}
              className="glass-card group overflow-hidden hover:bg-white/10 transition-all duration-300"
              whileHover={{ y: -10, scale: 1.02 }}
            >
              {/* Project Image */}
              <div className="relative overflow-hidden">
                <div className="aspect-video bg-gradient-to-br from-navy-800 to-navy-700 flex items-center justify-center">
                  <project.icon className={`w-16 h-16 bg-gradient-to-r ${project.gradient} bg-clip-text text-transparent`} />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-navy-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="flex gap-3">
                    <motion.a
                      href={project.github}
                      className="p-2 bg-white/20 backdrop-blur-sm rounded-full text-white hover:bg-white/30 transition-colors"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <Github className="w-5 h-5" />
                    </motion.a>
                    <motion.a
                      href={project.live}
                      className="p-2 bg-white/20 backdrop-blur-sm rounded-full text-white hover:bg-white/30 transition-colors"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <ExternalLink className="w-5 h-5" />
                    </motion.a>
                  </div>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                <div className="flex items-center mb-3">
                  <div className={`p-2 rounded-lg bg-gradient-to-r ${project.gradient} mr-3`}>
                    <project.icon className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white">{project.title}</h3>
                    <p className="text-sm text-cyan-400">{project.subtitle}</p>
                  </div>
                </div>

                <p className="text-gray-300 text-sm leading-relaxed mb-4">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, index) => (
                    <span
                      key={index}
                      className="px-2 py-1 bg-white/10 text-xs text-cyan-300 rounded-full border border-cyan-500/30"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Highlights */}
                <div className="space-y-1">
                  {project.highlights.map((highlight, index) => (
                    <motion.div
                      key={index}
                      className="flex items-center text-xs text-gray-400"
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                    >
                      <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full mr-2"></div>
                      {highlight}
                    </motion.div>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3 mt-6">
                  <motion.a
                    href={project.github}
                    className="flex-1 py-2 px-4 bg-white/10 text-white text-sm font-medium rounded-lg hover:bg-white/20 transition-colors flex items-center justify-center gap-2"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Github className="w-4 h-4" />
                    Code
                  </motion.a>
                  <motion.a
                    href={project.live}
                    className={`flex-1 py-2 px-4 bg-gradient-to-r ${project.gradient} text-white text-sm font-medium rounded-lg hover:shadow-lg transition-all flex items-center justify-center gap-2`}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <ExternalLink className="w-4 h-4" />
                    Live
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* View More Button */}
        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <motion.a
            href="https://github.com/chaitany-mishra"
            target="_blank"
            rel="noopener noreferrer"
            className="glow-button inline-flex items-center gap-2"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Github className="w-5 h-5" />
            View All Projects on GitHub
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;