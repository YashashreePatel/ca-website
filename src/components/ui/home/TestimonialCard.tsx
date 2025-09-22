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
          src={testimonial.author_image?.startsWith("/") ? testimonial.author_image : `/${testimonial.author_image || "images/home/outcome.jpeg"}`}
          alt={testimonial.author_name}
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
          <span>{testimonial.author_name}</span>
          <span className='text-brand-purple'>•</span>
          <span>{testimonial.author_role}</span>
        </div>
        <div className='text-body-grey-2 font-montserrat font-normal text-[16px]'>
          {testimonial.author_company}
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
