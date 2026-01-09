
import React from 'react';

interface Props {
  t: any;
  lang: string;
}

const StatsSection: React.FC<Props> = ({ t, lang }) => {
  return (
    <section id="results" className="py-24 px-6 relative overflow-hidden">
      {/* Background Decorative Elements for "Fullness" */}
      <div className={`absolute top-0 ${lang === 'en' ? 'left-0' : 'right-0'} p-20 opacity-[0.02] pointer-events-none select-none`}>
        <div className="text-[240px] font-black italic leading-none">{lang === 'en' ? 'DATA' : 'عائد'}</div>
      </div>
      <div className="absolute inset-0 bg-grid opacity-20 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-12 mb-20">
          <div className="max-w-2xl">
            <h2 className="text-5xl md:text-6xl font-bold mb-6 tracking-tight leading-[1.1]">{t.title}</h2>
            <p className="text-white/60 text-xl leading-relaxed">{t.desc}</p>
          </div>
          <div className="flex-shrink-0 w-full md:w-auto">
             <div className="glass-card border-violet-500/40 px-10 py-8 rounded-[32px] text-center bg-violet-600/5 shadow-[0_0_50px_rgba(139,92,246,0.1)]">
                <div className="text-5xl font-black text-violet-400 mb-1">{t.roi.split(' ')[0]}</div>
                <div className="text-xs font-bold text-white/40 uppercase tracking-widest">{t.roi.split(' ').slice(1).join(' ')}</div>
             </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Main Outcome Card */}
          <div className="lg:col-span-7 glass-card rounded-[48px] p-8 md:p-14 border-white/10 flex flex-col justify-between group overflow-hidden relative min-h-[500px]">
            <div className="absolute top-0 right-0 w-80 h-80 bg-violet-600/10 blur-[100px] rounded-full -mr-32 -mt-32 group-hover:bg-violet-600/20 transition-all duration-700"></div>
            
            <div className="relative z-10 mb-12">
               <h3 className="text-4xl md:text-5xl font-bold mb-8 leading-tight tracking-tight">{t.cardTitle}</h3>
               <p className="text-white/60 text-xl leading-relaxed max-w-xl">{t.cardDesc}</p>
            </div>

            <div className="relative z-10 flex flex-wrap gap-12 items-center">
              <div className="flex items-center gap-6">
                <div className="w-24 h-24 rounded-full border-4 border-white/5 relative flex items-center justify-center bg-white/2 shadow-inner">
                  <span className="text-3xl font-black text-white">15%</span>
                  <div className="absolute inset-[-4px] border-4 border-violet-500 rounded-full border-t-transparent -rotate-45"></div>
                </div>
                <div>
                  <div className="text-xs font-black text-white/40 uppercase tracking-widest mb-1">{t.conversion}</div>
                  <div className="text-sm font-bold text-green-400 flex items-center gap-1">
                    <span className="text-lg">↑</span> {lang === 'en' ? 'Increase' : 'ارتفاع'}
                  </div>
                </div>
              </div>
              
              <div className="flex items-center gap-6">
                <div className="w-24 h-24 rounded-full border-4 border-white/5 relative flex items-center justify-center bg-white/2 shadow-inner">
                  <span className="text-3xl font-black text-white">25%</span>
                  <div className="absolute inset-[-4px] border-4 border-blue-500 rounded-full border-t-transparent border-l-transparent -rotate-90"></div>
                </div>
                <div>
                  <div className="text-xs font-black text-white/40 uppercase tracking-widest mb-1">{t.timeSaved}</div>
                  <div className="text-sm font-bold text-blue-400 flex items-center gap-1">
                    <span className="text-lg">↑</span> {lang === 'en' ? 'Optimized' : 'تحسين'}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Side Metrics Stack */}
          <div className="lg:col-span-5 grid grid-cols-1 gap-6">
            
            <div className="glass-card rounded-[32px] p-12 flex items-center justify-between group hover:border-violet-500/40 transition-all duration-500 border-white/5">
               <div>
                  <span className="text-white/30 text-[10px] font-black uppercase tracking-[0.2em] block mb-2 group-hover:text-violet-400 transition-colors">{t.noChanges}</span>
                  <h4 className="text-3xl md:text-4xl font-black text-white/90 tracking-tight">{t.adSpend}</h4>
               </div>
               <div className="w-20 h-20 rounded-[24px] bg-white/5 flex items-center justify-center text-4xl font-black text-white/5 group-hover:text-violet-500/20 transition-colors">0%</div>
            </div>

            <div className="glass-card rounded-[32px] p-12 flex items-center justify-between group hover:border-blue-500/40 transition-all duration-500 border-white/5">
               <div>
                  <span className="text-white/30 text-[10px] font-black uppercase tracking-[0.2em] block mb-2 group-hover:text-blue-400 transition-colors">{t.noNeed}</span>
                  <h4 className="text-3xl md:text-4xl font-black text-white/90 tracking-tight">{t.newHires}</h4>
               </div>
               <div className="w-20 h-20 rounded-[24px] bg-white/5 flex items-center justify-center text-4xl font-black text-white/5 group-hover:text-blue-500/20 transition-colors">0</div>
            </div>

            <div className="glass-card rounded-[32px] p-12 bg-gradient-to-br from-violet-600/15 to-blue-600/15 border-violet-500/30 flex items-center justify-between overflow-hidden relative group shadow-lg shadow-violet-900/10">
               <div className="absolute inset-0 bg-grid opacity-10 group-hover:opacity-30 transition-opacity duration-700"></div>
               <div className="relative z-10">
                  <span className="text-violet-400/80 text-[10px] font-black uppercase tracking-[0.2em] block mb-2">{t.justFaster}</span>
                  <h4 className="text-4xl md:text-5xl font-black italic tracking-tighter text-white">{t.execution}</h4>
               </div>
               <div className="relative z-10 w-20 h-20 rounded-[24px] bg-violet-500/20 flex items-center justify-center text-3xl font-black text-white shadow-xl shadow-violet-900/40">×3</div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

export default StatsSection;
