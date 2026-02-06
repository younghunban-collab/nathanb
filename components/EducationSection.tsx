
import React from 'react';
import { Language } from '../types';

interface EducationSectionProps {
  lang: Language;
  onNavigate: (id: string) => void;
}

const EducationSection: React.FC<EducationSectionProps> = ({ lang, onNavigate }) => {
  return (
    <div className="max-w-7xl mx-auto px-4 md:px-6 py-20 md:py-32">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
        <div className="space-y-8 md:space-y-10 text-center lg:text-left">
          <div className="space-y-3 md:space-y-4">
            <span className="text-[9px] md:text-[10px] font-black text-blue-600 tracking-[0.4em] uppercase block">Future-Ready Learning</span>
            <h2 className="text-3xl sm:text-4xl md:text-6xl font-black text-slate-900 leading-[1.1] tracking-tighter">
              {lang === 'ko' ? (
                <>대한민국 1% 인재 전략,<br /><span className="text-blue-600 italic">AI MENTORING</span></>
              ) : (
                <>Top 1% Strategy,<br /><span className="text-blue-600 italic">AI MENTORING</span></>
              )}
            </h2>
          </div>
          
          <p className="text-slate-500 text-base md:text-lg leading-relaxed font-medium max-w-xl mx-auto lg:mx-0">
            {lang === 'ko' 
              ? '단순한 지식 전달을 넘어 멘토와의 깊은 정서적 교감을 통해 학습의 즐거움을 깨닫고, 유학을 포함한 구체적인 진로 로드맵을 설계하여 학생의 미래를 통합적으로 빚어가는 전인 교육을 지향합니다.' 
              : 'We pursue a holistic education that goes beyond mere knowledge transfer; through deep emotional resonance with mentors, we help students discover the joy of learning and integrally shape their future by designing specific career roadmaps, including studying abroad.'
          </p>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6 text-left max-w-2xl mx-auto lg:mx-0">
            {(lang === 'ko' ? [
              "1:1 맞춤형 화상 멘토링",
              "AI 기반 세특 보고서 생성",
              "아바타 성장 시스템",
              "학습 보상 포인트 시스템"
            ] : [
              "1:1 Custom Video Mentoring",
              "AI-Based Record Generation",
              "Avatar Growth System",
              "Study Reward Point System"
            ]).map((text, i) => (
              <div key={i} className="flex items-center gap-3 p-4 bg-slate-50 rounded-2xl border border-slate-100 group">
                <div className="w-8 h-8 md:w-10 md:h-10 bg-white rounded-xl flex items-center justify-center text-blue-600 shadow-sm transition-all group-hover:bg-blue-600 group-hover:text-white">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" /></svg>
                </div>
                <span className="text-[11px] md:text-xs font-black text-slate-700 uppercase">{text}</span>
              </div>
            ))}
          </div>
          
          <button 
            onClick={() => onNavigate('education')}
            className="w-full sm:w-auto px-10 py-5 bg-slate-900 text-white rounded-[1.5rem] font-black text-[10px] md:text-xs uppercase tracking-widest shadow-xl hover:bg-blue-600 transition-all"
          >
            {lang === 'ko' ? '교육 과정 상세보기 ↗' : 'View Education Detail ↗'}
          </button>
        </div>
        
        <div className="relative mt-12 lg:mt-0">
          <div className="grid grid-cols-2 gap-4 md:gap-6">
            <div className="aspect-[3/4] rounded-[2.5rem] md:rounded-[4rem] bg-slate-100 overflow-hidden shadow-2xl transform lg:-translate-y-8">
               <img src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=600&auto=format&fit=crop" className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700" alt="AI Education" />
            </div>
            <div className="aspect-[3/4] rounded-[2.5rem] md:rounded-[4rem] bg-blue-50 overflow-hidden shadow-2xl mt-8 lg:mt-12">
               <img src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=600&auto=format&fit=crop" className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700" alt="Students" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EducationSection;
