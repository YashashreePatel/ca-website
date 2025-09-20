import React from 'react';
import Image from 'next/image';

const Hero: React.FC = () => {
  return (
    <div className={`relative w-full h-screen px-[24px] tablet:px-[60px] desktop:px-[100px] pt-[300px] desktop:pt-[220px] bg-black`}>
      <Image
        src="/images/about/bg.png"
        alt="Hero Background"
        fill
        priority
        className="absolute w-full h-full object-bottom object-cover z-10"
      />
      <div className='relative w-full text-white text-center font-neue-regrade font-semibold text-[32px] tablet:text-[48px] leading-none z-20'>
        Turning <span className='text-highlight-purple'>Data</span> Into <span className='text-highlight-purple'>Decisions</span>.<br />
        Turning <span className='text-highlight-purple'>AI</span> Into <span className='text-highlight-purple'>Advantage</span>.
      </div>
    </div>
  );
};

export default Hero;
