import React from 'react';
import styles from '@/components/style.module.css';
import { RevealCard } from '@/types';

interface RevealCardProps {
  content: RevealCard;
}

const HoverRevealCard: React.FC<RevealCardProps> = ({ content }) => {
  return (
    <div className='relative h-full border-[2px] border-brand-purple/20 rounded-[16px] overflow-hidden'>
      <div className={`${styles.reveal_card_title} text-white font-neue-regrade font-semibold text-[20px] leading-none`}>
        {content.title}
      </div>
      <div className={`${styles.reveal_card_title} text-brand-purple/15 font-neue-regrade font-semibold text-[40px] leading-none`}>
        {content.title}
      </div>
      <div className='opacity-0 hover:opacity-100 h-full flex items-center px-[34px] py-[24px] bg-white/5 backdrop-blur-lg transition-all duration-300'>
        <div className='text-body-grey-2 text-center font-montserrat font-normal text-[16px]'>
          {content.description}
        </div>
      </div>
    </div>
  );
};

export default HoverRevealCard;
