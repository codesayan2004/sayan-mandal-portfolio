
import React from 'react';
import { motion } from 'framer-motion';
import { EXPERIENCES, ACHIEVEMENTS } from '../constants';
import { Briefcase, Trophy, Calendar } from 'lucide-react';

const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-24 px-6 bg-[#030712]">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">
        
        {/* Work Experience */}
        <div>
          <h2 className="text-3xl font-bold mb-12 flex items-center gap-4">
            <Briefcase className="text-indigo-500" /> Professional Journey
          </h2>
          <div className="space-y-12 relative before:absolute before:left-[11px] before:top-2 before:bottom-0 before:w-[2px] before:bg-indigo-500/20">
            {EXPERIENCES.map((exp, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="pl-12 relative"
              >
                <div className="absolute left-0 top-1 w-6 h-6 rounded-full glass border border-indigo-500 z-10 flex items-center justify-center">
                  <div className="w-2 h-2 rounded-full bg-indigo-500"></div>
                </div>
                <span className="text-xs font-bold text-indigo-400 uppercase tracking-widest flex items-center gap-2 mb-2">
                  <Calendar size={12} /> {exp.duration}
                </span>
                <h3 className="text-xl font-bold">{exp.role}</h3>
                <p className="text-indigo-300 mb-4 font-medium">{exp.company}</p>
                <p className="text-slate-400 font-light text-sm leading-relaxed">{exp.description}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Achievements */}
        <div>
          <h2 className="text-3xl font-bold mb-12 flex items-center gap-4">
            <Trophy className="text-purple-500" /> Key Milestones
          </h2>
          <div className="grid gap-6">
            {ACHIEVEMENTS.map((ach, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="glass p-6 rounded-2xl border border-white/5 flex gap-6 group hover:border-purple-500/20 transition-all"
              >
                <div className="h-12 w-12 rounded-xl bg-purple-500/10 flex items-center justify-center text-purple-400 flex-shrink-0 group-hover:scale-110 transition-transform">
                  <Trophy size={20} />
                </div>
                <div>
                  <div className="flex justify-between items-center mb-1">
                    <h3 className="font-bold text-slate-200">{ach.title}</h3>
                    <span className="text-[10px] font-bold text-slate-500 bg-slate-800 px-2 py-1 rounded">{ach.year}</span>
                  </div>
                  <p className="text-sm text-slate-400">{ach.detail}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default Experience;
