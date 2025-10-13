import { useState } from 'react';
import { ExternalLink } from 'lucide-react';
import { cn } from '@/lib/utils';
import projectStuart from '@/assets/StuartEocaminho.png';
import projectVans from '@/assets/Vans Tela.png';
import projectCalculator from '@/assets/calculadora.jpeg';
import projectBarbershop from '@/assets/BarbeariaJava.png';
import projectLogin from '@/assets/SiteLogins.png';
import projectUserSystem from '@/assets/RegistroDeUsuario.png';
import projectDuckMaze from '@/assets/patoweb.png';
import projectBarberApp from '@/assets/barberapp.jpeg';

interface Project {
  id: number;
  title: string;
  category: string;
  image?: string;
  video?: string;
  link: string;
  description: string;
}

const Portfolio = () => {
  const [filter, setFilter] = useState('all');

  const projects: Project[] = [
    {
      id: 1,
      title: 'Stuart e o castelo perdido',
      category: 'next',
      image: projectStuart,
      link: 'https://labirinto-mv.vercel.app/',
      description: 'Jogo desenvolvido com Next.js'
    },
    {
      id: 2,
      title: 'Site Vans',
      category: 'react',
      image: projectVans,
      link: 'https://vans-projeto2-ano.vercel.app/',
      description: 'E-commerce desenvolvido com React'
    },
    {
      id: 3,
      title: 'Calculadora',
      category: 'react-native',
      image: projectCalculator,
      link: 'https://calculadora--lr8qyjv644.expo.app/',
      description: 'App mobile com React Native'
    },
    {
      id: 4,
      title: 'Programa para barbearia',
      category: 'java',
      image: projectBarbershop,
      link: '#',
      description: 'Sistema desktop em Java'
    },
    {
      id: 5,
      title: 'Interface de cadastro e logins',
      category: 'html-css',
      image: projectLogin,
      link: 'https://vnz1nx.github.io/TelaLogineCadastro/',
      description: 'Interface responsiva HTML/CSS'
    },
    {
      id: 6,
      title: 'Registro online de usuário',
      category: 'java',
      image: projectUserSystem,
      link: 'https://github.com/vnz1nx/PageUsuario',
      description: 'Sistema web com Java'
    },
    {
      id: 7,
      title: 'Labirinto do pato',
      category: 'react-native',
      image: projectDuckMaze,
      link: 'https://patoweb--hbzhdl745v.expo.app/',
      description: 'Jogo mobile com React Native'
    },
    {
      id: 8,
      title: 'BarberApp',
      category: 'react-native',
      image: projectBarberApp,
      link: 'https://barberapp1--a41hxtu2o1.expo.app/',
      description: 'App de agendamento para barbearias'
    },
  ];

  const categories = [
    { value: 'all', label: 'Todos' },
    { value: 'java', label: 'Java' },
    { value: 'react-native', label: 'React Native' },
    { value: 'html-css', label: 'HTML/CSS' },
    { value: 'react', label: 'React' },
    { value: 'next', label: 'Next.js' },
  ];

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.category === filter);

  return (
    <section id="portfolio" className="py-20 px-8">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-poppins font-bold mb-8 text-center gradient-text">
          Portfolio
        </h2>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((cat) => (
            <button
              key={cat.value}
              onClick={() => setFilter(cat.value)}
              className={cn(
                "px-6 py-2 rounded-full font-medium transition-all duration-300",
                filter === cat.value
                  ? "bg-gradient-primary text-primary-foreground shadow-glow"
                  : "bg-card hover:bg-card/80 text-foreground"
              )}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project, index) => (
            <a
              key={project.id}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group project-card animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative overflow-hidden h-48">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                  <ExternalLink className="w-5 h-5 text-primary" />
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-poppins font-semibold mb-2 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-sm text-muted-foreground mb-2">{project.description}</p>
                <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-xs rounded-full">
                  {categories.find(c => c.value === project.category)?.label}
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;