import { Brain, Bot, Cog, TrendingUp } from 'lucide-react';

const pillars = [
  {
    icon: Brain,
    emoji: '🧩',
    title: 'Infraestrutura de IA',
    items: ['Arquitetura', 'Banco de dados', 'Orquestração'],
  },
  {
    icon: Bot,
    emoji: '🤖',
    title: 'Agentes Inteligentes',
    items: ['Atendimento', 'Vendas', 'Suporte'],
  },
  {
    icon: Cog,
    emoji: '⚙️',
    title: 'Automação',
    items: ['Processos internos', 'Integração de sistemas'],
  },
  {
    icon: TrendingUp,
    emoji: '📈',
    title: 'Produtos & SaaS',
    items: ['Barber PRO', 'APP AG LABS (mídia generativa)'],
  },
];

const PillaresSection = () => {
  return (
    <section id="pilares" className="relative py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            <span className="text-gradient">4 Pilares</span>{' '}
            <span className="text-foreground">da AG LABS</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">
            Construímos a infraestrutura de IA por trás de empresas modernas
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {pillars.map((pillar, index) => (
            <div
              key={pillar.title}
              className="glass-card glow-border hover-glow p-6 group cursor-default"
              style={{
                animation: `slide-up 0.6s ease-out ${0.1 * index}s forwards`,
                opacity: 0,
              }}
            >
              <div className="text-4xl mb-4">{pillar.emoji}</div>
              <h3 className="text-lg font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                {pillar.title}
              </h3>
              <ul className="space-y-2">
                {pillar.items.map((item) => (
                  <li key={item} className="text-sm text-muted-foreground flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary/60" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PillaresSection;
