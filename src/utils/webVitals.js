import { getCLS, getFID, getFCP, getLCP, getTTFB } from 'web-vitals';

function sendToAnalytics(metric) {
  // Send to Google Analytics
  if (typeof gtag !== 'undefined') {
    gtag('event', metric.name, {
      value: Math.round(metric.name === 'CLS' ? metric.value * 1000 : metric.value),
      event_label: metric.id,
      non_interaction: true,
    });
  }

  // Send to custom analytics
  console.log('Web Vital:', metric.name, metric.value);
  
  // Send to your own analytics endpoint
  fetch('/api/analytics/web-vitals', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      name: metric.name,
      value: metric.value,
      id: metric.id,
      timestamp: Date.now(),
    }),
  }).catch(() => {
    // Silently fail if analytics endpoint is not available
  });
}

export function reportWebVitals() {
  getCLS(sendToAnalytics);
  getFID(sendToAnalytics);
  getFCP(sendToAnalytics);
  getLCP(sendToAnalytics);
  getTTFB(sendToAnalytics);
}

// Performance monitoring utilities
export const performanceUtils = {
  // Measure time to interactive
  measureTTI: () => {
    if ('PerformanceObserver' in window) {
      const observer = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          if (entry.name === 'first-interaction') {
            console.log('Time to Interactive:', entry.startTime);
            sendToAnalytics({
              name: 'TTI',
              value: entry.startTime,
              id: 'tti-measurement',
            });
          }
        }
      });
      observer.observe({ entryTypes: ['measure'] });
    }
  },

  // Measure memory usage
  measureMemory: () => {
    if ('memory' in performance) {
      const memory = performance.memory;
      console.log('Memory Usage:', {
        used: memory.usedJSHeapSize,
        total: memory.totalJSHeapSize,
        limit: memory.jsHeapSizeLimit,
      });
    }
  },

  // Measure resource loading
  measureResources: () => {
    if ('PerformanceObserver' in window) {
      const observer = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          if (entry.entryType === 'resource') {
            console.log('Resource Load:', {
              name: entry.name,
              duration: entry.duration,
              size: entry.transferSize,
            });
          }
        }
      });
      observer.observe({ entryTypes: ['resource'] });
    }
  },
}; 