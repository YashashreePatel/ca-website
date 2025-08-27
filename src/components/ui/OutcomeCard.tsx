// components/home/OutcomeCard.tsx
import React from 'react';
import Button from '@/components/ui/Button';
import { OutcomeCard as OutcomeCardType, OutcomeMetric } from '@/types';

interface OutcomeCardProps {
  card: OutcomeCardType;
}

const MetricBadge: React.FC<{ metric: OutcomeMetric }> = ({ metric }) => {
  return (
    <div
      className={`absolute w-[${metric.width}] z-10 pointer-events-none`}
      style={{
        left: `${metric.position.x}%`,
        top: `${metric.position.y}%`,
        transform: 'translate(-50%, -50%)'
      }}
    >

        <div className={`flex flex-col gap-[4px] px-[8px] py-[4px] font-montserrat bg-white/80 rounded-[6px]`}>
          <div className={`text-[20px] font-semibold text-${metric.color} leading-none`}>{metric.value}</div>
          <div className='text-[12px] fotn-normal text-black'>{metric.label}</div>
        </div>
    </div>
  );
};

const OutcomeCard: React.FC<OutcomeCardProps> = ({ card }) => {
  return (
    <div className='relative items-center w-[350px] tablet:w-[9px] desktop:w-[1080px] flex flex-col-reverse tablet:flex-row items-start gap-[80px] p-[40px] bg-black border-[1px] border-brand-purple/20 rounded-[16px]'>
      <div className='flex flex-col gap-[24px] justify-center items-start'>
        <div className='flex flex-wrap gap-[16px]'>
          {card.tags.map((tag, index) => (
            <div
              key={index}
              className='px-[12px] py-[8px] bg-tag-bg text-white text-[14px] font-montserrat font-light rounded-[6px] border border-tag-border'
            >
              {tag}
            </div>
          ))}
        </div>
        <div className='flex flex-col gap-[12px] justify-center items-start'>
          <div className='text-white font-neue-regrade font-semibold text-[20px] leading-none'>
            {card.title}
          </div>
          <div className='text-body-grey-2 font-montserrat font-normal text-[16px]'>
            {card.description}
          </div>
        </div>

        <Button variant='primary'>View Case Study</Button>
      </div>
      <div className='relative w-full justify-center'>
        <img
          src={card.image}
          alt={card.title}
          className='w-full h-auto object-contain rounded-[8px]'
        />
        {card.metrics.map((metric) => (
          <MetricBadge key={metric.id} metric={metric} />
        ))}
      </div>
    </div>
  );
};

export default OutcomeCard;
