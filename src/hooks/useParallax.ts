import { useEffect, useRef, useState } from 'react';

const prefersReducedMotion = () =>
  typeof window !== 'undefined' &&
  window.matchMedia('(prefers-reduced-motion: reduce)').matches;

/**
 * Returns a { ref, style } object.
 * Attach ref to a container; apply style to the element that should move.
 * strength: 0.0–0.3 — how many pixels per viewport-height the element shifts.
 */
export function useParallax(strength = 0.12) {
  const ref    = useRef<HTMLDivElement>(null);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    if (prefersReducedMotion()) return;

    let rafId: number;

    const update = () => {
      const el = ref.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const center = rect.top + rect.height / 2;
      const viewH  = window.innerHeight;
      const ratio  = (center - viewH / 2) / viewH;
      setOffset(ratio * viewH * strength);
    };

    const onScroll = () => {
      cancelAnimationFrame(rafId);
      rafId = requestAnimationFrame(update);
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    update();
    return () => {
      window.removeEventListener('scroll', onScroll);
      cancelAnimationFrame(rafId);
    };
  }, [strength]);

  return {
    ref,
    style: prefersReducedMotion()
      ? {}
      : { transform: `translateY(${offset}px)` },
  };
}
