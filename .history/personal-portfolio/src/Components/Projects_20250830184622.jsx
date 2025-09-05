import { Card } from "../components/ui/Card";
import { Button } from "../components/ui/Button";
import { motion } from "framer-motion";
import { SiGithub, SiGlobe } from "react-icons/si";

const projects = [
  {
    title: "Modern Portfolio",
    image: "/public/vite.svg",
    description: "A visually stunning developer portfolio built with React, Tailwind, shadcn/ui, and Framer Motion.",
    github: "https://github.com/ChaitanyMishra/Portfolio",
    live: "https://your-portfolio-live-link.com",
  },
  {
    title: "Project Two",
    image: "/public/react.svg",
    description: "A sample project showcasing advanced UI/UX and animation techniques.",
    github: "https://github.com/ChaitanyMishra/project-two",
    live: "https://project-two-live.com",
  },
];

export default function Projects() {
  return (
    <section className="py-20 px-6 bg-gradient-to-br from-zinc-900 via-indigo-900 to-purple-900">
      <h2 className="text-3xl font-bold mb-8 text-center text-indigo-400">Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 justify-items-center">
        {projects.map((project, idx) => (
          <motion.div
            key={project.title}
            whileHover={{ scale: 1.04, boxShadow: "0 0 32px #a78bfa" }}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: idx * 0.2 }}
            viewport={{ once: true }}
          >
            <Card className="max-w-md p-0 overflow-hidden group">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover rounded-t-2xl group-hover:scale-105 transition-transform duration-300"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-indigo-300 mb-2">{project.title}</h3>
                <p className="text-white/80 mb-4">{project.description}</p>
                <div className="flex gap-4">
                  <Button as="a" href={project.github} target="_blank" className="flex items-center gap-2">
                    <SiGithub /> GitHub
                  </Button>
                  <Button as="a" href={project.live} target="_blank" className="flex items-center gap-2 bg-pink-500/80">
                    <SiGlobe /> Live
                  </Button>
                </div>
              </div>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
