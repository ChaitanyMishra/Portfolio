import Hero from "./components/Hero";
import About from "./components/About";
import SkillsTimeline from "./components/SkillsTimeline";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { AnimatePresence } from "framer-motion";

function App() {
  return (
    <AnimatePresence>
      <div className="bg-navy min-h-screen text-white">
        <Hero />
        <About />
        <SkillsTimeline />
        <Projects />
        <Contact />
        <Footer />
      </div>
    </AnimatePresence>
  );
}

export default App;