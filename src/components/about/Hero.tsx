import React, { useState } from 'react';
import Button from '@/components/ui/Button';
import ContactModal from '@/components/ui/ContactModal';
import styles from '../style.module.css';

const Hero: React.FC = () => {
  return (
    <div className={`relative w-full h-screen pt-[180px] bg-black`}>
        <div className={`${styles.about_hero_bg} absolute top-0 left-0 w-full h-full z-10`} />
        <div className='relative w-full text-white text-center font-neue-regrade font-semibold text-[32px] tablet:text-[48px] leading-none z-20'>
          Raw Data is <span className='text-highlight-purple'>Gold</span>.<br />
          We at Cogniify Help You <span className='text-highlight-purple'>Refine</span> It.
        </div>
    </div>
  );
};

export default Hero;
