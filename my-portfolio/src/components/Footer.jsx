import { motion } from "framer-motion";
import { useTheme } from "../context/ThemeContext";

const projects = [
  { title: "Project 1", description: "Description of project 1" },
  { title: "Project 2", description: "Description of project 2" },
];

const Projects = () => {
  const theme = useTheme();
  const darkMode = theme ? theme.darkMode : false;

  return (
    <section
      id="projects"
      className={`py-20 text-center transition-all duration-300 ${darkMode ? "bg-gray-900 text-white" : "bg-gray-100 text-black"}`}
    >
      <h2 className="text-4xl font-bold mb-8">My Projects</h2>
      <div className="grid md:grid-cols-2 gap-6 px-6">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className={`p-6 rounded-lg shadow-lg transition-all duration-300 ${darkMode ? "bg-gray-800" : "bg-white"}`}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
          >
            <h3 className="text-2xl font-semibold">{project.title}</h3>
            <p className="mt-2">{project.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

const Footer = () => {
  const theme = useTheme();
  const darkMode = theme ? theme.darkMode : false;

  return (
    <footer className={`text-center py-6 transition-all duration-300 ${darkMode ? "bg-gray-900 text-white" : "bg-gray-100 text-black"}`}>
      <p>&copy; {new Date().getFullYear()} Mohit Kanthale. All rights reserved.</p>
      <div className="flex justify-center gap-4 mt-4">
        <a
          href="https://github.com"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-blue-400"
        >
          GitHub
        </a>
        <a
          href="https://linkedin.com"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-blue-400"
        >
          LinkedIn
        </a>
      </div>
    </footer>
  );
};

export default Footer;