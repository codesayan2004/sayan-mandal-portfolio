import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Download, ChevronDown } from "lucide-react";
import { RESUME_DATA } from "../constants";
import Background3D from "./Background3D";


const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 px-6 overflow-hidden">
      <Background3D />

      <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center z-10">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="inline-block px-4 py-1.5 mb-6 rounded-full glass text-xs font-semibold tracking-widest text-indigo-400 uppercase"
          >
            Available for Internships 2026
          </motion.span>

          <h1 className="text-5xl lg:text-7xl font-extrabold mb-6 leading-tight">
            I'm{" "}
            <span className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              {RESUME_DATA.name}
            </span>
          </h1>

          <p className="text-xl text-slate-400 mb-8 max-w-lg leading-relaxed font-light">
            {RESUME_DATA.tagline}
          </p>

          <div className="flex flex-wrap gap-4">
            <motion.a
              href="#projects"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 rounded-full bg-indigo-600 hover:bg-indigo-700 text-white font-medium flex items-center gap-2 shadow-lg shadow-indigo-500/20 transition-all"
            >
              View My Work <ArrowRight size={18} />
            </motion.a>

            <motion.a
              href="/Resume.pdf" // path to your file (public folder)
              download // forces download
              target="_blank" // optional
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 rounded-full glass border border-white/10 text-white font-medium flex items-center gap-2 hover:bg-white/5 transition-all"
            >
              Resume <Download size={18} />
            </motion.a>
          </div>
        </motion.div>

        {/* Profile Photo Section */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="relative flex justify-center items-center"
        >
          <div className="relative w-72 h-72 md:w-96 md:h-96">
            {/* Animated Glow Rings */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="absolute inset-0 rounded-full border-2 border-dashed border-indigo-500/30 scale-110"
            />
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
              className="absolute inset-0 rounded-full border border-purple-500/20 scale-125"
            />

            {/* Main Image Container */}
            <motion.div
              animate={{ y: [0, -15, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="relative w-full h-full rounded-full overflow-hidden border-4 border-white/10 glass p-2 shadow-2xl shadow-indigo-500/10"
            >
              <div className="w-full h-full rounded-full overflow-hidden bg-slate-800">
                <img
                  src={RESUME_DATA.profileImageUrl}
                  alt={RESUME_DATA.name}
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                />
              </div>
            </motion.div>

            {/* Subtle floating badge */}
            <motion.div
              animate={{ y: [0, 10, 0], x: [0, 5, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -bottom-4 -right-4 glass px-4 py-2 rounded-xl border border-white/10 shadow-xl"
            >
              <span className="text-xs font-bold text-indigo-400">
                IIT Guwahati
              </span>
            </motion.div>
          </div>
        </motion.div>
      </div>

      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-slate-500"
      >
        <ChevronDown />
      </motion.div>
    </section>
  );
};

export default Hero;
