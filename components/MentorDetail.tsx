
import React from 'react';

const MentorDetail: React.FC = () => {
  const mentors = [
    {
      name: "Daudet Afroseth",
      role: "Global Head Mentor",
      specialty: "Full-Stack AI Education",
      img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=400&auto=format&fit=crop",
      description: "10년 이상의 실무 경력과 AI 교육 전문성을 보유. 복잡한 시스템 아키텍처부터 실전 노하우까지 전수합니다."
    },
    {
      name: "Amelia Faye",
      role: "Admission Strategist",
      specialty: "AI Student Record Builder",
      img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=400&auto=format&fit=crop",
      description: "전직 입시 사정관 출신. AI를 활용한 세부능력 및 특기사항(세특) 자동 생성 및 정성적 커리어 분석 전문가."
    },
    {
      name: "Kevin Lee",
      role: "Behavioral Specialist",
      specialty: "Psychological Counseling",
      img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=400&auto=format&fit=crop",
      description: "교육 심리학 박사. AI 감정 분석 엔진을 활용하여 학생의 정서적 케어와 멘탈 관리를 병행합니다."
    },
    {
      name: "Clara Santoso",
      role: "Interactive Lead",
      specialty: "L2E Ecosystem Design",
      img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=400&auto=format&fit=crop",
      description: "게이미피케이션 설계 리드. L2E(Learn to Earn) 보상 모델과 아바타 성장 루프를 직접 설계했습니다."
    }
  ];

  const expertise = [
    { title: "1:1 Live Mentoring", desc: "실시간 1:1 화상 수업을 통한 밀착 케어", icon: "🎓" },
    { title: "AI Record Builder", desc: "학교 생활기록부 기재용 탐구 보고서 자동 생성", icon: "📑" },
    { title: "L2E Gamification", desc: "공부하면 쌓이는 포인트와 아바타 진화 시스템", icon: "🎮" },
    { title: "Sentiment Care", desc: "AI 감정 분석 기반의 월간 정서 발달 리포트", icon: "🧠" },
    { title: "Global Admission", desc: "북미 명문대 및 국내 TOP 대학 입시 최적화", icon: "🌏" },
    { title: "B2B Solutions", desc: "학원 및 기관용 AI 레벨 테스트 모듈 공급", icon: "🏢" }
  ];

  return (
    <div className="bg-white font-sans">
      {/* 1. Professional Team Lineup (Based on EliteGuard Image Section 3) */}
      <section className="max-w-7xl mx-auto px-6 pt-32 pb-20 text-center">
        <h1 className="text-5xl md:text-7xl font-black tracking-tighter mb-12 uppercase italic">
          Meet Our <span className="text-blue-600">Expert Mentors</span>
        </h1>
        <div className="flex flex-wrap justify-center gap-4 md:gap-12 mt-20">
          {mentors.map((m, i) => (
            <div key={i} className="flex flex-col items-center group">
              <div className="w-48 h-72 md:w-64 md:h-96 bg-slate-100 rounded-t-full rounded-b-3xl overflow-hidden shadow-2xl relative mb-8 transition-transform duration-500 group-hover:-translate-y-4">
                <img src={m.img} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700" alt={m.name} />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-600/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </div>
              <h4 className="text-2xl font-black text-slate-900">{m.name}</h4>
              <p className="text-xs font-bold text-blue-600 uppercase tracking-widest mt-1">{m.role}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 2. Core Expertise Grid (Based on EliteGuard "Our Expertise" Section) */}
      <section className="bg-slate-50 py-32 px-6 rounded-[5rem] mx-4 mb-32 border border-slate-100 shadow-sm">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-24">
            <h2 className="text-4xl md:text-5xl font-black tracking-tighter uppercase italic mb-6">Expertise in AI Mentoring</h2>
            <p className="text-slate-500 max-w-2xl mx-auto">단순한 강의를 넘어 학생의 인생을 바꾸는 4가지 고도화 서비스 레벨을 제공합니다.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {expertise.map((item, i) => (
              <div key={i} className="flex gap-8 group">
                <div className="w-16 h-16 bg-white rounded-2xl shadow-lg flex items-center justify-center text-3xl group-hover:bg-blue-600 group-hover:text-white transition-all duration-500 shrink-0">
                  {item.icon}
                </div>
                <div>
                  <h4 className="text-xl font-black mb-3 tracking-tight group-hover:text-blue-600 transition-colors">{item.title}</h4>
                  <p className="text-slate-400 text-sm leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Detailed Profile Highlight (Based on "How Our Team Can Assist You") */}
      <section className="max-w-7xl mx-auto px-6 py-32 flex flex-col lg:flex-row items-center gap-20">
        <div className="flex-1 space-y-10">
          <h3 className="text-5xl font-black tracking-tighter leading-tight italic uppercase">
            How Our Mentors <br />
            <span className="text-blue-600 underline underline-offset-8 decoration-4">Accelerate Success</span>
          </h3>
          <p className="text-slate-500 text-lg leading-relaxed">
            "우리는 지식을 전달하는 강사가 아닌, 성장을 설계하는 멘토입니다."<br />
            PDF 사업 계획서에 명시된 Ci(조합), Ni(참신성), Fi(실현가능성) 공식을 바탕으로, 
            기존 화상 영어의 한계를 뛰어넘는 '질적 평가' 중심의 멘토링을 실현합니다.
          </p>
          <div className="space-y-6">
             <div className="flex items-center gap-4">
               <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 font-black">1</div>
               <p className="font-bold text-slate-700 underline decoration-slate-200 decoration-2">AI 에고 미러링 시스템으로 학습 몰입도 극대화</p>
             </div>
             <div className="flex items-center gap-4">
               <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 font-black">2</div>
               <p className="font-bold text-slate-700 underline decoration-slate-200 decoration-2">입시 역설계(Reverse Engineering) 로드맵 제공</p>
             </div>
          </div>
          <button className="px-12 py-5 bg-slate-900 text-white rounded-xl font-bold text-sm shadow-2xl hover:scale-105 active:scale-95 transition-all">
            LEARN MORE ABOUT OUR PROCESS
          </button>
        </div>
        <div className="flex-1 relative">
           <div className="aspect-[4/5] bg-slate-900 rounded-[4rem] overflow-hidden shadow-2xl group">
             <img src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1200&auto=format&fit=crop" className="w-full h-full object-cover opacity-70 group-hover:scale-105 transition-transform duration-700" alt="Session" />
             <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center shadow-2xl cursor-pointer hover:scale-110 transition-transform">
                  <div className="w-0 h-0 border-t-[12px] border-t-transparent border-l-[20px] border-l-blue-600 border-b-[12px] border-b-transparent ml-2"></div>
                </div>
             </div>
           </div>
        </div>
      </section>

      {/* 4. Consultation Form (Based on EliteGuard Bottom Section) */}
      <section className="bg-slate-900 py-32 rounded-t-[5rem] mt-20">
        <div className="max-w-7xl mx-auto px-6 flex flex-col lg:flex-row gap-20">
          <div className="lg:w-1/2 text-white space-y-8">
            <h2 className="text-5xl font-black tracking-tighter italic uppercase">Schedule A <br />Free Consultation</h2>
            <p className="text-slate-400 text-lg leading-relaxed">
              지금 바로 AI 멘토와 상담을 예약하세요. <br />
              학생의 현재 레벨 테스트부터 아바타 생성까지, <br />
              성공적인 입시 로드맵을 무료로 설계해 드립니다.
            </p>
            <div className="pt-10 space-y-6">
               <div className="flex items-center gap-6 p-6 bg-white/5 rounded-3xl border border-white/10 hover:bg-white/10 transition-colors">
                  <span className="text-2xl">📞</span>
                  <div>
                    <p className="text-xs font-black text-blue-400 uppercase tracking-widest mb-1">Call Us Directly</p>
                    <p className="text-xl font-bold">02-1234-5678</p>
                  </div>
               </div>
               <div className="flex items-center gap-6 p-6 bg-white/5 rounded-3xl border border-white/10 hover:bg-white/10 transition-colors">
                  <span className="text-2xl">✉️</span>
                  <div>
                    <p className="text-xs font-black text-blue-400 uppercase tracking-widest mb-1">Email Support</p>
                    <p className="text-xl font-bold">contact@aimentor.academy</p>
                  </div>
               </div>
            </div>
          </div>
          
          <div className="lg:w-1/2">
             <div className="bg-white p-12 rounded-[4rem] shadow-2xl space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                   <div className="space-y-2">
                      <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-2">First Name</label>
                      <input type="text" placeholder="Enter your first name" className="w-full bg-slate-50 border border-slate-100 rounded-2xl px-6 py-4 text-sm outline-none focus:ring-2 ring-blue-600/20" />
                   </div>
                   <div className="space-y-2">
                      <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-2">Last Name</label>
                      <input type="text" placeholder="Enter your last name" className="w-full bg-slate-50 border border-slate-100 rounded-2xl px-6 py-4 text-sm outline-none focus:ring-2 ring-blue-600/20" />
                   </div>
                </div>
                <div className="space-y-2">
                   <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-2">Email Address</label>
                   <input type="email" placeholder="Enter your email" className="w-full bg-slate-50 border border-slate-100 rounded-2xl px-6 py-4 text-sm outline-none focus:ring-2 ring-blue-600/20" />
                </div>
                <div className="space-y-2">
                   <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-2">Interested Subject</label>
                   <select className="w-full bg-slate-50 border border-slate-100 rounded-2xl px-6 py-4 text-sm outline-none focus:ring-2 ring-blue-600/20 appearance-none">
                      <option>AI Mentoring & Record Building</option>
                      <option>L2E Point System Inquiry</option>
                      <option>Psychological Counseling</option>
                   </select>
                </div>
                <div className="space-y-2">
                   <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-2">Message</label>
                   <textarea rows={4} placeholder="Type your message here..." className="w-full bg-slate-50 border border-slate-100 rounded-2xl px-6 py-4 text-sm outline-none focus:ring-2 ring-blue-600/20"></textarea>
                </div>
                <button className="w-full py-6 bg-slate-900 text-white rounded-[2rem] font-black uppercase tracking-widest hover:bg-blue-600 transition-all shadow-xl shadow-blue-600/10 active:scale-95 mt-4">
                  Send Message ↗
                </button>
             </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MentorDetail;
