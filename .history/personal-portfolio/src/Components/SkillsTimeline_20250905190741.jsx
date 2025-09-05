import React from 'react'
import { motion } from 'framer-motion'
import { useTheme } from '../../contexts/ThemeContext'
void motion;

const skills = [
  { title: 'JavaScript', meta: 'ES6+, DOM, async', icon: '⚡', color: 'from-yellow-400 to-orange-500' },
  { title: 'React', meta: 'Hooks, Context, Router', icon: '⚛️', color: 'from-blue-400 to-cyan-500' },
  { title: 'Node.js', meta: 'Express, REST APIs', icon: '🟢', color: 'from-green-400 to-emerald-500' },
  { title: 'Tailwind CSS', meta: 'Design systems, responsive', icon: '🎨', color: 'from-cyan-400 to-blue-500' },
  { title: 'TypeScript', meta: 'Types, generics', icon: '🔷', color: 'from-blue-500 to-indigo-600' },
  { title: 'Databases', meta: 'MongoDB, Postgres', icon: '🗄️', color: 'from-purple-400 to-pink-500' },
  { title: 'Testing', meta: 'Jest, React Testing Library', icon: '🧪', color: 'from-pink-400 to-rose-500' },
]

export default function SkillsTimeline() {
  const { theme } = useTheme()
  
  return (
    <section id="skills" className={`py-20 px-6 ${theme.colors.primary} relative overflow-hidden`}>
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
          <h2 className="text-4xl font-bold bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent mb-4">
            Skills & Expertise
          </h2>
          <p className="text-white/70 text-lg max-w-2xl mx-auto">
            Technologies and tools I use to bring ideas to life
          </p>
        </motion.div>

        <div className="relative">
          {/* vertical spine */}
          <div className="absolute left-1/2 top-0 bottom-0 w-1 -translate-x-1/2 bg-gradient-to-b from-cyan-400 via-purple-500 to-pink-500 opacity-60 rounded-full" />

          <div className="space-y-16">
            {skills.map((skill, idx) => {
              const side = idx % 2 === 0 ? 'left' : 'right'
              const isLeft = side === 'left'
              return (
                <div key={skill.title} className="relative">
                  <motion.div
                    initial={{ opacity: 0, x: isLeft ? -60 : 60, y: 20 }}
                    whileInView={{ opacity: 1, x: 0, y: 0 }}
                    transition={{ duration: 0.7, delay: idx * 0.1 }}
                    viewport={{ once: true, amount: 0.3 }}
                    className={`${isLeft ? 'md:pr-12 md:pl-0 md:w-1/2 md:ml-0 md:mr-auto' : 'md:pl-12 md:pr-0 md:w-1/2 md:ml-auto md:mr-0'} w-full flex md:block items-center justify-${isLeft ? 'end' : 'start'}`}
                  >
                    <div className={`${theme.colors.glass} backdrop-blur-md border border-white/20 rounded-2xl p-6 shadow-2xl w-full md:w-auto hover:scale-105 transition-all duration-300 group`} style={{ maxWidth: 420 }}>
                      <div className="flex items-center gap-4 mb-3">
                        <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${skill.color} flex items-center justify-center text-2xl shadow-lg`}>
                          {skill.icon}
                        </div>
                        <h3 className="text-xl font-bold text-white group-hover:text-cyan-300 transition-colors">
                          {skill.title}
                        </h3>
                      </div>
                      <p className="text-white/70 text-sm leading-relaxed">{skill.meta}</p>
                      
                      {/* Hover effect */}
                      <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-cyan-400/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </div>
                  </motion.div>

                  {/* connector from spine to card */}
                  <div className="absolute left-1/2 top-8 -translate-x-1/2 flex items-center">
                    <motion.div
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      transition={{ duration: 0.5, delay: idx * 0.1 + 0.3 }}
                      viewport={{ once: true, amount: 0.3 }}
                      className="w-4 h-4 rounded-full bg-gradient-to-r from-cyan-400 to-purple-500 shadow-lg border-2 border-white/20"
                    />
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: isLeft ? 'calc(50% - 60px)' : 'calc(50% - 60px)' }}
                      transition={{ duration: 0.8, delay: idx * 0.1 + 0.4 }}
                      viewport={{ once: true, amount: 0.3 }}
                      className={`h-1 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full ${isLeft ? 'mr-auto' : 'ml-auto'} shadow-sm`}
                      style={{ minWidth: 60 }}
                    />
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
