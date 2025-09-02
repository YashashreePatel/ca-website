import React, { useState, useRef, useEffect } from 'react';
import Button from '@/components/ui/Button';
import ContactModal from '@/components/ui/ContactModal';
import TestimonialCard from '@/components/ui/TestimonialCard';
import { Testimonial } from '@/types';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Testimonials: React.FC = () => {
  const [isClient, setIsClient] = useState(false);
  const [windowWidth, setWindowWidth] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    setIsClient(true);
    setWindowWidth(window.innerWidth);
    
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Mock data - ready for admin panel
  const testimonials: Testimonial[] = [
    {
      id: 2,
      name: "James Rodriguez",
      role: "Marketing Director",
      company: "Spenga",
      industry: 'Health & Fitness / Wellness',
      content: "Cogniify Analytics transformed our marketing strategy. Their data-driven approach helped us separate and optimize leads from different agencies, giving us unprecedented insights into our marketing performance",
      avatar: "/images/home/testimonials/spenga.png",
      tags: ["Data Driven", "Marketing Optimization", "Lead Insights"]
    },
    {
      id: 3,
      name: "Eli Meerson",
      role: "Founder",
      company: "TokenQuest",
      industry: 'Blockchain / Crypto',
      content: "Cogniify contributed technical support during our early development stage and helped resolve some key issues in the build. Their blockchain understanding was useful in navigating toward audit readiness",
      avatar: "/images/home/testimonials/token-quest.png",
      tags: ["Technical Support", "Blockchain Expertise", "Audit Readiness"]
    },
    {
      id: 4,
      name: "Versha Singh",
      role: "Fractional Chief Product Officer",
      company: "Singh Advisories",
      industry: 'Consulting / Product Strategy',
      content: "Cogniify contributed technical support during our early development stage and helped resolve some key issues in the build. Their blockchain understanding was useful in navigating toward audit readiness",
      avatar: "/images/home/testimonials/singh-advisories.png",
      tags: ["Trusted Partner", "Product Innovation", "Engineering Solutions"]
    },
  ];

  const sliderRef = useRef<Slider>(null);
  const [currentSlide, setCurrentSlide] = useState(0);

  const getSettings = () => {
    const baseSettings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 1,
      arrows: false,
      centerMode: true,
      centerPadding: '0px',
      beforeChange: (current: number, next: number) => {
        setCurrentSlide(next);
      },
    };

    if (windowWidth < 1024) {
      return {
        ...baseSettings,
        slidesToShow: 1,
        slidesToScroll: 1,
        centerMode: true,
      };
    } else {
      return {
        ...baseSettings,
        slidesToShow: 3,
        slidesToScroll: 1,
        centerMode: true,
      };
    }
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
    <div className={`relative w-full flex justify-center items-center px-[24px] py-[50px] tablet:px-[60px] desktop:px-[0px] desktop:py-[80px] bg-black overflow-hidden`}>
      <div className='relative w-full flex flex-col gap-[80px] items-center justify-center'>
        <div className='w-full desktop:w-[830px] flex flex-col gap-[16px] justify-center items-center'>
          <div className='text-white text-center font-neue-regrade font-medium tablet:font-semibold text-[28px] tablet:text-[48px] leading-none'>
            Testimonials
          </div>
          <div className='text-body-grey-2 text-center font-montserrat font-normal text-[16px]'>
            Hear our client what to say about our work.
          </div>
          <Button onClick={() => setIsModalOpen(true)} variant='primary'>Connect with Us</Button>
        </div>
        <div className='coverflow-slider w-full relative flex flex-col gap-[40px] justify-between items-stretch'>
          {isClient && windowWidth > 0 && (
            <Slider ref={sliderRef} {...getSettings()}>
              {testimonials.map((testimonial) => (
                <div key={testimonial.id} className="slide-wrapper">
                  <div className="slide-content flex justify-center">
                    <TestimonialCard testimonial={testimonial} />
                  </div>
                </div>
              ))}
            </Slider>
          )}
          <div className='relative flex flex-row gap-[40px] items-center justify-center'>
            <button
              onClick={goToPrev}
              className="relative w-[40px] h-[40px] rounded-[12px] bg-black hover:bg-body-grey-2 text-white text-[10px] after:content-[''] border-[1px] border-white/30 flex items-center justify-center">
              <span className="material-symbols-outlined">arrow_back</span>
            </button>
            <div className="flex flex-row gap-[10px]">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`w-[5px] h-[5px] bg-white rounded-full transition-all duration-300 ${currentSlide === index ? 'w-[40px]' : ''}`}
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
      </div>
      <ContactModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
      />
    </div>
  );
};

export default Testimonials;
