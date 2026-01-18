
import React, { useState } from 'react';
import { translations } from '../translations';
import { ViewState } from '../App';

interface Props {
  lang: 'en' | 'ar';
  toggleLang: () => void;
  setView: (view: ViewState) => void;
  currentView: ViewState;
}

const Navbar: React.FC<Props> = ({ lang, toggleLang, setView, currentView }) => {
  const t = translations[lang].nav;
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleNavClick = (view: ViewState) => {
    setView(view);
    setIsMenuOpen(false);
  };

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 flex justify-center p-4">
        <div className="w-full max-w-5xl glass-card rounded-2xl px-6 py-2 flex items-center justify-between border-white/5 shadow-2xl relative">
          
          {/* Logo */}
          <button 
            onClick={() => handleNavClick('home')}
            className="flex items-center gap-2 hover:opacity-80 transition-opacity z-50"
          >
            <div className="w-9 h-9 bg-[#5a16dd] rounded-lg flex items-center justify-center font-black text-white italic text-lg">
              T
            </div>
            <span className="text-xl font-bold tracking-tighter text-white">Trigger<span className="text-[#5a16dd]">.</span></span>
          </button>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-10 text-base font-bold uppercase tracking-wider">
            <button 
              onClick={() => handleNavClick('home')}
              className={`transition-colors ${currentView === 'home' ? 'text-white' : 'text-white/60 hover:text-white'}`}
            >
              {t.home}
            </button>
            <button 
              onClick={() => handleNavClick('projects')}
              className={`transition-colors ${currentView === 'projects' ? 'text-white' : 'text-white/60 hover:text-white'}`}
            >
              {t.navProjects}
            </button>
            <button 
              onClick={() => handleNavClick('process')}
              className={`transition-colors ${currentView === 'process' ? 'text-white' : 'text-white/60 hover:text-white'}`}
            >
              {t.howWeBuild}
            </button>
            <button 
              onClick={() => handleNavClick('about')}
              className={`transition-colors ${currentView === 'about' ? 'text-white' : 'text-white/60 hover:text-white'}`}
            >
              {t.aboutUs}
            </button>
          </div>

          <div className="flex items-center gap-2 md:gap-4">
            <button 
              onClick={toggleLang}
              className="text-sm font-black glass-card px-4 py-2 rounded-xl hover:bg-[#5a16dd]/10 transition-colors border-[#5a16dd]/20 text-white"
            >
              {lang === 'en' ? 'العربية' : 'EN'}
            </button>
            
            <button 
              onClick={() => handleNavClick('contact')}
              className="hidden sm:block bg-[#5a16dd] hover:bg-[#6b27ed] text-white text-base font-black px-7 py-3 rounded-lg transition-all hover:scale-105 active:scale-95 shadow-lg shadow-[#5a16dd]/40 uppercase italic"
            >
              {t.contact}
            </button>

            {/* Mobile Menu Toggle */}
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden flex flex-col gap-1.5 p-2 transition-all active:scale-90"
              aria-label="Toggle Menu"
            >
              <div className={`w-6 h-0.5 bg-white transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></div>
              <div className={`w-6 h-0.5 bg-white transition-all duration-300 ${isMenuOpen ? 'opacity-0' : ''}`}></div>
              <div className={`w-6 h-0.5 bg-white transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></div>
            </button>
          </div>
        </div>

        {/* Mobile Menu Overlay */}
        <div className={`fixed inset-0 bg-[#292929]/95 backdrop-blur-xl z-[45] md:hidden transition-all duration-500 ease-in-out ${isMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}>
          <div className="flex flex-col items-center justify-center h-full gap-8 p-6 text-center">
            <button 
              onClick={() => handleNavClick('home')}
              className={`text-3xl font-black italic uppercase tracking-tighter ${currentView === 'home' ? 'text-[#5a16dd]' : 'text-white'}`}
            >
              {t.home}
            </button>
            <button 
              onClick={() => handleNavClick('projects')}
              className={`text-3xl font-black italic uppercase tracking-tighter ${currentView === 'projects' ? 'text-[#5a16dd]' : 'text-white'}`}
            >
              {t.navProjects}
            </button>
            <button 
              onClick={() => handleNavClick('process')}
              className={`text-3xl font-black italic uppercase tracking-tighter ${currentView === 'process' ? 'text-[#5a16dd]' : 'text-white'}`}
            >
              {t.howWeBuild}
            </button>
            <button 
              onClick={() => handleNavClick('about')}
              className={`text-3xl font-black italic uppercase tracking-tighter ${currentView === 'about' ? 'text-[#5a16dd]' : 'text-white'}`}
            >
              {t.aboutUs}
            </button>
            
            <div className="w-full h-px bg-white/10 my-4"></div>
            
            <button 
              onClick={() => handleNavClick('contact')}
              className="bg-[#5a16dd] text-white text-2xl font-black px-10 py-5 rounded-2xl shadow-xl shadow-[#5a16dd]/30 italic uppercase w-full max-w-xs"
            >
              {t.contact}
            </button>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
