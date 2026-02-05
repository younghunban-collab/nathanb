
import React from 'react';

const DashboardSection: React.FC = () => {
  return (
    <div className="bg-white text-slate-900 font-sans selection:bg-blue-100 overflow-hidden">
      {/* 1. Hero Summary - Premium & Clear */}
      <section className="relative max-w-7xl mx-auto px-6 pt-32 pb-24 text-center">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[400px] bg-blue-50/50 rounded-full blur-[120px] -z-10"></div>
        
        <div className="space-y-8">
          <span className="inline-block px-5 py-2 bg-blue-50 text-blue-600 text-[10px] font-black uppercase tracking-[0.3em] rounded-full border border-blue-100 animate-fade-in">
            Intelligent Learning Hub
          </span>
          <h1 className="text-6xl md:text-8xl font-black tracking-tighter leading-[0.9] text-slate-900">
            Personalized <br />
            <span className="text-blue-600 italic">AI Evolution.</span>
          </h1>
          <p className="text-slate-500 max-w-2xl mx-auto text-lg md:text-xl leading-relaxed font-medium">
            "학습의 즐거움과 실질적인 대입 결과를 동시에 제공합니다. <br />
            내 아바타의 성장이 곧 내 실력의 성장과 지갑의 혜택으로 이어집니다."
          </p>
          <div className="flex flex-wrap justify-center gap-4 pt-6">
            <button className="px-10 py-5 bg-slate-900 text-white rounded-2xl font-black text-xs uppercase tracking-widest shadow-2xl hover:bg-blue-600 hover:-translate-y-1 transition-all active:scale-95">
              Enter Classroom ↗
            </button>
            <button className="px-10 py-5 bg-white border-2 border-slate-100 text-slate-900 rounded-2xl font-black text-xs uppercase tracking-widest hover:bg-slate-50 transition-all">
              Weekly Report
            </button>
          </div>
        </div>
      </section>

      {/* 2. Stats Section - Clean Grid */}
      <section className="max-w-7xl mx-auto px-6 py-12">
        <div className="bg-slate-900 rounded-[4rem] p-12 md:p-20 text-white flex flex-col lg:flex-row items-center gap-16 shadow-2xl relative overflow-hidden">
          <div className="lg:w-1/2 space-y-6 relative z-10">
            <h2 className="text-4xl md:text-5xl font-black tracking-tighter leading-tight italic">
              Proof of <br />Your Growth.
            </h2>
            <p className="text-slate-400 text-lg leading-relaxed font-medium">
              단순히 시간을 채우는 공부가 아닙니다. AI가 분석한 나의 정서 상태와 
              L2E 경제 시스템을 통해 실질적인 성취를 시각화합니다.
            </p>
          </div>
          
          <div className="lg:w-1/2 w-full grid grid-cols-1 sm:grid-cols-3 gap-10 relative z-10 text-center sm:text-left">
            {[
              { label: "Points Earned", val: "45,800", unit: "MP" },
              { label: "Study Hours", val: "230", unit: "HRS" },
              { label: "Avatar Level", val: "Lv.12", unit: "EXP" },
            ].map((stat, i) => (
              <div key={i} className="space-y-2 border-l-2 border-white/10 pl-6 group">
                <p className="text-4xl font-black tracking-tighter group-hover:text-blue-400 transition-colors">
                  {stat.val} <span className="text-sm font-bold text-blue-500">{stat.unit}</span>
                </p>
                <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest">{stat.label}</p>
              </div>
            ))}
          </div>
          
          {/* Decorative Gradient */}
          <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-br from-blue-600/20 to-transparent pointer-events-none"></div>
        </div>
      </section>

      {/* 3. Core Features - High Legibility Cards */}
      <section className="max-w-7xl mx-auto px-6 py-32">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
          <div className="max-w-xl">
            <h2 className="text-5xl font-black tracking-tighter italic uppercase text-slate-900 mb-6">
              Active <br /><span className="text-blue-600">Roadmap.</span>
            </h2>
            <p className="text-slate-500 text-lg font-medium">당신의 대입 성공을 위한 4가지 핵심 킬러 서비스 현황입니다.</p>
          </div>
          <button className="text-[11px] font-black text-slate-400 uppercase tracking-widest hover:text-blue-600 transition-colors border-b-2 border-slate-100 hover:border-blue-600 pb-1">
            Explore All Features ↗
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { title: "L2E Challenge", desc: "공부하며 현금화 가능한 포인트를 획득하세요.", icon: "💰", color: "blue" },
            { title: "AI Record Builder", desc: "수업 내용을 바탕으로 세특 보고서가 자동 생성됩니다.", icon: "📑", color: "indigo" },
            { title: "Avatar Evolution", desc: "나의 아바타를 유아기에서 성인기로 진화시키세요.", icon: "🧬", color: "purple" },
            { title: "Sentiment Care", desc: "심리 상담 전문가와 AI의 정서 분석 리포트.", icon: "🧠", color: "pink" },
          ].map((item, i) => (
            <div key={i} className="group p-10 bg-white border border-slate-100 rounded-[3rem] hover:shadow-2xl hover:shadow-blue-600/5 hover:border-blue-100 transition-all duration-500 flex flex-col h-full">
              <div className="w-16 h-16 bg-slate-50 rounded-2xl flex items-center justify-center text-3xl mb-10 group-hover:scale-110 transition-transform group-hover:bg-blue-50">
                {item.icon}
              </div>
              <h4 className="text-2xl font-black mb-4 tracking-tighter text-slate-900">{item.title}</h4>
              <p className="text-slate-500 text-sm leading-relaxed font-medium flex-grow mb-10">{item.desc}</p>
              <button className="text-[10px] font-black uppercase tracking-widest text-slate-400 group-hover:text-blue-600 flex items-center gap-3 transition-colors">
                {item.title.split(' ')[0]} Lab <span className="translate-x-0 group-hover:translate-x-2 transition-transform">→</span>
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* 4. Highlight Content - Impactful & Clean */}
      <section className="bg-slate-50 py-32 rounded-[5rem] mx-4 mb-16 px-6">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-24 items-center">
          <div className="lg:w-1/2 space-y-12">
            <h3 className="text-6xl md:text-7xl font-black tracking-tighter leading-[0.9] italic text-slate-900">
              Education <br />
              Meets <br />
              <span className="text-blue-600 underline underline-offset-[12px] decoration-8">Evidence.</span>
            </h3>
            <div className="space-y-6">
              <p className="text-slate-600 text-xl leading-relaxed font-medium">
                "단순 영어 실력은 기본, 대학 합격 증거까지 만들어주는 유일한 플랫폼."
              </p>
              <p className="text-slate-400 text-lg leading-relaxed">
                AI가 수업 중 언급된 주제를 실시간으로 분석하여 학교 생활기록부 기재용 
                탐구 보고서 초안을 자동 생성합니다. 멘토의 전문성과 AI의 속도가 결합됩니다.
              </p>
            </div>
            <button className="px-12 py-6 bg-slate-900 text-white rounded-2xl font-black text-xs uppercase tracking-[0.2em] shadow-2xl hover:bg-blue-600 transition-all active:scale-95">
              Consult with AI Mentor ↗
            </button>
          </div>
          
          <div className="lg:w-1/2 relative group">
            <div className="aspect-[16/10] bg-white rounded-[4rem] overflow-hidden shadow-2xl p-4 border border-slate-100">
              <img 
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1200&auto=format&fit=crop" 
                className="w-full h-full object-cover rounded-[3rem] group-hover:scale-105 transition-transform duration-1000" 
                alt="AI Student Interaction" 
              />
              <div className="absolute inset-0 bg-blue-600/5 group-hover:bg-transparent transition-colors"></div>
            </div>
            
            {/* Floating UI Elements */}
            <div className="absolute -bottom-8 -right-8 bg-white p-8 rounded-[2.5rem] shadow-[0_32px_64px_rgba(0,0,0,0.1)] border border-slate-100 max-w-[280px] animate-bounce-slow">
               <div className="flex items-center gap-4 mb-4">
                  <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center text-white text-xl">📄</div>
                  <div>
                    <p className="text-[10px] font-black text-blue-600 uppercase tracking-widest leading-none mb-1">AI Report</p>
                    <p className="text-xs font-black text-slate-900 leading-none">Status: Generated</p>
                  </div>
               </div>
               <p className="font-bold text-sm leading-tight text-slate-600 italic">'기후 변화' 주제 관련 심화 탐구 보고서 초안이 도착했습니다.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Mentor Feedback - Emotional & Trustworthy */}
      <section className="max-w-7xl mx-auto px-6 py-32">
        <div className="bg-white p-12 lg:p-24 rounded-[5rem] shadow-xl border border-slate-100 flex flex-col md:flex-row gap-20 items-center relative overflow-hidden">
          <div className="w-full md:w-2/5 relative">
            <div className="aspect-[4/5] rounded-[3.5rem] overflow-hidden shadow-2xl relative z-10 group">
              <img 
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=600&auto=format&fit=crop" 
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700" 
                alt="Lead Mentor" 
              />
              <div className="absolute inset-0 bg-blue-600/10 pointer-events-none"></div>
            </div>
            {/* Abstract Shape */}
            <div className="absolute -top-10 -left-10 w-40 h-40 bg-blue-600 rounded-full blur-[80px] opacity-20"></div>
          </div>
          
          <div className="flex-1 space-y-10 relative z-10">
            <div className="space-y-4">
              <span className="text-blue-600 font-black uppercase tracking-[0.4em] text-[10px]">Weekly Mentor Feedback</span>
              <p className="text-3xl lg:text-4xl font-medium leading-[1.3] text-slate-800 italic">
                "이번 주 세션에서 보여준 논리적 사고력은 놀라웠습니다. 
                특히 AI 데이터에 따르면 창의적 문제 해결 능력이 <span className="text-blue-600 font-black">상위 1%</span>로 측정되었습니다."
              </p>
            </div>
            
            <div className="flex items-center justify-between pt-10 border-t border-slate-100">
              <div>
                <h5 className="text-2xl font-black text-slate-900 tracking-tighter">Daudet Afroseth</h5>
                <p className="text-xs font-black text-slate-400 uppercase tracking-widest mt-1">Senior Full-Stack Mentor</p>
              </div>
              <div className="text-right">
                <p className="text-3xl font-black text-blue-600 tracking-tighter">+1,500 <span className="text-sm">MP</span></p>
                <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Bonus Awarded</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <style>{`
        @keyframes bounce-slow {
          0%, 100% { transform: translateY(-5px); }
          50% { transform: translateY(5px); }
        }
        .animate-bounce-slow {
          animation: bounce-slow 4s ease-in-out infinite;
        }
        .animate-fade-in {
          animation: fadeIn 1s ease-out;
        }
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  );
};

export default DashboardSection;
