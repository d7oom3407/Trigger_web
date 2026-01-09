
import React from 'react';

const LogoStrip: React.FC = () => {
  const tools = [
    { name: 'WhatsApp', icon: '💬' },
    { name: 'Zapier', icon: '⚡' },
    { name: 'Salla', icon: '🛒' },
    { name: 'Zid', icon: '📦' },
    { name: 'Slack', icon: '👥' },
    { name: 'Notion', icon: '📝' }
  ];
  
  return (
    <div className="py-12 px-6 border-y border-white/5 bg-white/2 overflow-hidden transition-colors">
      <div className="max-w-7xl mx-auto flex flex-wrap justify-center items-center gap-12 md:gap-24">
        {tools.map((tool) => (
          <div key={tool.name} className="flex items-center gap-3 group cursor-default transition-all duration-300 grayscale hover:grayscale-0">
            <span className="text-2xl group-hover:scale-110 transition-transform duration-300 opacity-60 group-hover:opacity-100">{tool.icon}</span>
            <span className="text-xl font-bold tracking-tighter text-white/40 group-hover:text-white transition-colors">
              {tool.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LogoStrip;
