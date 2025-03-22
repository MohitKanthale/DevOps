import { useState } from "react";
import { Link } from "react-scroll";
import { useTheme } from "../context/ThemeContext";
import { FaMoon, FaSun } from "react-icons/fa";

const Navbar = () => {
  const { darkMode, toggleDarkMode } = useTheme();
  const [activeSection, setActiveSection] = useState("home");

  return (
    <nav
      className={`fixed top-0 left-0 w-full py-4 px-6 flex justify-between items-center backdrop-blur-lg bg-opacity-60 shadow-lg z-50 transition-all duration-300 border-b-2 border-gray-300 ${darkMode ? "bg-gray-900/70 text-white border-gray-700" : "bg-white/70 text-black border-gray-300"}`}
    >
      {/* Logo */}
      <div className="text-2xl font-bold px-4 py-2 rounded-lg bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-lg cursor-pointer">
        Mohit Kanthale
      </div>

      {/* Navigation Links */}
      <div className="flex gap-6">
        {[
          { name: "Home", to: "home" },
          { name: "About", to: "about" },
          { name: "Projects", to: "projects" },
          { name: "Contact", to: "contact" },
        ].map((item, index) => (
          <Link
            key={index}
            to={item.to}
            smooth={true}
            duration={500}
            onClick={() => setActiveSection(item.to)}
            className={`px-4 py-2 font-medium text-lg border-2 rounded-lg cursor-pointer transition-all duration-300 ${
              activeSection === item.to
                ? "border-blue-500 bg-blue-500 text-white"
                : "border-transparent hover:border-blue-500 hover:text-blue-500"
            }`}
          >
            {item.name}
          </Link>
        ))}
      </div>

      {/* Dark Mode Toggle */}
      <button
        onClick={toggleDarkMode}
        className="ml-4 p-2 rounded-full bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 transition"
      >
        {darkMode ? <FaSun className="text-yellow-400" /> : <FaMoon className="text-gray-900" />}
      </button>
    </nav>
  );
};

export default Navbar;