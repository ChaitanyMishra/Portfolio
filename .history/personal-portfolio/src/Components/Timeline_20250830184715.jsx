

const timeline = [
  {
    type: "Experience",
    title: "Frontend Developer",
    org: "Tech Company",
    date: "2023 - Present",
    desc: "Building modern web apps with React, Tailwind, and shadcn/ui."
  },
  {
    type: "Education",
    title: "B.Tech Computer Science",
    org: "University Name",
    date: "2019 - 2023",
    desc: "Graduated with honors, specialized in web development and UI/UX."
  },
];

export default function Timeline() {
  return (
    <section className="py-20 px-6 bg-gradient-to-br from-indigo-900 via-purple-900 to-zinc-900">
      <h2 className="text-3xl font-bold mb-8 text-center text-indigo-400">Experience & Education</h2>
      <div className="relative max-w-2xl mx-auto">
        <div className="border-l-4 border-indigo-500/40 absolute h-full left-8 top-0"></div>
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
                <div className="text-xs text-indigo-400 mb-2">{item.date}</div>
                <p className="text-white/80">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
