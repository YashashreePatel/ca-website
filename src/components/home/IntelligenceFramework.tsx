import React from 'react';
import IntelligenceCard from '@/components/ui/home/FrameworkCard';
import { FrameworkCard } from '@/types';

const IntelligenceFramework: React.FC = () => {
  // Mock data - ready for admin panel
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
    <div className={`w-full flex justify-center items-center px-[24px] py-[50px] tablet:px-[60px] desktop:px-[100px] desktop:py-[80px] bg-black`}>
      <div className='w-full flex flex-col gap-[80px] items-center justify-center'>
        <div className='w-full desktop:w-[830px] flex flex-col gap-[16px] justify-center items-center'>
          <div className='text-white text-center font-neue-regrade font-medium tablet:font-semibold text-[28px] tablet:text-[48px] leading-none'>
            The 4S Intelligence Framework
          </div>
          <div className='text-white text-center font-montserrat font-semibold text-[12px] tablet:text-[16px]'>
            Sharper insights, smarter AI, scalable systems, secured trust—your intelligence, redefined.
          </div>
          <div className='text-body-grey-2 text-center font-montserrat font-normal text-[12px] tablet:text-[16px]'>
            The 4S Intelligence Framework is designed to help your business unlock clarity, accelerate innovation, and achieve your true potential with confidence and precision.
          </div>
        </div>
        <div className='flex flex-col desktop:flex-row gap-[40px] justify-between items-stretch'>
          {frameworkCards.map((card) => (
            <IntelligenceCard key={card.id} card={card} />
          ))}
        </div> 
      </div>
    </div>
  );
};

export default IntelligenceFramework;
