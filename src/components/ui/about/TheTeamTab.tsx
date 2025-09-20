import React from 'react';
import { TeamMembers } from '@/types';
import TeamMember from '../TeamMember';

const TheTeamTab: React.FC = () => {
  const teamMembers: TeamMembers[] = [
    {
      id: 1,
      name: 'Akshesh Shah',
      title: 'CEO',
      team: 'core',
      image: '/images/about/team/akshesh.jpeg',
      linkedin: 'https://www.linkedin.com/in/ak-shah'
    },
    {
      id: 2,
      name: 'Prerak Shah',
      title: 'CTO',
      team: 'core',
      image: '/images/about/team/prerak.jpg',
      linkedin: 'https://www.linkedin.com/in/prerakmshah97'
    },
    {
      id: 3,
      name: 'Abhishek Mishra',
      title: 'COO',
      team: 'core',
      image: '/images/about/team/abhishek.jpeg',
      linkedin: 'https://www.linkedin.com/in/abhixm'
    },
    {
      id: 4,
      name: 'Rohan Rekhi',
      title: 'Leader Data Engineering at BlackRock',
      team: 'advisor',
      image: '/images/about/team/rohan.jpeg',
      linkedin: 'https://www.linkedin.com/in/rohan-rekhi-46789b3/'
    },
    {
      id: 5,
      name: 'Santha Nandakumar',
      title: 'Director of Software Engineering at Captial One',
      team: 'advisor',
      image: '/images/about/team/santha.jpeg',
      linkedin: 'https://www.linkedin.com/in/santha-nandakumar/'
    },
    {
      id: 6,
      name: 'Vinoj Kumar',
      title: 'Vice President of Engineering at Upwork',
      team: 'advisor',
      image: '/images/about/team/vinoj.jpeg',
      linkedin: 'https://www.linkedin.com/in/vinojnkumar/'
    },
    {
      id: 7,
      name: 'Hemanth Venkateswara',
      title: 'Assistant Professor at Georgia State University',
      team: 'advisor',
      image: '/images/about/team/hemanth.jpeg',
      linkedin: 'https://www.linkedin.com/in/hemanth-venkateswara-360a093/'
    }
  ]
  return (
    <div className='w-full flex flex-col gap-[80px] justify-center'>
      <div className='w-full flex flex-col gap-[80px] justify-center'>
        <div className='text-white text-center font-neue-regrade font-semibold text-[48px] leading-none'>
          Our Team
        </div>
        <div className='grid grid-cols-1 tablet:grid-cols-2 desktop:grid-cols-3 gap-[80px] justify-center items-stretch'>
          {teamMembers
            .filter((member) => member.team === 'core')
            .map((member) => (
              <TeamMember key={member.id} member={member} />
            ))}
        </div>
      </div>

      <div className='w-full flex flex-col gap-[80px] justify-center items-center'>
        <div className='text-white text-center font-neue-regrade font-semibold text-[48px] leading-none'>
          Our Advisors
        </div>
        <div className='w-full desktop:w-2/3 grid grid-cols-1 tablet:grid-cols-2 gap-[80px] justify-center items-stretch'>
          {teamMembers
            .filter((member) => member.team === 'advisor')
            .map((member) => (
              <TeamMember key={member.id} member={member} />
            ))}
        </div>
      </div>
    </div>
  );
};

export default TheTeamTab;
