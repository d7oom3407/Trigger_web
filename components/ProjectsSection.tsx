
import React from 'react';
import { ViewState } from '../App';

interface Props {
  t: any;
  lang: string;
  setView?: (view: ViewState) => void;
}

const ProjectsSection: React.FC<Props> = ({ t, lang, setView }) => {
  return (
    <section className="py-24 px-6 relative overflow-hidden bg-[#292929]">
      <div className="max-w-7xl mx-auto">
        <div className="mb-20 text-center md:text-right">
          <h2 className="text-4xl md:text-6xl font-black mb-8 tracking-tighter uppercase italic text-white">
            {t.title}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
          {t.items.map((project: any, idx: number) => (
            <div key={idx} className="group flex flex-col bg-[#1e1e1e] border border-white/5 rounded-[40px] overflow-hidden hover:border-[#5a16dd]/40 transition-all duration-700 hover:shadow-[0_20px_50px_rgba(90,22,221,0.15)] h-full">
              
              {/* Image Area - Clean Full Cover */}
              <div className="relative aspect-[16/10] overflow-hidden bg-white/5">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-[2000ms] group-hover:scale-110" 
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2426&auto=format&fit=crop';
                  }}
                />
                
                {/* Badge Overlay - Clean & Floating */}
                <div className="absolute top-6 right-6 z-20">
                  <span className="text-[10px] font-black uppercase tracking-[0.2em] text-white bg-[#5a16dd] px-4 py-2 rounded-xl shadow-2xl">
                    {project.tag}
                  </span>
                </div>
              </div>

              {/* Content Area */}
              <div className="p-8 md:p-10 flex flex-col flex-grow">
                <div className="relative z-10">
                  <h3 className="text-2xl md:text-3xl font-black mb-6 tracking-tight uppercase italic text-white group-hover:text-[#6b27ed] transition-colors leading-tight">
                    {project.title}
                  </h3>
                  
                  <p className="text-white/60 text-base font-medium leading-relaxed mb-10">
                    {project.desc}
                  </p>
                </div>

                {/* Result Box */}
                <div className="mt-auto pt-8 border-t border-white/5">
                  <div className="bg-[#5a16dd]/10 p-6 rounded-3xl border border-[#5a16dd]/20 group-hover:bg-[#5a16dd]/20 transition-all">
                    <span className="text-[10px] font-black uppercase tracking-widest text-[#6b27ed] block mb-2 opacity-70">
                      {lang === 'ar' ? 'النتيجة المحققة' : 'The Result'}
                    </span>
                    <span className="text-lg font-black text-white italic leading-tight block">
                      {project.value}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center relative z-10 flex flex-col items-center gap-8">
          <div className="inline-flex flex-col items-center gap-4 px-12 py-8 rounded-[40px] glass-card shadow-2xl">
            <div className="text-5xl font-black text-white italic tracking-tighter mb-2">
              30<span className="text-[#5a16dd]">+</span>
            </div>
            <p className="text-white/60 text-lg font-bold italic uppercase tracking-wide">
              {t.footer}
            </p>
          </div>

          <button 
            onClick={() => setView?.('projects')}
            className="group flex items-center gap-4 bg-[#5a16dd] hover:bg-[#6b27ed] px-10 py-5 rounded-2xl transition-all hover:scale-105 shadow-xl shadow-[#5a16dd]/20"
          >
            <span className="text-xl font-black italic uppercase tracking-widest text-white">
              {lang === 'ar' ? 'عرض جميع الحلول' : 'Explore All Solutions'}
            </span>
            <span className={`text-2xl transition-transform group-hover:translate-x-2 text-white ${lang === 'ar' ? 'rotate-180' : ''}`}>→</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;