
import React from 'react';

interface Props {
  t: any;
  lang: string;
}

const TrustSignals: React.FC<Props> = ({ t, lang }) => {
  return (
    <section className="py-24 px-6 border-y border-slate-200 dark:border-white/5 relative bg-white dark:bg-black transition-colors">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12 items-center">
          <div className="lg:col-span-1">
            <h2 className="text-3xl font-black italic uppercase tracking-tighter mb-4 text-slate-900 dark:text-white">{t.title}</h2>
            <p className="text-slate-400 dark:text-white/40 text-sm font-bold uppercase tracking-widest">{t.subtitle}</p>
          </div>
          
          <div className="lg:col-span-3 grid grid-cols-1 md:grid-cols-3 gap-8">
            {t.items.map((item: any, i: number) => (
              <div key={i} className="relative group">
                <div className="absolute -inset-2 bg-violet-600/0 rounded-3xl group-hover:bg-violet-600/5 transition-all duration-500"></div>
                <div className="relative">
                  <div className="w-12 h-12 rounded-xl bg-slate-100 dark:bg-white/5 flex items-center justify-center mb-6 border border-slate-200 dark:border-white/10 group-hover:border-violet-500/40 transition-colors">
                    {i === 0 ? '🛡️' : i === 1 ? '🏗️' : '👨‍💻'}
                  </div>
                  <h3 className="text-xl font-black text-slate-900 dark:text-white mb-3 italic uppercase tracking-tight">{item.title}</h3>
                  <p className="text-slate-500 dark:text-white/50 text-sm leading-relaxed">{item.desc}</p>
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
