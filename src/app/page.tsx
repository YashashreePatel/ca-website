'use client';

import Hero from '@/components/home/Hero';
import TrustedBy from '@/components/home/TrustedBy';
import IntelligenceFramework from '@/components/home/IntelligenceFramework';
import ExecutionPhilosophy from '@/components/home/ExecutionPhilosophy';
import CompliaceCertificate from '@/components/home/ComplianceCertificate';
import WhyUs from '@/components/home/WhyUs';
import DrivingOutcomes from '@/components/home/DrivingOutcomes';
import Testimonials from '@/components/home/Testimonials';
import FeaturedInsights from '@/components/home/FeaturedInsights';
import AboveFooter from '@/components/layout/AboveFooter';

export default function Home() {
  return (
    <div>
        <Hero />
        <TrustedBy />
        <IntelligenceFramework />
        <ExecutionPhilosophy />
        <CompliaceCertificate />
        <DrivingOutcomes />
        <Testimonials />
        <WhyUs />
        <FeaturedInsights />
        <AboveFooter
          title="Activate Your AI Future"
          buttonText="Get Started"
        />
    </div>
  );
}
