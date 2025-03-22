import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import ResumeButton from "./components/ResumeButton";
import { ThemeProvider } from "./context/ThemeContext";


function App() {
  return (
    <div>
      <ThemeProvider>
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Testimonials />
      <Contact />
      <Footer />
      <ResumeButton/>
      </ThemeProvider>
    </div>
  );
}

export default App;
