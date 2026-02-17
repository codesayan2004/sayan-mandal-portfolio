
import React, { useEffect, Suspense } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Footer from './components/Footer';
import CustomCursor from './components/CustomCursor';
import ParticlesBackground from "./components/ParticlesBackground";
import { motion, useScroll, useSpring } from 'framer-motion';

const App: React.FC = () => {
  const { scrollYProgress } = useScroll();
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
    <div className="bg-[#030712] min-h-screen text-slate-200">
      <CustomCursor />
      
      {/* Scroll Progress Indicator */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-indigo-500 origin-left z-[100]"
        style={{ scaleX }}
      />

      <Navbar />

      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Contact />
      </main>

      <Footer />
      
      {/* Subtle Background Glows */}
      <div className="fixed top-[-10%] left-[-10%] w-[50%] h-[50%] bg-indigo-600/5 blur-[150px] pointer-events-none rounded-full"></div>
      <div className="fixed bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-purple-600/5 blur-[150px] pointer-events-none rounded-full"></div>
    </div>
  );
};

export default App;
