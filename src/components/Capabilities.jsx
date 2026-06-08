import React from 'react';
import { Terminal, BrainCircuit, LayoutTemplate, PenTool, GitMerge, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

const Capabilities = () => {
  // Simple scroll animation preset
  const scrollVariant = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  return (
    <section className="w-full bg-[#09101A] px-6 py-24 flex justify-center">
      <div className="max-w-275 w-full">
        
        {/* Header - Animates in when scrolled */}
        <motion.div 
          initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={scrollVariant}
          className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6"
        >
          <div className="max-w-xl">
            <p className="text-[#4880FF] text-[11px] font-bold tracking-[0.15em] uppercase mb-4">Our Core Strengths</p>
            <h2 className="text-4xl md:text-[44px] font-semibold text-white tracking-tight leading-tight">Engineered for Excellence</h2>
          </div>
          <p className="text-[#8B95A5] text-[15px] max-w-95 leading-relaxed font-medium pb-2">
            We combine deep technical rigor with creative agility to build solutions that define industries.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4">
          
          {/* Left Large Card */}
          <motion.div 
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={scrollVariant}
            className="lg:col-span-5 bg-[#0C131F] border border-[#1E293B] rounded-xl p-8 md:p-10 flex flex-col justify-between min-h-105 transition-colors hover:border-[#334155] group"
          >
            <Terminal className="text-[#B4D0FF] w-6 h-6 transform group-hover:scale-110 transition-transform duration-300" strokeWidth={2} />
            <div className="mt-12">
              <h3 className="text-2xl font-bold text-white mb-3">Digital Product Engineering</h3>
              <p className="text-[#8B95A5] text-[15px] leading-relaxed font-medium mb-8">Bespoke software architecture designed for scale, security, and uncompromising performance.</p>
              <a href="#" className="inline-flex items-center gap-2 text-[#B4D0FF] text-[13px] font-bold hover:text-white transition-colors">
                Learn More <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </motion.div>

          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* Top Right Card */}
            <motion.div 
              initial="hidden" whileInView="visible" viewport={{ once: true }} variants={scrollVariant} transition={{ delay: 0.1 }}
              className="sm:col-span-2 bg-[#0C131F] border border-[#1E293B] rounded-xl p-8 md:p-10 flex flex-col justify-between min-h-50 transition-colors hover:border-[#334155] group"
            >
              <div className="flex justify-between items-start mb-12">
                <BrainCircuit className="text-[#B4D0FF] w-6 h-6 transform group-hover:rotate-12 transition-transform duration-300" strokeWidth={2} />
                <span className="text-[#334155] text-[13px] font-bold font-mono">02</span>
              </div>
              <div>
                <h3 className="text-xl font-bold text-white mb-2">Intelligent Automation</h3>
                <p className="text-[#8B95A5] text-[14px] leading-relaxed font-medium max-w-100">Leveraging AI and ML to streamline enterprise operations and decision-making.</p>
              </div>
            </motion.div>

            {/* Bottom Right Card 1 */}
            <motion.div 
              initial="hidden" whileInView="visible" viewport={{ once: true }} variants={scrollVariant} transition={{ delay: 0.2 }}
              className="bg-[#0C131F] border border-[#1E293B] rounded-xl p-8 flex flex-col transition-colors hover:border-[#334155] group"
            >
              <LayoutTemplate className="text-[#B4D0FF] w-5 h-5 mb-8 transform group-hover:-translate-y-1 transition-transform duration-300" strokeWidth={2} />
              <div className="mt-auto">
                <h3 className="text-lg font-bold text-white mb-2">Enterprise Web</h3>
                <p className="text-[#8B95A5] text-[14px] leading-relaxed font-medium">High-conversion, lightning-fast digital storefronts.</p>
              </div>
            </motion.div>

            {/* Bottom Right Card 2 */}
            <motion.div 
              initial="hidden" whileInView="visible" viewport={{ once: true }} variants={scrollVariant} transition={{ delay: 0.3 }}
              className="bg-[#0C131F] border border-[#1E293B] rounded-xl p-8 flex flex-col transition-colors hover:border-[#334155] group"
            >
              <PenTool className="text-[#B4D0FF] w-5 h-5 mb-8 transform group-hover:rotate-12 transition-transform duration-300" strokeWidth={2} />
              <div className="mt-auto">
                <h3 className="text-lg font-bold text-white mb-2">Product Design</h3>
                <p className="text-[#8B95A5] text-[14px] leading-relaxed font-medium">Human-centric UX that drives retention and delight.</p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Capabilities;