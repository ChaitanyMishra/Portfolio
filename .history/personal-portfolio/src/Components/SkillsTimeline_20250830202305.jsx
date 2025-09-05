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
