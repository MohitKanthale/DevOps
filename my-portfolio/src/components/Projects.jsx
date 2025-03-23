import { motion } from "framer-motion";
import { useTheme } from "../context/ThemeContext";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";

const projects = [
  {
    title: "Project 1",
    description: "Description of project 1",
    liveLink: "#",
    githubLink: "#",
    techStack: ["React", "Tailwind CSS", "Framer Motion"],
  },
  {
    title: "Project 2",
    description: "Description of project 2",
    liveLink: "#",
    githubLink: "#",
    techStack: ["JavaScript", "Node.js", "MongoDB"],
  },
];

const Projects = () => {
  const { darkMode } = useTheme();

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
            className={`p-6 rounded-lg shadow-lg transition-all duration-300 border-2 hover:shadow-2xl transform hover:scale-105 ${darkMode ? "bg-gray-800 border-gray-700" : "bg-white border-gray-300"}`}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
          >
            <h3 className="text-2xl font-semibold">{project.title}</h3>
            <p className="mt-2">{project.description}</p>
            
            {/* Technology Badges */}
            <div className="flex flex-wrap justify-center gap-2 mt-4">
              {project.techStack.map((tech, i) => (
                <span key={i} className="px-3 py-1 text-sm rounded-md font-medium bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-md">
                  {tech}
                </span>
              ))}
            </div>

            {/* Buttons */}
            <div className="flex justify-center gap-4 mt-4">
              <a
                href={project.liveLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 rounded-lg text-white transition-all bg-blue-600 hover:bg-blue-700 hover:shadow-md"
              >
                Live Demo <FaExternalLinkAlt />
              </a>
              <a
                href={project.githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 rounded-lg text-white transition-all bg-gray-700 hover:bg-gray-800 hover:shadow-md"
              >
                GitHub <FaGithub />
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
