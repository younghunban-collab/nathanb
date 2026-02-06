
import React, { useState, useEffect } from 'react';

type AdminTab = 'Dashboard' | 'Members' | 'Finances' | 'Assignments' | 'Notices' | 'Applicants' | 'Recruits';

const AdminDashboard: React.FC = () => {
  const [users, setUsers] = useState<any[]>([]);
  const [applicants, setApplicants] = useState<any[]>([]);
  const [recruits, setRecruits] = useState<any[]>([]);
  const [selectedUser, setSelectedUser] = useState<any | null>(null);
  const [selectedApplicant, setSelectedApplicant] = useState<any | null>(null);
  const [selectedRecruit, setSelectedRecruit] = useState<any | null>(null);
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
    const allRecruits = JSON.parse(localStorage.getItem('academy_job_applicants') || '[]');
    setUsers(allUsers);
    setApplicants(allApplicants);
    setRecruits(allRecruits);
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

  const handleUpdateRecruitStatus = (id: number, status: string) => {
    const updated = recruits.map(r => r.id === id ? {...r, status} : r);
    localStorage.setItem('academy_job_applicants', JSON.stringify(updated));
    setRecruits(updated);
  };

  const handleDeleteApplicant = (id: number) => {
    if(!window.confirm('지원 정보를 삭제하시겠습니까?')) return;
    const updated = applicants.filter(a => a.id !== id);
    localStorage.setItem('academy_mentor_applicants', JSON.stringify(updated));
    setApplicants(updated);
  };

  const handleDeleteRecruit = (id: number) => {
    if(!window.confirm('지원 정보를 삭제하시겠습니까?')) return;
    const updated = recruits.filter(r => r.id !== id);
    localStorage.setItem('academy_job_applicants', JSON.stringify(updated));
    setRecruits(updated);
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
            {/* Charts and logs same as before */}
          </div>
        );
      
      case 'Members':
        return (
          <div className="bg-white rounded-[2.5rem] shadow-sm border border-slate-100 overflow-hidden animate-in fade-in duration-500">
            <div className="p-8 border-b border-slate-50 flex flex-col sm:flex-row justify-between items-center gap-4">
              <h3 className="text-lg font-black text-slate-900 tracking-tight">User Management</h3>
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

      case 'Recruits':
        return (
          <div className="bg-white rounded-[2.5rem] shadow-sm border border-slate-100 overflow-hidden animate-in fade-in duration-500">
            <div className="p-8 border-b border-slate-50 flex justify-between items-center">
              <h3 className="text-lg font-black text-slate-900 tracking-tight italic uppercase">Recruitment Applications</h3>
              <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Total: {recruits.length}</p>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead>
                  <tr className="bg-slate-50/50 border-b border-slate-50">
                    <th className="px-8 py-4 text-[10px] font-black text-slate-400 uppercase tracking-widest">Name</th>
                    <th className="px-8 py-4 text-[10px] font-black text-slate-400 uppercase tracking-widest">Birth Date</th>
                    <th className="px-8 py-4 text-[10px] font-black text-slate-400 uppercase tracking-widest">Apply Date</th>
                    <th className="px-8 py-4 text-[10px] font-black text-slate-400 uppercase tracking-widest">Status</th>
                    <th className="px-8 py-4 text-[10px] font-black text-slate-400 uppercase tracking-widest">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-50">
                  {recruits.length > 0 ? recruits.map((r, i) => (
                    <tr key={i} className="hover:bg-slate-50/50 group">
                      <td className="px-8 py-6">
                         <div>
                            <p className="text-sm font-black text-slate-900">{r.name}</p>
                            <p className="text-[10px] text-slate-400">{r.phone}</p>
                         </div>
                      </td>
                      <td className="px-8 py-6">
                         <span className="text-[10px] font-black text-slate-600 uppercase tracking-tighter">{r.birthDate}</span>
                      </td>
                      <td className="px-8 py-6">
                         <p className="text-[10px] font-bold text-slate-400">{new Date(r.applyDate).toLocaleDateString()}</p>
                      </td>
                      <td className="px-8 py-6">
                         <select 
                          value={r.status}
                          onChange={(e) => handleUpdateRecruitStatus(r.id, e.target.value)}
                          className={`text-[9px] font-black px-3 py-1.5 rounded-full outline-none border ${
                            r.status === 'Approved' ? 'bg-green-50 text-green-600 border-green-100' : 
                            r.status === 'Pending' ? 'bg-orange-50 text-orange-600 border-orange-100' : 'bg-red-50 text-red-600 border-red-100'
                          }`}
                         >
                           <option value="Pending">Pending</option>
                           <option value="Approved">Interview</option>
                           <option value="Rejected">Rejected</option>
                         </select>
                      </td>
                      <td className="px-8 py-6">
                         <div className="flex gap-4">
                            <button onClick={() => setSelectedRecruit(r)} className="text-[10px] font-black text-blue-600 hover:underline uppercase">View Form</button>
                            <button onClick={() => handleDeleteRecruit(r.id)} className="text-[10px] font-black text-red-400 hover:text-red-600 uppercase">Delete</button>
                         </div>
                      </td>
                    </tr>
                  )) : (
                    <tr>
                      <td colSpan={5} className="px-8 py-12 text-center text-slate-400 text-xs font-bold italic uppercase tracking-widest">No recruits found</td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>
        );

      case 'Applicants':
        return (
          <div className="bg-white rounded-[2.5rem] shadow-sm border border-slate-100 overflow-hidden animate-in fade-in duration-500">
            <div className="p-8 border-b border-slate-50 flex justify-between items-center">
              <h3 className="text-lg font-black text-slate-900 tracking-tight italic uppercase">Mentor Applications</h3>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead>
                  <tr className="bg-slate-50/50 border-b border-slate-50">
                    <th className="px-8 py-4 text-[10px] font-black text-slate-400 uppercase tracking-widest">Applicant</th>
                    <th className="px-8 py-4 text-[10px] font-black text-slate-400 uppercase tracking-widest">Specialty</th>
                    <th className="px-8 py-4 text-[10px) font-black text-slate-400 uppercase tracking-widest">Status</th>
                    <th className="px-8 py-4 text-[10px] font-black text-slate-400 uppercase tracking-widest">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-50">
                  {applicants.map((a, i) => (
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
                            <button onClick={() => setSelectedApplicant(a)} className="text-[10px] font-black text-blue-600 hover:underline uppercase">Detail</button>
                            <button onClick={() => handleDeleteApplicant(a.id)} className="text-[10px] font-black text-red-400 hover:text-red-600 uppercase">Delete</button>
                         </div>
                      </td>
                    </tr>
                  ))}
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
      <aside className="w-full lg:w-72 bg-slate-900 text-white p-8 space-y-8 flex-shrink-0 lg:fixed lg:h-full z-40">
        <div className="space-y-4">
           <h2 className="text-xl font-black italic tracking-tighter">ADMIN CONSOLE</h2>
           <div className="h-0.5 w-12 bg-blue-500"></div>
        </div>
        <nav className="space-y-2">
           {[
             { id: 'Dashboard', icon: '📊' },
             { id: 'Members', icon: '👥' },
             { id: 'Recruits', icon: '👔' },
             { id: 'Applicants', icon: '📜' },
             { id: 'Finances', icon: '💰' },
             { id: 'Assignments', icon: '📝' },
             { id: 'Notices', icon: '📢' }
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
      </aside>

      <div className="flex-1 lg:ml-72 p-6 md:p-12 max-w-[1400px] w-full">
        <div className="mb-12 flex justify-between items-end">
           <div>
             <span className="text-[10px] font-black text-blue-600 uppercase tracking-[0.4em] mb-3 block">Academy Control Panel</span>
             <h1 className="text-4xl font-black text-slate-900 tracking-tighter italic uppercase">{currentTab}</h1>
           </div>
        </div>
        {renderContent()}
      </div>

      {/* Selected Recruit Modal */}
      {selectedRecruit && (
        <div className="fixed inset-0 z-[2000] flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-slate-900/80 backdrop-blur-md" onClick={() => setSelectedRecruit(null)}></div>
          <div className="relative w-full max-w-2xl bg-white rounded-[3rem] shadow-2xl p-10 overflow-y-auto max-h-[90vh]">
             <div className="flex justify-between items-center mb-8">
                <h3 className="text-2xl font-black italic uppercase">Job Candidate Profile</h3>
                <button onClick={() => setSelectedRecruit(null)} className="text-slate-400 hover:text-slate-900">
                   <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M6 18L18 6M6 6l12 12" /></svg>
                </button>
             </div>
             <div className="space-y-6">
                <div className="grid grid-cols-2 gap-6">
                   <div>
                      <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Name</p>
                      <p className="text-lg font-black">{selectedRecruit.name}</p>
                   </div>
                   <div>
                      <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Apply Date</p>
                      <p className="text-sm font-bold">{new Date(selectedRecruit.applyDate).toLocaleDateString()}</p>
                   </div>
                </div>
                <div>
                   <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Birth Date</p>
                   <p className="text-sm font-bold">{selectedRecruit.birthDate}</p>
                </div>
                <div>
                   <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Phone</p>
                   <p className="text-sm font-bold">{selectedRecruit.phone}</p>
                </div>
                <div>
                   <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Address</p>
                   <p className="text-sm font-bold">{selectedRecruit.address}</p>
                </div>
                <div>
                   <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Career / Experience</p>
                   <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 italic text-sm font-medium leading-relaxed whitespace-pre-wrap">{selectedRecruit.experience}</div>
                </div>
                {selectedRecruit.portfolio && (
                   <div>
                      <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Portfolio</p>
                      <a href={selectedRecruit.portfolio} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline font-bold text-sm">{selectedRecruit.portfolio}</a>
                   </div>
                )}
             </div>
          </div>
        </div>
      )}

      {/* Detail User Modal & Applicant Modal same as before */}
    </div>
  );
};

export default AdminDashboard;
