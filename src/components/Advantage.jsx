import React from 'react';
import { BadgeCheck, Diamond, Layers, Globe, ShieldCheck, Activity } from 'lucide-react';

const Advantage = () => {
  return (
    <section className="w-full bg-[#09101A] px-6 py-24 flex justify-center">
      <div className="max-w-275 w-full grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
        
        {/* Left Side: Restored Original Text */}
        <div>
          <p className="text-[#4880FF] text-[11px] font-bold tracking-[0.15em] uppercase mb-4">The Norvix Advantage</p>
          <h2 className="text-4xl md:text-[56px] font-bold text-white tracking-tight leading-[1.1] mb-6">Why Partner <br className="hidden md:block" /> with Us?</h2>
          <p className="text-[#8B95A5] text-[16px] leading-relaxed font-medium mb-12 max-w-105">
            We don't just build software; we build the future of your business. Our team is comprised of industry veterans who treat every project with extreme ownership.
          </p>

          <div className="flex flex-col gap-8">
            <div className="flex items-start gap-5">
              <div className="w-10 h-10 rounded-md bg-[#111827] border border-[#1E293B] flex items-center justify-center shrink-0 mt-1">
                <BadgeCheck className="text-[#B4D0FF] w-5 h-5" />
              </div>
              <div>
                <h3 className="text-[17px] font-bold text-white mb-1">Business-first approach</h3>
                <p className="text-[#8B95A5] text-[14px] font-medium leading-relaxed">Technology that serves your bottom line, not just a trend.</p>
              </div>
            </div>

            <div className="flex items-start gap-5">
              <div className="w-10 h-10 rounded-md bg-[#111827] border border-[#1E293B] flex items-center justify-center shrink-0 mt-1">
                <Diamond className="text-[#B4D0FF] w-5 h-5" />
              </div>
              <div>
                <h3 className="text-[17px] font-bold text-white mb-1">Design Excellence</h3>
                <p className="text-[#8B95A5] text-[14px] font-medium leading-relaxed">Pixel-perfect precision meets high-end luxury aesthetics.</p>
              </div>
            </div>

            <div className="flex items-start gap-5">
              <div className="w-10 h-10 rounded-md bg-[#111827] border border-[#1E293B] flex items-center justify-center shrink-0 mt-1">
                <Layers className="text-[#B4D0FF] w-5 h-5" />
              </div>
              <div>
                <h3 className="text-[17px] font-bold text-white mb-1">Scalable Engineering</h3>
                <p className="text-[#8B95A5] text-[14px] font-medium leading-relaxed">Bulletproof code architecture designed to handle massive growth.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side: Professional Corporate Impact Metrics UI */}
        <div className="w-full bg-[#0C131F] border border-[#1E293B] rounded-2xl p-8 lg:p-10 flex flex-col gap-8 justify-center shadow-2xl relative overflow-hidden h-full min-h-125">
          
          {/* Subtle background glow */}
          <div className="absolute top-0 right-0 w-75 h-75 bg-[#4880FF] opacity-[0.03] blur-[80px] pointer-events-none rounded-full"></div>

          <div>
            <span className="text-[#B4D0FF] text-[10px] font-bold tracking-[0.2em] uppercase font-mono block mb-3">Enterprise Impact</span>
            <h3 className="text-3xl font-bold text-white leading-tight">Engineered for <br/>Global Scale.</h3>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
            
            <div className="bg-[#131B2B] border border-[#1E293B] rounded-xl p-6 relative overflow-hidden group hover:border-[#4880FF] transition-colors duration-500">
              <Globe className="text-[#4880FF] w-6 h-6 mb-4 opacity-50" />
              <h4 className="text-4xl font-bold text-white mb-1">$2B+</h4>
              <p className="text-[#8B95A5] text-[12px] font-medium uppercase tracking-wider">Processed Volume</p>
            </div>

            <div className="bg-[#131B2B] border border-[#1E293B] rounded-xl p-6 relative overflow-hidden group hover:border-[#4880FF] transition-colors duration-500">
              <Activity className="text-[#B4D0FF] w-6 h-6 mb-4 opacity-50" />
              <h4 className="text-4xl font-bold text-white mb-1">99.99%</h4>
              <p className="text-[#8B95A5] text-[12px] font-medium uppercase tracking-wider">System Uptime</p>
            </div>

            <div className="bg-[#131B2B] border border-[#1E293B] rounded-xl p-6 sm:col-span-2 relative overflow-hidden group hover:border-[#4880FF] transition-colors duration-500 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                 <ShieldCheck className="text-emerald-400 w-6 h-6 mb-4 opacity-50" />
                 <h4 className="text-2xl font-bold text-white mb-1">Zero-Trust Security</h4>
                 <p className="text-[#8B95A5] text-[12px] font-medium uppercase tracking-wider">Military-Grade Encryption Standard</p>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

export default Advantage;