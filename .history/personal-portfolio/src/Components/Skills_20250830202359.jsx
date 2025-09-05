

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
import SkillsTimeline from "./SkillsTimeline";

export default function Skills() {
  return <SkillsTimeline />;
}