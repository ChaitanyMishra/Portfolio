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
      name: "Semrush SEO Crash Course - Semrush Academy (Brian Dean)",
      link: "https://static.semrush.com/academy/certificates/f5aa93f33b/chaitany-mishra_2.pdf",
      desc: "SEO fundamentals, keyword research, content optimization"
    },
    {
      name: "TCS ION Career Skills Course",
      link: "https://drive.google.com/file/d/1tEDmFZmmdXlkiYOHkjUgAitQooDB-4in/view",
      desc: "Professional email writing, communication, interview prep, workplace readiness skills"
    }
  ]
};

export default function Education() {
  return (
    <section className="py-20 px-6 bg-gradient-to-br from-indigo-900 via-purple-900 to-zinc-900">
      <h2 className="text-3xl font-bold mb-8 text-center text-indigo-400">Education</h2>
      <div className="flex flex-col md:flex-row gap-12 justify-center items-start">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="flex-1"
        >
          <Card className="p-8">
            <h3 className="text-xl font-bold text-indigo-300 mb-4">Academic</h3>
            <ul className="ml-4 border-l-2 border-indigo-500 pl-6">
              <li className="mb-3 text-white/90">
                <span className="font-semibold">{education.degree}</span>
              </li>
              <li className="mb-3 text-white/90">
                <span>{education.college}</span>
              </li>
              <li className="mb-3 text-white/90">
                <span>{education.semester}</span>
              </li>
              <li className="mb-3 text-white/90">
                <span>CGPA: {education.cgpa}</span>
              </li>
            </ul>
          </Card>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="flex-1"
        >
          <Card className="p-8">
            <h3 className="text-xl font-bold text-pink-300 mb-4">Certifications</h3>
            <ul className="ml-4 border-l-2 border-pink-500 pl-6">
              {education.certifications.map((cert, idx) => (
                <motion.li
                  key={cert.name}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: idx * 0.2 }}
                  viewport={{ once: true }}
                  className="mb-4 text-white/90 hover:text-pink-400 transition-colors duration-200"
                >
                  <a href={cert.link} target="_blank" rel="noopener noreferrer" className="font-semibold underline">
                    {cert.name}
                  </a>
                  <div className="text-sm text-white/70">{cert.desc}</div>
                </motion.li>
              ))}
            </ul>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
