import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { cn } from '@/lib/utils';

const bio =
  'Desenvolvedor Full Stack apaixonado por criar interfaces que unem performance e experiência do usuário. ' +
  'Estudante de Engenharia de Software na Unigoias, com base técnica sólida construída no IF Goiano. ' +
  'Trabalho com Java, JavaScript, React e Next.js, sempre buscando soluções elegantes que façam a diferença.';

const words = bio.split(' ');

const stats = [
  { value: '8+', label: 'Projetos' },
  { value: '3+', label: 'Anos de estudo' },
  { value: '9', label: 'Tecnologias' },
];

const About = () => {
  const [sectionRef, isVisible]  = useScrollAnimation<HTMLElement>();
  const [statsRef, statsVisible] = useScrollAnimation<HTMLDivElement>();

  return (
    <section
      id="sobre"
      ref={sectionRef}
      data-theme="light"
      className="py-28 md:py-40 px-6"
    >
      <div className="max-w-4xl mx-auto">
        {/* Eyebrow */}
        <p
          className={cn(
            'eyebrow mb-8 transition-all duration-700',
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          )}
          style={{ transitionTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)' }}
        >
          Sobre mim
        </p>

        {/* Word-by-word reveal */}
        <div className="mb-16" aria-label={bio}>
          <p className="text-headline font-poppins font-semibold leading-tight" style={{ color: '#1d1d1f' }}>
            {words.map((word, i) => (
              <span
                key={i}
                className="inline-block mr-[0.28em] transition-all duration-500"
                style={{
                  opacity:         isVisible ? 1 : 0,
                  transform:       isVisible ? 'translateY(0)' : 'translateY(16px)',
                  filter:          isVisible ? 'blur(0)' : 'blur(4px)',
                  transitionDelay: isVisible ? `${i * 0.025}s` : '0s',
                  transitionTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)',
                }}
              >
                {word}
              </span>
            ))}
          </p>
        </div>

        {/* Stats */}
        <div
          ref={statsRef}
          className="grid grid-cols-3 gap-8 pt-10 border-t"
          style={{ borderColor: 'rgba(0,0,0,0.1)' }}
        >
          {stats.map((stat, i) => (
            <div
              key={stat.label}
              className="transition-all duration-700"
              style={{
                opacity:         statsVisible ? 1 : 0,
                transform:       statsVisible ? 'translateY(0)' : 'translateY(20px)',
                transitionDelay: statsVisible ? `${i * 0.15}s` : '0s',
                transitionTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)',
              }}
            >
              <p
                className="font-poppins font-bold mb-1"
                style={{ fontSize: 'clamp(2rem, 5vw, 3rem)', color: '#1d1d1f', letterSpacing: '-0.04em' }}
              >
                {stat.value}
              </p>
              <p className="text-sm font-medium" style={{ color: '#6e6e73' }}>
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
