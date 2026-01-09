import React, { useState } from 'react';
import { ViewState } from '../App';

interface Props {
  t: any;
  lang: string;
  setView: (view: ViewState) => void;
}

const FAQ: React.FC<Props> = ({ t, lang, setView }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-24 px-6 max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold text-center mb-12">{t.title}</h2>
      <div className="space-y-4">
        {t.items.map((faq: any, i: number) => (
          <div key={i} className="glass-card rounded-2xl overflow-hidden transition-all duration-300">
            <button 
              onClick={() => setOpenIndex(openIndex === i ? null : i)}
              className={`w-full flex items-center justify-between p-7 hover:bg-white/5 transition-colors ${lang === 'en' ? 'text-left' : 'text-right'}`}
            >
              <span className="font-bold text-xl">{faq.q}</span>
              <div className={`w-8 h-8 rounded-full border border-white/10 flex items-center justify-center transition-transform shrink-0 ${openIndex === i ? 'rotate-45' : ''}`}>
                +
              </div>
            </button>
            <div className={`transition-all duration-300 ease-in-out px-7 ${openIndex === i ? 'max-h-[600px] pb-7 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}>
              <p className={`text-white/60 text-lg leading-relaxed whitespace-pre-line ${lang === 'en' ? 'text-left' : 'text-right'}`}>{faq.a}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-20 glass-card rounded-[40px] p-12 bg-gradient-to-br from-violet-600 to-indigo-800 text-center relative overflow-hidden border-none shadow-[0_0_100px_rgba(139,92,246,0.3)]">
        <div className="absolute inset-0 opacity-10 pointer-events-none bg-grid"></div>
        <div className="relative z-10">
          <h3 className="text-4xl md:text-5xl font-black mb-4 italic uppercase tracking-tighter">{t.ctaTitle}</h3>
          <p className="text-white/80 mb-8 text-xl font-medium">{t.ctaDesc}</p>
          <button 
            onClick={() => setView('contact')}
            className="bg-white text-black font-black px-14 py-7 rounded-2xl hover:scale-105 active:scale-95 transition-all text-3xl uppercase italic"
          >
            {t.ctaBtn}
          </button>
        </div>
      </div>
    </section>
  );
};

export default FAQ;