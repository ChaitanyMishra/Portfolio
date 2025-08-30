import React from "react";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";

type TimelineItem = {
  title: string;
  subtitle?: string;
  description?: string;
  bullets?: string[];
};

const leftItems: TimelineItem[] = [
  {
    title: "Education",
    subtitle: "BCA, MPCPS (CSJMU), Kanpur",
    description: "CGPA 7.24 / 10 (up to 5th semester)",
    bullets: [
      "Core: C, C++, OOPs, Python, OS, DBMS, CN, DS",
      "Campus: Tech Team Member; internal hackathon support",
    ],
  },
  {
    title: "Soft Skills",
    bullets: [
      "Problem Solving",
      "Communication",
      "Team Collaboration",
      "Visual Design",
      "Confidence & willingness to learn",
    ],
  },
];

const rightItems: TimelineItem[] = [
  {
    title: "Languages & Frameworks",
    bullets: ["HTML5", "CSS3", "JavaScript (ES6+)", "React.js", "Tailwind CSS"],
  },
  {
    title: "Tools & Platforms",
    bullets: [
      "Git, GitHub, VS Code, Chrome DevTools",
      "Netlify, Vercel, Render, GitHub Pages, AWS (Basic)",
    ],
  },
  {
    title: "Certifications",
    bullets: [
      "freeCodeCamp Full Stack Developer (On-going)",
      "Semrush SEO Crash Course",
      "TCS ION Career Skills",
    ],
  },
];

const MotionCard: React.FC<React.PropsWithChildren<{ idx: number; side: "left" | "right" }>> = ({
  children,
  idx,
  side,
}) => (
  <motion.div
    initial={{ opacity: 0, x: side === "left" ? -40 : 40 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true, amount: 0.2 }}
    transition={{ delay: idx * 0.05, type: "spring", stiffness: 110 }}
    className={`relative ${side === "left" ? "md:pr-10" : "md:pl-10"}`}
  >
    <span
      className={`absolute top-6 ${side === "left" ? "right-[-6px]" : "left-[-6px]"} h-3 w-3 rounded-full bg-cyan-400 border-2 border-violet-600 shadow-[0_0_12px_rgba(34,211,238,0.6)]`}
    />
    <Card className="hover:-translate-y-[2px] transition-transform">
      {children}
    </Card>
  </motion.div>
);

export const SkillsTimeline: React.FC = () => {
  return (
    <section id="timeline" className="relative py-24">
      <div className="mx-auto max-w-6xl px-6">
        <motion.h2
          className="text-3xl md:text-4xl font-bold gradient-text mb-12 text-center"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ type: "spring", stiffness: 120 }}
        >
          Education & Skills Tree
        </motion.h2>

        <div className="relative grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="hidden md:block absolute left-1/2 top-0 h-full w-[2px] -translate-x-1/2 bg-gradient-to-b from-cyan-400/50 via-violet-500/40 to-transparent" />

          <div className="flex flex-col gap-8">
            {leftItems.map((item, i) => (
              <MotionCard key={i} idx={i} side="left">
                <CardHeader>
                  <CardTitle>{item.title}</CardTitle>
                  {item.subtitle && <CardDescription>{item.subtitle}</CardDescription>}
                  {item.description && <CardDescription>{item.description}</CardDescription>}
                </CardHeader>
                <CardContent>
                  {item.bullets && (
                    <ul className="list-disc pl-5 text-slate-300 space-y-1">
                      {item.bullets.map((b) => (
                        <li key={b}>{b}</li>
                      ))}
                    </ul>
                  )}
                </CardContent>
              </MotionCard>
            ))}
          </div>

          <div className="flex flex-col gap-8">
            {rightItems.map((item, i) => (
              <MotionCard key={i} idx={i} side="right">
                <CardHeader>
                  <CardTitle>{item.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  {item.bullets && (
                    <ul className="list-disc pl-5 text-slate-300 space-y-1">
                      {item.bullets.map((b) => (
                        <li key={b}>{b}</li>
                      ))}
                    </ul>
                  )}
                </CardContent>
              </MotionCard>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsTimeline;

