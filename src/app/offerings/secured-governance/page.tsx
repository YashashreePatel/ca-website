import React from 'react';
// import FAQ from '@/components/ui/FAQ';
import AboveFooter from '@/components/layout/AboveFooter';
import BackButton from '@/components/ui/BackButton';

import { RevealCard } from '@/types';
import HoverRevealCard from '@/components/ui/HoverRevealCard';

// type FAQItem = {
//   question: string;
//   answer: string;
// };

// const faqs: FAQItem[] = [
//   {
//     question: "",
//     answer: ""
//   }
// ];

export default async function SecuredGovernance() {
  const revealCards: RevealCard[] = [
    {
      id: 1,
      title: 'Define & Align',
      data: [
        'Clarify governance goals—security, ethics, compliance, and innovation.',
        'Map business objectives to standards like NIST CSF, ISO 42001, and the EU AI Act.'
      ]
    },
    {
      id: 2,
      title: 'Build Governance Structure',
      data: [
        'Establish a cross-functional council, define roles and policies, and set accountability mechanisms to ensure governance is embedded across the organization.'
      ]
    },
    {
      id: 3,
      title: 'Assess Risks & Controls',
      data: [
        'Identify risks such as bias, privacy breaches, and cyber threats.',
        'Design risk-based controls using frameworks like the Unified Control Framework (UCF) to avoid duplication.'
      ]
    },
    {
      id: 4,
      title: 'Secure & Comply',
      data: [
        'Implement layered cybersecurity defenses, responsible AI policies, and privacy-by-design principles.',
        'Ensure compliance is woven into systems, not bolted on later.'
      ]
    },
    {
      id: 5,
      title: 'Monitor & Evolve',
      data: [
        'Continuously track model performance, security events, and regulatory changes with automated dashboards, drift detection, and audit-ready reporting.'
      ]
    },
    {
      id: 6,
      title: 'Train & Embed Culture',
      data: [
        'Equip teams with training, simulations, and governance playbooks, ensuring responsible AI and security practices become part of the organizational DNA.'
      ]
    }
  ]

  return (
    <div className={`w-full flex flex-col gap-[80px] px-[24px] pb-[80px] pt-[180px] tablet:px-[60px] desktop:px-[100px] bg-black`}>
      <BackButton />
      <div className='flex flex-col gap-[40px] font-montserrat font-normal text-[16px] text-white'>
        <div className='flex flex-col gap-[24px]'>
          <span>
            Secured Governance is the foundation of trust. Without governance, AI is fragile. Without security, innovation is risky. Cogniify embeds governance at every layer to ensure compliance, accountability, and transparency.
          </span>
          <span>
            This aligns directly with our philosophy of building AI responsibly. We design frameworks that protect data, respect privacy, and meet global standards—while still enabling agility. For clients, this means confidence: knowing that intelligence is both powerful and principled.
          </span>
          <span>
            Secured Governance empowers enterprises to innovate boldly while operating responsibly—because true intelligence must be as trustworthy as it is transformative.
          </span>
        </div>

        <div className='flex flex-col gap-[5px] items-start text-white'>
          <span>Why Choose Secured Governance?</span>
          <span className='pl-[5px]'>- <span className='text-[#AE98FF]'>Data Security & Compliance:</span> Robust frameworks that protect data integrity while meeting industry and global compliance requirements—building trust across stakeholders.</span>
          <span className='pl-[5px]'>- <span className='text-[#AE98FF]'>Responsible & Explainable AI:</span> AI designed to be transparent and fair, ensuring decisions are trusted, understandable, and accountable.</span>
          <span className='pl-[5px]'>- <span className='text-[#AE98FF]'>Data Governance Frameworks:</span> Strong governance practices that ensure data quality, traceability, and accountability—turning risk into resilience.</span>
        </div>
      </div>

      <div className='flex flex-col gap-[40px] items-center'>
        <div className='text-white text-center font-neue-regrade font-semibold text-[48px] leading-none'>
          Our Approach
        </div>

        <div className='grid grid-cols-1 tablet:grid-cols-2 desktop:grid-cols-3 gap-[20px] desktop:gap-[30px] items-stretch'>
          {revealCards.map((card) => (
            <div key={card.id} className='col-span-1 h-auto desktop:h-[300px]'>
              <HoverRevealCard content={card} icon={false} number={true} subtitle={false} data={true} />
            </div>
          ))}
        </div>
      </div>

      <div className='flex flex-col gap-[40px] font-montserrat font-normal text-[16px] text-white'>
        <div className='flex flex-col gap-[5px] items-start text-white'>
          <span>Who It&apos;s For?</span>
          <span className='pl-[5px]'>- <span className='text-[#AE98FF]'>CIOs, CISOs & Risk Leaders</span>  who must safeguard digital transformation initiatives without slowing down innovation.</span>
          <span className='pl-[5px]'>- <span className='text-[#AE98FF]'>Compliance & Legal Teams</span> tasked with navigating evolving regulations like the EU AI Act, ISO 42001, and data privacy laws.</span>
          <span className='pl-[5px]'>- <span className='text-[#AE98FF]'>AI & Product Owners</span> building intelligent systems that must be not only powerful but also ethical, transparent, and secure.</span>
          <span className='pl-[5px]'>- <span className='text-[#AE98FF]'>Enterprises & Scale-ups</span> seeking to win customer trust by embedding governance, cybersecurity, and responsibility into their AI strategy.</span>
        </div>

        <div className='flex flex-col gap-[5px] items-start text-white'>
          <span>The Outcome</span>
          <span>With Secured Governance, organizations build AI systems that are not just advanced—but trustworthy:</span>
          <span className='pl-[5px]'>- <span className='text-[#AE98FF]'>Resilient Security:</span> AI solutions hardened against cyber threats and operational risks.</span>
          <span className='pl-[5px]'>- <span className='text-[#AE98FF]'>Regulatory Confidence:</span> compliance woven in from the start, reducing audit friction and legal exposure.</span>
          <span className='pl-[5px]'>- <span className='text-[#AE98FF]'>Ethical AI by Design:</span> fairness, transparency, and accountability become embedded principles, not afterthoughts.</span>
          <span className='pl-[5px]'>- <span className='text-[#AE98FF]'>Sustained Trust & Growth:</span> customers, partners, and regulators view your AI as reliable, responsible, and future-ready.</span>
        </div>
      </div>

      {/* <div className='flex flex-col gap-[40px] items-center'>
        <div className='text-white text-center font-neue-regrade font-semibold text-[48px] leading-none'>
          Frequently Asked Questions
        </div>

        <FAQ faqs={faqs} />
      </div> */}

      <AboveFooter
        title="Want to build AI that's trusted and future-proof?"
        subtitle='See how Secured Governance embeds security, compliance, and responsibility into every decision.'
        buttonText="Contact Us"
      />
    </div>
  );
};
