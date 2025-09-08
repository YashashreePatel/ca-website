import React from 'react';
import styles from '@/components/style.module.css';
import { RevealCard } from '@/types';

interface RevealCardProps {
  content: RevealCard;
  number: boolean;
  subtitle: boolean;
  data: boolean;
}

const HoverRevealCard: React.FC<RevealCardProps> = ({ content, number, subtitle, data }) => {
  return (
    <div className='relative h-full border-[2px] bg-card-bg/50 border-brand-purple/20 rounded-[16px] overflow-hidden'>
      {number == true ? (
        <div className={`${styles.reveal_card_title} w-full px-[34px] py-[24px] flex flex-col gap-[10px]`}>
          <div className={`text-center text-symbol-purple font-neue-regrade font-bold text-[40px] leading-none`}>
            {content.id}
          </div>
          <div className={`text-center text-white font-neue-regrade font-semibold text-[28px]`}>
            {content.title}
          </div>
        </div>
      ) : subtitle == true ? (
        <div className={`${styles.reveal_card_title} w-full px-[34px] py-[24px] flex flex-col gap-[10px]`}>
          <div className='text-center text-white font-neue-regrade font-semibold text-[28px]'>
            {content.title}
          </div>
          <div className='text-center text-symbol-purple font-neue-regrade font-medium text-[20px]'>
            {content.subtitle}
          </div>
        </div>
      ) : (
        <div className='w-full'>
          <div className={`${styles.reveal_card_title} text-center text-symbol-purple/10 font-neue-regrade font-semibold text-[60px] leading-none`}>
            {content.title}
          </div>
          <div className={`${styles.reveal_card_title} text-center text-white font-neue-regrade font-semibold text-[28px]`}>
            {content.title}
          </div>
        </div>
      )}
      <div className='opacity-0 hover:opacity-100 h-full flex items-center px-[34px] py-[24px] bg-white/5 backdrop-blur-lg transition-all duration-300'>
        <div className='text-body-grey-2 text-center font-montserrat font-normal text-[16px]'>
          {data == true ? (
            <div className='flex flex-col items-start gap-[5px]'>
              {content.data != null &&
                content.data.map((item, index) => (
                  <span key={index} className='text-start'>- {item}</span>
                ))}
            </div>
          ) : (
            <span className='text-center'>
              {content.description}
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

export default HoverRevealCard;
