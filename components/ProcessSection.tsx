import React from 'react';

interface Props {
  t: any;
  lang: string;
}

const ProcessSection: React.FC<Props> = ({ t, lang }) => {
  return (
    <section className="py-24 px-6 relative overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <div className="mb-20">
          <h2 className="text-4xl md:text-6xl font-black mb-8 tracking-tighter uppercase italic">
            {t.title}
          </h2>
          <p className="text-white/60 text-lg md:text-xl max-w-3xl leading-relaxed">
            {t.desc}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          {t.sections.map((section: any, idx: number) => (
            <div key={idx} className="glass-card p-10 rounded-[40px] border-white/5 group hover:border-violet-500/30 transition-all duration-500 relative overflow-hidden">
              <div className="absolute top-0 right-0 p-8 opacity-5 text-8xl font-black italic translate-x-4 -translate-y-4 group-hover:translate-x-2 transition-transform">
                {section.id}
              </div>
              
              <div className="relative z-10">
                <div className="w-14 h-14 bg-violet-600 rounded-2xl flex items-center justify-center text-white font-black text-xl mb-8 shadow-xl shadow-violet-900/40">
                  {section.id}
                </div>
                
                <h3 className="text-2xl font-black mb-4 tracking-tight uppercase italic text-white group-hover:text-violet-400 transition-colors">
                  {section.title}
                </h3>
                
                <p className="text-white/60 text-base leading-relaxed mb-8">
                  {section.desc}
                </p>

                <div className="flex flex-wrap gap-3">
                  {section.details.map((detail: string, i: number) => (
                    <span key={i} className="text-[10px] font-black uppercase tracking-widest bg-white/5 px-3 py-1 rounded-full border border-white/10 text-white/40 group-hover:text-white/80 transition-colors">
                      {detail}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <div className="inline-flex items-center gap-4 px-8 py-4 rounded-3xl bg-white/5 border border-white/10 text-white/40 text-sm font-bold italic">
            <span className="text-xl">💡</span>
            {t.footer}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;