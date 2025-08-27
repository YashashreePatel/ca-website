import React from 'react';
import Button from '@/components/ui/Button'
import styles from '../style.module.css';

const Hero: React.FC = () => {
  return (
    <div className={`${styles.hero} h-screen w-full flex justify-center items-center`}>
      <div className='flex flex-col gap-0 items-center justify-center'>
        <div className='text-white font-neue-regrade font-normal text-[64px] tablet:text-[160px] leading-none'>COGNIFY</div>
        <div className='text-body-grey-1 font-montserrat font-normal text-[16px] tablet:text-[24px] mb-[60px]'>Sharper <span className='text-brand-blue'>Data</span>. Smarter <span className='text-brand-blue'>AI</span>. Real <span className='text-brand-blue'>Results</span>.</div>
        <Button variant='primary' iconSrc='/images/icons/sparkle-fill.svg' iconAlt='Arrow'>Let&apos;s Talk Impact</Button>
      </div>
    </div>
  );
};

export default Hero;
