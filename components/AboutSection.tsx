
import React from 'react';

interface Props {
  t: any;
  lang: string;
}

const AboutSection: React.FC<Props> = ({ t, lang }) => {
  return (
    <section className="py-24 px-6 relative overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-16 items-start mb-24">
          <div className="flex-1">
             <h2 className="text-4xl md:text-6xl font-black mb-8 italic tracking-tighter uppercase">{t.title}</h2>
             <p className="text-white/60 text-lg md:text-xl leading-relaxed mb-10 max-w-2xl">
               {t.desc}
             </p>
             
             <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                <div className="glass-card p-8 rounded-3xl border-white/5 bg-[#5a16dd]/5">
                   <h3 className="text-lg font-black uppercase italic text-[#6b27ed] mb-3">{t.mission.title}</h3>
                   <p className="text-white/60 text-sm leading-relaxed">{t.mission.text}</p>
                </div>
                <div className="glass-card p-8 rounded-3xl border-white/5">
                   <h3 className="text-lg font-black uppercase italic text-blue-400 mb-3">{t.vision.title}</h3>
                   <p className="text-white/60 text-sm leading-relaxed">{t.vision.text}</p>
                </div>
             </div>
          </div>
          
          <div className="lg:w-1/3 w-full">
            <div className="relative group">
              <div className="absolute inset-0 bg-[#5a16dd] blur-[100px] opacity-20 group-hover:opacity-40 transition-opacity"></div>
              <div className="relative aspect-square rounded-[48px] bg-gradient-to-br from-[#5a16dd] via-[#6b27ed] to-indigo-800 flex items-center justify-center shadow-3xl rotate-3 hover:rotate-0 transition-all duration-1000 p-12 border border-white/20">
                 <div className="text-[120px] font-black text-white italic tracking-tighter drop-shadow-2xl">T</div>
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-12">
          <h3 className="text-2xl font-black uppercase italic text-center mb-16">{t.whyTitle}</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {t.values.map((value: any, i: number) => (
              <div key={i} className="glass-card p-10 rounded-[40px] border-white/5 hover:border-[#5a16dd]/30 transition-all group">
                <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center text-2xl mb-6 group-hover:scale-110 transition-transform">
                  {i === 0 ? '🇸🇦' : i === 1 ? '💻' : '🤝'}
                </div>
                <h4 className="text-xl font-black text-white mb-4 italic uppercase">{value.title}</h4>
                <p className="text-white/40 text-sm leading-relaxed group-hover:text-white/60 transition-colors">
                  {value.text}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-24 pt-16 border-t border-white/5">
          <div className="flex flex-wrap justify-center gap-8">
            {t.points.map((point: string, i: number) => (
              <div key={i} className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-[#5a16dd] shadow-[0_0_12px_rgba(90,22,221,1)]"></div>
                <span className="text-sm font-black text-white/80 uppercase italic tracking-wide">{point}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;