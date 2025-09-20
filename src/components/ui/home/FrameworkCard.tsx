import React from 'react';
import Image from 'next/image';

import { FrameworkCard } from '@/types';
import 'material-symbols';

interface CardProps {
  card: FrameworkCard;
}

const IntelligenceCard: React.FC<CardProps> = ({ card }) => {
  return (
    <a
      href={card.link}
      className='relative w-full h-full flex flex-col items-center gap-[8px] bg-card-bg px-[34px] py-[24px] rounded-[16px] hover:bg-card-bg/30 transition-all duration-300 hover:scale-105'
    >
      {/* Arrow icon */}
      <div className='absolute h-[24px] w-auto top-[24px] right-[34px] group-hover:opacity-100 transition-opacity'>
        <span className='material-symbols-outlined text-symbol-purple'>arrow_outward</span>
      </div>
      <Image
        src={card.image}
        alt={card.title}
        width={800}
        height={800}
        className='w-full h-auto object-contain'
      />
      <div className='flex flex-col gap-[8px] text-center'>
        <div className='text-white font-neue-regrade font-semibold text-[20px] leading-none'>
          {card.title}
        </div>
        <div className='text-body-grey-2 font-montserrat font-normal text-[16px]'>
          {card.description}
        </div>
      </div>
    </a>
  );
};

export default IntelligenceCard;
