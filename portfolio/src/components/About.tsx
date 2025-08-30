import React from "react";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";

const skills = [
  { name: "HTML5", level: 95 },
  { name: "CSS3", level: 90 },
  { name: "JavaScript", level: 88 },
  { name: "React.js", level: 86 },
  { name: "Tailwind CSS", level: 90 },
];

const highlights = [
  "UI/UX principles",
  "Component-based design",
  "Cloud deployment",
  "Performance & accessibility",
];

export const About: React.FC = () => (
  <section id="about" className="relative py-24">
    <div className="mx-auto max-w-6xl px-6">
      <motion.h2
        className="text-3xl md:text-4xl font-bold gradient-text mb-10 text-center"
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ type: "spring", stiffness: 120 }}
      >
        About Me
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}
        >
          <Card className="hover:-translate-y-1 transition-transform">
            <CardHeader>
              <CardTitle>Chaitany Mishra</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center gap-5">
                <div className="h-20 w-20 shrink-0 rounded-full bg-gradient-to-br from-cyan-400/40 to-violet-600/40 border border-white/10" />
                <p className="text-slate-300 leading-relaxed">
                  Fast-learning and dedicated Frontend Web Developer with hands-on experience building
                  responsive, user-friendly web applications using HTML, CSS, JavaScript, and React.js.
                  Passionate about product development, problem-solving, and collaboration.
                </p>
              </div>
              <div className="mt-5 flex flex-wrap gap-2">
                {highlights.map((h) => (
                  <Badge key={h}>{h}</Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ delay: 0.1, duration: 0.5 }}
        >
          <Card className="hover:-translate-y-1 transition-transform">
            <CardHeader>
              <CardTitle>Skills</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {skills.map((s) => (
                <div key={s.name} className="space-y-2">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-slate-300">{s.name}</span>
                    <span className="text-slate-400">{s.level}%</span>
                  </div>
                  <Progress value={s.level} />
                </div>
              ))}
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  </section>
);

export default About;

