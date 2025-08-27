import React, { useState, useRef } from 'react';
import OutcomeCard from '@/components/ui/OutcomeCard';
import { OutcomeCard as OutcomeCardType } from '@/types';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import Slider from 'react-slick';

const DrivingOutcomes: React.FC = () => {
  // Mock data - ready for admin panel
  const outcomeCards: OutcomeCardType[] = [
    {
      id: 1,
      title: "1111How we saved $3.1M in 9 months for a global fintech firm",
      description: "We partnered with a leading fintech enterprise to modernize their data pipelines and optimize cloud infrastructure. The result? A scalable AI solution that reduced operational costs by $3.1M in just 9 months of time.",
      tags: ["AI Design", "Tech Innovation"],
      ctaText: "View case study",
      ctaLink: "/case-studies/fintech-cost-savings",
      image: "/images/home/outcome.jpeg",
      metrics: [
        {
          id: 1,
          value: "85%",
          label: "queries automated by the Gen AI Bot",
          position: { x: 85, y: 15 },
          width: '200px',
          color: 'metric-pink'
        },
        {
          id: 2,
          value: "84K+",
          label: "cases handled",
          position: { x: 75, y: 85 },
          width: '100px',
          color: 'metric-green'
        }
      ]
    },
    {
      id: 2,
      title: "2222How we saved $3.1M in 9 months for a global fintech firm",
      description: "We partnered with a leading fintech enterprise to modernize their data pipelines and optimize cloud infrastructure. The result? A scalable AI solution that reduced operational costs by $3.1M in just 9 months of time.",
      tags: ["AI Design", "Tech Innovation"],
      ctaText: "View case study",
      ctaLink: "/case-studies/fintech-cost-savings",
      image: "/images/home/outcome.jpeg",
      metrics: [
        {
          id: 1,
          value: "85%",
          label: "queries automated by the Gen AI Bot",
          position: { x: 85, y: 15 },
          width: '200px',
          color: 'metric-pink'
        },
        {
          id: 2,
          value: "84K+",
          label: "cases handled",
          position: { x: 75, y: 85 },
          width: '100px',
          color: 'metric-green'
        }
      ]
    },
    {
      id: 3,
      title: "333How we saved $3.1M in 9 months for a global fintech firm",
      description: "We partnered with a leading fintech enterprise to modernize their data pipelines and optimize cloud infrastructure. The result? A scalable AI solution that reduced operational costs by $3.1M in just 9 months of time.",
      tags: ["AI Design", "Tech Innovation"],
      ctaText: "View case study",
      ctaLink: "/case-studies/fintech-cost-savings",
      image: "/images/home/outcome.jpeg",
      metrics: [
        {
          id: 1,
          value: "85%",
          label: "queries automated by the Gen AI Bot",
          position: { x: 85, y: 15 },
          width: '200px',
          color: 'metric-pink'
        },
        {
          id: 2,
          value: "84K+",
          label: "cases handled",
          position: { x: 75, y: 85 },
          width: '100px',
          color: 'metric-green'
        }
      ]
    }
  ];
  
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
    console.log('HIHI', sliderRef.current);
    sliderRef.current?.slickNext();
  };

  const goToPrev = () => {
    sliderRef.current?.slickPrev();
  };

  const goToSlide = (index: number) => {
    sliderRef.current?.slickGoTo(index);
  };

  return (
    <div className={`w-full flex justify-center items-center px-[24px] py-[50px] tablet:px-[60px] desktop:px-[100px] desktop:py-[80px] bg-black`}>
      <div className='w-full flex flex-col gap-[80px] items-center justify-center'>
        <div className='text-white text-center font-neue-regrade font-medium tablet:font-semibold text-[28px] tablet:text-[48px] leading-none'>
          Driving & Delivering Impactful Outcomes
        </div>
        <div className='w-full relative flex flex-col gap-[40px] justify-between items-stretch'>
          <Slider ref={sliderRef} {...settings}>
            {outcomeCards.map((outcome) => (
              <div key={outcome.id} className="px-4">
                <div className="flex justify-center">
                  <OutcomeCard card={outcome} />
                </div>
              </div>
            ))}
          </Slider>
          <div className='relative flex flex-row gap-[40px] items-center justify-center'>
            <button
              onClick={goToPrev}
              className="relative w-[40px] !h-[40px] !rounded-[12px] !bg-black hover:!bg-body-grey-2 !text-white !text-[10px] after:!content-[''] !border-[1px] !border-white/30 !flex !items-center !justify-center">
              <span className="material-symbols-outlined">arrow_back</span>
            </button>
            <div className="flex flex-row gap-[10px]">
              {outcomeCards.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`w-[5px] h-[5px] bg-white rounded-full ${currentSlide === index ? 'w-[40px]' : ''}`}
                />
              ))}
            </div>
            <button
              onClick={goToNext}
              className="!relative !w-[40px] !h-[40px] !rounded-[12px] !bg-black hover:!bg-body-grey-2 !text-white !text-[10px] after:!content-[''] !border-[1px] !border-white/30 !flex !items-center !justify-center">
              <span className="material-symbols-outlined">arrow_forward</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};


export default DrivingOutcomes;
