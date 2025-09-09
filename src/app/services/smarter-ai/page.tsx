import React from 'react';
import FAQ from '@/components/ui/FAQ';
import AboveFooter from '@/components/layout/AboveFooter';
import BackButton from '@/components/ui/BackButton';

import { RevealCard } from '@/types';
import HoverRevealCard from '@/components/ui/HoverRevealCard';

type FAQItem = {
  question: string;
  answer: string;
};

const faqs: FAQItem[] = [
  {
    question: "",
    answer: ""
  }
];

export default async function SmarterAI() {
  const revealCards: RevealCard[] = [
      {
        id: 1,
        title: 'Define Problem',
        data: [
          'Clearly define the business or research problem to be solved',
          'Identify goals, success criteria, and constraints'
        ]
      },
      {
        id: 2,
        title: 'Data Collection & EDA',
        data: [
          'Gather relevant data from various sources',
          'Explore data to understand distributions, missing values, patterns, and relationships'
        ]
      },
      {
        id: 3,
        title: 'Model Development',
        data: [
          'Choose appropriate algorithms',
          'Train baseline models and evaluate initial results'
        ]
      },
      {
        id: 4,
        title: 'Feature Engineering',
        data: [
          'Create, select, and transform features to improve model performance',
          'Build reusable and automated pipelines for data preprocessing'
        ]
      },
      {
        id: 5,
        title: 'Model Deployment',
        data: [
          'Package and deploy the model to a production environment',
          'Set up monitoring for accuracy and performance'
        ]
      },
      {
        id: 6,
        title: 'Automate & Monitor',
        data: [
          'Automate the entire ML pipeline (e.g., using Airflow, MLflow)',
          'Monitor model drift, data quality, and retrain as needed'
        ]
      }
    ]

  return (
    <div className={`w-full flex flex-col gap-[80px] px-[24px] pb-[80px] pt-[180px] tablet:px-[60px] desktop:px-[100px] bg-black`}>
      <BackButton />
      <div className='flex flex-col gap-[40px] font-montserrat font-normal text-[16px] text-white'>
        <div className='flex flex-col gap-[24px]'>
          <span>
            Smarter AI is about intelligence with intent. Too often, AI projects remain proofs of concept. At Cogniify, we embed AI into production—designed to adapt, scale, and deliver impact.
          </span>
          <span>
            Staying true to our philosophy, we design AI that serves people, not replaces them. We combine explainability, ethics, and business alignment to ensure that every algorithm is not only accurate but also trusted. Smarter AI helps enterprises predict, automate, and personalize at scale—turning ambition into outcomes.
          </span>
          <span>
            Smarter AI translates complexity into competitive advantage—helping clients innovate faster while remaining human-first.
          </span>
        </div>

        <div className='flex flex-col gap-[5px] items-start text-white'>
          <span>Why Choose Smarter AI?</span>
          <span className='pl-[5px]'>- <span className='text-[#AE98FF]'>Machine Learning & AI Models:</span> Custom-built AI models that fit your business context, delivering outcomes that improve efficiency, personalization, and decision-making.</span>
          <span className='pl-[5px]'>- <span className='text-[#AE98FF]'>Agentic AI Solutions:</span> AI that doesn&apos;t just respond—it acts, collaborates, and evolves as a trusted partner in enterprise workflows.</span>
          <span className='pl-[5px]'>- <span className='text-[#AE98FF]'>MLOps & AI Lifecycle Management:</span> Robust frameworks that operationalize AI at scale—ensuring consistency, reliability, and speed from model development to production.</span>
        </div>
      </div>

      <div className='flex flex-col gap-[40px] items-center'>
        <div className='text-white text-center font-neue-regrade font-semibold text-[48px] leading-none'>
          Our Approach
        </div>

        <div className='grid grid-cols-1 tablet:grid-cols-2 desktop:grid-cols-3 gap-[20px] desktop:gap-[30px] items-stretch'>
          {revealCards.map((card) => (
            <div key={card.id} className='col-span-1 h-auto tablet:h-[300px]'>
              <HoverRevealCard content={card} number={true} subtitle={false} data={true} />
            </div>
          ))}
        </div>
      </div>

      <div className='flex flex-col gap-[40px] font-montserrat font-normal text-[16px] text-white'>
        <div className='flex flex-col gap-[5px] items-start text-white'>
          <span>Who It&apos;s For?</span>
          <span className='pl-[5px]'>- Business leaders seeking confidence in decision-making.</span>
          <span className='pl-[5px]'>- Strategy and operations teams needing data-driven clarity.</span>
          <span className='pl-[5px]'>- Organizations ready to move from reactive to proactive growth.</span>
        </div>

        <div className='flex flex-col gap-[5px] items-start text-white'>
          <span>The Outcome</span>
          <span>With Smarter AI, your data stops being a pile of numbers and becomes a powerful decision-making asset. You gain sharper foresight, improved performance, and the agility to adapt with certainty.</span>
        </div>
      </div>

      {/* <div className='flex flex-col gap-[40px] items-center'>
        <div className='text-white text-center font-neue-regrade font-semibold text-[48px] leading-none'>
          Frequently Asked Questions
        </div>

        <FAQ faqs={faqs} />
      </div> */}

      <AboveFooter
        title="Want to unlock clarity from your data?"
        subtitle='Explore how Smarter AI can transform your decision-making.'
        buttonText="Contact Us"
      />
    </div>
  );
};
