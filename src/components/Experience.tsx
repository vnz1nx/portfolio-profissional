import { Briefcase } from 'lucide-react';

const Experience = () => {
  const experienceData = [
    {
      title: 'Desenvolvedor Full Stack Jr',
      company: 'Freelancer',
      period: '2023 - Presente',
      description: 'Desenvolvimento de aplicações web e mobile utilizando React, Next.js e React Native. Criação de interfaces responsivas e implementação de funcionalidades backend.',
    },
    {
      title: 'Auxiliar de Estoque',
      company: 'Malhas Brasil Ltda',
      period: '2022 - 2023',
      description: 'Contribuí ativamente para a organização e eficiência do estoque, aplicando princípios de tecnologia e inovação para melhorar processos.',
    },
  ];

  return (
    <section id="experiencia" className="py-20 px-8">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-poppins font-bold mb-12 gradient-text">
          Experiência Profissional
        </h2>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-border"></div>

          {/* Experience items */}
          <div className="space-y-8">
            {experienceData.map((item, index) => (
              <div
                key={index}
                className="relative flex gap-8 animate-fade-in"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                {/* Timeline dot */}
                <div className="relative z-10">
                  <div className="w-16 h-16 rounded-full bg-gradient-primary p-[2px]">
                    <div className="w-full h-full rounded-full bg-background flex items-center justify-center">
                      <Briefcase className="w-6 h-6 text-primary" />
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1 glass-effect rounded-xl p-6 hover:shadow-card transition-all duration-300">
                  <h3 className="text-xl font-poppins font-semibold mb-2">
                    {item.title}
                  </h3>
                  <p className="text-primary mb-2">{item.company}</p>
                  <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-sm rounded-full mb-4">
                    {item.period}
                  </span>
                  <p className="text-muted-foreground">{item.description}</p>
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