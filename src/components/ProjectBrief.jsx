import React from 'react';
import { ArrowLeft, Send } from 'lucide-react';
import { motion } from 'framer-motion';

const ProjectBrief = ({ onBack }) => {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 60 } }
  };

  return (
    <section className="relative w-full min-h-screen bg-[#09101A] flex flex-col items-center py-12 px-6 overflow-x-hidden font-sans">
      
      {/* Background Atmospheric Glow */}
      <div className="fixed top-[-20%] left-1/2 -translate-x-1/2 w-[80vw] h-[50vh] bg-[#4880FF] opacity-[0.05] blur-[120px] pointer-events-none z-0"></div>

      {/* Top Navigation Bar (Minimal) */}
      <div className="relative z-10 w-full max-w-3xl flex justify-between items-center mb-16">
        <button 
          onClick={onBack}
          className="flex items-center gap-2 text-[#8B95A5] text-[13px] font-bold hover:text-white transition-colors group"
        >
          <ArrowLeft size={16} className="transform group-hover:-translate-x-1 transition-transform" />
          Return to Studio
        </button>
        <div className="text-lg font-bold text-white tracking-widest uppercase">
          NORVIX
        </div>
      </div>

      {/* Main Form Container */}
      <motion.div 
        variants={containerVariants} 
        initial="hidden" 
        animate="show"
        className="relative z-10 w-full max-w-2xl bg-[#0C131F]/80 backdrop-blur-xl border border-[#1E293B] rounded-2xl p-8 md:p-12 shadow-2xl"
      >
        <motion.div variants={itemVariants} className="mb-10 text-center">
          <h1 className="text-3xl md:text-[40px] font-bold text-white tracking-tight mb-4">
            Initiate a Project
          </h1>
          <p className="text-[#8B95A5] text-[15px] font-medium leading-relaxed max-w-md mx-auto">
            Please provide a brief overview of your technical requirements. Our engineering team reviews all inquiries within 24 hours.
          </p>
        </motion.div>

        <form className="flex flex-col gap-6">
          
          <motion.div variants={itemVariants} className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-[#8B95A5] text-[10px] font-bold tracking-widest uppercase mb-2">Full Name *</label>
              <input 
                type="text" 
                className="w-full bg-[#131B2B] border border-[#1E293B] focus:border-[#4880FF] focus:ring-1 focus:ring-[#4880FF] focus:shadow-[0_0_15px_rgba(72,128,255,0.1)] rounded-md px-4 py-3.5 text-white placeholder:text-[#475569] text-[14px] outline-none transition-all duration-300"
                placeholder="Marcus Chen"
              />
            </div>
            <div>
              <label className="block text-[#8B95A5] text-[10px] font-bold tracking-widest uppercase mb-2">Work Email *</label>
              <input 
                type="email" 
                className="w-full bg-[#131B2B] border border-[#1E293B] focus:border-[#4880FF] focus:ring-1 focus:ring-[#4880FF] focus:shadow-[0_0_15px_rgba(72,128,255,0.1)] rounded-md px-4 py-3.5 text-white placeholder:text-[#475569] text-[14px] outline-none transition-all duration-300"
                placeholder="marcus@company.com"
              />
            </div>
          </motion.div>

          {/* Premium Qualifier Fields */}
          <motion.div variants={itemVariants} className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-[#8B95A5] text-[10px] font-bold tracking-widest uppercase mb-2">Estimated Budget</label>
              <select className="w-full bg-[#131B2B] border border-[#1E293B] focus:border-[#4880FF] focus:ring-1 focus:ring-[#4880FF] rounded-md px-4 py-3.5 text-white text-[14px] outline-none transition-all duration-300 cursor-pointer">
                <option>Under $10k</option>
                <option>$10k - $25k</option>
                <option>$25k - $50k</option>
                <option>$50k+</option>
              </select>
            </div>
            <div>
              <label className="block text-[#8B95A5] text-[10px] font-bold tracking-widest uppercase mb-2">Target Timeline</label>
              <select className="w-full bg-[#131B2B] border border-[#1E293B] focus:border-[#4880FF] focus:ring-1 focus:ring-[#4880FF] rounded-md px-4 py-3.5 text-white text-[14px] outline-none transition-all duration-300 cursor-pointer">
                <option>Less than 1 month</option>
                <option>1 - 3 months</option>
                <option>3 - 6 months</option>
                <option>Flexible</option>
              </select>
            </div>
          </motion.div>

          <motion.div variants={itemVariants}>
            <label className="block text-[#8B95A5] text-[10px] font-bold tracking-widest uppercase mb-2">Technical Brief</label>
            <textarea 
              rows="5"
              className="w-full bg-[#131B2B] border border-[#1E293B] focus:border-[#4880FF] focus:ring-1 focus:ring-[#4880FF] focus:shadow-[0_0_15px_rgba(72,128,255,0.1)] rounded-md px-4 py-3.5 text-white placeholder:text-[#475569] text-[14px] outline-none transition-all duration-300 resize-none"
              placeholder="Describe your architecture needs, primary objectives, and current bottlenecks..."
            ></textarea>
          </motion.div>

          <motion.button 
            variants={itemVariants}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="w-full mt-4 flex items-center justify-center gap-3 bg-[#4880FF] hover:bg-[#3b6ee6] text-white font-bold text-[13px] tracking-wider uppercase py-4 rounded-md transition-colors shadow-[0_0_20px_rgba(72,128,255,0.3)]"
          >
            Submit Technical Brief
            <Send size={16} />
          </motion.button>

        </form>
      </motion.div>
    </section>
  );
};

export default ProjectBrief;