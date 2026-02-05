
import React, { useState } from 'react';

const PointShop: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<'all' | 'avatar' | 'goods' | 'coupon'>('all');

  const userPoints = "45,800 MP";

  const shopItems = {
    avatar: [
      { id: 1, name: "Thaddeus Harris", type: "Avatar", price: "12,000", img: "https://images.unsplash.com/photo-1585366119957-e5733f392885?q=80&w=400&auto=format&fit=crop", tag: "Exclusive", color: "bg-blue-500" },
      { id: 2, name: "Rosie Robot", type: "Avatar", price: "15,000", img: "https://images.unsplash.com/photo-1546776310-eef45dd6d63c?q=80&w=400&auto=format&fit=crop", tag: "New", color: "bg-purple-500" },
      { id: 3, name: "King George", type: "Avatar", price: "25,000", img: "https://images.unsplash.com/photo-1599660734639-623817832847?q=80&w=400&auto=format&fit=crop", tag: "Legendary", color: "bg-green-500" },
      { id: 4, name: "Scuba Steve", type: "Avatar", price: "18,000", img: "https://images.unsplash.com/photo-1608889175123-8ee362201f81?q=80&w=400&auto=format&fit=crop", tag: "Rare", color: "bg-cyan-500" },
      { id: 5, name: "Rockstar Adam", type: "Avatar", price: "14,000", img: "https://images.unsplash.com/photo-1511556820780-d912e42b4980?q=80&w=400&auto=format&fit=crop", tag: "Popular", color: "bg-pink-500" },
      { id: 6, name: "Pablo Picasso", type: "Avatar", price: "20,000", img: "https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?q=80&w=400&auto=format&fit=crop", tag: "Artist", color: "bg-red-500" },
    ],
    goods: [
      { id: 7, name: "Organic Honey Ginger", type: "Goods", price: "5,500", img: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?q=80&w=400&auto=format&fit=crop", tag: "Best", weight: "500gm" },
      { id: 8, name: "Premium Avocado Set", type: "Goods", price: "8,900", img: "https://images.unsplash.com/photo-1523049673857-eb18f1d7b578?q=80&w=400&auto=format&fit=crop", tag: "Fresh", weight: "1kg" },
      { id: 9, name: "Italian Pasta Pack", type: "Goods", price: "4,200", img: "https://images.unsplash.com/photo-1551183053-bf91a1d81141?q=80&w=400&auto=format&fit=crop", tag: "Meal", weight: "400gm" },
    ],
    coupon: [
      { id: 10, name: "Starbucks Americano", type: "Coupon", price: "4,500", img: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?q=80&w=400&auto=format&fit=crop", tag: "Instant" },
      { id: 11, name: "Convenience Store 5k", type: "Coupon", price: "5,000", img: "https://images.unsplash.com/photo-1604719312563-8912e9223c6a?q=80&w=400&auto=format&fit=crop", tag: "Gift" },
      { id: 12, name: "Netflix 1 Month", type: "Coupon", price: "17,000", img: "https://images.unsplash.com/photo-1522869635100-9f4c5e86aa37?q=80&w=400&auto=format&fit=crop", tag: "Hot" },
    ]
  };

  const filteredItems = [
    ...(activeCategory === 'all' || activeCategory === 'avatar' ? shopItems.avatar : []),
    ...(activeCategory === 'all' || activeCategory === 'goods' ? shopItems.goods : []),
    ...(activeCategory === 'all' || activeCategory === 'coupon' ? shopItems.coupon : []),
  ];

  return (
    <div className="bg-[#F9FBFC] min-h-screen pb-32">
      {/* 1. Shop Hero Section - Adjusted for better spacing and readability */}
      <section className="bg-slate-900 text-white pt-32 pb-40 rounded-b-[5rem] px-6 relative overflow-hidden">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row justify-between items-center relative z-10 gap-16">
          <div className="space-y-8 text-center lg:text-left">
            <span className="text-blue-400 font-black uppercase tracking-[0.3em] text-[10px] bg-white/5 px-4 py-2 rounded-full backdrop-blur-sm">L2E Economy Ecosystem</span>
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-black tracking-tighter italic leading-[1.1]">
              MINT POINT <br /> <span className="text-blue-500">MARKETPLACE</span>
            </h1>
            <p className="text-slate-400 max-w-md mx-auto lg:mx-0 text-lg italic leading-relaxed">
              "열심히 공부한 당신, <br />
              쌓인 MP로 나만의 가치를 구매하세요."
            </p>
          </div>
          
          <div className="bg-white/5 backdrop-blur-xl p-8 lg:p-12 rounded-[3.5rem] border border-white/10 shadow-2xl animate-in zoom-in duration-700 min-w-[320px]">
             <p className="text-[11px] font-black text-blue-400 uppercase tracking-widest mb-4 opacity-80">My Current Balance</p>
             <div className="flex items-center justify-between gap-6">
                <span className="text-4xl lg:text-6xl font-black tracking-tight">{userPoints}</span>
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center text-3xl shadow-lg shadow-blue-600/30">💰</div>
             </div>
             <div className="mt-8 pt-6 border-t border-white/10">
                <p className="text-[10px] text-slate-500 font-bold italic tracking-tighter">* 포인트는 학습 성과에 따라 매일 자동 지급됩니다.</p>
             </div>
          </div>
        </div>
        
        {/* Background Decor */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-600/10 blur-[130px] -translate-y-1/2 translate-x-1/2"></div>
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-indigo-600/10 blur-[100px] translate-y-1/2 -translate-x-1/2"></div>
      </section>

      {/* 2. Category Navigation */}
      <section className="max-w-7xl mx-auto px-6 -mt-16 relative z-20">
        <div className="bg-white p-5 rounded-[3rem] shadow-2xl border border-slate-100 flex flex-wrap gap-4 items-center">
           <button 
             onClick={() => setActiveCategory('all')}
             className={`px-8 py-4 rounded-[2rem] text-sm font-black transition-all ${activeCategory === 'all' ? 'bg-slate-900 text-white scale-105' : 'bg-slate-50 text-slate-400 hover:bg-slate-100'}`}
           >All Items</button>
           <button 
             onClick={() => setActiveCategory('avatar')}
             className={`px-8 py-4 rounded-[2rem] text-sm font-black transition-all ${activeCategory === 'avatar' ? 'bg-blue-600 text-white shadow-xl shadow-blue-600/30 scale-105' : 'bg-slate-50 text-slate-400 hover:bg-slate-100'}`}
           >Avatars 🧩</button>
           <button 
             onClick={() => setActiveCategory('goods')}
             className={`px-8 py-4 rounded-[2rem] text-sm font-black transition-all ${activeCategory === 'goods' ? 'bg-green-600 text-white shadow-xl shadow-green-600/30 scale-105' : 'bg-slate-50 text-slate-400 hover:bg-slate-100'}`}
           >Daily Goods 🍎</button>
           <button 
             onClick={() => setActiveCategory('coupon')}
             className={`px-8 py-4 rounded-[2rem] text-sm font-black transition-all ${activeCategory === 'coupon' ? 'bg-orange-500 text-white shadow-xl shadow-orange-500/30 scale-105' : 'bg-slate-50 text-slate-400 hover:bg-slate-100'}`}
           >Coupons 🎫</button>
           
           <div className="flex-1 hidden sm:block"></div>
           
           <div className="flex-1 lg:flex-none flex items-center gap-3 bg-slate-50 px-6 py-4 rounded-3xl border border-slate-100 focus-within:ring-2 ring-blue-600/10 transition-all">
              <span className="text-[10px] font-black text-slate-400 uppercase">Search</span>
              <input type="text" placeholder="아이템 검색..." className="bg-transparent text-sm outline-none w-full lg:w-40 font-bold" />
           </div>
        </div>
      </section>

      {/* 3. Product Grid */}
      <section className="max-w-7xl mx-auto px-6 mt-24">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end mb-16 gap-6">
           <div className="space-y-2">
              <h3 className="text-3xl lg:text-4xl font-black text-slate-900 tracking-tighter uppercase italic">Recommended for You</h3>
              <p className="text-slate-400 text-sm font-medium">오늘 가장 인기 있는 아이템들을 확인해보세요.</p>
           </div>
           <button className="text-[11px] font-black text-blue-600 hover:text-blue-700 transition-colors uppercase tracking-widest bg-blue-50 px-6 py-3 rounded-2xl">See more items ↗</button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10">
           {filteredItems.map((item) => (
             <div key={item.id} className="group bg-white p-7 rounded-[3.5rem] shadow-xl shadow-slate-200/40 border border-slate-50 hover:shadow-2xl hover:border-blue-100 transition-all duration-500 relative flex flex-col h-full">
                {/* Badge */}
                <div className="absolute top-7 left-7 z-10">
                   <span className={`px-4 py-2 rounded-full text-[9px] font-black uppercase tracking-tighter text-white shadow-sm ring-4 ring-white ${item.type === 'Avatar' ? 'bg-blue-600' : item.type === 'Goods' ? 'bg-green-500' : 'bg-orange-500'}`}>
                      {item.tag}
                   </span>
                </div>

                {/* Image Container */}
                <div className={`aspect-square rounded-[2.5rem] mb-8 overflow-hidden relative shadow-inner ${item.type === 'Avatar' ? 'bg-slate-50' : 'bg-slate-50/50'}`}>
                   <img 
                    src={item.img} 
                    className={`w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ${item.type === 'Avatar' ? 'mix-blend-multiply' : ''}`} 
                    alt={item.name} 
                   />
                   {item.type === 'Avatar' && (
                     <div className="absolute inset-0 bg-gradient-to-t from-slate-900/5 to-transparent pointer-events-none"></div>
                   )}
                </div>

                {/* Info */}
                <div className="space-y-3 mb-10 flex-grow">
                   <p className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em]">{item.type} {(item as any).weight && `• ${(item as any).weight}`}</p>
                   <h4 className="text-xl font-black text-slate-900 group-hover:text-blue-600 transition-colors leading-tight">{item.name}</h4>
                </div>

                {/* Footer Action */}
                <div className="flex items-center justify-between pt-6 border-t border-slate-50 mt-auto">
                   <div>
                      <p className="text-[10px] font-bold text-slate-300 uppercase leading-none mb-2">Price</p>
                      <p className="text-2xl font-black text-slate-900">{item.price} <span className="text-xs font-bold text-blue-600">MP</span></p>
                   </div>
                   <button className="w-14 h-14 bg-slate-900 text-white rounded-[1.5rem] flex items-center justify-center hover:bg-blue-600 hover:scale-110 transition-all shadow-xl active:scale-90 group-hover:rotate-6">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M12 4v16m8-8H4" /></svg>
                   </button>
                </div>
             </div>
           ))}
        </div>
      </section>

      {/* 4. Special Event Banner */}
      <section className="max-w-7xl mx-auto px-6 mt-40">
         <div className="bg-gradient-to-br from-blue-700 via-blue-600 to-indigo-800 rounded-[5rem] p-16 lg:p-24 flex flex-col lg:flex-row items-center justify-between gap-16 relative overflow-hidden shadow-2xl shadow-blue-600/40 border border-white/10">
            <div className="space-y-10 relative z-10 text-white text-center lg:text-left">
               <h3 className="text-5xl lg:text-8xl font-black tracking-tighter italic leading-[0.9]">LEGENDARY <br /> <span className="opacity-30">AVATAR DROP</span></h3>
               <p className="text-xl text-blue-100 italic max-w-lg leading-relaxed">"한정판 전설 아바타가 매주 월요일 오후 6시에 <br />시크릿 드랍됩니다. 기회를 놓치지 마세요!"</p>
               <button className="px-12 py-6 bg-white text-slate-900 rounded-[2rem] font-black uppercase tracking-widest hover:bg-slate-900 hover:text-white transition-all shadow-2xl transform hover:-translate-y-1">Check Drop Schedule ↗</button>
            </div>
            
            <div className="relative group lg:w-2/5 flex justify-center lg:justify-end">
               <div className="bg-white/10 backdrop-blur-md p-8 rounded-[4.5rem] border border-white/20 transform -rotate-3 group-hover:rotate-0 transition-all duration-1000 shadow-2xl">
                  <img src="https://images.unsplash.com/photo-1558655146-d09347e92766?q=80&w=600&auto=format&fit=crop" className="rounded-[3rem] shadow-2xl group-hover:scale-105 transition-transform duration-700" alt="Special Drop" />
                  <div className="mt-8 flex justify-between items-center text-white px-2">
                     <span className="font-black text-lg">Secret Mystery Box</span>
                     <span className="bg-red-500 px-5 py-2 rounded-full text-[10px] font-black animate-pulse shadow-lg shadow-red-500/50">COMING SOON</span>
                  </div>
               </div>
            </div>
            
            {/* Shapes */}
            <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-white/5 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2"></div>
            <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-blue-400/10 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/4"></div>
         </div>
      </section>
    </div>
  );
};

export default PointShop;
