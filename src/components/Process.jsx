import React from 'react';

const Process = () => {
  const steps = [
    {
      num: '01',
      title: 'Discovery',
      desc: 'Deep immersion into your business goals, user needs, and market landscape.',
      align: 'left'
    },
    {
      num: '02',
      title: 'Strategy',
      desc: 'Defining the technical roadmap and MVP scope to ensure maximum ROI.',
      align: 'right'
    },
    {
      num: '03',
      title: 'Design & Engineering',
      desc: 'Agile cycles where premium aesthetics meet high-performance code.',
      align: 'left'
    },
    {
      num: '04',
      title: 'Launch & Scale',
      desc: 'Seamless deployment with continuous monitoring and proactive optimization.',
      align: 'right'
    }
  ];

  return (
    <section className="w-full bg-[#09101A] px-6 py-32 flex justify-center overflow-hidden">
      <div className="max-w-275 w-full">
        
        {/* Section Header */}
        <div className="text-center mb-28">
          <p className="text-[#4880FF] text-[11px] font-bold tracking-[0.15em] uppercase mb-4">
            Our Methodology
          </p>
          <h2 className="text-4xl md:text-[44px] font-semibold text-white tracking-tight">
            The Path to Innovation
          </h2>
        </div>

        {/* Timeline Container */}
        <div className="relative w-full max-w-215 mx-auto">
          
          {/* Center Vertical Line (Desktop) / Left Vertical Line (Mobile) */}
          <div className="absolute left-7 md:left-1/2 top-0 bottom-0 w-px bg-[#1E293B] -translate-x-1/2"></div>

          {/* Steps */}
          {steps.map((step, index) => {
            const isLeft = step.align === 'left';
            
            return (
              <div key={index} className="relative flex flex-col md:flex-row w-full mb-16 md:mb-28 last:mb-0">
                
                {/* Center Node */}
                <div className="absolute left-7 md:left-1/2 top-0 md:top-1/2 -translate-x-1/2 md:-translate-y-1/2 flex items-center justify-center w-11.5 h-9.5 rounded-lg border border-[#B4D0FF]/40 bg-[#09101A] text-white text-[13px] font-bold z-10 shadow-[0_0_15px_rgba(72,128,255,0.05)]">
                  {step.num}
                </div>

                {/* Left Content Area (Desktop) & Mobile Content */}
                <div className={`w-full md:w-1/2 pl-20 md:pl-0 md:pr-16 flex flex-col justify-center md:text-right md:items-end ${isLeft ? 'block' : 'hidden md:flex md:opacity-0'}`}>
                  {/* We only render the text here on desktop if it belongs on the left, OR we render it on mobile always */}
                  <div className={`${isLeft ? 'block' : 'md:hidden'}`}>
                    <h3 className="text-[26px] md:text-[28px] font-bold text-white mb-3">
                      {step.title}
                    </h3>
                    <p className="text-[#8B95A5] text-[15px] leading-relaxed font-medium max-w-85 md:ml-auto">
                      {step.desc}
                    </p>
                  </div>
                </div>

                {/* Right Content Area (Desktop Only) */}
                <div className={`hidden md:flex w-1/2 pl-16 flex-col justify-center text-left items-start ${!isLeft ? 'opacity-100' : 'opacity-0'}`}>
                  {!isLeft && (
                    <>
                      <h3 className="text-[26px] md:text-[28px] font-bold text-white mb-3">
                        {step.title}
                      </h3>
                      <p className="text-[#8B95A5] text-[15px] leading-relaxed font-medium max-w-85">
                        {step.desc}
                      </p>
                    </>
                  )}
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default Process;