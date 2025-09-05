import { motion } from "framer-motion";
import { Card } from "../components/ui/Card";
import { Tooltip } from "@radix-ui/react-tooltip";
import { SiReact, SiTailwindcss, SiJavascript, SiNodedotjs, SiFramer, SiGithub } from "react-icons/si";

const skills = [
  { name: "React", icon: <SiReact className="text-cyan-400" /> },
  { name: "Tailwind CSS", icon: <SiTailwindcss className="text-teal-400" /> },
  { name: "JavaScript", icon: <SiJavascript className="text-yellow-400" /> },
  { name: "Node.js", icon: <SiNodedotjs className="text-green-400" /> },
  { name: "Framer Motion", icon: <SiFramer className="text-pink-400" /> },
  { name: "GitHub", icon: <SiGithub className="text-white" /> },
];

export default function Skills() {
  return (
    <section className="py-20 px-6 bg-gradient-to-br from-indigo-900 via-purple-900 to-zinc-900">
      <h2 className="text-3xl font-bold mb-8 text-center text-indigo-400">Skills</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 justify-items-center">
        {skills.map((skill, idx) => (
          <motion.div
            key={skill.name}
            whileHover={{ scale: 1.08, boxShadow: "0 0 24px #a78bfa" }}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            viewport={{ once: true }}
          >
            <Tooltip content={skill.name}>
              <Card className="flex flex-col items-center justify-center gap-2 p-6 cursor-pointer group hover:bg-indigo-500/20">
                <span className="text-5xl mb-2 group-hover:scale-110 transition-transform duration-200">
                  {skill.icon}
                </span>
                <span className="text-lg font-semibold text-white/90 group-hover:text-indigo-300">
                  {skill.name}
                </span>
              </Card>
            </Tooltip>
          </motion.div>
        ))}
      </div>
    </section>
  );
}