import { useTheme } from "../context/ThemeContext";

const skills = ["React", "JavaScript", "Tailwind CSS", "Framer Motion", "Node.js"];

const Skills = () => {
  const { darkMode } = useTheme();

  return (
    <section
      id="skills"
      className={`py-20 text-center transition-all duration-300 ${darkMode ? "bg-gray-900 text-white" : "bg-blue-100 text-black"}`}
    >
      <h2 className="text-4xl font-bold">Skills</h2>
      <div className="flex flex-wrap justify-center gap-4 mt-6">
        {skills.map((skill, index) => (
          <span
            key={index}
            className={`px-4 py-2 rounded-lg shadow-md transition-all duration-300 ${darkMode ? "bg-gray-800 text-white" : "bg-blue-600 text-white"}`}
          >
            {skill}
          </span>
        ))}
      </div>
    </section>
  );
};

export default Skills;
