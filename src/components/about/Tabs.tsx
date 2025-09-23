'use client';
import React, { useEffect, useState } from 'react';

import AboutUsTab from '@/components/ui/about/AboutUsTab';
import PhilosophyTab from '@/components/ui/about/PhilosophyTab';
import MissionAndVisionTab from '@/components/ui/about/MissionAndVisionTab';
import ValuesTab from '@/components/ui/about/ValuesTab';
import ExpertiseTab from '@/components/ui/about/ExpertiseTab';
import TheTeamTab from '@/components/ui/about/TheTeamTab';
import WhyUsSlider from '@/components/ui/WhyUsSlider';

import { Tab } from '@/types';

const Hero: React.FC = () => {
  const [tabs, setTabs] = useState<Tab[]>([]);
  const [activeTab, setActiveTab] = useState<string>("");

  useEffect(() => {
    fetch("https://ca-website-1.onrender.com/api/pages/")
      .then((res) => res.json())
      .then((pages) => {

        // find page
        const aboutPage = pages.find((p: any) => p.slug === "about-us");
        if (!aboutPage) return;

        const enabledTabs = aboutPage.about_tabs.filter((t: Tab) => t.enabled);
        setTabs(enabledTabs);
        if (enabledTabs.length > 0) {
          setActiveTab(enabledTabs[0].title);
        }
      })
      .catch(console.error);
  }, []);

  const renderTabContent = (title: string) => {
    switch (title) {
      case "About Us":
        return <AboutUsTab />;
      case "Philosophy":
        return <PhilosophyTab />;
      case "Mission & Vision":
        return <MissionAndVisionTab />;
      case "Values":
        return <ValuesTab />;
      case "Expertise":
        return <ExpertiseTab />;
      case "The Team":
        return <TheTeamTab />;
      case "Why Cogniify":
        return <WhyUsSlider />;
      default:
        return <div>{title} content coming soon…</div>;
    }
  };

  return (
    <div className={`w-full flex flex-col gap-[80px] justify-center items-center px-[24px] py-[50px] tablet:px-[60px] desktop:px-[100px] desktop:py-[80px] bg-black`}>
      <div className="w-full flex flex-row flex-wrap gap-[24px] justify-center">
        {tabs.map((tab, index) => (
          <button
            key={index}
            onClick={() => setActiveTab(tab.title)}
            className={`cursor-pointer bg-white/5 text-white text-center font-montserrat font-normal text-[14px] px-[40px] py-[12px] rounded-full border-2 transition-colors ${activeTab === tab.title
              ? 'border-[#634A92]'
              : 'border-white/15'
              }`}
          >
            {tab.title}
          </button>
        ))}
      </div>
      <div className="w-full">
        {renderTabContent(activeTab)}
      </div>
    </div>
  );
};

export default Hero;
