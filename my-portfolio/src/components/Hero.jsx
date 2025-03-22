import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { useTheme } from "../context/ThemeContext";

const Hero = () => {
  const { darkMode } = useTheme();

  return (
    <section
      id="home"
      className={`flex flex-col items-center justify-center min-h-screen text-center transition-all duration-300 px-6 ${
  darkMode ? "bg-gray-900 text-white" : "bg-gray-100 text-black"
}`}
    >
      <motion.h1
        className="text-5xl md:text-6xl font-bold mb-4"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Hi, I'm
      </motion.h1>
      
      <TypeAnimation
        sequence={["Mohit Kanthale", 2000, "A Frontend Developer", 2000, "A React Enthusiast", 2000]}
        wrapper="span"
        speed={50}
        className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-blue-500 to-purple-500 text-transparent bg-clip-text"
        repeat={Infinity}
      />
      
      <p className="mt-4 text-lg max-w-2xl">
        I build beautiful and interactive web experiences using modern technologies like React.js, Tailwind CSS, and Framer Motion.
      </p>
      
      <motion.a
        href="#projects"
        className="mt-6 px-6 py-3 bg-blue-600 text-white rounded-lg text-lg font-semibold shadow-md hover:bg-blue-700 transition-all"
        whileHover={{ scale: 1.1 }}
        transition={{ duration: 0.3 }}
      >
        View My Work
      </motion.a>
    </section>
  );
};

export default Hero;
