import React, { useState, useRef, useEffect } from 'react';
import Button from '@/components/ui/Button';
import ContactModal from '@/components/ui/ContactModal';
import TestimonialCard from '@/components/ui/home/TestimonialCard';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Testimonials: React.FC = () => {
  const [isClient, setIsClient] = useState(false);
  const [windowWidth, setWindowWidth] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const [sectionTitle, setSectionTitle] = useState("");
  const [sectionSubtitle, setSectionSubtitle] = useState("");
  const [sectionContent, setSectionContent] = useState("");
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://ca-website-1.onrender.com/api/pages/")
    fetch("/api/pages/")
      .then((res) => res.json())
      .then((pages) => {

        // find page
        const homePage = pages.find((p: any) => p.slug === "home");
        if (!homePage) return;
        console.log('homepagehihi', homePage);
        // find section
        const section = homePage.sections.find(
          (s: any) => s.name === "testimonials"
        );
        
        if (!section) return;
        console.log('hihi', section);
        setSectionTitle(section.title);
        setSectionSubtitle(section.subtitle);
        setSectionContent(section.content);
        setData(section.testimonials || []);
        console.log('datatttta', data);
      })
      .catch(console.error);
  }, []);

  useEffect(() => {
    setIsClient(true);
    setWindowWidth(window.innerWidth);
    
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

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
            {sectionTitle}
          </div>
          <div className='text-body-grey-2 text-center font-montserrat font-normal text-[16px]'>
            {sectionContent}
          </div>
          <Button onClick={() => setIsModalOpen(true)} variant='primary'>Connect with Us</Button>
        </div>
        <div className='coverflow-slider w-full relative flex flex-col gap-[40px] justify-between items-stretch'>
          {isClient && windowWidth > 0 && (
            <Slider ref={sliderRef} {...getSettings()}>
              {data && data.map((testimonial, index) => (
                <div key={index} className="slide-wrapper">
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
              className="cursor-pointer relative w-[40px] h-[40px] rounded-[12px] bg-black hover:bg-body-grey-2 text-white text-[10px] after:content-[''] border-[1px] border-white/30 flex items-center justify-center">
              <span className="material-symbols-outlined">arrow_back</span>
            </button>
            <div className="flex flex-row gap-[10px]">
              {data && data.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`cursor-pointer w-[5px] h-[5px] bg-white rounded-full transition-all duration-300 ${currentSlide === index ? 'w-[40px]' : ''}`}
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
      <ContactModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
      />
    </div>
  );
};

export default Testimonials;
