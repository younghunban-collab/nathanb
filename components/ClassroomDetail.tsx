
import React, { useState } from 'react';

const ClassroomDetail: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'summary' | 'quiz' | 'docs'>('summary');
  const [chatType, setChatType] = useState<'mentor' | 'peer'>('mentor');

  // Avatar & Points Data (Updated per user request)
  const userData = {
    avatar: {
      level: 12,
      status: "초등기",
      icon: "👶",
      name: "Minty",
      exp: 780,
      maxExp: 1000
    },
    points: "45,800 MP",
    nextLesson: {
      time: "Today, 18:00",
      mentor: "Kevin Lee"
    },
    aiInsights: [
      {
        title: "감사 노트 작성 완료",
        desc: "+150 MP 보너스 획득",
        time: "2시간 전",
        icon: "✨"
      },
      {
        title: "AI 세특 보고서 초안 도착",
        desc: "'기후 변화' 주제 관련 보고서",
        time: "어제",
        icon: "📄"
      }
    ]
  };

  const aiSummary = {
    title: "오늘의 멘토링: 2028 대입 개편과 나만의 로드맵",
    keyPoints: [
      "L2E (Learn to Earn) 보상 모델의 이해와 활용 방법",
      "세특(세부능력 및 특기사항) 자동 생성을 위한 핵심 키워드 추출",
      "나의 아바타를 성인기로 진화시키기 위한 다음 단계 과제",
      "심리 분석을 통한 현재 정서 상태 피드백 (긍정적/의욕적)"
    ],
    summaryText: "오늘은 대입 입시의 불확실성을 극복하기 위한 '나만의 USP(독창적 강점)'를 찾는 시간을 가졌습니다. AI는 학생의 답변에서 '창의적 문제 해결 능력'과 '기술에 대한 관심'을 핵심 키워드로 추출했으며, 이를 기반으로 생물학적 관점의 탐구 보고서 초안을 작성했습니다."
  };

  const quizItems = Array.from({ length: 10 }, (_, i) => ({
    id: i + 1,
    question: `Q${i + 1}. L2E 보상 모델에서 공부를 통해 얻을 수 있는 것은 무엇인가요?`,
    options: ["고통", "포인트 및 경제적 보상", "단순 점수", "아무것도 없음"],
    answer: 1
  }));

  const calendarDays = Array.from({ length: 31 }, (_, i) => ({
    day: i + 1,
    attended: [3, 5, 10, 12, 17, 19, 24].includes(i + 1),
    today: i + 1 === 24
  }));

  return (
    <div className="bg-[#F3F6F9] min-h-screen pb-20">
      <div className="max-w-[1600px] mx-auto px-6 py-8 flex flex-col lg:flex-row gap-8">
        
        {/* Left Sidebar: Avatar, Points, Next Lesson, AI Insight (Updated) */}
        <div className="lg:w-80 flex-shrink-0 space-y-6">
          {/* 1. My Avatar Card */}
          <div className="bg-white rounded-[2.5rem] p-8 shadow-xl shadow-slate-200/50 border border-white relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-4">
               <span className="bg-blue-600 text-white text-[9px] font-black px-2 py-0.5 rounded-full uppercase italic tracking-tighter">Lv.{userData.avatar.level} {userData.avatar.status}</span>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-24 h-24 rounded-full bg-blue-50 border-4 border-blue-200 flex items-center justify-center mb-4 text-5xl group-hover:scale-110 transition-transform">
                {userData.avatar.icon}
              </div>
              <h3 className="text-xl font-black text-slate-900">{userData.avatar.name}</h3>
              <div className="w-full mt-6 space-y-2">
                <div className="flex justify-between text-[10px] font-black text-slate-400 uppercase tracking-widest">
                  <span>EXP Progress</span>
                  <span>{userData.avatar.exp} / {userData.avatar.maxExp}</span>
                </div>
                <div className="w-full h-1.5 bg-slate-100 rounded-full overflow-hidden">
                  <div className="h-full bg-blue-600" style={{ width: `${(userData.avatar.exp / userData.avatar.maxExp) * 100}%` }}></div>
                </div>
              </div>
            </div>
          </div>

          {/* 2. Available Points Card */}
          <div className="bg-slate-900 rounded-[2rem] p-6 text-white shadow-2xl">
            <p className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] mb-2">Available Points</p>
            <div className="flex items-end justify-between">
              <p className="text-3xl font-black">{userData.points}</p>
              <button className="text-[10px] font-bold text-blue-400 underline underline-offset-4 hover:text-blue-300 transition-colors">포인트 샵 가기</button>
            </div>
          </div>

          {/* 3. Next Lesson Card */}
          <div className="bg-white rounded-[2rem] p-6 shadow-xl shadow-slate-200/50 border border-white">
            <p className="text-[10px] font-black text-blue-600 uppercase tracking-[0.2em] mb-4">Next Lesson</p>
            <div className="space-y-4">
              <div>
                <p className="text-sm font-black text-slate-900">{userData.nextLesson.time}</p>
                <p className="text-[11px] text-slate-400 font-bold">with Mentor {userData.nextLesson.mentor}</p>
              </div>
              <button className="w-full py-3 bg-blue-600 text-white rounded-xl text-xs font-black uppercase tracking-widest hover:bg-blue-700 transition-all shadow-lg shadow-blue-600/20 active:scale-95">
                강의실 입장
              </button>
            </div>
          </div>

          {/* 4. Recent Learning Analysis (AI Insight) */}
          <div className="bg-white rounded-[2.5rem] p-6 shadow-xl shadow-slate-200/50 border border-white">
            <h4 className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] mb-6 px-2">최근 학습 분석 (AI Insight)</h4>
            <div className="space-y-6">
              {userData.aiInsights.map((insight, idx) => (
                <div key={idx} className="flex gap-4 group">
                  <div className="w-10 h-10 bg-slate-50 rounded-xl flex items-center justify-center text-lg border border-slate-100 group-hover:bg-blue-50 group-hover:border-blue-100 transition-colors">
                    {insight.icon}
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-xs font-black text-slate-900 mb-0.5 truncate">{insight.title}</p>
                    <p className="text-[10px] text-slate-400 font-bold mb-1 truncate">{insight.desc}</p>
                    <span className="text-[9px] font-bold text-slate-300 uppercase tracking-tighter">{insight.time}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Center: Video & AI Content (Ref: Screenshot 1 & 2) */}
        <div className="flex-1 space-y-8">
          {/* Main Video Lecture Area */}
          <div className="bg-slate-900 rounded-[3.5rem] overflow-hidden shadow-2xl relative aspect-video group">
            <img src="https://images.unsplash.com/photo-1544717297-fa154daaf544?q=80&w=1200&auto=format&fit=crop" className="w-full h-full object-cover opacity-60" alt="Mentor Kevin" />
            <div className="absolute inset-0 flex items-center justify-center">
              <button className="w-20 h-20 bg-blue-600 rounded-full flex items-center justify-center text-white shadow-2xl shadow-blue-600/40 hover:scale-110 transition-transform">
                <svg className="w-8 h-8 fill-current" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>
              </button>
            </div>
            <div className="absolute bottom-10 left-10 right-10 flex justify-between items-center text-white z-20">
               <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-white/20 backdrop-blur-md flex items-center justify-center border border-white/20">
                    <img src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=100&auto=format&fit=crop" className="w-full h-full object-cover rounded-2xl" alt="" />
                  </div>
                  <div>
                    <p className="text-sm font-black">Mentor Kevin Lee</p>
                    <p className="text-[10px] font-bold text-blue-400 tracking-widest uppercase">1:1 Live Mentoring</p>
                  </div>
               </div>
               <div className="flex gap-4">
                 <button className="p-3 bg-white/10 backdrop-blur-md rounded-xl hover:bg-white/20 transition-colors">📷</button>
                 <button className="p-3 bg-white/10 backdrop-blur-md rounded-xl hover:bg-white/20 transition-colors">🎤</button>
                 <button className="px-6 py-3 bg-red-500 rounded-xl font-black text-xs uppercase tracking-widest hover:bg-red-600 transition-all">Leave</button>
               </div>
            </div>
          </div>

          {/* AI Content & Quiz Tabs */}
          <div className="bg-white rounded-[3.5rem] p-10 shadow-xl shadow-slate-200/50 border border-white">
            <div className="flex border-b border-slate-100 mb-10 gap-10">
              {['AI Summary', 'Quiz (10 Problems)', 'Documents'].map((tab, i) => (
                <button 
                  key={i} 
                  onClick={() => setActiveTab(i === 0 ? 'summary' : i === 1 ? 'quiz' : 'docs')}
                  className={`pb-4 text-sm font-black transition-all border-b-2 ${activeTab === (i === 0 ? 'summary' : i === 1 ? 'quiz' : 'docs') ? 'border-blue-600 text-slate-900' : 'border-transparent text-slate-300 hover:text-slate-500'}`}
                >
                  {tab}
                </button>
              ))}
            </div>

            {activeTab === 'summary' && (
              <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
                <h4 className="text-2xl font-black text-slate-900 mb-6 italic tracking-tight">{aiSummary.title}</h4>
                <p className="text-slate-500 text-sm leading-relaxed mb-8">{aiSummary.summaryText}</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {aiSummary.keyPoints.map((point, i) => (
                    <div key={i} className="flex items-start gap-4 p-5 bg-slate-50 rounded-2xl border border-slate-100 group hover:border-blue-200 transition-all">
                       <span className="text-blue-600 font-black text-xs mt-1">0{i+1}</span>
                       <p className="text-sm font-bold text-slate-700">{point}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'quiz' && (
              <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
                <div className="p-6 bg-blue-50 rounded-3xl border border-blue-100 flex items-center justify-between">
                   <div>
                      <p className="text-sm font-black text-blue-600 uppercase mb-1">Today's Challenge</p>
                      <h5 className="text-lg font-black text-slate-900">10가지 입시 전략 퀴즈 풀기</h5>
                   </div>
                   <span className="text-2xl font-black text-blue-600">0/10</span>
                </div>
                <div className="space-y-4 max-h-[400px] overflow-y-auto pr-2 custom-scrollbar">
                  {quizItems.map((q) => (
                    <div key={q.id} className="p-8 bg-white border border-slate-100 rounded-[2.5rem] space-y-4">
                       <p className="font-bold text-slate-900">{q.question}</p>
                       <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                         {q.options.map((opt, idx) => (
                           <button key={idx} className="p-4 border border-slate-100 rounded-2xl text-xs font-bold text-slate-600 text-left hover:border-blue-600 hover:bg-blue-50 transition-all">
                             {idx + 1}. {opt}
                           </button>
                         ))}
                       </div>
                    </div>
                  ))}
                </div>
                <button className="w-full py-5 bg-slate-900 text-white rounded-3xl font-black uppercase tracking-widest hover:bg-blue-600 transition-all">퀴즈 제출하고 포인트 받기 ↗</button>
              </div>
            )}
          </div>
        </div>

        {/* Right Sidebar: Calendar & Chat (Ref: Screenshot 3 & 4) */}
        <div className="lg:w-96 flex-shrink-0 space-y-8">
          {/* Attendance Calendar */}
          <div className="bg-white rounded-[2.5rem] p-8 shadow-xl shadow-slate-200/50 border border-white">
            <div className="flex justify-between items-center mb-6">
              <h4 className="font-black text-slate-900">Attendance</h4>
              <span className="text-[10px] font-bold text-slate-400">MARCH 2025</span>
            </div>
            <div className="grid grid-cols-7 gap-2">
              {["S", "M", "T", "W", "T", "F", "S"].map(d => <span key={d} className="text-[10px] font-black text-slate-300 text-center">{d}</span>)}
              {calendarDays.map((d) => (
                <div 
                  key={d.day} 
                  className={`aspect-square flex items-center justify-center rounded-xl text-[10px] font-bold transition-all ${d.today ? 'bg-blue-600 text-white ring-4 ring-blue-100' : d.attended ? 'bg-green-50 text-green-600 border border-green-100' : 'bg-slate-50 text-slate-400'}`}
                >
                  {d.day}
                  {d.attended && <span className="absolute -top-1 -right-1 w-1.5 h-1.5 bg-green-500 rounded-full"></span>}
                </div>
              ))}
            </div>
            <p className="mt-6 text-[10px] font-bold text-slate-400 text-center">이번 달 총 7회 수업 출석 완료!</p>
          </div>

          {/* Chat System (Ref: Screenshot 3 & 4) */}
          <div className="bg-white rounded-[2.5rem] overflow-hidden shadow-xl shadow-slate-200/50 border border-white flex flex-col h-[500px]">
            <div className="p-6 bg-slate-900 text-white flex justify-between items-center">
               <h4 className="font-black tracking-tight">Real-time Chat</h4>
               <div className="flex gap-2 bg-white/10 p-1 rounded-xl">
                 <button 
                  onClick={() => setChatType('mentor')}
                  className={`px-3 py-1.5 text-[9px] font-black uppercase rounded-lg transition-all ${chatType === 'mentor' ? 'bg-blue-600' : 'hover:bg-white/10'}`}
                 >Mentor</button>
                 <button 
                  onClick={() => setChatType('peer')}
                  className={`px-3 py-1.5 text-[9px] font-black uppercase rounded-lg transition-all ${chatType === 'peer' ? 'bg-blue-600' : 'hover:bg-white/10'}`}
                 >Peers</button>
               </div>
            </div>
            
            <div className="flex-1 overflow-y-auto p-6 space-y-4 bg-slate-50/50 custom-scrollbar">
               {chatType === 'mentor' ? (
                 <>
                   <div className="flex gap-3">
                      <img src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=50&auto=format&fit=crop" className="w-8 h-8 rounded-full" alt="" />
                      <div className="bg-white p-3 rounded-2xl rounded-tl-none shadow-sm border border-slate-100">
                        <p className="text-xs text-slate-700 leading-relaxed truncate font-bold text-blue-600 mb-1">Mentor Kevin Lee</p>
                        <p className="text-xs text-slate-700 leading-relaxed">오늘 수업 태도가 아주 좋네요! 질문한 내용에 대한 답변을 AI가 분석 중이니 곧 리포트로 확인할 수 있을 거예요.</p>
                      </div>
                   </div>
                   <div className="flex gap-3 justify-end">
                      <div className="bg-blue-600 p-3 rounded-2xl rounded-tr-none text-white shadow-lg shadow-blue-600/20">
                        <p className="text-xs">감사합니다 멘토님! 포인트는 언제 들어오나요?</p>
                      </div>
                   </div>
                 </>
               ) : (
                 <>
                   <div className="text-center py-2">
                      <span className="text-[10px] font-black text-slate-300 uppercase tracking-widest bg-slate-100 px-3 py-1 rounded-full">Global Peer Chat</span>
                   </div>
                   {[
                     { name: "Jake", text: "방금 보스 레이드 깼는데 포인트 대박!" },
                     { name: "Rebecca", text: "다들 세특 보고서 주제 뭐로 잡았어?" },
                     { name: "Michael", text: "난 기후 변화! 멘토님이 아이디어 주셨어." }
                   ].map((c, i) => (
                    <div key={i} className="flex gap-3">
                      <div className="w-8 h-8 rounded-full bg-slate-200 flex items-center justify-center font-black text-[10px] text-slate-500">{c.name[0]}</div>
                      <div className="bg-white p-3 rounded-2xl rounded-tl-none shadow-sm border border-slate-100">
                        <p className="text-[10px] font-black text-blue-600 mb-1">{c.name}</p>
                        <p className="text-xs text-slate-700">{c.text}</p>
                      </div>
                    </div>
                   ))}
                 </>
               )}
            </div>

            <div className="p-4 border-t border-slate-100 bg-white">
               <div className="relative">
                 <input type="text" placeholder="메시지를 입력하세요..." className="w-full bg-slate-50 border border-slate-100 rounded-2xl px-5 py-3 text-xs outline-none focus:ring-2 ring-blue-600/20" />
                 <button className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 bg-blue-600 text-white rounded-xl flex items-center justify-center">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 19l9-2-9-18-9 18 9 2zm0 0v-8" /></svg>
                 </button>
               </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default ClassroomDetail;
