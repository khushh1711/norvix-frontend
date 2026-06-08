import React from 'react';
import { Globe, AtSign, Code } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="w-full bg-[#09101A] px-6 pt-24 pb-12 flex justify-center border-t border-[#1E293B]">
      <div className="max-w-275 w-full flex flex-col lg:flex-row justify-between gap-16 lg:gap-8">
        
        {/* Left Section: Brand & Bio */}
        <div className="max-w-90 flex flex-col justify-between">
          <div>
            <h2 className="text-[28px] font-bold text-white tracking-widest uppercase mb-6">
              NORVIX
            </h2>
            <p className="text-[#8B95A5] text-[15px] font-medium leading-relaxed">
              Architecting high-performance digital solutions for global enterprises. Engineering excellence at the edge of innovation.
            </p>
          </div>
          
          {/* Social / Contact Icons */}
          <div className="flex items-center gap-6 mt-12">
            <a href="#" className="text-[#E2E8F0] hover:text-[#4880FF] transition-colors">
              <Globe className="w-5 h-5" strokeWidth={2} />
            </a>
            <a href="#" className="text-[#E2E8F0] hover:text-[#4880FF] transition-colors">
              <AtSign className="w-5 h-5" strokeWidth={2} />
            </a>
            <a href="#" className="text-[#E2E8F0] hover:text-[#4880FF] transition-colors">
              <Code className="w-5 h-5" strokeWidth={2} />
            </a>
          </div>
        </div>

        {/* Right Section: Navigation Links & Copyright */}
        <div className="flex flex-col justify-between lg:items-end">
          
          {/* Links Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-12 md:gap-20">
            
            {/* Column 1 */}
            <div className="flex flex-col gap-6">
              <h3 className="text-white text-[11px] font-bold tracking-[0.15em] uppercase mb-2">
                Capabilities
              </h3>
              <a href="#" className="text-[#E2E8F0] text-[13px] font-medium hover:text-[#4880FF] transition-colors">Engineering</a>
              <a href="#" className="text-[#E2E8F0] text-[13px] font-medium hover:text-[#4880FF] transition-colors">AI Strategy</a>
              <a href="#" className="text-[#E2E8F0] text-[13px] font-medium hover:text-[#4880FF] transition-colors">Experiences</a>
            </div>

            {/* Column 2 */}
            <div className="flex flex-col gap-6">
              <h3 className="text-white text-[11px] font-bold tracking-[0.15em] uppercase mb-2">
                Studio
              </h3>
              <a href="#" className="text-[#E2E8F0] text-[13px] font-medium hover:text-[#4880FF] transition-colors">Journal</a>
              <a href="#" className="text-[#E2E8F0] text-[13px] font-medium hover:text-[#4880FF] transition-colors">Careers</a>
              <a href="#" className="text-[#E2E8F0] text-[13px] font-medium hover:text-[#4880FF] transition-colors">Insights</a>
            </div>

            {/* Column 3 */}
            <div className="flex flex-col gap-6">
              <h3 className="text-white text-[11px] font-bold tracking-[0.15em] uppercase mb-2">
                Legal
              </h3>
              <a href="#" className="text-[#E2E8F0] text-[13px] font-medium hover:text-[#4880FF] transition-colors">Privacy</a>
              <a href="#" className="text-[#E2E8F0] text-[13px] font-medium hover:text-[#4880FF] transition-colors">Terms</a>
            </div>

          </div>

          {/* Copyright */}
          <div className="mt-20 lg:mt-0 pt-12 lg:pt-0 text-left lg:text-right">
            <p className="text-[#8B95A5] text-[10px] font-bold tracking-widest uppercase">
              © {new Date().getFullYear()} NORVIX STUDIO. ALL RIGHTS RESERVED.
            </p>
          </div>

        </div>

      </div>
    </footer>
  );
};

export default Footer;