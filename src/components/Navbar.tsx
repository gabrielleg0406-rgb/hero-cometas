import { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const scrollTo = (id: string) => {
    setOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 px-6 py-4">
      <div className="max-w-6xl mx-auto glass-card rounded-2xl px-6 py-3 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-9 h-9 rounded-lg flex items-center justify-center font-bold text-sm text-accent-foreground" style={{ background: 'var(--gradient-primary)' }}>
            AG
          </div>
          <span className="font-bold text-lg text-foreground">AG LABS</span>
        </div>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-8">
          <button onClick={() => scrollTo('pilares')} className="text-sm text-muted-foreground hover:text-foreground transition-colors">Serviços</button>
          <button onClick={() => scrollTo('processo')} className="text-sm text-muted-foreground hover:text-foreground transition-colors">Processo</button>
          <button onClick={() => scrollTo('contato')} className="text-sm px-5 py-2 rounded-lg font-semibold text-accent-foreground transition-all hover:scale-105" style={{ background: 'var(--gradient-primary)' }}>
            Fale Conosco
          </button>
        </div>

        {/* Mobile toggle */}
        <button className="md:hidden text-foreground" onClick={() => setOpen(!open)}>
          {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden mt-2 max-w-6xl mx-auto glass-card rounded-2xl p-4 flex flex-col gap-3">
          <button onClick={() => scrollTo('pilares')} className="text-sm text-muted-foreground hover:text-foreground py-2">Serviços</button>
          <button onClick={() => scrollTo('processo')} className="text-sm text-muted-foreground hover:text-foreground py-2">Processo</button>
          <button onClick={() => scrollTo('contato')} className="text-sm px-5 py-2 rounded-lg font-semibold text-accent-foreground" style={{ background: 'var(--gradient-primary)' }}>
            Fale Conosco
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
