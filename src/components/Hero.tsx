import { useEffect, useState } from 'react';
import { cn } from '@/lib/utils';
import { ChevronDown } from 'lucide-react';

const Hero = () => {
  const [phase, setPhase] = useState(0);

  useEffect(() => {
    // Staggered entrance sequence
    const timers = [
      setTimeout(() => setPhase(1), 100),   // eyebrow
      setTimeout(() => setPhase(2), 300),   // name
      setTimeout(() => setPhase(3), 600),   // subtitle
      setTimeout(() => setPhase(4), 900),   // CTAs
      setTimeout(() => setPhase(5), 1300),  // scroll indicator
    ];
    return () => timers.forEach(clearTimeout);
  }, []);

  const scrollToAbout = () =>
    document.getElementById('sobre')?.scrollIntoView({ behavior: 'smooth' });

  return (
    <section
      data-theme="dark"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden"
      style={{ background: 'linear-gradient(180deg, #0a0a0a 0%, #1a0a2e 50%, #0a0a0a 100%)' }}
    >
      {/* Subtle glow orb */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse 80% 50% at 50% 50%, hsl(250 95% 65% / 0.12) 0%, transparent 70%)',
        }}
      />

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
        {/* Eyebrow */}
        <p
          className={cn(
            'eyebrow mb-6 transition-all duration-700',
            phase >= 1 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          )}
          style={{ color: '#a1a1a6', transitionTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)' }}
        >
          Desenvolvedor Full Stack
        </p>

        {/* Name — display scale */}
        <h1
          className={cn(
            'font-poppins font-bold text-white mb-6 transition-all duration-700',
            'text-display',
            phase >= 2 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          )}
          style={{ transitionTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)' }}
        >
          Marcos{' '}
          <span
            style={{
              background: 'linear-gradient(135deg, hsl(250 95% 65%), hsl(270 95% 70%))',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}
          >
            Vinícius
          </span>
        </h1>

        {/* Subtitle */}
        <p
          className={cn(
            'text-lg md:text-xl text-white/50 max-w-xl mx-auto mb-10 leading-relaxed transition-all duration-700',
            phase >= 3 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          )}
          style={{ transitionTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)' }}
        >
          Interfaces que unem performance e experiência do usuário.
          <br className="hidden md:block" /> Código limpo, resultado real.
        </p>

        {/* CTA buttons */}
        <div
          className={cn(
            'flex flex-col sm:flex-row items-center justify-center gap-4 transition-all duration-700',
            phase >= 4 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          )}
          style={{ transitionTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)' }}
        >
          <button
            onClick={() => document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' })}
            className="px-8 py-3.5 rounded-full font-medium text-sm text-white transition-all duration-300 hover:scale-105 hover:opacity-90"
            style={{ background: 'linear-gradient(135deg, hsl(250 95% 65%), hsl(270 95% 70%))' }}
          >
            Ver Projetos
          </button>

          <button
            onClick={() => document.getElementById('contato')?.scrollIntoView({ behavior: 'smooth' })}
            className="px-8 py-3.5 rounded-full font-medium text-sm text-white/80 border border-white/20 hover:border-white/50 hover:text-white transition-all duration-300 hover:scale-105"
          >
            Contato
          </button>
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        className={cn(
          'absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 transition-all duration-700',
          phase >= 5 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
        )}
        style={{ transitionTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)' }}
      >
        <button
          onClick={scrollToAbout}
          className="flex flex-col items-center gap-1 group"
          aria-label="Rolar para baixo"
        >
          <span className="text-xs text-white/30 tracking-widest uppercase font-medium">
            scroll
          </span>
          <ChevronDown
            className="w-4 h-4 text-white/30 animate-scroll-bounce group-hover:text-white/60 transition-colors"
          />
        </button>
      </div>
    </section>
  );
};

export default Hero;
