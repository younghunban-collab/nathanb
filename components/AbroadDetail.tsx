
import React from 'react';

const AbroadDetail: React.FC = () => {
  const destinations = [
    {
      title: "London, UK",
      program: "IELTS & Classic Literature",
      price: "$2,200",
      duration: "4 Week Trip",
      img: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?q=80&w=800&auto=format&fit=crop",
      badge: "Popular"
    },
    {
      title: "San Francisco, USA",
      program: "AI & Tech Innovation",
      price: "$3,500",
      duration: "2 Week Trip",
      img: "https://images.unsplash.com/photo-1501594907352-04cda38ebc29?q=80&w=800&auto=format&fit=crop",
      badge: "STEM Focus"
    },
    {
      title: "Sydney, Australia",
      program: "Marine Biology & English",
      price: "$2,800",
      duration: "3 Week Trip",
      img: "https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?q=80&w=800&auto=format&fit=crop",
      badge: "Adventure"
    },
    {
      title: "Vancouver, Canada",
      program: "Game Design & Culture",
      price: "$2,600",
      duration: "4 Week Trip",
      img: "https://images.unsplash.com/photo-1559511260-66a654ae982a?q=80&w=800&auto=format&fit=crop",
      badge: "Creative"
    }
  ];

  const features = [
    { title: "현지인 홈스테이", desc: "검증된 원어민 가정과의 1:1 매칭", icon: "🏠" },
    { title: "학점 인정 프로그램", desc: "국내 주요 대학 학점 교류 지원", icon: "🎓" },
    { title: "24/7 세이프 케어", desc: "전용 앱을 통한 실시간 안전 관리", icon: "🛡️" },
    { title: "AI 여행 가이드", desc: "개인별 맞춤형 현지 학습 로드맵", icon: "🤖" }
  ];

  return (
    <div className="bg-white font-sans overflow-x-hidden">
      {/* 1. Hero Section (Inspired by Travel UI) */}
      <section className="relative h-[85vh] min-h-[600px] flex items-center px-6">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=2000&auto=format&fit=crop" 
            className="w-full h-full object-cover grayscale-[0.2]" 
            alt="Travel Hero" 
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/30 to-transparent"></div>
        </div>

        <div className="max-w-7xl mx-auto w-full relative z-10 text-white">
          <div className="max-w-2xl space-y-6">
            <span className="text-blue-400 font-black uppercase tracking-[0.4em] text-xs">Beyond the Classroom</span>
            <h1 className="text-6xl md:text-8xl font-black leading-none tracking-tighter italic">
              GO BEYOND <br /> THE MAP
            </h1>
            <p className="text-lg text-slate-200 leading-relaxed italic max-w-lg">
              "책에서 보던 풍경이 당신의 교실이 됩니다. <br />
              전 세계 명문대 및 기관과 연계된 AI 맞춤형 어학연수를 경험하세요."
            </p>
            
            {/* Search Bar Style UI */}
            <div className="mt-12 bg-white/10 backdrop-blur-xl p-4 rounded-[2rem] border border-white/20 flex flex-col md:flex-row gap-4 items-center">
               <div className="flex-1 px-6 border-r border-white/10 hidden md:block">
                  <p className="text-[10px] font-black text-blue-400 uppercase mb-1">Destination</p>
                  <p className="text-sm font-bold">Where are you learning?</p>
               </div>
               <div className="flex-1 px-6 border-r border-white/10 hidden md:block">
                  <p className="text-[10px] font-black text-blue-400 uppercase mb-1">Theme</p>
                  <p className="text-sm font-bold">Science & Tech</p>
               </div>
               <button className="w-full md:w-auto px-10 py-4 bg-blue-600 rounded-2xl font-black uppercase tracking-widest text-sm hover:bg-white hover:text-blue-600 transition-all shadow-xl">
                 Explore Programs
               </button>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Theme Categories (Outdoors, Food, Culture Style) */}
      <section className="max-w-7xl mx-auto px-6 py-32">
        <div className="mb-16">
           <h2 className="text-4xl font-black text-slate-900 tracking-tighter italic uppercase">Find things to learn</h2>
           <p className="text-slate-500 mt-2">당신이 꿈꾸는 해외 학습 테마를 선택하세요.</p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
           {[
             { title: "STEM", img: "https://images.unsplash.com/photo-1518152006812-edab29b069ac?q=80&w=400&auto=format&fit=crop", icon: "🔭" },
             { title: "Business", img: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=400&auto=format&fit=crop", icon: "📊" },
             { title: "Culture", img: "https://images.unsplash.com/photo-1467269204594-9661b134dd2b?q=80&w=400&auto=format&fit=crop", icon: "🏛️" },
             { title: "Nature", img: "https://images.unsplash.com/photo-1502082553245-f0bc5a6f7770?q=80&w=400&auto=format&fit=crop", icon: "🌿" }
           ].map((cat, i) => (
             <div key={i} className="group relative aspect-[4/5] rounded-[2.5rem] overflow-hidden cursor-pointer shadow-lg">
                <img src={cat.img} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" alt={cat.title} />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                <div className="absolute bottom-8 left-8 text-white">
                   <span className="text-2xl mb-2 block">{cat.icon}</span>
                   <h4 className="text-xl font-black tracking-tight uppercase italic">{cat.title}</h4>
                </div>
             </div>
           ))}
        </div>
      </section>

      {/* 3. Popular Destinations Grid */}
      <section className="bg-slate-50 py-32 rounded-[5rem] mx-4 mb-32">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
             <div className="max-w-xl">
                <span className="text-blue-600 font-black uppercase tracking-[0.4em] text-[10px] mb-4 block">Recommended Trips</span>
                <h3 className="text-5xl font-black tracking-tighter leading-tight italic uppercase">Popular <br />Destination</h3>
             </div>
             <button className="text-xs font-black uppercase tracking-widest text-slate-400 hover:text-blue-600 underline underline-offset-8 transition-colors">View all destinations ↗</button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
             {destinations.map((dest, i) => (
               <div key={i} className="group bg-white rounded-[3.5rem] overflow-hidden shadow-xl shadow-slate-200/50 border border-slate-50 transition-all duration-500 hover:-translate-y-4">
                  <div className="h-64 relative overflow-hidden">
                     <img src={dest.img} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" alt={dest.title} />
                     <div className="absolute top-6 left-6">
                        <span className="bg-blue-600 text-white text-[9px] font-black px-3 py-1 rounded-full uppercase italic">{dest.badge}</span>
                     </div>
                  </div>
                  <div className="p-10 space-y-6">
                     <div>
                        <h4 className="text-2xl font-black text-slate-900 tracking-tight">{dest.title}</h4>
                        <p className="text-[11px] font-black text-blue-600 uppercase tracking-widest mt-1">{dest.program}</p>
                     </div>
                     <div className="flex justify-between items-center pt-6 border-t border-slate-50">
                        <span className="text-[10px] font-black text-slate-400 uppercase">{dest.duration}</span>
                        <span className="text-xl font-black text-slate-900">{dest.price}</span>
                     </div>
                  </div>
               </div>
             ))}
          </div>
        </div>
      </section>

      {/* 4. Why Choose Section (Awarded by Travelers choice style) */}
      <section className="max-w-7xl mx-auto px-6 py-32 grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
         <div className="bg-green-600/10 p-16 lg:p-24 rounded-[5rem] relative overflow-hidden">
            <h2 className="text-5xl lg:text-7xl font-black tracking-tighter leading-[0.9] italic uppercase text-green-700 mb-12">
               AWARDED BY <br />
               STUDENTS <br />
               CHOICE 2025
            </h2>
            <p className="text-green-800 text-lg leading-relaxed italic max-w-sm mb-12">
               "실제 참가자 만족도 98.7% <br />
               가장 안전하고 교육적인 어학연수 플랫폼 1위 선정."
            </p>
            <button className="px-12 py-5 bg-green-700 text-white rounded-3xl font-black uppercase tracking-widest hover:bg-slate-900 transition-all shadow-2xl">
              See the winners ↗
            </button>
            <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-green-200/50 rounded-full blur-3xl"></div>
         </div>

         <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {features.map((f, i) => (
              <div key={i} className="p-10 bg-white border border-slate-100 rounded-[3rem] shadow-lg hover:shadow-2xl hover:border-blue-600 transition-all group">
                 <div className="w-16 h-16 bg-slate-50 rounded-2xl flex items-center justify-center text-3xl mb-8 group-hover:bg-blue-50 group-hover:rotate-12 transition-all">
                    {f.icon}
                 </div>
                 <h4 className="text-xl font-black text-slate-900 mb-3 tracking-tight">{f.title}</h4>
                 <p className="text-sm text-slate-400 leading-relaxed italic">{f.desc}</p>
              </div>
            ))}
         </div>
      </section>

      {/* 5. Experience Section (Travel Made Simple style) */}
      <section className="bg-slate-900 text-white py-32 rounded-t-[5rem]">
        <div className="max-w-7xl mx-auto px-6 flex flex-col lg:flex-row gap-20 items-center">
           <div className="lg:w-1/2 space-y-10">
              <h3 className="text-5xl lg:text-7xl font-black tracking-tighter italic uppercase leading-[0.9]">
                 LEARNING <br /> MADE SIMPLE, <br />
                 <span className="text-blue-500">MEMORIES</span> <br />
                 LASTING.
              </h3>
              <p className="text-slate-400 text-lg leading-relaxed max-w-lg">
                 복잡한 비자 발급부터 숙소 선정, 현지 튜터 매칭까지 AI 멘토 아카데미가 원스톱으로 해결해드립니다. 
                 당신은 오직 '경험'에만 집중하세요.
              </p>
              <div className="pt-8 flex gap-4">
                 <button className="px-12 py-5 bg-white text-slate-900 rounded-[2rem] font-black uppercase tracking-widest hover:bg-blue-600 hover:text-white transition-all shadow-2xl">
                    Get started now
                 </button>
              </div>
           </div>
           
           <div className="lg:w-1/2 grid grid-cols-2 gap-6 relative">
              <div className="aspect-[3/4] rounded-[3rem] overflow-hidden translate-y-12">
                 <img src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=600&auto=format&fit=crop" className="w-full h-full object-cover" alt="Student Life" />
              </div>
              <div className="aspect-[3/4] rounded-[3rem] overflow-hidden">
                 <img src="https://images.unsplash.com/photo-1544717297-fa154daaf544?q=80&w=600&auto=format&fit=crop" className="w-full h-full object-cover" alt="City View" />
              </div>
              <div className="absolute -bottom-10 -right-10 bg-blue-600 p-8 rounded-[3rem] shadow-2xl animate-bounce-slow max-w-[200px]">
                 <p className="text-[10px] font-black text-white/50 uppercase tracking-widest mb-2">Success Story</p>
                 <p className="font-bold text-sm leading-tight text-white">"시드니에서 배운 해양 생물학이 제 진로를 결정했어요!"</p>
              </div>
           </div>
        </div>
      </section>

      {/* 6. Language Focus Section (Inspired by Zaban Sara) */}
      <section className="max-w-7xl mx-auto px-6 py-40">
        <div className="text-center mb-24 space-y-4">
           <h3 className="text-sm font-black text-blue-600 uppercase tracking-[0.5em]">Academic Excellence</h3>
           <h4 className="text-5xl lg:text-7xl font-black tracking-tighter italic uppercase">Intensive Language Courses</h4>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
           {[
             { title: "IELTS Mastery", level: "Band 6.5 - 8.0", desc: "영국 및 호주 명문대 진학을 위한 공인 인증 과정입니다.", img: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?q=80&w=400&auto=format&fit=crop" },
             { title: "TOEFL Intensive", level: "Score 100+", desc: "북미 명문대 입학 사정관들이 선호하는 심화 아카데믹 영어.", img: "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?q=80&w=400&auto=format&fit=crop" },
             { title: "Business English", level: "Corporate Ready", desc: "글로벌 테크 기업 인턴십과 연계된 실전 비즈니스 영어.", img: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=400&auto=format&fit=crop" }
           ].map((course, i) => (
             <div key={i} className="group flex flex-col h-full bg-white rounded-[4rem] p-10 border border-slate-100 hover:border-blue-600 hover:shadow-2xl transition-all duration-500">
                <div className="aspect-video rounded-[2.5rem] overflow-hidden mb-10">
                   <img src={course.img} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700" alt={course.title} />
                </div>
                <div className="flex-1 space-y-4">
                   <div className="flex justify-between items-center">
                      <h5 className="text-2xl font-black tracking-tight">{course.title}</h5>
                      <span className="text-[10px] font-black text-blue-600 bg-blue-50 px-3 py-1 rounded-full">{course.level}</span>
                   </div>
                   <p className="text-slate-500 text-sm leading-relaxed italic">{course.desc}</p>
                </div>
                <button className="mt-12 w-full py-5 bg-slate-900 text-white rounded-3xl font-black uppercase tracking-widest text-xs hover:bg-blue-600 transition-all">
                  Informasi Lebih Lanjut ↗
                </button>
             </div>
           ))}
        </div>
      </section>
    </div>
  );
};

export default AbroadDetail;
