import { PortfolioPage, PortfolioPageProps } from "@/components/ui/starfall-portfolio-landing";
import ProcessoSection from "@/components/ProcessoSection";
import FooterSection from "@/components/FooterSection";

const genericData: PortfolioPageProps = {
  logo: {
    initials: "LO",
    name: "Logo",
  },
  navLinks: [
    { label: "Sobre", href: "#about" },
    { label: "Projetos", href: "#projects" },
    { label: "Skills", href: "#skills" },
  ],
  resume: {
    label: "Currículo",
  },
  hero: {
    titleLine1: "Título principal aqui",
    titleLine2Gradient: "com destaque em gradiente",
    subtitle:
      "Subtítulo descritivo do projeto ou serviço. Use este espaço para apresentar sua proposta de valor de forma clara e objetiva.",
  },
  ctaButtons: {
    primary: {
      label: "Botão Primário",
    },
    secondary: {
      label: "Botão Secundário",
    },
  },
  projects: [
    {
      title: "Projeto 1",
      description: "Descrição breve do primeiro projeto e suas principais características.",
      tags: ["Tag 1", "Tag 2"],
      imageContent: <div className="text-4xl">✨</div>,
    },
    {
      title: "Projeto 2",
      description: "Descrição breve do segundo projeto e suas principais características.",
      tags: ["Tag 1", "Tag 2"],
      imageContent: <div className="text-4xl">🚀</div>,
    },
    {
      title: "Projeto 3",
      description: "Descrição breve do terceiro projeto e suas principais características.",
      tags: ["Tag 1", "Tag 2"],
      imageContent: <div className="text-4xl">💡</div>,
    },
  ],
  stats: [
    { value: "50+", label: "Projetos" },
    { value: "5+", label: "Anos de Experiência" },
    { value: "20+", label: "Clientes" },
  ],
  showAnimatedBackground: true,
};

const Index = () => {
  return (
    <div className="relative">
      <PortfolioPage {...genericData} />
      <div className="relative z-10">
        <ProcessoSection />
        <FooterSection />
      </div>
    </div>
  );
};

export default Index;
