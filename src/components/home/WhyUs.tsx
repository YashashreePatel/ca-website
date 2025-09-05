import React from 'react';
import WhyUsSlider from '@/components/ui/WhyUsSlider';

const WhyUs: React.FC = () => {
  return (
    <div className={`relative w-full flex justify-center items-center px-[24px] py-[50px] tablet:px-[60px] desktop:px-[100px] desktop:py-[80px] bg-black`}>
      <div className='relative w-full flex flex-col gap-[80px] items-center justify-center'>
        <div className='text-white text-center font-neue-regrade font-medium tablet:font-semibold text-[28px] tablet:text-[48px] leading-none'>
          Why Us?
        </div>
        <WhyUsSlider />
      </div>
    </div>
  );
};

export default WhyUs;
