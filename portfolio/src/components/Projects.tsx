import React from "react";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

type Project = {
  title: string;
  description: string;
  tech: string[];
  image?: string;
  link?: string;
};

const projects: Project[] = [
  {
    title: "SnapFetch – Image Search Engine",
    description:
      "Responsive image search engine using Unsplash and Pixabay APIs with live search, infinite scroll, preview and download.",
    tech: ["React", "TypeScript", "Tailwind", "Unsplash API", "Pixabay API"],
    image: "/project1.jpg",
    link: "#",
  },
  {
    title: "Mini Projects – UI/UX & Logic",
    description:
      "10+ mini web apps including To-Do, Weather, Shopping Cart, AI Image Generator, Expense Tracker, and more.",
    tech: ["HTML", "CSS", "JavaScript", "React", "Tailwind"],
    image: "/project2.jpg",
    link: "#",
  },
];

export const Projects: React.FC = () => (
  <section id="projects" className="relative py-24">
    <div className="mx-auto max-w-6xl px-6">
      <motion.h2
        className="text-3xl md:text-4xl font-bold gradient-text mb-10 text-center"
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ type: "spring", stiffness: 120 }}
      >
        Projects
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((p, idx) => (
          <motion.a
            key={p.title}
            href={p.link}
            target="_blank"
            rel="noreferrer"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ delay: idx * 0.05 }}
          >
            <Card className="group overflow-hidden hover:-translate-y-1 transition-transform">
              <div className="relative aspect-[16/9] overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/10 to-violet-600/10" />
                <img
                  src={p.image}
                  alt={p.title}
                  className="h-full w-full object-cover opacity-80 transition-transform duration-500 group-hover:scale-[1.05]"
                  onError={(e) => {
                    (e.currentTarget as HTMLImageElement).style.display = "none";
                  }}
                />
                <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100 bg-[radial-gradient(600px_200px_at_50%_60%,rgba(34,211,238,0.25),transparent)]" />
              </div>
              <CardHeader>
                <CardTitle className="text-slate-100">{p.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-300 mb-3">{p.description}</p>
                <div className="flex flex-wrap gap-2">
                  {p.tech.map((t) => (
                    <Badge key={t}>{t}</Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.a>
        ))}
      </div>
    </div>
  </section>
);

export default Projects;

