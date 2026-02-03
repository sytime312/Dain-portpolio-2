
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'py-4 bg-black/60 backdrop-blur-xl border-b border-white/10' : 'py-8'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-cyan-500 rounded-sm rotate-45 flex items-center justify-center">
            <span className="text-black font-black -rotate-45 text-lg">D</span>
          </div>
          <span className="font-futuristic font-bold text-xl tracking-tighter text-white">
            DAIN<span className="text-cyan-400">.AI</span>
          </span>
        </div>

        <div className="hidden md:flex gap-8">
          {['Strengths', 'Services', 'Experience', 'Contact'].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-sm font-futuristic text-gray-400 hover:text-cyan-400 transition-colors tracking-widest"
            >
              {item.toUpperCase()}
            </a>
          ))}
        </div>

        <button className="px-5 py-2 border border-cyan-500/50 text-cyan-400 text-xs font-futuristic hover:bg-cyan-500 hover:text-black transition-all rounded-full tracking-widest">
          WORK WITH ME
        </button>
      </div>
    </motion.nav>
  );
};

export default Navbar;
