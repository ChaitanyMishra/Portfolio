import { motion } from "framer-motion";
import Tilt from "react-parallax-tilt";
import { useTheme } from "../Contexts/ThemeContext";
import { FaGraduationCap, FaCertificate, FaCode, FaBookOpen } from "react-icons/fa";
void motion;

const education = {
  degree: "Bachelor in Computer Applications",
  college: "Maharana Pratap College of Professional Studies",
  semester: "5th Semester",
  cgpa: "7.24/10 (till 4th semester)",
  certifications: [
    {
      name: "Code-o-Fiesta 2.0 — Participant Certificate",
      link: "https://drive.google.com/drive/u/1/search?q=code hackathon",
      desc: "Participated in Code-o-Fiesta 2.0 hackathon"
    }
  ],
  extra: [
    {
      title: 'Python Mania 3.0',
      role: 'Tech Team Member',
      desc: 'Annual college fest; coordinated contest logistics and technical support'
    }
  ]
};

const coreSubjects = [
  { name: "C Programming", icon: "🔧", color: "from-blue-500 to-cyan-500" },
  { name: "Object Oriented Programming Using C++", icon: "⚙️", color: "from-purple-500 to-pink-500" },
  { name: "Python Programming", icon: "🐍", color: "from-green-500 to-emerald-500" },
  { name: "Data Structure Using C & C++", icon: "📊", color: "from-orange-500 to-red-500" },
  { name: "Operating System", icon: "💻", color: "from-indigo-500 to-blue-500" },
  { name: "Computer Graphics & Animation", icon: "🎨", color: "from-pink-500 to-rose-500" },
  { name: "Database Management System", icon: "🗄️", color: "from-yellow-500 to-orange-500" },
  { name: "Software Engineering", icon: "🏗️", color: "from-teal-500 to-cyan-500" },
  { name: "Java Programming", icon: "☕", color: "from-red-500 to-pink-500" },
  { name: "Dynamic Webpage Design", icon: "🌐", color: "from-cyan-500 to-blue-500" },
  { name: "Computer Network", icon: "🌐", color: "from-violet-500 to-purple-500" },
  { name: "Information & Cyber Security", icon: "🔒", color: "from-gray-500 to-slate-500" },
  { name: "Internet Of Things", icon: "📡", color: "from-emerald-500 to-green-500" },
  { name: "E-Commerce", icon: "🛒", color: "from-amber-500 to-yellow-500" },
  { name: "Data Science and Machine Learning", icon: "🤖", color: "from-rose-500 to-pink-500" }
];

export default function Education() {
  const { theme } = useTheme();
  
  return (
    <section id="education" className={`py-20 px-6 ${theme.colors.secondary} relative overflow-hidden`}>
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 -right-20 w-40 h-40 bg-white/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 -left-20 w-40 h-40 bg-white/5 rounded-full blur-3xl" />
      </div>
      
      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.h2 
            className="text-4xl font-bold bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent mb-4"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
            viewport={{ once: true }}
          >
            Education & Learning
          </motion.h2>
          <motion.p 
            className="text-white/70 text-lg max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            My academic journey and core subjects that shaped my technical foundation
          </motion.p>
        </motion.div>

        {/* Academic Information */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          <Tilt glareEnable={true} glareMaxOpacity={0.3} scale={1.02} className="rounded-2xl">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
              className={`${theme.colors.glass} backdrop-blur-md rounded-2xl p-8 border border-white/20 shadow-2xl`}
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-lg flex items-center justify-center">
                  <FaGraduationCap className="text-white text-xl" />
                </div>
                <h3 className="text-2xl font-bold text-white">Academic Background</h3>
              </div>
              
              <div className="space-y-4">
                <div className="p-4 bg-white/5 rounded-xl">
                  <h4 className="text-lg font-semibold text-cyan-300 mb-2">{education.degree}</h4>
                  <p className="text-white/80">{education.college}</p>
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <div className="p-3 bg-white/5 rounded-lg">
                    <p className="text-white/70 text-sm">Current Semester</p>
                    <p className="text-white font-medium">{education.semester}</p>
                  </div>
                  <div className="p-3 bg-white/5 rounded-lg">
                    <p className="text-white/70 text-sm">CGPA</p>
                    <p className="text-white font-medium">{education.cgpa}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </Tilt>

          <Tilt glareEnable={true} glareMaxOpacity={0.3} scale={1.02} className="rounded-2xl">
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
              className={`${theme.colors.glass} backdrop-blur-md rounded-2xl p-8 border border-white/20 shadow-2xl`}
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-400 to-pink-500 rounded-lg flex items-center justify-center">
                  <FaCertificate className="text-white text-xl" />
                </div>
                <h3 className="text-2xl font-bold text-white">Achievements</h3>
              </div>
              
              <div className="space-y-4">
                {education.certifications.map((cert, idx) => (
                  <motion.div
                    key={cert.name}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: idx * 0.1 }}
                    viewport={{ once: true }}
                    className="p-4 bg-white/5 rounded-xl hover:bg-white/10 transition-colors"
                  >
                    <a 
                      href={cert.link} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-cyan-300 hover:text-cyan-200 font-medium underline"
                    >
                      {cert.name}
                    </a>
                    <p className="text-white/70 text-sm mt-1">{cert.desc}</p>
                  </motion.div>
                ))}
                
                {education.extra.map((ex, idx) => (
                  <motion.div
                    key={ex.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: (education.certifications.length + idx) * 0.1 }}
                    viewport={{ once: true }}
                    className="p-4 bg-white/5 rounded-xl hover:bg-white/10 transition-colors"
                  >
                    <h4 className="text-white font-medium">{ex.title}</h4>
                    <p className="text-purple-300 text-sm">{ex.role}</p>
                    <p className="text-white/70 text-sm mt-1">{ex.desc}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </Tilt>
        </div>

        {/* Core Subjects */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <div className="flex items-center justify-center gap-4 mb-8">
            <div className="w-12 h-12 bg-gradient-to-r from-green-400 to-emerald-500 rounded-lg flex items-center justify-center">
              <FaBookOpen className="text-white text-xl" />
            </div>
            <h3 className="text-3xl font-bold text-white">Core Subjects</h3>
          </div>
          <p className="text-white/70 text-lg max-w-2xl mx-auto">
            Comprehensive curriculum covering fundamental computer science concepts and modern technologies
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {coreSubjects.map((subject, idx) => (
            <Tilt key={subject.name} glareEnable={true} glareMaxOpacity={0.2} scale={1.05} className="rounded-xl">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.05 }}
                viewport={{ once: true }}
                className={`${theme.colors.glass} backdrop-blur-md rounded-xl p-4 border border-white/20 shadow-xl hover:shadow-2xl transition-all duration-300 group`}
              >
                <div className="flex items-center gap-3">
                  <div className={`w-10 h-10 rounded-lg bg-gradient-to-r ${subject.color} flex items-center justify-center text-lg shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    {subject.icon}
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="text-white font-medium text-sm group-hover:text-cyan-300 transition-colors leading-tight">
                      {subject.name}
                    </h4>
                  </div>
                </div>
              </motion.div>
            </Tilt>
          ))}
        </div>
      </div>
    </section>
  );
}
