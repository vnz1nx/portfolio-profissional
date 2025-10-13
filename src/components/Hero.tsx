import { useEffect, useState } from 'react';
import { cn } from '@/lib/utils';
import webIcon from '@/assets/computador-portatil.png';

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background gradient effect */}
      <div className="absolute inset-0 bg-gradient-glow"></div>
      
      <div className={cn(
        "text-center z-10 transition-all duration-1000 transform",
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      )}>
        <h1 className="text-5xl md:text-7xl font-poppins font-bold mb-4">
          <span className="gradient-text">Marcos Vinícius</span>
        </h1>
        <div className="flex items-center justify-center gap-2 text-xl md:text-2xl text-muted-foreground">
          <p>Desenvolvedor Full Stack</p>
          <img src={webIcon} alt="Web Development" className="w-6 h-6 animate-float" />
        </div>
        
        <div className="mt-8">
          <button
            onClick={() => document.querySelector('#sobre')?.scrollIntoView({ behavior: 'smooth' })}
            className="px-8 py-3 bg-gradient-primary text-primary-foreground rounded-full font-medium hover:shadow-glow transition-all duration-300 hover:scale-105"
          >
            Explorar
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;