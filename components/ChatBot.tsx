
import React, { useState } from 'react';

interface ChatBotProps {
  onNavigate: (id: string) => void;
}

const ChatBot: React.FC<ChatBotProps> = ({ onNavigate }) => {
  const [isOpen, setIsOpen] = useState(false);

  const quickLinks = [
    { id: 'education', label: '멘토링 교육 소개', icon: '🎓' },
    { id: 'support', label: '자주 묻는 질문 (Q&A)', icon: '❓' },
    { id: 'mentors', label: '전문가 멘토 찾기', icon: '👤' },
  ];

  return (
    <div className="fixed bottom-8 right-8 z-[100] flex flex-col items-end">
      {/* Chat Window */}
      {isOpen && (
        <div className="mb-6 w-[380px] bg-white rounded-[3rem] shadow-[0_20px_50px_rgba(0,0,0,0.15)] border border-slate-100 overflow-hidden animate-in slide-in-from-bottom-10 fade-in duration-500">
          {/* Header with Cyber/Robot Style */}
          <div className="bg-slate-900 p-8 relative overflow-hidden">
            <div className="flex items-center justify-between text-white relative z-10">
              <div className="flex items-center gap-4">
                <div className="relative">
                  <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-indigo-700 rounded-2xl flex items-center justify-center shadow-lg shadow-blue-500/30">
                    <svg className="w-8 h-8 text-white" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 2C6.47715 2 2 6.47715 2 12V15C2 16.6569 3.34315 18 5 18H7V13H4V12C4 7.58172 7.58172 4 12 4C16.4183 4 20 7.58172 20 12V13H17V18H19C20.6569 18 22 16.6569 22 15V12C22 6.47715 17.5228 2 12 2Z" fill="currentColor"/>
                      <circle cx="8.5" cy="10.5" r="1.5" fill="white" className="animate-pulse" />
                      <circle cx="15.5" cy="10.5" r="1.5" fill="white" className="animate-pulse" />
                      <path d="M8 14.5C8.5 15.5 10 16 12 16C14 16 15.5 15.5 16 14.5" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
                    </svg>
                  </div>
                  <span className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-500 border-4 border-slate-900 rounded-full"></span>
                </div>
                <div>
                  <h4 className="font-black text-base uppercase tracking-widest italic">JOY-MASTER-BOT v3.1</h4>
                  <p className="text-[10px] text-blue-400 font-bold uppercase tracking-widest flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-blue-400 rounded-full animate-ping"></span>
                    Systems Operational
                  </p>
                </div>
              </div>
              <button onClick={() => setIsOpen(false)} className="p-2 hover:bg-white/10 rounded-xl transition-all hover:rotate-90">
                <svg className="w-6 h-6 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M6 18L18 6M6 6l12 12" /></svg>
              </button>
            </div>
            {/* Background pattern */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-blue-600/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
          </div>

          {/* Chat Body */}
          <div className="p-8 space-y-8 max-h-[500px] overflow-y-auto custom-scrollbar">
            {/* AI Welcome Message */}
            <div className="flex gap-4">
               <div className="w-8 h-8 rounded-lg bg-slate-100 flex items-center justify-center text-sm border border-slate-200 shrink-0">🤖</div>
               <div className="bg-slate-50 p-6 rounded-[2rem] rounded-tl-none border border-slate-100 shadow-sm">
                  <p className="text-sm text-slate-700 font-medium leading-relaxed italic">
                    "반갑습니다! 저는 당신의 학습 여정을 돕는 <span className="text-blue-600 font-black">조이마스터봇</span>입니다. 궁금한 내용을 아래에서 선택하거나 직접 문의해 주세요."
                  </p>
               </div>
            </div>

            {/* Quick Actions */}
            <div className="space-y-4">
              <p className="text-[10px] font-black text-slate-400 uppercase tracking-[0.3em] ml-2">Recommended Queries</p>
              <div className="grid grid-cols-1 gap-3">
                {quickLinks.map((link) => (
                  <button 
                    key={link.id}
                    onClick={() => {
                      onNavigate(link.id);
                      setIsOpen(false);
                    }}
                    className="w-full p-5 bg-white border border-slate-100 rounded-2xl flex items-center gap-4 hover:border-blue-600 hover:bg-blue-50 transition-all text-left group hover:shadow-lg hover:shadow-blue-600/5"
                  >
                    <span className="text-2xl group-hover:scale-125 transition-transform">{link.icon}</span>
                    <span className="text-sm font-black text-slate-900 group-hover:text-blue-600 tracking-tight">{link.label}</span>
                    <span className="ml-auto text-slate-300 group-hover:translate-x-1 group-hover:text-blue-600 transition-all font-black">→</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Support Info */}
            <div className="pt-8 border-t border-slate-50">
              <div className="bg-gradient-to-br from-blue-600 to-indigo-700 p-6 rounded-[2.5rem] text-white shadow-xl shadow-blue-600/20 flex items-center justify-between group cursor-pointer overflow-hidden relative">
                <div className="relative z-10">
                  <p className="text-[10px] font-black text-white/60 uppercase tracking-widest mb-1">Direct Line</p>
                  <p className="text-2xl font-black italic tracking-tighter">02-1234-5678</p>
                  <p className="text-[9px] text-white/50 font-bold mt-1 uppercase">Available 09:00 - 22:00 KST</p>
                </div>
                <div className="w-14 h-14 bg-white/20 backdrop-blur-md rounded-2xl flex items-center justify-center text-2xl shadow-inner relative z-10 group-hover:rotate-12 transition-transform">
                  📞
                </div>
                {/* Decorative element inside card */}
                <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-white/10 rounded-full blur-2xl"></div>
              </div>
            </div>
          </div>
          
          {/* Footer Area */}
          <div className="bg-slate-50 py-4 px-8 flex items-center justify-between">
            <div className="flex gap-1">
               <div className="w-1 h-1 bg-blue-600 rounded-full animate-bounce"></div>
               <div className="w-1 h-1 bg-blue-600 rounded-full animate-bounce delay-100"></div>
               <div className="w-1 h-1 bg-blue-600 rounded-full animate-bounce delay-200"></div>
            </div>
            <p className="text-[8px] font-black text-slate-400 uppercase tracking-[0.2em]">Secured by AI Mentor Guardian</p>
          </div>
        </div>
      )}

      {/* Main Robotic Toggle Button */}
      <div className="relative group">
        <button 
          onClick={() => setIsOpen(!isOpen)}
          className={`w-20 h-20 rounded-[2rem] shadow-[0_20px_50px_rgba(37,99,235,0.3)] flex items-center justify-center transition-all duration-700 hover:scale-110 active:scale-90 relative overflow-hidden ${isOpen ? 'bg-slate-900 rotate-[360deg]' : 'bg-gradient-to-br from-blue-600 via-blue-500 to-indigo-700'}`}
        >
          {isOpen ? (
            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M6 18L18 6M6 6l12 12" /></svg>
          ) : (
            <div className="relative flex flex-col items-center">
              {/* Robotic Head SVG */}
              <svg className="w-10 h-10 text-white" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12,2A10,10,0,0,0,2,12v3a3,3,0,0,0,3,3h2V13H4V12a8,8,0,0,1,16,0v1H17v5h2a3,3,0,0,0,3-3V12A10,10,0,0,0,12,2ZM8.5,11A1.5,1.5,0,1,1,10,9.5,1.5,1.5,0,0,1,8.5,11Zm7,0A1.5,1.5,0,1,1,17,9.5,1.5,1.5,0,0,1,15.5,11Z"/>
                <rect x="9" y="14" width="6" height="2" rx="1" fill="white" fillOpacity="0.5" />
              </svg>
              {/* Glowing Eyes Effect */}
              <div className={`absolute top-3.5 left-2 w-1.5 h-1.5 bg-cyan-300 rounded-full blur-[2px] animate-pulse`}></div>
              <div className={`absolute top-3.5 right-2 w-1.5 h-1.5 bg-cyan-300 rounded-full blur-[2px] animate-pulse`}></div>
            </div>
          )}
          
          {/* Scanning Line Animation when closed */}
          {!isOpen && (
            <div className="absolute inset-0 bg-gradient-to-b from-white/0 via-white/20 to-white/0 h-1/2 w-full animate-scan pointer-events-none"></div>
          )}
        </button>

        {/* Hover Text Label */}
        {!isOpen && (
           <div className="absolute right-24 top-1/2 -translate-y-1/2 bg-slate-900 text-white px-5 py-2 rounded-xl text-[10px] font-black uppercase tracking-widest whitespace-nowrap opacity-0 group-hover:opacity-100 transition-all translate-x-4 group-hover:translate-x-0 shadow-xl border border-white/10">
              AI Assistance Required?
              <div className="absolute right-[-4px] top-1/2 -translate-y-1/2 w-2 h-2 bg-slate-900 rotate-45"></div>
           </div>
        )}
      </div>

      <style>{`
        @keyframes scan {
          0% { transform: translateY(-100%); }
          100% { transform: translateY(200%); }
        }
        .animate-scan {
          animation: scan 3s ease-in-out infinite;
        }
        .custom-scrollbar::-webkit-scrollbar {
          width: 4px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: transparent;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: #e2e8f0;
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: #cbd5e1;
        }
      `}</style>
    </div>
  );
};

export default ChatBot;
