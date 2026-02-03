
import React from 'react';
import { motion } from 'framer-motion';
import { Cpu, Zap, Globe } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-futuristic mb-6">
            <Zap size={14} />
            AI TRANSFORMATION SPECIALIST
          </div>
          <h1 className="text-5xl lg:text-8xl font-futuristic font-black leading-none mb-6">
            <span className="text-white">TRANSFORM</span><br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">YOUR REALITY</span>
          </h1>
          <p className="text-xl text-gray-400 mb-10 max-w-xl leading-relaxed">
            인공지능 교육 전문가 <span className="text-white font-bold italic">Dain</span>입니다. 
            복잡한 기술을 실무의 언어로 변환하여 조직의 AI 혁신을 이끕니다.
          </p>
          <div className="flex gap-4">
            <button className="px-8 py-4 bg-cyan-500 text-black font-bold font-futuristic rounded-lg hover:scale-105 transition-transform flex items-center gap-2">
              GET STARTED <Zap size={18} fill="currentColor" />
            </button>
            <button className="px-8 py-4 border border-white/20 text-white font-bold font-futuristic rounded-lg hover:bg-white/5 transition-colors">
              VIEW WORK
            </button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="relative"
        >
          {/* Main 3D visual mockup */}
          <div className="relative z-10 w-full aspect-square max-w-md mx-auto">
             <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 border-[1px] border-cyan-500/30 rounded-full"
             />
             <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                className="absolute inset-4 border-[1px] border-purple-500/20 rounded-full"
             />
             <div className="absolute inset-10 rounded-full bg-gradient-to-tr from-cyan-500/20 to-purple-500/20 backdrop-blur-3xl flex items-center justify-center p-8 overflow-hidden">
                <motion.div
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 4, repeat: Infinity }}
                  className="text-center"
                >
                  <Cpu size={120} className="text-cyan-400 mb-4 mx-auto drop-shadow-[0_0_30px_rgba(34,211,238,0.5)]" />
                  <div className="font-futuristic text-2xl font-bold tracking-widest">DAIN CORE v1.0</div>
                </motion.div>
             </div>
             
             {/* Floating UI Elements */}
             <motion.div
                animate={{ x: [0, 20, 0], y: [0, -20, 0] }}
                transition={{ duration: 5, repeat: Infinity }}
                className="absolute top-0 right-0 glass-card p-4 rounded-xl border-cyan-500/40"
             >
                <div className="flex gap-2 items-center text-cyan-400 text-xs font-futuristic mb-1">
                  <div className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
                  ACTIVE NODE
                </div>
                <div className="text-white text-sm">AI Efficiency: 98.4%</div>
             </motion.div>

             <motion.div
                animate={{ x: [0, -15, 0], y: [0, 25, 0] }}
                transition={{ duration: 7, repeat: Infinity, delay: 1 }}
                className="absolute bottom-10 -left-10 glass-card p-4 rounded-xl border-purple-500/40"
             >
                <Globe size={24} className="text-purple-400 mb-2" />
                <div className="text-white text-xs font-futuristic">GLOBAL DEPLOYMENT</div>
             </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
