import { Linkedin, Github, Instagram, Mail } from 'lucide-react';

const Contact = () => {
  const socialLinks = [
    {
      href: 'https://www.linkedin.com/in/marcos-vinicius-306151275',
      icon: Linkedin,
      label: 'LinkedIn',
      color: 'hover:text-blue-500',
    },
    {
      href: 'https://github.com/VNZ1nx',
      icon: Github,
      label: 'GitHub',
      color: 'hover:text-gray-400',
    },
    {
      href: 'https://www.instagram.com/marcosxh_',
      icon: Instagram,
      label: 'Instagram',
      color: 'hover:text-pink-500',
    },
  ];

  return (
    <section id="contato" className="py-20 px-8">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-poppins font-bold mb-8 gradient-text">
          Contato
        </h2>

        <div className="glass-effect rounded-2xl p-12 animate-fade-in">
          <p className="text-lg text-foreground/90 mb-8">
            Entre em contato comigo através do meu e-mail ou redes sociais:
          </p>

          <div className="flex justify-center items-center gap-6 mb-8">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`p-4 rounded-xl bg-card hover:bg-card/80 transition-all duration-300 hover:scale-110 hover-glow ${link.color}`}
                aria-label={link.label}
              >
                <link.icon className="w-8 h-8" />
              </a>
            ))}
          </div>

          <a
            href="mailto:marcosvgp14@gmail.com"
            className="inline-flex items-center gap-2 px-8 py-3 bg-gradient-primary text-primary-foreground rounded-full font-medium hover:shadow-glow transition-all duration-300 hover:scale-105"
          >
            <Mail className="w-5 h-5" />
            Enviar Email
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;