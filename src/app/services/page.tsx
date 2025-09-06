import React from 'react';
import IntelligenceCard from '@/components/ui/home/FrameworkCard';
import { FrameworkCard } from '@/types';

export default async function Services() {
  const frameworkCards: FrameworkCard[] = [
    {
      id: 1,
      title: 'Sharper Analytics',
      description: 'Turn raw data into clarity, enabling business leaders to act with confidence, and take data-driven smarter decisions',
      image: '/images/home/intelligence/analytics.png',
      link: '/services/sharper-analytics'
    },
    {
      id: 2,
      title: 'Smarter AI',
      description: 'Deploy enterprise-grade AI that adapts, scales, and drives measurable business outcomes.',
      image: '/images/home/intelligence/ai.png',
      link: '/services/smarter-ai'
    },
    {
      id: 3,
      title: 'Scalable Systems',
      description: 'Building resilient, cloud-native systems that scale AI securely across enterprises.',
      image: '/images/home/intelligence/systems.png',
      link: '/services/scalable-systems'
    },
    {
      id: 4,
      title: 'Secured Governance',
      description: 'Ensuring trust, compliance, and transparency while empowering smarter, safer decisions.',
      image: '/images/home/intelligence/governance.png',
      link: '/services/secured-governance'
    }
  ];

  return (
    <div className={`w-full flex flex-col gap-[80px] items-center justify-center px-[24px] pb-[80px] pt-[180px] tablet:px-[60px] desktop:px-[100px] bg-black`}>
      <div className='text-white text-center font-neue-regrade font-semibold text-[48px] leading-none'>
        Our Services - Solutions Built for Scale
      </div>
      <div className='flex flex-col gap-[24px] font-montserrat text-[16px]'>
        <div className='font-semibold text-[#AE98FF]'>
          At Cognify, our services are anchored in the 4S Intelligence Framework—Sharper Analytics, Smarter AI, Scalable Systems, and Secured Governance. Together, they form a holistic approach that transforms data into clarity, intelligence into impact, and vision into measurable results.
        </div>
        <div className='font-normal text-white'>
          Unlike traditional consultancies, we don&apos;t deliver siloed projects. We build end-to-end ecosystems that stay true to our philosophy of clarity, trust, and outcomes. Each “S” represents more than a service—it represents a principle of transformation. Sharper Analytics ensures leaders see the right signals. Smarter AI transforms potential into performance. Scalable Systems embed resilience and agility into enterprises. Secured Governance safeguards innovation with trust and accountability.
        </div>
        <div className='font-normal text-white'>
          With Cognify, you don&apos;t just get capabilities—you get a partner who designs intelligence that grows, adapts, and delivers sustained business value.
        </div>
      </div>
      <div className='flex flex-col desktop:flex-row gap-[40px] justify-between items-stretch'>
        {frameworkCards.map((card) => (
          <IntelligenceCard key={card.id} card={card} />
        ))}
      </div>
    </div>
  );
};
