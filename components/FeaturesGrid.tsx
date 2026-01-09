
import React from 'react';

interface Props {
  t: any;
  lang: string;
}

const FeaturesGrid: React.FC<Props> = ({ t, lang }) => {
  const colors = [
    'from-blue-600/5 to-blue-900/10 border-blue-500/10',
    'from-green-600/5 to-green-900/10 border-green-500/10',
    'from-yellow-600/5 to-yellow-900/10 border-yellow-500/10'
  ];

  const accentColors = ['text-blue-400', 'text-green-400', 'text-yellow-400'];

  return (
    <section id="packages" className="py-20 px-6 relative">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-2xl md:text-3xl font-black leading-tight mb-4 tracking-tight uppercase italic">
            {t.title}
          </h2>
          <p className="text-white/40 text-sm md:text-base leading-relaxed max-w-2xl mx-auto font-medium">
            {t.desc}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {t.items.map((item: any, i: number) => (
            <div key={i} className={`glass-card p-8 rounded-[32px] bg-gradient-to-br ${colors[i]} group hover:border-white/20 transition-all duration-500 flex flex-col h-full shadow-xl hover:-translate-y-2`}>
              <div className="text-3xl mb-6 bg-white/5 w-12 h-12 flex items-center justify-center rounded-xl">{item.icon}</div>
              <h3 className={`text-lg font-black mb-6 tracking-tight ${accentColors[i]} uppercase italic`}>
                {item.title}
              </h3>
              
              <div className="space-y-6 flex-grow">
                <div>
                  <h4 className="text-[10px] font-black uppercase tracking-[0.2em] text-white/30 mb-2">
                    {lang === 'ar' ? 'المشكلة' : 'Problem'}
                  </h4>
                  <p className="text-xs md:text-sm text-white/60 font-medium leading-relaxed">{item.problem}</p>
                </div>
                <div>
                  <h4 className="text-[10px] font-black uppercase tracking-[0.2em] text-white/30 mb-2">
                    {lang === 'ar' ? 'الحل' : 'Solution'}
                  </h4>
                  <p className="text-xs md:text-sm text-white/90 font-bold leading-relaxed">{item.solution}</p>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-white/5">
                <h4 className="text-[10px] font-black uppercase tracking-[0.2em] text-white/30 mb-3">
                  {lang === 'ar' ? 'الأثر' : 'Impact'}
                </h4>
                <div className={`text-[11px] font-black italic ${accentColors[i]} leading-relaxed bg-white/5 p-3 rounded-xl border border-white/5`}>
                  {item.impact}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <button className="bg-white text-black font-black px-10 py-4 rounded-xl hover:scale-105 active:scale-95 transition-all shadow-2xl text-[11px] uppercase italic tracking-wider">
            {t.cta}
          </button>
        </div>
      </div>
    </section>
  );
};

export default FeaturesGrid;
