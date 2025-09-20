import React from 'react';
import Image from 'next/image';

import { TeamMembers } from '@/types';
import Link from 'next/link';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

interface TeamMemberCardProps {
  member: TeamMembers;
}

const TeamMember: React.FC<TeamMemberCardProps> = ({ member }) => {
  return (
    <div className='relative w-full flex flex-col gap-[32px] bg-black'>
      <div className='w-full justify-center'>
        <Image
          src={member.image}
          alt={member.name}
          width={1000}
          height={1000}
          className='w-full h-[350px] object-cover'
        />
      </div>
      <div className='flex flex-row justify-between items-center'>
        <div className='flex flex-col gap-[5px] justify-center items-start'>
          <div className='text-white text-[16px] font-montserrat font-normal'>
            {member.name}
          </div>
          <div className='text-symbol-purple  text-[16px] font-montserrat font-normal'>
            {member.title}
          </div>
        </div>
        <Link
          target='blank'
          href={member.linkedin}
          className='text-body-grey-2 hover:text-symbol-purple'>
          <LinkedInIcon className='!w-[30px] !h-[30px]' />
        </Link>
      </div>
    </div>
  );
};

export default TeamMember;
