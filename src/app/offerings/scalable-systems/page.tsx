'use client';
import React, { useEffect, useState } from 'react';
// import FAQ from '@/components/ui/FAQ';
import AboveFooter from '@/components/layout/AboveFooter';
import BackButton from '@/components/ui/BackButton';

import HoverRevealCard from '@/components/ui/HoverRevealCard';

import { Service } from '@/types';

// type FAQItem = {
//   question: string;
//   answer: string;
// };

// const faqs: FAQItem[] = [
//   {
//     question: "",
//     answer: ""
//   }
// ];

export default function ScalableSystems() {
  const [service, setService] = useState<Service | null>(null);

  useEffect(() => {
    fetch(`https://ca-website-1.onrender.com/api/services/3/`)
      .then((res) => res.json())
      .then((data: Service) => setService(data))
      .catch(console.error);
  }, []);

  return (
    <div className={`w-full flex flex-col gap-[80px] px-[24px] pb-[80px] pt-[180px] tablet:px-[60px] desktop:px-[100px] bg-black`}>
      <BackButton />
      <div className='flex flex-col gap-[40px] font-montserrat font-normal text-[16px] text-white'>
        <div className='flex flex-col gap-[24px]'>
          {service?.page_content.map((text, index) => (
            <span key={index}>
              {text}
            </span>
          ))}
        </div>

        <div className='flex flex-col gap-[5px] items-start text-white'>
          <span>Why Choose {service?.service_name}?</span>
          {service?.why.map((data, index) => (
            <span key={index} className='pl-[5px]'>- <span className='text-[#AE98FF]'>{data.highlight_text}:</span> {data.content}</span>
          ))}
        </div>
      </div>

      <div className='flex flex-col gap-[40px] items-center'>
        <div className='text-white text-center font-neue-regrade font-semibold text-[48px] leading-none'>
          Our Approach
        </div>

        <div className='w-full grid grid-cols-1 tablet:grid-cols-2 desktop:grid-cols-3 gap-[20px] desktop:gap-[30px] items-stretch'>
          {service?.our_approach.map((card, index) => (
            <div key={index} className='col-span-1 h-auto desktop:h-[300px]'>
              <HoverRevealCard data={card} icon={false} number={true} subtitle={false} content={true} />
            </div>
          ))}
        </div>
      </div>

      <div className='flex flex-col gap-[40px] font-montserrat font-normal text-[16px] text-white'>
        <div className='flex flex-col gap-[5px] items-start text-white'>
          <span>Who It&apos;s For?</span>
          {service?.for_whom.map((data, index) => (
            <span key={index} className='pl-[5px]'>- <span className='text-[#AE98FF]'>{data.highlight_text}</span> {data.content}</span>
          ))}
        </div>

        <div className='flex flex-col gap-[5px] items-start text-white'>
          <span>The Outcome</span>
          <span>{service?.outcome_text}</span>
          {service?.outcome.map((data, index) => (
            <span key={index} className='pl-[5px]'>- <span className='text-[#AE98FF]'>{data.highlight_text}:</span> {data.content}</span>
          ))}
        </div>
      </div>

      {/* <div className='flex flex-col gap-[40px] items-center'>
        <div className='text-white text-center font-neue-regrade font-semibold text-[48px] leading-none'>
          Frequently Asked Questions
        </div>

        <FAQ faqs={faqs} />
      </div> */}

      <AboveFooter
        title="Want your systems to grow as fast as your vision?"
        subtitle='Discover how Scalable Systems can deliver resilience, agility, and performance at any scale.'
        buttonText="Contact Us"
      />
    </div>
  );
};
