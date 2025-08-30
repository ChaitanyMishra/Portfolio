import { motion } from "framer-motion";
import { timelineData } from "../data";

const SkillsTimeline = () => {
  return (
    <section id="skills" className="py-20 bg-navy">
      <div className="container mx-auto px-4 max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 bg-gradient-to-r from-cyan to-accent bg-clip-text text-transparent">
          Education & Skills
        </h2>
        <div className="relative">
          {/* vertical line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 bg-gray-700 w-1 h-full"></div>
          <div className="space-y-12">
            {timelineData.map((item, idx) => {
              const isLeft = idx % 2 === 0;
              return (
                <motion.div
                  key={idx}
                  className={`relative w-full flex ${isLeft ? "justify-start" : "justify-end"}`}
                  initial={{ opacity: 0, x: isLeft ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                >
                  <div className="bg-navy/80 backdrop-blur-lg border border-gray-700 rounded-lg p-6 w-full max-w-md shadow-lg">
                    <h3 className="text-xl font-semibold mb-2 text-accent">
                      {item.title}
                    </h3>
                    <p className="text-gray-300 text-sm mb-1">{item.subtitle}</p>
                    <p className="text-gray-400 text-xs">{item.date}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsTimeline;