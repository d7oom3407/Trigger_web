
import React from 'react';

interface Props {
  t: any;
  lang: string;
}

const TrustSignals: React.FC<Props> = ({ t, lang }) => {
  return (
    <section className="py-24 px-6 border-y border-white/5 relative bg-[#292929] transition-colors overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Removed manual reversal, dir="rtl" handles this automatically */}
        <div className="flex flex-col lg:flex-row gap-16 items-start">
          
          {/* Main Side Heading - Positioned at 'start' (Right in RTL) */}
          <div className="lg:w-1/4 text-center lg:text-start">
            <h2 className="text-5xl md:text-6xl font-black italic uppercase tracking-tighter mb-4 text-white leading-[1.1]">
              {t.title}
            </h2>
            <p className="text-white/40 text-sm font-bold uppercase tracking-widest leading-relaxed">
              {t.subtitle}
            </p>
          </div>
          
          {/* Trust Cards Grid */}
          <div className="lg:w-3/4 grid grid-cols-1 md:grid-cols-3 gap-8">
            {t.items.map((item: any, i: number) => (
              <div key={i} className="relative group text-center lg:text-start">
                <div className="flex flex-col items-center lg:items-start">
                  
                  {/* Icon Box - Glass Effect */}
                  <div className="w-16 h-16 rounded-[20px] bg-white/5 flex items-center justify-center mb-8 border border-white/10 group-hover:border-[#5a16dd]/40 transition-all shadow-xl backdrop-blur-md">
                    <span className="text-3xl">
                      {/* Icons mapping based on indices: 0-User (Control), 1-Building (Scale), 2-Shield (Data) */}
                      {i === 0 ? '👤' : i === 1 ? '🏗️' : '🛡️'}
                    </span>
                  </div>

                  <h3 className="text-2xl font-black text-white mb-4 italic uppercase tracking-tight group-hover:text-[#5a16dd] transition-colors leading-tight">
                    {item.title}
                  </h3>
                  
                  <p className="text-white/40 text-base leading-relaxed font-medium">
                    {item.desc}
                  </p>
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
