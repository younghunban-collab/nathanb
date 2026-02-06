
import React, { useState } from 'react';
import { Language } from '../types';

interface HeaderProps {
  onNavigate: (id: string) => void;
  onBackToLanding: () => void;
  onLogin: () => void;
  onSignup: () => void;
  user?: any | null;
  onLogout: () => void;
  currentView: string;
  lang: Language;
  setLang: (l: Language) => void;
}

const Header: React.FC<HeaderProps> = ({ onNavigate, onBackToLanding, onLogin, onSignup, user, onLogout, currentView, lang, setLang }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);

  const menuItems = [
    { id: 'company', label: lang === 'ko' ? '회사 소개' : 'Company' },
    { id: 'education', label: lang === 'ko' ? '교육 소개' : 'Education' },
    { id: 'mentors', label: lang === 'ko' ? '멘토 소개' : 'Mentors' },
    { id: 'classroom', label: lang === 'ko' ? '내강의실' : 'Classroom' },
    { id: 'pointshop', label: lang === 'ko' ? '포인트샵' : 'Market' },
    { id: 'abroad', label: lang === 'ko' ? '어학연수' : 'Abroad' },
    { id: 'support', label: lang === 'ko' ? '고객센터' : 'Support' },
  ];

  return (
    <>
      <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${currentView === 'admin' ? 'bg-slate-900 border-b border-white/5' : 'bg-white/90 backdrop-blur-xl border-b border-slate-100'}`}>
        <div className="max-w-7xl mx-auto px-4 md:px-6 h-16 md:h-20 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <button 
              onClick={() => onNavigate('portal')}
              className={`text-base md:text-xl font-black tracking-tighter hover:opacity-80 transition-all flex flex-col leading-none ${currentView === 'admin' ? 'text-white' : 'text-slate-900'}`}
            >
              <span className="text-[10px] md:text-xs font-black text-blue-600 tracking-[0.2em] mb-1 uppercase">AI-DRIVEN</span>
              AI MENTORING
            </button>
          </div>

          <nav className="hidden lg:flex items-center gap-6 xl:gap-8">
            {menuItems.map((item) => (
              <button 
                key={item.id}
                onClick={() => onNavigate(item.id)}
                className={`text-[13px] font-bold transition-colors relative group py-2 ${currentView === 'admin' ? 'text-slate-400 hover:text-white' : 'text-slate-500 hover:text-blue-600'}`}
              >
                {item.label}
                <span className={`absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 transition-all group-hover:w-full`}></span>
              </button>
            ))}
          </nav>

          <div className="flex items-center gap-3 md:gap-6">
            {/* Language Toggle */}
            <div className={`flex items-center p-1 rounded-full border text-[9px] font-black ${currentView === 'admin' ? 'bg-white/5 border-white/10' : 'bg-slate-100 border-slate-200'}`}>
              <button 
                onClick={() => setLang('ko')}
                className={`px-3 py-1.5 rounded-full transition-all ${lang === 'ko' ? 'bg-blue-600 text-white shadow-md' : 'text-slate-400 hover:text-slate-600'}`}
              >KR</button>
              <button 
                onClick={() => setLang('en')}
                className={`px-3 py-1.5 rounded-full transition-all ${lang === 'en' ? 'bg-blue-600 text-white shadow-md' : 'text-slate-400 hover:text-slate-600'}`}
              >EN</button>
            </div>

            {user?.role === 'admin' && currentView !== 'admin' && (
              <button 
                onClick={() => onNavigate('admin')}
                className="hidden md:flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-xl text-xs font-black tracking-widest uppercase hover:bg-blue-500 transition-all"
              >
                ⚙️ ADMIN
              </button>
            )}

            {user ? (
              <div className="relative">
                <button onClick={() => setIsProfileOpen(!isProfileOpen)} className={`flex items-center gap-3 px-3 py-1.5 rounded-2xl border ${currentView === 'admin' ? 'bg-white/5 border-white/10' : 'bg-slate-50 border-slate-100'}`}>
                  <div className="w-8 h-8 md:w-10 md:h-10 bg-blue-600 rounded-xl flex items-center justify-center text-white font-black text-xs">{user.name.charAt(0)}</div>
                </button>
                {isProfileOpen && (
                  <div className="absolute top-full right-0 mt-3 w-56 bg-white rounded-3xl shadow-2xl border border-slate-100 overflow-hidden animate-in fade-in slide-in-from-top-2">
                    <div className="p-5 bg-slate-900 text-white">
                      <p className="text-[9px] font-black text-blue-400 uppercase tracking-widest mb-1">{user.role}</p>
                      <p className="text-sm font-black truncate">{user.name}</p>
                    </div>
                    <div className="p-2">
                      <button onClick={onLogout} className="w-full text-left px-4 py-3 text-xs font-bold text-red-600 hover:bg-red-50 rounded-xl">🔓 Logout</button>
                    </div>
                  </div>
                )}
              </div>
            ) : (
              <div className="flex items-center gap-2">
                <button onClick={onLogin} className={`text-xs font-black px-4 py-2 uppercase ${currentView === 'admin' ? 'text-white' : 'text-slate-700'}`}>{lang === 'ko' ? '로그인' : 'Login'}</button>
                <button onClick={onSignup} className="hidden md:block text-xs font-black bg-slate-900 text-white px-6 py-3 rounded-xl hover:bg-blue-600 transition-all uppercase tracking-widest">{lang === 'ko' ? '회원가입' : 'Join'}</button>
              </div>
            )}
            
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className={`lg:hidden p-2 rounded-xl border ${currentView === 'admin' ? 'bg-white/5 border-white/10 text-white' : 'bg-slate-50 border-slate-100 text-slate-900'}`}><svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M4 6h16M4 12h16m-7 6h7" /></svg></button>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
