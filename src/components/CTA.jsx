import React from 'react';
import { Send } from 'lucide-react';

const CTA = () => {
  return (
    <section className="relative w-full py-32 bg-norvix-bg px-6 border-t border-norvix-border overflow-hidden">
      
      {/* Background Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[60vw] h-[20vh] bg-norvix-cyan opacity-5 blur-[100px] pointer-events-none"></div>

      <div className="relative z-10 max-w-3xl mx-auto flex flex-col items-center text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-norvix-text mb-6">
          Ready to Architect <br /> Your Next Solution?
        </h2>
        <p className="text-lg text-norvix-muted mb-12 max-w-xl">
          Whether you need a scalable web presence or a complex custom system, we are currently accepting technical briefs for Q3.
        </p>

        <form className="w-full bg-norvix-surface p-8 border border-norvix-border rounded-sm shadow-2xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div className="flex flex-col text-left">
              <label className="text-xs font-mono text-norvix-muted uppercase tracking-wider mb-2">Name</label>
              <input 
                type="text" 
                className="w-full bg-norvix-bg border border-norvix-border rounded-sm px-4 py-3 text-norvix-text focus:outline-none focus:border-norvix-cyan focus:ring-1 focus:ring-norvix-cyan transition-all"
                placeholder="John Doe"
              />
            </div>
            <div className="flex flex-col text-left">
              <label className="text-xs font-mono text-norvix-muted uppercase tracking-wider mb-2">Email</label>
              <input 
                type="email" 
                className="w-full bg-norvix-bg border border-norvix-border rounded-sm px-4 py-3 text-norvix-text focus:outline-none focus:border-norvix-cyan focus:ring-1 focus:ring-norvix-cyan transition-all"
                placeholder="john@company.com"
              />
            </div>
          </div>
          
          <div className="flex flex-col text-left mb-8">
            <label className="text-xs font-mono text-norvix-muted uppercase tracking-wider mb-2">Project Brief</label>
            <textarea 
              rows="4"
              className="w-full bg-norvix-bg border border-norvix-border rounded-sm px-4 py-3 text-norvix-text focus:outline-none focus:border-norvix-cyan focus:ring-1 focus:ring-norvix-cyan transition-all resize-none"
              placeholder="Briefly describe your objectives and technical requirements..."
            ></textarea>
          </div>

          <button 
            type="button" 
            className="w-full flex items-center justify-center gap-2 px-8 py-4 bg-norvix-cyan text-norvix-bg font-bold rounded-sm hover:bg-[#00cce6] transition-colors duration-300"
          >
            Submit Brief
            <Send size={18} />
          </button>
        </form>
      </div>
    </section>
  );
};

export default CTA;