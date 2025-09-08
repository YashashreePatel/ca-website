import React, { useState } from 'react';
import { RevealCard } from '@/types';
import HoverRevealCard from '../HoverRevealCard';

const Values: React.FC = () => {
  const revealCards: RevealCard[] = [
    {
      id: 1,
      title: 'Clarity in Complexity',
      subtitle: 'Simplifying data. Amplifying decisions.',
      description: 'We turn noise into focus. By simplifying data and AI into clear, actionable intelligence, we help clients make faster, smarter decisions. This value keeps us aligned with our philosophy of clarity and ensures that every solution empowers clients to see direction, not distraction.'
    },
    {
      id: 2,
      title: 'Purpose-Driven Innovation',
      subtitle: 'Innovation with intent, not hype.',
      description: 'We build with intent, not hype. Every solution is anchored to meaningful business outcomes. This value reminds us that innovation must always serve client goals—transforming challenges into opportunities and ensuring that AI becomes a trusted enabler of growth, not just a technical experiment.'
    },
    {
      id: 3,
      title: 'Trust by Design',
      subtitle: '“Built on trust. Designed for confidence.',
      description: "Trust is not added later; it's embedded from the start. Through governance, security, and ethical AI, we create solutions clients can depend on. This value serves as our foundation, ensuring confidence, compliance, and long-term adoption of intelligence systems that are transparent and responsible."
    },
    {
      id: 4,
      title: 'Impact over Activity',
      subtitle: 'Outcomes that move the needle.',
      description: 'We measure success by outcomes, not outputs. For clients, this means solutions that deliver measurable ROI—reduced costs, improved agility, new opportunities unlocked. This value drives us to focus relentlessly on results, ensuring every engagement moves the needle for the businesses we serve.'
    }
  ]

  return (
    <div className='w-full flex flex-col gap-[80px] justify-center'>
      <div className='text-white text-center font-neue-regrade font-semibold text-[48px] leading-none'>
        Our Values
      </div>
      <div className='grid grid-cols-1 tablet:grid-cols-2 gap-[20px] desktop:gap-[30px] items-stretch'>
        {revealCards.map((card) => (
          <div key={card.id} className='col-span-1 h-auto tablet:h-[300px]'>
            <HoverRevealCard content={card} number={false} subtitle={true} data={false} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Values;
