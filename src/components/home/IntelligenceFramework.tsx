import React, { useEffect, useState } from 'react';
import IntelligenceCard from '@/components/ui/home/FrameworkCard';

const IntelligenceFramework: React.FC = () => {
  const [sectionTitle, setSectionTitle] = useState("");
  const [sectionSubtitle, setSectionSubtitle] = useState("");
  const [sectionContent, setSectionContent] = useState("");
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://ca-website-1.onrender.com/api/pages/")
      .then((res) => res.json())
      .then((pages) => {

        // find page
        const homePage = pages.find((p: any) => p.slug === "home");
        if (!homePage) return;

        // find section
        const section = homePage.sections.find(
          (s: any) => s.name === "framework"
        );

        if (!section) return;

        setSectionTitle(section.title);
        setSectionSubtitle(section.subtitle);
        setSectionContent(section.content);
        setData(section.services || []);
      })
      .catch(console.error);
  }, []);

  return (
    <div className={`w-full flex justify-center items-center px-[24px] py-[50px] tablet:px-[60px] desktop:px-[100px] desktop:py-[80px] bg-black`}>
      <div className='w-full flex flex-col gap-[80px] items-center justify-center'>
        <div className='w-full desktop:w-[830px] flex flex-col gap-[16px] justify-center items-center'>
          <div className='text-white text-center font-neue-regrade font-medium tablet:font-semibold text-[28px] tablet:text-[48px] leading-none'>
            {sectionTitle}
          </div>
          <div className='text-white text-center font-montserrat font-semibold text-[12px] tablet:text-[16px]'>
            {sectionSubtitle}
          </div>
          <div className='text-body-grey-2 text-center font-montserrat font-normal text-[12px] tablet:text-[16px]'>
            {sectionContent}
          </div>
        </div>
        <div className='h-full grid grid-cols-1 tablet:grid-cols-2 desktop:grid-cols-4 gap-[20px]'>
          {data && data.map((card, index) => (
            <div key={index} className='col-span-1 h-full'>
              <IntelligenceCard card={card} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default IntelligenceFramework;
