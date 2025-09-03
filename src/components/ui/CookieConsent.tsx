// components/ui/CookieConsent.tsx
'use client';

import React, { useState, useEffect } from 'react';
import Button from './Button';

const CookieConsent: React.FC = () => {
  const [showBanner, setShowBanner] = useState(false);
  const [showPreferences, setShowPreferences] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookieConsent');
    if (!consent) {
      setShowBanner(true);
    }
  }, []);

  const acceptAll = () => {
    localStorage.setItem('cookieConsent', JSON.stringify({
      necessary: true,
      analytics: true,
      marketing: true,
      functional: true
    }));
    setShowBanner(false);
  };

  const acceptNecessary = () => {
    localStorage.setItem('cookieConsent', JSON.stringify({
      necessary: true,
      analytics: false,
      marketing: false,
      functional: false
    }));
    setShowBanner(false);
  };

  if (!showBanner) return null;

  return (
    <>
      <div className='w-full fixed bottom-0 left-0 z-50 bg-white/5 px-[24px] py-[50px] tablet:px-[60px] desktop:px-[100px] desktop:py-[80px] backdrop-blur-lg'>
        <div className='flex flex-col items-center justify-center gap-[10px]'>
          <div className='text-white font-montserrat font-normal text-[16px]'>
            We use cookies to enhance your experience and analyze site usage.
            <a href="/privacy" className="text-brand-bule hover:underline">
              Learn more
            </a>
          </div>
          <div className='w-full flex flex-col tablet:flex-row justify-center gap-[10px]'>
            {/* <Button onClick={() => setShowPreferences(true)} variant='primary'>Customize</Button> */}
            <Button onClick={acceptNecessary} variant='secondary'>Necessary Only</Button>
            <Button onClick={acceptAll} variant='primary'>Accept All</Button>
          </div>
        </div>
      </div>

      {/* Cookie Preferences Modal */}
      {/* {showPreferences && (
        <div className="fixed inset-0 z-50 bg-crad-bg flex items-center justify-center p-4">
          <div className="bg-gray-900 rounded-lg p-6 max-w-2xl w-full max-h-[80vh] overflow-y-auto">
            <h3 className="text-white text-xl font-bold mb-4">Cookie Preferences</h3>

            <div className="space-y-4">
              <div className="flex justify-between items-center p-4 border border-gray-700 rounded-lg">
                <div>
                  <h4 className="text-white font-semibold">Necessary Cookies</h4>
                  <p className="text-gray-400 text-sm">Required for basic site functionality</p>
                </div>
                <input type="checkbox" checked disabled className="w-4 h-4" />
              </div>

              <div className="flex justify-between items-center p-4 border border-gray-700 rounded-lg">
                <div>
                  <h4 className="text-white font-semibold">Analytics Cookies</h4>
                  <p className="text-gray-400 text-sm">Help us understand site usage</p>
                </div>
                <input type="checkbox" className="w-4 h-4" />
              </div>

              <div className="flex justify-between items-center p-4 border border-gray-700 rounded-lg">
                <div>
                  <h4 className="text-white font-semibold">Marketing Cookies</h4>
                  <p className="text-gray-400 text-sm">Used for personalized ads</p>
                </div>
                <input type="checkbox" className="w-4 h-4" />
              </div>
            </div>

            <div className="flex gap-3 mt-6">
              <button
                onClick={() => setShowPreferences(false)}
                className="px-4 py-2 bg-gray-700 text-white rounded-lg"
              >
                Cancel
              </button>
              <button
                onClick={acceptAll}
                className="px-4 py-2 bg-blue-600 text-white rounded-lg"
              >
                Save Preferences
              </button>
            </div>
          </div>
        </div>
      )} */}
    </>
  );
};

export default CookieConsent;
