import React, { useEffect } from 'react';
import { ArrowLeft } from 'lucide-react';
import { useNavigate, useParams } from 'react-router-dom';
import { motion } from 'framer-motion';

const projectData = {
  vrit: {
    overline: "Fintech / AI Platform",
    title: "Luminara: Next-Gen Asset Management",
    role: "Lead Engineering Agency",
    platform: "Enterprise Web & Mobile",
    scale: "Global Deployment",
    timeline: "8 Months",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
  },
  aegis: {
    overline: "IOT / Infrastructure",
    title: "Nexus Grid: Urban Smart Systems",
    role: "System Architecture",
    platform: "Edge Infrastructure",
    scale: "City-Wide Grid",
    timeline: "14 Months",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
  }
};

const CaseStudyView = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const project = projectData[id];

  useEffect(() => window.scrollTo(0, 0), [id]);

  if (!project) return null;

  return (
    <main className="min-h-screen bg-[#09101A] font-sans pb-24">
      <nav className="w-full px-8 py-6 border-b border-[#1E293B] bg-[#09101A]/80 backdrop-blur-md sticky top-0 z-50 flex justify-between items-center">
        {/* FIX: Smart back button that returns you to your previous scroll position */}
        <button onClick={() => navigate(-1)} className="text-white hover:text-[#4880FF] transition-colors flex items-center gap-2 text-[13px] font-bold cursor-pointer">
          <ArrowLeft size={16} /> Back
        </button>
        <div className="text-xl font-bold tracking-widest uppercase text-white">NORVIX</div>
      </nav>

      <header className="max-w-275 mx-auto px-6 pt-24 pb-16">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
          <p className="text-[#4880FF] text-[11px] font-bold tracking-[0.15em] uppercase mb-6">{project.overline}</p>
          <h1 className="text-5xl md:text-[64px] font-bold text-white tracking-tight leading-[1.1] mb-12">{project.title}</h1>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 border-y border-[#1E293B] py-8 mb-16">
          <div>
            <h4 className="text-[#8B95A5] text-[10px] font-bold tracking-widest uppercase mb-2">Role</h4>
            <p className="text-white text-[14px] font-medium">{project.role}</p>
          </div>
          <div>
            <h4 className="text-[#8B95A5] text-[10px] font-bold tracking-widest uppercase mb-2">Platform</h4>
            <p className="text-white text-[14px] font-medium">{project.platform}</p>
          </div>
          <div>
            <h4 className="text-[#8B95A5] text-[10px] font-bold tracking-widest uppercase mb-2">Scale</h4>
            <p className="text-white text-[14px] font-medium">{project.scale}</p>
          </div>
          <div>
            <h4 className="text-[#8B95A5] text-[10px] font-bold tracking-widest uppercase mb-2">Timeline</h4>
            <p className="text-white text-[14px] font-medium">{project.timeline}</p>
          </div>
        </div>

        <div className="w-full mb-20">
          <img src={project.image} alt={project.title} className="w-full aspect-21/9 object-cover rounded-2xl border border-[#1E293B]" />
        </div>

        {/* Massively Expanded Corporate Content */}
        <div className="max-w-200 mx-auto text-[#8B95A5] text-[17px] leading-[1.8] font-medium">
          <h2 className="text-3xl font-bold text-white mb-6">Executive Summary & The Challenge</h2>
          <p className="mb-6">When dealing with enterprise-grade operations, legacy infrastructure frequently bottlenecks scaling efforts. Our client approached Norvix with a mandate: re-architect their entire core digital framework to handle a 10x increase in concurrent users without sacrificing absolute data integrity or introducing system latency. The existing monolithic architecture was fracturing under the weight of modern data demands, creating unacceptable risks for their operational timeline.</p>
          <p className="mb-12">The challenge was not merely writing code, but completely rethinking the data flow. We needed to design a distributed system capable of real-time processing, implementing strict security compliances, and delivering a flawless, premium user interface that required zero onboarding time for their internal teams.</p>

          <h2 className="text-3xl font-bold text-white mb-6">Strategic Architectural Implementation</h2>
          <p className="mb-6">The Norvix engineering team initiated a comprehensive discovery phase, mapping out every data endpoint and user journey. We elected to transition the platform to a highly decoupled microservices architecture. By isolating the computational heavy-lifting from the client-side interface, we instantly reduced latency by over 60%.</p>
          <p className="mb-6">Simultaneously, our design division completely overhauled the visual interface. We implemented a sleek, dark-mode design system utilizing a spatial UI paradigm. This wasn't just for aesthetics; by reducing visual clutter and emphasizing data hierarchy, we decreased operator error rates and significantly accelerated daily workflow efficiency.</p>
          <p className="mb-12">Security was baked into the foundation. We deployed advanced zero-trust authentication protocols, ensuring that every internal microservice communication was encrypted and verified, future-proofing the platform against evolving digital threats.</p>

          <h2 className="text-3xl font-bold text-white mb-6">Outcomes & Enterprise ROI</h2>
          <p className="mb-6">The deployment was executed over a weekend with zero unplanned downtime. Within the first quarter post-launch, the new platform successfully processed over $2B in transactional volume seamlessly. Server costs were reduced by 30% due to efficient resource allocation, while the system maintained a flawless 99.999% uptime rating.</p>
          <p className="mb-12">This project stands as a testament to the Norvix methodology: combining rigorous, enterprise-tier backend engineering with uncompromising design excellence to deliver digital products that redefine industry standards.</p>
        </div>
      </header>
    </main>
  );
};

export default CaseStudyView;