
import Header from "./Components/Header";
import About from "./Components/About";
import Skills from "./Components/Skills";
import Footer from "./Components/Footer";
i
import { TooltipProvider } from "@radix-ui/react-tooltip";
import { i } from "framer-motion/client";

function App() {
  return (
    <TooltipProvider>
      <div className=" bg-blue-950 h-full w-screen ">
        <Header/>
        <About/>
        <Skills/>
        <Projects/>
        <Contact/>
        <Footer/>
      </div>
    </TooltipProvider>
  );
}

export default App;
