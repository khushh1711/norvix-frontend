import React from 'react';

const Process = () => {
  const steps = [
    { num: '01', title: 'Discovery', desc: 'Deep immersion into your business goals, user needs, and market landscape.' },
    { num: '02', title: 'Strategy', desc: 'Defining the technical roadmap and MVP scope to ensure maximum ROI.' },
    { num: '03', title: 'Design & Engineering', desc: 'Agile cycles where premium aesthetics meet high-performance code.' },
    { num: '04', title: 'Launch & Scale', desc: 'Seamless deployment with continuous monitoring and proactive optimization.' }
  ];

  return (
    <section className="w-full bg-[#09101A] px-6 py-32 flex justify-center overflow-hidden" id="process">
      <div className="max-w-275 w-full">
        
        <div className="text-center mb-28">
          <p className="text-[#4880FF] text-[11px] font-bold tracking-[0.15em] uppercase mb-4">Our Methodology</p>
          <h2 className="text-4xl md:text-[44px] font-semibold text-white tracking-tight">The Path to Innovation</h2>
        </div>

        <div className="relative w-full max-w-215 mx-auto">
          <div className="absolute left-7 md:left-1/2 top-0 bottom-0 w-px bg-[#1E293B] -translate-x-1/2"></div>

          <div className="flex flex-col gap-16 md:gap-24">
            {steps.map((step, index) => {
              const isEven = index % 2 === 1;
              return (
                <div key={index} className="relative flex flex-col md:flex-row w-full items-start md:items-center">
                  
                  <div className="absolute left-7 md:left-1/2 -translate-x-1/2 flex items-center justify-center w-11.5 h-9.5 rounded-lg border border-[#B4D0FF]/40 bg-[#09101A] text-white text-[13px] font-bold z-10 shadow-[0_0_15px_rgba(72,128,255,0.05)]">
                    {step.num}
                  </div>

                  <div className={`w-full md:w-1/2 pl-20 md:pl-0 md:pr-16 flex flex-col justify-center md:text-right md:items-end ${isEven ? 'md:opacity-0 md:pointer-events-none' : 'block'}`}>
                    <h3 className="text-[26px] md:text-[28px] font-bold text-white mb-3">{step.title}</h3>
                    <p className="text-[#8B95A5] text-[15px] leading-relaxed font-medium max-w-85 md:ml-auto">{step.desc}</p>
                  </div>

                  <div className={`hidden md:flex w-1/2 pl-16 flex-col items-start text-left ${isEven ? 'opacity-100' : 'md:opacity-0 md:pointer-events-none'}`}>
                    {isEven && (
                      <>
                        <h3 className="text-[26px] md:text-[28px] font-bold text-white mb-3">{step.title}</h3>
                        <p className="text-[#8B95A5] text-[15px] leading-relaxed font-medium max-w-85">{step.desc}</p>
                      </>
                    )}
                  </div>

                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
};

export default Process;