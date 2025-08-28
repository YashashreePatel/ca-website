import React from 'react';
// import fs from "fs";
// import path from "path";

import HorizontalSlider from '@/components/ui/HorizontalSlider';
import styles from '../style.module.css';

const TrustedBy: React.FC = () => {
  // const folder = "images/home/trusted-by";
  // const dirPath = path.join(process.cwd(), "public", folder);
  // const images = fs.readdirSync(dirPath);
  return (
    <div className={`relative w-full flex justify-center items-center px-[24px] py-[40px] tablet:px-[60px] tablet:py-[50px] desktop:px-[170px] desktop:py-[80px] bg-black`}>
      <img src="/images/home/testimonials/bg.gif" className={`absolute w-full h-full object-cover top-0 left-0`} />
      <div className={`${styles.testimonial_outer_layer} absolute top-0 left-0 inset-0 pointer-events-none`}>
        <div className={`${styles.testimonial_bg_gradient} absolute w-full h-full left-0 top-0 pointer-events-none`} />
        <div className={`${styles.testimonial_bg_mask} absolute w-full h-full left-0 top-0  pointer-events-none`} />
      </div>
      <div className='w-full flex flex-col gap-[80px] items-center justify-center py-[200px] z-30'>
        <div className='text-white text-center font-neue-regrade font-medium tablet:font-semibold text-[28px] tablet:text-[48px] leading-none'>Trusted By Industry</div>
        {/* <HorizontalSlider images={images} folder={folder} />  */}
        <HorizontalSlider />
      </div>
    </div>
  );
};

export default TrustedBy;
