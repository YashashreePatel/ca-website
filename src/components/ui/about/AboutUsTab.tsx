import React, { useState } from 'react';

const AboutUsTab: React.FC = () => {
  return (

    <div className='w-full flex flex-col gap-[80px] justify-center'>
      <div className='text-white text-center font-neue-regrade font-semibold text-[48px] leading-none'>
        About Us
      </div>
      <div className='flex flex-col gap-[24px] font-montserrat text-[16px]'>
        <div className='font-semibold text-[#AE98FF]'>
          Data is the new currency, and the Future Belongs to Those Who Understand & Leverage Their Data. But raw data alone is worthless—like unrefined gold buried deep in the earth.
        </div>
        <div className='font-normal text-white'>
          At Cognify, we mine, refine, and transform that data into something far more valuable: clarity and data driven intelligence.<br />
          At our core, we are not just a consulting firm—we are curious minds on a mission to solve complex problems through the lens of AI and data. We do solve these complex problems with the best business impact at the core, and interweave it with not only ROI, but also operational excellence, and sustainability in mind.
        </div>
        <div className='font-normal text-white'>
          We exist to bring clarity to chaos, precision to decision-making, and vision to execution. We help organizations move from hindsight to foresight, from reactive operations to intelligent ecosystems.
        </div>
      </div>

      <div className='flex flex-col tablet:flex-row gap-[40px] items-center'>
        <div className='w-full tablet:w-1/2 flex flex-col gap-[24px] font-montserrat'>
          <div className='font-semibold text-[24px] text-white'>
            We believe that artificial intelligence is not just a technology—it&apos;s a mindset.
          </div>
          <div className='flex flex-col gap-[10px] items-start font-normal text-[16px]'>
            <span className='text-symbol-purple'>A Mindset that:</span>
            <span className='pl-[5px] text-white'>- Challenges Convention</span>
            <span className='pl-[5px] text-white'>- Questions the Status Quo</span>
            <span className='pl-[5px] text-white'>- Relentlessly Seeks Better</span>
          </div>
          <div className='font-normal text-[16px] text-white'>
            We partner with organizations that are ready to rethink what&apos;s possible—leaders who understand that real transformation starts with asking the right questions, not just chasing trends.
          </div>
        </div>
        <img
          src='/images/about/tabs/about-us.png'
          alt='about us tab image'
          className='w-full tablet:w-1/2 object-cover rounded-[8px]'
        />
      </div>

      <div className='flex flex-col gap-[24px] font-montserrat text-[16px]'>
        <div className='font-semibold text-white'>
          Our team brings together deep expertise in AI, advanced analytics, data engineering, and domain consulting. But what truly sets us apart is how we blend it all—combining the logic of machines with the intuition of humans. We don&apos;t just build algorithms; we architect trust. We don&apos;t just deliver analytics; we deliver decisions. And we don&apos;t stop at insights; we go all the way to impact.
        </div>
        <div className='font-normal text-white'>
          What drives us is a simple mission and vision:<br />
          <span className='italic font-semibold'>Creating a meaningful and measurable change. Whether it&apos;s optimizing critical operations, personalizing customer journeys, or predicting what matters before it happens—we bring strategy, science, and storytelling together to unlock business value. We&apos;re not in this to impress. We&apos;re in this to transform.</span>
        </div>
        <div className='font-normal text-white'>
          Our clients include visionary enterprises who seek more than just technical expertise—they seek a partner who listens deeply, moves quickly, and delivers fearlessly. Together, we co-create AI solutions that don&apos;t just solve problems, but shape competitive advantage.
        </div>
        <div className='font-normal text-white'>
          We&apos;re inspired by the pioneers of progress. By people who choose clarity over complexity. By businesses that aren&apos;t afraid to evolve.
        </div>
        <div className='font-normal text-white'>
          In a world flooded with data, we help you find the signal. In a world racing toward automation, we help you stay human at the center.
        </div>
        <div className='font-neue-regrade font-semibold text-[#AE98FF]'>
          This is what we do. This is who we are.
        </div>
        <div className='font-normal text-white'>
          At Cognify, we believe technology should work for you, not the other way around. Let&apos;s build intelligence that doesn&apos;t just inform—but transforms. We are your AI & Analytics partner for what&apos;s next.
        </div>
      </div>
    </div>
  );
};

export default AboutUsTab;
