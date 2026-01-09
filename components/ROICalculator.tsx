
import React, { useState } from 'react';
import { ViewState } from '../App';

interface Props {
  t: any;
  lang: string;
  setView: (view: ViewState) => void;
}

const ROICalculator: React.FC<Props> = ({ t, lang, setView }) => {
  const [employees, setEmployees] = useState(5);
  const [hoursPerDay, setHoursPerDay] = useState(3);
  const [hourlyRate, setHourlyRate] = useState(25);

  // Math: hours reclaimed per month (22 working days)
  const monthlyReclaimedHours = employees * hoursPerDay * 22;
  const financialWaste = monthlyReclaimedHours * hourlyRate;

  return (
    <section id="pricing" className="py-24 px-6 bg-[#292929] transition-colors">
      <div className="max-w-6xl mx-auto glass-card rounded-[48px] p-8 md:p-16 relative overflow-hidden border-[#5a16dd]/20 shadow-[0_0_80px_rgba(90,22,221,0.1)]">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-[#5a16dd]/10 blur-[100px] rounded-full"></div>
        
        <div className="relative z-10 mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight text-slate-900 dark:text-white uppercase italic">{t.title}</h2>
          <p className="text-slate-600 dark:text-white/60 text-lg max-w-2xl">{t.desc}</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 relative z-10">
          <div className="space-y-10">
            <div className="space-y-4">
              <div className="flex justify-between items-end">
                <label className="text-sm font-bold text-slate-400 dark:text-white/50 uppercase tracking-widest">{t.labelLeads}</label>
                <span className="text-3xl font-black text-[#5a16dd]">{employees}</span>
              </div>
              <input 
                type="range" min="1" max="100" step="1" value={employees} 
                onChange={(e) => setEmployees(Number(e.target.value))}
                className="w-full h-2 bg-slate-200 dark:bg-white/10 rounded-lg appearance-none cursor-pointer accent-[#5a16dd]"
              />
            </div>

            <div className="space-y-4">
              <div className="flex justify-between items-end">
                <label className="text-sm font-bold text-slate-400 dark:text-white/50 uppercase tracking-widest">{t.labelRate}</label>
                <span className="text-3xl font-black text-[#5a16dd]">{hoursPerDay}h</span>
              </div>
              <input 
                type="range" min="0.5" max="8" step="0.5" value={hoursPerDay} 
                onChange={(e) => setHoursPerDay(Number(e.target.value))}
                className="w-full h-2 bg-slate-200 dark:bg-white/10 rounded-lg appearance-none cursor-pointer accent-[#5a16dd]"
              />
            </div>

            <div className="space-y-4">
              <div className="flex justify-between items-end">
                <label className="text-sm font-bold text-slate-400 dark:text-white/50 uppercase tracking-widest">{t.labelValue}</label>
                <span className="text-3xl font-black text-[#5a16dd]">${hourlyRate}</span>
              </div>
              <input 
                type="range" min="10" max="200" step="5" value={hourlyRate} 
                onChange={(e) => setHourlyRate(Number(e.target.value))}
                className="w-full h-2 bg-slate-200 dark:bg-white/10 rounded-lg appearance-none cursor-pointer accent-[#5a16dd]"
              />
            </div>

            <p className="text-slate-400 dark:text-white/40 text-xs italic opacity-70">{t.disclaimer}</p>
          </div>

          <div className="grid grid-cols-1 gap-6">
            <div className="bg-gradient-to-br from-[#5a16dd] to-indigo-800 rounded-3xl p-10 flex flex-col justify-between shadow-2xl shadow-[#5a16dd]/40 border border-white/10 group overflow-hidden relative">
              <div className="absolute top-0 right-0 p-4 opacity-10 text-8xl font-black italic translate-x-8 -translate-y-8 group-hover:translate-x-4 transition-transform duration-700">H</div>
              <span className="text-sm font-bold text-white/80 uppercase tracking-widest relative z-10">{t.lostMonth}</span>
              <div className="text-6xl font-black mt-4 relative z-10 text-white">{monthlyReclaimedHours.toLocaleString()}<span className="text-2xl ml-2 font-medium opacity-60">hrs</span></div>
            </div>
            
            <div className="bg-slate-100 dark:bg-white/5 rounded-3xl p-10 flex flex-col justify-between border border-slate-200 dark:border-white/10 group relative overflow-hidden">
               <div className="absolute top-0 right-0 p-4 opacity-5 text-8xl font-black italic translate-x-8 -translate-y-8 group-hover:translate-x-4 transition-transform duration-700">$</div>
              <span className="text-sm font-bold text-slate-500 dark:text-white/40 uppercase tracking-widest relative z-10">{t.lostYear}</span>
              <div className="text-5xl font-black mt-4 text-slate-800 dark:text-white/80 relative z-10">${financialWaste.toLocaleString()}<span className="text-xl ml-2 font-medium opacity-40">/mo waste</span></div>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-12 border-t border-slate-200 dark:border-white/5 flex flex-wrap gap-4 relative z-10">
          <button 
            onClick={() => setView('contact')}
            className="bg-[#5a16dd] text-white font-black px-12 py-6 rounded-xl hover:bg-[#6b27ed] hover:scale-105 active:scale-95 transition-all shadow-xl text-2xl uppercase italic"
          >
            {t.ctaPrimary}
          </button>
          <button 
            onClick={() => setView('contact')}
            className="bg-transparent border-2 border-slate-200 dark:border-white/10 text-slate-800 dark:text-white font-bold px-12 py-6 rounded-xl hover:bg-slate-50 dark:hover:bg-white/10 active:scale-95 transition-all text-2xl"
          >
            {t.ctaSecondary}
          </button>
        </div>
      </div>
    </section>
  );
};

export default ROICalculator;