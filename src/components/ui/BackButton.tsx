'use client';

import { useRouter } from 'next/navigation';
import React from 'react';

const BackButton: React.FC<{ fallbackUrl?: string }> = ({ fallbackUrl = '/' }) => {
  const router = useRouter();

  return (
    <button
      onClick={() => router.back()}
      className="w-full flex flex-row items-center justify-start font-montserrat text-white font-normal text-[16px] transition"
    >
      <span className="material-symbols-outlined">keyboard_arrow_left</span>
      <span>Back</span>
    </button>
  );
};

export default BackButton;
