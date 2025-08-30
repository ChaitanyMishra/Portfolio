import { useEffect } from 'react';
import Hero from './components/Hero';
import About from './components/About';
import SkillsTimeline from './components/SkillsTimeline';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  useEffect(() => {
    // Smooth scrolling for the entire page
    document.documentElement.style.scrollBehavior = 'smooth';
    
    return () => {
      document.documentElement.style.scrollBehavior = 'auto';
    };
  }, []);

  return (
    <div className="min-h-screen bg-dark-950 text-white">
      <Hero />
      <About />
      <SkillsTimeline />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
