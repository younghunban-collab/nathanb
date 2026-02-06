
import React from 'react';
import { Language } from '../types';

interface AbroadDetailProps {
  lang: Language;
  onNavigate: (id: string) => void;
}

const AbroadDetail: React.FC<AbroadDetailProps> = ({ lang, onNavigate }) => {
  const destinations = [
    {
      title: "London, UK",
      program: "IELTS Mastery & Royal Culture",
      price: "$2,200",
      duration: "4 Weeks",
      img: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?q=80&w=800&auto=format&fit=crop",
      badge: "Popular"
    },
    {
      title: "San Francisco, USA",
      program: "Silicon Valley Tech Immersion",
      price: "$3,500",
      duration: "2 Weeks",
      img: "https://images.unsplash.com/photo-1501594907352-04cda38ebc29?q=80&w=800&auto=format&fit=crop",
      badge: "STEM Focus"
    },
    {
      title: "Paris, France",
      program: "Art History & European Life",
      price: "$2,800",
      duration: "3 Weeks",
      img: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?q=80&w=800&auto=format&fit=crop",
      badge: "Culture"
    },
    {
      title: "Vancouver, Canada",
      program: "Environmental Science & Nature",
      price: "$2,600",
      duration: "4 Weeks",
      img: "https://images.unsplash.com/photo-1559511260-66a654ae982a?q=80&w=800&auto=format&fit=crop",
      badge: "Adventure"
    }
  ];

  const famousUniversities = [
    {
      name: "Harvard University",
      location: "Cambridge, USA",
      url: "https://www.harvard.edu",
      img: "https://images.unsplash.com/photo-1576014131795-d440191a8e8b?q=80&w=400&auto=format&fit=crop",
      color: "bg-red-800"
    },
    {
      name: "Seoul National University",
      location: "Seoul, Korea",
      url: "https://www.snu.ac.kr",
      img: "https://images.unsplash.com/photo-1621245785055-68045f8f0b72?q=80&w=400&auto=format&fit=crop",
      color: "bg-blue-900"
    },
    {
      name: "Stanford University",
      location: "Stanford, USA",
      url: "https://www.stanford.edu",
      img: "https://images.unsplash.com/photo-1579208030886-b937fe0925dc?q=80&w=400&auto=format&fit=crop",
      color: "bg-red-700"
    },
    {
      name: "University of Oxford",
      location: "Oxford, UK",
      url: "https://www.ox.ac.uk",
      img: "https://images.unsplash.com/photo-1510070112810-d4e9a46d9e91?q=80&w=400&auto=format&fit=crop",
      color: "bg-indigo-900"
    },
    {
      name: "MIT",
      location: "Cambridge, USA",
      url: "https://www.mit.edu",
      img: "https://images.unsplash.com/photo-1564939558297-fc396f18e5c7?q=80&w=400&auto=format&fit=crop",
      color: "bg-slate-700"
    }
  ];

  const languageCourses = [
    {
      title: lang === 'ko' ? "아이엘츠 (IELTS)" : "IELTS Mastery",
      desc: lang === 'ko' ? "영국 및 영연방 명문대 진학을 위한 공인 영어 과정입니다." : "Official English course for admission to prestigious UK & Commonwealth universities.",
      img: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=600&auto=format&fit=crop",
      icon: "🇬🇧"
    },
    {
      title: lang === 'ko' ? "토플 (TOEFL)" : "TOEFL Intensive",
      desc: lang === 'ko' ? "미국 대입 및 전문 아카데믹 영어 역량을 키우는 집중 과정입니다." : "Intensive course to develop academic English for US admissions.",
      img: "https://images.unsplash.com/photo-1544717297-fa154daaf544?q=80&w=600&auto=format&fit=crop",
      icon: "🇺🇸"
    },
    {
      title: lang === 'ko' ? "비즈니스 회화" : "Business Communication",
      desc: lang === 'ko' ? "글로벌 테크 기업 및 비즈니스 환경을 위한 실전 회화입니다." : "Practical conversation for global tech companies and business environments.",
      img: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=600&auto=format&fit=crop",
      icon: "🌐"
    }
  ];

  return (
    <div className="bg-white font-sans overflow-x-hidden selection:bg-blue-100">
      
      {/* 1. Hero Section */}
      <section className="relative h-[90vh] min-h-[700px] flex items-center px-6">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=2000&auto=format&fit=crop" 
            className="w-full h-full object-cover grayscale-[0.1]" 
            alt="Travel Hero" 
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900/70 via-slate-900/30 to-transparent"></div>
        </div>

        <div className="max-w-7xl mx-auto w-full relative z-10 text-white">
          <div className="max-w-2xl space-y-8 animate-in slide-in-from-left duration-1000">
            <span className="text-blue-400 font-black uppercase tracking-[0.4em] text-xs">AI MENTORING ACADEMY GLOBAL</span>
            <h1 className="text-6xl md:text-[9rem] font-black leading-[0.85] tracking-tighter italic uppercase">
              GO BEYOND <br /> <span className="text-blue-500">THE MAP.</span>
            </h1>
            <p className="text-lg text-slate-200 leading-relaxed italic max-w-lg">
              {lang === 'ko' ? <>"전 세계가 당신의 교실이 됩니다. <br /> AI 멘토와 함께하는 개인 맞춤형 글로벌 어학연수 프로그램을 만나보세요."</> : <>"The whole world becomes your classroom. <br /> Meet personalized global study abroad programs with AI mentors."</>}
            </p>
            
            <div className="pt-10 flex flex-col md:flex-row gap-4">
               <div className="flex-1 bg-white/10 backdrop-blur-xl p-4 rounded-3xl border border-white/20 flex items-center gap-4">
                  <div className="w-10 h-10 bg-blue-600 rounded-2xl flex items-center justify-center text-xl">📍</div>
                  <div className="flex-1">
                     <p className="text-[10px] font-black text-blue-400 uppercase">Search Destination</p>
                     <input type="text" placeholder="Where do you want to learn?" className="bg-transparent border-none text-white text-sm font-bold w-full outline-none placeholder:text-slate-400" />
                  </div>
               </div>
               <button className="px-12 py-5 bg-blue-600 text-white rounded-3xl font-black uppercase tracking-widest text-xs hover:bg-white hover:text-blue-600 transition-all shadow-2xl active:scale-95">
                 Search Program ↗
               </button>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Program Categories */}
      <section className="max-w-7xl mx-auto px-6 py-32">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
           <div>
              <h2 className="text-4xl font-black text-slate-900 tracking-tighter italic uppercase">Find things to learn</h2>
              <p className="text-slate-500 mt-2">{lang === 'ko' ? '당신만의 특별한 학습 테마를 선택하세요.' : 'Choose your unique learning theme.'}</p>
           </div>
           <button className="text-[10px] font-black uppercase tracking-widest text-slate-400 hover:text-blue-600 transition-colors">See all themes →</button>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
           {[
             { title: "STEM & Tech", img: "https://images.unsplash.com/photo-1518152006812-edab29b069ac?q=80&w=400&auto=format&fit=crop", icon: "🔭" },
             { title: "Business & Biz", img: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=400&auto=format&fit=crop", icon: "📊" },
             { title: "Art & Culture", img: "https://images.unsplash.com/photo-1467269204594-9661b134dd2b?q=80&w=400&auto=format&fit=crop", icon: "🏛️" },
             { title: "Nature & Bio", img: "https://images.unsplash.com/photo-1502082553245-f0bc5a6f7770?q=80&w=400&auto=format&fit=crop", icon: "🌿" }
           ].map((cat, i) => (
             <div key={i} className="group relative aspect-[4/5] rounded-[3rem] overflow-hidden cursor-pointer shadow-xl">
                <img src={cat.img} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" alt={cat.title} />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-transparent to-transparent"></div>
                <div className="absolute bottom-8 left-8 text-white">
                   <span className="text-3xl mb-4 block">{cat.icon}</span>
                   <h4 className="text-xl font-black tracking-tight uppercase italic">{cat.title}</h4>
                </div>
             </div>
           ))}
        </div>
      </section>

      {/* 3. Intensive Courses */}
      <section className="bg-slate-50 py-32 rounded-[5rem] mx-4 mb-32">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-24 space-y-4">
             <span className="text-blue-600 font-black uppercase tracking-[0.4em] text-[10px]">Academic Excellence</span>
             <h2 className="text-5xl font-black tracking-tighter italic uppercase text-slate-900">{lang === 'ko' ? '어학 집중 코스' : 'Intensive Courses'}</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
             {languageCourses.map((course, i) => (
               <div key={i} className="bg-white rounded-[4rem] p-10 shadow-xl shadow-slate-200/50 border border-slate-50 flex flex-col items-center text-center group hover:-translate-y-4 transition-all duration-500">
                  <div className="relative mb-10 w-full aspect-[4/3] rounded-[2.5rem] overflow-hidden">
                     <img src={course.img} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700" alt={course.title} />
                     <div className="absolute inset-0 bg-blue-600/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                     <div className="absolute top-6 right-6 w-14 h-14 bg-white rounded-2xl flex items-center justify-center text-3xl shadow-xl">{course.icon}</div>
                  </div>
                  <h3 className="text-3xl font-black text-slate-900 mb-4 tracking-tight">{course.title}</h3>
                  <p className="text-slate-500 text-sm leading-relaxed mb-10 italic">{course.desc}</p>
                  <button className="mt-auto px-10 py-4 bg-slate-900 text-white rounded-2xl font-black uppercase tracking-widest text-[10px] hover:bg-blue-600 transition-all shadow-xl shadow-blue-600/10">
                    Learn More ↗
                  </button>
               </div>
             ))}
          </div>
        </div>
      </section>

      {/* 4. Popular Destinations */}
      <section className="max-w-7xl mx-auto px-6 py-32">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
           <div className="max-w-xl">
              <span className="text-blue-600 font-black uppercase tracking-[0.4em] text-[10px] mb-4 block">Recommended Programs</span>
              <h3 className="text-5xl font-black tracking-tighter leading-[0.9] italic uppercase">Popular <br />Destination</h3>
           </div>
           <button className="text-xs font-black uppercase tracking-widest text-slate-400 hover:text-blue-600 underline underline-offset-8 transition-colors">View all destinations ↗</button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
           {destinations.map((dest, i) => (
             <div key={i} className="group bg-white rounded-[3.5rem] overflow-hidden shadow-xl shadow-slate-100 border border-slate-50 transition-all duration-500 hover:-translate-y-4">
                <div className="h-64 relative overflow-hidden">
                   <img src={dest.img} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" alt={dest.title} />
                   <div className="absolute top-6 left-6 flex gap-2">
                      <span className="bg-blue-600 text-white text-[9px] font-black px-3 py-1.5 rounded-full uppercase italic tracking-tighter shadow-xl">{dest.badge}</span>
                      <span className="bg-white/80 backdrop-blur-md text-slate-900 text-[9px] font-black px-3 py-1.5 rounded-full uppercase tracking-tighter">{dest.price}</span>
                   </div>
                </div>
                <div className="p-10 space-y-6">
                   <div className="space-y-1">
                      <h4 className="text-2xl font-black text-slate-900 tracking-tight leading-tight">{dest.title}</h4>
                      <p className="text-[11px] font-black text-blue-600 uppercase tracking-widest">{dest.program}</p>
                   </div>
                   <div className="flex justify-between items-center pt-6 border-t border-slate-50">
                      <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">{dest.duration} Trip</span>
                      <button className="w-10 h-10 rounded-xl bg-slate-50 flex items-center justify-center hover:bg-blue-600 hover:text-white transition-all">↗</button>
                   </div>
                </div>
             </div>
           ))}
        </div>
      </section>

      {/* 5. Famous Universities Section (New Added) */}
      <section className="bg-slate-50 py-32 mx-4 rounded-[5rem] mb-32 border border-slate-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
             <span className="text-blue-600 font-black uppercase tracking-[0.4em] text-[10px] mb-4 block">Our Partner Network</span>
             <h2 className="text-4xl md:text-5xl font-black tracking-tighter italic uppercase text-slate-900">
               {lang === 'ko' ? '글로벌 명문 대학 네트워크' : 'Global Top Tier Universities'}
             </h2>
             <p className="text-slate-500 mt-4 max-w-2xl mx-auto">
               {lang === 'ko' ? 'AI 멘토 아카데미가 추천하는 세계 최고의 대학들과 함께 당신의 꿈을 설계하세요.' : 'Design your dream with the world\'s top universities recommended by AI Mentor Academy.'}
             </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
             {famousUniversities.map((uni, i) => (
               <a 
                key={i} 
                href={uni.url} 
                target="_blank" 
                rel="noopener noreferrer"
                className="group bg-white rounded-[2.5rem] p-8 border border-slate-100 shadow-sm hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 flex flex-col items-center text-center"
               >
                  <div className="w-24 h-24 rounded-full overflow-hidden mb-6 border-4 border-slate-50 group-hover:border-blue-600 transition-colors">
                     <img src={uni.img} className="w-full h-full object-cover" alt={uni.name} />
                  </div>
                  <h4 className="text-lg font-black text-slate-900 leading-tight mb-2 min-h-[48px] flex items-center">{uni.name}</h4>
                  <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-6">{uni.location}</p>
                  <div className={`mt-auto w-full py-3 rounded-xl ${uni.color} text-white text-[9px] font-black uppercase tracking-widest flex items-center justify-center gap-2 group-hover:scale-105 transition-transform`}>
                     Explore Campus <span className="text-sm">↗</span>
                  </div>
               </a>
             ))}
          </div>
        </div>
      </section>

      {/* 6. Application Section */}
      <section id="apply-form" className="bg-slate-900 py-40 rounded-t-[6rem] text-white overflow-hidden relative">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
            <div className="space-y-10 animate-in fade-in duration-1000">
               <span className="text-blue-400 font-black uppercase tracking-[0.5em] text-xs">Ready to Fly?</span>
               <h2 className="text-6xl md:text-8xl font-black tracking-tighter leading-[0.9] italic uppercase">
                 Start Your <br />
                 <span className="text-blue-500">Journey</span> <br />
                 Today.
               </h2>
               <p className="text-slate-400 text-lg leading-relaxed max-w-lg italic">
                 {lang === 'ko' ? '복잡한 서류 절차부터 숙소 매칭까지, AI 멘토 아카데미가 원스톱으로 지원합니다. 지금 바로 무료 상담을 신청하세요.' : 'From complex paperwork to housing matching, AI Mentor Academy supports you one-stop. Apply for a free consultation right now.'}
               </p>
               <div className="flex gap-4 pt-10">
                  <div className="w-16 h-16 bg-white/5 rounded-3xl flex items-center justify-center text-3xl">📞</div>
                  <div>
                     <p className="text-[10px] font-black text-blue-400 uppercase tracking-widest">Support Line</p>
                     <p className="text-2xl font-black italic">02-561-8907</p>
                  </div>
               </div>
            </div>

            <div className="bg-white p-12 lg:p-16 rounded-[4rem] shadow-2xl relative">
               <form className="space-y-8 text-slate-900" onSubmit={(e) => { e.preventDefault(); alert(lang === 'ko' ? '신청이 완료되었습니다! 24시간 이내에 연락드리겠습니다.' : 'Application complete! We will contact you within 24 hours.'); }}>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                     <div className="space-y-3">
                        <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-4">Full Name</label>
                        <input type="text" required placeholder="Enter your name" className="w-full bg-slate-50 border border-slate-100 rounded-[2rem] px-8 py-5 text-sm font-bold outline-none focus:ring-4 ring-blue-600/10 transition-all" />
                     </div>
                     <div className="space-y-3">
                        <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-4">Phone Number</label>
                        <input type="text" required placeholder="010-0000-0000" className="w-full bg-slate-50 border border-slate-100 rounded-[2rem] px-8 py-5 text-sm font-bold outline-none focus:ring-4 ring-blue-600/10 transition-all" />
                     </div>
                  </div>
                  <div className="space-y-3">
                     <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-4">Preferred Destination</label>
                     <select className="w-full bg-slate-50 border border-slate-100 rounded-[2rem] px-8 py-5 text-sm font-bold outline-none appearance-none focus:ring-4 ring-blue-600/10 transition-all">
                        <option>United Kingdom (London)</option>
                        <option>United States (San Francisco)</option>
                        <option>Canada (Vancouver)</option>
                        <option>France (Paris)</option>
                        <option>Australia (Sydney)</option>
                     </select>
                  </div>
                  <div className="space-y-3">
                     <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-4">Your Message</label>
                     <textarea rows={4} placeholder="Anything we should know?" className="w-full bg-slate-50 border border-slate-100 rounded-[3rem] px-8 py-6 text-sm font-bold outline-none focus:ring-4 ring-blue-600/10 transition-all"></textarea>
                  </div>
                  <button type="submit" className="w-full py-6 bg-blue-600 text-white rounded-[2.5rem] font-black uppercase tracking-widest hover:bg-slate-900 transition-all shadow-2xl shadow-blue-600/30 active:scale-95 text-xs">
                    Apply for Consulting ↗
                  </button>
               </form>
               
               {/* Floating Decor */}
               <div className="absolute -top-10 -right-10 w-24 h-24 bg-blue-600 rounded-3xl rotate-12 flex items-center justify-center text-4xl shadow-2xl animate-bounce-slow">✈️</div>
            </div>
          </div>
        </div>

        {/* BG Decor */}
        <div className="absolute top-0 right-0 w-[1000px] h-[1000px] bg-blue-600/5 rounded-full blur-[150px] -translate-y-1/2 translate-x-1/2"></div>
      </section>

      <style>{`
        .no-scrollbar::-webkit-scrollbar { display: none; }
      `}</style>
    </div>
  );
};

export default AbroadDetail;
