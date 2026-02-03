
import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Strengths from './components/Strengths';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Background3D from './components/Background3D';

const App: React.FC = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Artificial loading for the 'futuristic' feel
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative min-h-screen">
      <AnimatePresence>
        {loading && (
          <motion.div
            key="loader"
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black"
            exit={{ opacity: 0, transition: { duration: 0.8 } }}
          >
            <div className="text-center">
              <motion.h1 
                className="text-4xl md:text-6xl font-futuristic text-cyan-400 font-bold mb-4"
                animate={{ opacity: [0.3, 1, 0.3] }}
                transition={{ repeat: Infinity, duration: 1.5 }}
              >
                SYSTEM INITIALIZING
              </motion.h1>
              <div className="w-64 h-1 bg-gray-800 mx-auto overflow-hidden rounded-full">
                <motion.div 
                  className="h-full bg-cyan-500"
                  initial={{ width: 0 }}
                  animate={{ width: "100%" }}
                  transition={{ duration: 1.8, ease: "easeInOut" }}
                />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {!loading && (
        <div className="relative z-10">
          <Background3D />
          <Navbar />
          <main>
            <Hero />
            <Strengths />
            <Services />
            <Experience />
            <Contact />
          </main>
          <footer className="py-10 text-center text-gray-500 border-t border-white/5 bg-black/50 backdrop-blur-md">
            <p className="font-futuristic text-xs tracking-widest">
              © 2024 DAIN AI TRANSFORMATION. ALL RIGHTS RESERVED.
            </p>
          </footer>
        </div>
      )}
    </div>
  );
};

export default App;
