import Header from "./components/Header";
import About from "./components/About";
import Skills from "./components/Skills";
import Footer from "./Components/Footer";
import Navbar from "./components/Navbar";
function App() {
  return (
    <div className=" bg-blue-950 h-full w-screen ">
      <Navbar />
     <Header/>
     <About/>
     <Skills/>
     <Footer/>
     </div>
  );
}

export default App;
