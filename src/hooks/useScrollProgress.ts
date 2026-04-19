import { useEffect, useRef, useState } from 'react';

const prefersReducedMotion = () =>
  typeof window !== 'undefined' &&
  window.matchMedia('(prefers-reduced-motion: reduce)').matches;

/**
 * Tracks how far an element has been scrolled through the viewport.
 * Returns a value clamped between 0 and 1:
 *   0 → element top is at the bottom of the viewport (just entering)
 *   1 → element bottom is at the top of the viewport (just left)
 *
 * Useful for Apple-style scroll-driven transforms.
 */
export function useScrollProgress<T extends HTMLElement>(): [
  React.RefObject<T>,
  number,
] {
  const ref = useRef<T>(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (prefersReducedMotion()) {
      setProgress(1);
      return;
    }

    let rafId = 0;

    const update = () => {
      const el = ref.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const viewH = window.innerHeight;
      const total = rect.height + viewH;
      const traveled = viewH - rect.top;
      const p = Math.min(Math.max(traveled / total, 0), 1);
      setProgress(p);
    };

    const onScroll = () => {
      cancelAnimationFrame(rafId);
      rafId = requestAnimationFrame(update);
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    update();
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
      cancelAnimationFrame(rafId);
    };
  }, []);

  return [ref, progress];
}
