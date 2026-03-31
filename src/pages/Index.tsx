import Nav from '@/components/Nav';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Skills from '@/components/Skills';
import Portfolio from '@/components/Portfolio';
import Education from '@/components/Education';
import Experience from '@/components/Experience';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import { useNavScroll } from '@/hooks/useNavScroll';

const Index = () => {
  const { isScrolled, activeSection } = useNavScroll();

  return (
    <div className="min-h-screen" style={{ background: '#0a0a0a' }}>
      <Nav isScrolled={isScrolled} activeSection={activeSection} />

      <main>
        <Hero />
        <About />
        <Skills />
        <Portfolio />
        <Experience />
        <Education />
        <Contact />
        <Footer />
      </main>
    </div>
  );
};

export default Index;
