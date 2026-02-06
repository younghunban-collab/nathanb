
import React, { useState, useEffect } from 'react';

type AdminTab = 'Dashboard' | 'Members' | 'Finances' | 'Assignments' | 'Notices' | 'Applicants';

const AdminDashboard: React.FC = () => {
  const [users, setUsers] = useState<any[]>([]);
  const [applicants, setApplicants] = useState<any[]>([]);
  const [selectedUser, setSelectedUser] = useState<any | null>(null);
  const [selectedApplicant, setSelectedApplicant] = useState<any | null>(null);
  const [notice, setNotice] = useState('');
  const [noticeHistory, setNoticeHistory] = useState<any[]>([]);
  const [currentTab, setCurrentTab] = useState<AdminTab>('Dashboard');
  const [stats, setStats] = useState({
    totalUsers: 0,
    activeUsers: 0,
    totalRevenue: 0,
    avgPoints: 0
  });

  useEffect(() => {
    const allUsers = JSON.parse(localStorage.getItem('academy_users') || '[]');
    const allNotices = JSON.parse(localStorage.getItem('academy_notices') || '[]');
    const allApplicants = JSON.parse(localStorage.getItem('academy_mentor_applicants') || '[]');
    setUsers(allUsers);
    setApplicants(allApplicants);
    setNoticeHistory(allNotices.reverse()); // 최신순
    
    setStats({
      totalUsers: allUsers.length,
      activeUsers: allUsers.filter((u: any) => u.status === 'Active').length,
      totalRevenue: allUsers.filter((u: any) => u.paymentStatus === 'Paid').length * 250000,
      avgPoints: Math.round(allUsers.reduce((acc: number, u: any) => acc + (u.points || 0), 0) / (allUsers.length || 1))
    });
  }, [currentTab]);

  const handleUpdatePayment = (email: string, status: string) => {
    const updated = users.map(u => u.email === email ? {...u, paymentStatus: status} : u);
    localStorage.setItem('academy_users', JSON.stringify(updated));
    setUsers(updated);
  };

  const handleUpdateApplicantStatus = (id: number, status: string) => {
    const updated = applicants.map(a => a.id === id ? {...a, status} : a);
    localStorage.setItem('academy_mentor_applicants', JSON.stringify(updated));
    setApplicants(updated);
  };

  const handleDeleteApplicant = (id: number) => {
    if(!window.confirm('지원 정보를 삭제하시겠습니까?')) return;
    const updated = applicants.filter(a => a.id !== id);
    localStorage.setItem('academy_mentor_applicants', JSON.stringify(updated));
    setApplicants(updated);
  };

  const sendNotice = () => {
    if (!notice.trim()) return;
    const notices = JSON.parse(localStorage.getItem('academy_notices') || '[]');
    const newNotice = { id: Date.now(), text: notice, date: new Date().toISOString() };
    const updatedNotices = [...notices, newNotice];
    localStorage.setItem('academy_notices', JSON.stringify(updatedNotices));
    setNoticeHistory([newNotice, ...noticeHistory]);
    setNotice('');
    alert('전체 공지사항이 전송되었습니다.');
  };

  const renderContent = () => {
    switch (currentTab) {
      case 'Dashboard':
        return (
          <div className="space-y-10 animate-in fade-in slide-in-from-bottom-4 duration-500">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { label: 'Total Members', val: stats.totalUsers, icon: '👥', color: 'text-blue-600' },
                { label: 'Active Learners', val: stats.activeUsers, icon: '⚡', color: 'text-orange-500' },
                { label: 'Avg. Points', val: stats.avgPoints, icon: '💎', color: 'text-purple-600' },
                { label: 'Revenue (Mock)', val: `₩${stats.totalRevenue.toLocaleString()}`, icon: '💰', color: 'text-green-600' },
              ].map((s, i) => (
                <div key={i} className="bg-white p-8 rounded-[2.5rem] shadow-sm border border-slate-100 group hover:border-blue-500 transition-all">
                  <div className="text-3xl mb-4">{s.icon}</div>
                  <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">{s.label}</p>
                  <p className={`text-2xl font-black tracking-tight ${s.color}`}>{s.val}</p>
                </div>
              ))}
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="bg-white rounded-[2.5rem] p-10 shadow-sm border border-slate-100">
                <h3 className="text-lg font-black text-slate-900 tracking-tight mb-8 italic">Academy Activity Pulse</h3>
                <div className="space-y-8">
                  {[
                    { label: 'Platform Engagement', rate: 84, color: 'bg-blue-600' },
                    { label: 'Assignment Completion', rate: 72, color: 'bg-orange-500' },
                    { label: 'AI Mentor Utilization', rate: 95, color: 'bg-purple-600' },
                  ].map((act, i) => (
                    <div key={i} className="space-y-3">
                      <div className="flex justify-between text-[10px] font-black uppercase tracking-widest">
                        <span className="text-slate-400">{act.label}</span>
                        <span className="text-slate-900">{act.rate}%</span>
                      </div>
                      <div className="h-2 w-full bg-slate-100 rounded-full overflow-hidden">
                        <div className={`h-full ${act.color} transition-all duration-1000`} style={{ width: `${act.rate}%` }}></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="bg-slate-900 rounded-[2.5rem] p-10 text-white shadow-xl relative overflow-hidden">
                <h3 className="text-lg font-black italic tracking-tighter mb-6">Recent System Logs</h3>
                <div className="space-y-4 text-[11px] font-medium text-slate-400">
                   <div className="flex gap-4 p-3 bg-white/5 rounded-xl border border-white/10 italic">
                      <span className="text-blue-400 font-bold uppercase">System</span>
                      <p>Backup completed successfully. (04:00 AM)</p>
                   </div>
                   <div className="flex gap-4 p-3 bg-white/5 rounded-xl border border-white/10 italic">
                      <span className="text-orange-400 font-bold uppercase">User</span>
                      <p>New member "James" joined via IELTS course.</p>
                   </div>
                   <div className="flex gap-4 p-3 bg-white/5 rounded-xl border border-white/10 italic">
                      <span className="text-green-400 font-bold uppercase">L2E</span>
                      <p>Total distributed points today: 12,450 MP</p>
                   </div>
                </div>
              </div>
            </div>
          </div>
        );
      
      case 'Members':
        return (
          <div className="bg-white rounded-[2.5rem] shadow-sm border border-slate-100 overflow-hidden animate-in fade-in duration-500">
            <div className="p-8 border-b border-slate-50 flex flex-col sm:flex-row justify-between items-center gap-4">
              <h3 className="text-lg font-black text-slate-900 tracking-tight">User Management</h3>
              <div className="flex gap-3">
                 <input type="text" placeholder="Search by name or ID..." className="bg-slate-50 px-6 py-3 rounded-2xl text-xs outline-none w-64 font-bold border border-slate-100 focus:border-blue-400 transition-all" />
                 <button className="px-6 py-3 bg-slate-900 text-white text-[10px] font-black rounded-2xl uppercase tracking-widest">Filter</button>
              </div>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead>
                  <tr className="bg-slate-50/50 border-b border-slate-50">
                    <th className="px-8 py-4 text-[10px] font-black text-slate-400 uppercase tracking-widest">Member Info</th>
                    <th className="px-8 py-4 text-[10px] font-black text-slate-400 uppercase tracking-widest">Course</th>
                    <th className="px-8 py-4 text-[10px] font-black text-slate-400 uppercase tracking-widest">Points</th>
                    <th className="px-8 py-4 text-[10px] font-black text-slate-400 uppercase tracking-widest">Status</th>
                    <th className="px-8 py-4 text-[10px] font-black text-slate-400 uppercase tracking-widest">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-50">
                  {users.map((u, i) => (
                    <tr key={i} className="hover:bg-slate-50/50 transition-colors group">
                      <td className="px-8 py-6">
                         <div className="flex items-center gap-3">
                           <div className="w-10 h-10 bg-blue-50 rounded-xl flex items-center justify-center font-black text-xs text-blue-600">{u.name.charAt(0)}</div>
                           <div>
                             <p className="text-sm font-black text-slate-900">{u.name}</p>
                             <p className="text-[10px] text-slate-400 font-bold">{u.id}</p>
                           </div>
                         </div>
                      </td>
                      <td className="px-8 py-6">
                         <span className="text-[10px] font-black text-blue-600 bg-blue-50 px-3 py-1.5 rounded-full uppercase tracking-tighter">{u.interestedCourse || '일반 영어'}</span>
                      </td>
                      <td className="px-8 py-6">
                         <p className="text-xs font-black text-slate-900">💎 {u.points?.toLocaleString() || 0}</p>
                      </td>
                      <td className="px-8 py-6">
                         <span className="text-[9px] font-black text-green-500 bg-green-50 px-3 py-1 rounded-full uppercase italic border border-green-100">{u.status}</span>
                      </td>
                      <td className="px-8 py-6">
                         <button onClick={() => setSelectedUser(u)} className="px-4 py-2 bg-slate-900 text-white text-[9px] font-black rounded-xl uppercase tracking-widest hover:bg-blue-600 transition-all">Details</button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        );

      case 'Assignments':
        return (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 animate-in fade-in duration-500">
            <div className="lg:col-span-2 bg-white rounded-[2.5rem] shadow-sm border border-slate-100 overflow-hidden">
               <div className="p-8 border-b border-slate-50">
                  <h3 className="text-lg font-black text-slate-900 tracking-tight italic uppercase">Learning Submissions</h3>
               </div>
               <div className="p-4 space-y-4">
                  {[
                    { user: '박지수', task: 'AI 기술 윤리 보고서', date: '2025-02-24', status: 'Graded', score: '95/100' },
                    { user: '김영희', task: 'IELTS Speaking Script', date: '2025-02-23', status: 'Pending', score: '-' },
                    { user: '이민호', task: '데일리 퀴즈 #24', date: '2025-02-23', status: 'Graded', score: '80/100' },
                    { user: 'Sarah', task: 'Business English Essay', date: '2025-02-22', status: 'Pending', score: '-' },
                  ].map((sub, i) => (
                    <div key={i} className="flex items-center justify-between p-6 bg-slate-50/50 border border-slate-100 rounded-[2rem] hover:bg-white hover:shadow-xl transition-all group">
                       <div className="flex items-center gap-4">
                          <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-xl shadow-sm italic font-black text-slate-300">{sub.user.charAt(0)}</div>
                          <div>
                             <p className="text-sm font-black text-slate-900">{sub.task}</p>
                             <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest">By {sub.user} • {sub.date}</p>
                          </div>
                       </div>
                       <div className="text-right">
                          <span className={`text-[9px] font-black px-3 py-1.5 rounded-full uppercase italic border ${
                            sub.status === 'Graded' ? 'bg-green-50 text-green-600 border-green-100' : 'bg-orange-50 text-orange-600 border-orange-100'
                          }`}>{sub.status}</span>
                          <p className="mt-2 text-xs font-black text-slate-900">{sub.score}</p>
                       </div>
                    </div>
                  ))}
               </div>
            </div>
            
            <div className="bg-slate-900 rounded-[2.5rem] p-10 text-white shadow-xl h-fit">
               <h3 className="text-lg font-black italic tracking-tighter mb-8 uppercase">Evaluation Tools</h3>
               <div className="space-y-4">
                  <button className="w-full py-5 bg-white/5 border border-white/10 rounded-2xl text-[11px] font-black uppercase tracking-widest hover:bg-blue-600 transition-all text-left px-8 flex justify-between items-center group">
                    AI Auto Grader <span className="text-xl group-hover:translate-x-2 transition-transform">→</span>
                  </button>
                  <button className="w-full py-5 bg-white/5 border border-white/10 rounded-2xl text-[11px] font-black uppercase tracking-widest hover:bg-blue-600 transition-all text-left px-8 flex justify-between items-center group">
                    Plagiarism Checker <span className="text-xl group-hover:translate-x-2 transition-transform">→</span>
                  </button>
                  <button className="w-full py-5 bg-white/5 border border-white/10 rounded-2xl text-[11px] font-black uppercase tracking-widest hover:bg-blue-600 transition-all text-left px-8 flex justify-between items-center group">
                    Feedback Generator <span className="text-xl group-hover:translate-x-2 transition-transform">→</span>
                  </button>
               </div>
            </div>
          </div>
        );

      case 'Notices':
        return (
          <div className="grid grid-cols-1 xl:grid-cols-2 gap-8 animate-in fade-in duration-500">
            <div className="bg-slate-900 rounded-[2.5rem] p-12 text-white shadow-xl relative overflow-hidden">
               <div className="relative z-10 space-y-10">
                  <h3 className="text-3xl font-black italic tracking-tighter uppercase leading-none">Global Notice <br /> <span className="text-blue-500">Broadcast</span></h3>
                  <div className="space-y-4">
                    <label className="text-[10px] font-black text-blue-400 uppercase tracking-[0.3em] ml-2">Message Content</label>
                    <textarea 
                      value={notice}
                      onChange={(e) => setNotice(e.target.value)}
                      placeholder="공지사항 내용을 입력하세요. 전송 시 모든 회원에게 즉시 노출됩니다..." 
                      className="w-full h-48 bg-white/5 border border-white/10 rounded-[2rem] p-8 text-sm text-white placeholder:text-slate-600 outline-none focus:ring-2 ring-blue-500/50 shadow-inner italic"
                    ></textarea>
                  </div>
                  <button 
                    onClick={sendNotice}
                    className="w-full py-6 bg-blue-600 hover:bg-blue-500 rounded-[1.5rem] font-black uppercase tracking-widest text-xs transition-all shadow-2xl shadow-blue-600/20 active:scale-95"
                  >
                    Broadcast System-wide ↗
                  </button>
               </div>
               <div className="absolute top-0 right-0 w-80 h-80 bg-blue-600/10 blur-[100px] -translate-y-1/2 translate-x-1/2"></div>
            </div>

            <div className="bg-white rounded-[2.5rem] p-12 shadow-sm border border-slate-100 flex flex-col">
               <h3 className="text-lg font-black text-slate-900 tracking-tight italic uppercase mb-10">Broadcast History</h3>
               <div className="space-y-6 flex-1 overflow-y-auto custom-scrollbar pr-4">
                  {noticeHistory.length > 0 ? (
                    noticeHistory.map((item, i) => (
                      <div key={i} className="p-6 bg-slate-50 rounded-[2rem] border border-slate-100 space-y-3 relative group">
                        <div className="flex justify-between items-center">
                          <span className="text-[9px] font-black text-blue-600 uppercase tracking-widest">Notice #{item.id}</span>
                          <span className="text-[9px] font-bold text-slate-400">{new Date(item.date).toLocaleString()}</span>
                        </div>
                        <p className="text-xs text-slate-700 leading-relaxed italic">{item.text}</p>
                        <button className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 text-red-400 text-[10px] font-bold transition-all">Delete</button>
                      </div>
                    ))
                  ) : (
                    <div className="h-full flex flex-col items-center justify-center text-slate-300 gap-4">
                       <span className="text-5xl">📄</span>
                       <p className="text-xs font-bold uppercase tracking-widest">No history found</p>
                    </div>
                  )}
               </div>
            </div>
          </div>
        );

      case 'Finances':
        return (
          <div className="space-y-8 animate-in fade-in duration-500">
             <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {[
                  { label: 'Active Subscriptions', val: '₩4,250,000', color: 'text-blue-600' },
                  { label: 'Pending Payments', val: '₩750,000', color: 'text-orange-500' },
                  { label: 'Unpaid Overdue', val: '₩1,200,000', color: 'text-red-600' }
                ].map((f, i) => (
                  <div key={i} className="bg-white p-8 rounded-[2.5rem] shadow-sm border border-slate-100">
                    <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">{f.label}</p>
                    <p className={`text-2xl font-black ${f.color}`}>{f.val}</p>
                  </div>
                ))}
             </div>
             
             <div className="bg-white rounded-[2.5rem] shadow-sm border border-slate-100 overflow-hidden">
                <div className="p-8 border-b border-slate-50">
                   <h3 className="text-lg font-black text-slate-900 tracking-tight italic uppercase">Transaction Records</h3>
                </div>
                <div className="overflow-x-auto">
                   <table className="w-full text-left">
                      <thead>
                        <tr className="bg-slate-50/50 border-b border-slate-50">
                          <th className="px-8 py-4 text-[10px] font-black text-slate-400 uppercase tracking-widest">Member</th>
                          <th className="px-8 py-4 text-[10px] font-black text-slate-400 uppercase tracking-widest">Plan</th>
                          <th className="px-8 py-4 text-[10px] font-black text-slate-400 uppercase tracking-widest">Status</th>
                          <th className="px-8 py-4 text-[10px] font-black text-slate-400 uppercase tracking-widest">Actions</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-50">
                        {users.map((u, i) => (
                          <tr key={i} className="hover:bg-slate-50/50">
                             <td className="px-8 py-6">
                                <p className="text-sm font-black text-slate-900">{u.name}</p>
                                <p className="text-[9px] text-slate-400 font-bold uppercase">{u.email}</p>
                             </td>
                             <td className="px-8 py-6">
                                <p className="text-[10px] font-black text-slate-600 uppercase">Standard Course Plan</p>
                             </td>
                             <td className="px-8 py-6">
                                <select 
                                  value={u.paymentStatus}
                                  onChange={(e) => handleUpdatePayment(u.email, e.target.value)}
                                  className={`text-[9px] font-black px-3 py-1.5 rounded-full outline-none border ${
                                    u.paymentStatus === 'Paid' ? 'bg-green-50 text-green-600 border-green-100' : 
                                    u.paymentStatus === 'Pending' ? 'bg-orange-50 text-orange-600 border-orange-100' : 'bg-red-50 text-red-600 border-red-100'
                                  }`}
                                >
                                  <option value="Paid">Paid</option>
                                  <option value="Pending">Pending</option>
                                  <option value="Overdue">Overdue</option>
                                </select>
                             </td>
                             <td className="px-8 py-6">
                                <button className="text-[10px] font-black text-blue-600 hover:underline uppercase">Invoice ↗</button>
                             </td>
                          </tr>
                        ))}
                      </tbody>
                   </table>
                </div>
             </div>
          </div>
        );

      case 'Applicants':
        return (
          <div className="bg-white rounded-[2.5rem] shadow-sm border border-slate-100 overflow-hidden animate-in fade-in duration-500">
            <div className="p-8 border-b border-slate-50 flex justify-between items-center">
              <h3 className="text-lg font-black text-slate-900 tracking-tight italic uppercase">Mentor Applications</h3>
              <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Total: {applicants.length}</p>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead>
                  <tr className="bg-slate-50/50 border-b border-slate-50">
                    <th className="px-8 py-4 text-[10px] font-black text-slate-400 uppercase tracking-widest">Applicant</th>
                    <th className="px-8 py-4 text-[10px] font-black text-slate-400 uppercase tracking-widest">Specialty</th>
                    <th className="px-8 py-4 text-[10px] font-black text-slate-400 uppercase tracking-widest">Apply Date</th>
                    <th className="px-8 py-4 text-[10px] font-black text-slate-400 uppercase tracking-widest">Status</th>
                    <th className="px-8 py-4 text-[10px] font-black text-slate-400 uppercase tracking-widest">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-50">
                  {applicants.length > 0 ? applicants.map((a, i) => (
                    <tr key={i} className="hover:bg-slate-50/50 group">
                      <td className="px-8 py-6">
                         <div>
                            <p className="text-sm font-black text-slate-900">{a.name}</p>
                            <p className="text-[10px] text-slate-400">{a.email}</p>
                         </div>
                      </td>
                      <td className="px-8 py-6">
                         <span className="text-[10px] font-black text-blue-600 uppercase tracking-tighter">{a.specialty}</span>
                      </td>
                      <td className="px-8 py-6">
                         <p className="text-[10px] font-bold text-slate-400">{new Date(a.applyDate).toLocaleDateString()}</p>
                      </td>
                      <td className="px-8 py-6">
                         <select 
                          value={a.status}
                          onChange={(e) => handleUpdateApplicantStatus(a.id, e.target.value)}
                          className={`text-[9px] font-black px-3 py-1.5 rounded-full outline-none border ${
                            a.status === 'Approved' ? 'bg-green-50 text-green-600 border-green-100' : 
                            a.status === 'Pending' ? 'bg-orange-50 text-orange-600 border-orange-100' : 'bg-red-50 text-red-600 border-red-100'
                          }`}
                         >
                           <option value="Pending">Pending</option>
                           <option value="Approved">Approved</option>
                           <option value="Rejected">Rejected</option>
                         </select>
                      </td>
                      <td className="px-8 py-6">
                         <div className="flex gap-4">
                            <button onClick={() => setSelectedApplicant(a)} className="text-[10px] font-black text-blue-600 hover:underline uppercase">View Detail</button>
                            <button onClick={() => handleDeleteApplicant(a.id)} className="text-[10px] font-black text-red-400 hover:text-red-600 uppercase">Delete</button>
                         </div>
                      </td>
                    </tr>
                  )) : (
                    <tr>
                      <td colSpan={5} className="px-8 py-12 text-center text-slate-400 text-xs font-bold italic uppercase tracking-widest">No applications found</td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>
        );
      
      default:
        return null;
    }
  };

  return (
    <div className="flex flex-col lg:flex-row min-h-screen bg-slate-50 pt-20">
      {/* Sidebar Navigation */}
      <aside className="w-full lg:w-72 bg-slate-900 text-white p-8 space-y-8 flex-shrink-0 lg:fixed lg:h-full z-40">
        <div className="space-y-4">
           <h2 className="text-xl font-black italic tracking-tighter">ADMIN CONSOLE</h2>
           <div className="h-0.5 w-12 bg-blue-500"></div>
        </div>
        <nav className="space-y-2">
           {[
             { id: 'Dashboard', icon: '📊' },
             { id: 'Members', icon: '👥' },
             { id: 'Finances', icon: '💰' },
             { id: 'Assignments', icon: '📝' },
             { id: 'Notices', icon: '📢' },
             { id: 'Applicants', icon: '📜' }
           ].map(m => (
             <button 
              key={m.id} 
              onClick={() => setCurrentTab(m.id as AdminTab)}
              className={`w-full text-left px-4 py-4 rounded-2xl text-[10px] font-black uppercase tracking-[0.2em] transition-all flex items-center gap-4 ${currentTab === m.id ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/20 translate-x-2' : 'text-slate-500 hover:bg-white/5'}`}
             >
               <span className="text-lg opacity-80">{m.icon}</span>
               {m.id}
             </button>
           ))}
        </nav>

        <div className="pt-10 border-t border-white/5">
           <button onClick={() => window.location.reload()} className="w-full text-left px-4 py-3 text-slate-500 hover:text-white transition-all text-[10px] font-black uppercase tracking-widest flex items-center gap-4">
              <span className="text-lg opacity-50">↩</span> Back to Portal
           </button>
        </div>
      </aside>

      {/* Main Content Area */}
      <div className="flex-1 lg:ml-72 p-6 md:p-12 max-w-[1400px] w-full">
        {/* Header Breadcrumb */}
        <div className="mb-12 flex justify-between items-end">
           <div>
             <span className="text-[10px] font-black text-blue-600 uppercase tracking-[0.4em] mb-3 block">Academy Control Panel</span>
             <h1 className="text-4xl font-black text-slate-900 tracking-tighter italic uppercase">{currentTab}</h1>
           </div>
           <div className="flex items-center gap-4 bg-white px-6 py-3 rounded-2xl border border-slate-100 shadow-sm">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              <span className="text-[10px] font-black uppercase text-slate-400">System Online</span>
           </div>
        </div>

        {renderContent()}
      </div>

      {/* Detail User Modal */}
      {selectedUser && (
        <div className="fixed inset-0 z-[200] flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-slate-900/60 backdrop-blur-md" onClick={() => setSelectedUser(null)}></div>
          <div className="relative w-full max-w-2xl bg-white rounded-[3rem] shadow-2xl overflow-hidden p-10 max-h-[90vh] overflow-y-auto custom-scrollbar">
             <div className="flex items-start justify-between mb-8">
                <div className="flex items-center gap-6">
                   <div className="w-20 h-20 bg-blue-50 rounded-3xl flex items-center justify-center text-4xl shadow-inner italic font-black text-blue-600">{selectedUser.name.charAt(0)}</div>
                   <div>
                      <h4 className="text-2xl font-black text-slate-900">{selectedUser.name} <span className="text-sm font-bold text-slate-300 ml-2">({selectedUser.id})</span></h4>
                      <p className="text-sm font-bold text-slate-400 tracking-widest uppercase">Member Since: {new Date(selectedUser.joinDate).toLocaleDateString()}</p>
                   </div>
                </div>
                <button onClick={() => setSelectedUser(null)} className="p-2 text-slate-400 hover:text-slate-900 transition-colors">
                   <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M6 18L18 6M6 6l12 12" /></svg>
                </button>
             </div>
             <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
                <div className="p-6 bg-slate-50 rounded-[2.5rem] space-y-2 border border-slate-100">
                   <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Contact Information</p>
                   <p className="text-sm font-bold text-slate-800">📧 {selectedUser.email}</p>
                   <p className="text-sm font-bold text-slate-800">📞 {selectedUser.phone || 'N/A'}</p>
                   <p className="text-sm font-bold text-slate-800">🎂 {selectedUser.birthDate || 'N/A'}</p>
                </div>
                <div className="p-6 bg-slate-50 rounded-[2.5rem] space-y-2 border border-slate-100">
                   <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Learning Status</p>
                   <p className="text-sm font-bold text-blue-600">📘 {selectedUser.interestedCourse || 'N/A'}</p>
                   <p className="text-sm font-bold text-slate-800">💎 {selectedUser.points?.toLocaleString() || 0} MP</p>
                   <p className="text-sm font-bold text-slate-800">📍 {selectedUser.address || 'N/A'}</p>
                </div>
             </div>
             <div className="mt-12 flex gap-4">
                <button className="flex-1 py-5 bg-slate-900 text-white rounded-[1.5rem] font-black uppercase text-xs tracking-widest hover:bg-blue-600 transition-all shadow-xl">Full Academic Report ↗</button>
                <button className="px-8 py-5 border-2 border-slate-100 text-slate-400 rounded-[1.5rem] font-black uppercase text-xs hover:text-red-500 hover:border-red-100 transition-all">Restict</button>
             </div>
          </div>
        </div>
      )}

      {/* Applicant Detail Modal */}
      {selectedApplicant && (
        <div className="fixed inset-0 z-[200] flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-slate-900/60 backdrop-blur-md" onClick={() => setSelectedApplicant(null)}></div>
          <div className="relative w-full max-w-2xl bg-white rounded-[3rem] shadow-2xl p-12 overflow-y-auto max-h-[90vh] custom-scrollbar">
             <div className="flex justify-between items-center mb-10">
                <h3 className="text-3xl font-black italic uppercase tracking-tighter text-slate-900">Application Detail</h3>
                <button onClick={() => setSelectedApplicant(null)} className="text-slate-400 hover:text-slate-900">
                   <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M6 18L18 6M6 6l12 12" /></svg>
                </button>
             </div>
             <div className="space-y-8">
                <div className="grid grid-cols-2 gap-8">
                   <div className="space-y-1">
                      <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Applicant Name</p>
                      <p className="text-xl font-black">{selectedApplicant.name}</p>
                   </div>
                   <div className="space-y-1 text-right">
                      <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Apply Date</p>
                      <p className="text-sm font-bold">{new Date(selectedApplicant.applyDate).toLocaleString()}</p>
                   </div>
                </div>
                <div className="space-y-1">
                   <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Email Address</p>
                   <p className="text-sm font-bold text-blue-600">{selectedApplicant.email}</p>
                </div>
                <div className="space-y-1">
                   <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Specialization</p>
                   <p className="text-sm font-black text-slate-900 bg-slate-50 p-4 rounded-2xl border border-slate-100">{selectedApplicant.specialty}</p>
                </div>
                <div className="space-y-1">
                   <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Experience / Bio</p>
                   <p className="text-sm font-medium text-slate-600 leading-relaxed italic bg-slate-50 p-6 rounded-[2rem] border border-slate-100">{selectedApplicant.experience}</p>
                </div>
                {selectedApplicant.portfolio && (
                   <div className="space-y-1">
                      <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Portfolio Link</p>
                      <a href={selectedApplicant.portfolio} target="_blank" rel="noopener noreferrer" className="text-sm font-bold text-blue-600 hover:underline">{selectedApplicant.portfolio}</a>
                   </div>
                )}
                <div className="pt-8 flex gap-4">
                   <button onClick={() => { handleUpdateApplicantStatus(selectedApplicant.id, 'Approved'); setSelectedApplicant(null); }} className="flex-1 py-5 bg-green-600 text-white rounded-2xl font-black uppercase text-xs tracking-widest hover:bg-green-700 transition-all">Approve Mentor</button>
                   <button onClick={() => { handleUpdateApplicantStatus(selectedApplicant.id, 'Rejected'); setSelectedApplicant(null); }} className="flex-1 py-5 bg-red-600 text-white rounded-2xl font-black uppercase text-xs tracking-widest hover:bg-red-700 transition-all">Reject</button>
                </div>
             </div>
          </div>
        </div>
      )}

      <style>{`
        .custom-scrollbar::-webkit-scrollbar { width: 4px; }
        .custom-scrollbar::-webkit-scrollbar-track { background: transparent; }
        .custom-scrollbar::-webkit-scrollbar-thumb { background: #e2e8f0; border-radius: 10px; }
      `}</style>
    </div>
  );
};

export default AdminDashboard;
