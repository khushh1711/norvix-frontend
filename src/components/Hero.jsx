import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { motion } from 'framer-motion';
import ConsultationModal from './ConsultationModal';

const Hero = ({ onStartProject }) => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePos({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 50 } }
  };

  return (
    <>
      <section onMouseMove={handleMouseMove} className="relative w-full min-h-screen flex flex-col items-center justify-center bg-[#09101A] overflow-hidden">
        
        <div className="pointer-events-none absolute inset-0 z-0 transition-opacity duration-300" style={{ background: `radial-gradient(800px circle at ${mousePos.x}px ${mousePos.y}px, rgba(72, 128, 255, 0.08), transparent 40%)` }} />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(ellipse_at_top,var(--tw-gradient-stops))] from-[#112340] via-[#09101A] to-[#09101A] opacity-60 z-0 pointer-events-none"></div>

        <motion.div 
          variants={containerVariants} 
          initial="hidden" 
          animate="show" 
          className="relative z-10 flex flex-col items-center text-center px-6 max-w-4xl mx-auto mt-12"
        >
          <motion.p variants={itemVariants} className="text-[#64748B] text-[11px] font-bold tracking-[0.15em] uppercase mb-8">
            Pioneering Digital Excellence
          </motion.p>

          <motion.h1 variants={itemVariants} className="text-5xl md:text-[64px] font-bold text-white tracking-tight mb-8 leading-[1.1]">
            Transforming Vision into <br className="hidden md:block" />
            Intelligent <span className="text-[#4880FF]">Digital Reality.</span>
          </motion.h1>

          <motion.p variants={itemVariants} className="text-[#8B95A5] text-[15px] md:text-[17px] max-w-175 mb-12 leading-relaxed font-medium">
            Norvix is a strategic technology partner dedicated to engineering scalable products and exceptional digital experiences for the world's most ambitious enterprises.
          </motion.p>

          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4">
            <motion.button 
              onClick={onStartProject}
              whileHover={{ scale: 1.03 }} 
              whileTap={{ scale: 0.97 }}
              className="bg-[#B4D0FF] text-[#09101A] px-8 py-3.5 rounded-sm text-[13px] font-bold shadow-[0_0_24px_rgba(180,208,255,0.25)] hover:shadow-[0_0_32px_rgba(180,208,255,0.4)] transition-shadow"
            >
              Start a Project
            </motion.button>
            
            {/* Added onClick to trigger the modal */}
            <motion.button 
              onClick={() => setIsModalOpen(true)}
              whileHover={{ scale: 1.03 }} 
              whileTap={{ scale: 0.97 }}
              className="bg-[#09101A]/50'. text-[#8B95A5] border border-[#1E293B] px-8 py-3.5 rounded-sm text-[13px] font-bold hover:text-white hover:border-[#334155] transition-colors bg-[#09101A]/50"
            >
              Schedule Consultation
            </motion.button>
          </motion.div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0 }} 
          animate={{ opacity: 1, y: [0, 10, 0] }} 
          transition={{ delay: 1.5, duration: 2, repeat: Infinity }} 
          className="absolute bottom-8 left-1/2 -translate-x-1/2 text-[#334155]"
        >
          <ChevronDown size={20} strokeWidth={2.5} />
        </motion.div>
      </section>

      {/* Render the Modal */}
      <ConsultationModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
};

export default Hero;