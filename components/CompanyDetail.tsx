
import React from 'react';
import { Language } from '../types';

interface CompanyDetailProps {
  lang: Language;
  // Add onNavigate to match expected props in App.tsx
  onNavigate: (id: string) => void;
}

const CompanyDetail: React.FC<CompanyDetailProps> = ({ lang, onNavigate }) => {
  const stats = [
    { label: lang === 'ko' ? "프로젝트 성공" : "Projects Completed", value: "500+" },
    { label: lang === 'ko' ? "평균 평점" : "Average Rating", value: "4.9/5" },
    { label: lang === 'ko' ? "경력 실무진" : "Years of Experience", value: "15+" },
  ];

  const expertise = [
    { title: "Linux & Windows Core", icon: "💻", desc: lang === 'ko' ? "OS 전 분야 핵심 엔진 개발" : "Core engine development" },
    { title: "Server Architecture", icon: "🌐", desc: lang === 'ko' ? "복잡한 대규모 서버 모듈 설계" : "Complex large-scale servers" },
    { title: "Mobile App Solution", icon: "📱", desc: lang === 'ko' ? "사용자 중심의 앱 서비스 구현" : "User-centric app services" },
    { title: "AI Learning Engine", icon: "🤖", desc: lang === 'ko' ? "차세대 교육용 AI 분석 도구" : "Next-gen AI learning tools" },
    { title: "Cloud Integration", icon: "☁️", desc: lang === 'ko' ? "안정적인 클라우드 인프라 구축" : "Stable cloud infrastructure" },
    { title: "Global R&D Support", icon: "🌍", desc: lang === 'ko' ? "전 세계 파트너사 기술 서포트" : "Global partner tech support" }
  ];

  const t = {
    ko: {
      heroTitle: <>기술로 세상을 <br /> <span className="text-blue-600">혁신하는 파트너</span></>,
      heroDesc: "조이마스터는 명문대 출신의 소프트웨어 전문가 및 디자인 인재들과 함께 ‘기술로 세상을 이롭게 한다’는 일념으로 고도화된 기술 솔루션을 제공합니다.",
      ceoSectionTitle: "Message from CEO",
      ceoGreeting: "안녕하십니까, 조이마스터(JoyMaster Inc.) 대표 David Park입니다.",
      ceoPara1: "조이마스터는 창업 이래 국내외 명문대 출신의 소프트웨어 전문가 및 디자인 인재들과 함께 ‘기술로 세상을 이롭게 한다’는 일념으로 쉼 없이 달려왔습니다. 우리는 리눅스와 윈도우를 넘나드는 애플리케이션 개발부터 복잡한 서버 모듈, 독자적인 엔진 솔루션에 이르기까지 전 세계 파트너사들의 수많은 프로젝트를 성공시키며 강력한 R&D 역량을 증명해 왔습니다.",
      ceoPara2: "이제 조이마스터는 그동안 축적해온 이 소중한 기술과 노하우의 정수를 ‘교육’이라는 새로운 플랫폼에 담아내려 합니다.",
      ceoPara3: "세상은 빠르게 변하고 있으며, 기술과 언어는 이제 단순한 도구를 넘어 미래를 살아가는 필수적인 역량이 되었습니다. 조이마스터는 우리가 가진 고도의 개발 기술력을 바탕으로, 단순히 지식을 전달하는 것을 넘어 기술과 사람을 연결하고, 시대를 선도할 미래 인재상을 직접 그려나가고자 합니다.",
      ceoPara4: "저희가 생각하는 교육은 일방적인 가르침이 아닙니다. 고객과 학습자의 성공을 나의 일처럼 기뻐하며, 한 가족처럼 단단하게 연결되어 함께 성장하는 것입니다. 여러분의 꿈이 기술을 통해 현실이 될 수 있도록, 조이마스터의 모든 구성원이 진심을 다해 서포트하겠습니다.",
      ceoPara5: "조이마스터가 열어갈 수준 높은 온라인 교육 서비스, 그 혁신의 여정에 여러분을 초대합니다. 기술의 가치를 경험하고, 함께 성공의 기쁨을 누리는 동반자가 되어 주십시오.",
      ceoPara6: "감사합니다.",
      ceoSign: "JoyMaster Inc. CEO David Park",
      ctaBtn: "상담하기",
      deckBtn: "회사 소개서"
    },
    en: {
      heroTitle: <>Your Strategic <br /> <span className="text-blue-600">Technology Advocates</span></>,
      heroDesc: "JoyMaster provides advanced technology solutions with software experts and design talents from prestigious universities under the mission of 'benefiting the world through tech.'",
      ceoSectionTitle: "Message from CEO",
      ceoGreeting: "Greetings, I'm David Park, CEO of JoyMaster Inc.",
      ceoPara1: "Since its founding, JoyMaster has worked tirelessly with software experts and design talents from prestigious universities under the belief of 'benefiting the world through technology.' We have proven our strong R&D capabilities by successfully completing numerous projects, from cross-platform applications to complex server modules and independent engine solutions.",
      ceoPara2: "Now, JoyMaster is ready to pour the essence of this precious technology and know-how into a new platform called 'Education.'",
      ceoPara3: "The world is changing rapidly, and technology and language have become essential competencies for the future. Based on our advanced technology, we aim to connect people with technology and directly shape the leaders of tomorrow.",
      ceoPara4: "Education to us is not one-way teaching. It is about celebrating the success of learners as our own and growing together as a solid family. All members of JoyMaster will support you with all hearts so that your dreams can become a reality through technology.",
      ceoPara5: "We invite you to the innovative journey of high-quality online education that JoyMaster will open. Become a partner who experiences the value of technology and enjoys the joy of success together.",
      ceoPara6: "Thank you.",
      ceoSign: "JoyMaster Inc. CEO David Park",
      ctaBtn: "Consult Now",
      deckBtn: "Company Deck"
    }
  }[lang];

  return (
    <div className="bg-white font-sans text-slate-900">
      {/* 1. Hero Section */}
      <section className="max-w-7xl mx-auto px-6 pt-24 pb-20 text-center">
        <h1 className="text-5xl md:text-8xl font-black tracking-tighter leading-none mb-8 uppercase italic">
          {t.heroTitle}
        </h1>
        <p className="text-slate-500 text-lg md:text-xl max-w-2xl mx-auto mb-12 font-medium italic">
          {t.heroDesc}
        </p>
        <div className="flex justify-center gap-4">
          <button className="px-10 py-5 bg-slate-900 text-white rounded-xl font-black uppercase tracking-widest text-xs shadow-2xl hover:bg-blue-600 transition-all active:scale-95">
            {t.ctaBtn}
          </button>
          <button className="px-10 py-5 bg-white border border-slate-200 text-slate-900 rounded-xl font-black uppercase tracking-widest text-xs hover:bg-slate-50 transition-all">
            {t.deckBtn}
          </button>
        </div>

        {/* Hero Image Collage */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-20">
           <div className="h-64 md:h-80 rounded-[3rem] overflow-hidden shadow-xl">
             <img src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=800&auto=format&fit=crop" className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700" alt="R&D" />
           </div>
           <div className="h-64 md:h-80 rounded-[3rem] overflow-hidden shadow-xl border-8 border-slate-50">
             <img src="https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=800&auto=format&fit=crop" className="w-full h-full object-cover" alt="JoyMaster CEO" />
           </div>
           <div className="h-64 md:h-80 rounded-[3rem] overflow-hidden shadow-xl">
             <img src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=800&auto=format&fit=crop" className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700" alt="Tech Future" />
           </div>
        </div>
      </section>

      {/* 2. Stats & Mission Section */}
      <section className="bg-blue-50/50 py-32 rounded-[5rem] mx-4 mb-20 px-6">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row justify-between items-center gap-20">
          <div className="lg:w-2/3 space-y-10">
            <span className="text-blue-600 font-black uppercase tracking-[0.4em] text-xs">Our Core Values</span>
            <h2 className="text-4xl md:text-6xl font-black tracking-tighter leading-tight italic uppercase">
              {lang === 'ko' ? (
                <>기술의 노하우를 <br /> 교육의 미래로 <br /> 연결합니다.</>
              ) : (
                <>Connecting Tech <br /> Expertise to the <br /> Future of Learning.</>
              )}
            </h2>
            <div className="flex flex-wrap gap-8 pt-8">
               {stats.map((s, i) => (
                 <div key={i} className="flex flex-col">
                    <p className="text-5xl font-black tracking-tight text-slate-900">{s.value}</p>
                    <p className="text-[10px] font-black text-blue-600 uppercase tracking-widest mt-1">{s.label}</p>
                 </div>
               ))}
            </div>
          </div>
          <div className="lg:w-1/3">
             <div className="aspect-square bg-slate-900 rounded-[4rem] flex items-center justify-center p-12 text-white relative overflow-hidden group">
                <div className="relative z-10 text-center space-y-6">
                   <div className="w-20 h-20 bg-blue-600 rounded-2xl mx-auto flex items-center justify-center text-4xl shadow-xl shadow-blue-600/20 group-hover:scale-110 transition-transform">💎</div>
                   <h3 className="text-2xl font-black italic tracking-tight uppercase">Excellence in R&D</h3>
                   <p className="text-slate-400 text-sm leading-relaxed italic">Leading the market through constant innovation and elite craftsmanship.</p>
                </div>
                <div className="absolute top-0 right-0 w-full h-full bg-blue-600/10 blur-3xl -translate-y-1/2 translate-x-1/2"></div>
             </div>
          </div>
        </div>
      </section>

      {/* 3. CEO Greeting Section */}
      <section className="bg-white py-40 px-6 border-t border-slate-50">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-start gap-24">
          <div className="flex-1 space-y-10">
            <div className="space-y-4">
              <span className="text-blue-600 font-black uppercase tracking-[0.4em] text-xs">{t.ceoSectionTitle}</span>
              <h3 className="text-5xl font-black tracking-tighter leading-[1.1] italic uppercase">
                Building the <br /> 
                <span className="text-blue-600 underline underline-offset-8 decoration-4">Next Generation</span>
              </h3>
            </div>
            
            <div className="space-y-6 text-slate-600 text-lg leading-relaxed font-medium italic">
               <p className="text-slate-900 font-black not-italic text-2xl mb-8">{t.ceoGreeting}</p>
               <p>{t.ceoPara1}</p>
               <p className="text-blue-600 font-black">{t.ceoPara2}</p>
               <p>{t.ceoPara3}</p>
               <p>{t.ceoPara4}</p>
               <p>{t.ceoPara5}</p>
               <p className="text-slate-900 font-black not-italic mt-4">{t.ceoPara6}</p>
            </div>

            <div className="pt-10">
               <p className="text-3xl font-black italic tracking-tighter text-slate-900">{t.ceoSign}</p>
               <p className="text-[10px] font-black text-blue-600 uppercase tracking-widest mt-2 tracking-[0.2em]">JoyMaster Inc. Founding CEO</p>
            </div>

            <button className="mt-12 px-12 py-5 bg-slate-900 text-white rounded-xl font-black uppercase tracking-widest text-xs hover:bg-blue-600 transition-all shadow-xl shadow-blue-600/10 active:scale-95">
              Schedule A Virtual Meeting ↗
            </button>
          </div>
          
          <div className="flex-1 sticky top-32">
             <div className="aspect-[4/5] bg-slate-100 rounded-[5rem] overflow-hidden shadow-2xl relative group border-8 border-white">
                <img src="https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=1200&auto=format&fit=crop" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000 grayscale group-hover:grayscale-0" alt="David Park CEO" />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <div className="absolute bottom-12 left-12 right-12 bg-white/10 backdrop-blur-xl p-8 rounded-[3rem] border border-white/20">
                   <p className="text-white text-xl font-black italic leading-tight">"We don't just teach technology; we empower people to build the future."</p>
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* 4. R&D Expertise Grid */}
      <section className="bg-slate-900 py-32 px-6 rounded-t-[5rem] text-white overflow-hidden relative">
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="mb-24 flex flex-col md:flex-row justify-between items-end gap-8">
             <div className="space-y-4">
                <h2 className="text-4xl md:text-6xl font-black tracking-tighter uppercase italic leading-none">Our Technical <br /> Backbone</h2>
                <p className="text-slate-400 max-w-xl italic">{lang === 'ko' ? '다양한 플랫폼을 아우르는 조이마스터만의 고도화된 R&D 핵심 기술 역량입니다.' : 'Our core R&D technical capabilities spanning across various high-end platforms.'}</p>
             </div>
             <div className="flex gap-4">
                <div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center border border-white/10 text-slate-400">←</div>
                <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white shadow-lg shadow-blue-600/20">→</div>
             </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-20">
            {expertise.map((item, i) => (
              <div key={i} className="flex gap-8 group">
                <div className="w-16 h-16 bg-white/5 border border-white/10 rounded-2xl flex items-center justify-center text-3xl group-hover:bg-blue-600 transition-all duration-500 flex-shrink-0 shadow-lg group-hover:-translate-y-2">
                  {item.icon}
                </div>
                <div className="space-y-3 border-l border-white/5 pl-8 group-hover:border-blue-600 transition-colors">
                  <h4 className="text-xl font-black tracking-tight">{item.title}</h4>
                  <p className="text-slate-400 text-sm leading-relaxed italic">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Background Decor */}
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-blue-600/5 rounded-full blur-[150px] -translate-y-1/2 translate-x-1/3"></div>
      </section>

      {/* 5. Team Grid */}
      <section className="max-w-7xl mx-auto px-6 py-40 text-center">
        <div className="mb-20 space-y-4">
          <span className="text-blue-600 font-black uppercase tracking-[0.4em] text-xs">The Visionaries</span>
          <h2 className="text-5xl md:text-7xl font-black tracking-tighter uppercase italic leading-none">The Elite Minds</h2>
        </div>
        <div className="flex flex-wrap justify-center gap-12">
           {[1, 2, 3, 4, 5].map(i => (
             <div key={i} className="flex flex-col items-center group cursor-pointer">
                <div className="w-44 h-64 md:w-60 md:h-84 bg-slate-100 rounded-t-full rounded-b-[4rem] overflow-hidden shadow-2xl relative mb-8 transition-all duration-500 group-hover:-translate-y-4 group-hover:shadow-blue-600/10">
                   <img src={`https://images.unsplash.com/photo-${i === 1 ? '1560250097-0b93528c311a' : i === 2 ? '1494790108377-be9c29b29330' : i === 3 ? '1500648767791-00dcc994a43e' : i === 4 ? '1573496359142-b8d87734a5a2' : '1531123897727-8f129e1688ce'}?q=80&w=400&auto=format&fit=crop`} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700" alt="JoyMaster Team" />
                </div>
                <h4 className="text-xl font-black text-slate-900 group-hover:text-blue-600 transition-colors">{i === 1 ? 'David Park' : i === 2 ? 'Sarah Kim' : 'James Lee'}</h4>
                <p className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] mt-1">{i === 1 ? 'CEO & Founder' : 'R&D Director'}</p>
             </div>
           ))}
        </div>
      </section>

      {/* 6. Footer CTA */}
      <section className="bg-blue-50 py-32 rounded-t-[6rem]">
        <div className="max-w-7xl mx-auto px-6 text-center space-y-12">
           <h2 className="text-5xl md:text-8xl font-black tracking-tighter italic uppercase leading-none">
             Partner with <br /> <span className="text-blue-600">JoyMaster</span>
           </h2>
           <p className="text-slate-500 max-w-xl mx-auto text-xl italic font-medium">
             {lang === 'ko' ? '기술의 가치를 경험하고, 함께 성공의 기쁨을 누리는 동반자가 되어 주십시오.' : 'Experience the value of technology and become a partner sharing the joy of success.'}
           </p>
           <a 
             href="https://www.joymaster.kr/" 
             target="_blank" 
             rel="noopener noreferrer"
             className="inline-block px-16 py-7 bg-blue-600 text-white rounded-[2.5rem] font-black uppercase tracking-[0.2em] text-sm shadow-2xl hover:bg-slate-900 transition-all active:scale-95 shadow-blue-600/20"
           >
              Get in Touch ↗
           </a>
        </div>
      </section>
    </div>
  );
};

export default CompanyDetail;
