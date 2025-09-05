

import { motion } from "framer-motion";
import { Card } from "../components/ui/Card";
void motion;

const items = [
  {
    key: 'education',
    title: 'Education',
    content: (
      <ul className="list-disc ml-5 text-white/80">
        <li className="mb-2">Bachelor in Computer Applications — Maharana Pratap College of Professional Studies</li>
        <li className="mb-2">Semester: 5th — CGPA: 7.24/10 (till 4th)</li>
      </ul>
    )
  },
  {
    key: 'languages',
    title: 'Languages & Frameworks',
    content: (
      <ul className="list-disc ml-5 text-white/80">
        <li className="mb-2">HTML5, CSS3, JavaScript (ES6+)</li>
        <li className="mb-2">React.js, Tailwind CSS</li>
      </ul>
    )
  },
  {
    key: 'tools',
    title: 'Tools & Platforms',
    content: (
      <ul className="list-disc ml-5 text-white/80">
        <li className="mb-2">Git, GitHub, VS Code</li>
        <li className="mb-2">Netlify, Vercel, Render</li>
      </ul>
    )
  },
  {
    key: 'soft',
    title: 'Soft Skills',
    content: (
      <ul className="list-disc ml-5 text-white/80">
        <li className="mb-2">Problem Solving, Communication</li>
        <li className="mb-2">Team Collaboration, Visual Design</li>
      </ul>
    )
  },
  {
    key: 'certs',
    title: 'Certifications',
    content: (
      <ul className="list-disc ml-5 text-white/80">
        <li className="mb-2">Code-o-Fiesta 2.0 — Participant Certificate — <a href="https://drive.google.com/drive/u/1/search?q=code hackathon" target="_blank" rel="noreferrer" className="underline">view</a></li>
        <li className="mb-2">Python Mania 3.0 — Tech Team Member</li>
      </ul>
    )
  }
];

function TimelineItem({ item, index }){
  const isLeft = index % 2 === 0;
  return (
    <motion.div
      initial={{ opacity: 0, x: isLeft ? -60 : 60 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.7, ease: 'easeOut', delay: index * 0.08 }}
      viewport={{ once: true }}
      className={`w-full md:w-2/3 relative flex ${isLeft ? 'md:justify-start' : 'md:justify-end'}`}
    >
      {/* connector bar from center line to card */}
      <div className="hidden md:block absolute top-1/2 transform -translate-y-1/2" style={{ left: isLeft ? '50%' : 'auto', right: isLeft ? 'auto' : '50%' }}>
        <div className={`h-1 ${isLeft ? 'bg-gradient-to-r from-transparent via-indigo-500 to-purple-500' : 'bg-gradient-to-l from-transparent via-purple-500 to-pink-500'}`} style={{ width: '2rem', transformOrigin: 'left' }} />
      </div>

      {/* dot on center line */}
      <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 md:hidden top-0" />

      <Card className="p-6 bg-white/6 backdrop-blur-md border border-white/10 shadow-xl">
        <h3 className="text-lg font-bold text-indigo-300 mb-2">{item.title}</h3>
        <div className="text-sm text-white/80">{item.content}</div>
      </Card>
    </motion.div>
  )
}

export default function Timeline(){
  return (
    <section className="py-20 px-6 bg-gradient-to-br from-indigo-900 via-purple-900 to-zinc-900">
      <h2 className="text-3xl font-bold mb-8 text-center text-indigo-400">Timeline</h2>
      <div className="relative max-w-5xl mx-auto">
        {/* center spine */}
        <div className="absolute left-1/2 top-6 bottom-6 w-1 bg-gradient-to-b from-indigo-500 via-purple-500 to-pink-500 rounded-full z-0 shadow-lg" style={{ transform: 'translateX(-50%)', boxShadow: '0 0 30px rgba(147, 51, 234, 0.15)' }} />

        <div className="relative flex flex-col gap-10">
          {items.map((it, idx) => (
            <div key={it.key} className="relative">
              {/* dot connector */}
              <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
                <motion.div initial={{ scale: 0 }} whileInView={{ scale: 1 }} transition={{ duration: 0.4, delay: idx * 0.06 }} className="w-4 h-4 rounded-full bg-gradient-to-tr from-indigo-400 to-pink-400 border-2 border-white/20 shadow-md" />
              </div>

              <div className="mt-6 md:mt-0">
                <TimelineItem item={it} index={idx} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
