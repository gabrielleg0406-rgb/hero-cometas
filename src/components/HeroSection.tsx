import { ArrowRight, Zap } from 'lucide-react';

const HeroSection = () => {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 pt-24">
      <div className="max-w-5xl mx-auto text-center">
        <div
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card glow-border mb-8"
          style={{ animation: 'slide-up 0.6s ease-out forwards' }}
        >
          <Zap className="w-4 h-4 text-primary" />
          <span className="text-sm text-muted-foreground">Agência de Inteligência Artificial</span>
        </div>

        <h1
          className="text-4xl sm:text-5xl md:text-7xl font-bold tracking-tight leading-tight mb-6"
          style={{ animation: 'slide-up 0.6s ease-out 0.1s forwards', opacity: 0 }}
        >
          <span className="text-foreground">Sistemas de IA que </span>
          <span className="text-gradient">automatizam, escalam</span>
          <br />
          <span className="text-foreground">e </span>
          <span className="text-gradient-glow">operam negócios</span>
        </h1>

        <p
          className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10"
          style={{ animation: 'slide-up 0.6s ease-out 0.2s forwards', opacity: 0 }}
        >
          Automações, agentes inteligentes, SaaS e sistemas sob medida para empresas que querem crescer com eficiência.
        </p>

        <div
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
          style={{ animation: 'slide-up 0.6s ease-out 0.3s forwards', opacity: 0 }}
        >
          <button
            onClick={() => scrollToSection('processo')}
            className="group px-8 py-4 rounded-xl font-semibold text-accent-foreground transition-all duration-300 hover:scale-105"
            style={{ background: 'var(--gradient-primary)' }}
          >
            <span className="flex items-center gap-2">
              Como Funciona
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </span>
          </button>
          <button
            onClick={() => scrollToSection('pilares')}
            className="px-8 py-4 rounded-xl font-semibold border border-border text-foreground hover:border-primary/50 hover:bg-primary/5 transition-all duration-300"
          >
            Nossos Serviços
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
