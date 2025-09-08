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
    question: "What is Sharper Analytics?",
    answer: "Sharper Analytics is our service that transforms raw, unstructured data into clear, actionable insights through advanced analytics, dashboards, and predictive modeling—helping businesses make smarter, data-driven decisions."
  },
  {
    question: "How is Sharper Analytics different from regular reporting tools?",
    answer: ""
  },
  {
    question: "Do I need a dedicated data science team to use Sharper Analytics?",
    answer: ""
  },
  {
    question: "How long does it take to implement Sharper Analytics?",
    answer: ""
  },
  {
    question: "Is my data secure with Sharper Analytics?",
    answer: ""
  }
];

export default async function SharperAnalytics() {
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
            Sharper Analytics is where clarity begins. In a world flooded with data, businesses often struggle to separate signals from noise. At Cognify, we help leaders unlock insights that matter—insights that fuel confident decisions and measurable outcomes.
          </span>
          <span>
            Our philosophy of simplicity and outcomes comes alive here. We don&apos;t overwhelm with endless dashboards. We build analytics ecosystems that deliver precision, speed, and relevance. Every metric, KPI, and visualization is designed to align with business priorities, ensuring leaders see what truly drives value.
          </span>
          <span>
            Sharper Analytics helps clients move from hindsight to foresight—enabling strategy powered by evidence, not guesswork.
          </span>
        </div>

        <div className='flex flex-col gap-[5px] items-start text-white'>
          <span>Why Choose Sharper Analytics?</span>
          <span className='pl-[5px]'>- <span className='text-[#AE98FF]'>Data Engineering & Pipelines:</span> Reliable pipelines ensure data flows seamlessly, enabling enterprises to trust their information and unlock insights that fuel better business performance.</span>
          <span className='pl-[5px]'>- <span className='text-[#AE98FF]'>Business Intelligence & Dashboards:</span> Well-designed dashboards give leaders the clarity they need—turning complexity into simple, actionable stories that drive growth and alignment.</span>
          <span className='pl-[5px]'>- <span className='text-[#AE98FF]'>Predictive & Prescriptive Analytics:</span> Analytics that not only explain the past but anticipate what&apos;s next—helping organizations act with foresight, agility, and confidence.</span>
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
          <span>With Sharper Analytics, your data stops being a pile of numbers and becomes a powerful decision-making asset. You gain sharper foresight, improved performance, and the agility to adapt with certainty.</span>
        </div>
      </div>

      <div className='flex flex-col gap-[40px] items-center'>
        <div className='text-white text-center font-neue-regrade font-semibold text-[48px] leading-none'>
          Frequently Asked Questions
        </div>

        <FAQ faqs={faqs} />
      </div>

      <AboveFooter
        title="Want to unlock clarity from your data?"
        subtitle='Explore how Sharper Analytics can transform your decision-making.'
        buttonText="Contact Us"
      />
    </div>
  );
};
