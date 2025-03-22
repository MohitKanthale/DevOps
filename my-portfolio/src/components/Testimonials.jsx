import { motion } from "framer-motion";
import { useTheme } from "../context/ThemeContext";


const Testimonials = () => {
  const theme = useTheme();
  const darkMode = theme ? theme.darkMode : false;

  const testimonials = [
    { name: "John Doe", feedback: "Mohit is an amazing developer with great attention to detail!" },
    { name: "Jane Smith", feedback: "Loved working with Mohit! Highly recommended." }
  ];

  return (
    <section id="testimonials" className={`py-20 text-center transition-all duration-300 ${darkMode ? "bg-gray-900 text-white" : "bg-gray-100 text-black"}`}>
      <h2 className="text-4xl font-bold mb-8">Testimonials</h2>
      <div className="grid md:grid-cols-2 gap-6 px-6">
        {testimonials.map((t, index) => (
          <motion.div 
            key={index} 
            className={`p-6 rounded-lg shadow-lg transition-all duration-300 ${darkMode ? "bg-gray-800" : "bg-white"}`}
            initial={{ opacity: 0, y: 50 }} 
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}>
            <p className="italic">"{t.feedback}"</p>
            <h4 className="mt-4 font-semibold">{t.name}</h4>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
export default Testimonials;