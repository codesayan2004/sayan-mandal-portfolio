import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Footer from './components/Footer';
import CustomCursor from './components/CustomCursor';
import Courses from './components/Courses';
import ParticlesBackground from "./components/ParticlesBackground";
import { motion, useScroll, useSpring } from 'framer-motion';
import { Toaster } from "react-hot-toast";
import { useTheme } from './ThemeContext';

const App: React.FC = () => {
  const { scrollYProgress } = useScroll();
  const { theme } = useTheme();

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  // Enable smooth scrolling
  useEffect(() => {
    document.documentElement.style.scrollBehavior = 'smooth';
    return () => {
      document.documentElement.style.scrollBehavior = 'auto';
    };
  }, []);

  return (
    <>
    <Toaster position="top-right" />
    <div className={`relative min-h-screen ${theme === 'dark' ? 'bg-[#030712] text-slate-200' : 'bg-sky-100 text-slate-900'}`}>

      {/* Custom Cursor */}
      {/* <CustomCursor /> */}

      {/* Animated Particle Background */}
      <ParticlesBackground />

      {/* Scroll Progress Indicator */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-indigo-500 origin-left z-[100]"
        style={{ scaleX }}
      />

      {/* Navbar */}
      <Navbar />

      {/* Main Content */}
      <main className="relative z-10">
        <Hero />
        <About />
        <Skills />
        <Courses />
        <Projects />
        <Experience />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />

      {/* Background Glow Effects */}
      <div className={`fixed top-[-10%] left-[-10%] w-[50%] h-[50%] blur-[150px] pointer-events-none rounded-full ${theme === 'dark' ? 'bg-indigo-600/5' : 'bg-indigo-400/10'}`}></div>
      <div className={`fixed bottom-[-10%] right-[-10%] w-[50%] h-[50%] blur-[150px] pointer-events-none rounded-full ${theme === 'dark' ? 'bg-purple-600/5' : 'bg-purple-400/10'}`}></div>

    </div>
    </>
  );
};

export default App;