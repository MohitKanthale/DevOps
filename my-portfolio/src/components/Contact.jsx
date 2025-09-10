import { useState } from "react";
import { motion } from "framer-motion";
import { useTheme } from "../context/ThemeContext";

const Contact = () => {
  const { darkMode } = useTheme();
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState({});

  const validate = () => {
    let tempErrors = {};
    if (!formData.name) tempErrors.name = "Name is required";
    if (!formData.email) tempErrors.email = "Email is required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email))
      tempErrors.email = "Invalid email format";
    if (!formData.message) tempErrors.message = "Message cannot be empty";
    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      console.log(" Form submitted successfully ", formData);
      // Backend integration can be added here (e.g., EmailJS, API call)
    }
  };

  return (
    <section
      id="contact"
      className={`py-20 transition-all duration-300 ${darkMode ? "bg-gray-900 text-white" : "bg-gray-100 text-black"}`}
    >
      <h2 className="text-4xl font-bold mb-8 text-center">Contact Me</h2>
      <motion.form
        onSubmit={handleSubmit}
        className={`max-w-lg mx-auto p-6 rounded-lg shadow-lg transition-all duration-300 ${darkMode ? "bg-gray-800 text-white" : "bg-white text-black"}`}
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="mb-4">
          <input
            type="text"
            placeholder="Your Name"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            className="w-full p-3 border rounded-lg bg-transparent focus:ring-2 focus:ring-blue-500 outline-none"
          />
          {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
        </div>

        <div className="mb-4">
          <input
            type="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            className="w-full p-3 border rounded-lg bg-transparent focus:ring-2 focus:ring-blue-500 outline-none"
          />
          {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
        </div>

        <div className="mb-4">
          <textarea
            placeholder="Your Message"
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            className="w-full p-3 border rounded-lg bg-transparent resize-none focus:ring-2 focus:ring-blue-500 outline-none"
            rows="5"
          ></textarea>
          {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message}</p>}
        </div>

        <button
          type="submit"
          className="w-full px-6 py-3 font-semibold rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition-all duration-300"
        >
          Send Message
        </button>
      </motion.form>
    </section>
  );
};

export default Contact;