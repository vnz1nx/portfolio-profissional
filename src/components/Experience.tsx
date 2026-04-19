import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const experienceData = [
  {
    title: 'Desenvolvedor Junior I',
    company: 'Metaprime',
    period: '2025/09',
    description:
      'Desenvolvimento de habilidades de nível Júnior I — lógica de programação, HTML, CSS, JavaScript, versionamento com Git, SQL e fundamentos de Linux. Participação em projetos com crescente autonomia.',
  },
  {
    title: 'Analista de Suporte',
    company: 'Metaprime',
    period: '2025/03 — 2025/09',
    description:
      'Apoio técnico com foco em testes e validações. Experiência com sistemas ERP, análise de erros, documentação de procedimentos e ferramentas de acesso remoto.',
  },
  {
    title: 'Auxiliar de Estoque',
    company: 'Malhas Brasil Ltda',
    period: '2022/03 — 2023/02',
    description:
      'Organização e eficiência do estoque, aplicando princípios de melhoria de processos e inovação operacional.',
  },
];

const Experience = () => {
  const [sectionRef, isVisible] = useScrollAnimation<HTMLElement>();
  const [lineRef, lineVisible]  = useScrollAnimation<HTMLDivElement>({ threshold: 0.05 });

  return (
    <section
      id="experiencia"
      ref={sectionRef}
      data-theme="dark"
      className="py-28 md:py-40 px-6"
      style={{ background: '#111113' }}
    >
      <div className="max-w-4xl mx-auto">

        {/* Header */}
        <p
          className="eyebrow mb-4 transition-all duration-700"
          style={{
            color:    '#a1a1a6',
            opacity:  isVisible ? 1 : 0,
            transform: isVisible ? 'translateY(0)' : 'translateY(16px)',
            transitionTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)',
          }}
        >
          Carreira
        </p>
        <h2
          className="font-poppins font-bold text-white text-headline mb-16 transition-all duration-700"
          style={{
            opacity:         isVisible ? 1 : 0,
            transform:       isVisible ? 'translateY(0)' : 'translateY(20px)',
            transitionDelay: '0.1s',
            transitionTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)',
          }}
        >
          Experiência Profissional
        </h2>

        {/* Timeline */}
        <div className="relative">
          {/* Animated line */}
          <div
            ref={lineRef}
            className="absolute left-[7px] top-3 bottom-3 w-[2px] rounded-full"
            style={{ background: 'rgba(255,255,255,0.14)' }}
          >
            <div
              className="rounded-full"
              style={{
                position:   'absolute',
                top: 0, left: 0, right: 0,
                background: 'linear-gradient(to bottom, hsl(250 95% 65%), hsl(270 95% 70%))',
                height:     lineVisible ? '100%' : '0%',
                transition: 'height 1.4s cubic-bezier(0.16, 1, 0.3, 1)',
                transitionDelay: '0.3s',
                boxShadow:  '0 0 12px hsl(250 95% 65% / 0.45)',
              }}
            />
          </div>

          <div className="space-y-10 pl-8">
            {experienceData.map((item, index) => (
              <div
                key={index}
                className="relative transition-all duration-700"
                style={{
                  opacity:         isVisible ? 1 : 0,
                  transform:       isVisible ? 'translateX(0)' : 'translateX(30px)',
                  transitionDelay: isVisible ? `${0.2 + index * 0.15}s` : '0s',
                  transitionTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)',
                }}
              >
                {/* Dot */}
                <div
                  className="absolute top-2.5 w-3.5 h-3.5 rounded-full"
                  style={{
                    left: '-30px',
                    background: index === 0
                      ? 'linear-gradient(135deg, hsl(250 95% 65%), hsl(270 95% 70%))'
                      : '#3a3a40',
                    // ring (4px section-bg) punches through the line; glow only on active
                    boxShadow:
                      '0 0 0 4px #111113' +
                      (index === 0 ? ', 0 0 14px hsl(250 95% 65% / 0.7)' : ''),
                  }}
                />

                {/* Card */}
                <div
                  className="p-6 rounded-2xl transition-all duration-300 hover:border-white/20 group"
                  style={{
                    background: 'rgba(255,255,255,0.03)',
                    border:     '1px solid rgba(255,255,255,0.07)',
                  }}
                >
                  <div className="flex flex-wrap items-start justify-between gap-3 mb-3">
                    <div>
                      <h3 className="font-poppins font-semibold text-white text-lg mb-0.5">
                        {item.title}
                      </h3>
                      <p style={{ color: 'hsl(250 95% 72%)' }} className="text-sm font-medium">
                        {item.company}
                      </p>
                    </div>
                    <span
                      className="text-xs font-medium px-3 py-1 rounded-full shrink-0"
                      style={{
                        background: 'hsl(250 95% 65% / 0.1)',
                        color:      'hsl(250 95% 72%)',
                      }}
                    >
                      {item.period}
                    </span>
                  </div>
                  <p className="text-sm leading-relaxed" style={{ color: '#a1a1a6' }}>
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default Experience;
