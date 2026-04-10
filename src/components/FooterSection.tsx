const FooterSection = () => {
  return (
    <footer id="contato" className="relative py-20 px-6 border-t border-border/30">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          <span className="text-foreground">Pronto para </span>
          <span className="text-gradient">escalar com IA</span>
          <span className="text-foreground">?</span>
        </h2>
        <p className="text-muted-foreground mb-8 max-w-lg mx-auto">
          Entre em contato e descubra como podemos transformar seu negócio.
        </p>
        <a
          href="mailto:contato@aglabs.com.br"
          className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-semibold text-accent-foreground transition-all hover:scale-105"
          style={{ background: 'var(--gradient-primary)' }}
        >
          Fale com a AG LABS
        </a>

        <div className="mt-16 pt-8 border-t border-border/20 text-sm text-muted-foreground">
          © {new Date().getFullYear()} AG LABS. Todos os direitos reservados.
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
