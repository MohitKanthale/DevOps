import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { useTheme } from "../context/ThemeContext";
import heroImage from "../assets/hero-image.png"; // Replace with actual image

const Hero = () => {
  const { darkMode } = useTheme();

  return (
    <section
      id="home"
      className={`min-h-screen flex flex-col-reverse md:flex-row items-center justify-center text-center md:text-left px-6 md:px-16 gap-8 transition-all duration-300 ${darkMode ? "bg-gray-900 text-white" : "bg-gray-100 text-black"}`}
    >
      {/* Left Content */}
      <div className="max-w-2xl">
        <h1 className="text-4xl md:text-6xl font-bold leading-tight">
          Hi, I'm
          <br />
          <span className="bg-gradient-to-r from-blue-500 to-purple-500 text-transparent bg-clip-text">
            Mohit Kanthale
          </span>
        </h1>
        <TypeAnimation
          sequence={["Web Developer", 2000, "Frontend Engineer", 2000, "React Enthusiast", 2000]}
          wrapper="span"
          speed={50}
          repeat={Infinity}
          className="text-2xl md:text-3xl font-semibold mt-2 block text-blue-500"
        />
        <p className="mt-4 text-lg md:text-xl text-gray-500 dark:text-gray-500">
          I specialize in building interactive and scalable web applications using modern technologies.
        </p>

        {/* Call-to-Action Buttons */}
        <div className="mt-6 flex flex-wrap gap-4 justify-center md:justify-start">
          <a
            href="#projects"
            className="px-6 py-3 bg-blue-600 text-white rounded-lg shadow-lg hover:bg-blue-700 transition-all"
          >
            View My Work
          </a>
          <a
            href="#contact"
            className="px-6 py-3 border-2 border-blue-600 text-blue-600 rounded-lg hover:bg-blue-600 hover:text-white transition-all"
          >
            Contact Me
          </a>
        </div>
      </div>

      {/* Right Content - Hero Image */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
      >
       <img
  src={heroImage}
  alt="Mohit Kanthale"
  className="w-48 h-48 md:w-64 md:h-64 object-cover rounded-full shadow-lg"
/>



      </motion.div>
    </section>
  );
};

export default Hero;