'use client';

import React, { useState } from 'react';
import Image from 'next/image';

import styles from '../style.module.css';
import { CompanyValue } from '@/types';

const WhyUs: React.FC = () => {
  const [activeItem, setActiveItem] = useState<number | null>(null);

  const orbitalItems: CompanyValue[] = [
    {
      id: 1,
      title: "Lead with purpose, not platforms",
      description: "Every engagement begins with a single focus: what will truly move the needle for your business—not trends, but what matters most.",
      position: { x: 5, y: 70 },
      textPosition: 'left'
    },
    {
      id: 2,
      title: "Lead boldly, with empathy",
      description: "We prioritize depth with scale and outcomes over outputs—because real transformation is built through partnership, not mass production.",
      position: { x: 5, y: 30 },
      textPosition: 'left'
    },
    {
      id: 3,
      title: "Design for impact, not complexity",
      description: "While others highlight technical depth, we focus on business clarity—turning insights into action, systems into enablers, and outcomes into results.",
      position: { x: 50, y: 0 },
      textPosition: 'top'
    },
    {
      id: 4,
      title: "Not your typical AI firm",
      description: "We're a new kind of partner, focused on turning AI's potential into real, measurable business impact.",
      position: { x: 95, y: 30 },
      textPosition: 'right'
    },
    {
      id: 5,
      title: "Co-create, not just deliver",
      description: "Working shoulder-to-shoulder with your teams, we align strategy and technology with your people, culture, and purpose.",
      position: { x: 95, y: 70 },
      textPosition: 'right'
    }
  ];

  const getTextPositionStyles = (textPosition: string, isActive: boolean) => {
    const baseStyles = `absolute transition-all duration-300 ${isActive ? 'opacity-100 scale-100' : 'opacity-70 scale-95'
      }`;

    switch (textPosition) {
      case 'right':
        return `${baseStyles} left-full ml-[15px] top-1/2 -translate-y-1/2`;
      case 'left':
        return `${baseStyles} right-full mr-[15px] top-1/2 -translate-y-1/2`;
      case 'top':
        return `${baseStyles} bottom-full mb-[15px] left-1/2 -translate-x-1/2`;
      case 'bottom':
        return `${baseStyles} top-full mt-[15px] left-1/2 -translate-x-1/2`;
      default:
        return baseStyles;
    }
  };

  return (
    <div className={`relative w-full flex justify-center items-center px-[24px] py-[50px] tablet:px-[60px] desktop:px-[100px] desktop:py-[80px] bg-black`}>
      <div className='relative w-full flex flex-col gap-[80px] items-center justify-center'>
        <div className='text-white text-center font-neue-regrade font-medium tablet:font-semibold text-[28px] tablet:text-[48px] leading-none'>
          Why Us?
        </div>
        <div className='hidden desktop:block relative w-full h-[800px] p-[40px] flex flex-col items-center border-[1px] border-brand-purple/20 rounded-[16px]'>
          <div className={`text-center text-symbol-purple font-montserrat font-semibold text-[20px]`}>
            Elevating Intelligence. Accelerating Impact. Building what truly matters.
          </div>
          <div className={`${styles.whyus_bg} flex items-center border-white/30`}>
            {orbitalItems.map((item) => (
              <div
                key={item.id}
                className="absolute"
                style={{
                  left: `${item.position.x}%`,
                  top: `${item.position.y}%`,
                  transform: 'translate(-50%, -50%)'
                }}
              >
                <button
                  onClick={() => setActiveItem(activeItem === item.id ? null : item.id)}
                  className={`
                relative w-[50px] h-[50px] rounded-full flex items-center justify-center
                transition-all duration-300 hover:scale-110 cursor-pointer
                ${activeItem === item.id
                      ? 'bg-brand-blue scale-110'
                      : 'bg-black border border-white/30 hover:bg-tag-bg'
                    }
              `}
                >
                  {/* Pulse effect for active item */}
                  {activeItem === item.id && (
                    <div className="absolute inset-0 rounded-full bg-brand-blue animate-ping opacity-20"></div>
                  )}
                </button>

                {/* Text Label */}
                <div className={getTextPositionStyles(item.textPosition, activeItem === item.id)}>
                  <div className="w-[350px] flex flex-col items-start justify-center gap-[12px]">
                    <div className='text-white font-neue-regrade font-semibold text-[20px] leading-none'>
                      {item.title}
                    </div>
                    <div className={`${activeItem === item.id ? '' : ''} text-wrap text-body-grey-2 font-montserrat font-normal text-[16px]`}>
                      {item.description}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className='flex flex-col tablet:flex-row desktop:hidden gap-[32px] items-center justify-center'>
          <Image
            src='/images/home/why-us-sm.png'
            alt='why us image'
            width={800}
            height={48}
            priority
            className='w-full tablet:w-1/2 h-auto object-cover'
          />
          <div className='flex flex-col gap-[20px] items-start justify-ceter'>
            {orbitalItems.map((item, index) => (
              <div key={index} className="flex flex-col items-start justify-center gap-[12px]">
                <div className='text-white font-neue-regrade font-semibold text-[20px] leading-none'>
                  {item.title}
                </div>
                <div className={`${activeItem === item.id ? '' : ''} text-wrap text-body-grey-2 font-montserrat font-normal text-[16px]`}>
                  {item.description}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyUs;
