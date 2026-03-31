import { useState } from 'react';
import { cn } from '@/lib/utils';
import { Github, X, Menu } from 'lucide-react';

interface NavProps {
  isScrolled: boolean;
  activeSection: string;
}

const navLinks = [
  { id: 'sobre',       label: 'Sobre' },
  { id: 'habilidades', label: 'Skills' },
  { id: 'portfolio',   label: 'Portfólio' },
  { id: 'experiencia', label: 'Experiência' },
  { id: 'formacao',    label: 'Formação' },
  { id: 'contato',     label: 'Contato' },
];

const scrollTo = (id: string) => {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
};

const Nav = ({ isScrolled, activeSection }: NavProps) => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <header
        className={cn(
          'fixed top-0 left-0 right-0 z-50 transition-all duration-500',
          isScrolled ? 'nav-glass' : 'bg-transparent'
        )}
      >
        <div className="max-w-7xl mx-auto px-6 h-14 flex items-center justify-between">
          {/* Logo / Monogram */}
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="text-white font-sf-pro font-semibold text-lg tracking-tight hover:opacity-70 transition-opacity"
            aria-label="Voltar ao topo"
          >
            MV
          </button>

          {/* Desktop links */}
          <nav className="hidden md:flex items-center gap-8" aria-label="Navegação principal">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollTo(link.id)}
                className={cn(
                  'text-sm font-medium transition-all duration-200 relative pb-0.5',
                  'after:absolute after:bottom-0 after:left-0 after:h-px after:bg-white',
                  'after:transition-all after:duration-300',
                  activeSection === link.id
                    ? 'text-white after:w-full'
                    : 'text-white/60 hover:text-white after:w-0 hover:after:w-full'
                )}
              >
                {link.label}
              </button>
            ))}
          </nav>

          {/* Right side */}
          <div className="flex items-center gap-4">
            <a
              href="https://github.com/VNZ1nx"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/60 hover:text-white transition-colors"
              aria-label="GitHub"
            >
              <Github className="w-4 h-4" />
            </a>

            {/* Mobile hamburger */}
            <button
              onClick={() => setMenuOpen(true)}
              className="md:hidden text-white/70 hover:text-white transition-colors"
              aria-label="Abrir menu"
            >
              <Menu className="w-5 h-5" />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile overlay menu */}
      {menuOpen && (
        <div
          className="fixed inset-0 z-[100] flex flex-col"
          style={{ background: 'rgba(10,10,10,0.97)', backdropFilter: 'blur(20px)' }}
        >
          {/* Close button */}
          <div className="flex justify-end p-6">
            <button
              onClick={() => setMenuOpen(false)}
              className="text-white/60 hover:text-white transition-colors"
              aria-label="Fechar menu"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Links */}
          <nav className="flex-1 flex flex-col justify-center items-center gap-8 px-8">
            {navLinks.map((link, i) => (
              <button
                key={link.id}
                onClick={() => { scrollTo(link.id); setMenuOpen(false); }}
                className="text-4xl font-poppins font-semibold text-white/80 hover:text-white transition-all duration-200 hover:scale-105"
                style={{ animationDelay: `${i * 0.06}s` }}
              >
                {link.label}
              </button>
            ))}
          </nav>

          {/* Social footer */}
          <div className="flex justify-center gap-6 p-10">
            <a href="https://github.com/VNZ1nx"        target="_blank" rel="noopener noreferrer" className="text-white/40 hover:text-white transition-colors text-sm">GitHub</a>
            <a href="https://www.linkedin.com/in/marcos-vinicius-306151275" target="_blank" rel="noopener noreferrer" className="text-white/40 hover:text-white transition-colors text-sm">LinkedIn</a>
            <a href="https://www.instagram.com/marcosxh_" target="_blank" rel="noopener noreferrer" className="text-white/40 hover:text-white transition-colors text-sm">Instagram</a>
          </div>
        </div>
      )}
    </>
  );
};

export default Nav;
