
import React from 'react';

const MentorSection: React.FC = () => {
  const mentors = [
    {
      name: "Daudet Afroseth",
      title: "Senior Full-Stack Mentor",
      description: "10년 이상의 실무 경력과 AI 교육 전문성을 보유한 멘토입니다. 복잡한 시스템 아키텍처부터 프론트엔드 최적화까지 실전 노하우를 전수합니다.",
      img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=800&auto=format&fit=crop"
    },
    {
      name: "Amelia Faye",
      title: "AI & Data Strategy",
      description: "학생 개개인의 데이터 분석을 통해 최적의 학습 로드맵을 설계합니다. 데이터 기반의 성취도 분석으로 효율적인 학습 방향을 제시합니다.",
      img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=800&auto=format&fit=crop"
    },
    {
      name: "Kevin Lee",
      title: "Global Communication",
      description: "북미 명문대 출신의 멘토진이 실전 영어와 입시 전략을 지도합니다. 글로벌 리더로서 필요한 커뮤니케이션 역량을 키워드립니다.",
      img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=800&auto=format&fit=crop"
    },
    {
      name: "Clara Santoso",
      title: "Academic Psychology",
      description: "심리 상담 자격을 보유한 멘토가 학생의 정서적 케어를 병행합니다. 학습 슬럼프 극복과 멘탈 관리를 통해 지속 가능한 성장을 돕습니다.",
      img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=800&auto=format&fit=crop"
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-6 py-12">
      <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-4">
        <div>
          <h2 className="text-4xl font-black text-slate-900 mb-4 tracking-tight uppercase italic">Expert Mentors</h2>
          <p className="text-slate-500 max-w-xl text-lg">단순한 강사가 아닌, 학생의 인생과 성장을 함께 설계하는 검증된 전문가 그룹입니다.</p>
        </div>
        <button className="px-8 py-3 bg-slate-100 hover:bg-slate-200 text-slate-900 rounded-2xl text-sm font-bold transition-all">
          전체 멘토 프로필 보기
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {mentors.map((mentor, i) => (
          <div key={i} className="group relative">
            <div className="aspect-[3/4] rounded-[2.5rem] overflow-hidden bg-slate-200 shadow-xl group-hover:shadow-2xl transition-all duration-500">
              <img 
                src={mentor.img} 
                alt={mentor.name} 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-in-out" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity"></div>
              
              <div className="absolute inset-0 p-8 flex flex-col justify-end">
                <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  <span className="inline-block text-[10px] font-black text-blue-400 mb-2 tracking-widest uppercase bg-blue-400/10 px-2 py-1 rounded-md backdrop-blur-sm">
                    {mentor.title}
                  </span>
                  <h3 className="text-2xl font-black text-white mb-3 tracking-tight">
                    {mentor.name}
                  </h3>
                  <p className="text-xs text-slate-300 leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100 line-clamp-3">
                    {mentor.description}
                  </p>
                </div>
                
                <div className="mt-6 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-200">
                   <button className="flex-1 py-2 bg-white text-slate-900 text-[10px] font-black rounded-xl hover:bg-blue-50 transition-colors uppercase">
                     Chat Now
                   </button>
                   <button className="w-10 h-10 flex items-center justify-center bg-white/10 backdrop-blur-md border border-white/20 text-white rounded-xl hover:bg-white/20 transition-colors">
                     <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" /></svg>
                   </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MentorSection;
