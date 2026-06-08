import React, { useEffect } from 'react';
import { ArrowLeft, Share2, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const JournalArticle = () => {
  useEffect(() => window.scrollTo(0, 0), []);

  return (
    <main className="min-h-screen bg-[#09101A] font-sans pb-32">
      {/* Minimal Navbar */}
      <nav className="w-full px-8 py-6 border-b border-[#1E293B] bg-[#09101A]/90 backdrop-blur-md sticky top-0 z-50 flex justify-between items-center">
        <Link to="/" className="text-white hover:text-[#4880FF] transition-colors flex items-center gap-2 text-[13px] font-bold">
          <ArrowLeft size={16} /> Back to Insights
        </Link>
        <div className="flex gap-4">
          <button className="text-[#8B95A5] hover:text-white transition-colors"><Share2 size={18} /></button>
        </div>
      </nav>

      {/* Article Header */}
      <header className="max-w-200 mx-auto px-6 pt-24 pb-12">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
          <div className="flex items-center gap-4 mb-8">
            <span className="px-3 py-1 bg-[#1A2332] text-[#B4D0FF] text-[10px] font-bold tracking-widest uppercase rounded border border-[#1E293B]">
              Strategy
            </span>
            <span className="flex items-center gap-1 text-[#64748B] text-[12px] font-bold">
              <Clock size={12} /> 6 Min Read
            </span>
          </div>

          <h1 className="text-4xl md:text-[56px] font-bold text-white tracking-tight leading-[1.15] mb-10">
            Digital Transformation in the Era of Sovereignty
          </h1>

          {/* Author Block */}
          <div className="flex items-center gap-4 border-t border-[#1E293B] pt-8">
            <div className="w-12 h-12 rounded-full bg-linear-to-tr from-[#4880FF] to-[#0C131F] border border-[#1E293B] flex items-center justify-center text-white font-bold text-lg">
              KS
            </div>
            <div>
              <h4 className="text-white text-[15px] font-bold">Khush Shah</h4>
              <p className="text-[#8B95A5] text-[13px] font-medium">Full-Stack Engineer • Ahmedabad</p>
            </div>
          </div>
        </motion.div>
      </header>

      {/* Hero Image */}
      <motion.div 
        initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }}
        className="max-w-250 mx-auto px-6 mb-16"
      >
        <img 
          src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" 
          alt="Digital Transformation" 
          className="w-full aspect-2/1 object-cover rounded-xl border border-[#1E293B]"
        />
      </motion.div>

      {/* Article Content */}
      <article className="max-w-180 mx-auto px-6 text-[#8B95A5] text-[17px] leading-[1.8] font-medium">
        <p className="mb-8 text-xl text-[#E2E8F0] leading-relaxed">
          The concept of data sovereignty is no longer a peripheral compliance issue; it is the central architectural mandate for the next decade of enterprise software engineering.
        </p>
        
        <p className="mb-8">
          As global enterprises race to integrate Large Language Models (LLMs) and advanced AI into their operations, a critical friction point has emerged. Sending proprietary, highly sensitive data to third-party APIs introduces unacceptable risks for organizations in healthcare, finance, and logistics.
        </p>

        <h2 className="text-2xl font-bold text-white mb-6 mt-12">The Private Infrastructure Shift</h2>
        <p className="mb-8">
          We are observing a massive pivot toward localized, private cloud infrastructure. Engineers are now tasked with deploying highly performant, scalable applications that can run advanced machine learning models entirely on-premises or within strictly ring-fenced private cloud environments.
        </p>

        <blockquote className="border-l-2 border-[#4880FF] pl-6 italic text-[#E2E8F0] text-xl my-12">
          "True digital transformation today requires building systems where the enterprise owns both the intelligence and the infrastructure."
        </blockquote>

        <p className="mb-8">
          This paradigm shift requires a rigorous approach to software architecture. Relying on abstracted, managed services is no longer sufficient. Teams must possess deep expertise in custom container orchestration, secure data pipelines, and optimized backend frameworks to deliver modern digital reality without compromising sovereignty.
        </p>
      </article>
    </main>
  );
};

export default JournalArticle;