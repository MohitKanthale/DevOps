// import Navbar from "./components/Navbar";
// import Hero from "./components/Hero";
// import About from "./components/About";
// import Skills from "./components/Skills";
// import Projects from "./components/Projects";
// import Testimonials from "./components/Testimonials";
// import Contact from "./components/Contact";
// import Footer from "./components/Footer";
// import ResumeButton from "./components/ResumeButton";
// import { ThemeProvider } from "./context/ThemeContext";


// function App() {
//   return (
//     <div>
//       <ThemeProvider>
//       <Navbar />
//       <Hero />
//       <About />
//       <Skills />
//       <Projects />
//       <Testimonials />
//       <Contact />
//       <Footer />
//       <ResumeButton/>
//       </ThemeProvider>
//     </div>
//   );
// }

// export default App;



import Navbar from "./components/Navbar";
import Hero from "./components/Hero";           // has id="home" inside
import About from "./components/About";         // has id="about" inside
import Skills from "./components/Skills";       // has id="skills" inside
import Projects from "./components/Projects";   // has id="projects" inside
import Testimonials from "./components/Testimonials"; // has id="testimonials"
import Contact from "./components/Contact";     // has id="contact"
import Footer from "./components/Footer";
import ResumeButton from "./components/ResumeButton";
import { ThemeProvider } from "./context/ThemeContext";


function App() {
  return (
    <ThemeProvider>
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Testimonials />
      <Contact />
      <Footer />
      <ResumeButton />
    </ThemeProvider>
  );
}

export default App;
