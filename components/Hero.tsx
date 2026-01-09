
import React from 'react';
import { ViewState } from '../App';

interface Props {
  t: any;
  lang: string;
  setView: (view: ViewState) => void;
}

const Hero: React.FC<Props> = ({ t, lang, setView }) => {
  const renderTitle = () => {
    if (lang === 'en') {
      return (
        <>
          Automation That <br className="hidden lg:block" />
          <span className="text-gradient">Fits Your Work</span>
        </>
      );
    } else {
      return (
        <>
          خلّي الشغل <span className="text-gradient">يمشي لوحده</span>، <br className="hidden lg:block" />
          وفريقك يشتغل بذكاء
        </>
      );
    }
  };

  return (
    <section className="relative pt-32 pb-16 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12">
        
        <div className="flex-1 text-center lg:text-start relative z-10">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-black leading-[1.1] mb-6 tracking-tighter italic uppercase text-slate-900 dark:text-white">
             {renderTitle()}
          </h1>
          
          <p className="text-lg md:text-xl text-slate-600 dark:text-white/60 mb-10 max-w-xl mx-auto lg:mx-0 leading-relaxed font-medium">
            {t.desc}
          </p>
          
          <div className="flex flex-col sm:flex-row items-center gap-5 justify-center lg:justify-start">
            <button 
              onClick={() => setView('contact')}
              className="w-full sm:w-auto bg-[#5a16dd] hover:bg-[#6b27ed] text-white font-black px-12 py-6 rounded-xl transition-all hover:scale-105 active:scale-95 shadow-[0_0_30px_rgba(90,22,221,0.3)] text-2xl italic uppercase"
            >
              {t.ctaPrimary}
            </button>
            <button 
              onClick={() => setView('projects')}
              className="w-full sm:w-auto bg-transparent border-2 border-slate-200 dark:border-white/20 text-slate-800 dark:text-white font-black px-12 py-6 rounded-xl transition-all hover:bg-slate-100 dark:hover:bg-white/5 active:scale-95 text-2xl italic uppercase"
            >
              {t.ctaSecondary}
            </button>
          </div>
        </div>

        <div className="flex-1 relative w-full aspect-square max-w-md group p-8">
          <div className="orbit-container scale-100">
            {/* Orbit Paths */}
            <div className="orbit-circle w-[115%] h-[115%] border-dashed opacity-10"></div>
            <div className="orbit-circle w-[85%] h-[85%] opacity-15"></div>
            <div className="orbit-circle w-[55%] h-[55%] opacity-20"></div>
            
            {/* Zapier Icon (Outermost Orbit) */}
            <div className="orbit-circle w-[115%] h-[115%] border-none rotating" style={{ '--duration': '40s' } as React.CSSProperties}>
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 counter-rotating" style={{ '--duration': '40s' } as React.CSSProperties}>
                 <div className="w-16 h-16 bg-[#ff4f00] rounded-full flex items-center justify-center shadow-[0_0_30px_rgba(255,79,0,0.4)] border border-white/20 p-3.5 hover:scale-110 transition-transform cursor-pointer">
                    <svg viewBox="0 0 24 24" fill="white" className="w-full h-full">
                       <path d="M12.44 3.75l1.6 4.3 4.41-1.3c.3-.1.6.1.7.4s-.1.6-.4.7l-4.41 1.3 3.4 3.1c.2.2.3.5.1.7-.1.3-.4.4-.7.3L13.73 11l.3 4.5c0 .3-.2.6-.5.7s-.6-.2-.7-.5l-.3-4.5-3.4 3.1c-.2.2-.5.3-.7.1-.3-.1-.4-.4-.3-.7l3.4-3.1-4.41-1.3c-.3-.1-.5-.4-.4-.7s.4-.5.7-.4l4.41 1.3-1.6-4.3c-.1-.3.1-.6.4-.7s.6.1.7.4z" />
                    </svg>
                 </div>
              </div>
            </div>

            {/* n8n Icon (Middle Orbit) */}
            <div className="orbit-circle w-[85%] h-[85%] border-none rotating" style={{ '--duration': '28s', animationDirection: 'reverse' } as React.CSSProperties}>
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 counter-rotating" style={{ '--duration': '28s', animationDirection: 'reverse' } as React.CSSProperties}>
                 <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-[0_0_30px_rgba(234,75,113,0.3)] border border-slate-200 p-3 hover:scale-110 transition-transform cursor-pointer">
                    <svg viewBox="0 0 24 24" className="w-full h-full">
                       <circle cx="4" cy="12" r="2.5" fill="#ea4b71" />
                       <circle cx="11" cy="12" r="2.5" fill="#ea4b71" />
                       <circle cx="18" cy="7" r="2.5" fill="#ea4b71" />
                       <circle cx="18" cy="17" r="2.5" fill="#ea4b71" />
                       <path d="M6.5 12h2M13.5 11.5l2.5-3M13.5 12.5l2.5 3" stroke="#ea4b71" strokeWidth="1.5" strokeLinecap="round" />
                    </svg>
                 </div>
              </div>
            </div>

            {/* Make Icon (Inner Orbit) */}
            <div className="orbit-circle w-[55%] h-[55%] border-none rotating" style={{ '--duration': '22s' } as React.CSSProperties}>
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 counter-rotating" style={{ '--duration': '22s' } as React.CSSProperties}>
                 <div className="w-16 h-16 bg-[#7b2cbf] rounded-full flex items-center justify-center shadow-[0_0_30px_rgba(123,44,191,0.5)] border border-white/20 p-3.5 hover:scale-110 transition-transform cursor-pointer">
                    <svg viewBox="0 0 100 100" fill="white" className="w-full h-full">
                       <rect x="15" y="32" width="18" height="48" rx="6" transform="rotate(-15 24 56)" />
                       <rect x="41" y="26" width="18" height="48" rx="6" />
                       <rect x="67" y="26" width="18" height="48" rx="6" />
                    </svg>
                 </div>
              </div>
            </div>

            {/* Central Engine */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-28 h-28 bg-gradient-to-br from-[#5a16dd] via-[#6b27ed] to-indigo-800 rounded-3xl flex items-center justify-center shadow-[0_0_60px_rgba(90,22,221,0.6)] z-10 border border-white/20">
              <div className="text-6xl font-black text-white italic tracking-tighter drop-shadow-lg">T</div>
              <div className="absolute inset-0 rounded-3xl border-2 border-white/10 animate-pulse"></div>
            </div>
          </div>
        </div>
        
      </div>
    </section>
  );
};

export default Hero;
