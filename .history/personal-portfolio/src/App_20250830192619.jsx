import Header from "./Components/Header";
import About from "./Components/About";
import Skills from "./Components/Skills";
import Education from "./Components/Education";
import Footer from "./Components/Footer";
import Projects from "./Components/Projects";
import Contact from "./Components/Contact";
i

import { TooltipProvider } from "@radix-ui/react-tooltip";
import Timeline from "./Components/Timeline";
import { i } from "framer-motion/client";

function App() {
  return (
    <TooltipProvider>
      <div className=" bg-blue-950 h-full w-screen ">
        <Header/>
        <About/>
  <Skills/>
  <Timeline />
  <Education/>
  <Projects/>
        <Contact/>
        <Footer/>
      </div>
    </TooltipProvider>
  );
}

export default App;
