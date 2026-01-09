import React, { useState } from 'react';

interface Props {
  t: any;
  lang: string;
}

const ContactForm: React.FC<Props> = ({ t, lang }) => {
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <section id="contact" className="py-24 px-6 relative overflow-hidden flex flex-col items-center justify-center min-h-[80vh]">
      <div className="max-w-2xl w-full">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black mb-6 tracking-tight uppercase italic">{t.title}</h2>
          <p className="text-white/60 text-lg md:text-xl leading-relaxed">{t.desc}</p>
        </div>

        {sent ? (
          <div className="glass-card p-12 rounded-[40px] border-violet-500/30 text-center animate-in fade-in zoom-in duration-500">
            <div className="text-6xl mb-6">🚀</div>
            <h3 className="text-2xl font-black text-violet-400 uppercase italic mb-2">{t.success}</h3>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="glass-card p-8 md:p-12 rounded-[40px] border-white/10 shadow-2xl space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-black uppercase tracking-widest text-white/40">{t.name}</label>
                <input required type="text" className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 focus:outline-none focus:border-violet-500 transition-all font-medium text-white text-lg" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-black uppercase tracking-widest text-white/40">{t.email}</label>
                <input required type="email" className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 focus:outline-none focus:border-violet-500 transition-all font-medium text-white text-lg" />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-black uppercase tracking-widest text-white/40">{t.company}</label>
              <input type="text" className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 focus:outline-none focus:border-violet-500 transition-all font-medium text-white text-lg" />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-black uppercase tracking-widest text-white/40">{t.message}</label>
              <textarea required rows={4} className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 focus:outline-none focus:border-violet-500 transition-all font-medium text-white text-lg resize-none" />
            </div>

            <button 
              type="submit" 
              className="w-full bg-violet-600 hover:bg-violet-700 text-white font-black py-7 rounded-2xl transition-all hover:scale-[1.02] active:scale-95 shadow-[0_0_30px_rgba(139,92,246,0.3)] text-3xl italic uppercase"
            >
              {t.submit}
            </button>
          </form>
        )}
      </div>
    </section>
  );
};

export default ContactForm;