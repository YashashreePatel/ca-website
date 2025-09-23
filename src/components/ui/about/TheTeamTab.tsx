'use client';

import React, { useEffect, useState } from 'react';
import { TeamMembers } from '@/types';
import TeamMember from '../TeamMember';

const TheTeamTab: React.FC = () => {
  const [coreMembers, setCoreMembers] = useState<TeamMembers[]>([]);
  const [advisors, setAdvisors] = useState<TeamMembers[]>([]);

  useEffect(() => {
    fetch("https://ca-website-1.onrender.com/api/team-members/")
      .then((res) => res.json())
      .then((data: TeamMembers[]) => {
        setCoreMembers(data.filter((member) => member.team === "core"));
        setAdvisors(data.filter((member) => member.team === "advisor"));
      })
      .catch(console.error);
  }, []);
  
  return (
    <div className='w-full flex flex-col gap-[80px] justify-center'>
      <div className='w-full flex flex-col gap-[80px] justify-center'>
        <div className='text-white text-center font-neue-regrade font-semibold text-[48px] leading-none'>
          Our Team
        </div>
        <div className='grid grid-cols-1 tablet:grid-cols-2 desktop:grid-cols-3 gap-[80px] justify-center items-stretch'>
          {coreMembers.map((member) => (
              <TeamMember key={member.id} member={member} />
            ))}
        </div>
      </div>

      <div className='w-full flex flex-col gap-[80px] justify-center items-center'>
        <div className='text-white text-center font-neue-regrade font-semibold text-[48px] leading-none'>
          Our Advisors
        </div>
        <div className='w-full desktop:w-2/3 grid grid-cols-1 tablet:grid-cols-2 gap-[80px] justify-center items-stretch'>
          {advisors.map((member) => (
              <TeamMember key={member.id} member={member} />
            ))}
        </div>
      </div>
    </div>
  );
};

export default TheTeamTab;
