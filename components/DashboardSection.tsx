
import React from 'react';
import { Language } from '../types';

interface DashboardSectionProps {
  lang: Language;
  onNavigate: (id: string) => void;
}

const DashboardSection: React.FC<DashboardSectionProps> = ({ lang, onNavigate }) => {
  const showWeeklyReport = () => {
    const reportMsg = lang === 'ko' 
      ? "주간 학습 리포트 요약\n- 출석률: 98%\n- 획득 포인트: 1,200 MP\n- AI 추천 과제: 기후 위기 보고서 작성"
      : "Weekly Learning Report Summary\n- Attendance: 98%\n- Points Earned: 1,200 MP\n- AI Task: Climate Crisis Report";
    alert(reportMsg);
  };

  return (
    <div className="bg-white text-slate-900 font-sans selection:bg-blue-100 overflow-hidden">
      {/* 1. Hero Summary */}
      <section className="relative max-w-7xl mx-auto px-6 pt-20 md:pt-32 pb-16 md:pb-24 text-center">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-[1000px] h-[300px] md:h-[400px] bg-blue-50/50 rounded-full blur-[120px] -z-10"></div>
        
        <div className="space-y-6 md:space-y-8">
          <span className="inline-block px-4 py-1.5 md:px-5 md:py-2 bg-blue-50 text-blue-600 text-[9px] md:text-[10px] font-black uppercase tracking-[0.3em] rounded-full border border-blue-100">
            Intelligent Learning Hub
          </span>
          <h1 className="text-4xl sm:text-6xl md:text-8xl font-black tracking-tighter leading-[1.1] md:leading-[0.9] text-slate-900">
            Personalized <br />
            <span className="text-blue-600 italic">AI Evolution.</span>
          </h1>
          <p className="text-slate-500 max-w-2xl mx-auto text-base md:text-xl leading-relaxed font-medium">
            {lang === 'ko' 
              ? <>"학습의 즐거움과 실질적인 대입 결과를 동시에 제공합니다. <br className="hidden md:block" /> 내 아바타의 성장이 곧 실력의 성장으로 이어집니다."</>
              : <>"Providing learning joy and admission results simultaneously. <br className="hidden md:block" /> My avatar's growth leads to my skill growth."</>}
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 pt-6">
            <button 
              onClick={() => onNavigate('classroom')}
              className="px-8 md:px-10 py-4 md:py-5 bg-slate-900 text-white rounded-2xl font-black text-xs uppercase tracking-widest shadow-2xl hover:bg-blue-600 transition-all active:scale-95"
            >
              {lang === 'ko' ? '내 강의실 입장 ↗' : 'Enter Classroom ↗'}
            </button>
            <button 
              onClick={showWeeklyReport}
              className="px-8 md:px-10 py-4 md:py-5 bg-white border-2 border-slate-100 text-slate-900 rounded-2xl font-black text-xs uppercase tracking-widest hover:bg-slate-50 transition-all"
            >
              {lang === 'ko' ? '주간 학습 리포트' : 'Weekly Report'}
            </button>
          </div>
        </div>
      </section>

      {/* 2. Stats Section */}
      <section className="max-w-7xl mx-auto px-4 md:px-6 py-8 md:py-12">
        <div className="bg-slate-900 rounded-[2.5rem] md:rounded-[4rem] p-8 md:p-20 text-white flex flex-col lg:flex-row items-center gap-10 md:gap-16 shadow-2xl relative overflow-hidden">
          <div className="lg:w-1/2 space-y-4 md:space-y-6 relative z-10 text-center lg:text-left">
            <h2 className="text-3xl md:text-5xl font-black tracking-tighter leading-tight italic">
              Proof of <br className="hidden md:block" />Your Growth.
            </h2>
            <p className="text-slate-400 text-base md:text-lg leading-relaxed font-medium">
              {lang === 'ko' 
                ? '단순히 시간을 채우는 공부가 아닙니다. AI가 분석한 나의 정서 상태와 성취를 시각화합니다.' 
                : 'Not just passing time. Visualizes my emotional state and achievements analyzed by AI.'}
            </p>
          </div>
          
          <div className="lg:w-1/2 w-full grid grid-cols-1 sm:grid-cols-3 gap-6 md:gap-10 relative z-10 text-center">
            {[
              { label: lang === 'ko' ? "누적 포인트" : "Points Earned", val: "45.8k", unit: "MP", id: 'pointshop' },
              { label: lang === 'ko' ? "학습 시간" : "Study Hours", val: "230", unit: "HRS", id: 'classroom' },
              { label: lang === 'ko' ? "아바타 레벨" : "Avatar Level", val: "Lv.12", unit: "EXP", id: 'classroom' },
            ].map((stat, i) => (
              <div 
                key={i} 
                onClick={() => onNavigate(stat.id)}
                className="space-y-1 sm:space-y-2 border-b-2 sm:border-b-0 sm:border-l-2 border-white/10 pb-4 sm:pb-0 sm:pl-6 cursor-pointer hover:bg-white/5 transition-colors rounded-xl p-4"
              >
                <p className="text-3xl md:text-4xl font-black tracking-tighter">
                  {stat.val} <span className="text-xs font-bold text-blue-500">{stat.unit}</span>
                </p>
                <p className="text-[9px] md:text-[10px] font-black text-slate-500 uppercase tracking-widest">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Features Grid */}
      <section className="max-w-7xl mx-auto px-6 py-16 md:py-32">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 md:mb-20 gap-6">
          <div className="max-w-xl">
            <h2 className="text-3xl md:text-5xl font-black tracking-tighter italic uppercase text-slate-900 mb-4 md:mb-6">
              Active <br className="hidden md:block" /><span className="text-blue-600">Roadmap.</span>
            </h2>
            <p className="text-slate-500 text-base md:text-lg font-medium">
              {lang === 'ko' ? '당신의 성공을 위한 핵심 서비스 현황입니다.' : 'Core service status for your success.'}
            </p>
          </div>
          <button 
            onClick={() => onNavigate('education')}
            className="text-[10px] md:text-[11px] font-black text-slate-400 uppercase tracking-widest hover:text-blue-600 transition-colors border-b-2 border-slate-100 pb-1"
          >
            {lang === 'ko' ? '전체 기능 둘러보기 ↗' : 'Explore All Features ↗'}
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {[
            { title: "L2E Challenge", desc: lang === 'ko' ? "공부하며 포인트를 획득하세요." : "Earn points while studying.", icon: "💰", id: 'pointshop' },
            { title: "AI Builder", desc: lang === 'ko' ? "수업 기반 보고서 자동 생성." : "Auto-generate reports based on class.", icon: "📑", id: 'education' },
            { title: "Evolution", desc: lang === 'ko' ? "나의 아바타를 진화시키세요." : "Evolve your avatar.", icon: "🧬", id: 'classroom' },
            { title: "Care", desc: lang === 'ko' ? "정서 분석 리포트를 확인하세요." : "Check emotional analysis reports.", icon: "🧠", id: 'support' },
          ].map((item, i) => (
            <div 
              key={i} 
              onClick={() => onNavigate(item.id)}
              className="group p-8 md:p-10 bg-white border border-slate-100 rounded-[2rem] md:rounded-[3rem] hover:shadow-xl transition-all flex flex-col cursor-pointer"
            >
              <div className="w-12 h-12 md:w-16 md:h-16 bg-slate-50 rounded-xl md:rounded-2xl flex items-center justify-center text-2xl md:text-3xl mb-6 md:mb-10 group-hover:bg-blue-50 transition-colors">
                {item.icon}
              </div>
              <h4 className="text-xl md:text-2xl font-black mb-2 md:mb-4 tracking-tighter text-slate-900">{item.title}</h4>
              <p className="text-slate-500 text-sm leading-relaxed mb-6 md:mb-10">{item.desc}</p>
              <button className="mt-auto text-[9px] md:text-[10px] font-black uppercase tracking-widest text-slate-400 group-hover:text-blue-600 transition-colors">
                {lang === 'ko' ? '더 알아보기 →' : 'Learn More →'}
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* 4. Highlight Content */}
      <section className="bg-slate-50 py-16 md:py-32 rounded-[3rem] md:rounded-[5rem] mx-2 md:mx-4 mb-16 px-6">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-12 md:gap-24 items-center">
          <div className="lg:w-1/2 space-y-8 md:space-y-12 text-center lg:text-left">
            <h3 className="text-4xl md:text-7xl font-black tracking-tighter leading-[1.1] italic text-slate-900">
              Education <br className="hidden md:block" />
              Meets <br className="hidden md:block" />
              <span className="text-blue-600 underline underline-offset-[8px] md:underline-offset-[12px] decoration-4 md:decoration-8">Evidence.</span>
            </h3>
            <p className="text-slate-600 text-lg md:text-xl leading-relaxed font-medium">
              {lang === 'ko' ? 'AI가 수업 주제를 실시간 분석하여 탐구 보고서 초안을 자동 생성합니다.' : 'AI analyzes class topics in real-time to auto-generate research report drafts.'}
            </p>
            <button 
              onClick={() => onNavigate('chatbot')}
              className="px-10 md:px-12 py-5 md:py-6 bg-slate-900 text-white rounded-2xl font-black text-xs uppercase tracking-[0.2em] shadow-2xl hover:bg-blue-600 transition-all"
            >
              {lang === 'ko' ? 'AI와 상담하기 ↗' : 'Consult with AI ↗'}
            </button>
          </div>
          
          <div className="lg:w-1/2 w-full relative">
            <div className="aspect-[16/10] bg-white rounded-[2rem] md:rounded-[4rem] overflow-hidden shadow-2xl p-2 md:p-4 border border-slate-100">
              <img 
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1200&auto=format&fit=crop" 
                className="w-full h-full object-cover rounded-[1.5rem] md:rounded-[3rem]" 
                alt="AI Student Interaction" 
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default DashboardSection;
