
import React, { useState, useEffect } from 'react';

const AdminDashboard: React.FC = () => {
  const [users, setUsers] = useState<any[]>([]);
  const [selectedUser, setSelectedUser] = useState<any | null>(null);
  const [notice, setNotice] = useState('');
  const [stats, setStats] = useState({
    totalUsers: 0,
    activeUsers: 0,
    totalRevenue: 0,
    avgPoints: 0
  });

  useEffect(() => {
    const allUsers = JSON.parse(localStorage.getItem('academy_users') || '[]');
    setUsers(allUsers);
    
    // Calculate Stats
    setStats({
      totalUsers: allUsers.length,
      activeUsers: allUsers.filter((u: any) => u.status === 'Active').length,
      totalRevenue: allUsers.filter((u: any) => u.paymentStatus === 'Paid').length * 250000, // Mock price
      avgPoints: Math.round(allUsers.reduce((acc: number, u: any) => acc + (u.points || 0), 0) / (allUsers.length || 1))
    });
  }, []);

  const handleUpdatePayment = (email: string, status: string) => {
    const updated = users.map(u => u.email === email ? {...u, paymentStatus: status} : u);
    localStorage.setItem('academy_users', JSON.stringify(updated));
    setUsers(updated);
  };

  const sendNotice = () => {
    if (!notice.trim()) return;
    const notices = JSON.parse(localStorage.getItem('academy_notices') || '[]');
    const newNotice = { id: Date.now(), text: notice, date: new Date().toISOString() };
    localStorage.setItem('academy_notices', JSON.stringify([...notices, newNotice]));
    setNotice('');
    alert('전체 공지사항이 전송되었습니다.');
  };

  return (
    <div className="flex flex-col lg:flex-row min-h-screen bg-slate-50 pt-20">
      {/* Sidebar Navigation */}
      <aside className="w-full lg:w-72 bg-slate-900 text-white p-8 space-y-8 flex-shrink-0">
        <div className="space-y-4">
           <h2 className="text-xl font-black italic tracking-tighter">ADMIN CONSOLE</h2>
           <div className="h-0.5 w-12 bg-blue-500"></div>
        </div>
        <nav className="space-y-2">
           {['Dashboard', 'Members', 'Finances', 'Assignments', 'Notices'].map(m => (
             <button key={m} className={`w-full text-left px-4 py-3 rounded-xl text-xs font-black uppercase tracking-widest transition-all ${m === 'Dashboard' ? 'bg-blue-600 text-white' : 'text-slate-400 hover:bg-white/5'}`}>{m}</button>
           ))}
        </nav>
      </aside>

      {/* Main Content */}
      <div className="flex-1 p-6 md:p-12 space-y-10 max-w-[1400px] mx-auto w-full">
        {/* Stats Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { label: 'Total Members', val: stats.totalUsers, icon: '👥' },
            { label: 'Active Learners', val: stats.activeUsers, icon: '⚡' },
            { label: 'Avg. Points', val: stats.avgPoints, icon: '💎' },
            { label: 'Revenue (Mock)', val: `₩${stats.totalRevenue.toLocaleString()}`, icon: '💰' },
          ].map((s, i) => (
            <div key={i} className="bg-white p-8 rounded-[2rem] shadow-sm border border-slate-100 group hover:border-blue-500 transition-all">
               <div className="text-3xl mb-4">{s.icon}</div>
               <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">{s.label}</p>
               <p className="text-2xl font-black text-slate-900 tracking-tight">{s.val}</p>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">
          {/* Members Table */}
          <div className="xl:col-span-2 bg-white rounded-[2.5rem] shadow-sm border border-slate-100 overflow-hidden">
            <div className="p-8 border-b border-slate-50 flex justify-between items-center">
              <h3 className="text-lg font-black text-slate-900 tracking-tight">Active Members</h3>
              <input type="text" placeholder="Search members..." className="bg-slate-50 px-4 py-2 rounded-xl text-xs outline-none w-48 font-medium" />
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead>
                  <tr className="bg-slate-50/50 border-b border-slate-50">
                    <th className="px-8 py-4 text-[10px] font-black text-slate-400 uppercase tracking-widest">Name</th>
                    <th className="px-8 py-4 text-[10px] font-black text-slate-400 uppercase tracking-widest">Payment</th>
                    <th className="px-8 py-4 text-[10px] font-black text-slate-400 uppercase tracking-widest">Points</th>
                    <th className="px-8 py-4 text-[10px] font-black text-slate-400 uppercase tracking-widest">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-50">
                  {users.map((u, i) => (
                    <tr key={i} className="hover:bg-slate-50/50 transition-colors group">
                      <td className="px-8 py-6">
                         <div className="flex items-center gap-3">
                           <div className="w-10 h-10 bg-slate-100 rounded-xl flex items-center justify-center font-black text-xs text-slate-500">{u.name.charAt(0)}</div>
                           <div>
                             <p className="text-sm font-black text-slate-900">{u.name}</p>
                             <p className="text-[10px] text-slate-400">{u.email}</p>
                           </div>
                         </div>
                      </td>
                      <td className="px-8 py-6">
                        <select 
                          value={u.paymentStatus}
                          onChange={(e) => handleUpdatePayment(u.email, e.target.value)}
                          className={`text-[10px] font-black px-3 py-1.5 rounded-full outline-none border transition-all ${
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
                         <p className="text-sm font-bold text-slate-700">{u.points?.toLocaleString() || 0} MP</p>
                      </td>
                      <td className="px-8 py-6">
                         <button onClick={() => setSelectedUser(u)} className="text-[10px] font-black uppercase text-blue-600 hover:underline">Manage</button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Global Notice Area */}
          <div className="space-y-8">
            <div className="bg-slate-900 rounded-[2.5rem] p-10 text-white shadow-xl relative overflow-hidden">
               <h3 className="text-lg font-black italic tracking-tighter mb-6">GLOBAL NOTICE BROADCAST</h3>
               <textarea 
                value={notice}
                onChange={(e) => setNotice(e.target.value)}
                placeholder="공지사항 내용을 입력하세요..." 
                className="w-full h-32 bg-white/5 border border-white/10 rounded-2xl p-4 text-sm text-white placeholder:text-slate-500 outline-none focus:ring-2 ring-blue-500/50 mb-6"
               ></textarea>
               <button 
                onClick={sendNotice}
                className="w-full py-4 bg-blue-600 hover:bg-blue-500 rounded-xl font-black uppercase tracking-widest text-xs transition-all shadow-lg"
               >Broadcast Now ↗</button>
            </div>

            <div className="bg-white rounded-[2.5rem] p-10 shadow-sm border border-slate-100">
               <h3 className="text-lg font-black text-slate-900 tracking-tight mb-6">Learning Activity</h3>
               <div className="space-y-6">
                  {[
                    { label: 'Weekly Assignment Submission', rate: 78, color: 'bg-blue-600' },
                    { label: 'Quiz Pass Rate', rate: 64, color: 'bg-green-500' },
                    { label: 'Attendance Average', rate: 92, color: 'bg-purple-600' },
                  ].map((act, i) => (
                    <div key={i} className="space-y-2">
                       <div className="flex justify-between text-[10px] font-black uppercase tracking-widest">
                         <span className="text-slate-400">{act.label}</span>
                         <span className="text-slate-900">{act.rate}%</span>
                       </div>
                       <div className="h-1.5 w-full bg-slate-100 rounded-full overflow-hidden">
                          <div className={`h-full ${act.color}`} style={{ width: `${act.rate}%` }}></div>
                       </div>
                    </div>
                  ))}
               </div>
            </div>
          </div>
        </div>
      </div>

      {/* Detail User Modal */}
      {selectedUser && (
        <div className="fixed inset-0 z-[200] flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-slate-900/60 backdrop-blur-md" onClick={() => setSelectedUser(null)}></div>
          <div className="relative w-full max-w-2xl bg-white rounded-[3rem] shadow-2xl overflow-hidden p-10">
             <div className="flex items-start justify-between mb-8">
                <div className="flex items-center gap-6">
                   <div className="w-20 h-20 bg-blue-50 rounded-3xl flex items-center justify-center text-4xl">🎓</div>
                   <div>
                      <h4 className="text-2xl font-black text-slate-900">{selectedUser.name}</h4>
                      <p className="text-sm font-bold text-slate-400">Join Date: {new Date(selectedUser.joinDate).toLocaleDateString()}</p>
                   </div>
                </div>
                <button onClick={() => setSelectedUser(null)} className="p-2 text-slate-400 hover:text-slate-900 transition-colors">
                   <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M6 18L18 6M6 6l12 12" /></svg>
                </button>
             </div>
             
             <div className="grid grid-cols-2 gap-8 mb-10">
                <div className="p-6 bg-slate-50 rounded-[2rem]">
                   <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-2">Learning Progress</p>
                   <div className="flex items-center justify-between">
                      <span className="text-2xl font-black text-slate-900">78%</span>
                      <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center text-xl shadow-sm">📈</div>
                   </div>
                </div>
                <div className="p-6 bg-slate-50 rounded-[2rem]">
                   <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-2">Submitted Tasks</p>
                   <div className="flex items-center justify-between">
                      <span className="text-2xl font-black text-slate-900">14 / 18</span>
                      <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center text-xl shadow-sm">📁</div>
                   </div>
                </div>
             </div>

             <div className="space-y-4">
                <h5 className="text-sm font-black text-slate-900 uppercase tracking-widest">Recent Assignments</h5>
                <div className="space-y-2">
                   {['AI 탐구 보고서 - 기후 위기', '영단어 마스터 테스트 #12', '자기주도 학습 일지'].map((task, i) => (
                     <div key={i} className="p-4 bg-slate-50 border border-slate-100 rounded-xl flex justify-between items-center group">
                        <span className="text-xs font-bold text-slate-700">{task}</span>
                        <span className="text-[9px] font-black text-green-500 uppercase tracking-widest">Submitted</span>
                     </div>
                   ))}
                </div>
             </div>
             
             <button className="w-full py-5 bg-slate-900 text-white rounded-[1.5rem] font-black uppercase text-xs tracking-widest mt-10 hover:bg-blue-600 transition-all">Download Full Report ↗</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminDashboard;
