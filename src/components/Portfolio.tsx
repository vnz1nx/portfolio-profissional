import { useState } from 'react';
import { ExternalLink, ArrowUpRight } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import projectStuart    from '@/assets/StuartEocaminho.png';
import projectVans      from '@/assets/Vans Tela.png';
import projectCalculator from '@/assets/calculadora.jpeg';
import projectBarbershop from '@/assets/BarbeariaJava.png';
import projectLogin     from '@/assets/SiteLogins.png';
import projectUserSystem from '@/assets/RegistroDeUsuario.png';
import projectDuckMaze  from '@/assets/patoweb.png';
import projectBarberApp from '@/assets/barberapp.jpeg';

interface Project {
  id: number;
  title: string;
  category: string;
  image: string;
  link: string;
  description: string;
  featured?: boolean;
}

const projects: Project[] = [
  {
    id: 1,
    title: 'Stuart e o Castelo Perdido',
    category: 'next',
    image: projectStuart,
    link: 'https://labirinto-rho.vercel.app/',
    description: 'Jogo de labirinto desenvolvido com Next.js — navegação, lógica de jogo e animações no browser.',
    featured: true,
  },
  {
    id: 2,
    title: 'Site Vans',
    category: 'react',
    image: projectVans,
    link: 'https://vans-projeto2-ano.vercel.app/',
    description: 'E-commerce responsivo construído com React, foco em UX e performance.',
  },
  {
    id: 3,
    title: 'BarberApp',
    category: 'react-native',
    image: projectBarberApp,
    link: 'https://vnz1nxz-barberapp--l6whp4rlwz.expo.app/',
    description: 'App mobile de agendamento para barbearias com React Native.',
  },
  {
    id: 4,
    title: 'Labirinto do Pato',
    category: 'react-native',
    image: projectDuckMaze,
    link: 'https://patoweb--hbzhdl745v.expo.app/',
    description: 'Jogo mobile interativo desenvolvido com React Native + Expo.',
  },
  {
    id: 5,
    title: 'Interface de Cadastro e Logins',
    category: 'html-css',
    image: projectLogin,
    link: 'https://vnz1nx.github.io/TelaLogineCadastro/',
    description: 'Interface responsiva com HTML5 e CSS3 puro.',
  },
  {
    id: 6,
    title: 'Calculadora',
    category: 'react-native',
    image: projectCalculator,
    link: 'https://calculadora--lr8qyjv644.expo.app/',
    description: 'Calculadora mobile com React Native.',
  },
  {
    id: 7,
    title: 'Programa para Barbearia',
    category: 'java',
    image: projectBarbershop,
    link: '#',
    description: 'Sistema desktop em Java para gestão de barbearias.',
  },
  {
    id: 8,
    title: 'Registro Online de Usuário',
    category: 'java',
    image: projectUserSystem,
    link: 'https://github.com/vnz1nx/PageUsuario',
    description: 'Sistema web em Java para registro e gerenciamento de usuários.',
  },
];

const categories = [
  { value: 'all',          label: 'Todos' },
  { value: 'react',        label: 'React' },
  { value: 'next',         label: 'Next.js' },
  { value: 'react-native', label: 'React Native' },
  { value: 'java',         label: 'Java' },
  { value: 'html-css',     label: 'HTML/CSS' },
];

/* ── Featured Card (full-width) ── */
const FeaturedCard = ({ project, visible, delay }: { project: Project; visible: boolean; delay: number }) => (
  <a
    href={project.link}
    target="_blank"
    rel="noopener noreferrer"
    className="group block overflow-hidden rounded-3xl transition-all duration-500 hover:scale-[1.01]"
    style={{
      background:      'rgba(255,255,255,0.04)',
      border:          '1px solid rgba(255,255,255,0.08)',
      opacity:         visible ? 1 : 0,
      transform:       visible ? 'translateY(0)' : 'translateY(40px)',
      transitionDelay: `${delay}s`,
      transitionTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)',
    }}
  >
    <div className="md:grid md:grid-cols-2 md:min-h-[360px]">
      {/* Image */}
      <div className="relative overflow-hidden aspect-video md:aspect-auto">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-transparent to-black/60 opacity-0 md:opacity-100" />
      </div>

      {/* Content */}
      <div className="flex flex-col justify-center p-8 md:p-12">
        <span className="eyebrow mb-3" style={{ color: '#a1a1a6' }}>
          {categories.find(c => c.value === project.category)?.label}
        </span>
        <h3 className="font-poppins font-bold text-white text-2xl md:text-3xl mb-4 leading-tight">
          {project.title}
        </h3>
        <p className="text-white/50 mb-8 leading-relaxed">
          {project.description}
        </p>
        <div className="flex items-center gap-2 text-sm font-medium text-white/40 group-hover:text-white transition-colors duration-300">
          <ExternalLink className="w-4 h-4" />
          <span>Ver projeto</span>
        </div>
      </div>
    </div>
  </a>
);

/* ── Standard Card ── */
const StandardCard = ({ project, visible, delay }: { project: Project; visible: boolean; delay: number }) => (
  <a
    href={project.link}
    target="_blank"
    rel="noopener noreferrer"
    className="group block overflow-hidden rounded-2xl transition-all duration-500 hover:scale-[1.02]"
    style={{
      background:      'rgba(255,255,255,0.04)',
      border:          '1px solid rgba(255,255,255,0.08)',
      opacity:         visible ? 1 : 0,
      transform:       visible ? 'translateY(0)' : 'translateY(40px)',
      transitionDelay: `${delay}s`,
      transitionTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)',
    }}
  >
    {/* Image */}
    <div className="relative overflow-hidden aspect-video">
      <img
        src={project.image}
        alt={project.title}
        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-end p-4">
        <ArrowUpRight className="w-5 h-5 text-white translate-x-2 -translate-y-2 group-hover:translate-x-0 group-hover:translate-y-0 transition-transform duration-300" />
      </div>
    </div>

    {/* Content */}
    <div className="p-6">
      <span className="eyebrow mb-2 block" style={{ color: '#6e6e73' }}>
        {categories.find(c => c.value === project.category)?.label}
      </span>
      <h3 className="font-poppins font-semibold text-white text-lg mb-2 group-hover:text-white/80 transition-colors">
        {project.title}
      </h3>
      <p className="text-sm text-white/40 leading-relaxed">
        {project.description}
      </p>
    </div>
  </a>
);

/* ── Main Component ── */
const Portfolio = () => {
  const [filter, setFilter] = useState('all');
  const [headerRef, headerVisible] = useScrollAnimation<HTMLDivElement>();
  const [gridRef, gridVisible]     = useScrollAnimation<HTMLDivElement>();

  const filtered = filter === 'all'
    ? projects
    : projects.filter(p => p.category === filter);

  const featured  = filtered.filter(p => p.featured);
  const standard  = filtered.filter(p => !p.featured);

  return (
    <section
      id="portfolio"
      data-theme="dark"
      className="py-28 md:py-40 px-6"
      style={{ background: '#0a0a0a' }}
    >
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <div ref={headerRef} className="text-center mb-14">
          <p
            className="eyebrow mb-4 transition-all duration-700"
            style={{
              color:   '#a1a1a6',
              opacity: headerVisible ? 1 : 0,
              transform: headerVisible ? 'translateY(0)' : 'translateY(16px)',
              transitionTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)',
            }}
          >
            Trabalhos
          </p>
          <h2
            className="font-poppins font-bold text-white text-headline transition-all duration-700"
            style={{
              opacity:         headerVisible ? 1 : 0,
              transform:       headerVisible ? 'translateY(0)' : 'translateY(20px)',
              transitionDelay: '0.1s',
              transitionTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)',
            }}
          >
            Portfólio
          </h2>
        </div>

        {/* Filter pills */}
        <div
          className="flex flex-wrap justify-center gap-2 mb-14 transition-all duration-700"
          style={{
            opacity:         headerVisible ? 1 : 0,
            transform:       headerVisible ? 'translateY(0)' : 'translateY(16px)',
            transitionDelay: '0.2s',
            transitionTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)',
          }}
        >
          {categories.map(cat => (
            <button
              key={cat.value}
              onClick={() => setFilter(cat.value)}
              className={cn(
                'px-5 py-2 rounded-full text-sm font-medium transition-all duration-300',
                filter === cat.value
                  ? 'text-white'
                  : 'text-white/50 hover:text-white/80 border border-white/10 hover:border-white/20'
              )}
              style={
                filter === cat.value
                  ? { background: 'linear-gradient(135deg, hsl(250 95% 65%), hsl(270 95% 70%))' }
                  : {}
              }
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Projects layout */}
        <div ref={gridRef} className="space-y-6">
          {/* Featured row */}
          {featured.map((project, i) => (
            <FeaturedCard key={project.id} project={project} visible={gridVisible} delay={i * 0.1} />
          ))}

          {/* Standard grid */}
          {standard.length > 0 && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {standard.map((project, i) => (
                <StandardCard
                  key={project.id}
                  project={project}
                  visible={gridVisible}
                  delay={(featured.length ? 0.15 : 0) + i * 0.08}
                />
              ))}
            </div>
          )}
        </div>

      </div>
    </section>
  );
};

export default Portfolio;
