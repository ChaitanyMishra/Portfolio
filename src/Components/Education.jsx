import { motion } from "framer-motion";
import Tilt from "react-parallax-tilt";
import { useTheme } from "../contexts/ThemeContext";
import { useMemo, useState } from "react";
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
  const [activeTab, setActiveTab] = useState('education');
  const base = useMemo(() => import.meta.env.BASE_URL || '/', []);
  const certificates = useMemo(() => ([
    { title: "Code-O-Fiesta 2.0", file: "hackathon.pdf" },
    { title: "Python Mania 3.0", file: "PYTHON MANIA 3.O (1).pdf" },
    { title: "JavaScript Intermediate", file: "javascript_intermediate certificate.pdf" },
    { title: "Python Basic", file: "python_basic certificate.pdf" },
    { title: "Udemy JavaScript", file: "UdemyJavaScript.pdf" },
    { title: "Cyber Security", file: "cyberSecurty.pdf" },
    { title: "SEO Crash Course", file: "chaitany-mishra_2.pdf" },
    { title: "TCS iON Young Professional Program", file: "Chaitany_Mishra_4828384.pdf" },
  ]), []);
  
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
          className="text-center mb-10 sm:mb-12"
        >
          <motion.h2 
            className="text-4xl font-bold bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent mb-4 drop-shadow-[0_1px_8px_rgba(0,0,0,0.25)]"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
            viewport={{ once: true }}
          >
            Education & Learning
          </motion.h2>
          <motion.p 
            className={`text-lg max-w-2xl mx-auto ${theme.colors.textSecondary} drop-shadow-[0_1px_6px_rgba(0,0,0,0.2)]`}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            My academic journey and core subjects that shaped my technical foundation
          </motion.p>
        </motion.div>

        {/* Sub navigation tabs */}
        <div className="max-w-3xl mx-auto mb-12">
          <div className={`${theme.colors.glass} rounded-xl p-1 border border-white/20 shadow-xl w-full`} role="tablist" aria-label="Education tabs">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-1">
              <button
                role="tab"
                aria-selected={activeTab === 'education'}
                className={`py-3 px-2 sm:px-4 rounded-lg font-semibold transition-all text-sm sm:text-base ${activeTab === 'education' ? 'bg-white/15 text-white shadow-inner' : 'text-white/80 hover:text-white hover:bg-white/5'}`}
                onClick={() => setActiveTab('education')}
              >
                <span className="truncate">Education</span>
              </button>
              <button
                role="tab"
                aria-selected={activeTab === 'certifications'}
                className={`py-3 px-2 sm:px-4 rounded-lg font-semibold transition-all text-sm sm:text-base ${activeTab === 'certifications' ? 'bg-white/15 text-white shadow-inner' : 'text-white/80 hover:text-white hover:bg-white/5'}`}
                onClick={() => setActiveTab('certifications')}
              >
                <span className="truncate">Certifications</span>
              </button>
              <button
                role="tab"
                aria-selected={activeTab === 'techstack'}
                className={`py-3 px-2 sm:px-4 rounded-lg font-semibold transition-all text-sm sm:text-base ${activeTab === 'techstack' ? 'bg-white/15 text-white shadow-inner' : 'text-white/80 hover:text-white hover:bg-white/5'}`}
                onClick={() => setActiveTab('techstack')}
              >
                <span className="truncate">Tech Stack</span>
              </button>
            </div>
          </div>
        </div>

        {activeTab === 'education' && (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16" role="tabpanel" aria-label="Education">
          <Tilt glareEnable={true} glareMaxOpacity={0.3} scale={1.02} className="rounded-2xl">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
              className={`${theme.colors.card} rounded-2xl p-8 border border-white/20`}
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-lg flex items-center justify-center">
                  <FaGraduationCap className="text-white text-xl" />
                </div>
                <h3 className="text-2xl font-bold text-white drop-shadow-[0_1px_6px_rgba(0,0,0,0.3)]">Academic Background</h3>
              </div>
              
              <div className="space-y-4">
                <div className="p-4 bg-white/5 rounded-xl">
                  <h4 className="text-lg font-semibold text-cyan-300 mb-2 drop-shadow">{education.degree}</h4>
                  <p className={`${theme.colors.text} opacity-90 drop-shadow-[0_1px_6px_rgba(0,0,0,0.1)]`}>{education.college}</p>
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <div className="p-3 bg-white/5 rounded-lg">
                    <p className={`${theme.colors.cardText} opacity-70 text-sm`}>Current Semester</p>
                    <p className={`${theme.colors.cardText} font-medium`}>{education.semester}</p>
                  </div>
                  <div className="p-3 bg-white/5 rounded-lg">
                    <p className={`${theme.colors.cardText} opacity-70 text-sm`}>CGPA</p>
                    <p className={`${theme.colors.cardText} font-medium`}>{education.cgpa}</p>
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
              className={`${theme.colors.card} rounded-2xl p-8 border border-white/20`}
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-400 to-pink-500 rounded-lg flex items-center justify-center">
                  <FaCertificate className="text-white text-xl" />
                </div>
                <h3 className="text-2xl font-bold text-white drop-shadow-[0_1px_6px_rgba(0,0,0,0.3)]">Achievements</h3>
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
                      className="text-cyan-300 hover:text-cyan-200 font-medium underline drop-shadow"
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
                    <h4 className={`${theme.colors.cardText} font-medium drop-shadow`}>{ex.title}</h4>
                    <p className={`${theme.colors.cardText} opacity-80 text-sm drop-shadow`}>{ex.role}</p>
                    <p className={`${theme.colors.cardText} opacity-70 text-sm mt-1`}>{ex.desc}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </Tilt>
        </div>
        )}

        {/* Core Subjects */}
        {activeTab === 'education' && (
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
            <h3 className="text-3xl font-bold text-white drop-shadow">Core Subjects</h3>
          </div>
          <p className="text-white/70 text-lg max-w-2xl mx-auto">
            Comprehensive curriculum covering fundamental computer science concepts and modern technologies
          </p>
        </motion.div>
        )}

        {activeTab === 'education' && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 sm:gap-4">
            {coreSubjects.map((subject, idx) => (
              <Tilt key={subject.name} glareEnable={true} glareMaxOpacity={0.2} scale={1.05} className="rounded-xl">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: idx * 0.05 }}
                  viewport={{ once: true }}
                  className={`${theme.colors.card} rounded-xl p-3 sm:p-4 border border-white/20 shadow-xl hover:shadow-2xl transition-all duration-300 group`}
                >
                  <div className="flex items-center gap-2 sm:gap-3">
                    <div className={`w-8 h-8 sm:w-10 sm:h-10 rounded-lg bg-gradient-to-r ${subject.color} flex items-center justify-center text-sm sm:text-lg shadow-lg group-hover:scale-110 transition-transform duration-300 flex-shrink-0`}>
                      {subject.icon}
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="text-white font-medium text-xs sm:text-sm group-hover:text-cyan-300 transition-colors leading-tight">
                        {subject.name}
                      </h4>
                    </div>
                  </div>
                </motion.div>
              </Tilt>
            ))}
          </div>
        )}

        {activeTab === 'certifications' && (
          <div role="tabpanel" aria-label="Certifications" className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {certificates.map((c, idx) => (
              <Tilt key={c.file} glareEnable glareMaxOpacity={0.2} scale={1.02} className="rounded-xl">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: idx * 0.05 }}
                  viewport={{ once: true }}
                  className={`${theme.colors.glass} rounded-xl border border-white/20 shadow-2xl overflow-hidden`}
                >
                  <div className="bg-gradient-to-r from-cyan-400/20 to-purple-500/20 py-3 px-4 border-b border-white/10">
                    <h3 className="text-white font-semibold drop-shadow truncate text-sm sm:text-base">{c.title}</h3>
                  </div>
                  <div className="p-3 sm:p-4">
                    <div className="bg-white rounded-[14px] shadow-[inset_0_2px_6px_rgba(0,0,0,0.08)] p-2">
                      <div className="rounded-[10px] overflow-hidden border border-zinc-200 shadow-xl">
                        {/* Mobile-friendly PDF display */}
                        <div className="relative">
                          <object 
                            data={`${base}${encodeURIComponent(c.file)}`} 
                            type="application/pdf" 
                            width="100%" 
                            height="200"
                            className="hidden sm:block"
                          >
                            <iframe 
                              src={`${base}${encodeURIComponent(c.file)}`} 
                              title={c.title} 
                              width="100%" 
                              height="200"
                              className="hidden sm:block"
                            />
                          </object>
                          {/* Mobile fallback */}
                          <div className="sm:hidden bg-gray-100 rounded-lg h-48 flex items-center justify-center">
                            <div className="text-center p-4">
                              <div className="w-16 h-16 mx-auto mb-3 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full flex items-center justify-center">
                                <FaCertificate className="text-white text-2xl" />
                              </div>
                              <p className="text-gray-600 text-sm font-medium">{c.title}</p>
                              <p className="text-gray-500 text-xs mt-1">Tap to view PDF</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-2 sm:gap-3 px-3 sm:px-4 pb-3 sm:pb-4">
                    <a
                      href={`${base}${encodeURIComponent(c.file)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 sm:flex-none px-3 sm:px-4 py-2 rounded-lg bg-white/10 hover:bg-white/15 text-white font-medium shadow text-center text-sm sm:text-base transition-colors"
                    >
                      View PDF
                    </a>
                    <a
                      href={`${base}${encodeURIComponent(c.file)}`}
                      download
                      className="flex-1 sm:flex-none px-3 sm:px-4 py-2 rounded-lg bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-400 hover:to-purple-400 text-white font-semibold shadow text-center text-sm sm:text-base transition-colors"
                    >
                      Download
                    </a>
                  </div>
                </motion.div>
              </Tilt>
            ))}
          </div>
        )}

        {activeTab === 'techstack' && (
          <div role="tabpanel" aria-label="Tech Stack" className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 place-items-center">
            {[
              { name: 'HTML5', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original-wordmark.svg' },
              { name: 'CSS3', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original-wordmark.svg' },
              { name: 'JavaScript (ES6)', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg' },
              { name: 'React.js', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original-wordmark.svg' },
              { name: 'Node.js', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original-wordmark.svg' },
              { name: 'Express.js', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original-wordmark.svg' },
              { name: 'MongoDB', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original-wordmark.svg' },
              { name: 'TailwindCSS', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original-wordmark.svg' },
              { name: 'Git', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original-wordmark.svg' },
              { name: 'GitHub', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original-wordmark.svg' }
            ].map((t, idx) => (
              <Tilt key={t.name} glareEnable glareMaxOpacity={0.2} scale={1.05} className="rounded-xl w-full flex items-center justify-center">
                <motion.div
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.45, delay: idx * 0.05 }}
                  viewport={{ once: true }}
                  className="w-full max-w-[140px] sm:max-w-[180px]"
                >
                  <div className={`${theme.colors.glass} rounded-[14px] p-2 border border-white/20 shadow-[0_6px_20px_rgba(0,0,0,0.18)]`}> 
                    <div className="rounded-[10px] overflow-hidden border border-white/20 shadow-inner bg-white/10 backdrop-blur-md flex items-center justify-center">
                      <img
                        src={t.src}
                        alt={t.name}
                        title={t.name}
                        loading="lazy"
                        decoding="async"
                        className="w-20 h-20 sm:w-28 sm:h-28 object-contain"
                      />
                    </div>
                  </div>
                  <span className={`${theme.colors.cardText} mt-2 block text-center text-xs sm:text-sm font-medium truncate`}>{t.name}</span>
                </motion.div>
              </Tilt>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
