import { GraduationCap } from 'lucide-react';

const Education = () => {
  const educationData = [
    {
      title: 'Técnico em Informática para Internet',
      institution: 'IF Goiano | Campus Trindade',
      period: '2022 a 2024',
      description: 'Possuo conhecimentos em: Java, JavaScript, HTML5, CSS, React Native, React.js, Next.js.',
    },
    {
      title: 'Informática Básica',
      institution: 'Microllins',
      period: '2019 a 2021',
      description: 'Possuo conhecimentos em: Word, Excel, PowerPoint, OneDrive, Informática, Internet.',
    },
  ];

  return (
    <section id="formacao" className="py-20 px-8">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-poppins font-bold mb-12 gradient-text">
          Formação Acadêmica
        </h2>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-border"></div>

          {/* Education items */}
          <div className="space-y-8">
            {educationData.map((item, index) => (
              <div
                key={index}
                className="relative flex gap-8 animate-fade-in"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                {/* Timeline dot */}
                <div className="relative z-10">
                  <div className="w-16 h-16 rounded-full bg-gradient-primary p-[2px]">
                    <div className="w-full h-full rounded-full bg-background flex items-center justify-center">
                      <GraduationCap className="w-6 h-6 text-primary" />
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1 glass-effect rounded-xl p-6 hover:shadow-card transition-all duration-300">
                  <h3 className="text-xl font-poppins font-semibold mb-2">
                    {item.title}
                  </h3>
                  <p className="text-primary mb-2">{item.institution}</p>
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

export default Education;