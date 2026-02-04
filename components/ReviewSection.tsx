
import React from 'react';

const ReviewSection: React.FC = () => {
  const reviews = [
    {
      name: "Rina Kartika",
      role: "Parent, Business Strategy Examinee",
      text: "멘토링을 통해 제 아이의 학습 동기가 확실히 살아났습니다. 특히 아바타가 성장하는 모습에 아이가 큰 흥미를 느껴요.",
      avatar: "https://picsum.photos/100/100?random=11"
    },
    {
      name: "Fadil Rahman",
      role: "High School Senior",
      text: "AI 세특 빌더가 정말 큰 도움이 되었습니다. 수업 시간에 나눈 이야기들이 훌륭한 탐구 보고서로 변하는 게 신기해요.",
      avatar: "https://picsum.photos/100/100?random=12"
    },
    {
      name: "Melissa Anggraini",
      role: "College Student",
      text: "포인트 보상 시스템 덕분에 공부가 더 이상 고통이 아닌 즐거움이 되었습니다. 매달 기프티콘 받는 재미가 쏠쏠해요.",
      avatar: "https://picsum.photos/100/100?random=13"
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-6 py-20 relative">
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none flex items-center justify-center">
        <span className="text-[20rem] font-black text-slate-200 opacity-20 select-none">REVIEWS</span>
      </div>

      <div className="relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-4xl font-black text-slate-900 mb-4 italic">WHAT OUR STUDENTS SAY</h2>
          <p className="text-slate-500">전국 5,000명 이상의 사용자가 경험한 변화의 목소리입니다.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((rev, i) => (
            <div key={i} className="bg-white p-10 rounded-[3rem] shadow-xl shadow-slate-200/50 border border-slate-50 flex flex-col justify-between">
              <div>
                <div className="text-blue-500 mb-6">
                  <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 24 24"><path d="M14.017 21L14.017 18C14.017 16.8954 14.9124 16 16.017 16H19.017C19.5693 16 20.017 15.5523 20.017 15V9C20.017 8.44772 19.5693 8 19.017 8H15.017C14.4647 8 14.017 8.44772 14.017 9V11C14.017 11.5523 13.5693 12 13.017 12H12.017V21H14.017ZM5.017 21L5.017 18C5.017 16.8954 5.91243 16 7.017 16H10.017C10.5693 16 11.017 15.5523 11.017 15V9C11.017 8.44772 10.5693 8 10.017 8H6.017C5.46472 8 5.017 8.44772 5.017 9V11C5.017 11.5523 4.56928 12 4.017 12H3.017V21H5.017Z" /></svg>
                </div>
                <p className="text-slate-700 text-lg leading-relaxed mb-10 italic">"{rev.text}"</p>
              </div>
              <div className="flex items-center gap-4">
                <img src={rev.avatar} alt={rev.name} className="w-14 h-14 rounded-2xl object-cover" />
                <div>
                  <h4 className="font-bold text-slate-900">{rev.name}</h4>
                  <p className="text-xs text-slate-500">{rev.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ReviewSection;
