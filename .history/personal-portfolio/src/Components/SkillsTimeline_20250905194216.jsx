import React from 'react'
import { motion } from 'framer-motion'
import { useTheme } from '../contexts/ThemeContext'
void motion;

const skills = [
  { title: 'HTML5', meta: 'Semantic markup, accessibility', icon: '🌐', color: 'from-orange-400 to-red-500', level: 'expert' },
  { title: 'CSS3', meta: 'Flexbox, Grid, animations', icon: '🎨', color: 'from-blue-400 to-cyan-500', level: 'expert' },
  { title: 'JavaScript', meta: 'ES6+, DOM, async programming', icon: '⚡', color: 'from-yellow-400 to-orange-500', level: 'expert' },
  { title: 'React', meta: 'Hooks, Context, Router, State management', icon: '⚛️', color: 'from-cyan-400 to-blue-500', level: 'expert' },
  { title: 'C/C++', meta: 'Data structures, algorithms', icon: '🔧', color: 'from-blue-500 to-indigo-600', level: 'intermediate' },
  { title: 'Python', meta: 'Scripting, automation, data analysis', icon: '🐍', color: 'from-green-400 to-emerald-500', level: 'intermediate' },
  { title: 'Java', meta: 'OOP, Spring framework basics', icon: '☕', color: 'from-orange-500 to-red-500', level: 'intermediate' },
  { title: 'Git & GitHub', meta: 'Version control, collaboration', icon: '📚', color: 'from-gray-400 to-gray-600', level: 'expert' },
  { title: 'SQL', meta: 'Database queries, relationships', icon: '🗄️', color: 'from-purple-400 to-pink-500', level: 'intermediate' },
  { title: 'Tailwind CSS', meta: 'Utility-first, responsive design', icon: '💨', color: 'from-cyan-400 to-teal-500', level: 'expert' },
  { title: 'Node.js', meta: 'Server-side JavaScript', icon: '🟢', color: 'from-green-500 to-emerald-600', level: 'learning' },
  { title: 'Express.js', meta: 'Web framework for Node.js', icon: '🚀', color: 'from-gray-500 to-gray-700', level: 'learning' },
  { title: 'MongoDB', meta: 'NoSQL database', icon: '🍃', color: 'from-green-500 to-green-700', level: 'learning' },
  { title: 'TypeScript', meta: 'Typed JavaScript', icon: '🔷', color: 'from-blue-500 to-indigo-600', level: 'learning' },
  { title: 'PostgreSQL', meta: 'Relational database', icon: '🐘', color: 'from-blue-600 to-indigo-700', level: 'learning' },
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skill, idx) => (
            <motion.div
              key={skill.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              viewport={{ once: true, amount: 0.3 }}
              className="group"
            >
              <div className={`${theme.colors.glass} backdrop-blur-md border border-white/20 rounded-2xl p-6 shadow-2xl hover:shadow-3xl transition-all duration-500 hover:scale-105 h-full`}>
                <div className="flex items-center gap-4 mb-4">
                  <div className={`w-14 h-14 rounded-xl bg-gradient-to-r ${skill.color} flex items-center justify-center text-2xl shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    {skill.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-white group-hover:text-cyan-300 transition-colors mb-1">
                      {skill.title}
                    </h3>
                    <div className="flex items-center gap-2">
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                        skill.level === 'expert' 
                          ? 'bg-green-500/20 text-green-300 border border-green-500/30' 
                          : skill.level === 'intermediate'
                          ? 'bg-yellow-500/20 text-yellow-300 border border-yellow-500/30'
                          : 'bg-blue-500/20 text-blue-300 border border-blue-500/30'
                      }`}>
                        {skill.level === 'expert' ? 'Expert' : skill.level === 'intermediate' ? 'Intermediate' : 'Learning'}
                      </span>
                      {skill.level === 'learning' && (
                        <span className="text-xs text-blue-300 animate-pulse">📚</span>
                      )}
                    </div>
                  </div>
                </div>
                
                <p className="text-white/70 text-sm leading-relaxed mb-4">
                  {skill.meta}
                </p>
                
                {/* Skill level indicator */}
                <div className="w-full bg-white/10 rounded-full h-2 mb-2">
                  <motion.div
                    className={`h-2 rounded-full bg-gradient-to-r ${skill.color}`}
                    initial={{ width: 0 }}
                    whileInView={{ 
                      width: skill.level === 'expert' ? '90%' : skill.level === 'intermediate' ? '60%' : '30%' 
                    }}
                    transition={{ duration: 1, delay: idx * 0.1 + 0.5 }}
                    viewport={{ once: true }}
                  />
                </div>
                
                {/* Hover effect */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-cyan-400/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
