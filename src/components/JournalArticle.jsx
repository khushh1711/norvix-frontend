import React, { useEffect } from 'react';
import { ArrowLeft, Clock } from 'lucide-react';
import { useNavigate, useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { journalArticles } from '../utils/journalData';

const JournalArticle = () => {
  const { id } = useParams();
  const navigate = useNavigate(); // FIX: Allows us to go back to exactly where we came from
  const article = journalArticles[id];

  useEffect(() => window.scrollTo(0, 0), [id]);

  if (!article) return null;

  return (
    <main className="min-h-screen bg-[#09101A] font-sans pb-32">
      <nav className="w-full px-8 py-6 border-b border-[#1E293B] bg-[#09101A]/90 backdrop-blur-md sticky top-0 z-50 flex justify-between items-center">
        {/* Navigates to the exact previous page (Home or Journal Index) */}
        <button onClick={() => navigate(-1)} className="text-white hover:text-[#4880FF] transition-colors flex items-center gap-2 text-[13px] font-bold cursor-pointer">
          <ArrowLeft size={16} /> Back
        </button>
        <div className="text-xl font-bold tracking-widest uppercase text-white">NORVIX</div>
      </nav>

      <header className="max-w-200 mx-auto px-6 pt-24 pb-12">
        <motion.div initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }}>
          <div className="flex items-center gap-4 mb-6">
            <span className="px-3 py-1 bg-[#1A2332] text-[#B4D0FF] text-[10px] font-bold tracking-widest uppercase rounded border border-[#1E293B]">{article.badge}</span>
            <span className="flex items-center gap-1 text-[#64748B] text-[12px] font-bold"><Clock size={12} /> Technical Log</span>
          </div>
          <h1 className="text-4xl md:text-[52px] font-bold text-white tracking-tight leading-[1.15] mb-8">{article.title}</h1>
          <div className="text-[#64748B] text-[14px] font-mono font-medium">Published: {article.date}</div>
        </motion.div>
      </header>

      <div className="max-w-200 mx-auto px-6 mb-12">
        <img src={article.image} alt={article.title} className="w-full aspect-2/1 object-cover rounded-xl border border-[#1E293B]" />
      </div>

      <article className="max-w-180 mx-auto px-6 text-[#8B95A5] text-[17px] leading-[1.8] font-medium">
        {/* Replaces newlines in the data with proper paragraph spacing */}
        {article.content.split('\n\n').map((paragraph, index) => (
          <p key={index} className={index === 0 ? "mb-8 text-xl text-[#E2E8F0] leading-relaxed" : "mb-8"}>
            {paragraph}
          </p>
        ))}
      </article>
    </main>
  );
};

export default JournalArticle;