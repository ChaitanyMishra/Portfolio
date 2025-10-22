import { motion } from "framer-motion";
import Tilt from "react-parallax-tilt";
import { useTheme } from "../contexts/ThemeContext";

const certificates = [
  { title: "Code-O-Fiesta 2.0", file: "hackathon.pdf" },
  { title: "Python Mania 3.0", file: "PYTHON MANIA 3.O (1).pdf" },
  { title: "JavaScript Intermediate", file: "javascript_intermediate certificate.pdf" },
  { title: "Python Basic", file: "python_basic certificate.pdf" },
  { title: "Udemy JavaScript", file: "UdemyJavaScript.pdf" },
  { title: "Cyber Security", file: "cyberSecurty.pdf" },
  { title: "SEO Crash Course", file: "chaitany-mishra_2.pdf" },
  { title: "TCS iON Young Professional Program", file: "Chaitany_Mishra_4828384.pdf" },
];

export default function Certifications() {
  const { theme } = useTheme();
  const base = import.meta.env.BASE_URL || "/";

  return (
    <section id="certifications" className={` pt-24 pb-16 px-6 ${theme.colors.secondary} min-h-screen`}>
      <div className="max-w-6xl mx-auto">
        <motion.h2
          className="text-4xl font-bold bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent mb-8 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          Certifications
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {certificates.map((c, idx) => (
            <Tilt key={c.file} glareEnable glareMaxOpacity={0.2} scale={1.02} className="rounded-xl">
              <motion.a
                href={`${base}${encodeURIComponent(c.file)}`}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                viewport={{ once: true }}
                className={`${theme.colors.glass} block rounded-xl p-4 sm:p-5 border border-white/20 shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all duration-300`}
              >
                <div className="flex items-center gap-3 sm:gap-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-gradient-to-r from-cyan-400 to-purple-500 flex-shrink-0" />
                  <div className="flex-1 min-w-0">
                    <h3 className="text-white font-semibold truncate text-sm sm:text-base">{c.title}</h3>
                    <p className="text-white/60 text-xs sm:text-sm truncate">{c.file}</p>
                  </div>
                </div>
              </motion.a>
            </Tilt>
          ))}
        </div>
      </div>
    </section>
  );
}


