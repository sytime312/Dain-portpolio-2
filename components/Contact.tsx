
import React from 'react';
import { motion } from 'framer-motion';
import { Mail, MessageSquare, Linkedin } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-32 relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="glass-card rounded-[3rem] p-12 md:p-24 border-cyan-500/20 overflow-hidden relative">
          {/* Animated Background Element */}
          <motion.div 
            animate={{ rotate: 360 }}
            transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
            className="absolute -top-1/2 -right-1/4 w-[800px] h-[800px] border-[1px] border-cyan-500/10 rounded-full"
          />

          <div className="relative z-10 max-w-2xl">
            <h2 className="text-sm font-futuristic text-cyan-400 tracking-[0.3em] mb-6">READY TO SCALE?</h2>
            <h3 className="text-5xl md:text-7xl font-black mb-8 leading-tight">
              당신의 비즈니스에<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">지능을 더하세요.</span>
            </h3>
            <p className="text-xl text-gray-400 mb-12">
              최적화된 AI 도입을 통해 압도적인 생산성을 경험하고 싶다면 지금 바로 연락주세요. 
              Dain이 직접 컨설팅해 드립니다.
            </p>

            <div className="flex flex-wrap gap-6">
              <button className="flex items-center gap-3 px-8 py-4 bg-white text-black font-bold rounded-full hover:bg-cyan-400 transition-colors font-futuristic">
                <Mail size={20} /> SEND EMAIL
              </button>
              <div className="flex gap-4 items-center">
                <a href="#" className="w-14 h-14 rounded-full border border-white/10 flex items-center justify-center text-white hover:text-cyan-400 hover:border-cyan-400 transition-all">
                  <Linkedin size={24} />
                </a>
                <a href="#" className="w-14 h-14 rounded-full border border-white/10 flex items-center justify-center text-white hover:text-cyan-400 hover:border-cyan-400 transition-all">
                  <MessageSquare size={24} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
