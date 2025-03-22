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

const skills = [
  { name: "React", level: 90 },
  { name: "JavaScript", level: 85 },
  { name: "Tailwind CSS", level: 80 },
  { name: "Framer Motion", level: 75 },
  { name: "Node.js", level: 70 },
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
            className={`p-6 rounded-lg shadow-lg transition-all duration-300 ${darkMode ? "bg-gray-800" : "bg-white"}`}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            whileHover={{ scale: 1.05 }}
          >
            <h3 className="text-2xl font-semibold">{project.title}</h3>
            <p className="mt-2">{project.description}</p>
            
            {/* Technology Badges */}
            <div className="flex flex-wrap justify-center gap-2 mt-4">
              {project.techStack.map((tech, i) => (
                <span key={i} className="px-3 py-1 bg-gray-700 text-white text-sm rounded-md">
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
                className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
              >
                Live Demo <FaExternalLinkAlt />
              </a>
              <a
                href={project.githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 bg-gray-700 text-white rounded-lg hover:bg-gray-800 transition"
              >
                GitHub <FaGithub />
              </a>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Skills Progress Bar */}
      <h2 className="text-4xl font-bold mt-20 mb-8">Skills</h2>
      <div className="max-w-2xl mx-auto">
        {skills.map((skill, index) => (
          <div key={index} className="mb-4">
            <p className="text-lg font-semibold">{skill.name}</p>
            <div className="w-full bg-gray-300 rounded-full h-4">
              <motion.div
                className="h-4 bg-blue-600 rounded-full"
                initial={{ width: 0 }}
                animate={{ width: `${skill.level}%` }}
                transition={{ duration: 1.5, delay: index * 0.3 }}
                style={{ width: `${skill.level}%` }}
              ></motion.div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
