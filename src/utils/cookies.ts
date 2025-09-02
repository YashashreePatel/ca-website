// src/utils/cookies.ts

// Declare gtag type for TypeScript
declare global {
  interface Window {
    gtag: (...args: any[]) => void;
    dataLayer: any[];
  }
}

export const CookieManager = {
  getConsent: () => {
    if (typeof window === 'undefined') return null;
    const consent = localStorage.getItem('cookieConsent');
    return consent ? JSON.parse(consent) : null;
  },

  hasConsent: (type: 'analytics' | 'marketing' | 'functional') => {
    const consent = CookieManager.getConsent();
    return consent?.[type] || false;
  },

  updateAnalytics: () => {
    const consent = CookieManager.getConsent();
    if (consent?.analytics && typeof window !== 'undefined' && window.gtag) {
      window.gtag('consent', 'update', {
        analytics_storage: 'granted'
      });
    }
  }
};
