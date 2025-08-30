import React, { useState, useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { User, Code, Lightbulb, Target } from 'lucide-react';

const SkillBar = ({ skill, percentage, delay = 0 }) => {
  const [animatedPercentage, setAnimatedPercentage] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      const timer = setTimeout(() => {
        setAnimatedPercentage(percentage);
      }, delay);
      return () => clearTimeout(timer);
    }
  }, [isInView, percentage, delay]);

  return (
    <div ref={ref} className="mb-4">
      <div className="flex justify-between mb-2">
        <span className="text-gray-300 font-medium">{skill}</span>
        <span className="text-primary-400 font-semibold">{percentage}%</span>
      </div>
      <div className="w-full bg-gray-700 rounded-full h-3 overflow-hidden">
        <motion.div
          className="h-full bg-gradient-to-r from-primary-500 to-accent-500 rounded-full relative"
          initial={{ width: 0 }}
          animate={{ width: `${animatedPercentage}%` }}
          transition={{ duration: 1.5, ease: "easeOut", delay: delay / 1000 }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-pulse" />
        </motion.div>
      </div>
    </div>
  );
};

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  const skills = [
    { name: "HTML5 & CSS3", percentage: 95 },
    { name: "JavaScript (ES6+)", percentage: 90 },
    { name: "React.js", percentage: 88 },
    { name: "Tailwind CSS", percentage: 92 },
    { name: "UI/UX Design", percentage: 85 },
    { name: "Problem Solving", percentage: 90 }
  ];

  return (
    <section id="about" className="py-20 bg-background-darker relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgba(59, 130, 246, 0.3) 1px, transparent 0)`,
          backgroundSize: '50px 50px'
        }} />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="max-w-6xl mx-auto"
        >
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="text-gradient">About Me</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary-500 to-accent-500 mx-auto rounded-full" />
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Profile Card */}
            <motion.div
              variants={itemVariants}
              className="card-hover bg-background-card p-8 rounded-2xl border border-gray-700/50 backdrop-blur-sm"
            >
              <div className="flex flex-col items-center text-center">
                {/* Profile Image Placeholder */}
                <div className="w-32 h-32 bg-gradient-to-br from-primary-500 to-accent-500 rounded-full mb-6 flex items-center justify-center shadow-2xl">
                  <User size={48} className="text-white" />
                </div>

                <h3 className="text-2xl font-bold text-white mb-2">Chaitany Mishra</h3>
                <p className="text-primary-400 font-semibold mb-4">Frontend Web Developer</p>
                
                <div className="grid grid-cols-2 gap-4 w-full mb-6">
                  <div className="text-center p-3 bg-background-darker rounded-lg">
                    <Code className="w-6 h-6 text-primary-400 mx-auto mb-2" />
                    <p className="text-sm text-gray-300">Clean Code</p>
                  </div>
                  <div className="text-center p-3 bg-background-darker rounded-lg">
                    <Lightbulb className="w-6 h-6 text-accent-400 mx-auto mb-2" />
                    <p className="text-sm text-gray-300">Innovation</p>
                  </div>
                </div>

                <p className="text-gray-300 leading-relaxed">
                  Passionate about creating responsive, user-friendly web applications with modern technologies. 
                  Strong understanding of UI/UX principles and component-based design. Always eager to learn 
                  and contribute to impactful tech teams.
                </p>

                <div className="flex items-center mt-6 text-sm text-gray-400">
                  <Target className="w-4 h-4 mr-2 text-primary-400" />
                  <span>Based in Kanpur, India</span>
                </div>
              </div>
            </motion.div>

            {/* Skills Section */}
            <motion.div variants={itemVariants} className="space-y-6">
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-white mb-2">Technical Skills</h3>
                <p className="text-gray-400">My expertise in various technologies and tools</p>
              </div>

              <div className="space-y-4">
                {skills.map((skill, index) => (
                  <SkillBar
                    key={skill.name}
                    skill={skill.name}
                    percentage={skill.percentage}
                    delay={index * 200}
                  />
                ))}
              </div>

              <div className="grid grid-cols-2 gap-4 mt-8">
                <div className="bg-background-card p-4 rounded-xl border border-gray-700/50">
                  <div className="text-2xl font-bold text-primary-400 mb-1">10+</div>
                  <div className="text-sm text-gray-400">Projects Built</div>
                </div>
                <div className="bg-background-card p-4 rounded-xl border border-gray-700/50">
                  <div className="text-2xl font-bold text-accent-400 mb-1">300+</div>
                  <div className="text-sm text-gray-400">Hours of Learning</div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;