

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
      <div className="relative max-w-4xl mx-auto">
        {/* Spine */}
        <div className="absolute left-4 top-6 bottom-6 w-1 bg-gradient-to-b from-indigo-500 via-purple-500 to-pink-500 rounded-full z-0"></div>
        <div className="flex flex-col gap-12">
          {timeline.map((item, idx) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20, scale: 0.99 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.6, delay: idx * 0.12 }}
              viewport={{ once: true }}
              className={`relative pl-14 md:pl-24 ${idx % 2 === 0 ? 'md:ml-12' : 'md:ml-0 md:translate-x-8'}`}
            >
              <div className="absolute left-0 top-4 w-8 h-8 rounded-full bg-gradient-to-tr from-indigo-500 via-purple-500 to-pink-500 shadow-lg border-4 border-white/20"></div>
              <div className="bg-white/6 rounded-xl p-6 shadow-xl backdrop-blur-lg border border-white/10">
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
