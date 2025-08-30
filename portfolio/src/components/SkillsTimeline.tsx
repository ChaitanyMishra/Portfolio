import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Code, Wrench, Award, Users } from 'lucide-react';

const SkillsTimeline: React.FC = () => {
  const timelineData = [
    {
      id: 1,
      side: 'left',
      category: 'Education',
      title: 'Bachelor of Computer Applications (BCA)',
      subtitle: 'Maharana Pratap College of Professional Studies',
      description: 'CGPA: 7.24/10 (5th semester). Core subjects include C, C++, OOPs, Python, Operating Systems, DBMS, Computer Networks, Data Structures.',
      icon: GraduationCap,
      color: 'from-blue-400 to-cyan-500',
      year: '2022-2025'
    },
    {
      id: 2,
      side: 'right',
      category: 'Languages & Frameworks',
      title: 'Frontend Technologies',
      subtitle: 'Modern Web Development Stack',
      description: 'HTML5, CSS3, JavaScript (ES6+), React.js, Tailwind CSS. Building responsive, interactive user interfaces with modern best practices.',
      icon: Code,
      color: 'from-violet-400 to-purple-500',
      skills: ['HTML5', 'CSS3', 'JavaScript', 'React.js', 'Tailwind CSS']
    },
    {
      id: 3,
      side: 'left',
      category: 'Soft Skills',
      title: 'Professional Skills',
      subtitle: 'Personal Development',
      description: 'Strong problem-solving abilities, effective communication, team collaboration, visual design sense, confidence, and willingness to learn new technologies.',
      icon: Users,
      color: 'from-green-400 to-emerald-500',
      skills: ['Problem Solving', 'Communication', 'Team Collaboration', 'Visual Design', 'Confidence', 'Continuous Learning']
    },
    {
      id: 4,
      side: 'right',
      category: 'Tools & Platforms',
      title: 'Development Tools',
      subtitle: 'Professional Workflow',
      description: 'Version control, development environments, deployment platforms, and cloud services for modern web development workflow.',
      icon: Wrench,
      color: 'from-orange-400 to-red-500',
      skills: ['Git & GitHub', 'VS Code', 'Chrome DevTools', 'Netlify', 'Vercel', 'AWS (Basic)']
    },
    {
      id: 5,
      side: 'left',
      category: 'Education',
      title: 'Higher Secondary Education',
      subtitle: 'Shri Guru Narayan Khatri Vidhya Mandir',
      description: 'Class XII - Science Stream. Subjects: Physics, Chemistry, Mathematics, Hindi, English. Strong foundation in analytical thinking.',
      icon: GraduationCap,
      color: 'from-indigo-400 to-blue-500',
      year: '2022-2023'
    },
    {
      id: 6,
      side: 'right',
      category: 'Certifications',
      title: 'Professional Certifications',
      subtitle: 'Continuous Learning',
      description: 'Full Stack Development curriculum (freeCodeCamp), SEO fundamentals (Semrush), and professional communication skills (TCS ION).',
      icon: Award,
      color: 'from-yellow-400 to-orange-500',
      skills: ['Full Stack Development', 'SEO Fundamentals', 'Professional Communication']
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6
      }
    }
  };

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-navy-950 to-violet-950 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-r from-cyan-950/10 to-violet-950/10"></div>
      
      <div className="relative z-10 max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            <span className="gradient-text">Education & Skills</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            My journey through education, skill development, and professional growth.
          </p>
        </motion.div>

        <div className="relative">
          {/* Central timeline line */}
          <div className="timeline-line"></div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-12"
          >
            {timelineData.map((item, index) => (
              <motion.div
                key={item.id}
                variants={itemVariants}
                className={`relative flex items-center ${
                  item.side === 'left' 
                    ? 'justify-start pr-8 lg:pr-16' 
                    : 'justify-end pl-8 lg:pl-16'
                }`}
              >
                {/* Timeline dot */}
                <div className="absolute left-1/2 transform -translate-x-1/2 z-10">
                  <motion.div
                    className={`w-4 h-4 rounded-full bg-gradient-to-r ${item.color} shadow-lg`}
                    whileHover={{ scale: 1.5 }}
                    transition={{ duration: 0.2 }}
                  />
                  <div className={`absolute inset-0 rounded-full bg-gradient-to-r ${item.color} animate-ping opacity-20`}></div>
                </div>

                {/* Content card */}
                <motion.div
                  className={`glass-card p-6 w-full max-w-md hover:bg-white/10 transition-all duration-300 ${
                    item.side === 'left' 
                      ? 'mr-8 lg:mr-16 animate-slideInLeft' 
                      : 'ml-8 lg:ml-16 animate-slideInRight'
                  }`}
                  whileHover={{ scale: 1.02, y: -5 }}
                  transition={{ duration: 0.2 }}
                >
                  {/* Icon and category */}
                  <div className="flex items-center mb-4">
                    <div className={`p-2 rounded-lg bg-gradient-to-r ${item.color} mr-3`}>
                      <item.icon className="w-5 h-5 text-white" />
                    </div>
                    <span className="text-sm font-semibold text-cyan-400 uppercase tracking-wide">
                      {item.category}
                    </span>
                    {item.year && (
                      <span className="ml-auto text-xs text-gray-400 font-mono">
                        {item.year}
                      </span>
                    )}
                  </div>

                  {/* Title and subtitle */}
                  <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                  <h4 className="text-sm text-violet-300 font-medium mb-3">{item.subtitle}</h4>
                  
                  {/* Description */}
                  <p className="text-gray-300 text-sm leading-relaxed mb-4">{item.description}</p>

                  {/* Skills badges */}
                  {item.skills && (
                    <div className="flex flex-wrap gap-2">
                      {item.skills.map((skill, skillIndex) => (
                        <motion.span
                          key={skillIndex}
                          className="px-2 py-1 bg-white/10 text-xs text-cyan-300 rounded-full border border-cyan-500/30"
                          initial={{ opacity: 0, scale: 0 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.3, delay: skillIndex * 0.1 }}
                          whileHover={{ scale: 1.1 }}
                        >
                          {skill}
                        </motion.span>
                      ))}
                    </div>
                  )}
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default SkillsTimeline;