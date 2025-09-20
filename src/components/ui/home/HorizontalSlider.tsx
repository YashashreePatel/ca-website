'use client';

import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import { gsap } from 'gsap';

const HorizontalSlider: React.FC = () => {
  const images = [
    '/images/home/trusted-by/image1.png',
    '/images/home/trusted-by/image2.png',
    '/images/home/trusted-by/image3.png',
    '/images/home/trusted-by/image4.png',
    '/images/home/trusted-by/image5.png',
    '/images/home/trusted-by/image6.png',
  ];
  const sliderRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sliderRef.current) return;

    const slideWidth = 200; // 180px width + 20px gap
    const totalWidth = slideWidth * images.length;

    gsap.set(sliderRef.current, { x: 0 });

    gsap.to(sliderRef.current, {
      x: -totalWidth,
      duration: images.length * 2, // Adjust speed
      ease: 'none',
      repeat: -1,
    });

  }, [images.length]);

  const duplicatedImages = [...images, ...images];

  return (
    <div className="overflow-hidden w-full">
      <div 
        ref={sliderRef}
        className="flex gap-[80px] w-max"
      >
        {duplicatedImages.map((img, index) => (
          <Image
            key={index}
            src={`${img}`}
            alt={`Image ${index}`}
            width={300}
            height={150}
            className="w-[180px] h-[80px] object-cover rounded-[8px] flex-shrink-0"
          />
        ))}
      </div>
    </div>
  );
};

export default HorizontalSlider;
