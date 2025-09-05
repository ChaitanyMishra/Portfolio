import React from 'react'
import { motion } from 'framer-motion'
void motion;

const skills = [
  { title: 'JavaScript', meta: 'ES6+, DOM, async' },
  { title: 'React', meta: 'Hooks, Context, Router' },
  { title: 'Node.js', meta: 'Express, REST APIs' },
  { title: 'Tailwind CSS', meta: 'Design systems, responsive' },
  { title: 'TypeScript', meta: 'Types, generics' },
  { title: 'Databases', meta: 'MongoDB, Postgres' },
  { title: 'Testing', meta: 'Jest, React Testing Library' },
]

export default function SkillsTimeline() {
  return (
    <section id="skills" className="py-20 px-6">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12 text-slate-900">Skills</h2>

        <div className="relative">
          {/* vertical spine */}
          <div className="absolute left-1/2 top-0 bottom-0 w-1 -translate-x-1/2 bg-gradient-to-b from-indigo-300 to-pink-300 opacity-40 rounded-full" />

          <div className="space-y-12">
            {skills.map((skill, idx) => {
              const side = idx % 2 === 0 ? 'left' : 'right'
              const isLeft = side === 'left'
              return (
                <div key={skill.title} className="relative">
                  <motion.div
                    initial={{ opacity: 0, x: isLeft ? -40 : 40, y: 12 }}
                    whileInView={{ opacity: 1, x: 0, y: 0 }}
                    transition={{ duration: 0.6, delay: idx * 0.08 }}
                    viewport={{ once: true, amount: 0.3 }}
                    className={`${isLeft ? 'md:pr-8 md:pl-0 md:w-1/2 md:ml-0 md:mr-auto' : 'md:pl-8 md:pr-0 md:w-1/2 md:ml-auto md:mr-0'} w-full flex md:block items-center justify-${isLeft ? 'end' : 'start'}`}
                  >
                    <div className={`p-5 card-surface shadow-md md:rounded-lg rounded-lg w-full md:w-auto`} style={{ maxWidth: 420 }}>
                      <h3 className="text-lg font-semibold mb-1">{skill.title}</h3>
                      <p className="text-sm text-slate-700">{skill.meta}</p>
                    </div>
                  </motion.div>

                  {/* connector from spine to card */}
                  <div className="absolute left-1/2 top-6 -translate-x-1/2 flex items-center">
                    <div className="w-3 h-3 rounded-full bg-white border border-indigo-200 shadow" />
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: isLeft ? 'calc(50% - 40px)' : 'calc(50% - 40px)' }}
                      transition={{ duration: 0.6, delay: idx * 0.06 }}
                      viewport={{ once: true, amount: 0.3 }}
                      className={`h-0.5 bg-gradient-to-r from-indigo-300 to-pink-300 ${isLeft ? 'mr-auto' : 'ml-auto'}`}
                      style={{ minWidth: 40 }}
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
