import React from 'react';
import { RevealCard } from '@/types';
import HoverRevealCard from '../HoverRevealCard';

const ExpertiseTab: React.FC = () => {
  const revealCards: RevealCard[] = [
    {
      id: 1,
      title: 'Intelligent AI Solutions & Agentic Systems',
      description: "From predictive ML to advanced agentic AI, Cogniify designs systems that don't just compute—they adapt, act, and deliver outcomes responsibly. These solutions integrate seamlessly with business processes, enabling enterprises to automate intelligently while staying human-first. For clients, this means moving beyond static algorithms to intelligent systems that collaborate, evolve, and generate measurable impact—AI built not just to work, but to work with purpose."
    },
    {
      id: 2,
      title: 'End-to-End Model Lifecycle Management',
      description: "AI doesn't stop at building a model—it's about ensuring performance in the real world. Cogniify builds comprehensive pipelines covering development, deployment, CI/CD, retraining, and monitoring. By keeping models production-ready and accurate over time, we help enterprises avoid AI decay and maximize value. This lifecycle approach ensures that intelligence is not a one-time effort, but a continuously improving capability driving decisions and outcomes at scale.",
    },
    {
      id: 3,
      title: 'Scalable MLOps & AIOps Frameworks',
      description: "Scaling AI requires more than ambition—it requires robust engineering. Cogniify automates machine learning workflows, monitoring, and performance tuning, while integrating with AIOps for intelligent observability. This means AI systems don't just work in pilots—they scale reliably across enterprise environments. For our clients, scalable MLOps delivers speed, efficiency, and confidence, ensuring models are consistent, accurate, and always ready to power smarter operations.",
    },
    {
      id: 4,
      title: 'Secure, Enterprise-Ready Tech Stack',
      description: 'Enterprises need AI that scales responsibly, without compromising security or compliance. Cogniify builds and operationalizes AI/ML solutions on secure, cloud-native architectures designed for resilience. With compliance and scalability at the core, we enable organizations to innovate without risk. Clients gain the confidence to expand AI capabilities knowing every layer—from data handling to deployment—is engineered for both performance and trust.',
    },
    {
      id: 5,
      title: 'Robust Data Governance & Responsible AI',
      description: 'Trust is the cornerstone of AI adoption. Cogniify implements frameworks for data quality, privacy, ethical AI, explainability, and compliance with regulations such as GDPR, HIPAA, and SOC2. By embedding governance into every solution, we help enterprises ensure accountability and transparency. Clients benefit from AI that is not only powerful, but also trustworthy—intelligence that can be scaled with confidence, accepted by stakeholders, and aligned with business ethics.',
    },
    {
      id: 6,
      title: 'Cloud-Native Architecture & Automation',
      description: "AI at scale needs infrastructure that grows as fast as the business. Cogniify designs and deploys workloads across hybrid and multi-cloud environments, with automated provisioning, Infrastructure-as-Code, and seamless governance. This ensures flexibility, cost efficiency, and resilience. For clients, it means infrastructure that doesn't hold AI back but powers it—delivering speed, agility, and scalability without complexity.",
    },
    {
      id: 7,
      title: 'Actionable Insights through Advanced Analytics',
      description: 'Data only matters when it drives action. Cogniify helps organizations unlock value with real-time analytics, forecasting models, and deep-dive explorations for decision intelligence. We simplify the complex, highlight what matters, and provide clarity where leaders need it most. Clients gain the ability to move quickly, predict confidently, and act decisively—transforming analytics from a reporting function into a true engine of growth.',
    },
    {
      id: 8,
      title: 'KPI-Driven Dashboards & Self-Service BI',
      description: 'Great decisions come from visibility. Cogniify empowers teams with intuitive dashboards, scorecards, and self-service BI tools that make information accessible to everyone. By turning raw metrics into meaningful views, we create clarity across organizations. This empowers business leaders to align strategy, measure progress, and adapt quickly—without waiting for reports. Clients gain faster, smarter decision-making powered by intelligence that is clear, actionable, and always within reach.',
    },
  ]

  return (
    <div className='w-full flex flex-col gap-[80px] justify-center'>
      <div className='text-white text-center font-neue-regrade font-semibold text-[48px] leading-none'>
        Our Expertise
      </div>
      <div className='flex flex-col gap-[24px] font-montserrat text-[16px] font-normal text-white'>
        <span>
          At Cogniify, we believe intelligence is only meaningful when it creates impact. Businesses today don&apos;t just need more data, they need clarity, confidence, and systems that transform information into action. That&apos;s why we exist—to move enterprises from insight to execution, from experimentation to scale.
        </span>
        <span>
          Our philosophy is rooted in four guiding principles: clarity over complexity, purpose before precision, trust as the foundation, and outcomes over activity. These principles shape the way we think, the way we build, and the way we deliver value. They ensure every solution is not only advanced, but relevant, responsible, and aligned with what truly matters for our clients.
        </span>
        <span>
          The 4S Intelligence Framework—<span className='text-[#AE98FF]'>Sharper Analytics, Smarter AI, Scalable Systems, and Secured Governance</span>—brings this philosophy to life. It provides the structure to design AI and analytics solutions that are innovative yet practical, ambitious yet grounded, and always enterprise-ready.
        </span>
        <span>
          Our mission is to deliver scalable, secure, and ROI-focused solutions that help clients achieve measurable outcomes today. Our vision is to build intelligence that elevates human potential and creates lasting enterprise advantage for tomorrow.
        </span>
        <span>
          Together, they keep us focused on making AI real, reliable, and ready for the future.
        </span>
        <span>
          For our clients, this means one thing: a trusted partner who doesn&apos;t just build technology, but helps build momentum. With Cogniify, intelligence is not an aspiration—it is a capability embedded into the very fabric of business.
        </span>
      </div>

      <div className='grid grid-cols-1 tablet:grid-cols-2 desktop:grid-cols-3 gap-[20px] desktop:gap-[30px] items-stretch'>
        {revealCards.map((card) => (
          <div key={card.id} className='col-span-1'>
            <HoverRevealCard content={card} icon={false} number={true} subtitle={false} data={false} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExpertiseTab;
