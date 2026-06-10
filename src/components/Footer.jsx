import React from 'react';

const Footer = () => {
  const handleScroll = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="w-full bg-[#09101A] px-6 pt-24 pb-16 flex justify-center border-t border-[#1E293B]">
      <div className="max-w-275 w-full grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8">
        
        {/* Column 1: Brand (Takes up 4 columns) */}
        <div className="md:col-span-4 flex flex-col">
          <h2 className="text-[28px] font-bold text-white tracking-widest uppercase mb-4">NORVIX</h2>
          <p className="text-[#64748B] text-[14px] font-medium leading-relaxed max-w-70">
            Architecting high-performance digital solutions for global enterprises. Engineering excellence at the edge of innovation.
          </p>
        </div>

        {/* Column 2: Navigation (Takes up 2 columns) */}
        <div className="md:col-span-2 flex flex-col gap-4">
          <h3 className="text-white text-[11px] font-bold tracking-[0.15em] uppercase mb-2">Company</h3>
          <button onClick={() => handleScroll('capabilities')} className="text-left text-[#8B95A5] text-[14px] font-medium hover:text-white transition-colors cursor-pointer">Capabilities</button>
          <button onClick={() => handleScroll('case-studies')} className="text-left text-[#8B95A5] text-[14px] font-medium hover:text-white transition-colors cursor-pointer">Portfolio</button>
          <button onClick={() => handleScroll('process')} className="text-left text-[#8B95A5] text-[14px] font-medium hover:text-white transition-colors cursor-pointer">Methodology</button>
        </div>

        {/* Column 3: Resources (Takes up 2 columns) */}
        <div className="md:col-span-2 flex flex-col gap-4">
          <h3 className="text-white text-[11px] font-bold tracking-[0.15em] uppercase mb-2">Resources</h3>
          <button onClick={() => handleScroll('insights')} className="text-left text-[#8B95A5] text-[14px] font-medium hover:text-white transition-colors cursor-pointer">Insights</button>
          <a href="/journal" className="text-left text-[#8B95A5] text-[14px] font-medium hover:text-white transition-colors">The Journal</a>
          <button onClick={() => handleScroll('contact')} className="text-left text-[#8B95A5] text-[14px] font-medium hover:text-white transition-colors cursor-pointer">Contact Desk</button>
        </div>

        {/* Column 4: Legal (Takes up 4 columns, aligned right) */}
        <div className="md:col-span-4 flex flex-col md:items-end gap-4 md:text-right">
          <h3 className="text-white text-[11px] font-bold tracking-[0.15em] uppercase mb-2">Legal</h3>
          <a href="#" className="text-[#8B95A5] text-[14px] font-medium hover:text-white transition-colors">Privacy Policy</a>
          <a href="#" className="text-[#8B95A5] text-[14px] font-medium hover:text-white transition-colors">Terms of Service</a>
          
          <p className="text-[#475569] text-[10px] font-bold tracking-widest uppercase mt-12 md:mt-8">
            © {new Date().getFullYear()} NORVIX STUDIO. ALL RIGHTS RESERVED.
          </p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;