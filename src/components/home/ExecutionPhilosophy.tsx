import React from 'react';
import Image from 'next/image';
// import PhilosophyCard from '@/components/ui/PhilosophyCard';
// import { PhilosophyStep } from '@/types';

const ExecutionPhilosophy: React.FC = () => {
  // const philosophySteps: PhilosophyStep[] = [
  //   {
  //     id: 1,
  //     title: "Solutioning",
  //     description: "Crafting tailored solutions for your business needs.",
  //     icon: "lightbulb",
  //     position: "left"
  //   },
  //   {
  //     id: 2,
  //     title: "Strategy",
  //     description: "Crafting holistic technology strategies with measurable outcomes.",
  //     icon: "trending_up",
  //     position: "right"
  //   },
  //   {
  //     id: 3,
  //     title: "Engineering",
  //     description: "Designing & Developing end-to-end enterprise systems.",
  //     icon: "settings",
  //     position: "left"
  //   },
  //   {
  //     id: 4,
  //     title: "AI",
  //     description: "Delivering full-stack AI and Generative AI solutions to solve business needs.",
  //     icon: "psychology",
  //     position: "right"
  //   }
  // ];

  return (
    <div className={`w-full flex justify-center items-center px-[24px] py-[50px] tablet:px-[60px] desktop:px-[100px] desktop:py-[80px] bg-black`}>
      <div className='w-full flex flex-col gap-[80px] items-center justify-center'>
        <div className='w-full desktop:w-[830px] flex flex-col gap-[16px] justify-center items-center'>
          <div className='text-white text-center font-neue-regrade font-medium tablet:font-semibold text-[28px] tablet:text-[48px] leading-none'>
            Execution Philosophy
          </div>
          <div className='text-white text-center font-montserrat font-semibold text-[12px] tablet:text-[16px]'>
            From insight to execution, building intelligence that lasts.
          </div>
          <div className='text-body-grey-2 text-center font-montserrat font-normal text-[12px] tablet:text-[16px]'>
            With global expertise, Cogniify turns insights into execution—delivering strategies, engineering, and AI that drive outcomes.
          </div>
        </div>
        <div className="w-full">
          <Image
            src='/images/home/philosophy.png'
            alt='Cogniify Logo'
            width={1000}
            height={200}
            priority
            className='w-full h-auto hidden desktop:block'
          />
          <Image
            src='/images/home/philosophy-sm.png'
            alt='Cogniify Logo'
            width={1000}
            height={500}
            priority
            className='w-full h-auto block desktop:hidden'
          />
        </div>
      </div>
    </div>
  );
};

export default ExecutionPhilosophy;
