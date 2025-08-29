'use client';

import React, { useState } from 'react';
import Button from '@/components/ui/Button';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const ContactModal: React.FC<ContactModalProps> = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    project: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div 
        className="absolute inset-0 bg-black/70 backdrop-blur-sm"
        onClick={onClose}
      />
      
      <div className="relative flex flex-col desktop:flex-row bg-card-bg rounded-[16px] max-w-4xl w-full p-[12px] desktop:p-[24px] gap-[12px]">
        <div className="w-1/2 flex flex-col gap-[15px] justify-center">
          <div className="text-white font-neue-regrade font-bold text-[20px]">
            Let&apos;s Collaborate
          </div>
          <div className="text-body-grey-1 font-montserrat text-[16px]">
            If you&apos;re ready to turn your data into your greatest competitive advantage, let&apos;s talk. Whether you need to modernize your data stack, train your first ML model, or design the next generation of AI-powered products, we&apos;re here to help you every step of the way.
          </div>

          <div className="flex flex-col gap-[5px]">
            <div className="flex items-center gap-[5px]">
              <span className="material-symbols-outlined text-symbol-purple">phone</span>
              <span className="text-body-grey-1 font-montserrat">+1 (419)-973-0449</span>
            </div>
            <div className="flex items-center gap-[5px]">
              <span className="material-symbols-outlined text-symbol-purple">mail</span>
              <span className="text-body-grey-1 font-montserrat">info@cognifyanalytics.ai</span>
            </div>
          </div>
        </div>
        
        <div className="bg-tag-bg rounded-[16px] p-[12px]">
          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Form Fields Row 1 */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="text"
                name="fullName"
                placeholder="Full Name"
                value={formData.fullName}
                onChange={handleInputChange}
                className="w-full px-4 py-3 bg-[#2a2d47] border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Email Address"
                value={formData.email}
                onChange={handleInputChange}
                className="w-full px-4 py-3 bg-[#2a2d47] border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
            
            {/* Phone Number */}
            <input
              type="tel"
              name="phone"
              placeholder="Phone Number (Optional)"
              value={formData.phone}
              onChange={handleInputChange}
              className="w-full px-4 py-3 bg-[#2a2d47] border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            
            {/* Project Description */}
            <textarea
              name="project"
              placeholder="Tell us about your project"
              value={formData.project}
              onChange={handleInputChange}
              rows={6}
              className="w-full px-4 py-3 bg-[#2a2d47] border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
              required
            />
            
            {/* Submit Button */}
            <Button variant='primary'>Send Your Inqury</Button>
          </form>
        </div>
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 w-8 h-8 rounded-full bg-gray-700 hover:bg-gray-600 flex items-center justify-center text-gray-300 hover:text-white transition-colors"
        >
          <span className="material-symbols-outlined text-lg">close</span>
        </button>
      </div>
    </div>
  );
};

export default ContactModal;
