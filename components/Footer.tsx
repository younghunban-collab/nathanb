
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-slate-400 py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-2">
            <div className="text-2xl font-black text-white mb-6">AI MENTOR ACADEMY</div>
            <p className="text-sm leading-relaxed max-w-sm mb-8">
              대한민국 1% 대입 전략, AI 멘토와 함께 가장 효율적인 학습을 경험하세요. 
              Learn to Earn 모델로 학습의 즐거움을 더합니다.
            </p>
            <div className="flex gap-4">
               {['Twitter', 'Instagram', 'LinkedIn', 'YouTube'].map(social => (
                 <a key={social} href="#" className="w-10 h-10 bg-slate-800 rounded-xl flex items-center justify-center hover:bg-slate-700 transition-colors">
                   <span className="text-[10px] font-bold text-white">{social[0]}</span>
                 </a>
               ))}
            </div>
          </div>
          <div>
            <h4 className="text-white font-bold mb-6">Contact</h4>
            <ul className="text-sm space-y-4">
              <li>서울특별시 강남구 테헤란로 123</li>
              <li>대표번호: 02-1234-5678</li>
              <li>이메일: contact@aimentor.academy</li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-bold mb-6">Information</h4>
            <ul className="text-sm space-y-4">
              <li><a href="#" className="hover:text-white transition-colors">개인정보처리방침</a></li>
              <li><a href="#" className="hover:text-white transition-colors">이용약관</a></li>
              <li><a href="#" className="hover:text-white transition-colors">자주 묻는 질문</a></li>
              <li><a href="#" className="hover:text-white transition-colors">인재채용</a></li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-medium tracking-widest text-slate-600">
          <p>© 2025 AI MENTOR ACADEMY. ALL RIGHTS RESERVED.</p>
          <p>PROUDLY POWERED BY GEMINI AI</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
