const Skills = () => {
  const skills = [
    { name: 'Java', logo: 'https://logospng.org/download/java/logo-java-4096.png' },
    { name: 'HTML5', logo: 'https://logospng.org/download/html-5/logo-html-5-256.png' },
    { name: 'CSS3', logo: 'https://logospng.org/download/css-3/logo-css-3-256.png' },
    { name: 'JavaScript', logo: 'https://logospng.org/download/javascript/logo-javascript-256.png' },
    { name: 'React', logo: 'https://logospng.org/download/react/logo-react-256.png' },
    { name: 'Next.js', logo: 'https://cdn.worldvectorlogo.com/logos/next-js.svg' },
    { name: 'PostgreSQL', logo: 'https://logospng.org/download/postgresql/postgresql-512.png' },
  ];

  return (
    <section id="habilidades" className="py-20 px-8">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-poppins font-bold mb-12 text-center gradient-text">
          Minhas Habilidades
        </h2>
        
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-6">
          {skills.map((skill, index) => (
            <div
              key={skill.name}
              className="glass-effect rounded-xl p-6 flex flex-col items-center justify-center hover:scale-110 transition-all duration-300 hover-glow animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <img
                src={skill.logo}
                alt={skill.name}
                className="w-16 h-16 object-contain mb-3"
              />
              <span className="text-sm text-muted-foreground">{skill.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;