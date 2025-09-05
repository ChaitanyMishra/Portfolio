

import { motion } from "framer-motion";
import { Card } from "../components/ui/Card";
import { SiHtml5, SiCss3, SiJavascript, SiTailwindcss, SiGit, SiGithub, SiReact } from "react-icons/si";
import { FaPython, FaJava } from "react-icons/fa";

const languagesFrameworks = [
  { name: "HTML5", icon: <SiHtml5 className="text-orange-400" /> },
  { name: "CSS3", icon: <SiCss3 className="text-blue-400" /> },
  { name: "JavaScript (ES6+)", icon: <SiJavascript className="text-yellow-400" /> },
  { name: "React.js", icon: <SiReact className="text-cyan-400" /> },
  { name: "Tailwind CSS", icon: <SiTailwindcss className="text-teal-400" /> },
];

const toolsPlatforms = [
  { name: "Git", icon: <SiGit className="text-red-400" /> },
  { name: "GitHub", icon: <SiGithub className="text-white" /> },
  { name: "VS Code" },
  { name: "Chrome DevTools" },
  { name: "Netlify" },
  { name: "Vercel" },
  { name: "Render" },
  { name: "GitHub Pages" },
  { name: "AWS (Basic)" },
];

const softSkills = [
  { name: "Problem Solving" },
  { name: "Communication" },
  { name: "Team Collaboration" },
  { name: "Visual Design" },
  { name: "Confident" },
  { name: "Willingness to Learn" },
];

export default function Skills() {
  return (
    <section className="py-20 px-6 bg-gradient-to-br from-indigo-900 via-purple-900 to-zinc-900">
      <h2 className="text-3xl font-bold mb-8 text-center text-indigo-400">Skills</h2>
      <div className="relative flex flex-col md:flex-row items-center justify-center gap-12">
        {/* Vertical line for tree structure */}
        <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-indigo-500 via-purple-500 to-pink-500 rounded-full z-0" style={{transform: 'translateX(-50%)'}}></div>
        <motion.div
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="relative z-10 w-full md:w-1/3"
        >
          <Card className="p-8">
            <h3 className="text-xl font-bold text-indigo-300 mb-4">Languages & Frameworks</h3>
            <ul>
              {languagesFrameworks.map((skill, idx) => (
                <motion.li
                  key={skill.name}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-center gap-3 mb-3 text-white/90 hover:text-indigo-400 transition-colors duration-200"
                >
                  {skill.icon && <span className="text-2xl">{skill.icon}</span>}
                  <span className="font-semibold">{skill.name}</span>
                </motion.li>
              ))}
            </ul>
          </Card>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="relative z-10 w-full md:w-1/3"
        >
          <Card className="p-8">
            <h3 className="text-xl font-bold text-indigo-300 mb-4">Tools & Platforms</h3>
            <ul>
              {toolsPlatforms.map((tool, idx) => (
                <motion.li
                  key={tool.name}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-center gap-3 mb-3 text-white/90 hover:text-indigo-400 transition-colors duration-200"
                >
                  {tool.icon && <span className="text-2xl">{tool.icon}</span>}
                  <span className="font-semibold">{tool.name}</span>
                </motion.li>
              ))}
            </ul>
          </Card>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="relative z-10 w-full md:w-1/3"
        >
          <Card className="p-8">
            <h3 className="text-xl font-bold text-indigo-300 mb-4">Soft Skills</h3>
            <ul>
              {softSkills.map((skill, idx) => (
                <motion.li
                  key={skill.name}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-center gap-3 mb-3 text-white/90 hover:text-pink-400 transition-colors duration-200"
                >
                  <span className="font-semibold">{skill.name}</span>
                </motion.li>
              ))}
            </ul>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}