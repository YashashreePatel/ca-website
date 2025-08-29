import React from 'react';
import Image from 'next/image';

const CompliaceCertificate: React.FC = () => {
  const images = [
    '/images/home/certificates/certificate1.png',
    '/images/home/certificates/certificate2.png',
    '/images/home/certificates/certificate3.png',
    '/images/home/certificates/certificate4.png',
    '/images/home/certificates/certificate5.png'
  ];
  return (
    <div className={`w-full flex justify-center items-center px-[24px] py-[50px] tablet:px-[60px] desktop:px-[100px] desktop:py-[80px] bg-black`}>
      <div className='w-full flex flex-col gap-[80px] items-center justify-center'>
        <div className='w-full desktop:w-[830px] flex flex-col gap-[16px] justify-center items-center'>
          <div className='text-white text-center font-neue-regrade font-medium tablet:font-semibold text-[28px] tablet:text-[48px] leading-none'>
            Compliance Certificate
          </div>
          <div className='text-white text-center font-montserrat font-semibold text-[12px] tablet:text-[16px]'>
            Global standards, dependable intelligence.
          </div>
          <div className='text-body-grey-2 text-center font-montserrat font-normal text-[12px] tablet:text-[16px]'>
            Cogniify&apos;s globally recognized compliance standards ensure security, transparency, and ethical responsibility. These certifications empower us to design smarter, safer products—making Cogniify not just an innovator, but a dependable partner businesses can trust to scale intelligence with confidence.
          </div>
        </div>
        <div className='w-full flex flex-row flex-wrap desktop:gap-[80px] justify-center desktop:justify-between'>
          {images.map((img, index) => (
            <Image
              key={index}
              src={img}
              alt='Certificate'
              width={160}
              height={48}
              priority
              className='h-[240px] w-auto'
            />
          ))}
        </div> 
      </div>
    </div>
  );
};

export default CompliaceCertificate;
