import React, { useState } from 'react';
import Button from '@/components/ui/Button';
import ContactModal from '@/components/ui/ContactModal';
import styles from '../style.module.css';

const Hero: React.FC = () => {
  return (
    <div className={`w-full pb-[50px] pt-[180px] bg-black`}>
      <div className='relative h-[400px] tablet:h-[550px] desktop:h-[670px] w-full'>
        <div className={`${styles.about_hero_bg} absolute top-0 left-0 w-full h-full z-10`} />
        <div className='relative w-full text-white text-center font-neue-regrade font-semibold text-[32px] tablet:text-[48px] p-[30px] leading-none z-20'>
          Raw Data is <span className='text-highlight-purple'>Gold</span>.<br />
          We at Cogniify Help You <span className='text-highlight-purple'>Refine</span> It.
        </div>
      </div>
    </div>
  );
};

export default Hero;
