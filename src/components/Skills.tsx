import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const skills = [
  { name: 'C',          logo: 'https://cdn.worldvectorlogo.com/logos/c-1.svg' },
  { name: 'Java',       logo: 'https://logospng.org/download/java/logo-java-4096.png' },
  { name: 'HTML5',      logo: 'https://logospng.org/download/html-5/logo-html-5-256.png' },
  { name: 'CSS3',       logo: 'https://logospng.org/download/css-3/logo-css-3-256.png' },
  { name: 'JavaScript', logo: 'https://logospng.org/download/javascript/logo-javascript-256.png' },
{ name: 'React',      logo: 'https://logospng.org/download/react/logo-react-256.png' },
  { name: 'Next.js',    logo: 'https://cdn.worldvectorlogo.com/logos/next-js.svg' },
  { name: 'PostgreSQL', logo: 'https://logospng.org/download/postgresql/postgresql-512.png' },
  { name: 'Git',        logo: 'https://cdn.worldvectorlogo.com/logos/git-icon.svg' },
];

const Skills = () => {
  const [sectionRef, isVisible] = useScrollAnimation<HTMLElement>();

  return (
    <section
      id="habilidades"
      ref={sectionRef}
      data-theme="dark"
      className="py-28 md:py-40 px-6"
    >
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <p
            className="eyebrow mb-4 transition-all duration-700"
            style={{
              opacity:   isVisible ? 1 : 0,
              transform: isVisible ? 'translateY(0)' : 'translateY(16px)',
              transitionTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)',
            }}
          >
            Tecnologias
          </p>
          <h2
            className="font-poppins font-bold text-white text-headline transition-all duration-700"
            style={{
              opacity:         isVisible ? 1 : 0,
              transform:       isVisible ? 'translateY(0)' : 'translateY(20px)',
              transitionDelay: '0.1s',
              transitionTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)',
            }}
          >
            Minhas Habilidades
          </h2>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-3 md:grid-cols-5 lg:grid-cols-9 gap-4 md:gap-6">
          {skills.map((skill, index) => (
            <div
              key={skill.name}
              className="flex flex-col items-center justify-center p-4 md:p-5 rounded-2xl cursor-default
                         transition-all duration-300 hover:scale-110 group"
              style={{
                background:      'rgba(255,255,255,0.04)',
                border:          '1px solid rgba(255,255,255,0.08)',
                opacity:         isVisible ? 1 : 0,
                transform:       isVisible ? 'translateY(0)' : 'translateY(30px)',
                transitionDelay: isVisible ? `${index * 0.06}s` : '0s',
                transitionTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)',
              }}
            >
              <img
                src={skill.logo}
                alt={skill.name}
                className="w-10 h-10 md:w-12 md:h-12 object-contain mb-2
                           group-hover:drop-shadow-[0_0_12px_hsl(250_95%_65%/0.6)]
                           transition-all duration-300"
              />
              <span className="text-xs font-medium text-white/50 group-hover:text-white/80 transition-colors text-center leading-tight">
                {skill.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
