import React from 'react';
import InsightCard from '@/components/ui/InsightCard';
import { InsightArticle } from '@/types';

const FeaturedInsights: React.FC = () => {
  // Mock data - ready for admin panel
  const featuredArticles: InsightArticle[] = [
    {
      id: 1,
      title: "Unlocking Value with Advanced Analytics",
      description: "Strategies to move beyond POCs and deploy enterprise AI systems with speed and governance.",
      image: "/images/home/insights/analytics.png",
      date: "11 Jan 2025",
      readTime: "7 mins read",
      tags: ["Leadership", "Management", "Presentations"],
      link: "/insights/unlocking-value-advanced-analytics"
    },
    {
      id: 2,
      title: "Scaling AI from Pilot to Production in a few months",
      description: "How modern analytics drives better decisions, cost savings, and faster growth across industries.",
      image: "/images/home/insights/scaling-ai.png",
      date: "11 Jan 2025",
      readTime: "7 mins read",
      tags: ["Leadership", "Presentations"],
      link: "/insights/scaling-ai-pilot-production"
    },
    {
      id: 3,
      title: "Cloud-Native Data Infrastructure: A Blueprint",
      description: "Key principles for designing secure, scalable, and future-ready data foundations.",
      image: "/images/home/insights/cloud-native.png",
      date: "11 Jan 2025",
      readTime: "7 mins read",
      tags: ["Leadership", "Management"],
      link: "/insights/cloud-native-data-infrastructure"
    }
  ];

  return (
    <div className={`w-full flex justify-center items-center px-[24px] py-[50px] tablet:px-[60px] desktop:px-[100px] desktop:py-[80px] bg-black`}>
      <div className='w-full flex flex-col gap-[80px] items-center justify-center'>
        <div className='text-white text-center font-neue-regrade font-medium tablet:font-semibold text-[28px] tablet:text-[48px] leading-none'>
          Featured Insights
        </div>
        <div className='flex flex-col tablet:flex-row gap-[30px] desktop:gap-[80px] justify-between items-stretch'>
          {featuredArticles.map((article) => (
            <InsightCard key={article.id} article={article} />
          ))}
        </div> 
      </div>
    </div>
  );
};

export default FeaturedInsights;
