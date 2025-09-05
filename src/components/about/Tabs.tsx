import React, { useState } from 'react';
import Button from '@/components/ui/Button';
import ContactModal from '@/components/ui/ContactModal';
import styles from '../style.module.css';

import AboutUsTab from '@/components/ui/about/AboutUsTab';
import PhilosophyTab from '@/components/ui/about/PhilosophyTab';
import MissionAndVisionTab from '@/components/ui/about/MissionAndVisionTab';
import WhyUsSlider from '@/components/ui/WhyUsSlider';

const Hero: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<'About' | 'Philosophy' | 'Mission & Vision' | 'Values' | 'Experties' | 'Why Cogniify'>('About');
  return (
    <div className={`w-full flex flex-col gap-[80px] justify-center items-center px-[24px] py-[50px] tablet:px-[60px] desktop:px-[100px] desktop:py-[80px] bg-black`}>
      <div className="w-full flex flex-row flex-wrap gap-[24px] justify-center">
        {['About', 'Philosophy', 'Mission & Vision', 'Values', 'Experties', 'Why Cogniify'].map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab as typeof activeTab)}
            className={`bg-white/5 text-white text-center font-montserrat font-normal text-[14px] px-[40px] py-[12px] rounded-full border-2 transition-colors ${
              activeTab === tab
                ? 'border-[#634A92]'
                : 'border-white/15'
            }`}
          >
            {tab}
          </button>
        ))}
      </div>
      <div className="w-full">
        {activeTab === 'About' &&
          <AboutUsTab />
        }
        {activeTab === 'Philosophy' &&
          <PhilosophyTab />
        }
        {activeTab === 'Mission & Vision' &&
          <MissionAndVisionTab />
        }
        {activeTab === 'Why Cogniify' &&
          <WhyUsSlider />
        }
      </div>
    </div>
  );
};

export default Hero;
