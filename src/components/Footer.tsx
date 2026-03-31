import { Github, Linkedin, Instagram } from 'lucide-react';

const socials = [
  { href: 'https://www.linkedin.com/in/marcos-vinicius-306151275', Icon: Linkedin, label: 'LinkedIn' },
  { href: 'https://github.com/VNZ1nx',                             Icon: Github,   label: 'GitHub' },
  { href: 'https://www.instagram.com/marcosxh_',                  Icon: Instagram, label: 'Instagram' },
];

const Footer = () => (
  <footer
    className="py-6 px-6"
    style={{
      background:   '#0a0a0a',
      borderTop:    '1px solid rgba(255,255,255,0.06)',
    }}
  >
    <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
      <p className="text-xs" style={{ color: '#6e6e73' }}>
        © 2025 Marcos Vinícius. Todos os direitos reservados.
      </p>

      <div className="flex items-center gap-4">
        {socials.map(({ href, Icon, label }) => (
          <a
            key={label}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={label}
            className="transition-colors duration-200 hover:opacity-100"
            style={{ color: '#6e6e73' }}
          >
            <Icon className="w-4 h-4" />
          </a>
        ))}
      </div>
    </div>
  </footer>
);

export default Footer;
