import { motion } from "framer-motion"
import { Card } from "../components/ui/Card"

const items = [
  {
    key: 'languages',
    title: 'Languages & Frameworks',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-yellow-400">
        <path d="M4 4h16v16H4z" fill="url(#g)" opacity="0.06" />
        <path d="M7 7h10v10H7z" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
        <defs>
          <linearGradient id="g" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#FDE68A" />
            <stop offset="100%" stopColor="#FCA5A5" />
          </linearGradient>
        </defs>
      </svg>
    ),
    bullets: ['HTML5', 'CSS3', 'JavaScript (ES6+)', 'React.js', 'Tailwind CSS']
  },
  {
    key: 'tools',
    title: 'Tools & Platforms',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-cyan-300">
        <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.2" />
        <path d="M8 12h8" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
      </svg>
    ),
    bullets: ['Git', 'GitHub', 'VS Code', 'Vercel', 'Netlify']
  },
  {
    key: 'soft',
    title: 'Soft Skills',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-purple-300">
        <path d="M12 2v20" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
        <path d="M2 12h20" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
      </svg>
    ),
    bullets: ['Problem Solving', 'Communication', 'Team Collaboration', 'Visual Design']
  },
  {
    key: 'certs',
    title: 'Certifications',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-pink-300">
        <path d="M6 4h12v6H6z" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M8 14l2 2 4-4 2 2" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    bullets: ['Code-o-Fiesta 2.0 - Participant']
  }
]

function TimelineItem({ item, index }) {
  const isLeft = index % 2 === 0
  return (
    <motion.div
      initial={{ opacity: 0, x: isLeft ? -60 : 60 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut', delay: index * 0.06 }}
      viewport={{ once: true, amount: 0.2 }}
      className={`relative w-full md:w-5/12 ${isLeft ? 'md:mr-auto md:pl-12' : 'md:ml-auto md:pr-12'}`}
    >
      {/* connector */}
      <div className={`hidden md:flex items-center absolute top-1/2 transform -translate-y-1/2 ${isLeft ? 'right-0' : 'left-0'}`} style={{ width: '3rem', [isLeft ? 'right' : 'left']: '-3rem' }}>
        <div className="h-1 flex-1 bg-gradient-to-r from-transparent via-indigo-500 to-purple-500 opacity-90 rounded-full" />
        <div className="w-4 h-4 rounded-full bg-gradient-to-br from-indigo-400 to-pink-400 shadow-lg border-2 border-white/20 ml-3" />
      </div>

      <Card className="p-6 bg-gradient-to-br from-zinc-900/70 to-black/60 border border-white/6 backdrop-blur-sm hover:scale-[1.01] transition-transform duration-300">
        <div className="flex items-center gap-4 mb-3">
          <div className="w-10 h-10 flex items-center justify-center rounded-lg bg-white/5">{item.icon}</div>
          <h3 className="text-lg font-semibold text-indigo-200">{item.title}</h3>
        </div>
        <ul className="ml-5 list-disc text-white/80">
          {item.bullets.map((b) => (
            <li key={b} className="mb-1">{b}</li>
          ))}
        </ul>
      </Card>
    </motion.div>
  )
}

export default function SkillsTimeline() {
  return (
    <section className="py-16 px-6">
      <h2 className="text-3xl font-bold text-center text-indigo-300 mb-8">Skills</h2>
      <div className="relative max-w-6xl mx-auto">
        {/* center line */}
        <div className="absolute left-1/2 top-6 bottom-6 w-1 transform -translate-x-1/2 bg-gradient-to-b from-indigo-500 via-purple-500 to-pink-500 rounded-full shadow-[0_0_18px_rgba(124,58,237,0.12)]" />

        <div className="flex flex-col gap-12">
          {items.map((it, idx) => (
            <TimelineItem key={it.key} item={it} index={idx} />
          ))}
        </div>
      </div>
    </section>
  )
}
import React from "react";
import { motion } from "framer-motion";
import { Card } from "../components/ui/Card";

const items = [
  {
    key: "languages",
    title: "Languages & Frameworks",
    content: (
      <ul className="list-disc ml-5 text-white/85">
        <li>HTML5, CSS3, JavaScript (ES6+)</li>
        <li>React.js, Tailwind CSS</li>
        <li>Basic understanding of Python & Java</li>
      </ul>
    ),
  },
  {
    key: "tools",
    title: "Tools & Platforms",
    content: (
      <ul className="list-disc ml-5 text-white/85">
        <li>Git, GitHub, VS Code</li>
        <li>Vercel, Netlify, Render</li>
        <li>Chrome DevTools, AWS (basic)</li>
      </ul>
    ),
  },
  {
    key: "soft",
    title: "Soft Skills",
    content: (
      <ul className="list-disc ml-5 text-white/85">
        <li>Problem solving & critical thinking</li>
        <li>Team collaboration & communication</li>
        <li>Visual design sensibility</li>
      </ul>
    ),
  },
  {
    key: "certs",
    title: "Certifications",
    content: (
      <ul className="list-disc ml-5 text-white/85">
        <li>
          <a href="https://drive.google.com/drive/u/1/search?q=code hackathon" target="_blank" rel="noreferrer" className="underline">
            Code-o-Fiesta 2.0 — Participant Certificate
          </a>
        </li>
        <li>Python Mania 3.0 — Tech Team Member</li>
      </ul>
    ),
  },
];

function TimelineItem({ item, index }) {
  const isLeft = index % 2 === 0;

  return (
    <div className="relative">
      <div className={`md:flex md:items-center md:justify-${isLeft ? "start" : "end"}`}>
        <div className={`w-full md:w-5/12 ${isLeft ? "md:mr-auto md:pl-12" : "md:ml-auto md:pr-12"}`}>
          <motion.div
            initial={{ opacity: 0, x: isLeft ? -80 : 80, y: 20 }}
            whileInView={{ opacity: 1, x: 0, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <Card>
              <h3 className="text-lg font-semibold text-indigo-300 mb-2">{item.title}</h3>
              <div className="text-sm text-white/80">{item.content}</div>
            </Card>
          </motion.div>
        </div>
      </div>

      {/* Connector line from card to center and center dot */}
      <div className="hidden md:block">
        <motion.div
          className={`absolute top-1/2 transform -translate-y-1/2 ${isLeft ? "right-0" : "left-0"}`}
          style={{ [isLeft ? "right" : "left"]: "-3rem", width: "3rem", height: 2 }}
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 0.5 }}
        >
          <div className={`${isLeft ? "bg-gradient-to-r from-transparent via-indigo-500 to-purple-500" : "bg-gradient-to-l from-transparent via-pink-500 to-purple-500"} h-1 w-full rounded-full`} />
        </motion.div>

        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
          <div className="w-4 h-4 rounded-full bg-indigo-500 ring-2 ring-white/10 shadow-lg" />
        </div>
      </div>
    </div>
  );
}

export default function SkillsTimeline() {
  return (
    <section className="py-16 px-4 lg:px-8">
      <div className="relative max-w-5xl mx-auto">
        {/* Center spine */}
        <div className="absolute left-1/2 top-0 bottom-0 w-1 transform -translate-x-1/2 bg-gradient-to-b from-indigo-500 via-purple-500 to-pink-500 rounded-full shadow-[0_0_20px_rgba(99,102,241,0.12)]" />

        <div className="space-y-12">
          {items.map((item, idx) => (
            <div key={item.key} className="relative">
              <TimelineItem item={item} index={idx} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
