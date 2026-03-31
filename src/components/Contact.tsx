import { Mail, Github, Linkedin, Instagram } from 'lucide-react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { cn } from '@/lib/utils';

const bio = 'Vamos conversar.';
const words = bio.split(' ');

const socials = [
  {
    href: 'https://www.linkedin.com/in/marcos-vinicius-306151275',
    Icon: Linkedin,
    label: 'LinkedIn',
  },
  {
    href: 'https://github.com/VNZ1nx',
    Icon: Github,
    label: 'GitHub',
  },
  {
    href: 'https://www.instagram.com/marcosxh_',
    Icon: Instagram,
    label: 'Instagram',
  },
];

const Contact = () => {
  const [sectionRef, isVisible] = useScrollAnimation<HTMLElement>({ threshold: 0.1 });

  return (
    <section
      id="contato"
      ref={sectionRef}
      data-theme="dark"
      className="min-h-[70vh] flex flex-col items-center justify-center py-28 px-6 text-center"
      style={{ background: '#0a0a0a' }}
    >
      <div className="max-w-3xl mx-auto w-full">
        {/* Eyebrow */}
        <p
          className="eyebrow mb-8 transition-all duration-700"
          style={{
            color:    '#a1a1a6',
            opacity:  isVisible ? 1 : 0,
            transform: isVisible ? 'translateY(0)' : 'translateY(16px)',
            transitionTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)',
          }}
        >
          Entre em Contato
        </p>

        {/* Word-reveal heading */}
        <h2
          className="font-poppins font-bold text-white mb-6"
          style={{ fontSize: 'clamp(3rem, 8vw, 5.5rem)', letterSpacing: '-0.04em', lineHeight: 1.05 }}
          aria-label={bio}
        >
          {words.map((word, i) => (
            <span
              key={i}
              className="inline-block mr-[0.25em] transition-all duration-700"
              style={{
                opacity:         isVisible ? 1 : 0,
                transform:       isVisible ? 'translateY(0)' : 'translateY(20px)',
                filter:          isVisible ? 'blur(0)' : 'blur(4px)',
                transitionDelay: isVisible ? `${0.1 + i * 0.08}s` : '0s',
                transitionTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)',
              }}
            >
              {word}
            </span>
          ))}
        </h2>

        {/* Subtext */}
        <p
          className="text-lg mb-12 transition-all duration-700"
          style={{
            color:           '#6e6e73',
            opacity:         isVisible ? 1 : 0,
            transform:       isVisible ? 'translateY(0)' : 'translateY(16px)',
            transitionDelay: '0.3s',
            transitionTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)',
          }}
        >
          Aberto a oportunidades e colaborações.
        </p>

        {/* Email CTA */}
        <div
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-14 transition-all duration-700"
          style={{
            opacity:         isVisible ? 1 : 0,
            transform:       isVisible ? 'translateY(0)' : 'translateY(20px)',
            transitionDelay: '0.4s',
            transitionTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)',
          }}
        >
          <a
            href="mailto:marcosvgp14@gmail.com"
            className="inline-flex items-center gap-2.5 px-8 py-3.5 rounded-full text-white font-medium text-sm transition-all duration-300 hover:scale-105 hover:opacity-90"
            style={{ background: 'linear-gradient(135deg, hsl(250 95% 65%), hsl(270 95% 70%))' }}
          >
            <Mail className="w-4 h-4" />
            marcosvgp14@gmail.com
          </a>
        </div>

        {/* Social icons */}
        <div
          className="flex items-center justify-center gap-6 transition-all duration-700"
          style={{
            opacity:         isVisible ? 1 : 0,
            transform:       isVisible ? 'translateY(0)' : 'translateY(16px)',
            transitionDelay: '0.5s',
            transitionTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)',
          }}
        >
          {socials.map(({ href, Icon, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="p-3 rounded-xl text-white/40 hover:text-white transition-all duration-300 hover:scale-110"
              style={{ border: '1px solid rgba(255,255,255,0.08)' }}
            >
              <Icon className="w-5 h-5" />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Contact;
