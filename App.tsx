
import React, { useState } from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import EducationSection from './components/EducationSection';
import EducationDetail from './components/EducationDetail';
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

type ViewState = 'landing' | 'portal' | 'education' | 'mentorsDetail' | 'reviewsDetail' | 'classroomDetail' | 'pointshop' | 'abroad' | 'support';

const App: React.FC = () => {
  const [view, setView] = useState<ViewState>('landing');

  // Function to enter the main portal
  const enterPortal = () => {
    setView('portal');
    window.scrollTo({ top: 0, behavior: 'instant' });
  };

  // Navigation handler
  const handleNavigate = (id: string) => {
    if (id === 'mentors') {
      setView('mentorsDetail');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } 
    else if (id === 'education') {
      setView('education');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } 
    else if (id === 'reviews') {
      setView('reviewsDetail');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
    else if (id === 'classroom') {
      setView('classroomDetail');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
    else if (id === 'pointshop') {
      setView('pointshop');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
    else if (id === 'abroad') {
      setView('abroad');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
    else if (id === 'support') {
      setView('support');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
    else if (id === 'portal') {
      setView('portal');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
    else {
      // Logic for section anchors in portal view
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
        <HeroSection onEnter={enterPortal} />
      </main>
    );
  }

  return (
    <div className="relative min-h-screen animate-in fade-in duration-700">
      <Header 
        onNavigate={handleNavigate} 
        onBackToLanding={() => setView('landing')} 
      />
      
      <main className="pt-16">
        {view === 'mentorsDetail' ? (
          <MentorDetail />
        ) : view === 'education' ? (
          <EducationDetail />
        ) : view === 'reviewsDetail' ? (
          <ReviewDetail />
        ) : view === 'classroomDetail' ? (
          <ClassroomDetail />
        ) : view === 'pointshop' ? (
          <PointShop />
        ) : view === 'abroad' ? (
          <AbroadDetail />
        ) : view === 'support' ? (
          <SupportSection />
        ) : (
          <>
            <section id="education-summary" className="min-h-screen bg-white">
              <EducationSection />
            </section>
            
            <section id="classroom-summary" className="min-h-screen bg-slate-50 py-12">
              <DashboardSection />
            </section>
            
            <section id="mentors-summary" className="min-h-screen bg-white py-20">
              <MentorSection />
            </section>

            <section id="reviews-summary" className="min-h-screen bg-slate-50 py-20">
              <ReviewSection />
            </section>
          </>
        )}
      </main>

      {/* 
        Global ChatBot rendered for all views except 'landing'.
        This ensures it's visible from page 2 (portal) through page 9 (sub-pages).
      */}
      <ChatBot onNavigate={handleNavigate} />

      <Footer />
    </div>
  );
};

export default App;
