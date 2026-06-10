import React, { useEffect } from 'react';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import { journalArticles } from '../utils/journalData';

const JournalIndex = () => {
  useEffect(() => window.scrollTo(0, 0), []);

  return (
    <main className="min-h-screen bg-[#09101A] font-sans pb-24">
      <nav className="w-full px-8 py-6 border-b border-[#1E293B] bg-[#09101A]/80 backdrop-blur-md sticky top-0 z-50 flex justify-between items-center">
        <Link to="/" className="text-white hover:text-[#4880FF] transition-colors flex items-center gap-2 text-[13px] font-bold"><ArrowLeft size={16} /> Back to Studio</Link>
        <div className="text-xl font-bold tracking-widest uppercase text-white">NORVIX</div>
      </nav>

      <div className="max-w-200 mx-auto px-6 pt-24">
        <div className="mb-16">
          <h1 className="text-4xl md:text-[56px] font-bold text-white tracking-tight mb-4">The Journal</h1>
          <p className="text-[#8B95A5] text-[16px]">Architectural breakdowns, system engineering documentation, and design logic authored by the Norvix group.</p>
        </div>

        <div className="flex flex-col gap-12">
          {Object.entries(journalArticles).map(([id, article]) => (
            <Link key={id} to={`/journal/${id}`} className="group grid grid-cols-1 md:grid-cols-4 gap-6 pb-12 border-b border-[#1E293B] items-center">
              <div className="md:col-span-1 text-[#64748B] font-mono text-[13px]">{article.date}</div>
              <div className="md:col-span-3">
                <span className="text-[#4880FF] text-[10px] font-bold uppercase tracking-widest block mb-2">{article.badge}</span>
                <h3 className="text-2xl font-bold text-white group-hover:text-[#B4D0FF] transition-colors mb-2">{article.title}</h3>
                <p className="text-[#8B95A5] text-[15px] font-medium leading-relaxed">{article.desc}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
};

export default JournalIndex;