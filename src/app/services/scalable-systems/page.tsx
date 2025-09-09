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
            Scalable Systems ensure that intelligence doesn&apos;t just work—it endures. Many AI initiatives fail because they can&apos;t scale. Cogniify&apos;s expertise lies in engineering systems that grow with the business—secure, resilient, and future-ready.
          </span>
          <span>
            Guided by our philosophy of clarity and trust, we design architectures that minimize friction and maximize flexibility. Whether migrating legacy systems to cloud-native platforms or building end-to-end MLOps pipelines, our focus is on sustainable performance.
          </span>
          <span>
            Scalable Systems give clients the confidence that intelligence will not just launch—but thrive under real-world demands.
          </span>
        </div>

        <div className='flex flex-col gap-[5px] items-start text-white'>
          <span>Why Choose Scalable System?</span>
          <span className='pl-[5px]'>- <span className='text-[#AE98FF]'>Cloud-Native Architecture:</span> Cloud solutions that adapt and grow with your business—ensuring scalability without compromising performance or cost efficiency.</span>
          <span className='pl-[5px]'>- <span className='text-[#AE98FF]'>DevOps & Automation:</span> Automated pipelines that reduce errors, accelerate delivery, and give enterprises confidence in scaling AI securely.</span>
          <span className='pl-[5px]'>- <span className='text-[#AE98FF]'>Resilient Engineering & Integration:</span> Enterprise systems designed to last—flexible, integrated, and built to withstand complexity and change.</span>
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
          <span>With Scalable System, your data stops being a pile of numbers and becomes a powerful decision-making asset. You gain sharper foresight, improved performance, and the agility to adapt with certainty.</span>
        </div>
      </div>

      {/* <div className='flex flex-col gap-[40px] items-center'>
        <div className='text-white text-center font-neue-regrade font-semibold text-[48px] leading-none'>
          Frequently Asked Questions
        </div>

        <FAQ faqs={faqs} />
      </div> */}

      <AboveFooter
        title="Want to unlock scalability from your data?"
        subtitle='Explore how Scalable Systems can transform your decision-making.'
        buttonText="Contact Us"
      />
    </div>
  );
};
