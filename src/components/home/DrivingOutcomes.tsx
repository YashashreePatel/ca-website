import React, { useEffect, useState, useRef } from 'react';
import OutcomeCard from '@/components/ui/home/OutcomeCard';
import { OutcomeCard as OutcomeCardType } from '@/types';

import Slider from 'react-slick';

const DrivingOutcomes: React.FC = () => {
  const [sectionTitle, setSectionTitle] = useState("");
  const [sectionSubtitle, setSectionSubtitle] = useState("");
  const [sectionContent, setSectionContent] = useState("");
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://ca-website-1.onrender.com/api/pages/")
      .then((res) => res.json())
      .then((pages) => {

        // find home page
        const homePage = pages.find((p: any) => p.slug === "home");
        if (!homePage) return;

        // find testimonial section
        const section = homePage.sections.find(
          (s: any) => s.name === "outcomes"
        );
        
        if (!section) return;

        setSectionTitle(section.title);
        setSectionSubtitle(section.subtitle);
        setSectionContent(section.content);
        setData(section.case_studies || []);
      })
      .catch(console.error);
  }, []);

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
    <div className={`w-full flex justify-center items-center px-[24px] py-[50px] tablet:px-[60px] desktop:px-[100px] desktop:py-[80px] bg-black`}>
      <div className='w-full flex flex-col gap-[80px] items-center justify-center'>
        <div className='text-white text-center font-neue-regrade font-medium tablet:font-semibold text-[28px] tablet:text-[48px] leading-none'>
          {sectionTitle}
        </div>
        <div className='coverflow-slider w-full relative flex flex-col gap-[40px] justify-between items-stretch'>
          <Slider ref={sliderRef} {...settings}>
            {data && data.map((outcome, index) => (
              <div key={index} className="slide-wrapper">
                <div className="slide-content flex justify-center">
                  <OutcomeCard card={outcome} />
                </div>
              </div>
            ))}
          </Slider>
          <div className='relative flex flex-row gap-[40px] items-center justify-center'>
            <button
              onClick={goToPrev}
              className="cursor-pointer relative w-[40px] h-[40px] rounded-[12px] bg-black hover:bg-body-grey-2 text-white text-[10px] after:content-[''] border-[1px] border-white/30 flex items-center justify-center">
              <span className="material-symbols-outlined">arrow_back</span>
            </button>
            <div className="flex flex-row gap-[10px]">
              {data && data.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`cursor-pointer w-[5px] h-[5px] bg-white rounded-full ${currentSlide === index ? 'w-[40px]' : ''}`}
                />
              ))}
            </div>
            <button
              onClick={goToNext}
              className="cursor-pointer relative w-[40px] h-[40px] rounded-[12px] bg-black hover:bg-body-grey-2 text-white text-[10px] after:content-[''] border-[1px] border-white/30 flex items-center justify-center">
              <span className="material-symbols-outlined">arrow_forward</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};


export default DrivingOutcomes;
