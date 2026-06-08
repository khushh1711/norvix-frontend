import React from 'react';
import { Mail, MapPin, ChevronDown } from 'lucide-react';

const Contact = () => {
  return (
    <section className="w-full bg-[#131B2B] px-6 py-24 flex justify-center">
      <div className="max-w-275 w-full grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-8 items-center">
        
        {/* Left Content Area */}
        <div className="max-w-md">
          <h2 className="text-5xl md:text-[64px] font-bold text-white tracking-tight leading-[1.1] mb-8">
            Let's Build <br />
            Something <br />
            <span className="text-[#B4D0FF]">Extraordinary.</span>
          </h2>
          
          <p className="text-[#8B95A5] text-[16px] leading-relaxed font-medium mb-12">
            Ready to transform your vision into reality? We're currently accepting high-impact projects for Q3 2024.
          </p>

          <div className="flex flex-col gap-6">
            <div className="flex items-center gap-4 text-white">
              <Mail className="text-[#B4D0FF] w-5 h-5" strokeWidth={2} />
              <span className="text-[15px] font-medium">work.norvix@gmail.com</span>
            </div>
            
            <div className="flex items-center gap-4 text-white">
              <MapPin className="text-[#B4D0FF] w-5 h-5" strokeWidth={2} />
              <span className="text-[15px] font-medium">London | New York | Singapore</span>
            </div>
          </div>
        </div>

        {/* Right Form Area */}
        <div className="w-full bg-[#0B1120] rounded-2xl p-8 md:p-10 shadow-2xl lg:ml-auto max-w-135">
          <form className="flex flex-col gap-6">
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-[#8B95A5] text-[10px] font-bold tracking-widest uppercase mb-2">Full Name</label>
                <input 
                  type="text" 
                  placeholder="John Doe"
                  className="w-full bg-[#1A2332] border border-transparent focus:border-[#4880FF] focus:ring-1 focus:ring-[#4880FF] focus:shadow-[0_0_15px_rgba(72,128,255,0.15)] rounded-md px-4 py-3.5 text-white placeholder:text-[#64748B] text-[14px] outline-none transition-all duration-300"
                />
              </div>
              <div>
                <label className="block text-[#8B95A5] text-[10px] font-bold tracking-widest uppercase mb-2">Work Email</label>
                <input 
                  type="email" 
                  placeholder="john@company.com"
                  className="w-full bg-[#1A2332] border border-transparent focus:border-[#4880FF] focus:ring-1 focus:ring-[#4880FF] focus:shadow-[0_0_15px_rgba(72,128,255,0.15)] rounded-md px-4 py-3.5 text-white placeholder:text-[#64748B] text-[14px] outline-none transition-all duration-300"
                />
              </div>
            </div>

            <div>
              <label className="block text-[#8B95A5] text-[10px] font-bold tracking-widest uppercase mb-2">Project Type</label>
              <div className="relative">
                <select className="w-full bg-[#1A2332] border border-transparent focus:border-[#4880FF] focus:ring-1 focus:ring-[#4880FF] focus:shadow-[0_0_15px_rgba(72,128,255,0.15)] rounded-md px-4 py-3.5 text-white text-[14px] outline-none transition-all duration-300 appearance-none cursor-pointer">
                  <option>Digital Product Engineering</option>
                  <option>Intelligent Automation</option>
                  <option>Enterprise Web</option>
                  <option>Technology Consulting</option>
                </select>
                <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 text-[#64748B] w-4 h-4 pointer-events-none" strokeWidth={2.5} />
              </div>
            </div>

            <div>
              <label className="block text-[#8B95A5] text-[10px] font-bold tracking-widest uppercase mb-2">Tell Us About Your Project</label>
              <textarea 
                rows="4"
                placeholder="Briefly describe your goals..."
                className="w-full bg-[#1A2332] border border-transparent focus:border-[#4880FF] focus:ring-1 focus:ring-[#4880FF] focus:shadow-[0_0_15px_rgba(72,128,255,0.15)] rounded-md px-4 py-3.5 text-white placeholder:text-[#64748B] text-[14px] outline-none transition-all duration-300 resize-none"
              ></textarea>
            </div>

            <button 
              type="button" 
              className="w-full mt-2 bg-[#B4D0FF] hover:bg-[#9cbbf5] active:scale-95 text-[#09101A] font-bold text-[13px] tracking-wider uppercase py-4 rounded-md transition-all duration-300"
            >
              Send Inquiry
            </button>

          </form>
        </div>

      </div>
    </section>
  );
};

export default Contact;