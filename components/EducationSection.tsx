
import React from 'react';

const EducationSection: React.FC = () => {
  const coreFeatures = [
    {
      title: "1:1 화상 멘토링",
      description: "실시간 대화 내용을 AI가 분석하여 핵심 키워드를 추출하고 수업 내용을 자동 요약합니다.",
      tag: "CORE SERVICE"
    },
    {
      title: "AI 레벨 테스트",
      description: "개별 맞춤형 진단 로직을 통해 정교한 학습 수준 및 성향을 분석합니다.",
      tag: "CORE SERVICE"
    },
    {
      title: "아바타 성장 시스템",
      description: "학습 결과에 따라 성장하는 개인 아바타. 젖먹이 아기에서 성인까지, 성취감을 시각화합니다.",
      tag: "GAMIFICATION"
    },
    {
      title: "L2E (Learn to Earn)",
      description: "학습 성과가 즉시 포인트로 보상됩니다. 포인트는 아이템 구매나 현금화가 가능합니다.",
      tag: "ECONOMY"
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-6 py-12">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-black text-slate-900 mb-4">Discover the Freedom to Learn</h2>
        <p className="text-slate-600 max-w-2xl mx-auto text-lg font-light">
          단순한 지식 전달을 넘어, AI와 게임화 요소를 결합한 전인교육 시스템입니다.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {coreFeatures.map((feature, idx) => (
          <div key={idx} className="bg-white p-8 rounded-[2rem] shadow-sm border border-slate-100 hover:shadow-xl transition-all group">
            <div className="text-[0.65rem] font-black tracking-widest text-blue-600 mb-4 px-2 py-1 bg-blue-50 w-fit rounded-full uppercase">
              {feature.tag}
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors">{feature.title}</h3>
            <p className="text-slate-500 leading-relaxed text-sm">
              {feature.description}
            </p>
          </div>
        ))}
      </div>

      <div className="mt-20 bg-slate-900 rounded-[3rem] p-12 text-white flex flex-col md:flex-row items-center gap-12 overflow-hidden relative">
        <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/20 blur-[120px] rounded-full"></div>
        <div className="flex-1 z-10">
          <h3 className="text-3xl font-black mb-6">AI 세특 빌더 (Student Record Builder)</h3>
          <p className="text-slate-400 mb-8 leading-relaxed max-w-lg">
            멘토와의 수업 중 언급된 주제를 AI가 분석하여 '학교 생활기록부' 기재용 탐구 보고서 초안을 자동 생성합니다. 환경 이슈부터 생명과학까지, 입시와 직결된 결과물을 제공합니다.
          </p>
          <button className="px-8 py-4 bg-blue-600 hover:bg-blue-500 rounded-2xl font-bold text-sm transition-all shadow-lg shadow-blue-600/20">
            상담 신청하기
          </button>
        </div>
        <div className="flex-1 w-full max-w-sm">
          <div className="bg-slate-800/50 backdrop-blur-md border border-slate-700 p-6 rounded-3xl">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-3 h-3 bg-red-500 rounded-full"></div>
              <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
              <div className="w-3 h-3 bg-green-500 rounded-full"></div>
            </div>
            <div className="space-y-4">
              <div className="h-4 bg-slate-700 rounded w-3/4"></div>
              <div className="h-4 bg-slate-700 rounded w-1/2"></div>
              <div className="h-20 bg-slate-700/50 rounded w-full flex items-center justify-center text-[10px] text-slate-500 font-mono">
                GENERATING REPORT...
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EducationSection;
