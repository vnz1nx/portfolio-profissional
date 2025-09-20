const About = () => {
  return (
    <section id="sobre" className="py-20 px-8">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-poppins font-bold mb-8 gradient-text">
          Resumo
        </h2>
        
        <div className="glass-effect rounded-2xl p-8 animate-fade-in">
          <p className="text-lg leading-relaxed text-foreground/90 mb-6">
            Técnico em Informática no IF Goiano Campus Trindade, aprimoro continuamente minhas 
            habilidades em CSS, JavaScript e React.js, ferramentas essenciais para desenvolvimento 
            web moderno.
          </p>
          
          <p className="text-lg leading-relaxed text-foreground/90">
            Meu objetivo é integrar e colaborar com equipes dinâmicas onde possa impulsionar projetos 
            com minha paixão por tecnologia e minha competência em programação. Almejo oportunidades 
            que desafiem minha capacidade analítica e criativa, sempre com o intuito de gerar impacto 
            positivo através de soluções tecnológicas.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;