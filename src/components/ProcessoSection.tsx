import { Search, PenTool, Rocket, RefreshCw } from 'lucide-react';

const steps = [
  {
    icon: Search,
    number: '01',
    title: 'Diagnóstico do Negócio',
    description: 'Entendemos seus processos, gargalos e oportunidades para aplicar IA com precisão.',
  },
  {
    icon: PenTool,
    number: '02',
    title: 'Arquitetura da Solução',
    description: 'Desenhamos a solução ideal integrando agentes, automações e infraestrutura.',
  },
  {
    icon: Rocket,
    number: '03',
    title: 'Implementação',
    description: 'Construímos e integramos tudo ao seu ecossistema de forma ágil e segura.',
  },
  {
    icon: RefreshCw,
    number: '04',
    title: 'Operação e Evolução',
    description: 'Monitoramos, otimizamos e evoluímos continuamente a sua solução.',
  },
];

const ProcessoSection = () => {
  return (
    <section id="processo" className="relative py-32 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            <span className="text-foreground">Como </span>
            <span className="text-gradient">Funciona</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">
            Um processo estruturado para entregar resultados reais
          </p>
        </div>

        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary/50 via-primary/20 to-transparent hidden sm:block" />

          <div className="space-y-12">
            {steps.map((step, index) => {
              const Icon = step.icon;
              const isEven = index % 2 === 0;

              return (
                <div
                  key={step.number}
                  className={`relative flex items-center gap-8 ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'}`}
                  style={{
                    animation: `slide-up 0.6s ease-out ${0.15 * index}s forwards`,
                    opacity: 0,
                  }}
                >
                  <div className={`flex-1 ${isEven ? 'md:text-right' : 'md:text-left'}`}>
                    <div className={`glass-card glow-border hover-glow p-6 inline-block ${isEven ? 'md:ml-auto' : ''}`}>
                      <div className="flex items-center gap-3 mb-2">
                        <span className="text-primary font-mono text-sm font-bold">{step.number}</span>
                        <h3 className="text-lg font-bold text-foreground">{step.title}</h3>
                      </div>
                      <p className="text-sm text-muted-foreground">{step.description}</p>
                    </div>
                  </div>

                  <div className="hidden md:flex items-center justify-center w-12 h-12 rounded-full bg-card border-2 border-primary/40 z-10 shrink-0">
                    <Icon className="w-5 h-5 text-primary" />
                  </div>

                  <div className="flex-1 hidden md:block" />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessoSection;
