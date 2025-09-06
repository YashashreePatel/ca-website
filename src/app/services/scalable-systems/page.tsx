import React from 'react';
import FAQ from '@/components/ui/FAQ';
import AboveFooter from '@/components/layout/AboveFooter';
import BackButton from '@/components/ui/BackButton';


export default async function SecuredGovernance() {
  return (
    <div className={`w-full flex flex-col gap-[80px] px-[24px] pb-[80px] pt-[180px] tablet:px-[60px] desktop:px-[100px] bg-black`}>
      <BackButton />

      <div className='flex flex-col gap-[24px] font-montserrat text-[16px] font-normal text-white'>
        <span>
          Scalable Systems ensure that intelligence doesn&apos;t just work—it endures. Many AI initiatives fail because they can&apos;t scale. Cognify&apos;s expertise lies in engineering systems that grow with the business—secure, resilient, and future-ready.
        </span>
        <span>
          Guided by our philosophy of clarity and trust, we design architectures that minimize friction and maximize flexibility. Whether migrating legacy systems to cloud-native platforms or building end-to-end MLOps pipelines, our focus is on sustainable performance.
        </span>
        <span>
          Scalable Systems give clients the confidence that intelligence will not just launch—but thrive under real-world demands.
        </span>
      </div>

      <div className='flex flex-col gap-[10px] items-start font-montserrat font-normal text-[16px]'>
        <span className='text-symbol-purple'>Capabilities & Expertise:</span>
        <span className='pl-[5px] text-white'>- Cloud-Native Architecture & Multi-Cloud Deployments</span>
        <span className='pl-[5px] text-white'>- MLOps & AIOps for AI at Scale</span>
        <span className='pl-[5px] text-white'>- CI/CD Automation & Infrastructure-as-Code</span>
        <span className='pl-[5px] text-white'>- API & Microservices Engineering</span>
        <span className='pl-[5px] text-white'>- Performance Optimization & System Resilience</span>
      </div>

      <AboveFooter
        title="Want to unlock scalability from your data?"
        subtitle='Explore how Scalable Systems can transform your decision-making.'
        buttonText="Contact Us"
      />
    </div>
  );
};
