import React from "react";
import { motion } from "framer-motion";

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
  "Advanced Networking",
  "Software Engineering"
];

const Courses: React.FC = () => {
  return (
    <section id="courses" className="py-24 px-6 relative overflow-hidden">

      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-purple-600/10 blur-[120px] rounded-full"></div>

      <div className="max-w-6xl mx-auto relative z-10">

        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Courses Taken
          </h2>

          <p className="text-slate-500 max-w-2xl mx-auto">
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
              className="px-5 py-2 bg-slate-800/50 rounded-xl text-sm font-medium text-slate-300 hover:text-indigo-300 hover:bg-slate-800 transition-all cursor-default"
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