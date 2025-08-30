import { projects } from "../data";
import { motion } from "framer-motion";

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15 },
  }),
};

const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-navy/80">
      <div className="container mx-auto px-4 max-w-6xl">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 bg-gradient-to-r from-cyan to-accent bg-clip-text text-transparent">
          Projects
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, idx) => (
            <motion.a
              key={project.title}
              href={project.link || "#"}
              target="_blank"
              rel="noopener noreferrer"
              custom={idx}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={cardVariants}
              className="relative group overflow-hidden rounded-lg shadow-lg border border-gray-700 bg-navy/70 backdrop-blur-lg"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold text-accent mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-300 text-sm mb-3 min-h-[64px]">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="text-xs bg-gray-700 px-2 py-1 rounded-full"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
              <div className="absolute inset-0 bg-accent/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;