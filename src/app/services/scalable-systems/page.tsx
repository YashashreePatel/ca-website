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

export default async function SecuredGovernance() {
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
            Scalable Systems ensure that intelligence doesn&apos;t just work—it endures. Many AI initiatives fail because they can&apos;t scale. Cognify&apos;s expertise lies in engineering systems that grow with the business—secure, resilient, and future-ready.
          </span>
          <span>
            Guided by our philosophy of clarity and trust, we design architectures that minimize friction and maximize flexibility. Whether migrating legacy systems to cloud-native platforms or building end-to-end MLOps pipelines, our focus is on sustainable performance.
          </span>
          <span>
            Scalable Systems give clients the confidence that intelligence will not just launch—but thrive under real-world demands.
          </span>
        </div>

        <div className='flex flex-col gap-[5px] items-start text-white'>
          <span>Why Choose Scalable System?</span>
          <span className='pl-[5px]'>- <span className='text-[#AE98FF]'>Cloud-Native Architecture:</span> Cloud solutions that adapt and grow with your business—ensuring scalability without compromising performance or cost efficiency.</span>
          <span className='pl-[5px]'>- <span className='text-[#AE98FF]'>DevOps & Automation:</span> Automated pipelines that reduce errors, accelerate delivery, and give enterprises confidence in scaling AI securely.</span>
          <span className='pl-[5px]'>- <span className='text-[#AE98FF]'>Resilient Engineering & Integration:</span> Enterprise systems designed to last—flexible, integrated, and built to withstand complexity and change.</span>
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
          <span>With Scalable System, your data stops being a pile of numbers and becomes a powerful decision-making asset. You gain sharper foresight, improved performance, and the agility to adapt with certainty.</span>
        </div>
      </div>

      {/* <div className='flex flex-col gap-[40px] items-center'>
        <div className='text-white text-center font-neue-regrade font-semibold text-[48px] leading-none'>
          Frequently Asked Questions
        </div>

        <FAQ faqs={faqs} />
      </div> */}

      <AboveFooter
        title="Want to unlock scalability from your data?"
        subtitle='Explore how Scalable Systems can transform your decision-making.'
        buttonText="Contact Us"
      />
    </div>
  );
};
