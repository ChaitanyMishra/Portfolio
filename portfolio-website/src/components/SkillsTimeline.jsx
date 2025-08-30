import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { 
  GraduationCap, 
  Code, 
  Wrench, 
  Award, 
  Users, 
  Brain,
  Lightbulb,
  MessageSquare
} from 'lucide-react';

const TimelineItem = ({ item, index, isLeft }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const cardVariants = {
    hidden: { 
      opacity: 0, 
      x: isLeft ? -100 : 100,
      y: 50
    },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
        delay: index * 0.2
      }
    }
  };

  const iconVariants = {
    hidden: { scale: 0, rotate: -180 },
    visible: {
      scale: 1,
      rotate: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
        delay: index * 0.2 + 0.3
      }
    }
  };

  return (
    <div className="relative flex items-center mb-12">
      {/* Timeline line connector */}
      <div className="absolute left-1/2 transform -translate-x-1/2 w-px h-full bg-gradient-to-b from-primary-500 to-accent-500 opacity-30" />
      
      {/* Content Card */}
      <motion.div
        ref={ref}
        variants={cardVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className={`w-full md:w-5/12 ${isLeft ? 'md:mr-auto md:pr-8' : 'md:ml-auto md:pl-8'}`}
      >
        <div className="card-hover bg-background-card p-6 rounded-2xl border border-gray-700/50 backdrop-blur-sm relative">
          {/* Arrow pointing to timeline */}
          <div className={`absolute top-6 ${isLeft ? 'right-0 translate-x-full' : 'left-0 -translate-x-full'} 
                         w-0 h-0 border-t-8 border-b-8 border-transparent 
                         ${isLeft ? 'border-l-8 border-l-background-card' : 'border-r-8 border-r-background-card'}`} 
          />
          
          <div className="flex items-start space-x-4">
            <div className="flex-shrink-0">
              <div className="w-12 h-12 bg-gradient-to-br from-primary-500 to-accent-500 rounded-xl flex items-center justify-center">
                <item.icon className="w-6 h-6 text-white" />
              </div>
            </div>
            
            <div className="flex-1">
              <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
              {item.subtitle && (
                <p className="text-primary-400 font-semibold mb-3">{item.subtitle}</p>
              )}
              {item.period && (
                <p className="text-accent-400 text-sm font-medium mb-3">{item.period}</p>
              )}
              <div className="space-y-2">
                {item.items.map((subItem, idx) => (
                  <div key={idx} className="flex items-start space-x-2">
                    <div className="w-1.5 h-1.5 bg-primary-400 rounded-full mt-2 flex-shrink-0" />
                    <p className="text-gray-300 text-sm leading-relaxed">{subItem}</p>
                  </div>
                ))}
              </div>
              {item.grade && (
                <div className="mt-4 inline-block bg-gradient-to-r from-primary-600/20 to-accent-600/20 px-3 py-1 rounded-full border border-primary-500/30">
                  <span className="text-primary-400 text-sm font-semibold">{item.grade}</span>
                </div>
              )}
            </div>
          </div>
        </div>
      </motion.div>

      {/* Central Timeline Icon */}
      <motion.div
        variants={iconVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className="absolute left-1/2 transform -translate-x-1/2 w-16 h-16 bg-gradient-to-br from-primary-600 to-accent-600 rounded-full flex items-center justify-center shadow-2xl border-4 border-background-dark z-10"
      >
        <item.icon className="w-8 h-8 text-white" />
      </motion.div>
    </div>
  );
};

const SkillsTimeline = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const timelineData = [
    {
      title: "Bachelor of Computer Applications (BCA)",
      subtitle: "Maharana Pratap College of Professional Studies",
      period: "2023 - Present",
      grade: "CGPA: 7.24/10",
      icon: GraduationCap,
      items: [
        "Core Subjects: C, C++, OOPs, Python, Operating Systems, DBMS, Computer Networks, Data Structures",
        "Code-O-Fiesta Hackathon - Participated in inter-department coding event, cleared Round 1",
        "Number Nexon - Math quiz participation, received certificate",
        "Tech Team Member - Assisted in deployment and technical support for internal BCA Hackathon"
      ]
    },
    {
      title: "Languages & Frameworks",
      subtitle: "Technical Expertise",
      period: "2023 - Present",
      icon: Code,
      items: [
        "HTML5, CSS3 - Advanced semantic markup and modern styling techniques",
        "JavaScript (ES6+) - Modern JS features, async/await, modules, and DOM manipulation",
        "React.js - Component-based architecture, hooks, state management, and lifecycle methods",
        "Tailwind CSS - Utility-first CSS framework for rapid UI development"
      ]
    },
    {
      title: "Soft Skills & Personal Qualities",
      subtitle: "Professional Development",
      period: "Continuously Developing",
      icon: Users,
      items: [
        "Problem Solving - Analytical thinking and systematic approach to challenges",
        "Communication - Clear technical communication and documentation skills",
        "Team Collaboration - Experience working in cross-functional teams",
        "Visual Design - Understanding of UI/UX principles and design aesthetics",
        "Confidence - Self-assured in presenting ideas and taking on new challenges",
        "Willingness to Learn - Passionate about staying updated with latest technologies"
      ]
    },
    {
      title: "Tools & Platforms",
      subtitle: "Development Environment",
      period: "2023 - Present",
      icon: Wrench,
      items: [
        "Git & GitHub - Version control, branching strategies, and collaborative development",
        "VS Code - Advanced IDE usage with extensions and productivity tools",
        "Chrome DevTools - Debugging, performance analysis, and responsive design testing",
        "Deployment: Netlify, Vercel, Render, GitHub Pages - Various hosting and CI/CD platforms",
        "AWS (Basic) - Cloud services fundamentals and basic deployment"
      ]
    },
    {
      title: "Certifications & Learning",
      subtitle: "Continuous Education",
      period: "2023 - Present",
      icon: Award,
      items: [
        "Certified Full Stack Developer Curriculum (On-Going) - freeCodeCamp, 300+ hours",
        "Semrush SEO Crash Course - SEO fundamentals, keyword research, content optimization",
        "TCS ION Career Skills Course - Professional communication and interview preparation",
        "Self-paced online courses through Udemy and freeCodeCamp",
        "Applied concepts directly in personal projects for hands-on learning"
      ]
    }
  ];

  const headerVariants = {
    hidden: { opacity: 0, y: -50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  return (
    <section className="py-20 bg-background-dark relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary-500 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent-500 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          ref={ref}
          variants={headerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-gradient">Education & Skills</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            My academic journey and technical expertise development timeline
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-primary-500 to-accent-500 mx-auto rounded-full mt-6" />
        </motion.div>

        <div className="max-w-6xl mx-auto relative">
          {/* Main Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-primary-500 via-accent-500 to-primary-500 rounded-full opacity-30" />
          
          {timelineData.map((item, index) => (
            <TimelineItem
              key={index}
              item={item}
              index={index}
              isLeft={index % 2 === 0}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsTimeline;