

import { motion } from "framer-motion";
import { Card } from "../components/ui/Card";
import { Button } from "../components/ui/Button";
import { SiGithub } from "react-icons/si";
import { FaGlobe } from "react-icons/fa";

const projects = [
  {
    title: "SnapFetch, Image Search Engine",
    image: "/public/vite.svg",
    description: (
      <ul className="list-disc ml-5 text-white/80">
        <li>Responsive image search engine delivering high-quality results in real time using Unsplash and Pixabay APIs.</li>
        <li>Infinite scroll and live search features for improved UX.</li>
        <li>Image preview & direct download functionality.</li>
        <li>Deployed on Vercel with optimized build performance (under 1.5s load time).</li>
        <li>Achieved 100% Lighthouse score on performance and accessibility.</li>
      </ul>
    ),
    github: "https://github.com/ChaitanyMishra/SnapFetch",
    live: "https://snapfetch.vercel.app/",
  },
  {
    title: "Mini Projects, Practiced Web Functionality",
    image: "/public/react.svg",
    description: (
      <ul className="list-disc ml-5 text-white/80">
        <li>Designed and developed 10+ mini web apps, each focusing on specific UI/UX or JavaScript logic concepts.</li>
        <li>To-Do App: CRUD functionality with local storage integration.</li>
        <li>Weather App: Real-time weather using OpenWeatherMap API.</li>
        <li>Shopping Cart: Dynamic cart with item addition/removal and pricing logic.</li>
        <li>AI Image Generator: Integrated OpenAI API for text-to-image generation.</li>
        <li>Expense Tracker: Real-time expense management with chart visualization.</li>
        <li>Countdown Timer, Color Changer, Password Generator, String Game, and more.</li>
        <li>Deployed on GitHub and Vercel; projects follow modular coding principles and clean folder structures.</li>
      </ul>
    ),
    github: "https://github.com/ChaitanyMishra/mini-projects",
    live: "https://mini-projects.vercel.app/",
  },
];

export default function Projects() {
  return (
    <section className="py-20 px-6 bg-gradient-to-br from-zinc-900 via-indigo-900 to-purple-900">
      <h2 className="text-3xl font-bold mb-8 text-center text-indigo-400">Projects</h2>
      <div className="relative grid grid-cols-1 md:grid-cols-2 gap-10 justify-items-center">
        {/* Vertical line for tree structure */}
        <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-indigo-500 via-purple-500 to-pink-500 rounded-full z-0" style={{transform: 'translateX(-50%)'}}></div>
        {projects.map((project, idx) => (
          <motion.div
            key={project.title}
            whileHover={{ scale: 1.04, boxShadow: "0 0 32px #a78bfa" }}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: idx * 0.2 }}
            viewport={{ once: true }}
            className="relative z-10 w-full"
          >
            <Card className="max-w-md p-0 overflow-hidden group">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover rounded-t-2xl group-hover:scale-105 transition-transform duration-300"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-indigo-300 mb-2">{project.title}</h3>
                {project.description}
                <div className="flex gap-4 mt-4">
                  <Button as="a" href={project.github} target="_blank" className="flex items-center gap-2">
                    <SiGithub /> GitHub
                  </Button>
                  <Button as="a" href={project.live} target="_blank" className="flex items-center gap-2 bg-pink-500/80">
                    <FaGlobe /> Live
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
