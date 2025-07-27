// import { motion } from "framer-motion";
// import { TypeAnimation } from "react-type-animation";
// import { useTheme } from "../context/ThemeContext";
// import heroImage from "../assets/hero-image.png"; // Replace with actual image

// const Hero = () => {
//   const { darkMode } = useTheme();

//   return (
//     <section
//       id="home"
//       className={`min-h-screen flex flex-col-reverse md:flex-row items-center justify-center text-center md:text-left px-6 md:px-16 gap-8 transition-all duration-300 ${darkMode ? "bg-gray-900 text-white" : "bg-gray-100 text-black"}`}
//     >
//       {/* Left Content */}
//       <div className="max-w-2xl">
//         <h1 className="text-4xl md:text-6xl font-bold leading-tight">
//           Hi, I'm
//           <br />
//           <span className="bg-gradient-to-r from-blue-500 to-purple-500 text-transparent bg-clip-text">
//             Mohit Kanthale
//           </span>
//         </h1>
//         <TypeAnimation
//           sequence={["Web Developer", 2000, "Frontend Engineer", 2000, "React Enthusiast", 2000]}
//           wrapper="span"
//           speed={50}
//           repeat={Infinity}
//           className="text-2xl md:text-3xl font-semibold mt-2 block text-blue-500"
//         />
//         <p className="mt-4 text-lg md:text-xl text-gray-500 dark:text-gray-500">
//           I specialize in building interactive and scalable web applications using modern technologies.
//         </p>

//         {/* Call-to-Action Buttons */}
//         <div className="mt-6 flex flex-wrap gap-4 justify-center md:justify-start">
//           <a
//             href="#projects"
//             className="px-6 py-3 bg-blue-600 text-white rounded-lg shadow-lg hover:bg-blue-700 transition-all"
//           >
//             View My Work
//           </a>
//           <a
//             href="#contact"
//             className="px-6 py-3 border-2 border-blue-600 text-blue-600 rounded-lg hover:bg-blue-600 hover:text-white transition-all"
//           >
//             Contact Me
//           </a>
//         </div>
//       </div>

//       {/* Right Content - Hero Image */}
//       <motion.div
//         initial={{ opacity: 0, scale: 0.8 }}
//         animate={{ opacity: 1, scale: 1 }}
//         transition={{ duration: 0.8 }}
//       >
//        <img
//   src={heroImage}
//   alt="Mohit Kanthale"
//   className="w-48 h-48 md:w-64 md:h-64 object-cover rounded-full shadow-lg"
// />



//       </motion.div>
//     </section>
//   );
// };

// export default Hero;






import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import { useTheme } from "../context/ThemeContext";
import heroImage from "../assets/hero-image.png"; // Make sure your image exists

const Hero = () => {
  const { darkMode } = useTheme();

  return (
    <section
      id="home"
      className={`flex flex-col md:flex-row items-center justify-center min-h-screen px-8 transition-all duration-300 ${
        darkMode ? "bg-[#0a192f] text-white" : "bg-white text-gray-900"
      }`}
    >
      {/* Left Content */}
      <div className="flex flex-col gap-6 max-w-xl">
        <motion.h1
          className="text-4xl md:text-6xl font-bold"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Hi, I'm <span className="text-cyan-400">Mohit Kanthale</span>
        </motion.h1>

        <TypeAnimation
          sequence={[
            "Integration Developer",
            2000,
            "IBM ACE | IIB Specialist",
            2000,
            "Building Scalable APIs",
            2000,
            "Enterprise System Integration",
            2000,
          ]}
          wrapper="h2"
          speed={50}
          className="text-2xl md:text-3xl font-semibold text-blue-500"
          repeat={Infinity}
        />

        <p className="text-lg mt-4 leading-relaxed">
          I specialize in building robust, secure, and scalable integration solutions using IBM ACE, IIB, and modern API technologies.
        </p>

        {/* Buttons */}
        <div className="flex gap-6 mt-6">
          <motion.a
            href="#projects"
            className="px-6 py-3 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold shadow-md hover:scale-105 transition"
            whileHover={{ scale: 1.05 }}
          >
            View Projects
          </motion.a>

          <motion.a
            href="#contact"
            className="px-6 py-3 rounded-lg border-2 border-cyan-500 text-cyan-500 font-semibold hover:bg-cyan-500 hover:text-white transition"
            whileHover={{ scale: 1.05 }}
          >
            Contact Me
          </motion.a>
        </div>
      </div>

      {/* Right Image */}
      <motion.div
        className="mt-10 md:mt-0 md:ml-20"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
      >
        <img
          src={heroImage}
          alt="Hero"
          className="rounded-full object-cover w-72 h-72 shadow-lg border-4 border-cyan-400"
        />
      </motion.div>
    </section>
  );
};

export default Hero;