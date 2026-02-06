
import React, { useState } from 'react';

interface AuthModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialMode: 'login' | 'signup';
  onAuthSuccess: (user: any) => void;
}

const AuthModal: React.FC<AuthModalProps> = ({ isOpen, onClose, initialMode, onAuthSuccess }) => {
  const [mode, setMode] = useState<'login' | 'signup'>(initialMode);
  const [formData, setFormData] = useState({
    id: '',
    email: '',
    password: '',
    confirmPassword: '',
    name: '',
    birthDate: '',
    phone: '',
    address: '',
    interestedCourse: '초등 영어',
    agreeToTerms: false
  });
  const [error, setError] = useState('');
  const [isIdChecked, setIsIdChecked] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  if (!isOpen) return null;

  const handleCheckId = () => {
    if (!formData.id.trim()) {
      setError('아이디를 입력해주세요.');
      return;
    }
    const existingUsers = JSON.parse(localStorage.getItem('academy_users') || '[]');
    const isDup = existingUsers.some((u: any) => u.id === formData.id);
    
    if (isDup) {
      setError('이미 존재하는 아이디입니다.');
      setIsIdChecked(false);
    } else {
      setError('');
      alert('사용 가능한 아이디입니다.');
      setIsIdChecked(true);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');

    if (mode === 'signup') {
      if (!isIdChecked) {
        setError('아이디 중복체크를 해주세요.');
        setIsLoading(false);
        return;
      }
      if (formData.password !== formData.confirmPassword) {
        setError('비밀번호가 일치하지 않습니다.');
        setIsLoading(false);
        return;
      }
    }

    setTimeout(() => {
      const existingUsers = JSON.parse(localStorage.getItem('academy_users') || '[]');

      if (mode === 'signup') {
        if (existingUsers.some((u: any) => u.email === formData.email)) {
          setError('이미 존재하는 이메일입니다.');
          setIsLoading(false);
          return;
        }

        const newUser = {
          id: formData.id,
          email: formData.email,
          password: formData.password,
          name: formData.name,
          birthDate: formData.birthDate,
          phone: formData.phone,
          address: formData.address,
          interestedCourse: formData.interestedCourse,
          role: 'user',
          joinDate: new Date().toISOString(),
          status: 'Active',
          points: 1000,
          paymentStatus: 'Pending'
        };

        const updatedUsers = [...existingUsers, newUser];
        localStorage.setItem('academy_users', JSON.stringify(updatedUsers));
        onAuthSuccess(newUser);
      } else {
        const foundUser = existingUsers.find(
          (u: any) => (u.id === formData.id || u.email === formData.id) && u.password === formData.password
        );

        if (foundUser) {
          onAuthSuccess(foundUser);
        } else {
          setError('아이디(또는 이메일) 혹은 비밀번호가 일치하지 않습니다.');
          setIsLoading(false);
          return;
        }
      }

      setIsLoading(false);
      onClose();
    }, 800);
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 overflow-y-auto">
      <div className="absolute inset-0 bg-slate-900/60 backdrop-blur-md" onClick={onClose}></div>
      <div className="relative w-full max-w-[540px] bg-white rounded-[3rem] shadow-2xl overflow-hidden animate-in zoom-in-95 my-8">
        <div className="bg-slate-900 p-8 text-center relative">
          <h3 className="text-xl font-black text-white uppercase italic tracking-tighter">
            {mode === 'login' ? 'Academy Login' : 'Join AI Evolution'}
          </h3>
          <button onClick={onClose} className="absolute top-8 right-8 text-slate-500 hover:text-white transition-colors">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M6 18L18 6M6 6l12 12" /></svg>
          </button>
        </div>

        <div className="flex border-b border-slate-50">
          <button onClick={() => setMode('login')} className={`flex-1 py-5 text-xs font-black uppercase tracking-widest ${mode === 'login' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-slate-400'}`}>Login</button>
          <button onClick={() => setMode('signup')} className={`flex-1 py-5 text-xs font-black uppercase tracking-widest ${mode === 'signup' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-slate-400'}`}>Sign Up</button>
        </div>

        <div className="p-8 md:p-10 max-h-[70vh] overflow-y-auto custom-scrollbar">
          {error && <div className="mb-6 p-4 bg-red-50 text-red-600 text-xs font-bold rounded-xl border border-red-100 animate-pulse">{error}</div>}
          
          <form className="space-y-5" onSubmit={handleSubmit}>
            {/* ID Field with Duplicate Check */}
            <div className="space-y-2">
              <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-4">User ID</label>
              <div className="flex gap-2">
                <input required type="text" placeholder="아이디 입력" className="flex-1 bg-slate-50 border border-slate-100 rounded-2xl px-6 py-4 text-sm font-bold outline-none focus:ring-2 ring-blue-600/10" value={formData.id} onChange={(e) => { setFormData({...formData, id: e.target.value}); setIsIdChecked(false); }} />
                {mode === 'signup' && (
                  <button type="button" onClick={handleCheckId} className="px-4 bg-slate-900 text-white text-[10px] font-black uppercase rounded-2xl hover:bg-blue-600 transition-all">Check</button>
                )}
              </div>
            </div>

            {mode === 'signup' && (
              <>
                <div className="space-y-2">
                  <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-4">Email Address</label>
                  <input required type="email" placeholder="email@example.com" className="w-full bg-slate-50 border border-slate-100 rounded-2xl px-6 py-4 text-sm font-bold outline-none focus:ring-2 ring-blue-600/10" value={formData.email} onChange={(e) => setFormData({...formData, email: e.target.value})} />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-4">Full Name</label>
                  <input required type="text" placeholder="성함" className="w-full bg-slate-50 border border-slate-100 rounded-2xl px-6 py-4 text-sm font-bold outline-none focus:ring-2 ring-blue-600/10" value={formData.name} onChange={(e) => setFormData({...formData, name: e.target.value})} />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-4">Birth Date</label>
                    <input required type="date" className="w-full bg-slate-50 border border-slate-100 rounded-2xl px-6 py-4 text-sm font-bold outline-none focus:ring-2 ring-blue-600/10" value={formData.birthDate} onChange={(e) => setFormData({...formData, birthDate: e.target.value})} />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-4">Phone</label>
                    <input required type="tel" placeholder="010-0000-0000" className="w-full bg-slate-50 border border-slate-100 rounded-2xl px-6 py-4 text-sm font-bold outline-none focus:ring-2 ring-blue-600/10" value={formData.phone} onChange={(e) => setFormData({...formData, phone: e.target.value})} />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-4">Address</label>
                  <input required type="text" placeholder="주소 입력" className="w-full bg-slate-50 border border-slate-100 rounded-2xl px-6 py-4 text-sm font-bold outline-none focus:ring-2 ring-blue-600/10" value={formData.address} onChange={(e) => setFormData({...formData, address: e.target.value})} />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-4">Course of Interest</label>
                  <select className="w-full bg-slate-50 border border-slate-100 rounded-2xl px-6 py-4 text-sm font-bold outline-none focus:ring-2 ring-blue-600/10 appearance-none" value={formData.interestedCourse} onChange={(e) => setFormData({...formData, interestedCourse: e.target.value})}>
                    <option value="초등 영어">초등 영어 (Elementary)</option>
                    <option value="중고등 영어">중고등 영어 (Middle/High)</option>
                    <option value="일반 영어">일반 영어 (General)</option>
                  </select>
                </div>
              </>
            )}

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-4">Password</label>
                <input required type="password" placeholder="••••••••" className="w-full bg-slate-50 border border-slate-100 rounded-2xl px-6 py-4 text-sm font-bold outline-none focus:ring-2 ring-blue-600/10" value={formData.password} onChange={(e) => setFormData({...formData, password: e.target.value})} />
              </div>
              {mode === 'signup' && (
                <div className="space-y-2">
                  <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-4">Confirm Password</label>
                  <input required type="password" placeholder="••••••••" className="w-full bg-slate-50 border border-slate-100 rounded-2xl px-6 py-4 text-sm font-bold outline-none focus:ring-2 ring-blue-600/10" value={formData.confirmPassword} onChange={(e) => setFormData({...formData, confirmPassword: e.target.value})} />
                </div>
              )}
            </div>

            <button disabled={isLoading} className="w-full py-5 bg-slate-900 text-white rounded-[1.5rem] font-black uppercase text-xs tracking-widest hover:bg-blue-600 transition-all flex items-center justify-center gap-2 shadow-xl shadow-slate-200 mt-4 active:scale-95">
              {isLoading ? 'Processing...' : (mode === 'login' ? 'Login ↗' : 'Sign Up ↗')}
            </button>
          </form>
        </div>
      </div>
      <style>{`
        .custom-scrollbar::-webkit-scrollbar { width: 4px; }
        .custom-scrollbar::-webkit-scrollbar-track { background: transparent; }
        .custom-scrollbar::-webkit-scrollbar-thumb { background: #e2e8f0; border-radius: 10px; }
      `}</style>
    </div>
  );
};

export default AuthModal;
