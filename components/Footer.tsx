
import React from 'react';
import { Language } from '../types';

interface FooterProps {
  lang: Language;
  // Add onNavigate to match expected props in App.tsx
  onNavigate: (id: string) => void;
}

const Footer: React.FC<FooterProps> = ({ lang, onNavigate }) => {
  return (
    <footer className="bg-slate-900 text-slate-400 py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-16 mb-20">
          <div className="col-span-1 md:col-span-2 space-y-8">
            <div className="text-2xl font-black text-white tracking-tighter italic">AI MENTOR ACADEMY</div>
            <p className="text-sm leading-relaxed max-w-sm italic">
              {lang === 'ko' 
                ? '대한민국 1% 대입 전략, AI 멘토와 함께 성취하는 즐거움을 경험하세요. 최첨단 WebRTC 기술과 AI 분석을 통해 교육의 질을 혁신합니다.'
                : 'Experience the joy of achievement with AI mentors and the top 1% admission strategy. Innovating education quality through WebRTC and AI.'}
            </p>
            <div className="flex gap-4">
               {['Twitter', 'Instagram', 'LinkedIn', 'YouTube'].map(social => (
                 <a key={social} href="#" className="w-12 h-12 bg-white/5 rounded-2xl flex items-center justify-center hover:bg-blue-600 transition-all group">
                   <span className="text-[10px] font-black text-white opacity-40 group-hover:opacity-100">{social[0]}</span>
                 </a>
               ))}
            </div>
          </div>
          
          <div>
            <h4 className="text-white font-black uppercase tracking-widest text-xs mb-8">{lang === 'ko' ? '연락처' : 'Contact'}</h4>
            <ul className="text-sm space-y-4 font-medium">
              <li className="flex flex-col gap-1">
                <span className="text-[10px] text-blue-500 font-black uppercase">Tel.</span>
                <span className="text-white">02-561-8907</span>
              </li>
              <li className="flex flex-col gap-1">
                <span className="text-[10px] text-blue-500 font-black uppercase">Fax.</span>
                <span className="text-white">050-8938-5025</span>
              </li>
              <li className="flex flex-col gap-1">
                <span className="text-[10px] text-blue-500 font-black uppercase">Email.</span>
                <span className="text-white">rebecca@joymaster.kr</span>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-black uppercase tracking-widest text-xs mb-8">{lang === 'ko' ? '주소' : 'Address'}</h4>
            <ul className="text-sm space-y-6 font-medium">
              <li className="flex flex-col gap-2">
                <span className="text-[10px] text-blue-500 font-black uppercase">Head Office</span>
                <span className="text-slate-300 leading-relaxed">
                  {lang === 'ko' ? '서울시 구로구 디지털로 29길 38, 2F, 201' : '2F, 201, 38 Digital-ro 29-gil, Guro-gu, Seoul'}
                </span>
              </li>
              <li className="flex flex-col gap-2">
                <span className="text-[10px] text-blue-500 font-black uppercase">Marketing Office</span>
                <span className="text-slate-300 leading-relaxed">
                  {lang === 'ko' ? '서울시 영등포구 국회대로 66길 23, 10F 1002' : '10F 1002, 23 Gukhoe-daero 66-gil, Yeongdeungpo-gu, Seoul'}
                </span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6 text-[10px] font-black tracking-[0.2em] text-slate-600 uppercase">
          <p>© 2025 AI MENTOR ACADEMY. ALL RIGHTS RESERVED.</p>
          <div className="flex gap-8">
            <button onClick={() => onNavigate('privacy')} className="hover:text-blue-500">{lang === 'ko' ? '개인정보처리방침' : 'Privacy Policy'}</button>
            <button onClick={() => onNavigate('terms')} className="hover:text-blue-500">{lang === 'ko' ? '이용약관' : 'Terms of Service'}</button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
