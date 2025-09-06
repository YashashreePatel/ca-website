import React from 'react';
import FAQ from '@/components/ui/FAQ';
import AboveFooter from '@/components/layout/AboveFooter';
import BackButton from '@/components/ui/BackButton';


export default async function SmarterAI() {
  return (
    <div className={`w-full flex flex-col gap-[80px] px-[24px] pb-[80px] pt-[180px] tablet:px-[60px] desktop:px-[100px] bg-black`}>
      <BackButton />

      <div className='flex flex-col gap-[24px] font-montserrat text-[16px] font-normal text-white'>
        <span>
          Smarter AI is about intelligence with intent. Too often, AI projects remain proofs of concept. At Cognify, we embed AI into production—designed to adapt, scale, and deliver impact.
        </span>
        <span>
          Staying true to our philosophy, we design AI that serves people, not replaces them. We combine explainability, ethics, and business alignment to ensure that every algorithm is not only accurate but also trusted. Smarter AI helps enterprises predict, automate, and personalize at scale—turning ambition into outcomes.
        </span>
        <span>
          Smarter AI translates complexity into competitive advantage—helping clients innovate faster while remaining human-first.
        </span>
      </div>

      <div className='flex flex-col gap-[10px] items-start font-montserrat font-normal text-[16px]'>
        <span className='text-symbol-purple'>Capabilities & Expertise:</span>
        <span className='pl-[5px] text-white'>- Machine Learning Model Development & Deployment</span>
        <span className='pl-[5px] text-white'>- Agentic AI Systems & Generative AI Solutions</span>
        <span className='pl-[5px] text-white'>- Intelligent Automation & Decision Intelligence</span>
        <span className='pl-[5px] text-white'>- Personalization Engines & Recommendation Systems</span>
        <span className='pl-[5px] text-white'>- Model Monitoring, MLOps & AIOps Frameworks</span>
      </div>

      <AboveFooter
        title="Want to unlock clarity from your data?"
        subtitle='Explore how Smarter AI can transform your decision-making.'
        buttonText="Contact Us"
      />
    </div>
  );
};
