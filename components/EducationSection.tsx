
import React from 'react';

const EducationSection: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-6 py-32">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-24 items-center">
        <div className="space-y-10">
          <div className="space-y-4">
            <span className="text-[10px] font-black text-blue-600 tracking-[0.5em] uppercase block">Elite Strategy</span>
            <h2 className="text-5xl md:text-6xl font-black text-slate-900 leading-[1.05] tracking-tighter">
              대한민국 1% 대입 전략,<br />
              <span className="text-blue-600 italic">AI 멘토</span>와 함께 설계하세요.
            </h2>
          </div>
          
          <p className="text-slate-500 text-lg leading-relaxed font-medium">
            AI 멘토링 아카데미는 단순한 화상 수업을 넘어, 아바타 성장 시스템과 
            L2E(Learn to Earn) 보상 모델을 통해 학습의 즐거움과 실질적인 대입 결과물을 동시에 제공합니다.
          </p>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-12">
            {[
              "1:1 맞춤형 화상 멘토링",
              "AI 기반 세특 보고서 자동 생성",
              "게임화된 아바타 성장 시스템",
              "학습 보상 포인트 시스템 (L2E)"
            ].map((text, i) => (
              <div key={i} className="flex items-center gap-4 group">
                <div className="w-6 h-6 bg-blue-50 rounded-full flex items-center justify-center text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-all">
                  <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" /></svg>
                </div>
                <span className="text-sm font-black text-slate-700 uppercase tracking-tight">{text}</span>
              </div>
            ))}
          </div>
          
          <button className="px-10 py-5 bg-slate-900 text-white rounded-2xl font-black text-xs uppercase tracking-widest shadow-2xl hover:bg-blue-600 transition-all active:scale-95">
            상세 교육 과정 보기 ↗
          </button>
        </div>
        
        <div className="relative">
          <div className="grid grid-cols-2 gap-6">
            <div className="aspect-[3/4] rounded-[4rem] bg-slate-100 overflow-hidden shadow-2xl transform -translate-y-8">
               <img src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=600&auto=format&fit=crop" className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700" alt="AI Education" />
            </div>
            <div className="aspect-[3/4] rounded-[4rem] bg-blue-50 overflow-hidden shadow-2xl mt-12">
               <img src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=600&auto=format&fit=crop" className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700" alt="Students" />
            </div>
          </div>
          {/* Decorative Dot Element */}
          <div className="absolute -bottom-10 -right-10 w-32 h-32 opacity-20 hidden lg:block">
            <div className="grid grid-cols-4 gap-4">
              {[...Array(16)].map((_, i) => <div key={i} className="w-1.5 h-1.5 bg-slate-400 rounded-full"></div>)}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EducationSection;
