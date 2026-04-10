import { PortfolioPage, PortfolioPageProps } from "@/components/ui/starfall-portfolio-landing";
import PillaresSection from "@/components/PillaresSection";
import ProcessoSection from "@/components/ProcessoSection";
import FooterSection from "@/components/FooterSection";

const agLabsData: PortfolioPageProps = {
  logo: {
    initials: "AG",
    name: "AG LABS",
  },
  navLinks: [
    { label: "Serviços", href: "#projects" },
    { label: "Processo", href: "#processo" },
    { label: "Contato", href: "#contato" },
  ],
  resume: {
    label: "Fale Conosco",
    onClick: () => {
      document.getElementById("contato")?.scrollIntoView({ behavior: "smooth" });
    },
  },
  hero: {
    titleLine1: "Sistemas de IA que",
    titleLine2Gradient: "automatizam, escalam e operam negócios",
    subtitle:
      "Automações, agentes inteligentes, SaaS e sistemas sob medida para empresas que querem crescer com eficiência.",
  },
  ctaButtons: {
    primary: {
      label: "Como Funciona",
      onClick: () => {
        document.getElementById("processo")?.scrollIntoView({ behavior: "smooth" });
      },
    },
    secondary: {
      label: "Nossos Serviços",
      onClick: () => {
        document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
      },
    },
  },
  projects: [
    {
      title: "Infraestrutura de IA",
      description: "Arquitetura, banco de dados e orquestração para sistemas inteligentes.",
      tags: ["Arquitetura", "Banco de dados", "Orquestração"],
      imageContent: <div className="text-4xl">🧩</div>,
    },
    {
      title: "Agentes Inteligentes",
      description: "Agentes de atendimento, vendas e suporte que operam 24/7.",
      tags: ["Atendimento", "Vendas", "Suporte"],
      imageContent: <div className="text-4xl">🤖</div>,
    },
    {
      title: "Automação",
      description: "Automação de processos internos e integração entre sistemas.",
      tags: ["Processos internos", "Integração"],
      imageContent: <div className="text-4xl">⚙️</div>,
    },
    {
      title: "Produtos & SaaS",
      description: "Barber PRO e APP AG LABS — soluções prontas com IA generativa.",
      tags: ["Barber PRO", "APP AG LABS"],
      imageContent: <div className="text-4xl">📈</div>,
    },
  ],
  stats: [
    { value: "4", label: "Pilares de IA" },
    { value: "100+", label: "Automações Entregues" },
    { value: "24/7", label: "Agentes em Operação" },
  ],
  showAnimatedBackground: true,
};

const Index = () => {
  return (
    <div className="relative">
      <PortfolioPage {...agLabsData} />
      <div className="relative z-10">
        <ProcessoSection />
        <FooterSection />
      </div>
    </div>
  );
};

export default Index;
