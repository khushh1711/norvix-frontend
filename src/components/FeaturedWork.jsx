import React from 'react';
import { Database, Scan } from 'lucide-react';

const FeaturedWork = () => {
  const projects = [
    {
      title: "Vrit Clinical Registry System",
      category: "Multi-Tenant Mobile Application",
      description: "Architected a scalable digital registry for clinical environments. Designed with strict user role management and database isolation, prioritizing robust folder structures and a cohesive branding identity from day one.",
      tech: ["Flutter", "Firebase", "State Management"],
      icon: <Database size={20} className="text-norvix-cyan" />
    },
    {
      title: "Intelligent Compliance Vision System",
      category: "Computer Vision & AI",
      description: "Engineered a real-time mask detection pipeline utilizing advanced neural networks. The system processes video feeds to ensure safety compliance with high accuracy and minimal latency.",
      tech: ["Python", "OpenCV", "MobileNetV2"],
      icon: <Scan size={20} className="text-norvix-cyan" />
    }
  ];

  return (
    <section className="w-full py-24 bg-norvix-bg px-6 border-t border-norvix-border/50">
      <div className="max-w-5xl mx-auto">
        <div className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-norvix-text mb-4 tracking-tight">
            System Architecture
          </h2>
          <div className="w-16 h-1 bg-norvix-cyan rounded-full"></div>
        </div>

        <div className="flex flex-col gap-6">
          {projects.map((project, index) => (
            <div 
              key={index} 
              className="group flex flex-col md:flex-row items-start md:items-center justify-between p-8 bg-norvix-surface border border-norvix-border rounded-sm hover:border-norvix-cyan/40 transition-colors duration-300"
            >
              <div className="max-w-2xl">
                <div className="flex items-center gap-3 mb-3">
                  {project.icon}
                  <span className="text-xs font-mono tracking-widest text-norvix-cyan uppercase">{project.category}</span>
                </div>
                <h3 className="text-2xl font-bold text-norvix-text mb-3">{project.title}</h3>
                <p className="text-norvix-muted mb-6 leading-relaxed">{project.description}</p>
                
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, idx) => (
                    <span key={idx} className="text-xs font-medium text-norvix-text bg-norvix-bg border border-norvix-border px-3 py-1 rounded-sm">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              
              <button className="mt-6 md:mt-0 px-6 py-3 border border-norvix-border text-norvix-text rounded-sm hover:bg-norvix-cyan hover:text-norvix-bg hover:border-norvix-cyan transition-all duration-300 whitespace-nowrap">
                View Case Study
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedWork;