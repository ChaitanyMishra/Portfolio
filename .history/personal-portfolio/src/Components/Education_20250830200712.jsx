import { motion } from "framer-motion";
void motion;
import { Card } from "../components/ui/Card";

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

export default function Education() {
  return (
    <section className="py-20 px-6 bg-gradient-to-br from-indigo-900 via-purple-900 to-zinc-900">
      <h2 className="text-3xl font-bold mb-8 text-center text-indigo-400">Education</h2>
      <div className="relative flex flex-col md:flex-row items-start md:items-stretch justify-center gap-12">
        {/* spine */}
        <div className="absolute left-1/2 top-8 bottom-8 w-1 bg-gradient-to-b from-indigo-500 via-purple-500 to-pink-500 rounded-full z-0" style={{transform: 'translateX(-50%)'}}></div>

        {/* Academic (left) */}
        <motion.div initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.7 }} viewport={{ once: true }} className="relative z-10 w-full md:w-1/3 md:mr-auto md:pl-6">
          <motion.div className="hidden md:block absolute right-0 top-1/2 h-1 bg-gradient-to-r from-transparent via-indigo-500 to-purple-500 transform -translate-y-1/2" style={{ right: '-2rem', width: '2rem' }} initial={{ scaleX: 0 }} whileInView={{ scaleX: 1 }} transition={{ duration: 0.5 }} viewport={{ once: true }} />
          <Card className="p-8">
            <h3 className="text-xl font-bold text-indigo-300 mb-4">Academic</h3>
            <ul className="ml-4 border-l-2 border-indigo-500 pl-6">
              <li className="mb-3 text-white/90"><span className="font-semibold">{education.degree}</span></li>
              <li className="mb-3 text-white/90"><span>{education.college}</span></li>
              <li className="mb-3 text-white/90"><span>{education.semester}</span></li>
              <li className="mb-3 text-white/90"><span>CGPA: {education.cgpa}</span></li>
            </ul>
          </Card>
        </motion.div>

        {/* Certifications (right) */}
        <motion.div initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.7 }} viewport={{ once: true }} className="relative z-10 w-full md:w-1/3 md:ml-auto md:pr-6">
          <motion.div className="hidden md:block absolute left-0 top-1/2 h-1 bg-gradient-to-l from-transparent via-pink-500 to-purple-500 transform -translate-y-1/2" style={{ left: '-2rem', width: '2rem' }} initial={{ scaleX: 0 }} whileInView={{ scaleX: 1 }} transition={{ duration: 0.5 }} viewport={{ once: true }} />
          <Card className="p-8">
            <h3 className="text-xl font-bold text-pink-300 mb-4">Certifications & Roles</h3>
            <ul className="ml-4 border-l-2 border-pink-500 pl-6">
              {education.certifications.map((cert, idx) => (
                <motion.li key={cert.name} initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.5, delay: idx * 0.15 }} viewport={{ once: true }} className="mb-4 text-white/90 hover:text-pink-400 transition-colors duration-200">
                  <a href={cert.link} target="_blank" rel="noopener noreferrer" className="font-semibold underline">{cert.name}</a>
                  <div className="text-sm text-white/70">{cert.desc}</div>
                </motion.li>
              ))}
              {education.extra.map((ex, idx) => (
                <motion.li key={ex.title} initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.5, delay: (education.certifications.length + idx) * 0.15 }} viewport={{ once: true }} className="mb-4 text-white/90">
                  <div className="font-semibold">{ex.title} — <span className="text-sm text-pink-300">{ex.role}</span></div>
                  <div className="text-sm text-white/70">{ex.desc}</div>
                </motion.li>
              ))}
            </ul>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
