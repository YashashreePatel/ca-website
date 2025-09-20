import React from 'react';
import Image from 'next/image';

import { Testimonial } from '@/types';

interface TestimonialCardProps {
  testimonial: Testimonial;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ testimonial }) => {
  return (
    <div className='relative w-full flex flex-col p-[40px] items-start justify-center gap-[32px] bg-card-bg rounded-[16px] overflow-hidden'>
      <div className='w-[120px] h-[64px] justify-center rounded-[8px] shadow-purple-glow'>
        <Image
          src={testimonial.avatar}
          alt={testimonial.name}
          width={300}
          height={150}
          className='w-full h-full rounded-[8px] object-cover'
        />
      </div>
      <div className='text-body-grey-2 font-montserrat font-normal text-[16px]'>
        {testimonial.content}
      </div>
      <div className='w-1/2 h-[1px] bg-gradient-purple-stops'></div>

      <div className='flex flex-col gap-[12px] items-start justify-center'>
        <div className='flex flex-row gap-[10px] text-white font-montserrat font-semibold text-[16px]'>
          <span>{testimonial.name}</span>
          <span className='text-brand-purple'>•</span>
          <span>{testimonial.role}</span>
        </div>
        <div className='text-body-grey-2 font-montserrat font-normal text-[16px]'>
          {testimonial.company}
        </div>
      </div>

      <div className='flex flex-wrap gap-[16px]'>
        {testimonial.tags.map((tag, index) => (
          <div
            key={index}
            className='px-[12px] py-[8px] bg-tag-bg text-white text-[14px] font-montserrat font-light rounded-[6px] border border-tag-border'
          >
            {tag}
          </div>
        ))}
      </div>
    </div>
  );
};

export default TestimonialCard;
