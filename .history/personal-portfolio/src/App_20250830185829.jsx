
import Header from "./Components/Header";
import About from "./Components/About";
import Skills from "./Components/Skills";
import Footer from "./Components/Footer";
import { TooltipProvider } from "@radix-ui/react-tooltip";

function App() {
  return (
    <TooltipProvider>
      <div className=" bg-blue-950 h-full w-screen ">
        <Header/>
        <About/>
        <Skills/>
        <Contact/>
        <Footer/>
      </div>
    </TooltipProvider>
  );
}

export default App;
