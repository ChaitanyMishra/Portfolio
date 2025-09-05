

import { motion } from "framer-motion";
void motion;
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
];

const certifications = [
  { name: "Code-o-Fiesta 2.0 — Participant Certificate", link: "https://drive.google.com/drive/u/1/search?q=code hackathon" },
  { name: "Python Mania 3.0 — Tech Team Member" }
];

export default function Skills() {
  return (
    <section className="py-20 px-6 bg-gradient-to-br from-indigo-900 via-purple-900 to-zinc-900">
      <motion.h2 
        className="text-3xl font-bold mb-16 text-center text-indigo-400"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        Skills
      </motion.h2>
      <div className="relative flex flex-col md:flex-row items-start md:items-stretch justify-center gap-16">
        {/* Animated Vertical spine for tree structure */}
        <motion.div 
          className="absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-indigo-500 via-purple-500 to-pink-500 rounded-full z-0"
          style={{transform: 'translateX(-50%)'}}
          initial={{ height: 0 }}
          whileInView={{ height: "100%" }}
          transition={{ duration: 1, ease: "easeInOut" }}
          viewport={{ once: true }}
        />
        {/* We'll render 4 cards in the tree following the user's order: 1:left Languages, 3:right Tools, 5:left Soft Skills, 7:right Certifications */}
        {[
          { key: 'languages', title: 'Languages & Frameworks', content: (
            <ul>
              {languagesFrameworks.map((skill, idx) => (
                <motion.li
                  key={skill.name}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  whileHover={{ scale: 1.05, x: 8 }}
                  transition={{ duration: 0.45, delay: idx * 0.08 }}
                  viewport={{ once: true }}
                  className="flex items-center gap-3 mb-4 text-white/90 hover:text-indigo-400 transition-all duration-300"
                >
                  <motion.span className="w-2 h-2 rounded-full bg-indigo-400/70 mr-2 shrink-0" initial={{ scale: 0 }} whileInView={{ scale: 1 }} transition={{ duration: 0.25 }} viewport={{ once: true }} />
                  {skill.icon && <span className="text-2xl">{skill.icon}</span>}
                  <span className="font-semibold">{skill.name}</span>
                </motion.li>
              ))}
            </ul>
          )},
          { key: 'tools', title: 'Tools & Platforms', content: (
            <ul>
              {toolsPlatforms.map((tool, idx) => (
                <motion.li key={tool.name} initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} whileHover={{ scale: 1.05, x: -8 }} transition={{ duration: 0.45, delay: idx * 0.08 }} viewport={{ once: true }} className="flex items-center gap-3 mb-4 text-white/90 hover:text-indigo-400 transition-all duration-300">
                  <motion.span className="w-2 h-2 rounded-full bg-pink-400/70 mr-2 shrink-0" initial={{ scale: 0 }} whileInView={{ scale: 1 }} transition={{ duration: 0.25 }} viewport={{ once: true }} />
                  {tool.icon && <span className="text-2xl">{tool.icon}</span>}
                  <span className="font-semibold">{tool.name}</span>
                </motion.li>
              ))}
            </ul>
          )},
          { key: 'soft', title: 'Soft Skills', content: (
            <ul>
              {softSkills.map((skill, idx) => (
                <motion.li key={skill.name} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} whileHover={{ scale: 1.05, x: 8 }} transition={{ duration: 0.45, delay: idx * 0.08 }} viewport={{ once: true }} className="flex items-center gap-3 mb-4 text-white/90 hover:text-indigo-400 transition-all duration-300">
                  <motion.span className="w-2 h-2 rounded-full bg-purple-400/70 mr-2 shrink-0" initial={{ scale: 0 }} whileInView={{ scale: 1 }} transition={{ duration: 0.25 }} viewport={{ once: true }} />
                  <span className="font-semibold">{skill.name}</span>
                </motion.li>
              ))}
            </ul>
          )},
          { key: 'certs', title: 'Certifications', content: (
            <ul>
              {certifications.map((c, idx) => (
                <motion.li key={c.name} initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.45, delay: idx * 0.08 }} viewport={{ once: true }} className="mb-4 text-white/90">
                  {c.link ? (
                    <a href={c.link} target="_blank" rel="noopener noreferrer" className="font-semibold underline">{c.name}</a>
                  ) : (
                    <span className="font-semibold">{c.name}</span>
                  )}
                </motion.li>
              ))}
            </ul>
          )}
        ].map((card, idx) => {
          const isLeft = idx % 2 === 0; // left for 0,2 ; right for 1,3
          return (
            <motion.div
              key={card.key}
              initial={{ opacity: 0, x: isLeft ? -80 : 80 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, ease: 'easeOut', delay: idx * 0.08 }}
              viewport={{ once: true }}
              className={`relative z-10 w-full md:w-1/3 ${isLeft ? 'md:mr-auto md:pl-6' : 'md:ml-auto md:pr-6'}`}
            >
              {/* connecting branch */}
              <motion.div
                className={`hidden md:block absolute top-1/2 h-1 transform -translate-y-1/2 ${isLeft ? 'right-0 bg-gradient-to-r from-transparent via-indigo-500 to-purple-500' : 'left-0 bg-gradient-to-l from-transparent via-purple-500 to-pink-500'}`}
                style={{ width: '2rem', [isLeft ? 'right' : 'left']: '-2rem' }}
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                viewport={{ once: true }}
              />
              <Card className="p-8 bg-black/40 hover:bg-black/50 transition-colors duration-300">
                <h3 className="text-xl font-bold text-indigo-300 mb-6">{card.title}</h3>
                {card.content}
              </Card>
            </motion.div>
          )
        })}
      </div>
    </section>
  );
}