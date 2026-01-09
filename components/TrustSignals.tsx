
import React from 'react';

interface Props {
  t: any;
  lang: string;
}

const TrustSignals: React.FC<Props> = ({ t, lang }) => {
  return (
    <section className="py-24 px-6 border-y border-white/5 relative bg-[#313131] transition-colors">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12 items-center">
          <div className="lg:col-span-1">
            <h2 className="text-3xl md:text-5xl font-black italic uppercase tracking-tighter mb-4 text-white">{t.title}</h2>
            <p className="text-white/40 text-sm font-bold uppercase tracking-widest">{t.subtitle}</p>
          </div>
          
          <div className="lg:col-span-3 grid grid-cols-1 md:grid-cols-3 gap-8">
            {t.items.map((item: any, i: number) => (
              <div key={i} className="relative group">
                <div className="absolute -inset-4 bg-[#5a16dd]/0 rounded-3xl group-hover:bg-[#5a16dd]/5 transition-all duration-500"></div>
                <div className="relative">
                  <div className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center mb-6 border border-white/10 group-hover:border-[#5a16dd]/40 transition-colors shadow-lg">
                    <span className="text-2xl">
                      {i === 0 ? '🛡️' : i === 1 ? '🏗️' : '👨‍💻'}
                    </span>
                  </div>
                  <h3 className="text-xl font-black text-white mb-3 italic uppercase tracking-tight group-hover:text-[#5a16dd] transition-colors">{item.title}</h3>
                  <p className="text-white/50 text-base leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustSignals;
