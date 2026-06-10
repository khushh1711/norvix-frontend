import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const CaseStudies = () => {
  const projects = [
    {
      id: "vrit",
      overline: "Fintech / AI Platform",
      title: "Luminara: Next-Gen Asset Management",
      description: "An end-to-end institutional platform processing billions in real-time transactions with predictive AI insights.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      reverseLayout: false,
    },
    {
      id: "aegis",
      overline: "IOT / Infrastructure",
      title: "Nexus Grid: Urban Smart Systems",
      description: "Architecting the digital backbone for the world's first fully autonomous logistics hub in Singapore.",
      image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80", 
      reverseLayout: true,
    }
  ];

  return (
    <section className="w-full bg-[#09101A] px-6 py-24 flex justify-center" id="case-studies">
      <div className="max-w-275 w-full">
        <div className="mb-20">
          <p className="text-[#4880FF] text-[11px] font-bold tracking-[0.15em] uppercase mb-4">Case Studies</p>
          <h2 className="text-4xl md:text-[44px] font-semibold text-white tracking-tight">The Portfolio</h2>
        </div>

        <div className="flex flex-col gap-32">
          {projects.map((project) => (
            <div key={project.id} className={`flex flex-col ${project.reverseLayout ? 'md:flex-row-reverse' : 'md:flex-row'} items-center gap-12 lg:gap-20`}>
              <div className="flex-1 w-full">
                <p className="text-[#8B95A5] text-[11px] font-bold tracking-[0.15em] uppercase mb-4">{project.overline}</p>
                <h3 className="text-3xl md:text-[38px] font-bold text-white leading-[1.1] mb-6">{project.title}</h3>
                <p className="text-[#8B95A5] text-[15px] leading-relaxed font-medium mb-10 max-w-112.5">{project.description}</p>
                
                <Link to={`/case-study/${project.id}`} className="inline-flex items-center gap-2 text-[#B4D0FF] text-[14px] font-bold hover:text-white transition-colors group">
                  View Case Study <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
              <div className="flex-1 w-full relative">
                 <img src={project.image} alt={project.title} className="w-full aspect-4/3 object-cover rounded-xl border border-[#1E293B] shadow-[0_0_40px_rgba(0,0,0,0.5)]" />
                 <div className="absolute inset-0 rounded-xl shadow-[inset_0_0_40px_rgba(9,16,26,0.6)] pointer-events-none"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;