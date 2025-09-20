import React from 'react';
import Image from 'next/image';

import { InsightArticle } from '@/types';

interface InsightCardProps {
  article: InsightArticle;
}

const InsightCard: React.FC<InsightCardProps> = ({ article }) => {
  return (
    <div className='relative flex flex-col gap-[32px] bg-black'>
      <div className='w-full justify-center'>
        <Image
          src={article.image}
          alt={article.title}
          width={1000}
          height={1000}
          className='w-full h-auto object-contain'
        />
      </div>
      <div className='flex flex-col gap-[24px] justify-center items-start'>
        <div className='flex flex-col gap-[12px] justify-center items-start'>
          <div className='flex flex-row gap-[12px] items-center justify-center text-symbol-purple text-[14px] font-montserrat font-normal'>
            <span>{article.date}</span>
            <span>•</span>
            <span>{article.readTime}</span>
          </div>
          <div className='flex flex-row gap-[5px] justify-between items-center'>
            <div className='text-white font-neue-regrade font-semibold text-[20px] leading-none'>{article.title}</div>
            <div className='h-[24px] w-auto group-hover:opacity-100 transition-opacity'>
              <span className='material-symbols-outlined text-symbol-purple'>arrow_outward</span>
            </div>
          </div>
          <div className='text-body-grey-2 font-montserrat font-normal text-[16px]'>
            {article.description}
          </div>
        </div>
        <div className='flex flex-wrap gap-[16px]'>
          {article.tags.map((tag, index) => (
            <div
              key={index}
              className='px-[12px] py-[8px] bg-tag-bg text-white text-[14px] font-montserrat font-light rounded-[6px] border border-tag-border'
            >
              {tag}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default InsightCard;
