
import React, { useState, useRef, useEffect } from 'react';
import { GoogleGenAI } from "@google/genai";

interface ChatBotProps {
  onNavigate: (id: string) => void;
}

interface Message {
  role: 'user' | 'bot';
  text: string;
}

const ChatBot: React.FC<ChatBotProps> = ({ onNavigate }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [inputValue, setInputValue] = useState('');
  const [messages, setMessages] = useState<Message[]>([
    { role: 'bot', text: '반갑습니다! 저는 당신의 학습 여정을 돕는 조이마스터봇입니다. 무엇을 도와드릴까요?' }
  ]);
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = async () => {
    if (!inputValue.trim()) return;

    const userMessage = inputValue;
    setMessages(prev => [...prev, { role: 'user', text: userMessage }]);
    setInputValue('');
    setIsTyping(true);

    try {
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
      const response = await ai.models.generateContent({
        model: "gemini-3-flash-preview",
        contents: [
          {
            role: "user",
            parts: [{ text: userMessage }]
          }
        ],
        config: {
          systemInstruction: "You are '조이마스터봇' (Joy-Master-Bot), the official AI concierge for 'AI Mentoring Academy'. You are professional, robotic but friendly, and encouraging. You help students and parents with information about the academy's mentoring programs, the L2E (Learn to Earn) system, and avatar evolution. Always answer in Korean unless the user speaks English. Keep answers concise and helpful.",
          temperature: 0.7,
        },
      });

      const botResponse = response.text || "죄송합니다. 시스템 오류가 발생했습니다. 다시 시도해주세요.";
      setMessages(prev => [...prev, { role: 'bot', text: botResponse }]);
    } catch (error) {
      console.error("AI Error:", error);
      setMessages(prev => [...prev, { role: 'bot', text: "통신 중 오류가 발생했습니다. 조이마스터봇의 회로를 점검 중입니다!" }]);
    } finally {
      setIsTyping(false);
    }
  };

  const quickLinks = [
    { id: 'education', label: '교육 프로그램', icon: '🎓' },
    { id: 'mentors', label: '멘토 찾기', icon: '👤' },
    { id: 'support', label: '자주 묻는 질문', icon: '❓' },
  ];

  return (
    <div className="fixed bottom-4 right-4 md:bottom-8 md:right-8 z-[100] flex flex-col items-end max-w-full">
      {/* Chat Window */}
      {isOpen && (
        <div className="mb-4 md:mb-6 w-[calc(100vw-2rem)] sm:w-[380px] md:w-[400px] bg-white rounded-[2rem] md:rounded-[3rem] shadow-[0_20px_60px_rgba(0,0,0,0.2)] border border-slate-100 overflow-hidden flex flex-col animate-in slide-in-from-bottom-10 fade-in duration-500 max-h-[80vh] md:max-h-[700px]">
          {/* Header */}
          <div className="bg-slate-900 p-4 md:p-6 relative overflow-hidden shrink-0">
            <div className="flex items-center justify-between text-white relative z-10">
              <div className="flex items-center gap-3 md:gap-4">
                <div className="relative">
                  <div className="w-10 h-10 md:w-12 md:h-12 bg-gradient-to-br from-blue-500 to-indigo-700 rounded-xl md:rounded-2xl flex items-center justify-center shadow-lg">
                    <svg className="w-6 h-6 md:w-7 md:h-7 text-white" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2C6.47715 2 2 6.47715 2 12V15C2 16.6569 3.34315 18 5 18H7V13H4V12C4 7.58172 7.58172 4 12 4C16.4183 4 20 7.58172 20 12V13H17V18H19C20.6569 18 22 16.6569 22 15V12C22 6.47715 17.5228 2 12 2Z"/>
                    </svg>
                  </div>
                  <span className="absolute -bottom-1 -right-1 w-3 h-3 md:w-3.5 md:h-3.5 bg-green-500 border-2 border-slate-900 rounded-full"></span>
                </div>
                <div>
                  <h4 className="font-black text-xs md:text-sm uppercase tracking-widest italic">JOY-MASTER-BOT</h4>
                  <p className="text-[8px] md:text-[9px] text-blue-400 font-bold uppercase tracking-widest flex items-center gap-2">
                    <span className="w-1 h-1 bg-blue-400 rounded-full animate-ping"></span>
                    Active
                  </p>
                </div>
              </div>
              <button onClick={() => setIsOpen(false)} className="p-2 hover:bg-white/10 rounded-xl transition-all">
                <svg className="w-5 h-5 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M6 18L18 6M6 6l12 12" /></svg>
              </button>
            </div>
          </div>

          {/* Chat History */}
          <div className="flex-1 p-4 md:p-6 space-y-4 md:space-y-6 overflow-y-auto custom-scrollbar bg-slate-50/30">
            {messages.map((msg, i) => (
              <div key={i} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'} animate-in fade-in slide-in-from-bottom-2 duration-300`}>
                <div className={`max-w-[85%] p-3 md:p-4 rounded-2xl md:rounded-3xl text-xs md:text-sm leading-relaxed ${
                  msg.role === 'user' 
                  ? 'bg-slate-900 text-white rounded-tr-none shadow-lg' 
                  : 'bg-white border border-slate-100 text-slate-700 rounded-tl-none shadow-sm italic'
                }`}>
                  {msg.text}
                </div>
              </div>
            ))}
            {isTyping && (
              <div className="flex justify-start animate-pulse">
                <div className="bg-blue-50 border border-blue-100 p-3 md:p-4 rounded-2xl md:rounded-3xl rounded-tl-none">
                  <div className="flex gap-1.5">
                    <div className="w-1.5 h-1.5 bg-blue-400 rounded-full animate-bounce"></div>
                    <div className="w-1.5 h-1.5 bg-blue-400 rounded-full animate-bounce delay-75"></div>
                    <div className="w-1.5 h-1.5 bg-blue-400 rounded-full animate-bounce delay-150"></div>
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Quick Actions Footer */}
          <div className="px-4 md:px-6 py-3 border-t border-slate-50 bg-white shrink-0">
            <div className="flex gap-2 overflow-x-auto pb-2 no-scrollbar">
              {quickLinks.map((link) => (
                <button 
                  key={link.id}
                  onClick={() => onNavigate(link.id)}
                  className="whitespace-nowrap px-3 py-1.5 bg-slate-50 border border-slate-100 rounded-full text-[9px] md:text-[10px] font-black uppercase text-slate-500 hover:border-blue-600 hover:bg-blue-50 hover:text-blue-600 transition-all flex items-center gap-2"
                >
                  <span>{link.icon}</span> {link.label}
                </button>
              ))}
            </div>
          </div>

          {/* Message Input */}
          <div className="p-4 md:p-6 pt-0 bg-white shrink-0">
            <div className="relative">
              <input 
                type="text" 
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                placeholder="봇에게 질문하기..." 
                className="w-full bg-slate-50 border border-slate-100 rounded-xl md:rounded-2xl px-4 md:px-6 py-3 md:py-4 pr-12 md:pr-16 text-xs md:text-sm outline-none focus:ring-4 ring-blue-600/5 transition-all font-medium" 
              />
              <button 
                onClick={handleSend}
                disabled={!inputValue.trim() || isTyping}
                className={`absolute right-1.5 top-1/2 -translate-y-1/2 w-8 h-8 md:w-10 md:h-10 rounded-lg md:rounded-xl flex items-center justify-center transition-all ${
                  inputValue.trim() && !isTyping ? 'bg-blue-600 text-white shadow-lg' : 'bg-slate-200 text-slate-400'
                }`}
              >
                <svg className="w-4 h-4 md:w-5 md:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M12 19l9-2-9-18-9 18 9 2zm0 0v-8" /></svg>
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Main Robotic Toggle Button */}
      <div className="relative group">
        <button 
          onClick={() => setIsOpen(!isOpen)}
          className={`w-14 h-14 md:w-20 md:h-20 rounded-2xl md:rounded-[2rem] shadow-xl flex items-center justify-center transition-all duration-700 hover:scale-110 active:scale-90 relative overflow-hidden ${isOpen ? 'bg-slate-900 rotate-[360deg]' : 'bg-gradient-to-br from-blue-600 via-blue-500 to-indigo-700'}`}
        >
          {isOpen ? (
            <svg className="w-6 h-6 md:w-8 md:h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M6 18L18 6M6 6l12 12" /></svg>
          ) : (
            <div className="relative flex flex-col items-center">
              <svg className="w-8 h-8 md:w-10 md:h-10 text-white" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12,2A10,10,0,0,0,2,12v3a3,3,0,0,0,3,3h2V13H4V12a8,8,0,0,1,16,0v1H17v5h2a3,3,0,0,0,3-3V12A10,10,0,0,0,12,2ZM8.5,11A1.5,1.5,0,1,1,10,9.5,1.5,1.5,0,0,1,8.5,11Zm7,0A1.5,1.5,0,1,1,17,9.5,1.5,1.5,0,0,1,15.5,11Z"/>
                <rect x="9" y="14" width="6" height="2" rx="1" fill="white" fillOpacity="0.5" />
              </svg>
            </div>
          )}
        </button>
      </div>

      <style>{`
        .custom-scrollbar::-webkit-scrollbar { width: 4px; }
        .custom-scrollbar::-webkit-scrollbar-track { background: transparent; }
        .custom-scrollbar::-webkit-scrollbar-thumb { background: #e2e8f0; border-radius: 10px; }
        .no-scrollbar::-webkit-scrollbar { display: none; }
      `}</style>
    </div>
  );
};

export default ChatBot;
