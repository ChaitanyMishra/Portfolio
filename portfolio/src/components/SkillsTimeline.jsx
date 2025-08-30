import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { 
  GraduationCap, 
  Code, 
  Wrench, 
  Award, 
  Brain, 
  Users,
  BookOpen,
  Lightbulb
} from 'lucide-react';

const SkillsTimeline = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.1 });

  const timelineItems = [
    {
      id: 1,
      side: 'left',
      category: 'Education',
      icon: GraduationCap,
      title: 'Bachelor of Computer Applications (BCA)',
      subtitle: 'Maharana Pratap College of Professional Studies',
      description: 'CGPA: 7.24/10 (5th semester). Core subjects: C, C++, OOPs, Python, OS, DBMS, Computer Networks, Data Structures',
      period: '2022 - Present',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      id: 2,
      side: 'right',
      category: 'Languages & Frameworks',
      icon: Code,
      title: 'Frontend Technologies',
      subtitle: 'Modern Web Development Stack',
      description: 'HTML5, CSS3, JavaScript (ES6+), React.js, Tailwind CSS with focus on responsive design and user experience',
      period: 'Proficient',
      color: 'from-green-500 to-emerald-500'
    },
    {
      id: 3,
      side: 'left',
      category: 'Soft Skills',
      icon: Brain,
      title: 'Problem Solving & Communication',
      subtitle: 'Core Professional Skills',
      description: 'Strong problem-solving abilities, effective communication, team collaboration, visual design, confidence, and willingness to learn',
      period: 'Ongoing',
      color: 'from-purple-500 to-pink-500'
    },
    {
      id: 4,
      side: 'right',
      category: 'Tools & Platforms',
      icon: Wrench,
      title: 'Development & Deployment',
      subtitle: 'Modern Development Workflow',
      description: 'Git, GitHub, VS Code, Chrome DevTools, Netlify, Vercel, Render, GitHub Pages, AWS (Basic)',
      period: 'Active',
      color: 'from-orange-500 to-red-500'
    },
    {
      id: 5,
      side: 'left',
      category: 'Education',
      icon: BookOpen,
      title: 'Higher Secondary Education',
      subtitle: 'Science Stream - Class XII',
      description: 'Subjects: Physics, Chemistry, Mathematics, Hindi, English from Shri Guru Narayan Khatri Vidhya Mandir',
      period: '2022 - 2023',
      color: 'from-indigo-500 to-blue-500'
    },
    {
      id: 6,
      side: 'right',
      category: 'Certifications',
      icon: Award,
      title: 'Professional Certifications',
      subtitle: 'Continuous Learning',
      description: 'Full Stack Developer Curriculum (freeCodeCamp), SEO Crash Course (Semrush), TCS ION Career Skills Course',
      period: '2023 - Present',
      color: 'from-teal-500 to-cyan-500'
    }
  ];

  return (
    <section className="py-20 bg-dark-800 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: 'linear-gradient(45deg, rgba(6, 182, 212, 0.1) 25%, transparent 25%), linear-gradient(-45deg, rgba(6, 182, 212, 0.1) 25%, transparent 25%)',
          backgroundSize: '60px 60px'
        }} />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            <span className="gradient-text">Skills & Education</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            My journey through education, skills development, and professional growth
          </p>
        </motion.div>

        <div ref={ref} className="relative max-w-6xl mx-auto">
          {/* Central Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-cyan-500 via-blue-500 to-purple-500 rounded-full" />

          {/* Timeline Items */}
          <div className="space-y-12">
            {timelineItems.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.id}
                  initial={{ 
                    opacity: 0, 
                    x: item.side === 'left' ? -100 : 100,
                    y: 50 
                  }}
                  animate={isInView ? { 
                    opacity: 1, 
                    x: 0,
                    y: 0 
                  } : { 
                    opacity: 0, 
                    x: item.side === 'left' ? -100 : 100,
                    y: 50 
                  }}
                  transition={{ 
                    duration: 0.8, 
                    delay: index * 0.2,
                    ease: "easeOut"
                  }}
                  className={`relative flex items-center ${
                    item.side === 'left' ? 'justify-end pr-8' : 'justify-start pl-8'
                  }`}
                >
                  {/* Timeline Card */}
                  <div className={`w-full max-w-md ${
                    item.side === 'left' ? 'text-right' : 'text-left'
                  }`}>
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      className="glass-effect rounded-2xl p-6 card-hover relative"
                    >
                      {/* Category Badge */}
                      <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-sm font-medium mb-4 bg-gradient-to-r ${item.color} text-white`}>
                        <Icon className="w-4 h-4" />
                        {item.category}
                      </div>

                      <h3 className="text-xl font-bold text-white mb-2">
                        {item.title}
                      </h3>
                      
                      <p className="text-cyan-400 font-medium mb-3">
                        {item.subtitle}
                      </p>
                      
                      <p className="text-gray-300 mb-4 leading-relaxed">
                        {item.description}
                      </p>
                      
                      <div className="text-sm text-gray-400 font-medium">
                        {item.period}
                      </div>

                      {/* Connector Line */}
                      <div className={`absolute top-8 w-8 h-0.5 bg-gradient-to-r ${item.color} ${
                        item.side === 'left' 
                          ? 'right-0 translate-x-full' 
                          : 'left-0 -translate-x-full'
                      }`} />
                    </motion.div>
                  </div>

                  {/* Central Icon */}
                  <motion.div
                    initial={{ scale: 0, rotate: -180 }}
                    animate={isInView ? { scale: 1, rotate: 0 } : { scale: 0, rotate: -180 }}
                    transition={{ 
                      duration: 0.6, 
                      delay: index * 0.2 + 0.3,
                      type: "spring",
                      stiffness: 200
                    }}
                    className={`absolute left-1/2 transform -translate-x-1/2 w-16 h-16 rounded-full bg-gradient-to-br ${item.color} flex items-center justify-center shadow-lg z-10 border-4 border-dark-800`}
                  >
                    <Icon className="w-8 h-8 text-white" />
                  </motion.div>
                </motion.div>
              );
            })}
          </div>

          {/* Timeline End Indicator */}
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
            transition={{ duration: 0.6, delay: timelineItems.length * 0.2 + 0.5 }}
            className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-8 h-8 rounded-full bg-gradient-to-br from-cyan-500 to-purple-500 flex items-center justify-center"
          >
            <Lightbulb className="w-4 h-4 text-white" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default SkillsTimeline;