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
        'Architect compute, storage, and networking offerings',
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
        'Configure offerings ex.load balancers, DNS routing, and API gateways'
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
            <div key={card.id} className='col-span-1 h-auto desktop:h-[300px]'>
              <HoverRevealCard content={card} icon={false} number={true} subtitle={false} data={true} />
            </div>
          ))}
        </div>
      </div>

      <div className='flex flex-col gap-[40px] font-montserrat font-normal text-[16px] text-white'>
        <div className='flex flex-col gap-[5px] items-start text-white'>
          <span>Who It&apos;s For?</span>
          <span className='pl-[5px]'>- <span className='text-[#AE98FF]'>Technology & Engineering Leaders</span>, like CTOs and VP Engineering, who want confidence in deploying AI solutions that perform under growing demand.</span>
          <span className='pl-[5px]'>- <span className='text-[#AE98FF]'>Data Platform & DevOps Teams</span> tasked with building resilient, efficient infrastructure that supports evolving workflows and complex integrations.</span>
          <span className='pl-[5px]'>- <span className='text-[#AE98FF]'>Business Executives & Strategy Teams</span> needing assurance that intelligence-driven initiatives remain reliable, cost-effective, and aligned with business growth.</span>
          <span className='pl-[5px]'>- <span className='text-[#AE98FF]'>Enterprises Modernizing Legacy Tech</span>, aiming to migrate fragile systems into agile, cloud-native architectures without sacrificing performance or security.</span>
        </div>

        <div className='flex flex-col gap-[5px] items-start text-white'>
          <span>The Outcome</span>
          <span></span>
          <span className='pl-[5px]'>- <span className='text-[#AE98FF]'>Boundless Scalability:</span> your systems expand effortlessly with demand, ensuring uptime and performance at scale.</span>
          <span className='pl-[5px]'>- <span className='text-[#AE98FF]'>Operational Agility:</span> streamlined CI/CD and infrastructure automation empower rapid, safe iterations and deployments.</span>
          <span className='pl-[5px]'>- <span className='text-[#AE98FF]'>Rock-Solid Resilience:</span> resilient cloud-native architectures with built-in high availability, monitoring, and disaster recovery.</span>
          <span className='pl-[5px]'>- <span className='text-[#AE98FF]'>Data-Driven Confidence:</span> real-time observability, autoscaling, and cost controls provide clarity and control over performance and spend.</span>
        </div>
      </div>

      {/* <div className='flex flex-col gap-[40px] items-center'>
        <div className='text-white text-center font-neue-regrade font-semibold text-[48px] leading-none'>
          Frequently Asked Questions
        </div>

        <FAQ faqs={faqs} />
      </div> */}

      <AboveFooter
        title="Want your systems to grow as fast as your vision?"
        subtitle='Discover how Scalable Systems can deliver resilience, agility, and performance at any scale.'
        buttonText="Contact Us"
      />
    </div>
  );
};
