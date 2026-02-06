
import React from 'react';
import { Language } from '../types';

interface EducationDetailProps {
  lang: Language;
  onNavigate: (id: string) => void;
}

const EducationDetail: React.FC<EducationDetailProps> = ({ lang, onNavigate }) => {
  const t = {
    ko: {
      heroTitle: "Your Digital Portal to Excellence",
      heroDesc: "조이마스터는 고도화된 AI 기술과 명문대 멘토진을 결합하여, 단순한 교육을 넘어 학생의 잠재력을 폭발시키는 디지털 학습 생태계를 구축합니다.",
      benefitsTitle: "Benefits of AI Mentoring Services",
      roadmapTitle: "Evolution of Learning: Level 1 to 4",
      techStackTitle: "Built for Performance: Technical Core",
      ctaTitle: "Are You Ready to Excel?",
      ctaDesc: "지금 바로 AI 레벨 테스트를 통해 당신의 위치를 진단하고 최적의 멘토를 추천받으세요."
    },
    en: {
      heroTitle: "Your Digital Portal to Excellence",
      heroDesc: "JoyMaster combines advanced AI technology with prestigious mentors to build a digital learning ecosystem that explodes student potential beyond simple education.",
      benefitsTitle: "Benefits of AI Mentoring Services",
      roadmapTitle: "Evolution of Learning: Level 1 to 4",
      techStackTitle: "Built for Performance: Technical Core",
      ctaTitle: "Are You Ready to Excel?",
      ctaDesc: "Take the AI level test now to diagnose your position and get recommended the best mentor."
    }
  }[lang];

  const benefits = [
    { title: "1:1 Video Mentoring", icon: "🎓", desc: lang === 'ko' ? "실시간 화상 솔루션 기반 밀착 교육" : "Close education based on real-time video solutions" },
    { title: "AI Class Summary", icon: "📝", desc: lang === 'ko' ? "AI 음성 분석을 통한 수업 핵심 요약" : "Key class summaries through AI voice analysis" },
    { title: "AI Level Test", icon: "📊", desc: lang === 'ko' ? "정밀한 진단으로 개인화된 학습 로드맵" : "Personalized learning roadmap with precise diagnosis" },
    { title: "Psychological Care", icon: "🧠", desc: lang === 'ko' ? "정서/심리 진학 상담 및 전용 테스트" : "Emotional/psychological counseling and tests" }
  ];

  const levels = [
    {
      level: "Level 1: Core",
      title: lang === 'ko' ? "핵심 서비스 (MVP)" : "Core Service (MVP)",
      desc: lang === 'ko' ? "사업의 존재 이유이자 매출과 직결되는 핵심 화상 교육 솔루션입니다." : "Core video education solution directly linked to revenue.",
      items: ["1:1 화상 멘토링", "멘토 매칭 & 예약", "AI 수업 요약", "AI 레벨 테스트"]
    },
    {
      level: "Level 2: Retention",
      title: lang === 'ko' ? "확장 서비스" : "Expansion Service",
      desc: lang === 'ko' ? "체류 시간과 락인 효과를 강화하는 게이미피케이션 요소입니다." : "Gamification elements to strengthen retention and lock-in.",
      items: ["에고 미러링 아바타 시스템", "L2E 포인트 샵", "또래 멘토링 채팅"]
    },
    {
      level: "Level 3: Moat",
      title: lang === 'ko' ? "고도화 서비스" : "Advanced Service",
      desc: lang === 'ko' ? "차별화된 기술적 해자를 구축하는 킬러 기능입니다." : "Killer features that build a differentiated technical moat.",
      items: ["AI 실시간 피드백", "세부능력 특기사항 분석", "전국 사용자 로드맵"]
    },
    {
      level: "Level 4: Operation",
      title: lang === 'ko' ? "운영/관리 서비스" : "Operational Service",
      desc: lang === 'ko' ? "안정적인 스케일업과 품질 통제를 위한 관리 도구입니다." : "Management tools for stable scale-up and quality control.",
      items: ["학부모 대시보드 (ROI 가시화)", "멘토 관리 시스템", "리포트 자동화"]
    }
  ];

  return (
    <div className="bg-white font-sans text-slate-900 selection:bg-blue-100">
      
      {/* 1. Hero Section (LMSZONE Inspired) */}
      <section className="max-w-7xl mx-auto px-6 pt-20 pb-32 flex flex-col lg:flex-row items-center gap-16">
        <div className="lg:w-1/2 space-y-8 animate-in slide-in-from-left duration-1000">
          <div className="inline-block px-4 py-1.5 bg-orange-100 text-orange-600 rounded-full text-[10px] font-black uppercase tracking-widest">
            Grow Your Future With Us
          </div>
          <h1 className="text-5xl md:text-7xl font-black tracking-tighter leading-tight text-slate-900">
            {t.heroTitle.split(' ').map((word, i) => (
              <span key={i} className={i >= 3 ? "text-blue-600" : ""}>{word} </span>
            ))}
          </h1>
          <p className="text-slate-500 text-lg leading-relaxed max-w-xl">
            {t.heroDesc}
          </p>
          <div className="flex gap-4">
            <button onClick={() => onNavigate('classroom')} className="px-8 py-4 bg-blue-600 text-white rounded-xl font-black text-sm shadow-xl shadow-blue-600/20 hover:scale-105 active:scale-95 transition-all">
              Ready Start →
            </button>
            <button className="px-8 py-4 bg-white border border-slate-200 text-slate-900 rounded-xl font-black text-sm hover:bg-slate-50 transition-all flex items-center gap-2">
              <span className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center">▶</span> Watch Video
            </button>
          </div>
        </div>

        <div className="lg:w-1/2 relative flex justify-center">
          <div className="relative w-full max-w-[500px] aspect-square">
            {/* Circular Avatar Grid Pattern */}
            <div className="absolute top-0 right-0 w-32 h-32 rounded-full overflow-hidden border-4 border-white shadow-xl z-20"><img src="https://images.unsplash.com/photo-1542909168-82c3e7fdca5c?q=80&w=200&auto=format&fit=crop" alt="" /></div>
            <div className="absolute top-1/4 left-0 w-24 h-24 rounded-full overflow-hidden border-4 border-white shadow-xl z-10"><img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop" alt="" /></div>
            <div className="absolute bottom-1/4 right-0 w-28 h-28 rounded-full overflow-hidden border-4 border-white shadow-xl z-10"><img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200&auto=format&fit=crop" alt="" /></div>
            <div className="absolute bottom-0 left-1/4 w-36 h-36 rounded-full overflow-hidden border-4 border-white shadow-2xl z-20"><img src="https://images.unsplash.com/photo-1544168190-79c17527004f?q=80&w=400&auto=format&fit=crop" alt="" /></div>
            
            {/* Main Hero Circle */}
            <div className="absolute inset-0 m-auto w-[85%] h-[85%] bg-blue-50 rounded-full flex items-center justify-center p-8 border-4 border-white shadow-inner">
               <div className="w-full h-full rounded-full bg-blue-100 flex items-center justify-center overflow-hidden">
                  <img src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=800&auto=format&fit=crop" className="w-full h-full object-cover" alt="" />
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Benefits Grid (MVP Core) */}
      <section className="bg-slate-50/50 py-32">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20 space-y-4">
             <span className="text-orange-500 font-black uppercase tracking-widest text-[10px]">Why Choose Us</span>
             <h2 className="text-4xl md:text-5xl font-black tracking-tighter text-slate-900 uppercase italic">
               {t.benefitsTitle}
             </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((b, i) => (
              <div key={i} className="bg-white p-10 rounded-[2.5rem] shadow-sm hover:shadow-xl transition-all border border-slate-100 text-center space-y-6">
                <div className="w-16 h-16 bg-blue-50 rounded-2xl mx-auto flex items-center justify-center text-3xl shadow-inner">{b.icon}</div>
                <h4 className="text-xl font-black text-slate-900">{b.title}</h4>
                <p className="text-sm text-slate-500 leading-relaxed font-medium">{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Service Evolution Roadmap (Level 1-4) */}
      <section className="py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="mb-20 text-center lg:text-left">
            <span className="text-blue-600 font-black uppercase tracking-[0.4em] text-[10px] mb-4 block">Service Architecture</span>
            <h2 className="text-4xl md:text-6xl font-black tracking-tighter uppercase italic">{t.roadmapTitle}</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
            {/* Visual connector line */}
            <div className="absolute top-1/2 left-0 w-full h-0.5 bg-slate-100 -z-10 hidden lg:block"></div>
            
            {levels.map((l, i) => (
              <div key={i} className="bg-white p-10 rounded-[3rem] border-2 border-slate-100 hover:border-blue-600 transition-all group flex flex-col h-full shadow-sm hover:shadow-2xl">
                 <div className="text-blue-600 font-black text-xs mb-4 uppercase tracking-widest">{l.level}</div>
                 <h4 className="text-2xl font-black text-slate-900 mb-4 tracking-tight leading-none italic">{l.title}</h4>
                 <p className="text-slate-500 text-sm leading-relaxed mb-8 flex-grow">{l.desc}</p>
                 <ul className="space-y-3 pt-6 border-t border-slate-50">
                    {l.items.map((item, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-[11px] font-black text-slate-700 uppercase">
                        <span className="w-1.5 h-1.5 bg-blue-600 rounded-full"></span>
                        {item}
                      </li>
                    ))}
                 </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Technical Core (PDF Page 11 Content) */}
      <section className="bg-slate-900 py-32 rounded-t-[5rem] overflow-hidden relative text-white">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
            <div className="space-y-10">
              <h2 className="text-5xl md:text-7xl font-black tracking-tighter uppercase italic leading-[0.9]">
                {t.techStackTitle.split(':').map((part, i) => (
                  <span key={i} className={i === 1 ? "text-blue-500 block" : "block"}>{part}</span>
                ))}
              </h2>
              <p className="text-slate-400 text-lg leading-relaxed italic max-w-xl">
                {lang === 'ko' ? "최신 WebRTC 기술과 대규모 AI 모델을 기반으로 안정적인 실시간 소통과 정교한 학습 분석을 제공합니다." : "Provides stable real-time communication and sophisticated learning analysis based on latest WebRTC and large-scale AI models."}
              </p>
              
              <div className="grid grid-cols-2 gap-8">
                 <div className="space-y-3">
                   <h5 className="text-blue-400 font-black text-[10px] uppercase tracking-widest">Frontend</h5>
                   <p className="text-sm font-bold">React (Web) <br /> React Native (Mobile)</p>
                 </div>
                 <div className="space-y-3">
                   <h5 className="text-blue-400 font-black text-[10px] uppercase tracking-widest">Backend</h5>
                   <p className="text-sm font-bold">Node.js + Express <br /> Python Django</p>
                 </div>
                 <div className="space-y-3">
                   <h5 className="text-blue-400 font-black text-[10px] uppercase tracking-widest">AI Engine</h5>
                   <p className="text-sm font-bold">TensorFlow / PyTorch <br /> OpenAI GPT API</p>
                 </div>
                 <div className="space-y-3">
                   <h5 className="text-blue-400 font-black text-[10px] uppercase tracking-widest">Communication</h5>
                   <p className="text-sm font-bold">WebRTC (Agora/Twilio) <br /> Socket.io (Real-time)</p>
                 </div>
              </div>
            </div>

            <div className="bg-white/5 backdrop-blur-3xl rounded-[4rem] p-12 border border-white/10 shadow-2xl relative">
              <div className="font-mono text-xs text-blue-300 space-y-4 leading-relaxed">
                 <p className="opacity-40">/* System Architecture v1.0 */</p>
                 <p className="text-white">const <span className="text-blue-400">MentoringAcademy</span> = &#123;</p>
                 <p className="pl-6">platform: <span className="text-orange-300">"Omni-channel Support"</span>,</p>
                 <p className="pl-6">video: <span className="text-orange-300">"Low Latency WebRTC"</span>,</p>
                 <p className="pl-6">ai: [ <span className="text-orange-300">"LevelTest"</span>, <span className="text-orange-300">"SummaryEngine"</span>, <span className="text-orange-300">"Builder"</span> ],</p>
                 <p className="pl-6">database: <span className="text-orange-300">"PostgreSQL & Redis"</span>,</p>
                 <p className="pl-6">security: <span className="text-orange-300">"OAuth 2.0 / JWT"</span></p>
                 <p className="text-white">&#125;;</p>
                 <div className="pt-8 text-blue-500 font-black uppercase tracking-[0.3em]">
                    Build Success with AI
                 </div>
              </div>
              
              {/* Floating Badge */}
              <div className="absolute -bottom-10 -left-10 bg-blue-600 p-8 rounded-[3rem] shadow-2xl animate-bounce-slow">
                 <p className="text-4xl font-black italic">99.9%</p>
                 <p className="text-[10px] font-black uppercase tracking-widest opacity-60">Uptime Stability</p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Background Decor */}
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-blue-600/5 rounded-full blur-[150px] -translate-y-1/2 translate-x-1/2"></div>
      </section>

      {/* 5. CTA Section (LMSZONE Inspired) */}
      <section className="bg-white py-40 px-6 text-center">
        <div className="max-w-4xl mx-auto bg-blue-50/50 rounded-[4rem] p-16 lg:p-24 border border-blue-100 shadow-sm relative overflow-hidden group">
           <div className="relative z-10 space-y-8">
              <span className="text-blue-600 font-black uppercase tracking-widest text-xs">{lang === 'ko' ? '시작하기' : 'Become a Teacher / Mentee'}</span>
              <h2 className="text-5xl md:text-6xl font-black text-slate-900 tracking-tighter italic uppercase">{t.ctaTitle}</h2>
              <p className="text-slate-500 text-lg max-w-xl mx-auto leading-relaxed italic font-medium">
                {t.ctaDesc}
              </p>
              <button onClick={() => onNavigate('portal')} className="px-16 py-6 bg-slate-900 text-white rounded-[2rem] font-black uppercase tracking-widest text-xs hover:bg-blue-600 transition-all shadow-2xl active:scale-95">
                Join For Free ↗
              </button>
           </div>
           
           {/* Decorative circles */}
           <div className="absolute top-10 right-10 w-32 h-32 bg-blue-600/5 rounded-full group-hover:scale-150 transition-transform duration-1000"></div>
           <div className="absolute bottom-10 left-10 w-24 h-24 bg-blue-600/5 rounded-full group-hover:scale-150 transition-transform duration-1000 delay-100"></div>
        </div>
      </section>
      
    </div>
  );
};

export default EducationDetail;
