
import React, { useState } from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import EducationSection from './components/EducationSection';
import MentorSection from './components/MentorSection';
import ReviewSection from './components/ReviewSection';
import DashboardSection from './components/DashboardSection';
import Footer from './components/Footer';

const App: React.FC = () => {
  const [view, setView] = useState<'landing' | 'portal'>('landing');

  // Function to enter the main portal
  const enterPortal = () => {
    setView('portal');
    window.scrollTo({ top: 0, behavior: 'instant' });
  };

  // Function to handle scrolling within the portal
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
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
        onNavigate={scrollToSection} 
        onBackToLanding={() => setView('landing')} 
      />
      
      <main>
        {/* Portal Page Sections */}
        <section id="education" className="min-h-screen bg-slate-50 pt-20">
          <EducationSection />
        </section>

        <section id="mentors" className="min-h-screen bg-white pt-20">
          <MentorSection />
        </section>

        <section id="reviews" className="min-h-screen bg-slate-50 pt-20">
          <ReviewSection />
        </section>

        <section id="classroom" className="min-h-screen bg-white pt-20">
          <DashboardSection />
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default App;
