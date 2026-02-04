
import React from 'react';

interface HeaderProps {
  onNavigate: (id: string) => void;
}

const Header: React.FC<HeaderProps> = ({ onNavigate }) => {
  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <div className="flex items-center gap-8">
          <button 
            onClick={() => onNavigate('home')}
            className="text-2xl font-black bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent"
          >
            AI MENTOR
          </button>
          
          <nav className="hidden md:flex items-center gap-6">
            <button onClick={() => onNavigate('education')} className="text-sm font-medium text-slate-600 hover:text-blue-600 transition-colors">교육 소개</button>
            <button onClick={() => onNavigate('mentors')} className="text-sm font-medium text-slate-600 hover:text-blue-600 transition-colors">멘토 소개</button>
            <button onClick={() => onNavigate('reviews')} className="text-sm font-medium text-slate-600 hover:text-blue-600 transition-colors">리뷰</button>
            <button onClick={() => onNavigate('classroom')} className="text-sm font-medium text-slate-600 hover:text-blue-600 transition-colors">내강의실</button>
          </nav>
        </div>

        <div className="flex items-center gap-4">
          <button className="text-sm font-medium text-slate-700 px-4 py-2 hover:bg-slate-100 rounded-lg transition-colors">
            로그인
          </button>
          <button className="text-sm font-semibold bg-slate-900 text-white px-5 py-2.5 rounded-lg shadow-sm hover:bg-slate-800 transition-all">
            회원가입
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
