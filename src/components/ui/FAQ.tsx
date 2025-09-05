'use client';

import React, { useState } from 'react';

type FAQProps = {
  faqs: {
    question: string;
    answer: string;
  }[];
};


const FAQ: React.FC<FAQProps> = ({ faqs }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="w-full font-montserrat font-normal text-[16px]">
      {faqs.map((faq, index) => (
        <div key={index} className="w-full text-left py-[30px] border-b-2 border-[#292929] text-white">
          <button
            onClick={() => toggleFAQ(index)}
            className="flex justify-between items-center w-full"
          >
            <span>{faq.question}</span>
            <span className='text-[#AE98FF] transition-all duration-500 ease-in-out'>{openIndex === index ? "-" : "+"}</span>
          </button>
          <div
            className={`text-body-grey-1 overflow-hidden transition-[max-height] duration-500 ease-in-out ${
              openIndex === index ? "max-h-80" : "max-h-0"
            }`}
          >{faq.answer}</div>
        </div>
      ))}
    </div>

  );
};

export default FAQ;