import React from 'react';
// import FAQ from '@/components/ui/FAQ';
import AboveFooter from '@/components/layout/AboveFooter';
import BackButton from '@/components/ui/BackButton';

import { RevealCard } from '@/types';
import HoverRevealCard from '@/components/ui/HoverRevealCard';

// type FAQItem = {
//   question: string;
//   answer: string;
// };

// const faqs: FAQItem[] = [
//   {
//     question: "What is Sharper Analytics?",
//     answer: "Sharper Analytics is our offering that transforms raw, unstructured data into clear, actionable insights through advanced analytics, dashboards, and predictive modeling—helping businesses make smarter, data-driven decisions."
//   },
//   {
//     question: "How is Sharper Analytics different from regular reporting tools?",
//     answer: ""
//   },
//   {
//     question: "Do I need a dedicated data science team to use Sharper Analytics?",
//     answer: ""
//   },
//   {
//     question: "How long does it take to implement Sharper Analytics?",
//     answer: ""
//   },
//   {
//     question: "Is my data secure with Sharper Analytics?",
//     answer: ""
//   }
// ];

export default async function SharperAnalytics() {
  const revealCards: RevealCard[] = [
      {
        id: 1,
        title: 'Define KPIs',
        data: [
          'Based on OKRs by business teams, define quantitative metrics',
          'Create KPIs based on those metrics'
        ]
      },
      {
        id: 2,
        title: 'Data Collection',
        data: [
          'Identify data sources and connections',
          'Define Medallion Architecture or any other architecture based on business'
        ]
      },
      {
        id: 3,
        title: 'Prepare Data Lakes',
        data: [
          'Based on Architecture prepare data warehouse and schemas',
          'Define security checks and user access'
        ]
      },
      {
        id: 4,
        title: 'Develop Workflows',
        data: [
          'Create Bronze, Silver and Gold layer workflows',
          'Define QC checks'
        ]
      },
      {
        id: 5,
        title: 'Deploy',
        data: [
          'Import Data Model and create semantic layer',
          'Develop views and reports that help answer defined KPIs'
        ]
      },
      {
        id: 6,
        title: 'Schedule & Monitor',
        data: [
          'Schedule Data workflow and Dashboard refresh on set cadence',
          'Using Monitoring Tools ensure data is secure, reliable and consistent'
        ]
      }
    ]

  return (
    <div className={`w-full flex flex-col gap-[80px] px-[24px] pb-[80px] pt-[180px] tablet:px-[60px] desktop:px-[100px] bg-black`}>
      <BackButton />
      <div className='flex flex-col gap-[40px] font-montserrat font-normal text-[16px] text-white'>
        <div className='flex flex-col gap-[24px]'>
          <span>
            Sharper Analytics is where clarity begins. In a world flooded with data, businesses often struggle to separate signals from noise. At Cogniify, we help leaders unlock insights that matter—insights that fuel confident decisions and measurable outcomes.
          </span>
          <span>
            Our philosophy of simplicity and outcomes comes alive here. We don&apos;t overwhelm with endless dashboards. We build analytics ecosystems that deliver precision, speed, and relevance. Every metric, KPI, and visualization is designed to align with business priorities, ensuring leaders see what truly drives value.
          </span>
          <span>
            Sharper Analytics helps clients move from hindsight to foresight—enabling strategy powered by evidence, not guesswork.
          </span>
        </div>

        <div className='flex flex-col gap-[5px] items-start text-white'>
          <span>Why Choose Sharper Analytics?</span>
          <span className='pl-[5px]'>- <span className='text-[#AE98FF]'>Data Engineering & Pipelines:</span> Reliable pipelines ensure data flows seamlessly, enabling enterprises to trust their information and unlock insights that fuel better business performance.</span>
          <span className='pl-[5px]'>- <span className='text-[#AE98FF]'>Business Intelligence & Dashboards:</span> Well-designed dashboards give leaders the clarity they need—turning complexity into simple, actionable stories that drive growth and alignment.</span>
          <span className='pl-[5px]'>- <span className='text-[#AE98FF]'>Predictive & Prescriptive Analytics:</span> Analytics that not only explain the past but anticipate what&apos;s next—helping organizations act with foresight, agility, and confidence.</span>
        </div>
      </div>

      <div className='flex flex-col gap-[40px] items-center'>
        <div className='text-white text-center font-neue-regrade font-semibold text-[48px] leading-none'>
          Our Approach
        </div>

        <div className='grid grid-cols-1 tablet:grid-cols-2 desktop:grid-cols-3 gap-[20px] desktop:gap-[30px] items-stretch'>
          {revealCards.map((card) => (
            <div key={card.id} className='col-span-1 h-auto desktop:h-[300px]'>
              <HoverRevealCard content={card} icon={false} number={true} subtitle={false} data={true} />
            </div>
          ))}
        </div>
      </div>

      <div className='flex flex-col gap-[40px] font-montserrat font-normal text-[16px] text-white'>
        <div className='flex flex-col gap-[5px] items-start text-white'>
          <span>Who It&apos;s For?</span>
          <span className='pl-[5px]'>- <span className='text-[#AE98FF]'>Business Leaders</span> seeking clarity to guide strategic moves with confidence.</span>
          <span className='pl-[5px]'>- <span className='text-[#AE98FF]'>Data Teams</span> needing scalable, automated pipelines to turn complexity into actionable insights.</span>
          <span className='pl-[5px]'>- <span className='text-[#AE98FF]'>Operations Managers</span> looking to optimize efficiency through real-time, granular visibility.</span>
          <span className='pl-[5px]'>- <span className='text-[#AE98FF]'>Innovators & Strategists</span> who want to stay ahead by predicting shifts before they occur.</span>
        </div>

        <div className='flex flex-col gap-[5px] items-start text-white'>
          <span>The Outcome</span>
          <span>With Sharper Analytics, your organization evolves from reactive reporting to proactive intelligence, where every decision is guided by data-driven clarity:</span>
          <span className='pl-[5px]'>- <span className='text-[#AE98FF]'>Actionable Intelligence:</span> transform raw data into insights that directly inform strategy and execution.</span>
          <span className='pl-[5px]'>- <span className='text-[#AE98FF]'>Predictive Precision:</span> leverage advanced analytics and AI models to anticipate trends and outcomes before they happen.</span>
          <span className='pl-[5px]'>- <span className='text-[#AE98FF]'>Enterprise-Wide Empowerment:</span> democratize insights across teams, enabling faster, smarter decisions at every level.</span>
          <span className='pl-[5px]'>- <span className='text-[#AE98FF]'>Competitive Advantage:</span> move from lagging indicators to leading insights, positioning your business to act ahead of the market.</span>
        </div>
      </div>

      {/* <div className='flex flex-col gap-[40px] items-center'>
        <div className='text-white text-center font-neue-regrade font-semibold text-[48px] leading-none'>
          Frequently Asked Questions
        </div>

        <FAQ faqs={faqs} />
      </div> */}

      <AboveFooter
        title="Want to see deeper into your business?"
        subtitle='Explore how Sharper Analytics can reveal insights that drive precision, performance, and growth.'
        buttonText="Contact Us"
      />
    </div>
  );
};
