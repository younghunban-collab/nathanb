
import React from 'react';

interface HeroSectionProps {
  onEnter: () => void;
}

const HeroSection: React.FC<HeroSectionProps> = ({ onEnter }) => {
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
          className="w-full h-full"
        ></iframe>
      </div>

      {/* Centered CTA - Entering the Academy Portal */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-6">
        <button 
          onClick={onEnter}
          className="px-10 py-4 bg-slate-900 text-white rounded-full font-black text-sm uppercase tracking-[0.2em] shadow-2xl hover:bg-blue-600 hover:scale-110 transition-all duration-300 active:scale-95 group"
        >
          Enter Academy
          <span className="ml-2 inline-block group-hover:translate-x-1 transition-transform">→</span>
        </button>
        
        {/* Subtle Indicator */}
        <div className="flex flex-col items-center gap-2 opacity-50">
          <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">
            Click to Start
          </span>
          <div className="w-1 h-8 bg-gradient-to-b from-slate-400 to-transparent rounded-full animate-pulse"></div>
        </div>
      </div>

      {/* Dark overlay for immersive focus if needed, keeping it minimal as requested */}
      <div className="absolute inset-0 pointer-events-none bg-black/5"></div>
    </div>
  );
};

export default HeroSection;
