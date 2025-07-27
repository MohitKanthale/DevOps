import { motion } from "framer-motion";
import { useTheme } from "../context/ThemeContext";


const About = () => {
  const { darkMode } = useTheme();

  return (
    <section
      id="about"
      className={`py-20 px-6 text-center transition-all duration-300 ${
        darkMode ? "bg-gray-900 text-white" : "bg-gray-100 text-gray-900"
      }`}
    >
      <motion.h2
        className="text-4xl font-bold mb-6"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        About Me
      </motion.h2>

      <motion.p
        className="max-w-3xl mx-auto text-lg leading-relaxed opacity-90"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3, duration: 1 }}
      >
        Hi, I'm <span className="font-semibold text-blue-500">Mohit Kanthale</span>, an Integration & Frontend Developer with a knack for building scalable and elegant applications. I specialize in IBM ACE, APIs, React.js, and modern DevOps tools. My focus is on delivering clean code, delightful user experiences, and solving real-world business problems through code.
      </motion.p>
    </section>
  );
};

export default About;
