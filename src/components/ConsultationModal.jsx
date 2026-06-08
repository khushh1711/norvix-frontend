import React from 'react';
import { X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const ConsultationModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-100 flex items-center justify-center px-4">
        {/* Blurred Backdrop */}
        <motion.div 
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
          onClick={onClose}
          className="absolute inset-0 bg-[#09101A]/80 backdrop-blur-md cursor-pointer"
        ></motion.div>

        {/* Modal Card - Made slightly taller to fit the calendar */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95, y: 20 }} animate={{ opacity: 1, scale: 1, y: 0 }} exit={{ opacity: 0, scale: 0.95, y: 20 }}
          className="relative w-full max-w-3xl bg-[#0C131F] border border-[#1E293B] rounded-2xl p-6 md:p-8 shadow-2xl z-10 h-[80vh] flex flex-col"
        >
          <button onClick={onClose} className="absolute top-6 right-6 text-[#64748B] hover:text-white transition-colors z-20 bg-[#0C131F] rounded-full p-1">
            <X size={20} />
          </button>

          <h3 className="text-2xl font-bold text-white mb-2">Schedule a Strategy Call</h3>
          <p className="text-[#8B95A5] text-[14px] mb-6 leading-relaxed">
            Select a 30-minute block to discuss your architecture needs directly with our engineering team.
          </p>

          {/* The Iframe Embed */}
          <div className="flex-1 w-full bg-white rounded-xl overflow-hidden">
            <iframe 
              /* REPLACE THIS URL WITH YOUR ACTUAL CALENDLY LINK */
              src="https://calendly.com/work-norvix/30min" 
              width="100%" 
              height="100%" 
              frameBorder="0"
              title="Schedule Consultation"
            ></iframe>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

export default ConsultationModal;