// // import { motion } from "framer-motion";
// // import { useTheme } from "../context/ThemeContext";


// // const Testimonials = () => {
// //   const theme = useTheme();
// //   const darkMode = theme ? theme.darkMode : false;

// //   const testimonials = [
// //     { name: "John Doe", feedback: "Mohit is an amazing developer with great attention to detail!" },
// //     { name: "Jane Smith", feedback: "Loved working with Mohit! Highly recommended." }
// //   ];

// //   return (
// //     <section id="testimonials" className={`py-20 text-center transition-all duration-300 ${darkMode ? "bg-gray-900 text-white" : "bg-gray-100 text-black"}`}>
// //       <h2 className="text-4xl font-bold mb-8">Testimonials</h2>
// //       <div className="grid md:grid-cols-2 gap-6 px-6">
// //         {testimonials.map((t, index) => (
// //           <motion.div 
// //             key={index} 
// //             className={`p-6 rounded-lg shadow-lg transition-all duration-300 ${darkMode ? "bg-gray-800" : "bg-white"}`}
// //             initial={{ opacity: 0, y: 50 }} 
// //             whileInView={{ opacity: 1, y: 0 }}
// //             transition={{ duration: 0.6, delay: index * 0.2 }}>
// //             <p className="italic">"{t.feedback}"</p>
// //             <h4 className="mt-4 font-semibold">{t.name}</h4>
// //           </motion.div>
// //         ))}
// //       </div>
// //     </section>
// //   );
// // };
// // export default Testimonials;








import { motion } from "framer-motion";
import { useTheme } from "../context/ThemeContext";

const testimonials = [
  {
    name: "John Doe",
    role: "Senior Developer",
    feedback: "Working with Mohit has been a fantastic experience! His technical skills and commitment are outstanding.",
    avatar: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    name: "Jane Smith",
    role: "Project Manager",
    feedback: "Always delivering quality work on time. Mohit is a valuable team player and a problem solver.",
    avatar: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    name: "Michael Lee",
    role: "Tech Lead",
    feedback: "Innovative, detail-oriented, and technically strong! Highly recommend Mohit for any complex projects.",
    avatar: "https://randomuser.me/api/portraits/men/85.jpg",
  },
];

const Testimonials = () => {
  const { darkMode } = useTheme();

  return (
    <section
      id="testimonials"
      className={`py-20 px-6 transition-all duration-300 ${
        darkMode ? "bg-gray-900 text-white" : "bg-gray-100 text-gray-900"
      }`}
    >
      <h2 className="text-4xl font-bold mb-12 text-center">Testimonials</h2>

      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {testimonials.map((testimonial, index) => (
          <motion.div
            key={index}
            className={`rounded-2xl p-8 shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl ${
              darkMode ? "bg-gray-800 text-white" : "bg-white text-gray-900"
            }`}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
          >
            <div className="flex items-center mb-6">
              <img
                src={testimonial.avatar}
                alt={testimonial.name}
                className="w-16 h-16 rounded-full border-2 border-blue-400"
              />
              <div className="ml-4">
                <h3 className="text-xl font-semibold">{testimonial.name}</h3>
                <p className="text-sm opacity-70">{testimonial.role}</p>
              </div>
            </div>
            <p className="text-md opacity-80 leading-relaxed">{testimonial.feedback}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
