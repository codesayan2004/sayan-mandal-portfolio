
import React from 'react';
import { motion } from 'framer-motion';
import { RESUME_DATA } from '../constants';
import { GraduationCap, Award, Brain, Target } from 'lucide-react';

const About: React.FC = () => {
  const highlights = [
    { icon: <GraduationCap />, title: "IIT Guwahati", desc: "B.Tech CSE" },
    { icon: <Award />, title: "8.02 CGPA", desc: "Consistency" },
    { icon: <Brain />, title: "Problem Solver", desc: "Competitive Programming" },
    { icon: <Target />, title: "Zscaler Intern", desc: "Cloud & Security" },
  ];

  return (
    <section id="about" className="py-24 px-6 bg-[#030712]">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-2"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-8 flex items-center gap-4">
              <span className="w-12 h-1 bg-indigo-500 rounded-full"></span>
              About Me
            </h2>
            <p className="text-lg text-slate-400 leading-relaxed mb-6 font-light">
              {RESUME_DATA.about}
            </p>
            <p className="text-lg text-slate-400 leading-relaxed font-light">
            Beyond application development, I am particularly interested in systems programming, computer networking, and algorithmic problem solving. I enjoy exploring how efficient algorithms and well-designed infrastructure can work together to build secure, high-performance software.
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 gap-4"
          >
            {highlights.map((h, i) => (
              <div key={i} className="glass p-6 rounded-2xl border border-white/5 hover:border-indigo-500/30 transition-all group">
                <div className="text-indigo-400 mb-4 group-hover:scale-110 transition-transform">{h.icon}</div>
                <h3 className="font-bold text-sm text-slate-200">{h.title}</h3>
                <p className="text-xs text-slate-500">{h.desc}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
