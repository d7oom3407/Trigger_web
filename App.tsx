
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import LogoStrip from './components/LogoStrip';
import ProcessSection from './components/ProcessSection';
import ProjectsSection from './components/ProjectsSection';
import ProjectsGallery from './components/ProjectsGallery';
import TrustSignals from './components/TrustSignals';
import AboutSection from './components/AboutSection';
import ROICalculator from './components/ROICalculator';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import ContactForm from './components/ContactForm';
import { translations } from './translations';

export type ViewState = 'home' | 'process' | 'about' | 'contact' | 'projects';

const App: React.FC = () => {
  const [lang, setLang] = useState<'en' | 'ar'>('ar');
  const [currentView, setCurrentView] = useState<ViewState>('home');
  const t = translations[lang];

  useEffect(() => {
    document.documentElement.dir = t.dir;
    document.documentElement.lang = lang;
    document.documentElement.classList.add('dark');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [lang, t.dir, currentView]);

  const toggleLang = () => setLang(prev => prev === 'en' ? 'ar' : 'en');

  const renderContent = () => {
    switch (currentView) {
      case 'projects':
        return <div className="pt-20 min-h-[80vh]"><ProjectsGallery t={t.projectsPage} lang={lang} /></div>;
      case 'process':
        return <div className="pt-20 min-h-[80vh]"><ProcessSection t={t.howWeBuild} lang={lang} /></div>;
      case 'about':
        return <div className="pt-20 min-h-[80vh]"><AboutSection t={t.aboutUs} lang={lang} /></div>;
      case 'contact':
        return <div className="pt-20 min-h-[80vh]"><ContactForm t={t.contact} lang={lang} /></div>;
      default:
        return (
          <>
            <Hero t={t.hero} lang={lang} setView={setCurrentView} />
            <LogoStrip />
            <ProjectsSection t={t.projects} lang={lang} setView={setCurrentView} />
            <TrustSignals t={t.trust} lang={lang} />
            <ROICalculator t={t.roi} lang={lang} setView={setCurrentView} />
            <FAQ t={t.faq} lang={lang} setView={setCurrentView} />
          </>
        );
    }
  };

  return (
    <div className="min-h-screen bg-black text-white selection:bg-violet-500 selection:text-white transition-colors duration-300">
      <div className="fixed inset-0 bg-grid pointer-events-none"></div>
      
      {/* Subtle Glows */}
      <div className="fixed top-[-10%] left-[-10%] w-[50%] h-[50%] bg-violet-900/10 blur-[150px] rounded-full pointer-events-none"></div>

      <Navbar 
        lang={lang} 
        toggleLang={toggleLang} 
        setView={setCurrentView} 
        currentView={currentView} 
      />
      
      <main className="relative z-10">
        {renderContent()}
      </main>

      <Footer t={t.footer} lang={lang} setView={setCurrentView} />
    </div>
  );
};

export default App;
