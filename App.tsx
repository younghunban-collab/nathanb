
import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import EducationSection from './components/EducationSection';
import MentorSection from './components/MentorSection';
import ReviewSection from './components/ReviewSection';
import DashboardSection from './components/DashboardSection';
import Footer from './components/Footer';

const App: React.FC = () => {
  const [activePage, setActivePage] = useState<'home' | 'education' | 'mentors' | 'reviews' | 'classroom'>('home');

  // Handle section scrolling
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="relative min-h-screen">
      <Header onNavigate={scrollToSection} />
      
      <main>
        {/* Section 1: Hero with Spline */}
        <section id="home" className="h-screen w-full relative overflow-hidden">
          <HeroSection onScrollDown={() => scrollToSection('education')} />
        </section>

        {/* Section 2: Education Content */}
        <section id="education" className="min-h-screen bg-slate-50 pt-20">
          <EducationSection />
        </section>

        {/* Section 3: Mentors */}
        <section id="mentors" className="min-h-screen bg-white pt-20">
          <MentorSection />
        </section>

        {/* Section 4: Reviews */}
        <section id="reviews" className="min-h-screen bg-slate-50 pt-20">
          <ReviewSection />
        </section>

        {/* Section 5: My Classroom */}
        <section id="classroom" className="min-h-screen bg-white pt-20">
          <DashboardSection />
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default App;
