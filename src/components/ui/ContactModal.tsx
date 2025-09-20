'use client';

import React, { useState } from 'react';
import ReCAPTCHA from 'react-google-recaptcha';
import Button from '@/components/ui/Button';

const SITE_KEY = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY as string;

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

interface FormData {
  fullName: string;
  email: string;
  phone: string;
  project: string;
}

interface FormErrors {
  fullName?: string;
  email?: string;
  project?: string;
  privacy?: string;
}

const ContactModal: React.FC<ContactModalProps> = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState<FormData>({
    fullName: '',
    email: '',
    phone: '',
    project: ''
  });

  const [isChecked, setIsChecked] = useState(false);
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);

  const [captchaToken, setCaptchaToken] = useState<string | null>(null);

  const handleCaptchaChange = (token: string | null) => {
    setCaptchaToken(token);
    if (errors.privacy) {
      setErrors({ ...errors, privacy: undefined });
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });

    // Clear error when user starts typing
    if (errors[name as keyof FormErrors]) {
      setErrors({
        ...errors,
        [name]: undefined
      });
    }
  };

  const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setIsChecked(event.target.checked);
    
    // Clear privacy error when user checks the box
    if (event.target.checked && errors.privacy) {
      setErrors({
        ...errors,
        privacy: undefined
      });
    }
  };

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    // Validate full name
    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Full name is required';
    }

    // Validate email
    if (!formData.email.trim()) {
      newErrors.email = 'Email address is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    // Validate project description
    if (!formData.project.trim()) {
      newErrors.project = 'Project description is required';
    }

    // Validate privacy checkbox
    if (!isChecked) {
      newErrors.privacy = 'You must agree to the policy and terms';
    }

    if (!captchaToken) {
      newErrors.privacy = 'Please complete the reCAPTCHA';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    try {
      const submissionData = {
        id: Date.now().toString(),
        fullName: formData.fullName.trim(),
        email: formData.email.trim(),
        phone: formData.phone.trim() || null,
        project: formData.project.trim(),
        submittedAt: new Date().toISOString(),
        status: 'new',
        token: captchaToken,
      };

      const response = await fetch('/api/submit-form', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(submissionData),
      });

      if (response.ok) {
        // Reset form
        setFormData({
          fullName: '',
          email: '',
          phone: '',
          project: ''
        });
        setIsChecked(false);
        setErrors({});
        
        // Show success message
        setShowSuccessMessage(true);
        
        // Hide success message and close modal after 3 seconds
        setTimeout(() => {
          setShowSuccessMessage(false);
          onClose();
        }, 3000);
        
      } else {
        const errorData = await response.json();
        alert(`Error: ${errorData.message || 'Failed to submit form. Please try again.'}`);
      }
    } catch (error) {
      console.error('Form submission error:', error);
      alert('Network error. Please check your connection and try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center mx-[24px] desktop:mx-0">
      <div
        className="absolute inset-0 bg-black/70 backdrop-blur-sm"
        onClick={() => !showSuccessMessage && onClose()}
      />

      <div className="relative flex flex-col desktop:flex-row bg-card-bg rounded-[16px] max-w-4xl w-full p-[24px] gap-[12px] items-center desktop:items-start">
        
        {/* Success Message Overlay */}
        {showSuccessMessage && (
          <div className="absolute inset-0 bg-green-600/95 rounded-[16px] flex items-center justify-center z-10">
            <div className="text-center text-white p-8">
              <div className="font-neue-regrade font-bold text-[24px] mb-2">
                Thank You!
              </div>
              <div className="font-montserrat text-[16px] mb-4">
                Your inquiry has been submitted successfully.
              </div>
              <div className="font-montserrat text-[14px] opacity-80">
                We&apos;ll get back to you within 24 hours.
              </div>
            </div>
          </div>
        )}

        <div className="w-full desktop:w-1/2 flex flex-col gap-[15px] justify-center">
          <div className="text-white text-center desktop:text-left font-neue-regrade font-bold text-[20px]">
            Let&apos;s Collaborate
          </div>
          <div className="text-body-grey-1 text-center desktop:text-left font-montserrat text-[16px]">
            If you&apos;re ready to turn your data into your greatest competitive advantage, let&apos;s talk. Whether you need to modernize your data stack, train your first ML model, or design the next generation of AI-powered products, we&apos;re here to help you every step of the way.
          </div>

          <div className="flex flex-col gap-[5px] items-center desktop:items-start">
            <div className="flex items-center gap-[5px]">
              <span className="material-symbols-outlined text-symbol-purple">phone</span>
              <span className="text-body-grey-1 font-montserrat">+1 (419)-973-0449</span>
            </div>
            <div className="flex items-center gap-[5px]">
              <span className="material-symbols-outlined text-symbol-purple">mail</span>
              <span className="text-body-grey-1 underline font-montserrat"><a target='blank' href='mailto:info@cogniify.ai'>info@cogniify.ai</a></span>
            </div>
          </div>
        </div>

        <div className="w-full desktop:w-1/2 bg-tag-bg rounded-[16px] p-[12px]">
          <form onSubmit={handleSubmit} className="flex flex-col gap-[20px] items-center desktop:items-start">
            {/* Form Fields Row 1 */}
            <div className="w-full flex flex-col tablet:flex-row gap-4">
              <div className="w-full">
                <input
                  type="text"
                  name="fullName"
                  placeholder="Full Name"
                  value={formData.fullName}
                  onChange={handleInputChange}
                  className={`w-full px-4 py-3 bg-[#2a2d47] border rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 ${
                    errors.fullName 
                      ? 'border-red-500 focus:ring-red-500' 
                      : 'border-gray-600 focus:ring-blue-500'
                  }`}
                  required
                />
                {errors.fullName && (
                  <p className="text-red-500 text-sm mt-1">{errors.fullName}</p>
                )}
              </div>
              <div className="w-full">
                <input
                  type="email"
                  name="email"
                  placeholder="Email Address"
                  value={formData.email}
                  onChange={handleInputChange}
                  className={`w-full px-4 py-3 bg-[#2a2d47] border rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 ${
                    errors.email 
                      ? 'border-red-500 focus:ring-red-500' 
                      : 'border-gray-600 focus:ring-blue-500'
                  }`}
                  required
                />
                {errors.email && (
                  <p className="text-red-500 text-sm mt-1">{errors.email}</p>
                )}
              </div>
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
            <div className="w-full">
              <textarea
                name="project"
                placeholder="Tell us about your project"
                value={formData.project}
                onChange={handleInputChange}
                rows={6}
                className={`w-full px-4 py-3 bg-[#2a2d47] border rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 resize-none ${
                  errors.project 
                    ? 'border-red-500 focus:ring-red-500' 
                    : 'border-gray-600 focus:ring-blue-500'
                }`}
                required
              />
              {errors.project && (
                <p className="text-red-500 text-sm mt-1">{errors.project}</p>
              )}
            </div>

            {/* Privacy Checkbox */}
            <div className="w-full">
              <label className="flex flex-row gap-[5px] text-white text-center desktop:text-left font-montserrat text-[16px]">
                <input
                  type="checkbox"
                  checked={isChecked}
                  onChange={handleCheckboxChange}
                  className="mt-1"
                />
                <span>I agree to the <a className='text-brand-blue underline' href='/privacy-policy' target='blank'>policy and terms.</a></span>
              </label>
              {errors.privacy && (
                <p className="text-red-500 text-sm mt-1">{errors.privacy}</p>
              )}
            </div>
            
            <ReCAPTCHA 
              sitekey={SITE_KEY}
              onChange={handleCaptchaChange}
            />
            {errors.privacy && (
              <p className="text-red-500 text-sm mt-1">{errors.privacy}</p>
            )}

            {/* Submit Button */}
            <Button 
              variant='primary' 
              disabled={isSubmitting || showSuccessMessage}
              type="submit"
            >
              {isSubmitting ? 'Submitting...' : 'Send Your Inquiry'}
            </Button>
          </form>
        </div>

        {/* Close Button */}
        {!showSuccessMessage && (
          <button
            onClick={onClose}
            className="cursor-pointer absolute top-4 right-4 w-8 h-8 rounded-full bg-gray-700 hover:bg-gray-600 flex items-center justify-center text-gray-300 hover:text-white transition-colors"
          >
            <span className="material-symbols-outlined text-lg">close</span>
          </button>
        )}
      </div>
    </div>
  );
};

export default ContactModal;
