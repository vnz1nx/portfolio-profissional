import { useEffect, useState } from 'react';
import { cn } from '@/lib/utils';
import { ChevronDown } from 'lucide-react';
import { useScrollProgress } from '@/hooks/useScrollProgress';
import profilePhoto from '@/assets/profile-marcos.png';

const Hero = () => {
  const [phase, setPhase] = useState(0);
  const [sectionRef, progress] = useScrollProgress<HTMLElement>();

  useEffect(() => {
    const timers = [
      setTimeout(() => setPhase(1), 100),
      setTimeout(() => setPhase(2), 300),
      setTimeout(() => setPhase(3), 600),
      setTimeout(() => setPhase(4), 900),
      setTimeout(() => setPhase(5), 1300),
    ];
    return () => timers.forEach(clearTimeout);
  }, []);

  const scrollToAbout = () =>
    document.getElementById('sobre')?.scrollIntoView({ behavior: 'smooth' });

  // Scroll-driven values (subtle, AirPods-style)
  // progress 0 → entering, 1 → leaving
  const photoScale = 1 + Math.min(progress, 0.5) * 0.12;     // grows up to +6%
  const photoTranslate = progress * -40;                      // gentle parallax up
  const textTranslate = progress * 60;                        // text drifts down a bit
  const contentOpacity = 1 - Math.max(0, (progress - 0.45) * 2.2);

  return (
    <section
      ref={sectionRef}
      data-theme="dark"
      className="relative min-h-screen overflow-hidden flex items-center pt-20 md:pt-0"
      style={{ background: 'linear-gradient(180deg, #0a0a0a 0%, #1a0a2e 50%, #0a0a0a 100%)' }}
    >
      {/* Subtle glow orb */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 80% 50% at 30% 50%, hsl(250 95% 65% / 0.18) 0%, transparent 70%)',
        }}
      />

      {/* PHOTO — anchored to bottom-right, fills section height on desktop */}
      <div
        className={cn(
          'hidden md:block absolute right-0 z-10 transition-all duration-1000 pointer-events-none',
          phase >= 2 ? 'opacity-100' : 'opacity-0'
        )}
        style={{
          height: 'min(85vh, 800px)',
          bottom: '-30px',
          transitionTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)',
        }}
      >
        <div
          className="relative h-full"
          style={{
            transform: `translateY(${photoTranslate * 0.6}px) scale(${photoScale})`,
            transformOrigin: 'bottom right',
            willChange: 'transform',
          }}
        >
          {/* Soft purple glow behind subject */}
          <div
            className="absolute inset-0 pointer-events-none -z-10"
            style={{
              background:
                'radial-gradient(circle at 50% 55%, hsl(270 95% 65% / 0.45), hsl(250 95% 55% / 0.18) 45%, transparent 72%)',
              filter: 'blur(50px)',
              transform: 'scale(1.1)',
            }}
          />
          <img
            src={profilePhoto}
            alt="Marcos Vinícius"
            loading="eager"
            draggable={false}
            className="h-full w-auto select-none block"
            style={{
              filter:
                'drop-shadow(0 25px 40px rgba(0,0,0,0.55)) drop-shadow(0 0 30px hsl(270 95% 70% / 0.22))',
            }}
          />
        </div>
      </div>

      {/* Two-column layout (text + mobile photo placeholder) */}
      <div className="relative z-20 w-full max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-12 items-center">

        {/* TEXT (left) */}
        <div
          className="text-center md:text-left order-2 md:order-1"
          style={{
            opacity: Math.max(contentOpacity, 0),
            transform: `translateY(${textTranslate}px)`,
            transition: 'opacity 0.2s linear',
            willChange: 'transform',
          }}
        >
          {/* Eyebrow */}
          <p
            className={cn(
              'eyebrow mb-5 transition-all duration-700',
              phase >= 1 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            )}
            style={{
              color: '#a1a1a6',
              transitionTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)',
            }}
          >
            Olá, eu sou
          </p>

          {/* Name */}
          <h1
            className={cn(
              'font-poppins font-bold text-white mb-5 transition-all duration-700',
              'text-display',
              phase >= 2 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            )}
            style={{ transitionTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)' }}
          >
            Marcos
            <br />
            <span
              style={{
                background:
                  'linear-gradient(135deg, hsl(250 95% 65%), hsl(270 95% 70%))',
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
              'text-base md:text-lg text-white/55 max-w-xl mx-auto md:mx-0 mb-9 leading-relaxed transition-all duration-700',
              phase >= 3 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
            )}
            style={{ transitionTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)' }}
          >
            Desenvolvedor Full Stack — interfaces que unem performance e
            experiência do usuário.
          </p>

          {/* CTAs */}
          <div
            className={cn(
              'flex flex-col sm:flex-row items-center md:items-start justify-center md:justify-start gap-4 transition-all duration-700',
              phase >= 4 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
            )}
            style={{ transitionTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)' }}
          >
            <button
              onClick={() =>
                document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' })
              }
              className="px-8 py-3.5 rounded-full font-medium text-sm text-white transition-all duration-300 hover:scale-105 hover:opacity-90"
              style={{
                background: 'linear-gradient(135deg, hsl(250 95% 65%), hsl(270 95% 70%))',
              }}
            >
              Ver Projetos
            </button>

            <button
              onClick={() =>
                document.getElementById('contato')?.scrollIntoView({ behavior: 'smooth' })
              }
              className="px-8 py-3.5 rounded-full font-medium text-sm text-white/80 border border-white/20 hover:border-white/50 hover:text-white transition-all duration-300 hover:scale-105"
            >
              Contato
            </button>
          </div>
        </div>

        {/* PHOTO — mobile only (above text) */}
        <div
          className={cn(
            'md:hidden relative mx-auto order-1 transition-all duration-1000',
            phase >= 2 ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
          )}
          style={{ transitionTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)' }}
        >
          <div className="relative w-[260px] sm:w-[320px]">
            <div
              className="absolute inset-0 pointer-events-none -z-10"
              style={{
                background:
                  'radial-gradient(circle at 50% 50%, hsl(270 95% 65% / 0.4), transparent 70%)',
                filter: 'blur(35px)',
                transform: 'scale(1.15)',
              }}
            />
            <img
              src={profilePhoto}
              alt="Marcos Vinícius"
              draggable={false}
              className="w-full h-auto select-none"
              style={{
                filter:
                  'drop-shadow(0 18px 30px rgba(0,0,0,0.45)) drop-shadow(0 0 22px hsl(270 95% 70% / 0.22))',
              }}
            />
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        className={cn(
          'absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 transition-all duration-700',
          phase >= 5 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
        )}
        style={{
          transitionTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)',
          opacity: phase >= 5 ? Math.max(1 - progress * 3, 0) : 0,
        }}
      >
        <button
          onClick={scrollToAbout}
          className="flex flex-col items-center gap-1 group"
          aria-label="Rolar para baixo"
        >
          <span className="text-xs text-white/30 tracking-widest uppercase font-medium">
            scroll
          </span>
          <ChevronDown className="w-4 h-4 text-white/30 animate-scroll-bounce group-hover:text-white/60 transition-colors" />
        </button>
      </div>
    </section>
  );
};

export default Hero;
