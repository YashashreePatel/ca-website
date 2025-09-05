import React from 'react';
import FAQ from '@/components/ui/FAQ';
import AboveFooter from '@/components/layout/AboveFooter';
import BackButton from '@/components/ui/BackButton';

type FAQItem = {
  question: string;
  answer: string;
};

const faqs: FAQItem[] = [
  {
    question: "What is Sharper Analytics?",
    answer: "Sharper Analytics is our service that transforms raw, unstructured data into clear, actionable insights through advanced analytics, dashboards, and predictive modeling—helping businesses make smarter, data-driven decisions."
  },
  {
    question: "How is Sharper Analytics different from regular reporting tools?",
    answer: ""
  },
  {
    question: "Do I need a dedicated data science team to use Sharper Analytics?",
    answer: ""
  },
  {
    question: "How long does it take to implement Sharper Analytics?",
    answer: ""
  },
  {
    question: "Is my data secure with Sharper Analytics?",
    answer: ""
  }
];

export default async function SharperAnalytics() {
  return (
    <div className={`w-full flex flex-col gap-[80px] px-[24px] pb-[80px] pt-[180px] tablet:px-[60px] desktop:px-[100px] bg-black`}>
      <BackButton />
      <div className='flex flex-col gap-[40px] font-montserrat font-normal text-[16px]'>
        <div className='text-white'>
          In today&apos;s world, organizations generate more data than ever before. But without the right tools and expertise, data quickly becomes overwhelming. Our Sharper Analytics service transforms unstructured data into actionable insights—helping you understand the “why” behind the numbers and make informed, future-ready decisions.
        </div>

        <div className='flex flex-col gap-[10px] items-start text-white'>
          <span>What We Offer:</span>
          <span className='pl-[5px] flex flex-row gap-[5px] items-center'>
            <span className="material-symbols-outlined text-[#AE98FF]">search</span>
            <span className='text-[#AE98FF]'>Data Discovery & Integration:</span> Seamlessly connect data from multiple sources to create a unified, trustworthy foundation.
          </span>
          <span className='pl-[5px] flex flex-row gap-[5px] items-center'>
            <span className="material-symbols-outlined text-[#AE98FF]">bar_chart</span>
            <span className='text-[#AE98FF]'>Advanced Analytics & Dashboards:</span> Interactive dashboards and visual reports that make complex data easy to interpret.
          </span>
          <span className='pl-[5px] flex flex-row gap-[5px] items-center'>
            <span className="material-symbols-outlined text-[#AE98FF]">star_shine</span>
            <span className='text-[#AE98FF]'>Predictive Insights:</span> Go beyond descriptive analytics to forecast trends and uncover hidden opportunities.
          </span>
          <span className='pl-[5px] flex flex-row gap-[5px] items-center'>
            <span className="material-symbols-outlined text-[#AE98FF]">target</span>
            <span className='text-[#AE98FF]'>Customized KPIs & Metrics:</span> Tailored performance indicators that align with your business goals and strategies.
          </span>
          <span className='pl-[5px] flex flex-row gap-[5px] items-center'>
            <span className="material-symbols-outlined text-[#AE98FF]">bolt</span>
            <span className='text-[#AE98FF]'>Self Service Enablement:</span> Empower your teams with user-friendly tools to explore data independently.
          </span>
        </div>

        <div className='flex flex-col gap-[5px] items-start text-white'>
          <span>Why Choose Sharper Analytics?</span>
          <span className='pl-[5px]'>- <span className='text-[#AE98FF]'>Clarity over Complexity:</span> Simplify large datasets into meaningful insights.</span>
          <span className='pl-[5px]'>- <span className='text-[#AE98FF]'>Smarter Decisions:</span> Make confident choices backed by evidence, not guesswork.</span>
          <span className='pl-[5px]'>- <span className='text-[#AE98FF]'>Competitive Advantage:</span> Stay ahead by spotting patterns and opportunities early.</span>
          <span className='pl-[5px]'>- <span className='text-[#AE98FF]'>Scalable & Future-Proof:</span> Solutions that grow with your business and adapt to changing needs.</span>
        </div>

        <div className='flex flex-col gap-[5px] items-start text-white'>
          <span>Who It&apos;s For?</span>
          <span className='pl-[5px]'>- Business leaders seeking confidence in decision-making.</span>
          <span className='pl-[5px]'>- Strategy and operations teams needing data-driven clarity.</span>
          <span className='pl-[5px]'>- Organizations ready to move from reactive to proactive growth.</span>
        </div>

        <div className='flex flex-col gap-[5px] items-start text-white'>
          <span>The Outcome</span>
          <span>With Sharper Analytics, your data stops being a pile of numbers and becomes a powerful decision-making asset. You gain sharper foresight, improved performance, and the agility to adapt with certainty.</span>
        </div>
      </div>

      <div className='flex flex-col gap-[40px] items-center'>
        <div className='text-white text-center font-neue-regrade font-semibold text-[48px] leading-none'>
          Frequently Asked Questions
        </div>

        <FAQ faqs={faqs} />
      </div>

      <AboveFooter
        title="Want to unlock clarity from your data?"
        subtitle='Explore how Sharper Analytics can transform your decision-making.'
        buttonText="Contact Us"
      />
    </div>
  );
};
