
import React, { useState } from 'react';

const SupportSection: React.FC = () => {
  const [activeFaq, setActiveFaq] = useState<number | null>(0);

  const faqs = [
    {
      category: "L2E & Points",
      question: "획득한 MP 포인트는 언제 사용할 수 있나요?",
      answer: "수업 완료 및 퀴즈 제출 즉시 포인트가 적립되며, 포인트샵에서 실시간으로 기프티콘이나 아바타 아이템으로 교환 가능합니다."
    },
    {
      category: "Mentoring",
      question: "멘토 매칭은 어떻게 진행되나요?",
      answer: "AI 레벨 테스트 결과와 학생의 관심사를 분석하여 가장 적합한 전공과 성향을 가진 멘토를 시스템이 자동 추천하며, 학부모님과 상의 후 최종 확정됩니다."
    },
    {
      category: "Admission",
      question: "AI 세특 보고서는 학교에 그대로 제출해도 되나요?",
      answer: "AI가 생성한 초안은 학생의 수업 내용을 바탕으로 한 사실 기록입니다. 담당 멘토의 검수를 거쳐 학생부 기재 요령에 맞게 수정된 최종본을 학교에 제출하시기를 권장합니다."
    },
    {
      category: "Technical",
      question: "화상 수업 중 연결이 끊어지면 어떻게 하나요?",
      answer: "수업 중 기술적 오류 발생 시 24/7 기술 지원팀(02-1234-5678)으로 즉시 연락 주시면 즉각적인 원격 지원을 받으실 수 있습니다."
    }
  ];

  const contactChannels = [
    { title: "Call Support", value: "02-1234-5678", sub: "평일 09:00 - 22:00", icon: "📞", color: "bg-blue-600" },
    { title: "Email Inquiry", value: "help@aimentor.edu", sub: "24시간 접수 가능", icon: "✉️", color: "bg-slate-900" },
    { title: "Kakao Talk", value: "AI멘토아카데미", sub: "실시간 채팅 상담", icon: "💬", color: "bg-yellow-400" }
  ];

  return (
    <div className="bg-[#F9FBFC] min-h-screen pb-32">
      {/* 1. Support Hero */}
      <section className="bg-slate-900 text-white pt-32 pb-48 rounded-b-[5rem] px-6 relative overflow-hidden">
        <div className="max-w-7xl mx-auto text-center relative z-10 space-y-8">
          <span className="text-blue-400 font-black uppercase tracking-[0.4em] text-[10px] bg-white/5 px-4 py-2 rounded-full backdrop-blur-sm">Help & Support Center</span>
          <h1 className="text-5xl lg:text-7xl font-black tracking-tighter italic leading-none">
            WE ARE HERE <br /> <span className="text-blue-500 underline decoration-blue-500/30 underline-offset-8">FOR YOUR SUCCESS</span>
          </h1>
          <p className="text-slate-400 max-w-xl mx-auto text-lg italic leading-relaxed">
            "학습 중 궁금한 점이나 기술적인 도움이 필요하신가요? <br />
            AI 멘토 아카데미 지원팀이 가장 빠르고 정확하게 도와드립니다."
          </p>
          
          <div className="max-w-2xl mx-auto mt-12 bg-white/10 backdrop-blur-xl p-2 rounded-[2.5rem] border border-white/20 flex items-center">
            <input 
              type="text" 
              placeholder="무엇을 도와드릴까요? 검색어를 입력하세요." 
              className="bg-transparent flex-1 px-8 py-4 outline-none text-white placeholder:text-slate-500 font-medium"
            />
            <button className="bg-blue-600 p-4 rounded-3xl hover:bg-blue-500 transition-all shadow-xl shadow-blue-600/20">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
            </button>
          </div>
        </div>

        {/* Decorative Background */}
        <div className="absolute top-0 left-0 w-full h-full opacity-20 pointer-events-none">
          <div className="absolute top-20 right-20 w-96 h-96 bg-blue-600 rounded-full blur-[120px]"></div>
          <div className="absolute bottom-0 left-20 w-80 h-80 bg-indigo-600 rounded-full blur-[100px]"></div>
        </div>
      </section>

      {/* 2. Direct Contact Channels */}
      <section className="max-w-7xl mx-auto px-6 -mt-24 relative z-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {contactChannels.map((channel, i) => (
            <div key={i} className="bg-white p-10 rounded-[3.5rem] shadow-2xl shadow-slate-200/50 border border-slate-50 hover:shadow-blue-600/5 hover:-translate-y-2 transition-all duration-500 group">
              <div className={`w-16 h-16 ${channel.color} rounded-2xl flex items-center justify-center text-3xl mb-8 shadow-lg group-hover:scale-110 transition-transform`}>
                {channel.icon}
              </div>
              <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-2">{channel.title}</p>
              <h4 className="text-2xl font-black text-slate-900 mb-2">{channel.value}</h4>
              <p className="text-sm text-slate-400 font-medium italic">{channel.sub}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 3. FAQ Section */}
      <section className="max-w-7xl mx-auto px-6 mt-40">
        <div className="flex flex-col lg:flex-row gap-24">
          <div className="lg:w-1/3 space-y-6 text-center lg:text-left">
            <h2 className="text-4xl lg:text-5xl font-black tracking-tighter italic uppercase leading-none">
              FREQUENTLY <br />
              <span className="text-blue-600">ASKED QUESTIONS</span>
            </h2>
            <p className="text-slate-500 text-lg leading-relaxed italic">
              가장 자주 묻는 질문들을 모았습니다. <br />
              더 자세한 상담은 1:1 문의를 이용해주세요.
            </p>
            <button className="hidden lg:block px-10 py-4 border-2 border-slate-200 rounded-2xl font-black text-xs uppercase tracking-widest hover:bg-slate-900 hover:text-white transition-all">
              View All FAQ ↗
            </button>
          </div>

          <div className="lg:w-2/3 space-y-4">
            {faqs.map((faq, i) => (
              <div key={i} className="bg-white rounded-[2.5rem] border border-slate-100 overflow-hidden shadow-sm hover:shadow-lg transition-all">
                <button 
                  onClick={() => setActiveFaq(activeFaq === i ? null : i)}
                  className="w-full px-10 py-8 flex items-center justify-between text-left"
                >
                  <div className="flex flex-col sm:flex-row sm:items-center gap-4">
                    <span className="text-[9px] font-black text-blue-600 bg-blue-50 px-3 py-1 rounded-full uppercase tracking-tighter w-fit">{faq.category}</span>
                    <h5 className="text-lg font-black text-slate-900 tracking-tight">{faq.question}</h5>
                  </div>
                  <span className={`text-2xl transition-transform duration-500 ${activeFaq === i ? 'rotate-45 text-blue-600' : 'text-slate-300'}`}>+</span>
                </button>
                <div className={`px-10 overflow-hidden transition-all duration-500 ease-in-out ${activeFaq === i ? 'max-h-64 pb-10 opacity-100' : 'max-h-0 opacity-0'}`}>
                  <p className="text-slate-500 leading-relaxed border-t border-slate-50 pt-8 italic">
                    {faq.answer}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. 1:1 Inquiry Form */}
      <section className="max-w-7xl mx-auto px-6 mt-40">
        <div className="bg-slate-900 rounded-[5rem] overflow-hidden flex flex-col lg:flex-row shadow-2xl">
          <div className="lg:w-2/5 p-16 lg:p-24 text-white space-y-10 relative overflow-hidden bg-gradient-to-br from-slate-900 to-blue-900">
            <h3 className="text-5xl font-black tracking-tighter italic uppercase leading-[0.9] relative z-10">
              STILL HAVE <br /> <span className="text-blue-500">QUESTIONS?</span>
            </h3>
            <p className="text-slate-400 text-lg leading-relaxed relative z-10 italic">
              "상담원이 학생의 학습 현황을 미리 파악하고 연락드립니다. <br />
              궁금한 내용을 아래 양식에 남겨주세요."
            </p>
            <div className="space-y-6 relative z-10 pt-10">
              <div className="flex items-center gap-6">
                <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center">👋</div>
                <div>
                   <p className="text-sm font-black">평균 응답 시간</p>
                   <p className="text-xs text-blue-400 font-bold uppercase tracking-widest">Under 30 Minutes</p>
                </div>
              </div>
            </div>
            {/* Shapes */}
            <div className="absolute top-0 right-0 w-80 h-80 bg-blue-600/20 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2"></div>
          </div>

          <div className="lg:w-3/5 p-16 lg:p-24 bg-white">
             <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                   <div className="space-y-3">
                      <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-4">Full Name</label>
                      <input type="text" placeholder="성함을 입력하세요" className="w-full bg-slate-50 border border-slate-100 rounded-[2rem] px-8 py-5 text-sm outline-none focus:ring-4 ring-blue-600/5 transition-all font-bold" />
                   </div>
                   <div className="space-y-3">
                      <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-4">Phone Number</label>
                      <input type="text" placeholder="010-0000-0000" className="w-full bg-slate-50 border border-slate-100 rounded-[2rem] px-8 py-5 text-sm outline-none focus:ring-4 ring-blue-600/5 transition-all font-bold" />
                   </div>
                </div>
                <div className="space-y-3">
                   <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-4">Subject / Category</label>
                   <select className="w-full bg-slate-50 border border-slate-100 rounded-[2rem] px-8 py-5 text-sm outline-none focus:ring-4 ring-blue-600/5 transition-all font-bold appearance-none">
                      <option>교육 과정 및 수강 문의</option>
                      <option>L2E 포인트 및 리워드 관련</option>
                      <option>기술적 오류 및 결제 문의</option>
                      <option>기타 문의</option>
                   </select>
                </div>
                <div className="space-y-3">
                   <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-4">Message</label>
                   <textarea rows={5} placeholder="문의 내용을 상세히 작성해 주세요." className="w-full bg-slate-50 border border-slate-100 rounded-[3rem] px-8 py-6 text-sm outline-none focus:ring-4 ring-blue-600/5 transition-all font-bold"></textarea>
                </div>
                <button className="w-full py-6 bg-blue-600 text-white rounded-[2.5rem] font-black uppercase tracking-[0.2em] hover:bg-slate-900 transition-all shadow-2xl shadow-blue-600/20 active:scale-95 text-xs">
                  Send Inquiry Now ↗
                </button>
             </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SupportSection;
