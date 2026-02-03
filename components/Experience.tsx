
import React from 'react';
import { motion } from 'framer-motion';

const expData = [
  {
    role: "생성형 AI 실무 교육 전문가",
    desc: "다양한 기업 및 공공기관 대상 제미나이, 챗GPT 등 생성형 AI 도구 활용 실무 강의 수행"
  },
  {
    role: "AI 도입 전략 수석 컨설턴트",
    desc: "조직 내 업무 효율 극대화를 위한 AI 워크플로우 설계 및 자동화 프로세스 구축"
  },
  {
    role: "AI 커뮤니티 및 콘텐츠 디렉터",
    desc: "최신 AI 기술 동향 분석 및 실전 적용 사례 전파를 위한 전문 콘텐츠 기획 및 커뮤니티 리딩"
  }
];

const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-24 bg-gradient-to-b from-transparent to-black/80">
      <div className="max-w-4xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center mb-20"
        >
          <h2 className="text-sm font-futuristic text-cyan-400 tracking-[0.3em] mb-4">PROFESSIONAL JOURNEY</h2>
          <h3 className="text-4xl font-bold">인공지능과 함께한 시간</h3>
        </motion.div>

        <div className="space-y-12">
          {expData.map((exp, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: idx % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="relative pl-12 border-l border-cyan-500/30"
            >
              <div className="absolute left-0 top-0 w-8 h-8 -translate-x-1/2 bg-black border-2 border-cyan-500 rounded-full flex items-center justify-center">
                <div className="w-2 h-2 bg-cyan-500 rounded-full animate-pulse" />
              </div>
              <div className="glass-card p-8 rounded-2xl hover:bg-white/5 transition-colors">
                <h4 className="text-2xl font-bold text-white mb-3">{exp.role}</h4>
                <p className="text-gray-400 leading-relaxed text-lg italic">{exp.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
