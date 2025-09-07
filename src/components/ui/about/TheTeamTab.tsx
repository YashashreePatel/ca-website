import React, { useState } from 'react';

const TheTeamTab: React.FC = () => {
  return (

    <div className='w-full flex flex-col gap-[80px] justify-center'>
      <div className='w-full flex flex-col gap-[80px] justify-center'>
        <div className='text-white text-center font-neue-regrade font-semibold text-[48px] leading-none'>
          The Team
        </div>
        <div className='font-montserrat text-[16px] font-normal text-white'>
          content for the team
        </div>
      </div>

      <div className='w-full flex flex-col gap-[80px] justify-center'>
        <div className='text-white text-center font-neue-regrade font-semibold text-[48px] leading-none'>
          The Advisors
        </div>
        <div className='font-montserrat text-[16px] font-normal text-white'>
          content for the advisors
        </div>
      </div>
    </div>
  );
};

export default TheTeamTab;
