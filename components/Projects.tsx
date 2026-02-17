
import React from 'react';
import { motion } from 'framer-motion';
import { PROJECTS } from '../constants';
import { Github, ExternalLink } from 'lucide-react';

const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-24 px-6 bg-[#020617]">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Featured Projects</h2>
            <p className="text-slate-500 max-w-md">Selected works that showcase my skills in engineering and design.</p>
          </div>
          <a href="#" className="text-indigo-400 font-medium hover:underline flex items-center gap-2">
            View all on GitHub <Github size={18} />
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {PROJECTS.map((project, idx) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.2 }}
              className="group relative overflow-hidden rounded-3xl glass border border-white/5"
            >
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent"></div>
              </div>
              
              <div className="p-8 relative">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map(t => (
                    <span key={t} className="text-[10px] uppercase tracking-wider px-2 py-1 glass rounded-md text-indigo-300 font-bold border border-indigo-500/20">{t}</span>
                  ))}
                </div>
                
                <h3 className="text-2xl font-bold mb-3 group-hover:text-indigo-400 transition-colors">{project.title}</h3>
                <p className="text-slate-400 mb-6 font-light leading-relaxed">{project.description}</p>
                
                <div className="flex gap-4">
                  <a href={project.github} className="flex items-center gap-2 text-sm text-slate-300 hover:text-white transition-colors">
                    <Github size={18} /> Source
                  </a>
                  {project.live && (
                    <a href={project.live} className="flex items-center gap-2 text-sm text-slate-300 hover:text-white transition-colors">
                      <ExternalLink size={18} /> Live Demo
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
