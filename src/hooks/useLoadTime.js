import { useState, useEffect } from 'react';

export function useLoadTime() {
  const [loadTime, setLoadTime] = useState(null);

  useEffect(() => {
    function measure() {
      requestAnimationFrame(() => {
        const [entry] = performance.getEntriesByType('navigation');

        if (entry && entry.loadEventEnd > 0) {
          const ms = Math.round(entry.loadEventEnd);
          setLoadTime(ms);
        }
      });
    }

    if (document.readyState === 'complete') {
      measure();
    } else {
      window.addEventListener('load', measure, { once: true });
    }

    return () => window.removeEventListener('load', measure);
  }, []);

  return loadTime;
}
