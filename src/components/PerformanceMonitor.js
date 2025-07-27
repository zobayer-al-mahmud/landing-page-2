import { useEffect } from 'react';
import { getCLS, getFID, getFCP, getLCP, getTTFB } from 'web-vitals';

const PerformanceMonitor = () => {
  useEffect(() => {
    // Only monitor performance in development
    if (process.env.NODE_ENV !== 'development') {
      return;
    }

    // Monitor Core Web Vitals
    getCLS(console.log);
    getFID(console.log);
    getFCP(console.log);
    getLCP(console.log);
    getTTFB(console.log);

    // Custom performance monitoring
    const observer = new PerformanceObserver((list) => {
      for (const entry of list.getEntries()) {
        // Log long tasks
        if (entry.entryType === 'longtask') {
          console.warn('Long task detected:', entry);
        }
        
        // Log layout shifts
        if (entry.entryType === 'layout-shift') {
          console.log('Layout shift:', entry);
        }
      }
    });

    observer.observe({ entryTypes: ['longtask', 'layout-shift'] });

    // Monitor resource loading
    const resourceObserver = new PerformanceObserver((list) => {
      for (const entry of list.getEntries()) {
        if (entry.initiatorType === 'img' && entry.duration > 1000) {
          console.warn('Slow image load:', entry.name, entry.duration);
        }
      }
    });

    resourceObserver.observe({ entryTypes: ['resource'] });

    return () => {
      observer.disconnect();
      resourceObserver.disconnect();
    };
  }, []);

  return null;
};

export default PerformanceMonitor; 