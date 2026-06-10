import React from 'react';
import { Link } from 'react-router-dom';
import { journalArticles } from '../utils/journalData';

const Insights = () => {
  // Pull the top 3 items for the home screen grid
  const homeArticles = Object.entries(journalArticles).slice(0, 3);

  return (
    <section className="w-full bg-[#0D1524] px-6 py-24 flex justify-center" id="insights">
      <div className="max-w-275 w-full">
        
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 gap-4">
          <h2 className="text-4xl md:text-[44px] font-semibold text-white tracking-tight">Insights & Perspectives</h2>
          {/* Points directly to our new comprehensive index layout list */}
          <Link to="/journal" className="text-[#B4D0FF] text-[14px] font-bold hover:text-white transition-colors pb-2">
            View Journal
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {homeArticles.map(([id, article]) => (
            <Link key={id} to={`/journal/${id}`} className="group flex flex-col cursor-pointer">
              <div className="relative w-full aspect-4/3 rounded-xl overflow-hidden bg-[#0C131F] border border-[#1E293B] mb-6">
                <div className="absolute top-4 left-4 z-10 bg-[#09101A]/80 backdrop-blur-md px-3 py-1.5 rounded-sm border border-[#1E293B]">
                  <span className="text-[#B4D0FF] text-[10px] font-bold tracking-widest uppercase">{article.badge}</span>
                </div>
                <img src={article.image} alt={article.title} className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-105 opacity-90" />
              </div>
              <div>
                <h3 className="text-[20px] md:text-[22px] font-bold text-white leading-[1.3] mb-3 group-hover:text-[#B4D0FF] transition-colors">{article.title}</h3>
                <p className="text-[#8B95A5] text-[14px] leading-relaxed font-medium">{article.desc}</p>
              </div>
            </Link>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Insights;