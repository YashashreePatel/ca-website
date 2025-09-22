import React from 'react';
import styles from '@/components/style.module.css';
import { RevealCard } from '@/types';

interface RevealCardProps {
  data: RevealCard;
  icon: boolean;
  number: boolean;
  subtitle: boolean;
  content: boolean;
}

const HoverRevealCard: React.FC<RevealCardProps> = ({ data, icon, number, subtitle, content }) => {
  return (
    <div className='relative h-full border-[2px] bg-card-bg/50 border-brand-purple/20 rounded-[16px] overflow-hidden'>
      {number == true ? (
        <div className={`${styles.reveal_card_title} w-full px-[34px] py-[24px] flex flex-col gap-[10px]`}>
          <div className={`text-center text-symbol-purple font-neue-regrade font-bold text-[40px] leading-none`}>
            {data.order}
          </div>
          <div className={`text-center text-white font-neue-regrade font-semibold text-[28px]`}>
            {data.title}
          </div>
        </div>
      ) : subtitle == true ? (
        <div className={`${styles.reveal_card_title} w-full px-[34px] py-[24px] flex flex-col gap-[10px]`}>
          <div className='text-center text-white font-neue-regrade font-semibold text-[28px]'>
            {data.title}
          </div>
          <div className='text-center text-symbol-purple font-neue-regrade font-medium text-[20px]'>
            {data.subtitle}
          </div>
        </div>
      ) : icon == true ? (
        <div className={`${styles.reveal_card_title} w-full px-[34px] py-[24px] flex flex-col gap-[10px]`}>
          <div className='text-center text-[#AE98FF] font-neue-regrade font-semibold'>
            <span className="material-symbols-outlined !text-[40px]">{data.icon}</span>
          </div>
          <div className='text-center text-white font-neue-regrade font-medium text-[20px]'>
            {data.title}
          </div>
        </div>
      ) : (
        <div className='w-full'>
          <div className={`${styles.reveal_card_title} text-center text-symbol-purple/10 font-neue-regrade font-semibold text-[60px] leading-none`}>
            {data.title}
          </div>
          <div className={`${styles.reveal_card_title} text-center text-white font-neue-regrade font-semibold text-[28px]`}>
            {data.title}
          </div>
        </div>
      )}
      <div className='opacity-0 hover:opacity-100 active:opacity-100 h-full flex items-center px-[34px] py-[24px] bg-white/5 backdrop-blur-lg transition-all duration-300'>
        <div className='text-body-grey-2 text-center font-montserrat font-normal text-[16px]'>
          {content == true ? (
            <div className='flex flex-col items-start gap-[5px]'>
              {data.content != null &&
                data.content.map((item, index) => (
                  <span key={index} className='text-start'>- {item}</span>
                ))}
            </div>
          ) : (
            <span className='text-center'>
              {data.description}
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

export default HoverRevealCard;
