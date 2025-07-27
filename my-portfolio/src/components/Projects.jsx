// import { motion } from "framer-motion";
// import { useTheme } from "../context/ThemeContext";
// import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";

// const projects = [
//   {
//     title: "Project 1",
//     description: "Description of project 1",
//     liveLink: "#",
//     githubLink: "#",
//     techStack: ["React", "Tailwind CSS", "Framer Motion"],
//   },
//   {
//     title: "Project 2",
//     description: "Description of project 2",
//     liveLink: "#",
//     githubLink: "#",
//     techStack: ["JavaScript", "Node.js", "MongoDB"],
//   },
// ];

// const Projects = () => {
//   const { darkMode } = useTheme();

//   return (
//     <section
//       id="projects"
//       className={`py-20 text-center transition-all duration-300 ${darkMode ? "bg-gray-900 text-white" : "bg-gray-100 text-black"}`}
//     >
//       <h2 className="text-4xl font-bold mb-8">My Projects</h2>
//       <div className="grid md:grid-cols-2 gap-6 px-6">
//         {projects.map((project, index) => (
//           <motion.div
//             key={index}
//             className={`p-6 rounded-lg shadow-lg transition-all duration-300 border-2 hover:shadow-2xl transform hover:scale-105 ${darkMode ? "bg-gray-800 border-gray-700" : "bg-white border-gray-300"}`}
//             initial={{ opacity: 0, y: 50 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.6, delay: index * 0.2 }}
//           >
//             <h3 className="text-2xl font-semibold">{project.title}</h3>
//             <p className="mt-2">{project.description}</p>
            
//             {/* Technology Badges */}
//             <div className="flex flex-wrap justify-center gap-2 mt-4">
//               {project.techStack.map((tech, i) => (
//                 <span key={i} className="px-3 py-1 text-sm rounded-md font-medium bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-md">
//                   {tech}
//                 </span>
//               ))}
//             </div>

//             {/* Buttons */}
//             <div className="flex justify-center gap-4 mt-4">
//               <a
//                 href={project.liveLink}
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="flex items-center gap-2 px-4 py-2 rounded-lg text-white transition-all bg-blue-600 hover:bg-blue-700 hover:shadow-md"
//               >
//                 Live Demo <FaExternalLinkAlt />
//               </a>
//               <a
//                 href={project.githubLink}
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="flex items-center gap-2 px-4 py-2 rounded-lg text-white transition-all bg-gray-700 hover:bg-gray-800 hover:shadow-md"
//               >
//                 GitHub <FaGithub />
//               </a>
//             </div>
//           </motion.div>
//         ))}
//       </div>
//     </section>
//   );
// };

// export default Projects;





import { motion } from "framer-motion";
import { useTheme } from "../context/ThemeContext";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";

const projects = [
  {
    title: "Enterprise API Gateway",
    description: "Designed and implemented a secure API Gateway using IBM ACE for enterprise-level traffic management and authentication.",
    liveLink: "#",
    githubLink: "#",
    techStack: ["IBM ACE", "OAuth2", "JWT", "API Security"],
  },
  {
    title: "Cloud-Based Integration",
    description: "Developed scalable microservices and cloud integrations using IBM App Connect Enterprise and AWS services.",
    liveLink: "#",
    githubLink: "#",
    techStack: ["IBM ACE", "AWS Lambda", "Node.js", "S3"],
  },
  {
    title: "Legacy System Modernization",
    description: "Migrated legacy ESB systems to IBM ACE, improving system reliability, scalability, and maintainability.",
    liveLink: "#",
    githubLink: "#",
    techStack: ["IBM IIB", "ACE", "Docker", "Kubernetes"],
  },
];

const Projects = () => {
  const { darkMode } = useTheme();

  return (
    <section
      id="projects"
      className={`py-20 px-6 transition-all duration-300 ${
        darkMode ? "bg-[#0a192f] text-white" : "bg-gray-100 text-gray-900"
      }`}
    >
      <h2 className="text-4xl font-bold text-center mb-12">Projects</h2>

      <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className={`rounded-2xl p-6 shadow-xl transition-all duration-300 hover:scale-105 hover:shadow-cyan-500/50 ${
              darkMode ? "bg-[#112240]" : "bg-white"
            }`}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
          >
            <h3 className="text-2xl font-semibold mb-4">{project.title}</h3>
            <p className="text-md mb-4">{project.description}</p>

            <div className="flex flex-wrap gap-2 mb-6">
              {project.techStack.map((tech, i) => (
                <span
                  key={i}
                  className="px-3 py-1 bg-cyan-500 text-white text-xs rounded-full shadow-md"
                >
                  {tech}
                </span>
              ))}
            </div>

            <div className="flex gap-4">
              <a
                href={project.liveLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 bg-cyan-500 hover:bg-cyan-600 text-white rounded-lg transition"
              >
                Live <FaExternalLinkAlt />
              </a>
              <a
                href={project.githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 border-2 border-cyan-500 text-cyan-500 hover:bg-cyan-500 hover:text-white rounded-lg transition"
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