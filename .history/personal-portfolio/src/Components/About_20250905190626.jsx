
import { motion } from "framer-motion";
import Tilt from "react-parallax-tilt";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { useTheme } from "../../contexts/ThemeContext";
void motion;

export default function About() {
  const { theme } = useTheme();
  
  return (
    <section id="about" className={`min-h-[80vh] flex flex-col md:flex-row items-center justify-center gap-12 py-20 px-6 ${theme.colors.secondary} relative overflow-hidden`}>
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-20 -right-20 w-40 h-40 bg-white/5 rounded-full blur-3xl" />
        <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-white/5 rounded-full blur-3xl" />
      </div>
      
      <motion.div
        initial={{ opacity: 0, x: -40 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="flex-1 flex justify-center relative z-10"
      >
        <Tilt glareEnable={true} glareMaxOpacity={0.3} scale={1.05} className="rounded-full shadow-2xl">
          <div className="relative group">
            <img
              src="/public/chaitany.jpg"
              alt="Profile"
              className="w-48 h-48 rounded-full object-cover border-4 border-white/30 shadow-2xl hover:shadow-pink-500/40 transition-all duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-400/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          </div>
        </Tilt>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, x: 40 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="flex-1 max-w-xl text-white/90"
      >
        <h1 className="text-4xl font-extrabold text-indigo-400 mb-2">Chaitany Mishra</h1>
        <h2 className="text-2xl font-semibold text-indigo-300 mb-2">Frontend Web Developer</h2>
        <div className="flex flex-wrap gap-4 mb-4 text-sm">
          <span className="bg-indigo-500/20 px-3 py-1 rounded-full">Kanpur</span>
          <span className="bg-indigo-500/20 px-3 py-1 rounded-full">9305224208</span>
          <span className="bg-indigo-500/20 px-3 py-1 rounded-full">chaitany.mishra.tech@gmail.com</span>
          <a href="https://github.com/ChaitanyMishra" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 bg-indigo-500/20 px-3 py-1 rounded-full hover:bg-indigo-500/40 transition-colors"><FaGithub /> GitHub</a>
          <a href="https://www.linkedin.com/in/chaitany-dev-hash/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 bg-indigo-500/20 px-3 py-1 rounded-full hover:bg-indigo-500/40 transition-colors"><FaLinkedin /> LinkedIn</a>
        </div>
        <h3 className="text-lg font-bold text-indigo-300 mb-2">SUMMARY</h3>
        <p className="text-base mb-2">
          Fast-learning and dedicated Frontend Web Developer with hands-on experience building responsive, user-friendly web applications using HTML, CSS, JavaScript, and React.js. Strong understanding of UI/UX principles, component-based design, and cloud-based deployment tools. Passionate about product development, problem-solving, and cross-functional collaboration. Seeking an entry-level role in a startup or product-based company to contribute to impactful tech teams.
        </p>
      </motion.div>
    </section>
  );
}