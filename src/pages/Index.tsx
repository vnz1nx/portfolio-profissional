import { useEffect, useState } from 'react';
import Sidebar from '@/components/Sidebar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Skills from '@/components/Skills';
import Portfolio from '@/components/Portfolio';
import Education from '@/components/Education';
import Experience from '@/components/Experience';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

const Index = () => {
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['sobre', 'habilidades', 'portfolio', 'formacao', 'experiencia', 'contato'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-subtle">
      <Sidebar activeSection={activeSection} />
      
      <main className="lg:ml-72">
        <Hero />
        <About />
        <Skills />
        <Portfolio />
        <Education />
        <Experience />
        <Contact />
        <Footer />
      </main>
    </div>
  );
};

export default Index;
