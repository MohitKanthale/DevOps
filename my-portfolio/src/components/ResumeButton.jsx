import { motion } from "framer-motion";
import { useTheme } from "../context/ThemeContext";

const ResumeButton = () => {
  const { darkMode } = useTheme();

  return (
    <motion.a
      href="/resume.pdf"
      download
      className={`px-6 py-2 font-semibold rounded-lg shadow-md transition-all duration-300 ${darkMode ? "bg-yellow-500 text-black hover:bg-yellow-600" : "bg-yellow-400 text-black hover:bg-yellow-500"}`}
      whileHover={{ scale: 1.1 }}
      transition={{ duration: 0.3 }}
    >
      Download Resume
    </motion.a>
  );
};

export default ResumeButton;
