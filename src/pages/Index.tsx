import AuroraBackground from '@/components/AuroraBackground';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import PillaresSection from '@/components/PillaresSection';
import ProcessoSection from '@/components/ProcessoSection';
import FooterSection from '@/components/FooterSection';

const Index = () => {
  return (
    <div className="relative min-h-screen overflow-x-hidden">
      <AuroraBackground />
      <div className="relative z-10">
        <Navbar />
        <HeroSection />
        <PillaresSection />
        <ProcessoSection />
        <FooterSection />
      </div>
    </div>
  );
};

export default Index;
