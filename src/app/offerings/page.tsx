'use client';

import React, { useEffect, useState } from 'react';
import IntelligenceCard from '@/components/ui/home/FrameworkCard';

export default function Offerings() {
  const [sectionTitle, setSectionTitle] = useState("");
  const [sectionSubtitle, setSectionSubtitle] = useState("");
  const [sectionContent, setSectionContent] = useState("");
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("http://127.0.0.1:8000/api/pages/")
      .then((res) => res.json())
      .then((pages) => {

        // find page
        const homePage = pages.find((p: any) => p.slug === "offerings");
        if (!homePage) return;

        // find section
        const section = homePage.sections.find(
          (s: any) => s.name === "landing"
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
    <div className={`w-full flex flex-col gap-[80px] items-center justify-center px-[24px] pb-[80px] pt-[180px] tablet:px-[60px] desktop:px-[100px] bg-black`}>
      <div className='text-white text-center font-neue-regrade font-semibold text-[48px] leading-none'>
        {sectionTitle}
      </div>
      <div className='flex flex-col gap-[24px] font-montserrat text-[16px]'>
        <div className='font-semibold text-[#AE98FF]'>
          At Cogniify, our offerings are anchored in the 4S Intelligence Framework—Sharper Analytics, Smarter AI, Scalable Systems, and Secured Governance. Together, they form a holistic approach that transforms data into clarity, intelligence into impact, and vision into measurable results.
        </div>
        <div className='font-normal text-white'>
          Unlike traditional consultancies, we don&apos;t deliver siloed projects. We build end-to-end ecosystems that stay true to our philosophy of clarity, trust, and outcomes. Each “S” represents more than a offering—it represents a principle of transformation. Sharper Analytics ensures leaders see the right signals. Smarter AI transforms potential into performance. Scalable Systems embed resilience and agility into enterprises. Secured Governance safeguards innovation with trust and accountability.
        </div>
        <div className='font-normal text-white'>
          With Cogniify, you don&apos;t just get capabilities—you get a partner who designs intelligence that grows, adapts, and delivers sustained business value.
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
  );
};
