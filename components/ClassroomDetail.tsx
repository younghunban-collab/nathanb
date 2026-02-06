
import React, { useState } from 'react';

const ClassroomDetail: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'summary' | 'quiz' | 'docs'>('summary');
  const [chatType, setChatType] = useState<'mentor' | 'peer'>('mentor');

  const userData = {
    avatar: { level: 12, status: "초등기", icon: "👶", name: "Minty", exp: 780, maxExp: 1000 },
    points: "45,800 MP",
    nextLesson: { time: "Today, 18:00", mentor: "Kevin Lee" },
    aiInsights: [
      { title: "감사 노트 작성 완료", desc: "+150 MP 보너스", time: "2시간 전", icon: "✨" },
      { title: "보고서 초안 도착", desc: "'기후 변화' 주제", time: "어제", icon: "📄" }
    ]
  };

  const aiSummary = {
    title: "오늘의 멘토링: 대입 개편 로드맵",
    keyPoints: [
      "L2E 보상 모델의 활용 방법",
      "세특 자동 생성을 위한 키워드 추출",
      "아바타 진화 다음 단계 과제",
      "정서 상태 피드백 (긍정적)"
    ],
    summaryText: "오늘은 대입 입시의 불확실성을 극복하기 위한 독창적 강점을 찾는 시간을 가졌습니다. AI는 학생의 답변에서 창의적 해결 능력을 핵심 키워드로 추출했습니다."
  };

  const quizItems = Array.from({ length: 5 }, (_, i) => ({
    id: i + 1,
    question: `Q${i + 1}. L2E 보상 모델에서 공부를 통해 얻는 보상은?`,
    options: ["고통", "포인트 및 경제적 보상", "단순 점수", "없음"],
    answer: 1
  }));

  const calendarDays = Array.from({ length: 31 }, (_, i) => ({
    day: i + 1,
    attended: [3, 5, 10, 12, 17, 19, 24].includes(i + 1),
    today: i + 1 === 24
  }));

  return (
    <div className="bg-[#F3F6F9] min-h-screen pb-10">
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 py-6 flex flex-col lg:flex-row gap-6 lg:gap-8">
        
        {/* Sidebar 1: User & Points - Stacks on top on Mobile */}
        <div className="w-full lg:w-72 xl:w-80 flex-shrink-0 space-y-6">
          <div className="bg-white rounded-[2rem] p-6 md:p-8 shadow-sm border border-white flex flex-row lg:flex-col items-center gap-6 lg:gap-4">
            <div className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-blue-50 flex items-center justify-center text-4xl border-2 border-blue-100">
              {userData.avatar.icon}
            </div>
            <div className="flex-1 text-left lg:text-center w-full">
              <h3 className="text-lg font-black text-slate-900">{userData.avatar.name}</h3>
              <p className="text-[10px] font-black text-blue-600 uppercase tracking-widest mt-1">Lv.{userData.avatar.level} {userData.avatar.status}</p>
              <div className="w-full mt-4 h-1.5 bg-slate-100 rounded-full overflow-hidden">
                <div className="h-full bg-blue-600" style={{ width: '78%' }}></div>
              </div>
            </div>
          </div>

          <div className="bg-slate-900 rounded-[1.5rem] p-6 text-white shadow-xl flex justify-between items-center lg:block">
            <p className="text-[9px] font-black text-slate-400 uppercase tracking-widest lg:mb-2">Available Balance</p>
            <p className="text-2xl font-black">{userData.points}</p>
          </div>

          <div className="hidden lg:block bg-white rounded-[1.5rem] p-6 shadow-sm border border-white">
            <p className="text-[9px] font-black text-blue-600 uppercase mb-4">AI Insights</p>
            <div className="space-y-4">
              {userData.aiInsights.map((insight, idx) => (
                <div key={idx} className="flex gap-3">
                  <span className="text-lg">{insight.icon}</span>
                  <div className="min-w-0">
                    <p className="text-[11px] font-bold text-slate-900 truncate">{insight.title}</p>
                    <p className="text-[9px] text-slate-400">{insight.time}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Center: Video & Content */}
        <div className="flex-1 space-y-6">
          <div className="bg-slate-900 rounded-[2rem] md:rounded-[3rem] overflow-hidden shadow-2xl relative aspect-video">
            <img src="https://images.unsplash.com/photo-1544717297-fa154daaf544?q=80&w=1200&auto=format&fit=crop" className="w-full h-full object-cover opacity-60" alt="Video" />
            <div className="absolute inset-0 flex items-center justify-center">
              <button className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center text-white shadow-xl hover:scale-105 transition-all">
                <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>
              </button>
            </div>
            <div className="absolute bottom-4 md:bottom-10 left-4 md:left-10 text-white flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-white/20 backdrop-blur-md"></div>
              <div>
                <p className="text-xs font-black">Mentor Kevin Lee</p>
                <p className="text-[8px] uppercase text-blue-400 font-bold">Live Mentoring</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-[2rem] md:rounded-[3rem] p-6 md:p-10 shadow-sm border border-white">
            <div className="flex border-b border-slate-50 mb-6 md:mb-10 gap-6 md:gap-10 overflow-x-auto no-scrollbar">
              {['AI Summary', 'Quiz', 'Docs'].map((tab, i) => (
                <button 
                  key={i} 
                  onClick={() => setActiveTab(i === 0 ? 'summary' : i === 1 ? 'quiz' : 'docs')}
                  className={`pb-3 text-xs md:text-sm font-black whitespace-nowrap border-b-2 transition-all ${activeTab === (i === 0 ? 'summary' : i === 1 ? 'quiz' : 'docs') ? 'border-blue-600 text-slate-900' : 'border-transparent text-slate-300'}`}
                >
                  {tab}
                </button>
              ))}
            </div>

            {activeTab === 'summary' && (
              <div className="animate-in fade-in duration-500">
                <h4 className="text-lg md:text-xl font-black mb-4 tracking-tight">{aiSummary.title}</h4>
                <p className="text-slate-500 text-xs md:text-sm leading-relaxed mb-6">{aiSummary.summaryText}</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {aiSummary.keyPoints.map((point, i) => (
                    <div key={i} className="p-4 bg-slate-50 rounded-xl border border-slate-100 flex gap-3 items-start">
                       <span className="text-blue-600 font-black text-[10px] mt-0.5">0{i+1}</span>
                       <p className="text-xs font-bold text-slate-700">{point}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}
            
            {activeTab === 'quiz' && (
              <div className="space-y-4">
                 {quizItems.map(q => (
                   <div key={q.id} className="p-4 bg-slate-50 rounded-2xl border border-slate-100">
                      <p className="text-xs font-bold mb-3">{q.question}</p>
                      <div className="grid grid-cols-1 gap-2">
                         {q.options.map((o, idx) => (
                           <button key={idx} className="p-3 bg-white rounded-lg text-[10px] font-bold text-left border border-slate-200">
                             {o}
                           </button>
                         ))}
                      </div>
                   </div>
                 ))}
              </div>
            )}
          </div>
        </div>

        {/* Sidebar 2: Calendar & Chat - Stacks bottom on Mobile */}
        <div className="w-full lg:w-80 xl:w-96 flex-shrink-0 space-y-6">
          <div className="bg-white rounded-[2rem] p-6 shadow-sm border border-white">
            <h4 className="font-black text-xs text-slate-900 mb-4 uppercase tracking-widest text-center">Calendar</h4>
            <div className="grid grid-cols-7 gap-1">
              {["S", "M", "T", "W", "T", "F", "S"].map(d => <span key={d} className="text-[9px] font-black text-slate-300 text-center">{d}</span>)}
              {calendarDays.slice(0, 31).map(d => (
                <div key={d.day} className={`aspect-square flex items-center justify-center rounded-lg text-[9px] font-bold ${d.today ? 'bg-blue-600 text-white' : d.attended ? 'bg-green-50 text-green-600' : 'text-slate-300'}`}>
                  {d.day}
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-[2rem] overflow-hidden shadow-sm border border-white flex flex-col h-[400px]">
            <div className="p-4 bg-slate-900 text-white flex justify-between items-center shrink-0">
               <h4 className="text-xs font-black">Chat</h4>
               <button onClick={() => setChatType(chatType === 'mentor' ? 'peer' : 'mentor')} className="text-[9px] font-bold bg-white/10 px-2 py-1 rounded-md">Switch</button>
            </div>
            <div className="flex-1 overflow-y-auto p-4 space-y-3 bg-slate-50/50">
               <div className="flex gap-2">
                  <div className="w-7 h-7 bg-slate-200 rounded-full shrink-0"></div>
                  <div className="bg-white p-2.5 rounded-xl rounded-tl-none border border-slate-100 text-[11px] leading-relaxed">
                    안녕하세요! 오늘 수업 즐거우셨나요?
                  </div>
               </div>
            </div>
            <div className="p-3 bg-white border-t border-slate-100 shrink-0">
               <input type="text" placeholder="Type here..." className="w-full bg-slate-50 px-4 py-2.5 rounded-xl text-[10px] outline-none" />
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default ClassroomDetail;
