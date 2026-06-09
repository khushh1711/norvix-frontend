import React from 'react';
import { X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const ConsultationModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  // Fetch the base URL from the .env file
  const baseUrl = import.meta.env.VITE_CALENDLY_URL;
  
  // Append parameters to force dark mode and match your brand hex codes
  const calendlyUrl = `${baseUrl}?hide_event_type_details=1&hide_gdpr_banner=1&background_color=0C131F&text_color=ffffff&primary_color=4880FF`;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-100 flex items-center justify-center px-4">
        <motion.div 
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
          onClick={onClose}
          className="absolute inset-0 bg-[#09101A]/80 backdrop-blur-md cursor-pointer"
        ></motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.95, y: 20 }} animate={{ opacity: 1, scale: 1, y: 0 }} exit={{ opacity: 0, scale: 0.95, y: 20 }}
          className="relative w-full max-w-3xl bg-[#0C131F] border border-[#1E293B] rounded-2xl p-2 md:p-4 shadow-2xl z-10 h-[85vh] flex flex-col"
        >
          <button onClick={onClose} className="absolute top-4 right-6 text-[#64748B] hover:text-white transition-colors z-20 bg-[#0C131F] rounded-full p-1">
            <X size={20} />
          </button>
          
          <div className="flex-1 w-full rounded-xl overflow-hidden pt-8">
            <iframe 
              src={calendlyUrl} 
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