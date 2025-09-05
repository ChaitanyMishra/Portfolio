import Header from "./Components/Header";
import About from "./Components/About";
import Skills from "./Components/Skills";
import Education from "./Components/Education";
import Footer from "./Components/Footer";
import Projects from "./Components/Projects";
import Contact from "./Components/Contact";

import { TooltipProvider } from "@radix-ui/react-tooltip";

function App() {
  return (
    <TooltipProvider>
      <div className="min-h-screen bg-[color:var(--background)] text-[color:var(--foreground)]">
        <div className="max-w-5xl mx-auto px-6 py-12">
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

export default App;
