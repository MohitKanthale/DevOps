// import { useState } from "react";
// import { Link } from "react-scroll";
// import { useTheme } from "../context/ThemeContext";
// import { motion, AnimatePresence } from "framer-motion";
// import { FaMoon, FaSun, FaBars, FaTimes } from "react-icons/fa";

// const Navbar = () => {
//   const { darkMode, toggleDarkMode } = useTheme();
//   const [activeSection, setActiveSection] = useState("home");
//   const [menuOpen, setMenuOpen] = useState(false); // State for mobile menu

//   return (
//     <nav
//       className={`fixed top-0 left-0 w-full py-4 px-6 flex justify-between items-center backdrop-blur-lg shadow-lg z-50 transition-all duration-300 border-b-2 ${
//         darkMode ? "bg-gray-900 text-white border-gray-700" : "bg-white text-black border-gray-300"
//       }`}
//     >
//       {/* Logo */}
//       <div className="text-2xl font-bold px-6 py-2 rounded-lg bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-lg cursor-pointer">
//         Mohit Kanthale
//       </div>

//       {/* Desktop Navigation Links */}
//       <div className="hidden md:flex gap-6">
//         {[
//           { name: "Home", to: "home" },
//           { name: "About", to: "about" },
//           { name: "Projects", to: "projects" },
//           { name: "Contact", to: "contact" },
//         ].map((item, index) => (
//           <Link
//             key={index}
//             to={item.to}
//             smooth={true}
//             duration={500}
//             onClick={() => setActiveSection(item.to)}
//             className={`px-4 py-2 font-medium text-lg border-2 rounded-lg cursor-pointer transition-all duration-300 ${
//               activeSection === item.to
//                 ? "border-blue-500 bg-blue-500 text-white"
//                 : "border-transparent hover:border-blue-500 hover:text-blue-500"
//             }`}
//           >
//             {item.name}
//           </Link>
//         ))}
//       </div>

//       {/* Dark Mode Toggle */}
//       <button
//         onClick={toggleDarkMode}
//         className="hidden md:block ml-4 p-2 rounded-full bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 transition"
//       >
//         {darkMode ? <FaSun className="text-yellow-400" /> : <FaMoon className="text-gray-900" />}
//       </button>

//       {/* Mobile Menu Button */}
//       <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden">
//         {menuOpen ? <FaTimes className="text-2xl" /> : <FaBars className="text-2xl" />}
//       </button>

//       {/* Mobile Navigation Menu with Animation */}
//       <AnimatePresence>
//         {menuOpen && (
//           <motion.div
//             initial={{ opacity: 0, y: -20 }}
//             animate={{ opacity: 1, y: 0 }}
//             exit={{ opacity: 0, y: -20 }}
//             transition={{ duration: 0.3 }}
//             className={`absolute top-16 left-0 w-full flex flex-col items-center py-4 gap-4 shadow-lg transition-all duration-300 ${
//               darkMode ? "bg-gray-900 text-white" : "bg-white text-black"
//             }`}
//           >
//             {[
//               { name: "Home", to: "home" },
//               { name: "About", to: "about" },
//               { name: "Projects", to: "projects" },
//               { name: "Contact", to: "contact" },
//             ].map((item, index) => (
//               <Link
//                 key={index}
//                 to={item.to}
//                 smooth={true}
//                 duration={500}
//                 onClick={() => {
//                   setActiveSection(item.to);
//                   setMenuOpen(false);
//                 }}
//                 className="px-4 py-2 font-medium text-lg border-b border-gray-400 w-full text-center cursor-pointer transition-all duration-200 hover:bg-blue-500 hover:text-white"
//               >
//                 {item.name}
//               </Link>
//             ))}

//             {/* Dark Mode Toggle in Mobile Menu */}
//             <button
//               onClick={toggleDarkMode}
//               className="mt-4 p-2 rounded-full bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 transition"
//             >
//               {darkMode ? <FaSun className="text-yellow-400" /> : <FaMoon className="text-gray-900" />}
//             </button>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </nav>
//   );
// };

// export default Navbar;









import { useState } from "react";
import { Link } from "react-scroll";
import { useTheme } from "../context/ThemeContext";
import { FaMoon, FaSun, FaBars, FaTimes } from "react-icons/fa";
import { motion } from "framer-motion";

const Navbar = () => {
  const { darkMode, toggleDarkMode } = useTheme();
  const [navOpen, setNavOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  return (
    <motion.nav
      className={`fixed top-0 left-0 w-full flex items-center justify-between px-6 py-4 backdrop-blur-lg bg-opacity-40 shadow-md z-50 transition-all duration-300 ${
        darkMode ? "bg-[#0a192f]/70 text-white" : "bg-white/60 text-black"
      }`}
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ type: "spring", stiffness: 100 }}
      onMouseMove={(e) => {
        const glow = document.getElementById("glow");
        if (glow) {
          glow.style.left = `${e.clientX}px`;
          glow.style.top = `${e.clientY}px`;
        }
      }}
    >
      {/* Cursor Glow */}
      <div
        id="glow"
        className="hidden md:block fixed top-0 left-0 w-32 h-32 bg-blue-400 opacity-20 rounded-full pointer-events-none blur-3xl transition-transform duration-200"
        style={{ transform: "translate(-50%, -50%)" }}
      />

      {/* Logo */}
      <div className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600 cursor-pointer">
        Mohit Kanthale
      </div>

      {/* Desktop Links */}
      <div className="hidden md:flex gap-8 text-lg font-semibold">
        {[
          { name: "Home", to: "home" },
          { name: "About", to: "about" },
          { name: "Projects", to: "projects" },
          { name: "Skills", to: "skills" },
          { name: "Contact", to: "contact" },
        ].map((item, index) => (
          <Link
            key={index}
            to={item.to}
            smooth={true}
            duration={500}
            offset={-80}
            onClick={() => setActiveSection(item.to)}
            className={`cursor-pointer transition-all duration-300 border-b-2 ${
              activeSection === item.to
                ? "border-cyan-400 text-cyan-400"
                : "border-transparent hover:border-blue-400 hover:text-blue-400"
            }`}
          >
            {item.name}
          </Link>
        ))}
      </div>

      {/* Dark Mode + Mobile Menu */}
      <div className="flex items-center gap-4">
        <button
          onClick={toggleDarkMode}
          className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 transition"
        >
          {darkMode ? <FaSun className="text-yellow-400" /> : <FaMoon className="text-gray-900" />}
        </button>
        <div className="md:hidden">
          <button onClick={() => setNavOpen(!navOpen)}>
            {navOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav Menu */}
      {navOpen && (
        <div className={`absolute top-20 right-6 bg-white dark:bg-gray-800 rounded-lg shadow-md flex flex-col gap-6 p-6`}>
          {[
            { name: "Home", to: "home" },
            { name: "About", to: "about" },
            { name: "Projects", to: "projects" },
            { name: "Skills", to: "skills" },
            { name: "Contact", to: "contact" },
          ].map((item, index) => (
            <Link
              key={index}
              to={item.to}
              smooth={true}
              duration={500}
              offset={-80}
              onClick={() => {
                setActiveSection(item.to);
                setNavOpen(false);
              }}
              className="cursor-pointer hover:text-cyan-400 transition-all duration-300"
            >
              {item.name}
            </Link>
          ))}
        </div>
      )}
    </motion.nav>
  );
};

export default Navbar;
