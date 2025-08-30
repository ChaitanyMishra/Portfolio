import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Code, Zap, Users, Target } from 'lucide-react';

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.2 });

  const skills = [
    { name: 'React.js', level: 90, color: 'from-blue-500 to-cyan-500' },
    { name: 'JavaScript', level: 85, color: 'from-yellow-500 to-orange-500' },
    { name: 'Tailwind CSS', level: 92, color: 'from-cyan-500 to-blue-500' },
    { name: 'HTML/CSS', level: 95, color: 'from-orange-500 to-red-500' },
    { name: 'Git/GitHub', level: 80, color: 'from-gray-500 to-gray-700' },
    { name: 'Problem Solving', level: 88, color: 'from-purple-500 to-pink-500' }
  ];

  const highlights = [
    {
      icon: Code,
      title: 'Clean Code',
      description: 'Writing maintainable, scalable code following best practices'
    },
    {
      icon: Zap,
      title: 'Performance',
      description: 'Optimizing applications for speed and user experience'
    },
    {
      icon: Users,
      title: 'Collaboration',
      description: 'Strong team player with excellent communication skills'
    },
    {
      icon: Target,
      title: 'Goal-Oriented',
      description: 'Focused on delivering results and continuous learning'
    }
  ];

  return (
    <section id="about" className="py-20 bg-dark-900 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(6, 182, 212, 0.3) 1px, transparent 0)',
          backgroundSize: '50px 50px'
        }} />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            <span className="gradient-text">About Me</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Passionate about creating digital experiences that make a difference
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Profile Card */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="glass-effect rounded-2xl p-8 card-hover"
          >
            <div className="text-center mb-8">
              <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-gradient-to-br from-cyan-500 to-blue-600 p-1">
                <div className="w-full h-full rounded-full bg-dark-800 flex items-center justify-center">
                  <span className="text-4xl font-bold gradient-text">CM</span>
                </div>
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">Chaitany Mishra</h3>
              <p className="text-cyan-400 font-medium">Frontend Web Developer</p>
            </div>

            <div className="space-y-4 text-gray-300">
              <p>
                Fast-learning and dedicated Frontend Web Developer with hands-on experience 
                building responsive, user-friendly web applications using modern technologies.
              </p>
              <p>
                Strong understanding of UI/UX principles, component-based design, and 
                cloud-based deployment tools. Passionate about product development and 
                problem-solving.
              </p>
              <p>
                Currently pursuing Bachelor of Computer Applications (BCA) with a CGPA of 7.24/10, 
                actively seeking opportunities to contribute to impactful tech teams.
              </p>
            </div>

            <div className="mt-6 flex flex-wrap gap-2">
              {['React.js', 'JavaScript', 'Tailwind CSS', 'HTML5', 'CSS3', 'Git'].map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 bg-dark-700 text-cyan-400 rounded-full text-sm border border-cyan-500/20"
                >
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Skills and Highlights */}
          <div className="space-y-8">
            {/* Skills Progress */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="glass-effect rounded-2xl p-8"
            >
              <h4 className="text-2xl font-bold text-white mb-6">Technical Skills</h4>
              <div className="space-y-6">
                {skills.map((skill, index) => (
                  <div key={skill.name}>
                    <div className="flex justify-between mb-2">
                      <span className="text-gray-300 font-medium">{skill.name}</span>
                      <span className="text-cyan-400 font-medium">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-dark-700 rounded-full h-3 overflow-hidden">
                      <motion.div
                        className={`h-full bg-gradient-to-r ${skill.color} rounded-full`}
                        initial={{ width: 0 }}
                        animate={isInView ? { width: `${skill.level}%` } : { width: 0 }}
                        transition={{ duration: 1, delay: 0.6 + index * 0.1, ease: "easeOut" }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Highlights Grid */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="grid grid-cols-2 gap-4"
            >
              {highlights.map((highlight, index) => {
                const Icon = highlight.icon;
                return (
                  <motion.div
                    key={highlight.title}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                    transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                    className="glass-effect rounded-xl p-4 card-hover text-center"
                  >
                    <div className="w-12 h-12 mx-auto mb-3 rounded-full bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center">
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <h5 className="font-bold text-white mb-2">{highlight.title}</h5>
                    <p className="text-sm text-gray-400 leading-relaxed">
                      {highlight.description}
                    </p>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;