
import React from 'react';
import { motion } from 'framer-motion';
import { Lightbulb, Rocket, BarChart3, ShieldCheck } from 'lucide-react';

const strengthData = [
  {
    title: "기술의 일상화",
    desc: "복잡한 AI 기술을 누구나 바로 쓸 수 있는 실무 언어로 변환하는 능력",
    icon: <Lightbulb className="text-cyan-400" size={32} />
  },
  {
    title: "실전형 커리큘럼",
    desc: "이론을 넘어 즉각적인 결과물을 만들어내는 핸즈온(Hands-on) 중심 강의",
    icon: <Rocket className="text-cyan-400" size={32} />
  },
  {
    title: "트렌드 분석력",
    desc: "급변하는 AI 생태계에서 핵심 도구를 선별하고 적용하는 통찰력",
    icon: <BarChart3 className="text-cyan-400" size={32} />
  },
  {
    title: "솔루션 중심 접근",
    desc: "클라이언트의 업무 현장에 즉시 도입 가능한 실용적인 AI 해결책 제시",
    icon: <ShieldCheck className="text-cyan-400" size={32} />
  }
];

const Strengths: React.FC = () => {
  return (
    <section id="strengths" className="py-24 bg-black/40">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center mb-20"
        >
          <h2 className="text-sm font-futuristic text-cyan-400 tracking-[0.3em] mb-4">CORE COMPETENCIES</h2>
          <h3 className="text-4xl md:text-5xl font-bold">왜 <span className="text-cyan-400 font-futuristic italic">DAIN</span>인가?</h3>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {strengthData.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              whileHover={{ y: -10, transition: { duration: 0.2 } }}
              className="glass-card p-8 rounded-2xl border-white/5 relative group overflow-hidden"
            >
              <div className="absolute top-0 right-0 p-4 opacity-10 font-futuristic text-4xl font-black italic">
                0{idx + 1}
              </div>
              <div className="mb-6 p-4 bg-cyan-500/10 rounded-xl inline-block group-hover:bg-cyan-500/20 transition-colors">
                {item.icon}
              </div>
              <h4 className="text-xl font-bold mb-4 text-white group-hover:text-cyan-400 transition-colors">{item.title}</h4>
              <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
              
              <div className="mt-8 h-1 w-0 bg-cyan-500 group-hover:w-full transition-all duration-500" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Strengths;
