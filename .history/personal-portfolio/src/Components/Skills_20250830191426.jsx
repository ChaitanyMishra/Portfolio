
import { motion } from "framer-motion";
import { Card } from "../components/ui/Card";
import { SiHtml5, SiCss3, SiJavascript, SiTailwindcss, SiGit, SiGithub, SiReact } from "react-icons/si";
import { FaPython, FaJava } from "react-icons/fa";

const webSkills = [
  { name: "HTML5", icon: <SiHtml5 className="text-orange-400" /> },
  { name: "CSS3", icon: <SiCss3 className="text-blue-400" /> },
  { name: "JavaScript (ES6+)", icon: <SiJavascript className="text-yellow-400" /> },
  { name: "Tailwind", icon: <SiTailwindcss className="text-teal-400" /> },
  { name: "Git", icon: <SiGit className="text-red-400" /> },
  { name: "GitHub", icon: <SiGithub className="text-white" /> },
  { name: "shadcn/react", icon: <SiReact className="text-cyan-400" /> },
];

const academicSkills = [
  { name: "C" },
  { name: "C++" },
  { name: "Java", icon: <FaJava className="text-red-500" /> },
  { name: "OOPS" },
  { name: "NetBeans" },
  { name: "Computer Networks" },
  { name: "DBMS" },
  { name: "SQL" },
  { name: "Python", icon: <FaPython className="text-yellow-300" /> },
];

export default function Skills() {
  return (
    <section className="py-20 px-6 bg-gradient-to-br from-indigo-900 via-purple-900 to-zinc-900">
      <h2 className="text-3xl font-bold mb-8 text-center text-indigo-400">Skills</h2>
      <div className="flex flex-col md:flex-row gap-12 justify-center items-start">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="flex-1"
        >
          <Card className="p-8">
            <h3 className="text-xl font-bold text-indigo-300 mb-4">Web Skills</h3>
            <ul className="ml-4 border-l-2 border-indigo-500 pl-6">
              {webSkills.map((skill, idx) => (
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
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="flex-1"
        >
          <Card className="p-8">
            <h3 className="text-xl font-bold text-indigo-300 mb-4">Academic Skills</h3>
            <ul className="ml-4 border-l-2 border-pink-500 pl-6">
              {academicSkills.map((skill, idx) => (
                <motion.li
                  key={skill.name}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-center gap-3 mb-3 text-white/90 hover:text-pink-400 transition-colors duration-200"
                >
                  {skill.icon && <span className="text-2xl">{skill.icon}</span>}
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