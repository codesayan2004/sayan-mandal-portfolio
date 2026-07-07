import React from "react";
import { motion } from "framer-motion";
import { useTheme } from "../ThemeContext";

const COURSES = [
  "Introduction to Computing",
  "Data Structures and Algorithms",
  "Design and Analysis of Algorithms",
  "Discrete Mathematics",
  "Cloud Computing",
  "Machine Learning",
  "Computer Architecture and Organization",
  "Computer Networks",
  "Theory of Computation",
  "Randomized Algorithm",
  "Digital Design",
  "Database Management System",
  "Software Engineering",
  "Operating Systems",
  "Compiler Design"
];

const Courses: React.FC = () => {
  const { theme } = useTheme();

  return (
    <section id="courses" className="py-24 px-6 relative overflow-hidden">

      <div className={`absolute bottom-0 left-0 w-[500px] h-[500px] blur-[120px] rounded-full ${theme === 'dark' ? 'bg-purple-600/10' : 'bg-purple-400/5'}`}></div>

      <div className="max-w-6xl mx-auto relative z-10">

        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Courses Taken
          </h2>

          <p className={`max-w-2xl mx-auto ${theme === 'dark' ? 'text-slate-500' : 'text-slate-600'}`}>
            Core computer science courses that built my foundation in software engineering and systems.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-4">
          {COURSES.map((course, idx) => (
            <motion.span
              key={course}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: idx * 0.05 }}
              viewport={{ once: true }}
              className={`px-5 py-2 rounded-xl text-sm font-medium transition-all cursor-default ${theme === 'dark' ? 'bg-slate-800/50 text-slate-300 hover:text-indigo-300 hover:bg-slate-800' : 'bg-slate-200 text-slate-700 hover:text-indigo-500 hover:bg-slate-300'}`}
            >
              {course}
            </motion.span>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Courses;