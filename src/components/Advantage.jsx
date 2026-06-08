import React from 'react';
import { BadgeCheck, Diamond, Layers } from 'lucide-react';

const Advantage = () => {
  return (
    <section className="w-full bg-[#09101A] px-6 py-24 flex justify-center">
      <div className="max-w-275 w-full grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
        
        {/* Left Content Area */}
        <div>
          <p className="text-[#4880FF] text-[11px] font-bold tracking-[0.15em] uppercase mb-4">
            The Norvix Advantage
          </p>
          <h2 className="text-4xl md:text-[56px] font-bold text-white tracking-tight leading-[1.1] mb-6">
            Why Partner <br className="hidden md:block" />
            with Us?
          </h2>
          <p className="text-[#8B95A5] text-[16px] leading-relaxed font-medium mb-12 max-w-105">
            We don't just build software; we build the future of your business. Our team is comprised of industry veterans who treat every project with extreme ownership.
          </p>

          {/* Features List */}
          <div className="flex flex-col gap-8">
            
            <div className="flex items-start gap-5">
              <div className="w-10 h-10 rounded-md bg-[#111827] border border-[#1E293B] flex items-center justify-center shrink-0 mt-1">
                <BadgeCheck className="text-[#B4D0FF] w-5 h-5" strokeWidth={2} />
              </div>
              <div>
                <h3 className="text-[17px] font-bold text-white mb-1">
                  Business-first approach
                </h3>
                <p className="text-[#8B95A5] text-[14px] font-medium leading-relaxed">
                  Technology that serves your bottom line, not just a trend.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-5">
              <div className="w-10 h-10 rounded-md bg-[#111827] border border-[#1E293B] flex items-center justify-center shrink-0 mt-1">
                <Diamond className="text-[#B4D0FF] w-5 h-5" strokeWidth={2} />
              </div>
              <div>
                <h3 className="text-[17px] font-bold text-white mb-1">
                  Design Excellence
                </h3>
                <p className="text-[#8B95A5] text-[14px] font-medium leading-relaxed">
                  Pixel-perfect precision meets high-end luxury aesthetics.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-5">
              <div className="w-10 h-10 rounded-md bg-[#111827] border border-[#1E293B] flex items-center justify-center shrink-0 mt-1">
                <Layers className="text-[#B4D0FF] w-5 h-5" strokeWidth={2} />
              </div>
              <div>
                <h3 className="text-[17px] font-bold text-white mb-1">
                  Scalable Engineering
                </h3>
                <p className="text-[#8B95A5] text-[14px] font-medium leading-relaxed">
                  Bulletproof code architecture designed to handle massive growth.
                </p>
              </div>
            </div>

          </div>
        </div>

        {/* Right Image/Testimonial Area */}
        <div className="relative w-full border border-[#1E293B] rounded-2xl p-6 h-125 flex flex-col justify-end overflow-hidden shadow-2xl">
          
          {/* Real Background Image Integration */}
          <img 
            src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
            alt="Abstract Luxury Technology"
            className="absolute inset-0 w-full h-full object-cover z-0 opacity-50"
          />
          {/* Gradient fade to ensure text readability */}
          <div className="absolute inset-0 bg-linear-to-t from-[#09101A] via-[#09101A]/40 to-transparent z-0"></div>

          {/* Testimonial Overlay Card */}
          <div className="relative z-10 bg-[#111827]/95 backdrop-blur-md border border-[#1E293B] rounded-lg p-6 md:p-8 pl-8 overflow-hidden">
            {/* Light blue left border accent */}
            <div className="absolute left-0 top-0 bottom-0 w-0.75 bg-[#B4D0FF]"></div>
            
            <p className="text-[#E2E8F0] italic text-[15px] font-medium leading-relaxed mb-6">
              "Norvix delivered a product that didn't just meet our specs—it redefined our internal expectations of what digital luxury could feel like."
            </p>
            
            <div className="flex items-center gap-4">
              {/* Avatar Placeholder */}
              <div className="w-10 h-10 rounded bg-[#1A2332] border border-[#1E293B] shrink-0"></div>
              <div>
                <h4 className="text-white text-[14px] font-bold leading-tight">Marcus Chen</h4>
                <span className="text-[#8B95A5] text-[12px] font-medium">CTO, Aether Global</span>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default Advantage;