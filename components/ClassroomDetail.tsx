
import React, { useState, useRef, useEffect } from 'react';
import { Language } from '../types';

interface ClassroomDetailProps {
  lang: Language;
  onNavigate: (id: string) => void;
}

type ChatTab = 'all' | 'status' | 'messages' | 'settings';

const ClassroomDetail: React.FC<ClassroomDetailProps> = ({ lang, onNavigate }) => {
  const [isLessonStarted, setIsLessonStarted] = useState(false);
  const [chatTab, setChatTab] = useState<ChatTab>('all');
  const [activeTab, setActiveTab] = useState<'content' | 'summary' | 'quiz'>('content');
  
  // User Profile State
  const [userName, setUserName] = useState("박조이");
  const [userAvatar, setUserAvatar] = useState("👶");

  const localVideoRef = useRef<HTMLVideoElement>(null);
  const streamRef = useRef<MediaStream | null>(null);

  const startLesson = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ video: true, audio: true });
      streamRef.current = stream;
      if (localVideoRef.current) localVideoRef.current.srcObject = stream;
      setIsLessonStarted(true);
    } catch (err) {
      alert(lang === 'ko' ? "카메라 권한을 확인해주세요." : "Check camera permissions.");
    }
  };

  // Mock Members Data
  const onlineMembers = [
    { id: 1, name: "김철수", region: "서울", gender: "남", age: "18", status: "열공 중! 🔥", avatar: "👨‍💻", isFavorite: true },
    { id: 2, name: "이영희", region: "부산", gender: "여", age: "17", status: "수학 너무 어렵다..", avatar: "👩‍🎨", isFavorite: false },
    { id: 3, name: "David", region: "Guro", gender: "M", age: "19", status: "Coding is my life", avatar: "🧔", isFavorite: true },
    { id: 4, name: "Sarah", region: "NY", gender: "F", age: "18", status: "Happy Monday!", avatar: "👩‍🚀", isFavorite: false },
  ];

  const handleOpenChat = (member: any) => {
    // 실제 서비스라면 새 탭이나 팝업을 띄움
    window.open(`https://chat.joymaster.kr/room/${member.id}?target=${member.name}`, '_blank', 'width=400,height=600');
  };

  return (
    <div className="bg-[#F3F6F9] min-h-screen flex font-pretendard text-slate-900 overflow-hidden">
      
      {/* 1. LEFT COLUMN: MY STATUS & COMMUNITY CHAT */}
      <aside className="w-[380px] bg-white border-r border-slate-100 flex flex-col p-6 gap-6 shrink-0 overflow-hidden">
        
        {/* My Avatar & Level (Infant Stage) */}
        <div className="bg-slate-50 rounded-[2.5rem] p-6 border border-slate-100 shadow-sm space-y-4">
           <div className="flex items-center gap-4">
              <div className="w-20 h-20 bg-white rounded-[2rem] shadow-inner flex items-center justify-center text-4xl border border-slate-100 relative group overflow-hidden">
                 <span className="group-hover:scale-125 transition-transform">{userAvatar}</span>
                 <div className="absolute bottom-0 inset-x-0 bg-blue-600/10 text-[8px] font-black text-blue-600 text-center py-1">Lv.1 INFANT</div>
              </div>
              <div className="flex-1 space-y-1">
                 <div className="flex justify-between items-center">
                    <h4 className="text-lg font-black text-slate-900">{userName}</h4>
                    <button 
                      onClick={() => onNavigate('pointshop')}
                      className="px-3 py-1 bg-blue-600 text-white text-[9px] font-black rounded-full uppercase tracking-widest shadow-lg shadow-blue-600/20 hover:scale-110 transition-all"
                    >
                      Point Shop 🛒
                    </button>
                 </div>
                 <div className="space-y-1">
                    <div className="flex justify-between text-[10px] font-bold text-slate-400">
                       <span>Exp. Growth</span>
                       <span>12%</span>
                    </div>
                    <div className="h-2 w-full bg-slate-200 rounded-full overflow-hidden">
                       <div className="h-full bg-blue-600 w-[12%] rounded-full"></div>
                    </div>
                 </div>
              </div>
           </div>
        </div>

        {/* ACADEMY COMMUNITY CHAT (Main Feature) */}
        <div className="flex-1 flex flex-col bg-white border-2 border-blue-100 rounded-[3rem] overflow-hidden shadow-xl shadow-blue-600/5">
           
           {/* Chat Header & Filters */}
           <div className="p-6 bg-blue-50/50 border-b border-blue-100 space-y-4">
              <h3 className="text-sm font-black text-blue-600 uppercase tracking-widest flex items-center gap-2">
                 <span className="animate-pulse">●</span> Academy Community
              </h3>
              <div className="flex gap-2">
                 {['지역', '성별', '나이'].map(filter => (
                   <select key={filter} className="bg-white border border-slate-200 rounded-xl px-3 py-1.5 text-[10px] font-bold text-slate-500 outline-none hover:border-blue-300 transition-colors">
                      <option>{filter}</option>
                   </select>
                 ))}
              </div>
           </div>

           {/* Chat Content Area (Dynamic based on Tab) */}
           <div className="flex-1 overflow-y-auto p-4 custom-scrollbar">
              {chatTab === 'all' && (
                <div className="space-y-3 animate-in fade-in duration-300">
                   {onlineMembers.map(m => (
                     <div 
                       key={m.id} 
                       onClick={() => handleOpenChat(m)}
                       className="flex items-center gap-4 p-3 bg-slate-50 rounded-2xl border border-transparent hover:border-blue-200 hover:bg-white transition-all cursor-pointer group"
                     >
                        <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center text-xl shadow-sm">{m.avatar}</div>
                        <div className="flex-1">
                           <p className="text-xs font-black text-slate-800">{m.name}</p>
                           <p className="text-[9px] font-bold text-slate-400 uppercase tracking-tighter">{m.region} • {m.gender} • {m.age}세</p>
                        </div>
                        <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                     </div>
                   ))}
                </div>
              )}

              {chatTab === 'status' && (
                <div className="space-y-4 animate-in fade-in duration-300">
                   {onlineMembers.map(m => (
                     <div key={m.id} className="p-4 bg-blue-50/30 border border-blue-50 rounded-2xl space-y-2">
                        <div className="flex items-center gap-2">
                           <span className="text-xs">{m.avatar}</span>
                           <span className="text-[10px] font-black text-slate-900">{m.name}</span>
                        </div>
                        <p className="text-xs font-bold text-blue-700 italic">"{m.status}"</p>
                     </div>
                   ))}
                </div>
              )}

              {chatTab === 'messages' && (
                <div className="space-y-3 animate-in fade-in duration-300">
                   {onlineMembers.filter(m => m.isFavorite).map(m => (
                     <div key={m.id} className="p-4 bg-white border border-slate-100 rounded-2xl flex items-center justify-between group">
                        <div className="flex items-center gap-4">
                           <div className="relative">
                              <span className="text-2xl">{m.avatar}</span>
                              <span className="absolute -top-1 -right-1 text-[10px]">⭐</span>
                           </div>
                           <div className="text-xs font-black">1:1 Chat with {m.name}</div>
                        </div>
                        <div className="flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                           <button className="text-[10px] text-red-500 font-bold hover:underline">신고</button>
                           <button className="text-[10px] text-slate-400 font-bold hover:underline">나가기</button>
                        </div>
                     </div>
                   ))}
                </div>
              )}

              {chatTab === 'settings' && (
                <div className="p-4 space-y-6 animate-in fade-in duration-300">
                   <div className="space-y-2">
                      <label className="text-[9px] font-black text-slate-400 uppercase tracking-widest ml-2">Display Name</label>
                      <input 
                        type="text" 
                        value={userName} 
                        onChange={(e) => setUserName(e.target.value)}
                        className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-2 text-xs font-bold outline-none focus:ring-2 ring-blue-600/10"
                      />
                   </div>
                   <div className="space-y-2">
                      <label className="text-[9px] font-black text-slate-400 uppercase tracking-widest ml-2">Avatar Emoji</label>
                      <div className="flex gap-2">
                         {['👶', '👦', '🧑', '🧔', '🦁'].map(emoji => (
                           <button 
                            key={emoji} 
                            onClick={() => setUserAvatar(emoji)}
                            className={`w-10 h-10 rounded-xl flex items-center justify-center text-xl border-2 transition-all ${userAvatar === emoji ? 'border-blue-600 bg-blue-50' : 'border-slate-100 hover:bg-slate-50'}`}
                           >
                              {emoji}
                           </button>
                         ))}
                      </div>
                   </div>
                </div>
              )}
           </div>

           {/* Chat Footer: Points & Navigation */}
           <div className="shrink-0 bg-white border-t border-slate-100 p-6 space-y-6">
              <div className="flex justify-between items-center bg-slate-900 p-4 rounded-2xl shadow-lg">
                 <div className="flex items-center gap-3">
                    <span className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-sm shadow-lg shadow-blue-600/30">💰</span>
                    <span className="text-sm font-black text-white tracking-tight italic">45,800 MP</span>
                 </div>
                 <span className="text-[9px] font-black text-blue-400 uppercase tracking-widest">Balance</span>
              </div>

              <div className="flex justify-between items-center px-2">
                 {[
                   { id: 'all', label: '전체', icon: '👥' },
                   { id: 'status', label: '상태', icon: '💭' },
                   { id: 'messages', label: '쪽지', icon: '✉️' },
                   { id: 'settings', label: '설정', icon: '⚙️' }
                 ].map((btn) => (
                   <button 
                    key={btn.id}
                    onClick={() => setChatTab(btn.id as ChatTab)}
                    className={`flex flex-col items-center gap-1 transition-all ${chatTab === btn.id ? 'text-blue-600 scale-110' : 'text-slate-400 hover:text-slate-600'}`}
                   >
                      <span className="text-xl">{btn.icon}</span>
                      <span className="text-[9px] font-black uppercase tracking-tighter">{btn.label}</span>
                   </button>
                 ))}
              </div>
           </div>
        </div>
      </aside>

      {/* 2. CENTER COLUMN: VIDEO CLASSROOM */}
      <main className="flex-1 overflow-y-auto p-6 md:p-8 flex flex-col gap-8 custom-scrollbar">
        
        {/* Top Header Bar */}
        <div className="flex justify-between items-center bg-white/50 backdrop-blur-md p-4 rounded-3xl border border-white/60">
           <div className="flex items-center gap-4">
              <button className="p-2 hover:bg-white rounded-xl text-slate-400">←</button>
              <h2 className="text-lg font-black tracking-tight text-slate-800 uppercase italic">Digital Learning Space</h2>
           </div>
           <div className="flex items-center gap-3">
              <span className="text-[10px] font-black text-slate-400 bg-white px-3 py-1.5 rounded-full border border-slate-100">SESSION: #A0987</span>
              <button className="px-5 py-2 bg-slate-900 text-white rounded-xl text-[10px] font-black uppercase tracking-widest">Invite Fellow</button>
           </div>
        </div>

        {/* Video Session Window */}
        <div className="bg-white rounded-[3rem] p-6 shadow-xl shadow-slate-200/50 border border-white flex flex-col gap-6">
           <div className="relative aspect-video bg-slate-900 rounded-[2.5rem] overflow-hidden group">
              {!isLessonStarted ? (
                <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-10">
                   <div className="w-24 h-24 bg-white/10 backdrop-blur-md rounded-[2.5rem] flex items-center justify-center text-5xl mb-6 shadow-2xl border border-white/20 animate-pulse">🏛️</div>
                   <h3 className="text-2xl font-black text-white italic uppercase mb-2">Mentor Session Ready</h3>
                   <p className="text-slate-400 text-sm italic mb-8">Establish a secure connection with your designated AI mentor.</p>
                   <button onClick={startLesson} className="px-12 py-5 bg-blue-600 text-white rounded-[1.5rem] font-black uppercase tracking-widest text-xs hover:bg-blue-500 transition-all shadow-xl shadow-blue-600/20">Connect Neural Link →</button>
                </div>
              ) : (
                <div className="w-full h-full">
                  <video ref={localVideoRef} autoPlay playsInline muted className="w-full h-full object-cover -scale-x-100" />
                  <div className="absolute top-6 left-6 flex items-center gap-3">
                     <span className="bg-red-500 text-white text-[9px] font-black px-3 py-1 rounded-full animate-pulse uppercase tracking-widest">Live Recording</span>
                  </div>
                </div>
              )}
           </div>

           {/* Controls */}
           <div className="flex justify-center items-center gap-4 py-2">
              <div className="flex items-center gap-2 p-2 bg-slate-50 rounded-2xl border border-slate-100 shadow-sm">
                 {['🎙️', '📹', '🖥️', '😊', '✋', '💬'].map((icon, i) => (
                   <button key={i} className="w-10 h-10 rounded-xl hover:bg-white flex items-center justify-center text-lg transition-all shadow-sm">
                     {icon}
                   </button>
                 ))}
                 <div className="w-px h-6 bg-slate-200 mx-2"></div>
                 <button onClick={() => setIsLessonStarted(false)} className="px-6 py-2 bg-red-500 text-white rounded-xl text-[10px] font-black uppercase tracking-widest shadow-lg shadow-red-500/20">Exit</button>
              </div>
           </div>
        </div>

        {/* Content Tabs Below Video */}
        <div className="bg-white rounded-[3rem] p-10 shadow-xl shadow-slate-200/50 border border-white space-y-8">
            <div className="flex gap-8 border-b border-slate-50 pb-6">
                 {['Session View', 'Analysis', 'Quiz Mode'].map((tab, i) => (
                   <button 
                     key={i}
                     onClick={() => setActiveTab(i === 0 ? 'content' : i === 1 ? 'summary' : 'quiz')}
                     className={`text-[10px] font-black uppercase tracking-[0.2em] pb-2 transition-all border-b-2 ${
                       (i === 0 && activeTab === 'content') || (i === 1 && activeTab === 'summary') || (i === 2 && activeTab === 'quiz')
                       ? 'text-blue-600 border-blue-600' : 'text-slate-400 border-transparent hover:text-slate-600'
                     }`}
                   >
                     {tab}
                   </button>
                 ))}
            </div>
            <div className="animate-in fade-in duration-500 min-h-[200px]">
                {activeTab === 'content' && <p className="text-slate-500 italic text-sm">수업 내용을 불러오는 중입니다...</p>}
                {activeTab === 'quiz' && (
                  <div className="text-center py-10 space-y-4">
                     <span className="text-4xl">📝</span>
                     <h4 className="text-lg font-black italic">Daily Challenge</h4>
                     <p className="text-xs text-slate-400 italic">오늘 배운 10가지 키워드를 복습해보세요.</p>
                     <button className="px-8 py-3 bg-slate-900 text-white rounded-2xl font-black text-[10px] uppercase tracking-widest shadow-xl">Start Quiz</button>
                  </div>
                )}
            </div>
        </div>
      </main>

      {/* 3. RIGHT COLUMN: TOOLS & FEEDBACK */}
      <aside className="w-[400px] bg-white border-l border-slate-100 flex flex-col p-8 gap-8 shrink-0 overflow-y-auto custom-scrollbar">
        
        {/* Attendance Calendar */}
        <div className="space-y-6">
           <h3 className="text-xs font-black uppercase tracking-widest text-slate-900 flex items-center gap-2">
             <span className="text-blue-600">📅</span> Attendance Log
           </h3>
           <div className="bg-slate-50/50 p-6 rounded-[2.5rem] border border-slate-100">
              <div className="grid grid-cols-7 gap-1 text-center mb-4">
                 {['S', 'M', 'T', 'W', 'T', 'F', 'S'].map(d => (
                   <span key={d} className="text-[9px] font-black text-slate-300 uppercase">{d}</span>
                 ))}
              </div>
              <div className="grid grid-cols-7 gap-2">
                 {Array.from({ length: 30 }, (_, i) => i + 1).map(day => (
                   <div key={day} className={`aspect-square rounded-xl flex items-center justify-center text-[10px] font-black ${day === 24 ? 'bg-blue-600 text-white shadow-lg' : 'text-slate-400'}`}>
                     {day}
                   </div>
                 ))}
              </div>
           </div>
        </div>

        {/* Instructor Notes */}
        <div className="space-y-6">
           <h3 className="text-xs font-black uppercase tracking-widest text-slate-900 flex items-center gap-2">
             <span className="text-blue-600">✍️</span> Instructor Notes
           </h3>
           <textarea 
             className="w-full h-32 bg-slate-50 border border-slate-100 rounded-[2rem] p-6 text-xs font-bold text-slate-600 outline-none shadow-inner italic"
             placeholder="오늘 수업의 핵심 내용을 기록하세요..."
           ></textarea>
        </div>

        {/* Feedback Section */}
        <div className="space-y-6 flex-1 flex flex-col overflow-hidden">
           <h3 className="text-xs font-black uppercase tracking-widest text-slate-900 flex items-center gap-2">
             <span className="text-blue-600">💬</span> Mentor Comment
           </h3>
           <div className="flex-1 bg-slate-50/50 rounded-[3rem] border border-slate-100 p-6 space-y-4 overflow-y-auto">
              <div className="bg-white p-4 rounded-2xl rounded-tl-none border border-slate-100 shadow-sm text-[11px] font-bold text-slate-600 italic">
                "박조이 학생, 오늘 수업 참여도가 매우 좋습니다. 특히 질문의 깊이가 깊어지고 있네요!"
              </div>
           </div>
        </div>
      </aside>

      <style>{`
        .custom-scrollbar::-webkit-scrollbar { width: 4px; }
        .custom-scrollbar::-webkit-scrollbar-track { background: transparent; }
        .custom-scrollbar::-webkit-scrollbar-thumb { background: rgba(0,0,0,0.05); border-radius: 10px; }
        .no-scrollbar::-webkit-scrollbar { display: none; }
      `}</style>
    </div>
  );
};

export default ClassroomDetail;
