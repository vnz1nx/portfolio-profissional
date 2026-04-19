import { useEffect, useRef, useState } from 'react';

/**
 * Custom cursor: a precise dot + a soft trailing ring that lerps
 * toward the pointer. Ring expands over interactive elements.
 * Hidden on touch / coarse-pointer devices.
 */
const CustomCursor = () => {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const [enabled, setEnabled] = useState(false);
  const [visible, setVisible] = useState(false);
  const [hovering, setHovering] = useState(false);
  const [pressed, setPressed] = useState(false);

  useEffect(() => {
    const supports = window.matchMedia('(hover: hover) and (pointer: fine)').matches;
    if (!supports) return;
    setEnabled(true);
    document.documentElement.classList.add('custom-cursor-on');

    const target = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
    const ring   = { x: target.x, y: target.y };
    let rafId = 0;

    const tick = () => {
      // Dot follows the pointer exactly (snappy)
      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${target.x}px, ${target.y}px, 0) translate(-50%, -50%)`;
      }
      // Ring lerps for smoothness
      ring.x += (target.x - ring.x) * 0.18;
      ring.y += (target.y - ring.y) * 0.18;
      if (ringRef.current) {
        ringRef.current.style.transform = `translate3d(${ring.x}px, ${ring.y}px, 0) translate(-50%, -50%)`;
      }
      rafId = requestAnimationFrame(tick);
    };

    const onMove = (e: MouseEvent) => {
      target.x = e.clientX;
      target.y = e.clientY;
      if (!visible) setVisible(true);
    };
    const onLeave = () => setVisible(false);
    const onEnter = () => setVisible(true);
    const onDown  = () => setPressed(true);
    const onUp    = () => setPressed(false);

    const onOver = (e: MouseEvent) => {
      const t = e.target as HTMLElement | null;
      if (!t) return;
      const interactive = t.closest(
        'a, button, [role="button"], input, textarea, select, label, [data-cursor-hover]'
      );
      setHovering(!!interactive);
    };

    window.addEventListener('mousemove', onMove);
    window.addEventListener('mouseleave', onLeave);
    window.addEventListener('mouseenter', onEnter);
    window.addEventListener('mousedown', onDown);
    window.addEventListener('mouseup', onUp);
    window.addEventListener('mouseover', onOver);
    rafId = requestAnimationFrame(tick);

    return () => {
      window.removeEventListener('mousemove', onMove);
      window.removeEventListener('mouseleave', onLeave);
      window.removeEventListener('mouseenter', onEnter);
      window.removeEventListener('mousedown', onDown);
      window.removeEventListener('mouseup', onUp);
      window.removeEventListener('mouseover', onOver);
      cancelAnimationFrame(rafId);
      document.documentElement.classList.remove('custom-cursor-on');
    };
  }, [visible]);

  if (!enabled) return null;

  const ringScale = pressed ? 0.7 : hovering ? 2.2 : 1;
  const dotOpacity = visible ? (hovering ? 0 : 1) : 0;
  const ringOpacity = visible ? (hovering ? 0.85 : 0.55) : 0;

  return (
    <>
      {/* Trailing ring */}
      <div
        ref={ringRef}
        className="cursor-ring"
        style={{
          opacity: ringOpacity,
          width: 36,
          height: 36,
          borderWidth: hovering ? 1.5 : 1,
          background: hovering
            ? 'radial-gradient(circle, hsl(270 95% 70% / 0.18), transparent 70%)'
            : 'transparent',
          transform: `translate3d(0,0,0) translate(-50%, -50%) scale(${ringScale})`,
        }}
      />
      {/* Precise dot */}
      <div
        ref={dotRef}
        className="cursor-dot"
        style={{ opacity: dotOpacity }}
      />
    </>
  );
};

export default CustomCursor;
