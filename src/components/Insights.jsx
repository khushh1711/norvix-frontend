import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from React Router

const Insights = () => {
  const articles = [
    {
      id: "digital-sovereignty", // Added an ID for the URL route
      badge: "Strategy",
      title: "Digital Transformation in the Era of Sovereignty",
      description: "How enterprises are navigating the shift toward private AI and data independence without sacrificing innovation.",
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
    },
    {
      id: "deep-ai-integration",
      badge: "AI Innovation",
      title: "Beyond the Chatbot: Deep AI Integration",
      description: "Exploring the silent revolutions happening in supply chain and logistics through proprietary LLM applications.",
      image: "https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      id: "ux-paradigm",
      badge: "User Experience",
      title: "Designing for Calm: The New UX Paradigm",
      description: "Why the next generation of enterprise software will focus on focus, reducing cognitive load through spatial UI.",
      image: "https://images.unsplash.com/photo-1616423640778-28d1b53229bd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    }
  ];

  return (
    <section className="w-full bg-[#0D1524] px-6 py-24 flex justify-center" id="insights">
      <div className="max-w-275 w-full">
        
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 gap-4">
          <h2 className="text-4xl md:text-[44px] font-semibold text-white tracking-tight">
            Insights & Perspectives
          </h2>
          <a href="#" className="text-[#B4D0FF] text-[14px] font-bold hover:text-white transition-colors pb-2">
            View Journal
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {articles.map((article) => (
            /* Replaced <a> with <Link> and pointed to the dynamic route */
            <Link key={article.id} to={`/journal/${article.id}`} className="group flex flex-col cursor-pointer">
              
              <div className="relative w-full aspect-4/3 rounded-xl overflow-hidden bg-[#0C131F] border border-[#1E293B] mb-6">
                <div className="absolute top-4 left-4 z-10 bg-[#09101A]/80 backdrop-blur-md px-3 py-1.5 rounded-sm border border-[#1E293B]">
                  <span className="text-[#B4D0FF] text-[10px] font-bold tracking-widest uppercase">
                    {article.badge}
                  </span>
                </div>
                <img 
                  src={article.image} 
                  alt={article.title}
                  className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-105 opacity-90 group-hover:opacity-100"
                />
              </div>

              <div>
                <h3 className="text-[20px] md:text-[22px] font-bold text-white leading-[1.3] mb-3 group-hover:text-[#B4D0FF] transition-colors">
                  {article.title}
                </h3>
                <p className="text-[#8B95A5] text-[14px] leading-relaxed font-medium">
                  {article.description}
                </p>
              </div>

            </Link>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Insights;