'use client';

import React, { useState } from 'react';
import Button from '@/components/ui/Button';
import ContactModal from '@/components/ui/ContactModal';
import styles from '../style.module.css';

type AboveFooterProps = {
  title: string;
  subtitle?: string;
  buttonText: string;
};

const AboveFooter: React.FC<AboveFooterProps> = ({ title, subtitle, buttonText }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <div className={`w-full py-[80px] bg-black`}>
      <div className='w-full flex flex-col gap-[24px] items-center justify-center'>
        <div className='text-white text-center font-neue-regrade font-medium tablet:font-semibold text-[28px] tablet:text-[48px] leading-none'>
          {title}
        </div>
        <div className='text-white text-center font-montserrat font-semibold text-[12px] tablet:text-[16px]'>
          {subtitle}
        </div>
        <Button onClick={() => setIsModalOpen(true)} variant='primary'>{buttonText}</Button>
      </div>
      <ContactModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </div>
  );
};

export default AboveFooter;
