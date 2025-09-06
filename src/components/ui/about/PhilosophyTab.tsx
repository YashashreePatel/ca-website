import React, { useState } from 'react';

const PhilosophyTab: React.FC = () => {
  return (

    <div className='w-full flex flex-col gap-[80px] justify-center'>
      <div className='text-white text-center font-neue-regrade font-semibold text-[48px] leading-none'>
        Philosophy
      </div>
      <div className='font-montserrat text-[16px] font-semibold text-white'>
        At Cogniify, philosophy is not a statement on the wall—it&apos;s a discipline that shapes every solution we design, every partnership we build, and every outcome we deliver.
      </div>
      <div className='grid grid-cols-1 tablet:grid-cols-2 desktop:grid-cols-3 gap-[20px] desktop:gap-[30px] items-stretch'>
        <div className='col-span-1 flex flex-col items-center justify-start gap-[8px] bg-card-bg px-[34px] py-[24px] rounded-[16px] hover:bg-card-bg/30 transition-all duration-300'>
          <div className='text-white font-neue-regrade font-semibold text-[20px] leading-none'>
            Clarity
          </div>
          <div className='text-body-grey-2 text-center font-montserrat font-normal text-[16px]'>
            We believe technology should not complicate—it should clarify. Artificial Intelligence is not an accessory to business, it is its nervous system. But AI without intent is noise, and data without meaning is distraction. Our philosophy begins with a commitment to clarity: clarity in vision, clarity in execution, and clarity in value. Because when clarity exists, decisions accelerate, adoption strengthens, and transformation becomes real.
          </div>
        </div>
        <div className='col-span-1 flex flex-col items-center justify-start gap-[8px] bg-card-bg px-[34px] py-[24px] rounded-[16px] hover:bg-card-bg/30 transition-all duration-300'>
          <div className='text-white font-neue-regrade font-semibold text-[20px] leading-none'>
            Simplicity
          </div>
          <div className='text-body-grey-2 text-center font-montserrat font-normal text-[16px]'>
            We believe in simplicity over complexity. The world of AI is filled with jargon, hype, and experimentation. We cut through the noise and design systems that are intuitive, human-first, and seamlessly scalable. For our clients, this means faster time to value, reduced risk, and solutions that stick—not because they are the most complex, but because they are the most usable.
          </div>
        </div>
        <div className='col-span-1 flex flex-col items-center justify-start gap-[8px] bg-card-bg px-[34px] py-[24px] rounded-[16px] hover:bg-card-bg/30 transition-all duration-300'>
          <div className='text-white font-neue-regrade font-semibold text-[20px] leading-none'>
            Trust
          </div>
          <div className='text-body-grey-2 text-center font-montserrat font-normal text-[16px]'>
            We believe in trust as the foundation of intelligence. Every algorithm we deploy, every model we scale, is grounded in transparency, governance, and accountability. Trust transforms skepticism into adoption and hesitation into confidence. Our clients know that when they partner with us, they are not just getting AI—they are getting AI they can rely on.
          </div>
        </div>
        <div className='col-span-1 flex flex-col items-center justify-start gap-[8px] bg-card-bg px-[34px] py-[24px] rounded-[16px] hover:bg-card-bg/30 transition-all duration-300'>
          <div className='text-white font-neue-regrade font-semibold text-[20px] leading-none'>
            Outcomes
          </div>
          <div className='text-body-grey-2 text-center font-montserrat font-normal text-[16px]'>
            We believe in outcomes, not activity. Too many firms measure success in models delivered or dashboards created. We measure success in costs reduced, hours saved, risks mitigated, and opportunities unlocked. That focus ensures that every engagement, no matter its size, moves the needle for our clients&apos; business.
          </div>
        </div>
        <div className='col-span-1 flex flex-col items-center justify-start gap-[8px] bg-card-bg px-[34px] py-[24px] rounded-[16px] hover:bg-card-bg/30 transition-all duration-300'>
          <div className='text-white font-neue-regrade font-semibold text-[20px] leading-none'>
            Collaboration
          </div>
          <div className='text-body-grey-2 text-center font-montserrat font-normal text-[16px]'>
            This philosophy is more than words—it is our operating system. It&apos;s how we elevate AI from hype to impact, from experimentation to execution. It&apos;s why enterprises across industries trust us to not just consult, but to co-create.
          </div>
        </div>
        <div className='col-span-1 flex flex-col items-center justify-start gap-[8px] bg-card-bg px-[34px] py-[24px] rounded-[16px] hover:bg-card-bg/30 transition-all duration-300'>
          <div className='text-white font-neue-regrade font-semibold text-[20px] leading-none'>
            Value
          </div>
          <div className='text-body-grey-2 text-center font-montserrat font-normal text-[16px]'>
            This philosophy is more than words—it is our operating system. It&apos;s how we elevate AI from hype to impact, from experimentation to execution. It&apos;s why enterprises across industries trust us to not just consult, but to co-create.
          </div>
        </div>
      </div>
      <div className='font-montserrat text-[16px] font-semibold text-white'>
        At Cogniify, our philosophy ensures one thing above all: that every piece of intelligence we deliver becomes an engine of clarity, trust, and measurable business value.
      </div>
    </div>
  );
};

export default PhilosophyTab;
