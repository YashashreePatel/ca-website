import React from 'react';
import Image from 'next/image';

import HorizontalSlider from '@/components/ui/home/HorizontalSlider';
import styles from '../style.module.css';

const TrustedBy: React.FC = () => {
  return (
    <div className={`relative w-full flex justify-center items-center py-[40px] tablet:py-[50px] desktop:py-[80px] bg-black`}>
      <Image 
        src="/images/home/trusted-by/bg.gif"
        alt="Trusted By Background"
        width={100}
        height={100}
        className={`absolute w-full h-full object-cover top-0 left-0`}
      />
      <div className={`${styles.testimonial_outer_layer} absolute top-0 left-0 inset-0 pointer-events-none`}>
        <div className={`${styles.testimonial_bg_gradient} absolute w-full h-full left-0 top-0 pointer-events-none`} />
        <div className={`${styles.testimonial_bg_mask} absolute w-full h-full left-0 top-0  pointer-events-none`} />
      </div>
      <div className='w-full flex flex-col gap-[80px] items-center justify-center py-[200px] z-30'>
        <div className='text-white text-center font-neue-regrade font-medium tablet:font-semibold text-[28px] tablet:text-[48px] leading-none'>Trusted By Industry</div>
        <HorizontalSlider />
      </div>
    </div>
  );
};

export default TrustedBy;
