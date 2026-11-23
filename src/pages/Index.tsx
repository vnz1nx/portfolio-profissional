import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import PracticeLab from "@/components/PracticeLab";
import Portfolio from "@/components/Portfolio";
import Experience from "@/components/Experience";
import Education from "@/components/Education";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import { useNavScroll } from "@/hooks/useNavScroll";

const Index = () => {
  const { activeSection } = useNavScroll();

  return (
    <div className="min-h-screen bg-[var(--bg)] text-[var(--ink)]">
      <a
        href="#conteudo-principal"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded focus:bg-[var(--bg-dark)] focus:px-4 focus:py-2 focus:text-sm focus:font-medium focus:text-[var(--ink-on-dark)]"
      >
        Ir para o conteúdo principal
      </a>

      <Nav activeSection={activeSection} />

      <main id="conteudo-principal">
        <Hero />
        <PracticeLab />
        <Portfolio />
        <Experience />
        <Education />
        <Contact />
      </main>

      <Footer />
    </div>
  );
};

export default Index;
