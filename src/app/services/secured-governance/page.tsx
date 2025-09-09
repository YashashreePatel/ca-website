import React from 'react';
import FAQ from '@/components/ui/FAQ';
import AboveFooter from '@/components/layout/AboveFooter';
import BackButton from '@/components/ui/BackButton';

import { RevealCard } from '@/types';
import HoverRevealCard from '@/components/ui/HoverRevealCard';

type FAQItem = {
  question: string;
  answer: string;
};

const faqs: FAQItem[] = [
  {
    question: "",
    answer: ""
  }
];

export default async function SecuredGovernance() {
  const revealCards: RevealCard[] = [
    {
      id: 1,
      title: 'Define Requirements',
      data: [
        'Clarify business and technical specs',
        'Outline scalability, availability, security, and compliance limits',
        'Select IaaS, PaaS, SaaS, or a hybrid model'
      ]
    },
    {
      id: 2,
      title: 'Architecture Design',
      data: [
        'Architect compute, storage, and networking services',
        'Pick the right provider (AWS, Azure, GCP)',
        'Plan for high availability, disaster recovery, and cost efficiency'
      ]
    },
    {
      id: 3,
      title: 'Resource Provisioning',
      data: [
        'Implement IaC using Terraform, CloudFormation, etc.',
        'Automate provisioning for dev, test, and prod environments',
        'Enforce security via IAM, VPCs, and firewalls'
      ]
    },
    {
      id: 4,
      title: 'Application Deployment',
      data: [
        'Containerize applications (Docker, Kubernetes, ECS/EKS/GKE/AKS)',
        'Implement CI/CD pipelines for consistent, automated deployments',
        'Configure services ex.load balancers, DNS routing, and API gateways'
      ]
    },
    {
      id: 5,
      title: 'Monitoring & Optimization',
      data: [
        'Integrate observability tools (CloudWatch, Prometheus, Grafana)',
        'Monitor performance, availability, and security metrics',
        'Set up alerts and autoscaling policies for dynamic resource management'
      ]
    },
    {
      id: 6,
      title: 'Automation & Governance',
      data: [
        'Automate workflows with AWS Lambda, Azure Logic Apps, or Step Functions',
        'Implement tagging, cost tracking, and budgeting controls',
        'Maintain security policy compliance and audit readiness'
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
            <div key={card.id} className='col-span-1 h-auto tablet:h-[300px]'>
              <HoverRevealCard content={card} number={true} subtitle={false} data={true} />
            </div>
          ))}
        </div>
      </div>

      <div className='flex flex-col gap-[40px] font-montserrat font-normal text-[16px] text-white'>
        <div className='flex flex-col gap-[5px] items-start text-white'>
          <span>Who It&apos;s For?</span>
          <span className='pl-[5px]'>- Business leaders seeking confidence in decision-making.</span>
          <span className='pl-[5px]'>- Strategy and operations teams needing data-driven clarity.</span>
          <span className='pl-[5px]'>- Organizations ready to move from reactive to proactive growth.</span>
        </div>

        <div className='flex flex-col gap-[5px] items-start text-white'>
          <span>The Outcome</span>
          <span>With Secured Governance, your data stops being a pile of numbers and becomes a powerful decision-making asset. You gain sharper foresight, improved performance, and the agility to adapt with certainty.</span>
        </div>
      </div>

      {/* <div className='flex flex-col gap-[40px] items-center'>
        <div className='text-white text-center font-neue-regrade font-semibold text-[48px] leading-none'>
          Frequently Asked Questions
        </div>

        <FAQ faqs={faqs} />
      </div> */}

      <AboveFooter
        title="Want to unlock security from your data?"
        subtitle='Explore how Secured Governance can transform your decision-making.'
        buttonText="Contact Us"
      />
    </div>
  );
};
