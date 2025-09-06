import Header from "./Components/Header";
import About from "./Components/About";
import Skills from "./Components/Skills";
import Education from "./Components/Education";
import Footer from "./Components/Footer";
import Projects from "./Components/Projects";
import Contact from "./Components/Contact";
import CursorTrail from "./Components/ui/CursorTrail";
import { ThemeProvider, useTheme } from "./contexts/ThemeContext";

import { TooltipProvider } from "@radix-ui/react-tooltip";

function AppContent() {
  const { theme } = useTheme()
  
  return (
    <TooltipProvider>
  <div id="home" className={`min-h-screen bg-gradient-to-br ${theme.colors.primary} text-white transition-all duration-1000`}>
        {/* Cursor Trail Effect */}
        <CursorTrail />
        
        {/* Animated background particles */}
        <div className="fixed inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-500/20 rounded-full blur-3xl animate-pulse-glow" />
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-500/20 rounded-full blur-3xl animate-pulse-glow" style={{ animationDelay: '1s' }} />
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl animate-pulse-glow" style={{ animationDelay: '2s' }} />
        </div>
        
        <div className="relative max-w-6xl mx-auto px-6 py-12">
          <Header />
          <main className="flex flex-col gap-20">
            <About />
            <Skills />
            <Education />
            <Projects />
            <Contact />
          </main>
          <Footer />
        </div>
      </div>
    </TooltipProvider>
  );
}

function App() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
}

export default App;
