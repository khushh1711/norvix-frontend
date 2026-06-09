import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = ({ onStartProject }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <>
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 flex justify-center ${scrolled ? 'py-4 bg-[#09101A]/85 backdrop-blur-md border-b border-[#1E293B] shadow-lg' : 'py-6 bg-transparent'}`}>
        <div className="max-w-275 w-full px-6 flex items-center justify-between text-white">
          
          <button onClick={scrollToTop} className="text-xl font-bold tracking-widest uppercase hover:text-[#4880FF] transition-colors cursor-pointer z-50">
            NORVIX
          </button>

          {/* Desktop Links */}
          <div className="hidden md:flex gap-8 text-[13px] font-bold text-[#8B95A5]">
            <a href="#capabilities" className="hover:text-white transition-colors">Capabilities</a>
            <a href="#case-studies" className="hover:text-white transition-colors">Case Studies</a>
            <a href="#process" className="hover:text-white transition-colors">Process</a>
            <a href="#insights" className="hover:text-white transition-colors">Insights</a>
          </div>

          <div className="hidden md:block">
            <button onClick={onStartProject} className="bg-[#4880FF] hover:bg-[#3b6ee6] text-white px-6 py-2.5 rounded-sm text-[13px] font-bold transition-colors">
              Start Project
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <button className="md:hidden z-50 text-white" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 bg-[#09101A] flex flex-col items-center justify-center gap-8"
          >
            <a href="#capabilities" onClick={() => setMobileMenuOpen(false)} className="text-2xl font-bold text-white">Capabilities</a>
            <a href="#case-studies" onClick={() => setMobileMenuOpen(false)} className="text-2xl font-bold text-white">Case Studies</a>
            <a href="#process" onClick={() => setMobileMenuOpen(false)} className="text-2xl font-bold text-white">Process</a>
            <a href="#insights" onClick={() => setMobileMenuOpen(false)} className="text-2xl font-bold text-white">Insights</a>
            <button onClick={() => { setMobileMenuOpen(false); onStartProject(); }} className="mt-4 bg-[#4880FF] text-white px-8 py-4 rounded-sm text-[15px] font-bold">
              Start Project
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;