
import React from 'react';

interface HeaderProps {
  onNavigate: (id: string) => void;
  onBackToLanding: () => void;
}

const Header: React.FC<HeaderProps> = ({ onNavigate, onBackToLanding }) => {
  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-slate-200 h-14 md:h-16">
      <div className="max-w-7xl mx-auto px-4 md:px-6 h-full flex items-center justify-between gap-4">
        <div className="flex items-center gap-4 md:gap-8 flex-1 min-w-0">
          <button 
            onClick={() => onNavigate('portal')}
            className="text-lg md:text-2xl font-black bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent truncate hover:scale-[1.02] transition-transform"
          >
            AI ACADEMY
          </button>
          
          <nav className="hidden lg:flex items-center gap-6">
            <button onClick={() => onNavigate('education')} className="text-sm font-medium text-slate-600 hover:text-blue-600 transition-colors">교육 소개</button>
            <button onClick={() => onNavigate('mentors')} className="text-sm font-medium text-slate-600 hover:text-blue-600 transition-colors">멘토 소개</button>
            <button onClick={() => onNavigate('classroom')} className="text-sm font-medium text-slate-600 hover:text-blue-600 transition-colors">내강의실</button>
            <button onClick={() => onNavigate('pointshop')} className="text-sm font-medium text-slate-600 hover:text-blue-600 transition-colors">포인트샵</button>
            <button onClick={() => onNavigate('support')} className="text-sm font-medium text-slate-600 hover:text-blue-600 transition-colors">고객센터</button>
          </nav>

          {/* Mobile sub-nav (Optional scrollable view if hidden lg:flex is active) */}
          <nav className="lg:hidden flex overflow-x-auto no-scrollbar gap-4 text-[10px] font-bold uppercase tracking-widest text-slate-400">
             <button onClick={() => onNavigate('education')} className="shrink-0">Intro</button>
             <button onClick={() => onNavigate('classroom')} className="shrink-0">Class</button>
             <button onClick={() => onNavigate('pointshop')} className="shrink-0">Shop</button>
          </nav>
        </div>

        <div className="flex items-center gap-2 md:gap-4 shrink-0">
          <button className="text-[10px] md:text-sm font-medium text-slate-700 px-3 md:px-4 py-2 hover:bg-slate-100 rounded-lg transition-colors">
            로그인
          </button>
          <button className="hidden sm:block text-sm font-semibold bg-slate-900 text-white px-5 py-2.5 rounded-lg hover:bg-slate-800 transition-all">
            회원가입
          </button>
        </div>
      </div>
      <style>{`.no-scrollbar::-webkit-scrollbar { display: none; } .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }`}</style>
    </header>
  );
};

export default Header;
