import { useTheme } from "../context/ThemeContext";

const Contact = () => {
  const { darkMode } = useTheme();

  return (
    <section
      id="contact"
      className={`py-20 text-center transition-all duration-300 ${darkMode ? "bg-gray-900 text-white" : "bg-blue-100 text-black"}`}
    >
      <h2 className="text-4xl font-bold mb-8">Contact Me</h2>
      <form
        className={`max-w-lg mx-auto p-6 rounded-lg shadow-lg transition-all duration-300 ${darkMode ? "bg-gray-800 text-white border-gray-700" : "bg-white text-black border-gray-300"}`}
      >
        <input
          type="text"
          placeholder="Your Name"
          className={`w-full p-3 border rounded mb-4 transition-all duration-300 ${darkMode ? "bg-gray-700 text-white border-gray-600" : "bg-white text-black border-gray-300"}`}
        />
        <input
          type="email"
          placeholder="Your Email"
          className={`w-full p-3 border rounded mb-4 transition-all duration-300 ${darkMode ? "bg-gray-700 text-white border-gray-600" : "bg-white text-black border-gray-300"}`}
        />
        <textarea
          placeholder="Your Message"
          className={`w-full p-3 border rounded mb-4 resize-none transition-all duration-300 ${darkMode ? "bg-gray-700 text-white border-gray-600" : "bg-white text-black border-gray-300"}`}
          rows="5"
        ></textarea>
        <button
          className={`px-6 py-2 font-semibold rounded-lg transition-all duration-300 ${darkMode ? "bg-blue-600 text-white hover:bg-blue-700" : "bg-blue-500 text-white hover:bg-blue-600"}`}
        >
          Send
        </button>
      </form>
    </section>
  );
};

export default Contact;