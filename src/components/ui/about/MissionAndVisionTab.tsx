import React, { useState } from 'react';

const MissionAndVisionTab: React.FC = () => {
  return (
    <div className='w-full flex flex-col gap-[80px] justify-center'>
      <div className='w-full flex flex-col gap-[80px] justify-center'>
        <div className='text-white text-center font-neue-regrade font-semibold text-[48px] leading-none'>
          Our Mission
        </div>
        <div className='flex flex-col gap-[24px] font-montserrat text-[16px] font-normal text-white'>
          <span>
            At Cogniify, our mission is clear: to deliver scalable, secure, and ROI-focused AI and analytics solutions that turn intelligence into measurable impact. We don&apos;t just build systems—we build outcomes.
          </span>
          <span>
            Our mission is grounded in our philosophy of clarity, simplicity, trust, and outcomes. By embedding these principles into every engagement, we ensure that our work does more than meet technical requirements—it transforms businesses.
          </span>
          <span>
            We stay true to our mission by focusing on solutions that are relevant, usable, and future-ready. This means aligning every model, data pipeline, and system design to real business objectives: reducing costs, increasing agility, and unlocking new opportunities.
          </span>
          <span>
            For our clients, our mission translates into clarity in complexity, resilience in change, and confidence in decision-making.
          </span>
        </div>

        <div className='flex flex-col gap-[10px] items-start font-montserrat font-normal text-[16px]'>
          <span className='text-symbol-purple'>Mission at a Glance:</span>
          <span className='pl-[5px] text-white'>- Build scalable AI systems that grow with the business.</span>
          <span className='pl-[5px] text-white'>- Ensure security and governance for long-term trust.</span>
          <span className='pl-[5px] text-white'>- Deliver ROI-driven outcomes, not just activity.</span>
          <span className='pl-[5px] text-white'>- Embed clarity and usability into every solution.</span>
          <span className='pl-[5px] text-white'>- Elevate businesses by aligning technology with strategy.</span>
        </div>
      </div>

      <div className='w-full flex flex-col gap-[80px] justify-center'>
        <div className='text-white text-center font-neue-regrade font-semibold text-[48px] leading-none'>
          Our Vision
        </div>
        <div className='flex flex-col gap-[24px] font-montserrat text-[16px] font-normal text-white'>
          <span>
            Our vision is to create a future where AI doesn&apos;t replace people—it elevates them. A future where intelligence is seamlessly embedded into the DNA of every enterprise, guiding decisions, driving growth, and enabling sustainable impact.
          </span>
          <span>
            Cogniify&apos;s vision stays true to our philosophy by ensuring that AI is not just about automation or hype, but about human-centered, purposeful transformation. We believe the future belongs to organizations that harness data with clarity, deploy AI responsibly, and scale systems with trust.
          </span>
          <span>
            This vision helps our clients step beyond short-term solutions and embrace intelligence as a long-term capability—future-proofing their business against disruption, while opening doors to innovation and growth.
          </span>
          <span>
            Together, our mission delivers impact today, while our vision ensures that impact lasts tomorrow.
          </span>
        </div>

        <div className='flex flex-col gap-[10px] items-start font-montserrat font-normal text-[16px]'>
          <span className='text-symbol-purple'>Vision at a Glance:</span>
          <span className='pl-[5px] text-white'>- Build solutions with precision and purpose.</span>
          <span className='pl-[5px] text-white'>- Align intelligence with business outcomes that matter.</span>
          <span className='pl-[5px] text-white'>- Create AI that amplifies human potential.</span>
          <span className='pl-[5px] text-white'>- Make data a strategic capability, not just a resource.</span>
          <span className='pl-[5px] text-white'>- Drive sustainable transformation across industries.</span>
        </div>
      </div>
    </div>
  );
};

export default MissionAndVisionTab;
