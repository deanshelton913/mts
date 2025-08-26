'use client';

import { usePathname, useSearchParams } from "next/navigation";
import { useEffect, Suspense } from "react";

declare global {
  interface Window {
    gtag: (command: string, targetId: string, config?: Record<string, unknown>) => void;
  }
}

function RouteChangeTrackerInner() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    if (typeof window !== 'undefined' && window.gtag) {
      const url = pathname + (searchParams?.toString() ? `?${searchParams.toString()}` : '');
      
      // Track pageview in GA4
      const GA_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;
      if (GA_ID) {
        window.gtag('config', GA_ID, {
          page_path: url,
          page_title: document.title,
        });
      }
      
      // Track pageview in Google Ads
      const ADS_ID = process.env.NEXT_PUBLIC_GOOGLE_ADS_ID || 'AW-1005222920';
      window.gtag('config', ADS_ID, {
        page_path: url,
        page_title: document.title,
      });
    }
  }, [pathname, searchParams]);

  return null;
}

export default function RouteChangeTracker() {
  return (
    <Suspense fallback={null}>
      <RouteChangeTrackerInner />
    </Suspense>
  );
}
