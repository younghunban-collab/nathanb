
import React from 'react';
import { Language } from '../types';

interface HeroSectionProps {
  onEnter: () => void;
  lang: Language;
}

const HeroSection: React.FC<HeroSectionProps> = ({ onEnter, lang }) => {
  return (
    <div className="relative w-full h-full bg-[#E5E7EB] overflow-hidden">
      {/* Fullscreen Spline Background */}
      <div className="absolute inset-0 z-0">
        <iframe 
          src="https://my.spline.design/chrissheropage-WrX1JnbOxigjQswwrj7AyZ9A/" 
          frameBorder="0" 
          width="100%" 
          height="100%"
          title="Spline 3D Scene"
          className="w-full h-full touch-none pointer-events-auto"
        ></iframe>
      </div>

      {/* Centered CTA - Entering the Academy Portal */}
      <div className="absolute bottom-10 md:bottom-12 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-4 md:gap-6 w-full px-6">
        <button 
          onClick={onEnter}
          className="w-full max-w-[280px] md:max-w-none md:w-auto px-8 md:px-12 py-4 md:py-5 bg-slate-900 text-white rounded-full font-black text-xs md:text-sm uppercase tracking-[0.2em] shadow-2xl hover:bg-blue-600 hover:scale-105 transition-all duration-300 active:scale-95 group"
        >
          {lang === 'ko' ? '아카데미 포털 입장' : 'Enter Academy Portal'}
          <span className="ml-2 inline-block group-hover:translate-x-1 transition-transform">→</span>
        </button>
        
        {/* Subtle Indicator */}
        <div className="flex flex-col items-center gap-2 opacity-40">
          <span className="text-[9px] md:text-[10px] font-bold text-slate-500 uppercase tracking-widest">
            {lang === 'ko' ? '시작하려면 탭하세요' : 'Tap to begin'}
          </span>
          <div className="w-0.5 h-6 md:h-8 bg-gradient-to-b from-slate-400 to-transparent rounded-full animate-pulse"></div>
        </div>
      </div>

      {/* Subtle overlay for focus */}
      <div className="absolute inset-0 pointer-events-none bg-black/5"></div>
    </div>
  );
};

export default HeroSection;
