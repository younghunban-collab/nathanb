
import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import EducationSection from './components/EducationSection';
import EducationDetail from './components/EducationDetail';
import CompanyDetail from './components/CompanyDetail';
import MentorDetail from './components/MentorDetail';
import ReviewDetail from './components/ReviewDetail';
import ClassroomDetail from './components/ClassroomDetail';
import PointShop from './components/PointShop';
import AbroadDetail from './components/AbroadDetail';
import SupportSection from './components/SupportSection';
import ChatBot from './components/ChatBot';
import MentorSection from './components/MentorSection';
import ReviewSection from './components/ReviewSection';
import DashboardSection from './components/DashboardSection';
import Footer from './components/Footer';
import AuthModal from './components/AuthModal';
import AdminDashboard from './components/AdminDashboard';
import { Language, UserData, UserRole } from './types';

type ViewState = 'landing' | 'portal' | 'education' | 'company' | 'mentorsDetail' | 'reviewsDetail' | 'classroomDetail' | 'pointshop' | 'abroad' | 'support' | 'admin';

const App: React.FC = () => {
  const [view, setView] = useState<ViewState>('landing');
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const [authMode, setAuthMode] = useState<'login' | 'signup'>('login');
  const [user, setUser] = useState<UserData | null>(null);
  const [lang, setLang] = useState<Language>('ko');
  const [isChatOpen, setIsChatOpen] = useState(false);

  // Initialize Admin Account
  useEffect(() => {
    const users = JSON.parse(localStorage.getItem('academy_users') || '[]');
    const adminExists = users.some((u: any) => u.email === 'admin@admin.com');
    if (!adminExists) {
      const adminAccount = {
        name: 'Super Admin',
        email: 'admin@admin.com',
        password: 'admin123',
        role: 'admin',
        joinDate: new Date().toISOString(),
        status: 'Active',
        points: 0,
        paymentStatus: 'Paid'
      };
      localStorage.setItem('academy_users', JSON.stringify([...users, adminAccount]));
    }
  }, []);

  const enterPortal = () => {
    setView('portal');
    window.scrollTo({ top: 0, behavior: 'instant' });
  };

  const handleNavigate = (id: string) => {
    if (id === 'admin') {
      setView('admin');
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
    
    if (id === 'chatbot') {
      setIsChatOpen(true);
      return;
    }

    const viewMapping: Record<string, ViewState> = {
      'mentors': 'mentorsDetail',
      'education': 'education',
      'company': 'company',
      'reviews': 'reviewsDetail',
      'classroom': 'classroomDetail',
      'pointshop': 'pointshop',
      'abroad': 'abroad',
      'support': 'support',
      'portal': 'portal'
    };

    if (viewMapping[id]) {
      setView(viewMapping[id]);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      if (view !== 'portal') {
        setView('portal');
        setTimeout(() => {
          const element = document.getElementById(id);
          if (element) element.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      } else {
        const element = document.getElementById(id);
        if (element) element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  if (view === 'landing') {
    return (
      <main className="h-screen w-screen overflow-hidden">
        <HeroSection onEnter={enterPortal} lang={lang} />
        {isAuthModalOpen && (
          <AuthModal 
            isOpen={isAuthModalOpen} 
            onClose={() => setIsAuthModalOpen(false)} 
            initialMode={authMode} 
            onAuthSuccess={(userData) => {
              setUser(userData);
              setView(userData.role === 'admin' ? 'admin' : 'portal');
            }}
          />
        )}
      </main>
    );
  }

  return (
    <div className="relative min-h-screen animate-in fade-in duration-700 bg-slate-50">
      <Header 
        onNavigate={handleNavigate} 
        onBackToLanding={() => setView('landing')} 
        onLogin={() => { setAuthMode('login'); setIsAuthModalOpen(true); }}
        onSignup={() => { setAuthMode('signup'); setIsAuthModalOpen(true); }}
        user={user}
        onLogout={() => { setUser(null); setView('landing'); }}
        currentView={view}
        lang={lang}
        setLang={setLang}
      />
      
      <main className={view === 'admin' ? '' : 'pt-16 md:pt-20'}>
        {view === 'admin' ? (
          <AdminDashboard />
        ) : view === 'company' ? (
          <CompanyDetail lang={lang} onNavigate={handleNavigate} />
        ) : view === 'mentorsDetail' ? (
          <MentorDetail lang={lang} onNavigate={handleNavigate} />
        ) : view === 'education' ? (
          <EducationDetail lang={lang} onNavigate={handleNavigate} />
        ) : view === 'reviewsDetail' ? (
          <ReviewDetail lang={lang} onSignup={() => { setAuthMode('signup'); setIsAuthModalOpen(true); }} />
        ) : view === 'classroomDetail' ? (
          <ClassroomDetail lang={lang} onNavigate={handleNavigate} />
        ) : view === 'pointshop' ? (
          <PointShop lang={lang} user={user} />
        ) : view === 'abroad' ? (
          <AbroadDetail lang={lang} onNavigate={handleNavigate} />
        ) : view === 'support' ? (
          <SupportSection lang={lang} />
        ) : (
          <>
            <section id="education-summary" className="min-h-screen bg-white">
              <EducationSection lang={lang} onNavigate={handleNavigate} />
            </section>
            <section id="classroom-summary" className="min-h-screen bg-slate-50 py-12">
              <DashboardSection lang={lang} onNavigate={handleNavigate} />
            </section>
            <section id="mentors-summary" className="min-h-screen bg-white py-20">
              <MentorSection lang={lang} onNavigate={handleNavigate} />
            </section>
            <section id="reviews-summary" className="min-h-screen bg-slate-50 py-20">
              <ReviewSection lang={lang} />
            </section>
          </>
        )}
      </main>

      {view !== 'admin' && (
        <>
          <ChatBot onNavigate={handleNavigate} lang={lang} forcedOpen={isChatOpen} setForcedOpen={setIsChatOpen} />
          <Footer lang={lang} onNavigate={handleNavigate} />
        </>
      )}

      <AuthModal 
        isOpen={isAuthModalOpen} 
        onClose={() => setIsAuthModalOpen(false)} 
        initialMode={authMode} 
        onAuthSuccess={setUser}
      />
    </div>
  );
};

export default App;
