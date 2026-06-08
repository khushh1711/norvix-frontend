import React, { useState, useEffect } from 'react';

const Navbar = ({ onStartProject }) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Function to smoothly scroll back to the top
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 flex justify-center ${scrolled ? 'py-4 bg-[#09101A]/85 backdrop-blur-md border-b border-[#1E293B] shadow-lg' : 'py-6 bg-transparent'}`}>
      <div className="max-w-275 w-full px-6 flex items-center justify-between text-white">
        
        {/* Logo - Now clickable to scroll to top */}
        <button 
          onClick={scrollToTop}
          className="text-xl font-bold tracking-widest uppercase hover:text-[#4880FF] transition-colors cursor-pointer"
        >
          NORVIX
        </button>

        {/* Center Links (Make sure you added IDs to your sections in App.jsx!) */}
        <div className="hidden md:flex gap-8 text-[13px] font-bold text-[#8B95A5]">
          <a href="#capabilities" className="hover:text-white transition-colors">Capabilities</a>
          <a href="#case-studies" className="hover:text-white transition-colors">Case Studies</a>
          <a href="#process" className="hover:text-white transition-colors">Process</a>
          <a href="#insights" className="hover:text-white transition-colors">Insights</a>
        </div>

        <button 
          onClick={onStartProject}
          className="bg-[#4880FF] hover:bg-[#3b6ee6] text-white px-6 py-2.5 rounded-sm text-[13px] font-bold transition-colors"
        >
          Start Project
        </button>

      </div>
    </nav>
  );
};

export default Navbar;