import React from 'react';
import { motion } from 'framer-motion';
import { Code, Palette, Zap, Users } from 'lucide-react';

const About: React.FC = () => {
  const skills = [
    { name: 'Frontend Development', level: 90, icon: Code, color: 'from-cyan-400 to-blue-500' },
    { name: 'UI/UX Design', level: 85, icon: Palette, color: 'from-violet-400 to-purple-500' },
    { name: 'Problem Solving', level: 95, icon: Zap, color: 'from-yellow-400 to-orange-500' },
    { name: 'Team Collaboration', level: 88, icon: Users, color: 'from-green-400 to-emerald-500' },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6
      }
    }
  };

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-navy-950 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-violet-950/20 to-cyan-950/20"></div>
      
      <div className="relative z-10 max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            <span className="gradient-text">About Me</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Passionate about creating beautiful, functional web experiences that make a difference.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid lg:grid-cols-2 gap-12 items-center"
        >
          {/* Profile Card */}
          <motion.div
            variants={itemVariants}
            className="glass-card p-8 hover:scale-105 transition-transform duration-300"
          >
            <div className="text-center mb-6">
              <div className="w-32 h-32 mx-auto mb-6 relative">
                <div className="w-full h-full rounded-full bg-gradient-to-br from-cyan-400 to-violet-600 p-1">
                  <div className="w-full h-full rounded-full bg-navy-900 flex items-center justify-center">
                    <span className="text-4xl font-bold gradient-text">CM</span>
                  </div>
                </div>
                <motion.div
                  className="absolute -inset-2 rounded-full bg-gradient-to-r from-cyan-400 to-violet-600 opacity-20 blur-lg"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                />
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">Chaitany Mishra</h3>
              <p className="text-cyan-400 font-semibold mb-4">Frontend Web Developer</p>
            </div>
            
            <div className="space-y-4 text-gray-300">
              <p>
                <strong className="text-white">Location:</strong> Kanpur, India
              </p>
              <p>
                <strong className="text-white">Email:</strong> 
                <a href="mailto:chaitany.mishra.tech@gmail.com" className="text-cyan-400 hover:text-cyan-300 ml-2">
                  chaitany.mishra.tech@gmail.com
                </a>
              </p>
              <p>
                <strong className="text-white">Phone:</strong> +91 9305224208
              </p>
              <p className="leading-relaxed">
                Fast-learning developer with hands-on experience building responsive, user-friendly web applications. 
                Strong understanding of UI/UX principles and passionate about creating impactful digital solutions.
              </p>
            </div>
          </motion.div>

          {/* Skills */}
          <motion.div variants={itemVariants} className="space-y-6">
            <h3 className="text-2xl font-bold text-white mb-8">Core Skills</h3>
            
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="glass-card p-6 hover:bg-white/10 transition-all duration-300"
              >
                <div className="flex items-center mb-3">
                  <div className={`p-2 rounded-lg bg-gradient-to-r ${skill.color} mr-3`}>
                    <skill.icon className="w-5 h-5 text-white" />
                  </div>
                  <span className="font-semibold text-white">{skill.name}</span>
                  <span className="ml-auto text-cyan-400 font-bold">{skill.level}%</span>
                </div>
                
                <div className="w-full bg-navy-800 rounded-full h-3 overflow-hidden">
                  <motion.div
                    className={`h-full bg-gradient-to-r ${skill.color} rounded-full relative`}
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: index * 0.1 + 0.3 }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-pulse"></div>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;