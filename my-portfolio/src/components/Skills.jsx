import { useState } from "react";
import { motion } from "framer-motion";
import {
  FaReact, FaNodeJs, FaCss3Alt, FaHtml5, FaJs, FaGithub,
  FaDatabase, FaAws, FaJava, FaDocker, FaTools
} from "react-icons/fa";
import {
  SiTailwindcss, SiFramer, SiMongodb, SiMysql, SiJenkins, SiApollographql
} from "react-icons/si";
import { useTheme } from "../context/ThemeContext";

const allSkills = {
  Frontend: [
    { name: "React", icon: <FaReact className="text-blue-400" /> },
    { name: "JavaScript", icon: <FaJs className="text-yellow-400" /> },
    { name: "HTML5", icon: <FaHtml5 className="text-orange-500" /> },
    { name: "CSS3", icon: <FaCss3Alt className="text-blue-500" /> },
    { name: "Tailwind CSS", icon: <SiTailwindcss className="text-cyan-400" /> },
    { name: "Framer Motion", icon: <SiFramer className="text-pink-400" /> },
  ],
  Backend: [
    { name: "Node.js", icon: <FaNodeJs className="text-green-500" /> },
    { name: "MongoDB", icon: <SiMongodb className="text-green-400" /> },
    { name: "MySQL", icon: <SiMysql className="text-blue-600" /> },
    { name: "API Integration", icon: <SiApollographql className="text-purple-500" /> },
  ],
  DevOps: [
    { name: "DevOps", icon: <FaTools className="text-gray-300" /> },
    { name: "Jenkins", icon: <SiJenkins className="text-red-400" /> },
    { name: "CI/CD", icon: <FaTools className="text-yellow-500" /> },
    { name: "AWS", icon: <FaAws className="text-orange-400" /> },
    { name: "Docker", icon: <FaDocker className="text-blue-400" /> },
    { name: "Java", icon: <FaJava className="text-red-500" /> },
    { name: "GitHub", icon: <FaGithub className="text-white" /> },
  ]
};

const Skills = () => {
  const { darkMode } = useTheme();
  const [activeTab, setActiveTab] = useState("Frontend");

  return (
    <section
      id="skills"
      className={`py-20 px-6 transition-all duration-300 ${
        darkMode ? "bg-gray-900 text-white" : "bg-gray-100 text-gray-900"
      }`}
    >
      <h2 className="text-4xl font-bold text-center mb-12">Skills</h2>

      {/* Tabs */}
      <div className="flex justify-center gap-6 mb-8">
        {Object.keys(allSkills).map((category) => (
          <button
            key={category}
            onClick={() => setActiveTab(category)}
            className={`px-4 py-2 rounded-full font-semibold border transition-all duration-300 ${
              darkMode
                ? activeTab === category
                  ? "bg-blue-600 text-white border-blue-600"
                  : "border-gray-600 text-gray-300 hover:bg-gray-800"
                : activeTab === category
                ? "bg-blue-500 text-white border-blue-500"
                : "border-gray-300 text-gray-800 hover:bg-gray-200"
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Skills Cards */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 max-w-6xl mx-auto">
        {allSkills[activeTab].map((skill, index) => (
          <motion.div
            key={index}
            className={`flex flex-col items-center justify-center p-6 rounded-2xl shadow-md transition duration-300 hover:-translate-y-2 hover:shadow-xl ${
              darkMode ? "bg-gray-800" : "bg-white"
            }`}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
          >
            <div className="text-4xl mb-3">{skill.icon}</div>
            <p className="font-semibold text-lg text-center">{skill.name}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
