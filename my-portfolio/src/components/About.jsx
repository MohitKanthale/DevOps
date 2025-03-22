import { motion } from "framer-motion";
import { useTheme } from "../context/ThemeContext";


const About = () => {
  const { darkMode } = useTheme();

  return (
    <section
      id="about"
      className={`py-20 text-center transition-all duration-300 ${darkMode ? "bg-gray-900 text-white" : "bg-gray-100 text-black"}`}
    >
      <motion.h2
        className="text-4xl font-bold"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        About Me
      </motion.h2>
      <p className="mt-4 max-w-2xl mx-auto">
        Hi, I'm Mohit Kanthale, a passionate Frontend Developer specializing in React.js and Tailwind CSS. I love crafting beautiful UI/UX experiences.
      </p>
    </section>
  );
};

export default About;