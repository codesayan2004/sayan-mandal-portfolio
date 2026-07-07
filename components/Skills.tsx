
import React from 'react';
import { motion } from 'framer-motion';
import { SKILL_CATEGORIES } from '../constants';
import { useTheme } from '../ThemeContext';

const Skills: React.FC = () => {
  const { theme } = useTheme();

  return (
    <section id="skills" className="py-24 px-6 relative overflow-hidden">
      <div className={`absolute top-0 right-0 w-[500px] h-[500px] blur-[120px] rounded-full ${theme === 'dark' ? 'bg-indigo-600/10' : 'bg-indigo-400/5'}`}></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Technical Expertise</h2>
          <p className={`max-w-2xl mx-auto ${theme === 'dark' ? 'text-slate-500' : 'text-slate-600'}`}>A comprehensive toolkit of languages, frameworks, and tools I use to build robust software.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {SKILL_CATEGORIES.map((category, idx) => (
            <motion.div
              key={category.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className={`glass p-8 rounded-3xl border group transition-all ${theme === 'dark' ? 'hover:bg-white/5 border-white/5' : 'hover:bg-slate-100 border-slate-300'}`}
            >
              <h3 className="text-xl font-bold mb-6 text-indigo-400 border-b border-indigo-500/20 pb-4">
                {category.name}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span 
                    key={skill} 
                    className={`px-3 py-1 rounded-lg text-xs font-medium transition-colors ${theme === 'dark' ? 'bg-slate-800/50 text-slate-400 group-hover:text-indigo-300' : 'bg-slate-200 text-slate-600 group-hover:text-indigo-500'}`}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
