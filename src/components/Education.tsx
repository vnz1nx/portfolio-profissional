import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const educationData = [
  {
    title: 'Engenharia de Software',
    institution: 'Unigoias',
    period: '2025 — presente',
    description:
      'Análise e modelagem de requisitos, diagramas UML, metodologias ágeis (Scrum, Kanban) e gestão de projetos.',
  },
  {
    title: 'Técnico em Informática para Internet',
    institution: 'IF Goiano | Campus Trindade',
    period: '2022 — 2024',
    description:
      'Java, JavaScript, HTML5, CSS3, React Native, React.js e Next.js.',
  },
  {
    title: 'Informática Básica',
    institution: 'Microllins',
    period: '2019 — 2021',
    description:
      'Word, Excel, PowerPoint, OneDrive e fundamentos de internet.',
  },
];

const Education = () => {
  const [sectionRef, isVisible] = useScrollAnimation<HTMLElement>();
  const [lineRef, lineVisible]  = useScrollAnimation<HTMLDivElement>({ threshold: 0.05 });

  return (
    <section
      id="formacao"
      ref={sectionRef}
      data-theme="light"
      className="py-28 md:py-40 px-6"
    >
      <div className="max-w-4xl mx-auto">

        {/* Header */}
        <p
          className="eyebrow mb-4 transition-all duration-700"
          style={{
            opacity:  isVisible ? 1 : 0,
            transform: isVisible ? 'translateY(0)' : 'translateY(16px)',
            transitionTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)',
          }}
        >
          Educação
        </p>
        <h2
          className="font-poppins font-bold text-headline mb-16 transition-all duration-700"
          style={{
            color:           '#1d1d1f',
            opacity:         isVisible ? 1 : 0,
            transform:       isVisible ? 'translateY(0)' : 'translateY(20px)',
            transitionDelay: '0.1s',
            transitionTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)',
          }}
        >
          Formação Acadêmica
        </h2>

        {/* Timeline */}
        <div className="relative">
          {/* Animated line */}
          <div
            ref={lineRef}
            className="absolute left-[7px] top-3 bottom-3 w-[2px] rounded-full"
            style={{ background: 'rgba(0,0,0,0.12)' }}
          >
            <div
              className="rounded-full"
              style={{
                position:   'absolute',
                top: 0, left: 0, right: 0,
                background: 'linear-gradient(to bottom, hsl(250 95% 55%), hsl(270 95% 60%))',
                height:     lineVisible ? '100%' : '0%',
                transition: 'height 1.4s cubic-bezier(0.16, 1, 0.3, 1)',
                transitionDelay: '0.3s',
                boxShadow:  '0 0 10px hsl(250 95% 55% / 0.35)',
              }}
            />
          </div>

          <div className="space-y-10 pl-8">
            {educationData.map((item, index) => (
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
                      ? 'linear-gradient(135deg, hsl(250 95% 55%), hsl(270 95% 60%))'
                      : '#c8c8cc',
                    boxShadow:
                      '0 0 0 4px #f5f5f7' +
                      (index === 0 ? ', 0 0 14px hsl(250 95% 55% / 0.5)' : ''),
                  }}
                />

                {/* Card */}
                <div
                  className="p-6 rounded-2xl transition-all duration-300 group"
                  style={{
                    background: 'rgba(0,0,0,0.03)',
                    border:     '1px solid rgba(0,0,0,0.07)',
                  }}
                >
                  <div className="flex flex-wrap items-start justify-between gap-3 mb-3">
                    <div>
                      <h3
                        className="font-poppins font-semibold text-lg mb-0.5"
                        style={{ color: '#1d1d1f' }}
                      >
                        {item.title}
                      </h3>
                      <p className="text-sm font-medium" style={{ color: 'hsl(250 95% 50%)' }}>
                        {item.institution}
                      </p>
                    </div>
                    <span
                      className="text-xs font-medium px-3 py-1 rounded-full shrink-0"
                      style={{
                        background: 'hsl(250 95% 55% / 0.1)',
                        color:      'hsl(250 95% 50%)',
                      }}
                    >
                      {item.period}
                    </span>
                  </div>
                  <p className="text-sm leading-relaxed" style={{ color: '#6e6e73' }}>
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

export default Education;
