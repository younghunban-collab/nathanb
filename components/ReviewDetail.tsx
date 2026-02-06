
import React from 'react';
import { Language } from '../types';

interface ReviewDetailProps {
  lang: Language;
  onSignup: () => void;
}

const ReviewDetail: React.FC<ReviewDetailProps> = ({ lang, onSignup }) => {
  const menteeReviews = [
    {
      name: "Lee Min-ho",
      role: "High School Senior",
      avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=300&auto=format&fit=crop",
      rating: 5,
      date: "24-10-2024",
      title: lang === 'ko' ? "L2E 포인트로 학원비를 벌었어요!" : "Earned academy fees with L2E points!",
      content: lang === 'ko' ? "처음에는 단순히 화상 수업인 줄 알았는데, L2E(Learn to Earn) 시스템 덕분에 공부할 때마다 포인트가 쌓이는 게 너무 신기해요. 이번 달에는 쌓인 포인트로 편의점 기프티콘도 샀습니다. 아바타가 유아기에서 청소년기로 진화할 때마다 성취감이 엄청나요!" : "I thought it was just video classes, but thanks to L2E, points accumulate every time I study. I even bought a convenience store gifticon this month. The sense of achievement is huge every time my avatar evolves!",
      verified: true
    },
    {
      name: "Park Ji-su",
      role: "University Student",
      avatar: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?q=80&w=300&auto=format&fit=crop",
      rating: 5,
      date: "15-11-2024",
      title: lang === 'ko' ? "AI 세특 빌더는 정말 사기급입니다." : "AI Record Builder is amazing.",
      content: lang === 'ko' ? "멘토님과 수업 중에 나눈 대화가 AI 분석을 통해 완벽한 탐구 보고서 초안으로 만들어졌을 때 전율이 돋았습니다. 학교 생활기록부에 기재할 수 있는 구체적인 가이드까지 제공해줘서 대입 자소서 준비가 훨씬 수월해졌어요." : "I was thrilled when my conversation with the mentor turned into a perfect research report draft through AI. It provides specific guides for records, making college prep much easier.",
      verified: true
    },
    {
      name: "Kim Seo-yeon",
      role: "Elementary Student",
      avatar: "https://images.unsplash.com/photo-1510211691530-161c02a24f00?q=80&w=300&auto=format&fit=crop",
      rating: 4,
      date: "05-12-2024",
      title: lang === 'ko' ? "공부가 게임처럼 느껴져요." : "Studying feels like a game.",
      content: lang === 'ko' ? "데일리어택이랑 보스 레이드 퀴즈 대결이 너무 재밌어요. 예전에는 영어 공부가 고통이었는데, 이제는 제 아바타 아이템을 사기 위해 매일 접속하게 됩니다. 전국 로드맵 지도로 다른 친구들 상태도 볼 수 있어서 자극이 돼요." : "Daily attacks and boss raid quizzes are so fun. English used to be pain, but now I log in every day to buy avatar items. Seeing other friends on the roadmap map is stimulating.",
      verified: true
    }
  ];

  const mentorReviews = [
    {
      name: "Daudet Afroseth",
      role: "Senior Head Mentor",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=150&auto=format&fit=crop",
      rating: 5,
      date: "12-01-2025",
      title: lang === 'ko' ? "AI가 멘토의 효율을 30% 이상 높여줍니다." : "AI boosts mentor efficiency by over 30%.",
      content: lang === 'ko' ? "수업 내용을 AI가 실시간으로 분석해주니 멘토는 학생과의 정서적 교감에 더 집중할 수 있습니다. 특히 월별 정서 발달 리포트와 감정 분석 기능은 학부모 상담 시 매우 강력한 객관적 지표가 됩니다." : "Since AI analyzes class content in real-time, mentors can focus more on emotional connection. Monthly reports are powerful objective indicators for parents.",
      verified: true
    },
    {
      name: "Amelia Faye",
      role: "Admission Specialist",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=150&auto=format&fit=crop",
      rating: 5,
      date: "20-01-2025",
      title: lang === 'ko' ? "진정한 생태계(Ecosystem)의 실현." : "Realization of a true ecosystem.",
      content: lang === 'ko' ? "단순 교육 전달을 넘어 학생의 성장을 데이터로 가시화하는 시스템은 이 업계의 혁명입니다. L2E 모델 덕분에 학생들의 중도 탈락률이 거의 0%에 가깝다는 점이 멘토로서 가장 보람찬 포인트입니다." : "Visualizing student growth with data beyond simple teaching is a revolution. Thanks to L2E, the dropout rate is almost 0%, which is rewarding for mentors.",
      verified: true
    }
  ];

  return (
    <div className="bg-[#F8FAFC] min-h-screen pb-32">
      {/* 1. Header & Rating Summary */}
      <section className="bg-white border-b border-slate-100 py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col lg:flex-row justify-between items-start gap-16">
            <div className="space-y-6">
              <h1 className="text-6xl font-black tracking-tighter text-slate-900 uppercase italic">Reviews</h1>
              <div className="flex items-center gap-12">
                <div>
                  <p className="text-xs font-black text-slate-400 uppercase tracking-widest mb-2">Total Reviews</p>
                  <p className="text-5xl font-black text-slate-900">10.0k <span className="text-sm font-bold text-green-500 ml-2">↑ 21%</span></p>
                </div>
                <div className="h-16 w-[1px] bg-slate-100"></div>
                <div>
                  <p className="text-xs font-black text-slate-400 uppercase tracking-widest mb-2">Average Rating</p>
                  <div className="flex items-center gap-4">
                    <p className="text-5xl font-black text-slate-900">4.8</p>
                    <div className="flex text-yellow-400 text-xl">
                      {"★★★★★".split("").map((s, i) => <span key={i}>{s}</span>)}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full lg:w-96 space-y-3">
              {[5, 4, 3, 2, 1].map((star) => (
                <div key={star} className="flex items-center gap-4">
                  <span className="text-[10px] font-bold text-slate-400 w-4">{star}</span>
                  <div className="flex-1 h-1.5 bg-slate-100 rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-blue-600 rounded-full" 
                      style={{ width: `${star === 5 ? '85' : star === 4 ? '12' : '3'}%` }}
                    ></div>
                  </div>
                  <span className="text-[10px] font-bold text-slate-400 w-8">{star === 5 ? '8.5k' : star === 4 ? '1.2k' : '300'}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 2. Mentee Reviews Section */}
      <section className="max-w-7xl mx-auto px-6 mt-24">
        <div className="flex justify-between items-end mb-12">
          <div>
            <span className="text-blue-600 font-black uppercase tracking-[0.4em] text-[10px] mb-4 block">Voice of Mentees</span>
            <h2 className="text-5xl font-black text-slate-900 tracking-tighter">{lang === 'ko' ? '가장 솔직한 성장 기록' : 'Honest Growth Records'}</h2>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {menteeReviews.map((rev, i) => (
            <div key={i} className="bg-white p-10 rounded-[3rem] shadow-xl shadow-slate-200/20 border border-slate-50 flex flex-col justify-between group hover:-translate-y-2 transition-all duration-500">
              <div>
                <div className="flex justify-between items-start mb-8">
                  <div className="flex gap-4 items-center">
                    <img src={rev.avatar} className="w-14 h-14 rounded-2xl object-cover ring-4 ring-slate-50" alt="" />
                    <div>
                      <h4 className="font-black text-slate-900">{rev.name}</h4>
                      <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest">{rev.role}</p>
                    </div>
                  </div>
                  {rev.verified && (
                    <span className="bg-green-50 text-green-600 text-[10px] font-black px-3 py-1 rounded-full border border-green-100 uppercase italic tracking-tighter">Verified</span>
                  )}
                </div>
                <div className="flex text-yellow-400 mb-4 text-xs">{"★".repeat(rev.rating)}{"☆".repeat(5-rev.rating)}</div>
                <h5 className="text-lg font-black text-slate-900 mb-4 tracking-tight leading-tight group-hover:text-blue-600 transition-colors">"{rev.title}"</h5>
                <p className="text-slate-500 text-sm leading-relaxed mb-8">{rev.content}</p>
              </div>
              <div className="flex justify-between items-center pt-6 border-t border-slate-50">
                <span className="text-[10px] font-black text-slate-300 tracking-widest uppercase">{rev.date}</span>
                <div className="flex gap-2">
                   <button className="p-2 hover:bg-slate-100 rounded-xl transition-colors"><span className="text-sm">💬</span></button>
                   <button className="p-2 hover:bg-slate-100 rounded-xl transition-colors text-blue-600"><span className="text-sm">💙</span></button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 3. Mentor Reviews Section */}
      <section className="max-w-7xl mx-auto px-6 mt-32">
        <div className="bg-slate-900 rounded-[5rem] p-16 lg:p-24 relative overflow-hidden">
           <div className="relative z-10 flex flex-col lg:flex-row gap-24">
              <div className="lg:w-1/3">
                 <span className="text-blue-500 font-black uppercase tracking-[0.4em] text-[10px] mb-6 block">Behind the Scenes</span>
                 <h2 className="text-5xl font-black text-white tracking-tighter leading-[1.1] mb-8 italic">Mentor's <br />Perspective</h2>
                 <p className="text-slate-400 leading-relaxed text-sm">
                    {lang === 'ko' ? '학생들의 성장을 직접 설계하고 목격하는 멘토들의 경험담입니다. AI 도구가 어떻게 교육의 본질을 강화하는지 확인하세요.' : 'Stories from mentors who design and witness student growth. See how AI tools strengthen education essence.'}
                 </p>
                 <div className="mt-12 flex -space-x-3">
                    {[1,2,3,4].map(i => <img key={i} src={`https://i.pravatar.cc/100?u=mentor${i}`} className="w-12 h-12 rounded-full border-4 border-slate-900" alt="" />)}
                    <div className="w-12 h-12 rounded-full bg-blue-600 border-4 border-slate-900 flex items-center justify-center text-white text-[10px] font-black">+20</div>
                 </div>
              </div>
              <div className="lg:w-2/3 space-y-8">
                 {mentorReviews.map((rev, i) => (
                   <div key={i} className="bg-white/5 border border-white/10 p-12 rounded-[4rem] flex flex-col md:flex-row gap-12 hover:bg-white/10 transition-all group">
                      <div className="flex-shrink-0">
                         <img src={rev.avatar} className="w-24 h-24 rounded-[2rem] object-cover grayscale group-hover:grayscale-0 transition-all duration-500" alt="" />
                      </div>
                      <div className="space-y-4">
                         <div className="flex justify-between items-center">
                            <h4 className="text-xl font-black text-white">{rev.name}</h4>
                            <span className="text-[10px] font-black text-blue-400 uppercase tracking-widest">{rev.role}</span>
                         </div>
                         <div className="flex text-blue-500 text-xs">{"★".repeat(rev.rating)}</div>
                         <h5 className="text-lg font-bold text-white tracking-tight italic">"{rev.title}"</h5>
                         <p className="text-slate-400 text-sm leading-relaxed">{rev.content}</p>
                      </div>
                   </div>
                 ))}
              </div>
           </div>
           <div className="absolute top-0 right-0 w-1/2 h-full bg-blue-600/5 blur-[150px] -translate-y-1/2 translate-x-1/2"></div>
        </div>
      </section>

      {/* 4. Review CTA */}
      <section className="max-w-7xl mx-auto px-6 py-32 text-center">
         <h4 className="text-sm font-black text-slate-300 uppercase tracking-[0.5em] mb-12">Join Our Community</h4>
         <h3 className="text-6xl font-black text-slate-900 tracking-tighter italic mb-12">
           {lang === 'ko' ? <>준비되셨나요? <br /> 당신의 성공 스토리를 들려주세요.</> : <>Ready to Start Your <br />Success Story?</>}
         </h3>
         <button 
          onClick={onSignup}
          className="px-16 py-6 bg-slate-900 text-white rounded-[2rem] font-black uppercase tracking-widest hover:bg-blue-600 transition-all shadow-2xl active:scale-95"
         >
           Become a Success Member ↗
         </button>
      </section>
    </div>
  );
};

export default ReviewDetail;
