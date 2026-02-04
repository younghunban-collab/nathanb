
import React from 'react';

interface HeroSectionProps {
  onScrollDown: () => void;
}

const HeroSection: React.FC<HeroSectionProps> = ({ onScrollDown }) => {
  return (
    <div className="relative w-full h-full bg-[#E5E7EB]">
      {/* Spline Embed - Filling the entire first fold */}
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

      {/* 
        The overlapping text (h1, p) has been removed as per request 
        to showcase only the Spline scene on the first page.
      */}

      {/* Scroll Down Indicator - Click to go to the second page */}
      <button 
        onClick={onScrollDown}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-3 group transition-all hover:scale-110 cursor-pointer"
        aria-label="Scroll to next page"
      >
        <span className="text-[10px] font-black text-slate-500 uppercase tracking-[0.3em] group-hover:text-blue-600 transition-colors">
          Next Page
        </span>
        <div className="w-8 h-12 border-2 border-slate-400 rounded-full relative flex justify-center group-hover:border-blue-500 transition-colors">
          <div className="w-1 h-2 bg-slate-400 rounded-full absolute top-2 animate-bounce group-hover:bg-blue-500"></div>
        </div>
      </button>
      
      {/* Subtle bottom gradient to blend with the next section */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-slate-50 to-transparent pointer-events-none"></div>
    </div>
  );
};

export default HeroSection;
