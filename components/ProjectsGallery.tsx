
import React from 'react';

interface Props {
  t: any;
  lang: string;
}

const ProjectsGallery: React.FC<Props> = ({ t, lang }) => {
  return (
    <section className="py-24 px-6 relative overflow-hidden bg-black transition-colors">
      <div className="max-w-7xl mx-auto">
        <header className="mb-24 text-center md:text-start">
          <div className="inline-block px-4 py-1.5 rounded-full bg-violet-600/10 border border-violet-500/30 text-violet-400 text-[10px] font-black uppercase tracking-[0.3em] mb-6">
            {t.badge}
          </div>
          <h2 className="text-5xl md:text-7xl font-black mb-8 italic tracking-tighter uppercase leading-[0.9] text-white">
            {t.title}
          </h2>
          <p className="text-white/60 text-xl md:text-2xl max-w-3xl leading-relaxed">
            {t.desc}
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-24">
          {t.projects.map((project: any, idx: number) => (
            <div 
              key={idx} 
              className="group flex flex-col h-full"
            >
              {/* Image Container - Full Coverage */}
              <div className="relative aspect-[16/10] rounded-[40px] overflow-hidden border border-white/10 bg-[#1a1a1e] shadow-2xl group-hover:border-violet-500/50 transition-all duration-700">
                <img 
                  src={project.image} 
                  alt={project.name} 
                  className="w-full h-full object-cover transition-transform duration-[2000ms] ease-out"
                  onError={(e) => {
                     (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1551288049-bbbda536339a?auto=format&fit=crop&q=80&w=1600';
                  }}
                />
                
                {/* Subtle Bottom Gradient */}
                <div className="absolute inset-x-0 bottom-0 h-1/4 bg-gradient-to-t from-black/80 to-transparent z-10"></div>

                {/* Floating Category Badge */}
                <div className="absolute top-6 right-6 z-20">
                   <div className="bg-black/60 backdrop-blur-md px-4 py-2 rounded-xl border border-white/10 shadow-xl">
                      <span className="text-[10px] font-black text-violet-400 uppercase tracking-[0.2em]">{project.category.split('/')[0]}</span>
                   </div>
                </div>
              </div>

              {/* Information Section */}
              <div className="pt-10 px-2 flex-grow flex flex-col">
                <div className="mb-6 text-right">
                  <span className="text-[11px] font-black uppercase tracking-[0.3em] text-violet-400 block mb-2">
                    {project.category}
                  </span>
                  <h4 className="text-3xl md:text-5xl font-black text-white italic uppercase tracking-tighter leading-none">
                    {project.name}
                  </h4>
                </div>

                <p className="text-white/70 text-lg md:text-xl leading-relaxed mb-10 font-medium text-right">
                  {project.description}
                </p>

                <div className="grid grid-cols-2 gap-8 mb-12 pt-10 border-t border-white/10 mt-auto">
                  {project.metrics.map((m: any, i: number) => (
                    <div key={i} className="space-y-1 text-right">
                      <span className="text-[10px] font-black uppercase tracking-[0.2em] text-white/30 block">
                        {m.label}
                      </span>
                      <span className="text-2xl md:text-3xl font-black text-white italic tracking-tighter block">
                        {m.value}
                      </span>
                    </div>
                  ))}
                </div>

                <div className="flex">
                  {project.url ? (
                    <a 
                      href={project.url} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="w-full bg-violet-600 text-white font-black px-12 py-5 rounded-2xl transition-all hover:bg-violet-700 hover:scale-[1.02] active:scale-95 shadow-2xl text-xl italic uppercase flex items-center justify-center gap-4 group"
                    >
                      {lang === 'ar' ? 'تشغيل المنصة' : 'Launch Platform'}
                      <span className="text-3xl group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform">↗</span>
                    </a>
                  ) : (
                    <button className="w-full bg-white/10 border border-white/20 text-white/80 font-black px-12 py-5 rounded-2xl cursor-not-allowed text-xl italic uppercase shadow-inner">
                       {lang === 'ar' ? 'قادم قريباً' : 'Coming Soon'}
                    </button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsGallery;
