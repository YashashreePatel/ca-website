'use client';

import React, { useState, useRef } from 'react';
import Image from 'next/image';

import styles from '../style.module.css';
import { CompanyValues, CompanyImpacts, CompanyNumerics } from '@/types';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Button from '@/components/ui/Button';
import ContactModal from '@/components/ui/ContactModal';

const ValuesSlide: React.FC<{ values: CompanyValues }> = ({ values }) => {
  const renderValueItem = (item: { id: number; title: string; description: string }) => (
    <div key={item.id} className='w-full flex flex-col gap-[16px] justify-center items-center'>
      <div className='text-white text-center font-neue-regrade font-semibold text-[16px] leading-none'>
        {item.title}
      </div>
      <div className='text-body-grey-2 text-center font-montserrat font-normal text-[16px]'>
        {item.description}
      </div>
    </div>
  );

  const leftColumn = values.data.slice(0, 2);
  const centerColumn = values.data.slice(2, 3);
  const rightColumn = values.data.slice(3, 6);

  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className='relative w-full flex flex-col items-center gap-[40px] p-[40px] bg-black border-[1px] border-brand-purple/20 rounded-[16px]'>
      <div className='text-symbol-purple text-center font-montserrat font-semibold text-[20px] leading-none'>
        {values.title}
      </div>

      <div className='flex flex-col desktop:flex-row gap-[50px] desktop:gap-[80px] items-center justify-end'>
        <div className='flex flex-col gap-[50px] items-center justify-end'>
          {leftColumn.map(renderValueItem)}
        </div>

        <div className='flex flex-col gap-[50px] items-center justify-end'>
          {centerColumn.map(renderValueItem)}
          <Image
            src={values.image}
            alt={`Slide ${values.slide}`}
            width={160}
            height={48}
            priority
            className='w-full h-auto'
          />
        </div>

        <div className='flex flex-col gap-[50px] items-center justify-end'>
          {rightColumn.map(renderValueItem)}
        </div>
      </div>

      <Button onClick={() => setIsModalOpen(true)} variant='primary' iconSrc='/images/icons/sparkle-fill.svg' iconAlt='Arrow'>Let&apos;s Talk Impact</Button>
      <ContactModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </div>
  );
};

const ImpactSlide: React.FC<{ impacts: CompanyImpacts }> = ({ impacts }) => {
  const renderValueItem = (item: { id: number; title: string; description: string }) => (
    <div key={item.id} className='w-full flex flex-col gap-[16px] justify-center items-start'>
      <div className='text-white text-left font-neue-regrade font-semibold text-[16px] leading-none'>
        {item.title}
      </div>
      <div className='text-body-grey-2 text-left font-montserrat font-normal text-[16px]'>
        {item.description}
      </div>
    </div>
  );

  const leftColumn = impacts.data.slice(0, 2);
  const rightColumn = impacts.data.slice(2, 5);

  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className='relative w-full flex flex-col items-center gap-[40px] p-[40px] bg-black border-[1px] border-brand-purple/20 rounded-[16px]'>
      <div className='text-symbol-purple text-center font-montserrat font-semibold text-[20px] leading-none'>
        {impacts.title}
      </div>
      <div className='flex flex-row flex-wrap gap-[20px] items-center justify-center'>
        {impacts.numericData.map((item, index) => (
          <div key={index} className='flex flex-row gap-[12px] items-center justify-center px-[24px] py-[12px] border-[1px] border-white/20 rounded-[16px]'>
            <div className='text-white text-center font-neue-regrade font-semibold  text-[32px] leading-none'>
              {item.number}
            </div>
            <div className='text-white text-left font-montserrat font-normal text-[16px]'>
              {item.description}
            </div>
          </div>
        ))}
      </div>
      <div className='flex flex-col desktop:flex-row gap-[50px] desktop:gap-[80px] items-center justify-end'>
        <div className='flex flex-col gap-[50px] items-center justify-end'>
          {leftColumn.map(renderValueItem)}
        </div>
        <div className='flex flex-col gap-[50px] items-center justify-end'>
          <Image
            src={impacts.image}
            alt={`${impacts.slide}`}
            width={160}
            height={48}
            priority
            className='w-full h-auto'
          />
        </div>
        <div className='flex flex-col gap-[50px] items-center justify-end'>
          {rightColumn.map(renderValueItem)}
        </div>
      </div>
      <Button onClick={() => setIsModalOpen(true)} variant='primary' iconSrc='/images/icons/sparkle-fill.svg' iconAlt='Arrow'>Let&apos;s Talk Impact</Button>
      <ContactModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </div>
  );
};

const NumericSlide: React.FC<{ numerics: CompanyNumerics }> = ({ numerics }) => {
  const renderValueItem = (item: { id: number; icon: string; number: string; description: string }) => (
    <div key={item.id} className='flex flex-col gap-[8px] justify-center items-center'>
      <div className='w-full flex flex-row gap-[16px] items-center justify-center'>
        <img
          src={item.icon}
          alt={item.number}
          className='w-[40px] h-[40px] object-cover'
        />
        <div className='text-symbol-purple font-neue-regrade font-semibold text-[40px] leading-none'>
          {item.number}
        </div>
      </div>
      <div className='text-white text-center font-montserrat font-normal text-[16px]'>
        {item.description}
      </div>
    </div>
  );

  const topRow = numerics.data.slice(0, 3);
  const bottomRow = numerics.data.slice(3, 6);

  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className='relative w-full flex flex-col items-center gap-[40px] p-[40px] bg-black border-[1px] border-brand-purple/20 rounded-[16px]'>
      <div className='text-symbol-purple text-center font-montserrat font-semibold text-[20px] leading-none'>
        {numerics.title}
      </div>
      <div className='w-full flex flex-col gap-[50px] desktop:gap-[80px] items-center justify-center'>
        <div className='w-full flex flex-row flex-wrap gap-[50px] items-center justify-evenly'>
          {topRow.map(renderValueItem)}
        </div>
        <div className='w-full flex flex-row flex-wrap gap-[50px] items-center justify-evenly'>
          {bottomRow.map(renderValueItem)}
        </div>
      </div>
      <Button onClick={() => setIsModalOpen(true)} variant='primary' iconSrc='/images/icons/sparkle-fill.svg' iconAlt='Arrow'>Let&apos;s Talk Impact</Button>
      <ContactModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </div>
  );
};

const WhyUsSlider: React.FC = () => {
  const [activeItem, setActiveItem] = useState<number | null>(null);

  const slide1: CompanyValues = {
    slide: 1,
    title: 'Elevating Intelligence. Accelerating impact. Building what truly matters.',
    image: '/images/home/why-us/slide1.png',
    data: [
      {
        id: 1,
        title: "Lead with purpose, not platforms",
        description: "Every engagement begins with a single focus: what will truly move the needle for your business—not trends, but what matters most.",
      },
      {
        id: 2,
        title: "Lead boldly, with empathy",
        description: "We prioritize depth with scale and outcomes over outputs—because real transformation is built through partnership, not mass production.",
      },
      {
        id: 3,
        title: "Design for impact, not complexity",
        description: "While others highlight technical depth, we focus on business clarity—turning insights into action, systems into enablers, and outcomes into results.",
      },
      {
        id: 4,
        title: "Not your typical AI firm",
        description: "We're a new kind of partner, focused on turning AI's potential into real, measurable business impact.",
      },
      {
        id: 5,
        title: "Co-create, not just deliver",
        description: "Working shoulder-to-shoulder with your teams, we align strategy and technology with your people, culture, and purpose.",
      }
    ]
  };

  const slide2: CompanyImpacts = {
    slide: 2,
    title: 'Turning intelligence into impact. Human-first. Future-ready.',
    image: '/images/home/why-us/slide2.png',
    numericData: [
      {
        id: 1,
        number: '12+',
        description: 'years of cumulative experience'
      },
      {
        id: 2,
        number: '40+',
        description: 'projects delivered'
      },
      {
        id: 3,
        number: '2',
        description: 'Global locations'
      },
      {
        id: 4,
        number: '5+',
        description: 'Industries served'
      }
    ],
    data: [
      {
        id: 1,
        title: "Solutioning",
        description: "Ensure data integrity with enterprise-grade security",
      },
      {
        id: 2,
        title: "Engineering",
        description: "Accelerate time-to-value with fast, seamless",
      },
      {
        id: 3,
        title: "Strategy",
        description: "Ensure data integrity with enterprise-grade security",
      },
      {
        id: 4,
        title: "AI",
        description: "Harness the power of AI across your organization",
      }
    ]
  };

  const slide3: CompanyNumerics = {
    slide: 3,
    title: 'Need a title here',
    data: [
      {
        id: 1,
        icon: '/images/home/why-us/icons/desktop.png',
        number: '50+',
        description: 'Dashboards'
      },
      {
        id: 2,
        icon: '/images/home/why-us/icons/tabs.png',
        number: '150+',
        description: 'Data Views'
      },
      {
        id: 3,
        icon: '/images/home/why-us/icons/cpu.png',
        number: '90%',
        description: 'Precision in Model Performance'
      },
      {
        id: 4,
        icon: '/images/home/why-us/icons/trend-down.png',
        number: '>25+',
        description: 'Reductions in Infrastructure Spend'
      },
      {
        id: 5,
        icon: '/images/home/why-us/icons/head-circuit.png',
        number: '100+',
        description: 'Men Hours Saved per Month'
      },
      {
        id: 6,
        icon: '/images/home/why-us/icons/dollar.png',
        number: '50M+',
        description: 'Saved in Cost'
      }
    ]
  };

  const sliderRef = useRef<Slider>(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
    centerMode: true,
    centerPadding: '0px',
    beforeChange: (current: number, next: number) => {
      setCurrentSlide(next);
    },
  };
  const goToNext = () => {
    sliderRef.current?.slickNext();
  };

  const goToPrev = () => {
    sliderRef.current?.slickPrev();
  };

  const goToSlide = (index: number) => {
    sliderRef.current?.slickGoTo(index);
  };

  return (
    <div className='block coverflow-slider w-full h-full relative flex flex-col gap-[40px] justify-between items-stretch'>
      <Slider ref={sliderRef} {...settings}>
        <div key={0} className="slide-wrapper h-full">
          <div className="slide-content flex justify-center">
            <ValuesSlide values={slide1} />
          </div>
        </div>
        <div key={1} className="slide-wrapper h-full">
          <div className="slide-content flex justify-center">
            <ImpactSlide impacts={slide2} />
          </div>
        </div>
        <div key={2} className="slide-wrapper h-full">
          <div className="slide-content flex justify-center">
            <NumericSlide numerics={slide3} />
          </div>
        </div>
      </Slider>
      <div className='relative flex flex-row gap-[40px] mt-[40px] items-center justify-center'>
        <button
          onClick={goToPrev}
          className="relative w-[40px] h-[40px] rounded-[12px] bg-black hover:bg-body-grey-2 text-white text-[10px] after:content-[''] border-[1px] border-white/30 flex items-center justify-center">
          <span className="material-symbols-outlined">arrow_back</span>
        </button>
        <div className="flex flex-row gap-[10px]">
          {[0, 1, 2].map((index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-[5px] h-[5px] bg-white rounded-full ${currentSlide === index ? 'w-[40px]' : ''}`}
            />
          ))}
        </div>
        <button
          onClick={goToNext}
          className="relative w-[40px] h-[40px] rounded-[12px] bg-black hover:bg-body-grey-2 text-white text-[10px] after:content-[''] border-[1px] border-white/30 flex items-center justify-center">
          <span className="material-symbols-outlined">arrow_forward</span>
        </button>
      </div>
    </div>

  );
};

export default WhyUsSlider;
