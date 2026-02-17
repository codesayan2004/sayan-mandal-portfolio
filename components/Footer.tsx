
import React from 'react';
import { RESUME_DATA } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer className="py-12 px-6 border-t border-white/5 bg-[#030712]">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-4">
          <span className="text-xl font-bold bg-gradient-to-r from-indigo-400 to-purple-500 bg-clip-text text-transparent font-display">SM</span>
          <p className="text-slate-500 text-sm">© {new Date().getFullYear()} {RESUME_DATA.name}</p>
        </div>
        
        <div className="flex items-center space-x-8">
            <a href="#about" className="text-sm text-slate-500 hover:text-white transition-colors">Privacy Policy</a>
            <a href="#about" className="text-sm text-slate-500 hover:text-white transition-colors">Cookies</a>
        </div>

        <p className="text-sm text-slate-500">Built with <span className="text-pink-500">❤️</span> by {RESUME_DATA.name}</p>
      </div>
    </footer>
  );
};

export default Footer;
