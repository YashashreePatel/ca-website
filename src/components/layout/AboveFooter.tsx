import React from 'react';
import Button from '@/components/ui/Button'
import styles from '../style.module.css';

const AboveFooter: React.FC = () => {
  return (
    <div className={`w-full py-[80px] bg-black`}>
      <div className='w-full flex flex-col gap-[24px] items-center justify-center'>
        <div className='text-white text-center font-neue-regrade font-medium tablet:font-semibold text-[28px] tablet:text-[48px] leading-none'>
          Activate Your AI Future
        </div>
        <Button variant='primary'>Get Started</Button>
      </div>
    </div>
  );
};

export default AboveFooter;
