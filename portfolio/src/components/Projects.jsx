import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { ExternalLink, Github, Zap, Search, ShoppingCart, Palette, Calculator, Clock } from 'lucide-react';

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.1 });

  const projects = [
    {
      id: 1,
      title: 'SnapFetch - Image Search Engine',
      description: 'A responsive image search engine delivering high-quality results in real-time using Unsplash and Pixabay APIs with infinite scroll and live search features.',
      image: '/api/placeholder/600/400',
      tech: ['React.js', 'JavaScript', 'API Integration', 'Vercel'],
      features: [
        'Real-time image search',
        'Infinite scroll functionality',
        'Image preview & download',
        '100% Lighthouse performance score',
        'Under 1.5s load time'
      ],
      demoUrl: '#',
      githubUrl: '#',
      icon: Search,
      color: 'from-blue-500 to-cyan-500'
    },
    {
      id: 2,
      title: 'Mini Projects Collection',
      description: 'A collection of 10+ mini web applications, each focusing on specific UI/UX concepts and JavaScript functionality with modular coding principles.',
      image: '/api/placeholder/600/400',
      tech: ['HTML5', 'CSS3', 'JavaScript', 'Local Storage', 'APIs'],
      features: [
        'To-Do App with CRUD operations',
        'Weather App with OpenWeatherMap API',
        'Shopping Cart with dynamic pricing',
        'AI Image Generator with OpenAI API',
        'Expense Tracker with visualizations'
      ],
      demoUrl: '#',
      githubUrl: '#',
      icon: Zap,
      color: 'from-purple-500 to-pink-500'
    },
    {
      id: 3,
      title: 'Interactive Web Tools',
      description: 'Various utility applications including countdown timer, color changer, password generator, and string games deployed on GitHub and Vercel.',
      image: '/api/placeholder/600/400',
      tech: ['JavaScript', 'CSS3', 'DOM Manipulation', 'GitHub Pages'],
      features: [
        'Countdown Timer with custom intervals',
        'Color Palette Generator',
        'Secure Password Generator',
        'Interactive String Games',
        'Clean, modular code structure'
      ],
      demoUrl: '#',
      githubUrl: '#',
      icon: Palette,
      color: 'from-green-500 to-emerald-500'
    }
  ];

  return (
    <section id="projects" className="py-20 bg-dark-900 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-72 h-72 bg-cyan-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse" />
        <div className="absolute top-40 right-10 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse animation-delay-2000" />
        <div className="absolute bottom-20 left-1/2 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse animation-delay-4000" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            <span className="gradient-text">Featured Projects</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            A showcase of my recent work and technical capabilities
          </p>
        </motion.div>

        <div ref={ref} className="grid lg:grid-cols-1 gap-12 max-w-5xl mx-auto">
          {projects.map((project, index) => {
            const Icon = project.icon;
            return (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 100 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 100 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="group"
              >
                <div className={`glass-effect rounded-3xl overflow-hidden card-hover ${
                  index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                } flex flex-col lg:flex`}>
                  {/* Project Image */}
                  <div className="lg:w-1/2 relative overflow-hidden">
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.6 }}
                      className="aspect-video lg:aspect-auto lg:h-full bg-gradient-to-br from-dark-700 to-dark-600 flex items-center justify-center relative"
                    >
                      {/* Placeholder for project image */}
                      <div className={`w-24 h-24 rounded-full bg-gradient-to-br ${project.color} flex items-center justify-center`}>
                        <Icon className="w-12 h-12 text-white" />
                      </div>
                      
                      {/* Overlay */}
                      <motion.div
                        initial={{ opacity: 0 }}
                        whileHover={{ opacity: 1 }}
                        className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-center justify-center"
                      >
                        <div className="flex gap-4">
                          <motion.a
                            href={project.demoUrl}
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors"
                          >
                            <ExternalLink className="w-5 h-5" />
                          </motion.a>
                          <motion.a
                            href={project.githubUrl}
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors"
                          >
                            <Github className="w-5 h-5" />
                          </motion.a>
                        </div>
                      </motion.div>
                    </motion.div>
                  </div>

                  {/* Project Content */}
                  <div className="lg:w-1/2 p-8 lg:p-12 flex flex-col justify-center">
                    <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-sm font-medium mb-6 bg-gradient-to-r ${project.color} text-white w-fit`}>
                      <Icon className="w-4 h-4" />
                      Project #{project.id}
                    </div>

                    <h3 className="text-2xl lg:text-3xl font-bold text-white mb-4">
                      {project.title}
                    </h3>

                    <p className="text-gray-300 mb-6 leading-relaxed">
                      {project.description}
                    </p>

                    {/* Features */}
                    <div className="mb-6">
                      <h4 className="text-lg font-semibold text-white mb-3">Key Features:</h4>
                      <ul className="space-y-2">
                        {project.features.map((feature, featureIndex) => (
                          <motion.li
                            key={featureIndex}
                            initial={{ opacity: 0, x: -20 }}
                            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                            transition={{ duration: 0.5, delay: index * 0.2 + featureIndex * 0.1 }}
                            className="flex items-center text-gray-400"
                          >
                            <div className="w-2 h-2 bg-cyan-400 rounded-full mr-3" />
                            {feature}
                          </motion.li>
                        ))}
                      </ul>
                    </div>

                    {/* Tech Stack */}
                    <div className="mb-8">
                      <h4 className="text-lg font-semibold text-white mb-3">Tech Stack:</h4>
                      <div className="flex flex-wrap gap-2">
                        {project.tech.map((tech) => (
                          <span
                            key={tech}
                            className="px-3 py-1 bg-dark-700 text-cyan-400 rounded-full text-sm border border-cyan-500/20 hover:border-cyan-500/40 transition-colors"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex gap-4">
                      <motion.a
                        href={project.demoUrl}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="btn-primary inline-flex items-center gap-2"
                      >
                        <ExternalLink className="w-4 h-4" />
                        Live Demo
                      </motion.a>
                      <motion.a
                        href={project.githubUrl}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="px-6 py-3 border border-gray-600 text-gray-300 rounded-full hover:border-gray-400 hover:text-white transition-colors inline-flex items-center gap-2"
                      >
                        <Github className="w-4 h-4" />
                        Source Code
                      </motion.a>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Projects;