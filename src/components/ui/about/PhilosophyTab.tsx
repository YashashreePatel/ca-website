import React from 'react';
import { RevealCard } from '@/types';
import HoverRevealCard from '../HoverRevealCard';

const PhilosophyTab: React.FC = () => {
  const revealCards: RevealCard[] = [
    {
      order: 1,
      title: 'Clarity',
      icon: 'diamond_shine',
      description: 'We believe technology should not complicate—it should clarify. Artificial Intelligence is not an accessory to business, it is its nervous system. But AI without intent is noise, and data without meaning is distraction. Our philosophy begins with a commitment to clarity: clarity in vision, clarity in execution, and clarity in value. Because when clarity exists, decisions accelerate, adoption strengthens, and transformation becomes real.'
    },
    {
      order: 2,
      title: 'Simplicity',
      icon: 'check_circle',
      description: 'We believe in simplicity over complexity. The world of AI is filled with jargon, hype, and experimentation. We cut through the noise and design systems that are intuitive, human-first, and seamlessly scalable. For our clients, this means faster time to value, reduced risk, and solutions that stick—not because they are the most complex, but because they are the most usable.'
    },
    {
      order: 3,
      title: 'Trust',
      icon: 'verified',
      description: 'We believe in trust as the foundation of intelligence. Every algorithm we deploy, every model we scale, is grounded in transparency, governance, and accountability. Trust transforms skepticism into adoption and hesitation into confidence. Our clients know that when they partner with us, they are not just getting AI—they are getting AI they can rely on.'
    },
    {
      order: 4,
      title: 'Outcomes',
      icon: 'leaderboard',
      description: 'We believe in outcomes, not activity. Too many firms measure success in models delivered or dashboards created. We measure success in costs reduced, hours saved, risks mitigated, and opportunities unlocked. That focus ensures that every engagement, no matter its size, moves the needle for our clients business.'
    },
    {
      order: 5,
      title: 'Collaboration',
      icon: 'handshake',
      description: 'This philosophy is more than words—it is our operating system. Its how we elevate AI from hype to impact, from experimentation to execution. Its why enterprises across industries trust us to not just consult, but to co-create.'
    },
    {
      order: 6,
      title: 'Value',
      icon: 'workspace_premium',
      description: 'This philosophy is more than words—it is our operating system. Its how we elevate AI from hype to impact, from experimentation to execution. Its why enterprises across industries trust us to not just consult, but to co-create.'
    },
  ]
  return (
    <div className='w-full flex flex-col gap-[80px] justify-center'>
      <div className='text-white text-center font-neue-regrade font-semibold text-[48px] leading-none'>
        Philosophy
      </div>
      <div className='font-montserrat text-[16px] font-normal text-white'>
        At Cogniify, philosophy is not a statement on the wall—it&apos;s a discipline that shapes every solution we design, every partnership we build, and every outcome we deliver.
      </div>
      <div className='grid grid-cols-1 tablet:grid-cols-2 desktop:grid-cols-3 gap-[20px] desktop:gap-[30px] items-stretch'>
        {revealCards.map((card, index) => (
          <div key={index} className='h-auto desktop:h-[300px] col-span-1'>
            <HoverRevealCard data={card} icon={true} number={false} subtitle={false} content={false} />
          </div>
        ))}
      </div>
      <div className='font-montserrat text-[16px] font-normal text-white'>
        At Cogniify, our philosophy ensures one thing above all: that every piece of intelligence we deliver becomes an engine of clarity, trust, and measurable business value.
      </div>
    </div>
  );
};

export default PhilosophyTab;
