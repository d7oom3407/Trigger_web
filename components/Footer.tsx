import React from 'react';
import { ViewState } from '../App';

interface Props {
  t: any;
  lang: string;
  setView: (view: ViewState) => void;
}

const Footer: React.FC<Props> = ({ t, lang, setView }) => {
  return (
    <footer className="py-20 px-6 border-t border-white/5">
      <div className="max-w-7xl mx-auto flex flex-col items-center text-center">
        <button 
          onClick={() => setView('home')}
          className="flex items-center gap-2 mb-8 hover:opacity-80 transition-opacity"
        >
          <div className="w-10 h-10 bg-violet-600 rounded-xl flex items-center justify-center font-black text-white italic text-xl">
            T
          </div>
          <span className="text-2xl font-bold tracking-tighter">Trigger<span className="text-violet-500">.</span></span>
        </button>
        
        <h4 className="text-4xl md:text-5xl font-black max-w-2xl mb-12 leading-tight">
          {t.title}
        </h4>

        <div className="flex gap-6 mb-16">
          <a 
            href={t.socials.linkedin} 
            target="_blank" 
            rel="noopener noreferrer"
            className="w-12 h-12 glass-card rounded-full flex items-center justify-center cursor-pointer hover:bg-violet-600 hover:border-violet-400/50 transition-all duration-300 group"
            aria-label="LinkedIn"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white group-hover:scale-110 transition-transform">
              <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
              <rect x="2" y="9" width="4" height="12"></rect>
              <circle cx="4" cy="4" r="2"></circle>
            </svg>
          </a>
          <a 
            href={t.socials.instagram} 
            target="_blank" 
            rel="noopener noreferrer"
            className="w-12 h-12 glass-card rounded-full flex items-center justify-center cursor-pointer hover:bg-violet-600 hover:border-violet-400/50 transition-all duration-300 group"
            aria-label="Instagram"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white group-hover:scale-110 transition-transform">
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
              <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
            </svg>
          </a>
          <a 
            href={t.socials.x} 
            target="_blank" 
            rel="noopener noreferrer"
            className="w-12 h-12 glass-card rounded-full flex items-center justify-center cursor-pointer hover:bg-violet-600 hover:border-violet-400/50 transition-all duration-300 group"
            aria-label="X (Twitter)"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" className="text-white group-hover:scale-110 transition-transform">
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path>
            </svg>
          </a>
        </div>

        <div className="flex flex-wrap justify-center gap-x-12 gap-y-4 text-sm font-medium text-white/40 mb-12">
          <button onClick={() => setView('home')} className="hover:text-white transition-colors">Home</button>
          <button onClick={() => setView('process')} className="hover:text-white transition-colors">Process</button>
          <button onClick={() => setView('about')} className="hover:text-white transition-colors">About</button>
          <button onClick={() => setView('contact')} className="hover:text-white transition-colors">Contact</button>
        </div>

        <p className="text-white/20 text-xs font-bold tracking-widest uppercase">
          {t.copyright}
        </p>
      </div>
    </footer>
  );
};

export default Footer;