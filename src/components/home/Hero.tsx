import React, { useState } from 'react';
import Image from 'next/image';

import Button from '@/components/ui/Button';
import ContactModal from '@/components/ui/ContactModal';

const Hero: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <div className={`relative h-screen w-full flex justify-center items-center`}>
      <Image
        src="/images/home/bg.png"
        alt="Hero Background"
        fill
        priority
        className="absolute w-full h-full object-right object-cover z-10"
      />
      <div className='flex flex-col gap-0 items-center justify-center z-20'>
        <div className='text-white font-neue-regrade font-normal text-[64px] tablet:text-[160px] leading-none'>COGNIIFY</div>
        <div className='text-body-grey-1 font-montserrat font-normal text-[16px] tablet:text-[24px] mb-[60px]'>Sharper <span className='text-brand-blue'>Data</span>. Smarter <span className='text-brand-blue'>AI</span>. Real <span className='text-brand-blue'>Results</span>.</div>
        <Button onClick={() => setIsModalOpen(true)} variant='primary' iconSrc='/images/icons/sparkle-fill.svg' iconAlt='Arrow'>Let&apos;s Talk Impact</Button>
        <ContactModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
        />
      </div>
    </div>
  );
};

export default Hero;
