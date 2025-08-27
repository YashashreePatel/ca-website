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
    <div className={`w-full flex justify-center items-center px-[24px] py-[40px] tablet:px-[60px] tablet:py-[50px] desktop:px-[170px] desktop:py-[80px]x bg-black`}>
      <div className='w-full flex flex-col gap-[80px] items-center justify-center py-[200px]'>
        <div className='text-white text-center font-neue-regrade font-medium tablet:font-semibold text-[28px] tablet:text-[48px] leading-none'>Trusted By Industry</div>
        {/* <HorizontalSlider images={images} folder={folder} />  */}
        <HorizontalSlider /> 
      </div>
    </div>
  );
};

export default TrustedBy;
