
import React from 'react';
import { motion } from 'framer-motion';
import { Layers, Workflow, BookOpen, Settings } from 'lucide-react';

const services = [
  {
    title: "생성형 AI 실무 워크숍",
    desc: "프롬프트 엔지니어링 및 최신 AI 툴 활용 능력을 극대화하여 실제 결과물을 만들어내는 핸즈온 교육입니다.",
    icon: <Layers size={32} />
  },
  {
    title: "AI 기반 업무 자동화 컨설팅",
    desc: "노코드 툴과 AI를 결합하여 조직의 워크플로우를 분석하고, 비용은 줄이고 효율은 높이는 스마트 워크플레이스를 구축합니다.",
    icon: <Workflow size={32} />
  },
  {
    title: "AI 리터러시 강연",
    desc: "비전공자와 일반인도 쉽게 이해할 수 있도록 AI 기술의 본질과 미래 변화상을 쉽고 재미있게 전달합니다.",
    icon: <BookOpen size={32} />
  },
  {
    title: "기업 맞춤형 AI 가이드라인",
    desc: "조직 내에서 안전하고 윤리적이면서도 생산성을 극대화할 수 있는 AI 도입 및 활용 전략 가이드라인을 수립합니다.",
    icon: <Settings size={32} />
  }
];

const Services: React.FC = () => {
  return (
    <section id="services" className="py-32 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
          >
            <h2 className="text-sm font-futuristic text-purple-400 tracking-[0.3em] mb-4">OUR EXPERTISE</h2>
            <h3 className="text-4xl md:text-6xl font-black">AI SOLUTIONS</h3>
          </motion.div>
          <motion.p 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="text-gray-400 max-w-md md:text-right"
          >
            단순한 이론을 넘어 현업에 즉시 적용 가능한 실질적인 변화를 제안합니다.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: idx * 0.1 }}
              className="group glass-card p-10 rounded-3xl border-white/5 hover:border-cyan-500/30 transition-all flex flex-col h-full"
            >
              <div className="text-cyan-400 mb-8 transition-transform group-hover:scale-110 group-hover:rotate-3 duration-300">
                {service.icon}
              </div>
              <h4 className="text-2xl font-bold mb-4 font-futuristic uppercase tracking-tighter">
                {service.title}
              </h4>
              <p className="text-gray-400 leading-relaxed text-lg flex-grow">
                {service.desc}
              </p>
              <div className="mt-8 flex items-center gap-2 text-cyan-400 font-futuristic text-sm cursor-pointer hover:gap-4 transition-all">
                LEARN MORE <span className="text-xl">→</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
