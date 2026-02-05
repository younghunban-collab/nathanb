
import React from 'react';

const EducationDetail: React.FC = () => {
  const serviceLevels = [
    {
      level: "Level 1",
      title: "핵심 서비스 (Core MVP)",
      desc: "사업의 존재 이유이자 매출과 직결되는 핵심 가치입니다.",
      items: [
        "실시간 1:1 화상 멘토링 (Zoom/Skype 연동)",
        "AI 음성 분석 기반 수업 핵심 키워드 추출",
        "맞춤형 AI 레벨 테스트 및 수업 예약 시스템",
        "구독형 모델 (Standard, Premium, VVIP)"
      ],
      icon: "🎯"
    },
    {
      level: "Level 2",
      title: "확장 서비스 (Retention)",
      desc: "체류 시간과 락인(Lock-in)을 강화하는 성장 시스템입니다.",
      items: [
        "에고 미러링 아바타 성장 시스템 (Avatar Evolution)",
        "L2E (Learn to Earn) 포인트 샵 & 리워드",
        "또래 멘토링 커뮤니티 채팅 (길드 시스템)",
        "데일리 퀴즈 및 보스 레이드 게임화 요소"
      ],
      icon: "🚀"
    },
    {
      level: "Level 3",
      title: "고도화 서비스 (Moat)",
      desc: "입시와 직접 연결된 강력한 기술적 해자(Moat)를 구축합니다.",
      items: [
        "AI 세부능력 및 특기사항(세특) 자동 작성",
        "학교 생활기록부 반영 탐구 보고서 초안 생성",
        "감정 분석 기반 실시간 피드백 시스템",
        "전국 사용자 통합 학습 로드맵 지도 제공"
      ],
      icon: "🧠"
    },
    {
      level: "Level 4",
      title: "운영/관리 서비스 (Scale)",
      desc: "안정적인 운영과 스케일업을 위한 대시보드를 제공합니다.",
      items: [
        "학부모 ROI 가시화 대시보드 (학습 분석 리포트)",
        "멘토링 품질 통제 및 매칭 관리 시스템",
        "B2B 라이선스 모듈 및 리포트 자동화",
        "오프라인 센터 연계 및 하이퍼 로컬 케어"
      ],
      icon: "📊"
    }
  ];

  return (
    <div className="bg-white text-slate-900 overflow-x-hidden">
      {/* 1. Hero Section - Digital Agency Style (Screenshot Top) */}
      <section className="max-w-7xl mx-auto px-6 py-24 flex flex-col lg:flex-row items-center gap-20">
        <div className="flex-1 space-y-10">
          <div className="flex items-center gap-3">
             <div className="w-10 h-10 bg-slate-900 rounded-lg flex items-center justify-center text-white font-black">A</div>
             <span className="font-black tracking-tighter text-xl">AcademyStrategy</span>
          </div>
          <h1 className="text-6xl lg:text-8xl font-black leading-[0.95] tracking-tighter">
            We Help Great <br />
            <span className="text-blue-600">Students</span> Grow Up
          </h1>
          <p className="text-slate-500 text-xl leading-relaxed max-w-xl border-l-4 border-slate-100 pl-6">
            우리의 교육 서비스는 단순한 지식 전달을 넘어, AI 분석과 게임화 요소를 결합하여 
            학생 스스로 성취감을 느끼고 실질적인 대입 결과를 만들어내도록 설계되었습니다.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <button className="px-12 py-5 bg-slate-900 text-white rounded-2xl font-black uppercase tracking-widest hover:bg-blue-600 transition-all shadow-2xl">
              Consultation Schedule
            </button>
          </div>
          {/* Dot pattern decorative block */}
          <div className="hidden lg:block absolute -left-20 top-40 opacity-20">
            <div className="grid grid-cols-5 gap-4">
              {[...Array(25)].map((_, i) => <div key={i} className="w-2 h-2 bg-slate-400 rounded-full"></div>)}
            </div>
          </div>
        </div>

        {/* Staggered Image Groupings (Agency Reference Section 1) */}
        <div className="flex-1 relative h-[600px] w-full max-w-[500px]">
           <div className="absolute top-0 right-10 w-[240px] h-[240px] rounded-full overflow-hidden shadow-2xl z-20 border-8 border-white">
              <img src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=600&auto=format&fit=crop" className="w-full h-full object-cover" alt="Study Group" />
           </div>
           <div className="absolute top-40 left-0 w-[280px] h-[280px] rounded-[4rem] overflow-hidden shadow-2xl z-10">
              <img src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=600&auto=format&fit=crop" className="w-full h-full object-cover" alt="Mentor Session" />
           </div>
           <div className="absolute bottom-0 right-0 w-[260px] h-[340px] rounded-[5rem] overflow-hidden shadow-2xl z-30 border-8 border-white">
              <img src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=600&auto=format&fit=crop" className="w-full h-full object-cover" alt="AI Tech" />
           </div>
           {/* Floating Dot pattern */}
           <div className="absolute -right-10 top-20">
              <div className="grid grid-cols-4 gap-3">
                {[...Array(16)].map((_, i) => <div key={i} className="w-1.5 h-1.5 bg-slate-300 rounded-full"></div>)}
              </div>
           </div>
        </div>
      </section>

      {/* 2. Philosophy & Service Item Definition (PDF Level Content) */}
      <section className="bg-slate-50 py-32 rounded-[5rem] mx-4 mb-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="space-y-8">
               <span className="text-sm font-black text-blue-600 uppercase tracking-[0.5em]">Our Philosophy</span>
               <h2 className="text-5xl font-black text-slate-900 tracking-tighter leading-tight">
                 서비스 아이템 정의: <br />
                 무엇을 어떤 순서로 만들 것인가
               </h2>
               <p className="text-slate-500 text-lg leading-relaxed">
                 본 교육 구조는 <span className="text-slate-900 font-bold">MVP → 리텐션 → 차별화 → 확장(B2B)</span>으로 
                 자연스럽게 이어지도록 설계되었습니다. 단순한 화상 학원을 넘어 플랫폼 전체의 시너지를 창출합니다.
               </p>
               <div className="flex gap-4">
                  <div className="p-6 bg-white rounded-3xl shadow-sm border border-slate-100 flex-1">
                     <p className="text-xs font-black text-slate-400 uppercase mb-2">Primary Goal</p>
                     <p className="text-slate-900 font-bold">데이터 기반의 고도화된 정체성 확립</p>
                  </div>
                  <div className="p-6 bg-white rounded-3xl shadow-sm border border-slate-100 flex-1">
                     <p className="text-xs font-black text-slate-400 uppercase mb-2">Secondary Goal</p>
                     <p className="text-slate-900 font-bold">글로벌 확장 및 B2B 라이선싱</p>
                  </div>
               </div>
            </div>
            <div className="relative group">
               <div className="rounded-[5rem] overflow-hidden shadow-2xl aspect-video">
                  <img src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1200&auto=format&fit=crop" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" alt="Team Philosophy" />
                  <div className="absolute inset-0 bg-blue-600/10 pointer-events-none"></div>
               </div>
               {/* Overlay Info Card */}
               <div className="absolute -bottom-10 -left-10 bg-slate-900 p-8 rounded-[3rem] text-white shadow-2xl max-w-xs animate-bounce-slow">
                  <p className="text-2xl font-black mb-2 tracking-tighter italic">"Killer Services"</p>
                  <p className="text-xs text-slate-400 leading-relaxed">단순 회화 교육을 넘어 입시 결과물로 증명하는 킬러 서비스 1~4 반영 완료.</p>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Detailed Service Levels (PDF Table Content) */}
      <section className="py-32 max-w-7xl mx-auto px-6">
        <div className="text-center mb-24">
           <h3 className="text-sm font-black text-slate-400 uppercase tracking-[0.4em] mb-6">Service Architecture</h3>
           <h4 className="text-6xl font-black text-slate-900 tracking-tighter">We are Master of <br />Digital Education</h4>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
           {serviceLevels.map((lvl, idx) => (
             <div key={idx} className={`p-16 rounded-[4.5rem] flex flex-col justify-between transition-all duration-500 group border-2 ${idx === 2 ? 'bg-slate-900 text-white border-slate-900' : 'bg-white text-slate-900 border-slate-100 hover:border-blue-600 shadow-xl'}`}>
                <div>
                   <div className="flex justify-between items-start mb-12">
                      <span className={`text-[10px] font-black uppercase tracking-[0.3em] px-4 py-2 rounded-full ${idx === 2 ? 'bg-blue-600 text-white' : 'bg-slate-100 text-slate-500'}`}>{lvl.level}</span>
                      <span className="text-4xl">{lvl.icon}</span>
                   </div>
                   <h5 className="text-3xl font-black mb-6 tracking-tight">{lvl.title}</h5>
                   <p className={`text-sm mb-10 leading-relaxed ${idx === 2 ? 'text-slate-400' : 'text-slate-500'}`}>{lvl.desc}</p>
                   <ul className="space-y-4">
                     {lvl.items.map((item, i) => (
                       <li key={i} className="flex items-center gap-3">
                          <div className={`w-1.5 h-1.5 rounded-full ${idx === 2 ? 'bg-blue-400' : 'bg-blue-600'}`}></div>
                          <span className="text-sm font-bold opacity-80">{item}</span>
                       </li>
                     ))}
                   </ul>
                </div>
                <button className={`mt-16 w-full py-5 rounded-3xl font-black text-xs uppercase tracking-widest transition-all ${idx === 2 ? 'bg-white text-slate-900 hover:bg-blue-400 hover:text-white' : 'bg-slate-900 text-white hover:bg-blue-600'}`}>
                  View Details ↗
                </button>
             </div>
           ))}
        </div>
      </section>

      {/* 4. Feature Highlights - Digital Agency Style (Section 3 & 4) */}
      <section className="py-32 bg-slate-900 text-white rounded-[5rem] mx-4 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
            <div className="space-y-10">
              <h3 className="text-6xl font-black leading-tight tracking-tighter italic">
                Our Core Value & <br />
                <span className="text-blue-500 underline decoration-4 underline-offset-8">Killer Functions</span>
              </h3>
              <div className="space-y-12">
                 <div className="flex gap-8 group">
                    <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center text-3xl group-hover:bg-blue-600 transition-colors">🎮</div>
                    <div className="flex-1">
                       <h6 className="text-2xl font-black mb-3">에고 미러링 아바타 & L2E</h6>
                       <p className="text-slate-400 leading-relaxed">학습 동기를 부여하는 아바타 성장 시스템과 실질적 포인트 보상으로 교육의 압박을 즐거움으로 전환합니다.</p>
                    </div>
                 </div>
                 <div className="flex gap-8 group">
                    <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center text-3xl group-hover:bg-blue-600 transition-colors">📑</div>
                    <div className="flex-1">
                       <h6 className="text-2xl font-black mb-3">AI 세특 빌더 분석</h6>
                       <p className="text-slate-400 leading-relaxed">학교 생활기록부에 즉시 반영 가능한 탐구 보고서 초안을 AI가 자동 생성하여 입시 합격 가능성을 극대화합니다.</p>
                    </div>
                 </div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <div className="aspect-[4/5] bg-white/5 border border-white/10 rounded-[3rem] p-10 flex flex-col justify-end">
                <p className="text-4xl font-black text-blue-500 mb-4">98%</p>
                <p className="font-bold text-sm text-slate-300">Retention Rate via Gamification</p>
              </div>
              <div className="aspect-[4/5] bg-blue-600 rounded-[3rem] p-10 flex flex-col justify-end shadow-2xl shadow-blue-600/20">
                <p className="text-4xl font-black text-white mb-4">120+</p>
                <p className="font-bold text-sm text-white/80">Curricula Developed</p>
              </div>
            </div>
          </div>
        </div>
        {/* Background decorative blob */}
        <div className="absolute top-0 right-0 w-1/2 h-full bg-blue-600/10 blur-[150px] -translate-y-1/2 translate-x-1/2"></div>
      </section>

      {/* 5. Final CTA - "Schedule A Consultation" Style */}
      <section className="max-w-7xl mx-auto px-6 py-32 text-center space-y-12">
         <h3 className="text-sm font-black text-blue-600 uppercase tracking-[0.5em]">Start Your Roadmap</h3>
         <h4 className="text-6xl md:text-8xl font-black text-slate-900 tracking-tighter italic">
           Ready to Transform <br />Your Success?
         </h4>
         <p className="text-slate-500 text-lg max-w-2xl mx-auto leading-relaxed italic">
           "초기 MVP 중심은 1:1 화상 멘토링과 AI 레벨 테스트에 집중하여 빠른 시장 검증을 목표로 합니다. 
           전문적인 상담을 통해 학생의 미래를 설계하세요."
         </p>
         <button className="px-16 py-6 bg-orange-500 text-white rounded-3xl font-black uppercase tracking-widest hover:bg-slate-900 transition-all shadow-2xl shadow-orange-500/20 active:scale-95">
           Schedule A Consultation ↗
         </button>
         
         <div className="pt-20 border-t border-slate-100 flex flex-wrap justify-center gap-20 opacity-30 grayscale">
            <span className="text-2xl font-black italic">AI EDUTECH</span>
            <span className="text-2xl font-black italic">B2B SOLUTIONS</span>
            <span className="text-2xl font-black italic">GAMIFIED LEARNING</span>
            <span className="text-2xl font-black italic">IVY LEAGUE MENTORS</span>
         </div>
      </section>
    </div>
  );
};

export default EducationDetail;
