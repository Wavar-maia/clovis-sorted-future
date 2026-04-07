const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 border-t border-border/50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2">
            <img src="/logo-clovis.png" alt="Clovis logo" className="h-7 w-7" />
            <span className="text-xl font-bold text-foreground">Clovis</span>
          </div>

          <p className="text-muted-foreground text-center">
            L'automatisation intelligente pour les distributeurs industriels.
          </p>

          <p className="text-sm text-muted-foreground">
            © {currentYear} Clovis. Tous droits réservés.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
