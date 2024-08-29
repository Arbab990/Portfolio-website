import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Navbar/Home/Home";
import './index.css';
import About from "./components/Navbar/About/About";
import Projects from "./components/Projects/Projects";
import Footer from "./components/Footer/Footer";

function App() {
  

  return (
    <div className="bg-[#303031] h-auto w-full overflow-hidden">
      <Navbar />
      <Home />
      <About />
      <Projects />
      <Footer />
    </div>
  );
    
      
}

export default App;
