
import React from 'react';

const DashboardSection: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-6 py-12">
      <div className="bg-slate-50 border border-slate-200 rounded-[3.5rem] p-12 overflow-hidden relative">
        <div className="flex flex-col md:flex-row gap-12">
          {/* Left: Avatar Status */}
          <div className="flex-1 bg-white rounded-[2.5rem] p-8 shadow-sm border border-slate-100">
            <div className="flex justify-between items-center mb-8">
              <h3 className="font-black text-xl text-slate-900">내 아바타</h3>
              <span className="bg-blue-600 text-white text-[10px] font-black px-3 py-1 rounded-full uppercase">Lv.12 초등기</span>
            </div>
            
            <div className="flex flex-col items-center justify-center py-10">
              <div className="w-48 h-48 bg-slate-100 rounded-full flex items-center justify-center mb-6 relative">
                 {/* Placeholder for Avatar */}
                 <div className="w-32 h-32 bg-blue-200 rounded-3xl rotate-45 flex items-center justify-center">
                    <span className="text-4xl -rotate-45">👶</span>
                 </div>
                 <div className="absolute -bottom-2 px-6 py-2 bg-slate-900 text-white text-xs font-bold rounded-2xl shadow-lg">
                   Minty (아바타명)
                 </div>
              </div>
              <div className="w-full space-y-2">
                <div className="flex justify-between text-[10px] font-bold text-slate-400">
                  <span>EXP</span>
                  <span>780 / 1000</span>
                </div>
                <div className="w-full h-2 bg-slate-100 rounded-full overflow-hidden">
                  <div className="h-full bg-blue-600 w-[78%]"></div>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Points & Classes */}
          <div className="flex-[1.5] space-y-8">
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-white rounded-[2.5rem] p-8 shadow-sm border border-slate-100">
                <p className="text-xs font-bold text-slate-400 mb-2 uppercase tracking-widest">Available Points</p>
                <p className="text-4xl font-black text-slate-900">45,800 <span className="text-lg text-blue-600">MP</span></p>
                <button className="mt-6 w-full py-3 bg-slate-900 text-white rounded-2xl font-bold text-sm hover:bg-slate-800 transition-all">
                  포인트 샵 가기
                </button>
              </div>
              <div className="bg-white rounded-[2.5rem] p-8 shadow-sm border border-slate-100">
                <p className="text-xs font-bold text-slate-400 mb-2 uppercase tracking-widest">Next Lesson</p>
                <p className="text-xl font-bold text-slate-900">Today, 18:00</p>
                <p className="text-xs text-slate-500 mt-1">with Mentor Kevin Lee</p>
                <button className="mt-6 w-full py-3 border border-slate-200 rounded-2xl font-bold text-sm hover:bg-slate-50 transition-all">
                  강의실 입장
                </button>
              </div>
            </div>

            <div className="bg-white rounded-[2.5rem] p-8 shadow-sm border border-slate-100">
              <h4 className="font-black text-slate-900 mb-6">최근 학습 분석 (AI Insight)</h4>
              <div className="space-y-4">
                <div className="flex items-center justify-between p-4 bg-slate-50 rounded-2xl border border-slate-100">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 bg-green-100 rounded-xl flex items-center justify-center text-green-600">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                    </div>
                    <div>
                      <p className="text-sm font-bold text-slate-900">감사 노트 작성 완료</p>
                      <p className="text-[10px] text-slate-500">+150 MP 보너스 획득</p>
                    </div>
                  </div>
                  <span className="text-[10px] text-slate-400">2시간 전</span>
                </div>
                <div className="flex items-center justify-between p-4 bg-slate-50 rounded-2xl border border-slate-100">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 bg-blue-100 rounded-xl flex items-center justify-center text-blue-600">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
                    </div>
                    <div>
                      <p className="text-sm font-bold text-slate-900">AI 세특 보고서 초안 도착</p>
                      <p className="text-[10px] text-slate-500">'기후 변화' 주제 관련 보고서</p>
                    </div>
                  </div>
                  <span className="text-[10px] text-slate-400">어제</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardSection;
