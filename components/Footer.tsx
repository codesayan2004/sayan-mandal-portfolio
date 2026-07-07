
import React from 'react';
import { RESUME_DATA } from '../constants';
import { useTheme } from '../ThemeContext';

const Footer: React.FC = () => {
  const { theme } = useTheme();

  return (
    <footer className={`py-12 px-6 border-t ${theme === 'dark' ? 'border-white/5 bg-[#030712]' : 'border-slate-200 bg-slate-50'}`}>
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-4">
          <span className="text-xl font-bold bg-gradient-to-r from-indigo-400 to-purple-500 bg-clip-text text-transparent font-display">SM</span>
          <p className={`text-sm ${theme === 'dark' ? 'text-slate-500' : 'text-slate-600'}`}>© {new Date().getFullYear()} {RESUME_DATA.name}</p>
        </div>
        
        <div className="flex items-center space-x-8">
            <a href="#about" className={`text-sm transition-colors ${theme === 'dark' ? 'text-slate-500 hover:text-white' : 'text-slate-600 hover:text-slate-900'}`}>Privacy Policy</a>
            <a href="#about" className={`text-sm transition-colors ${theme === 'dark' ? 'text-slate-500 hover:text-white' : 'text-slate-600 hover:text-slate-900'}`}>Cookies</a>
        </div>

        <p className={`text-sm ${theme === 'dark' ? 'text-slate-500' : 'text-slate-600'}`}>Built with <span className="text-pink-500">❤️</span> by {RESUME_DATA.name}</p>
      </div>
    </footer>
  );
};

export default Footer;
