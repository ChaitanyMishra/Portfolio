

import { motion } from "framer-motion";
void motion;

const timeline = [
  {
    type: "Experience",
    title: "Frontend Developer (Independent Projects)",
    org: "06/2025 – 06/2025",
    desc: (
      <ul className="list-disc ml-5 text-white/80">
        <li>Developed frontend projects including SnapFetch (image search) and a To-Do List App using HTML, CSS, and JavaScript.</li>
        <li>Acquired web development skills through self-paced online courses (Udemy, freeCodeCamp) and applied concepts directly in personal projects.</li>
      </ul>
    ),
  },
  {
    type: "Experience",
    title: "Tech Team Member",
    org: "01/2023 – Present",
    desc: (
      <ul className="list-disc ml-5 text-white/80">
        <li>Python Mania 3.0 Hackathon, Maharana Pratap College of Professional Studies (08/2025)</li>
        <li>Curated question papers aligned to curriculum for 2nd-year students.</li>
        <li>Streamlined registration forms and coordinated with class reps (boosted signups by 30%).</li>
        <li>Managed evaluation criteria, scheduling, and contest-day logistics with core committee.</li>
      </ul>
    ),
  },
];

export default function Timeline() {
  return (
    <section className="py-20 px-6 bg-gradient-to-br from-indigo-900 via-purple-900 to-zinc-900">
  <h2 className="text-3xl font-bold mb-8 text-center text-indigo-400">Experience</h2>
      <div className="relative max-w-2xl mx-auto">
  {/* Vertical line for tree/timeline structure */}
  <div className="absolute left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-indigo-500 via-purple-500 to-pink-500 rounded-full z-0"></div>
        <div className="flex flex-col gap-12">
          {timeline.map((item, idx) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, x: idx % 2 === 0 ? -40 : 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: idx * 0.2 }}
              viewport={{ once: true }}
              className="relative pl-20"
            >
              <div className="absolute left-0 top-2 w-8 h-8 rounded-full bg-gradient-to-tr from-indigo-500 via-purple-500 to-pink-500 shadow-lg border-4 border-white/20"></div>
              <div className="bg-white/10 dark:bg-zinc-900/60 rounded-xl p-6 shadow-xl backdrop-blur-lg border border-white/20 dark:border-zinc-800/40">
                <h3 className="text-lg font-bold text-indigo-300 mb-1">{item.title}</h3>
                <div className="text-sm text-white/70 mb-1">{item.org}</div>
                {item.desc}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
