
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
    email: '',
    password: '',
    name: '',
    agreeToTerms: false
  });
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');

    setTimeout(() => {
      const existingUsers = JSON.parse(localStorage.getItem('academy_users') || '[]');

      if (mode === 'signup') {
        if (existingUsers.some((u: any) => u.email === formData.email)) {
          setError('이미 존재하는 이메일입니다.');
          setIsLoading(false);
          return;
        }

        const newUser = {
          ...formData,
          role: 'user',
          joinDate: new Date().toISOString(),
          status: 'Active',
          points: 1000, // Welcome points
          paymentStatus: 'Pending',
          assignments: [],
          activityScore: 0
        };

        const updatedUsers = [...existingUsers, newUser];
        localStorage.setItem('academy_users', JSON.stringify(updatedUsers));
        onAuthSuccess(newUser);
      } else {
        const foundUser = existingUsers.find(
          (u: any) => u.email === formData.email && u.password === formData.password
        );

        if (foundUser) {
          onAuthSuccess(foundUser);
        } else {
          setError('이메일 또는 비밀번호가 일치하지 않습니다.');
          setIsLoading(false);
          return;
        }
      }

      setIsLoading(false);
      onClose();
    }, 1000);
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-slate-900/60 backdrop-blur-md" onClick={onClose}></div>
      <div className="relative w-full max-w-[480px] bg-white rounded-[3rem] shadow-2xl overflow-hidden animate-in zoom-in-95">
        <div className="bg-slate-900 p-8 text-center">
          <h3 className="text-xl font-black text-white uppercase italic tracking-tighter">
            {mode === 'login' ? 'Academy Login' : 'Join AI Evolution'}
          </h3>
        </div>

        <div className="flex border-b border-slate-50">
          <button onClick={() => setMode('login')} className={`flex-1 py-5 text-xs font-black uppercase tracking-widest ${mode === 'login' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-slate-400'}`}>Login</button>
          <button onClick={() => setMode('signup')} className={`flex-1 py-5 text-xs font-black uppercase tracking-widest ${mode === 'signup' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-slate-400'}`}>Sign Up</button>
        </div>

        <div className="p-8 md:p-12">
          {error && <div className="mb-6 p-4 bg-red-50 text-red-600 text-xs font-bold rounded-xl border border-red-100">{error}</div>}
          <form className="space-y-6" onSubmit={handleSubmit}>
            {mode === 'signup' && (
              <div className="space-y-2">
                <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-4">Full Name</label>
                <input required type="text" placeholder="Your Name" className="w-full bg-slate-50 border border-slate-100 rounded-2xl px-6 py-4 text-sm font-bold outline-none" value={formData.name} onChange={(e) => setFormData({...formData, name: e.target.value})} />
              </div>
            )}
            <div className="space-y-2">
              <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-4">Email</label>
              <input required type="email" placeholder="name@example.com" className="w-full bg-slate-50 border border-slate-100 rounded-2xl px-6 py-4 text-sm font-bold outline-none" value={formData.email} onChange={(e) => setFormData({...formData, email: e.target.value})} />
            </div>
            <div className="space-y-2">
              <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-4">Password</label>
              <input required type="password" placeholder="••••••••" className="w-full bg-slate-50 border border-slate-100 rounded-2xl px-6 py-4 text-sm font-bold outline-none" value={formData.password} onChange={(e) => setFormData({...formData, password: e.target.value})} />
            </div>
            <button disabled={isLoading} className="w-full py-5 bg-slate-900 text-white rounded-[1.5rem] font-black uppercase text-xs tracking-widest hover:bg-blue-600 transition-all flex items-center justify-center gap-2">
              {isLoading ? 'Processing...' : (mode === 'login' ? 'Login ↗' : 'Sign Up ↗')}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AuthModal;
