import { useState, useEffect } from 'react';

import type { TimeInterval } from 'shared/types/Periods';

export const useAnimatedInterval = (interval: TimeInterval, duration = 700) => {
  const [displayInterval, setDisplayInterval] = useState(interval);

  useEffect(() => {
    const startTime = performance.now();

    const animate = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);

      const easeOutQuad = (t: number): number => t * (2 - t);

      const easedProgress = easeOutQuad(progress);

      setDisplayInterval((prev) => ({
        start: Math.round(prev.start + (interval.start - prev.start) * easedProgress),
        end: Math.round(prev.end + (interval.end - prev.end) * easedProgress),
      }));

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    const animationFrame = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationFrame);
  }, [interval, duration]);

  return displayInterval;
};
