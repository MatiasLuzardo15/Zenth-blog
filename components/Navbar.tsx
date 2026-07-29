import React, { useState, useEffect } from 'react';
import { Menu, X, Moon, Sun, ArrowUpRight } from 'lucide-react';

interface NavbarProps {
  isDarkMode: boolean;
  toggleTheme: () => void;
  currentPage: 'home' | 'blog' | 'faq' | 'guide';
  onNavigate: (page: 'home' | 'blog' | 'faq' | 'guide', sectionId?: string) => void;
}

type NavPage = 'home' | 'blog' | 'faq' | 'guide';

const NAV_LINKS: { name: string; page: NavPage; id?: string }[] = [
  { name: 'Funciones', page: 'home', id: 'features' },
  { name: 'Instalar', page: 'home', id: 'install' },
  { name: 'Blog', page: 'blog' },
  { name: 'FAQ', page: 'faq' },
  { name: 'Guía', page: 'guide' },
];

const Navbar: React.FC<NavbarProps> = ({ isDarkMode, toggleTheme, currentPage, onNavigate }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 12);
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // El menú desplegado bloquea el scroll de fondo: si no, el overlay flota
  // sobre una página que se sigue moviendo debajo.
  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  const goToApp = () => {
    window.location.href = 'https://zenth.space/app';
  };

  const handleNavClick = (page: NavPage, sectionId?: string) => {
    setIsOpen(false);
    onNavigate(page, sectionId);
  };

  // Sólo las páginas propias marcan estado activo. Los anclajes de la home
  // cambian con el scroll y encenderlos aquí sería mentir.
  const isActive = (link: { page: NavPage; id?: string }) =>
    !link.id && link.page === currentPage;

  return (
    <>
      <nav
        className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${scrolled ? 'bg-canvas-blur border-b border-hairline backdrop-blur-xl' : 'border-b border-transparent'
          }`}
      >
        <div className="mx-auto flex h-14 w-full items-center gap-4 px-4 sm:px-6 lg:grid lg:grid-cols-[1fr_auto_1fr] lg:px-8">
          {/* Marca */}
          <button
            onClick={() => handleNavClick('home', 'hero')}
            className="flex shrink-0 items-center gap-2 lg:justify-self-start"
            aria-label="Ir al inicio"
          >
            <img src="/blog/favicon2.png" alt="" className="h-7 w-7 rounded-small object-contain" />
            <span className="font-display text-[19px] text-ink">Zenth</span>
          </button>

          {/* Enlaces de escritorio */}
          <div className="hidden items-center gap-1 md:flex lg:justify-self-center">
            {NAV_LINKS.map(link => (
              <button
                key={link.name}
                onClick={() => handleNavClick(link.page, link.id)}
                aria-current={isActive(link) ? 'page' : undefined}
                className={`fr-tab whitespace-nowrap ${isActive(link) ? 'is-selected' : ''}`}
              >
                {link.name}
              </button>
            ))}
          </div>

          {/* Acciones */}
          <div className="flex shrink-0 items-center gap-2 lg:justify-self-end">
            <button
              onClick={toggleTheme}
              className="fr-btn fr-btn-icon"
              aria-label={isDarkMode ? 'Activar modo claro' : 'Activar modo oscuro'}
            >
              {isDarkMode ? <Sun className="h-[18px] w-[18px]" /> : <Moon className="h-[18px] w-[18px]" />}
            </button>

            <button onClick={goToApp} className="fr-btn fr-btn-primary hidden sm:inline-flex">
              Abrir Zenth
              <ArrowUpRight className="h-4 w-4" />
            </button>

            <button
              onClick={() => setIsOpen(!isOpen)}
              className="fr-btn fr-btn-icon md:hidden"
              aria-label={isOpen ? 'Cerrar menú' : 'Abrir menú'}
              aria-expanded={isOpen}
            >
              {isOpen ? <X className="h-[18px] w-[18px]" /> : <Menu className="h-[18px] w-[18px]" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Overlay móvil */}
      {isOpen && (
        <div className="fixed inset-0 z-40 bg-canvas pt-14 md:hidden">
          <div className="flex flex-col gap-1 px-4 py-8">
            {NAV_LINKS.map(link => (
              <button
                key={link.name}
                onClick={() => handleNavClick(link.page, link.id)}
                className="flex items-center justify-between rounded-medium px-3 py-4 text-left text-[22px] font-display tracking-[-0.03em] text-ink transition-colors hover:bg-surface-1"
              >
                {link.name}
                <ArrowUpRight className="h-5 w-5 text-ink-muted" />
              </button>
            ))}

            <button onClick={goToApp} className="fr-btn fr-btn-primary fr-btn-lg mt-6 w-full">
              Abrir Zenth
              <ArrowUpRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
