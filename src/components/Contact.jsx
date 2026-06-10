import React, { useState } from 'react';
import { Mail, MapPin, ChevronDown, CheckCircle2, Loader2 } from 'lucide-react';

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(e.target);
    formData.append("access_key", import.meta.env.VITE_WEB3FORMS_KEY);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });

      if (response.ok) {
        setIsSuccess(true);
        e.target.reset(); // Clear the form
      }
    } catch (error) {
      console.error("Form submission failed", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="w-full bg-[#131B2B] px-6 py-24 flex justify-center" id="contact">
      <div className="max-w-275 w-full grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-8 items-center">
        
        {/* Left Content Area (Remains unchanged) */}
        <div className="max-w-md">
          <h2 className="text-5xl md:text-[64px] font-bold text-white tracking-tight leading-[1.1] mb-8">
            Let's Build <br /> Something <br />
            <span className="text-[#4880FF]">Extraordinary.</span>
          </h2>
          <p className="text-[#8B95A5] text-[16px] leading-relaxed font-medium mb-12">
            Ready to transform your vision into reality? We're currently accepting high-impact projects for Q3 2026.
          </p>
          <div className="flex flex-col gap-6">
            <div className="flex items-center gap-4 text-white">
              <Mail className="text-[#4880FF] w-5 h-5" />
              <span className="text-[15px] font-medium">work.norvix@gmail.com</span>
            </div>
            <div className="flex items-center gap-4 text-white">
              <MapPin className="text-[#4880FF] w-5 h-5" />
              <span className="text-[15px] font-medium">Ahmedabad</span>
            </div>
          </div>
        </div>

        {/* Right Form Area */}
        <div className="w-full bg-[#0B1120] rounded-2xl p-8 md:p-10 shadow-2xl lg:ml-auto max-w-135 relative overflow-hidden">
          
          {/* Success State Overlay */}
          {isSuccess && (
            <div className="absolute inset-0 bg-[#0B1120] z-20 flex flex-col items-center justify-center text-center p-8">
              <CheckCircle2 className="text-[#4880FF] w-16 h-16 mb-4" />
              <h3 className="text-2xl font-bold text-white mb-2">Inquiry Received</h3>
              <p className="text-[#8B95A5] text-[15px]">Our engineering team will review your brief and reach out within 24 hours.</p>
              <button 
                onClick={() => setIsSuccess(false)}
                className="mt-8 text-[#4880FF] text-[13px] font-bold hover:text-white transition-colors"
              >
                Send another message
              </button>
            </div>
          )}

          <form onSubmit={handleSubmit} className="flex flex-col gap-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-[#8B95A5] text-[10px] font-bold tracking-widest uppercase mb-2">Full Name</label>
                <input type="text" name="name" required placeholder="John Doe" className="w-full bg-[#1A2332] border border-[#1E293B] focus:border-[#4880FF] rounded-md px-4 py-3.5 text-white placeholder:text-[#475569] text-[14px] outline-none transition-all" />
              </div>
              <div>
                <label className="block text-[#8B95A5] text-[10px] font-bold tracking-widest uppercase mb-2">Work Email</label>
                <input type="email" name="email" required placeholder="john@company.com" className="w-full bg-[#1A2332] border border-[#1E293B] focus:border-[#4880FF] rounded-md px-4 py-3.5 text-white placeholder:text-[#475569] text-[14px] outline-none transition-all" />
              </div>
            </div>

            <div>
              <label className="block text-[#8B95A5] text-[10px] font-bold tracking-widest uppercase mb-2">Project Type</label>
              <div className="relative">
                <select name="project_type" className="w-full bg-[#1A2332] border border-[#1E293B] focus:border-[#4880FF] rounded-md px-4 py-3.5 text-white text-[14px] outline-none appearance-none cursor-pointer">
                  <option>Digital Product Engineering</option>
                  <option>Intelligent Automation</option>
                  <option>Enterprise Web</option>
                </select>
                <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 text-[#64748B] w-4 h-4 pointer-events-none" />
              </div>
            </div>

            <div>
              <label className="block text-[#8B95A5] text-[10px] font-bold tracking-widest uppercase mb-2">Tell Us About Your Project</label>
              <textarea name="message" required rows="4" placeholder="Briefly describe your goals..." className="w-full bg-[#1A2332] border border-[#1E293B] focus:border-[#4880FF] rounded-md px-4 py-3.5 text-white placeholder:text-[#475569] text-[14px] outline-none resize-none"></textarea>
            </div>

            <button type="submit" disabled={isSubmitting} className="w-full mt-2 bg-[#4880FF] hover:bg-[#3b6ee6] disabled:bg-[#1E293B] disabled:text-[#8B95A5] text-white font-bold text-[13px] tracking-wider uppercase py-4 rounded-md transition-all flex justify-center items-center gap-2">
              {isSubmitting ? <><Loader2 className="w-4 h-4 animate-spin" /> Sending...</> : 'Send Inquiry'}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;