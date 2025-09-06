import React from 'react';
import FAQ from '@/components/ui/FAQ';
import AboveFooter from '@/components/layout/AboveFooter';
import BackButton from '@/components/ui/BackButton';


export default async function SecuredGovernance() {
  return (
    <div className={`w-full flex flex-col gap-[80px] px-[24px] pb-[80px] pt-[180px] tablet:px-[60px] desktop:px-[100px] bg-black`}>
      <BackButton />

      <div className='flex flex-col gap-[24px] font-montserrat text-[16px] font-normal text-white'>
        <span>
          Secured Governance is the foundation of trust. Without governance, AI is fragile. Without security, innovation is risky. Cognify embeds governance at every layer to ensure compliance, accountability, and transparency
        </span>
        <span>
          This aligns directly with our philosophy of building AI responsibly. We design frameworks that protect data, respect privacy, and meet global standards—while still enabling agility. For clients, this means confidence: knowing that intelligence is both powerful and principled.
        </span>
        <span>
          Secured Governance empowers enterprises to innovate boldly while operating responsibly—because true intelligence must be as trustworthy as it is transformative.
        </span>
      </div>

      <div className='flex flex-col gap-[10px] items-start font-montserrat font-normal text-[16px]'>
        <span className='text-symbol-purple'>Capabilities & Expertise:</span>
        <span className='pl-[5px] text-white'>- Data Governance & Regulatory Compliance (GDPR, HIPAA, SOC, ISO)</span>
        <span className='pl-[5px] text-white'>- Responsible AI & Ethical AI Frameworks</span>
        <span className='pl-[5px] text-white'>- Security Engineering & Threat Monitoring</span>
        <span className='pl-[5px] text-white'>- Identity & Access Management (IAM)</span>
        <span className='pl-[5px] text-white'>- Risk Mitigation & Compliance Automation</span>
      </div>

      <AboveFooter
        title="Want to unlock security from your data?"
        subtitle='Explore how Secured Governance can transform your decision-making.'
        buttonText="Contact Us"
      />
    </div>
  );
};
