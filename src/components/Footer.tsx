const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 border-t border-border/50 bg-muted/30">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-gradient-hero flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-sm">C</span>
            </div>
            <span className="text-xl font-bold text-foreground">Clovis</span>
          </div>

          {/* Tagline */}
          <p className="text-muted-foreground text-center">
            Smart textile sorting for a circular future.
          </p>

          {/* Copyright */}
          <p className="text-sm text-muted-foreground">
            © {currentYear} Clovis. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
