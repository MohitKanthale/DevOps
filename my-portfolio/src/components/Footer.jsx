import { FaGithub, FaLinkedin, FaArrowUp } from "react-icons/fa";
import { useTheme } from "../context/ThemeContext";
import { useState, useEffect } from "react";

const Footer = () => {
  const { darkMode } = useTheme();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  return (
    <footer
      className={`text-center py-6 transition-all duration-300 border-t-2 ${darkMode ? "bg-gray-900 text-white border-gray-700" : "bg-gray-100 text-black border-gray-300"}`}
    >
      <p>&copy; {new Date().getFullYear()} Mohit Kanthale. All rights reserved.</p>
      <div className="flex justify-center gap-4 mt-4">
        <a
          href="https://github.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-xl hover:text-blue-400 transition-all duration-300"
        >
          <FaGithub />
        </a>
        <a
          href="https://linkedin.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-xl hover:text-blue-400 transition-all duration-300"
        >
          <FaLinkedin />
        </a>
      </div>
      {isVisible && (
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="fixed bottom-6 right-6 p-3 bg-blue-500 text-white rounded-full shadow-lg hover:bg-blue-600 transition-all duration-300"
        >
          <FaArrowUp />
        </button>
      )}
    </footer>
  );
};

export default Footer;