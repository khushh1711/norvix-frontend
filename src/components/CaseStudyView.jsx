import React, { useEffect } from 'react';
import { ArrowLeft, ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const CaseStudyView = () => {
  // Scroll to top on load
  useEffect(() => window.scrollTo(0, 0), []);

  return (
    <main className="min-h-screen bg-[#09101A] font-sans pb-24">
      {/* Minimal Navbar */}
      <nav className="w-full px-8 py-6 border-b border-[#1E293B] bg-[#09101A]/80 backdrop-blur-md sticky top-0 z-50 flex justify-between items-center">
        <Link to="/" className="text-white hover:text-[#4880FF] transition-colors flex items-center gap-2 text-[13px] font-bold">
          <ArrowLeft size={16} /> Back to Portfolio
        </Link>
        <div className="text-xl font-bold tracking-widest uppercase text-white">NORVIX</div>
      </nav>

      {/* Hero Section */}
      <header className="max-w-275 mx-auto px-6 pt-24 pb-16">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <p className="text-[#4880FF] text-[11px] font-bold tracking-[0.15em] uppercase mb-6">Healthcare Infrastructure</p>
          <h1 className="text-5xl md:text-[72px] font-bold text-white tracking-tight leading-[1.1] mb-12">
            Vrit: Digital Clinical <br />Registry System
          </h1>
        </motion.div>

        {/* Project Meta Data */}
        <motion.div 
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 border-y border-[#1E293B] py-8 mb-16"
        >
          <div>
            <h4 className="text-[#8B95A5] text-[10px] font-bold tracking-widest uppercase mb-2">Role</h4>
            <p className="text-white text-[14px] font-medium">Lead Engineering</p>
          </div>
          <div>
            <h4 className="text-[#8B95A5] text-[10px] font-bold tracking-widest uppercase mb-2">Platform</h4>
            <p className="text-white text-[14px] font-medium">Web & Mobile (iOS/Android)</p>
          </div>
          <div>
            <h4 className="text-[#8B95A5] text-[10px] font-bold tracking-widest uppercase mb-2">Core Stack</h4>
            <p className="text-white text-[14px] font-medium">MERN, Flutter, Firebase</p>
          </div>
          <div>
            <h4 className="text-[#8B95A5] text-[10px] font-bold tracking-widest uppercase mb-2">Timeline</h4>
            <p className="text-white text-[14px] font-medium">Q1 2026</p>
          </div>
        </motion.div>

        {/* Hero Image */}
        <motion.div initial={{ opacity: 0, scale: 0.98 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.4 }}>
          <img 
            src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" 
            alt="Vrit Dashboard" 
            className="w-full aspect-21/9 object-cover rounded-2xl border border-[#1E293B] shadow-2xl"
          />
        </motion.div>
      </header>

      {/* Content Body */}
      <article className="max-w-200 mx-auto px-6 text-[#8B95A5] text-[16px] leading-relaxed font-medium">
        <h2 className="text-3xl font-bold text-white mb-6">The Challenge</h2>
        <p className="mb-8">
          Modern hospitals require uncompromising data integrity and scalable architecture to handle high-velocity patient registries. The objective was to architect a multi-tenant application capable of unifying disparate clinical records into a single, high-performance interface.
        </p>

        <h2 className="text-3xl font-bold text-white mb-6 mt-16">The Architecture</h2>
        <p className="mb-6">
          To ensure seamless cross-platform performance, the mobile infrastructure was written in Flutter, establishing a unified codebase for iOS and Android. The backend leverages the MERN stack (MongoDB, Express, React, Node.js), providing a highly flexible and scalable database schema capable of adapting to diverse clinical data models.
        </p>
        <ul className="list-disc pl-6 mb-16 space-y-3">
          <li>Implemented rigorous role-based access control (RBAC) via Firebase Auth.</li>
          <li>Designed a high-throughput Express.js API to handle concurrent registry updates.</li>
          <li>Built custom data visualization dashboards using React for administrative oversight.</li>
        </ul>
      </article>
    </main>
  );
};

export default CaseStudyView;