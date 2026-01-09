
import React from 'react';
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

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex justify-center p-4">
      <div className="w-full max-w-5xl glass-card rounded-2xl px-6 py-2 flex items-center justify-between border-white/5 shadow-2xl">
        <button 
          onClick={() => setView('home')}
          className="flex items-center gap-2 hover:opacity-80 transition-opacity"
        >
          <div className="w-9 h-9 bg-violet-600 rounded-lg flex items-center justify-center font-black text-white italic text-lg">
            T
          </div>
          <span className="text-xl font-bold tracking-tighter text-white">Trigger<span className="text-violet-500">.</span></span>
        </button>
        
        <div className="hidden md:flex items-center gap-10 text-base font-bold uppercase tracking-wider">
          <button 
            onClick={() => setView('home')}
            className={`transition-colors ${currentView === 'home' ? 'text-white' : 'text-white/60 hover:text-white'}`}
          >
            {t.home}
          </button>
          <button 
            onClick={() => setView('projects')}
            className={`transition-colors ${currentView === 'projects' ? 'text-white' : 'text-white/60 hover:text-white'}`}
          >
            {t.navProjects || (lang === 'ar' ? 'أعمالنا' : 'Portfolio')}
          </button>
          <button 
            onClick={() => setView('process')}
            className={`transition-colors ${currentView === 'process' ? 'text-white' : 'text-white/60 hover:text-white'}`}
          >
            {t.howWeBuild}
          </button>
          <button 
            onClick={() => setView('about')}
            className={`transition-colors ${currentView === 'about' ? 'text-white' : 'text-white/60 hover:text-white'}`}
          >
            {t.aboutUs}
          </button>
        </div>

        <div className="flex items-center gap-2 md:gap-4">
          <button 
            onClick={toggleLang}
            className="text-sm font-black glass-card px-4 py-2 rounded-xl hover:bg-violet-500/10 transition-colors border-violet-500/20 text-white"
          >
            {lang === 'en' ? 'العربية' : 'EN'}
          </button>
          <button 
            onClick={() => setView('contact')}
            className="hidden sm:block bg-violet-600 hover:bg-violet-700 text-white text-base font-black px-7 py-3 rounded-lg transition-all hover:scale-105 active:scale-95 shadow-lg shadow-violet-900/40 uppercase italic"
          >
            {t.contact}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
