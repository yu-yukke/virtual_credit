export const GA_TRACKING_ID = process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID || '';

// https://developers.google.com/analytics/devguides/collection/gtagjs/pages
export const pageview = (url: string): void => {
  if (!GA_TRACKING_ID) return;

  if (typeof window !== 'undefined') {
    window.gtag('config', GA_TRACKING_ID, {
      page_path: url,
    });
  }
};
