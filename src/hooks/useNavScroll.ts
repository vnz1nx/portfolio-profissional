import { useEffect, useState } from 'react';

const SECTIONS = ['sobre', 'habilidades', 'portfolio', 'experiencia', 'formacao', 'contato'];
const SCROLL_THRESHOLD = 60;

/**
 * Tracks scroll position for nav behaviour:
 * - isScrolled: true after 60px (triggers nav-glass style)
 * - activeSection: the section id currently in the viewport
 */
export function useNavScroll() {
  const [isScrolled, setIsScrolled]       = useState(false);
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const onScroll = () => {
      setIsScrolled(window.scrollY > SCROLL_THRESHOLD);

      const scrollPos = window.scrollY + 120;
      for (const id of SECTIONS) {
        const el = document.getElementById(id);
        if (el) {
          const { offsetTop, offsetHeight } = el;
          if (scrollPos >= offsetTop && scrollPos < offsetTop + offsetHeight) {
            setActiveSection(id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return { isScrolled, activeSection };
}
