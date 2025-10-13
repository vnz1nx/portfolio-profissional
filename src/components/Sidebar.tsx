import { useState } from 'react';
import { Menu, X, Linkedin, Github, Instagram } from 'lucide-react';
import { cn } from '@/lib/utils';
import profilePhoto from '@/assets/Perfil.jpeg';

interface SidebarProps {
  activeSection: string;
}

const Sidebar = ({ activeSection }: SidebarProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { href: '#sobre', label: 'Resumo' },
    { href: '#habilidades', label: 'Minhas Habilidades' },
    { href: '#portfolio', label: 'Portfolio' },
    { href: '#formacao', label: 'Formação Acadêmica' },
    { href: '#experiencia', label: 'Experiência' },
    { href: '#contato', label: 'Contato' },
  ];

  const socialLinks = [
    { href: 'https://www.linkedin.com/in/marcos-vinicius-306151275/', icon: Linkedin, label: 'LinkedIn' },
    { href: 'https://github.com/VNZ1nx', icon: Github, label: 'GitHub' },
    { href: 'https://www.instagram.com/marcosxh_', icon: Instagram, label: 'Instagram' },
  ];

  const handleNavClick = (href: string) => {
    setIsOpen(false);
    const element = document.querySelector(href);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      {/* Mobile Menu Button */}
      <button
        className="fixed top-4 left-4 z-50 p-2 rounded-lg bg-card/80 backdrop-blur-lg border border-border/50 lg:hidden"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Menu"
      >
        {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
      </button>

      {/* Sidebar */}
      <aside
        className={cn(
          "fixed left-0 top-0 h-full w-72 bg-sidebar glass-effect z-40 transform transition-transform duration-300",
          "lg:translate-x-0",
          isOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"
        )}
      >
        <div className="flex flex-col h-full p-8">
          {/* Profile Section */}
          <div className="text-center mb-8">
            <div className="relative inline-block mb-4">
              <div className="w-32 h-32 rounded-full bg-gradient-primary p-[2px] mx-auto">
                <div className="w-full h-full rounded-full bg-sidebar overflow-hidden">
                  <img
                    src={profilePhoto}
                    alt="Marcos Vinícius"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              
            </div>
            <h2 className="text-xl font-poppins font-semibold mb-2">Marcos Vinícius</h2>
            <p className="text-muted-foreground text-sm">Desenvolvedor Full Stack</p>
          </div>

          {/* Social Links */}
          <div className="flex justify-center gap-4 mb-8">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-sidebar-accent hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover-glow"
                aria-label={link.label}
              >
                <link.icon className="w-5 h-5" />
              </a>
            ))}
          </div>

          {/* Navigation */}
          <nav className="flex-1">
            <ul className="space-y-2">
              {navItems.map((item) => (
                <li key={item.href}>
                  <button
                    onClick={() => handleNavClick(item.href)}
                    className={cn(
                      "w-full text-left px-4 py-3 rounded-lg transition-all duration-300",
                      "hover:bg-sidebar-accent hover:translate-x-2",
                      activeSection === item.href.slice(1) && "bg-sidebar-accent border-l-2 border-primary"
                    )}
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </nav>

          {/* Footer */}
          <div className="pt-8 border-t border-sidebar-border">
            <p className="text-xs text-muted-foreground text-center">
              © 2025 Marcos Vinícius
            </p>
          </div>
        </div>
      </aside>

      {/* Overlay for mobile */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-background/50 backdrop-blur-sm z-30 lg:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}
    </>
  );
};

export default Sidebar;
