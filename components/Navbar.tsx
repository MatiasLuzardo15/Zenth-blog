import React, { useState, useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { Menu, X, Moon, Sun, ArrowUpRight, ChevronDown } from 'lucide-react';
import DocsMenu from './docs/DocsMenu';

interface NavbarProps {
  isDarkMode: boolean;
  toggleTheme: () => void;
  currentPage: 'home' | 'blog' | 'faq' | 'docs';
  onNavigate: (page: 'home' | 'blog' | 'faq' | 'docs', sectionId?: string) => void;
}

type NavPage = 'home' | 'blog' | 'faq' | 'docs';

const mobileMenuVariants = {
  closed: { opacity: 0, y: -12 },
  open: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.32, ease: [0.16, 1, 0.3, 1], staggerChildren: 0.045, delayChildren: 0.05 },
  },
  exit: { opacity: 0, y: -8, transition: { duration: 0.2, ease: [0.4, 0, 1, 1] } },
};

const mobileMenuItemVariants = {
  closed: { opacity: 0, y: -8 },
  open: { opacity: 1, y: 0, transition: { duration: 0.26, ease: [0.16, 1, 0.3, 1] } },
};

const NAV_LINKS: { name: string; page: NavPage; id?: string }[] = [
  { name: 'Funciones', page: 'home', id: 'features' },
  { name: 'Instalar', page: 'home', id: 'install' },
  { name: 'Blog', page: 'blog' },
  { name: 'FAQ', page: 'faq' },
  { name: 'Documentación', page: 'docs' },
];

const Navbar: React.FC<NavbarProps> = ({ isDarkMode, toggleTheme, currentPage, onNavigate }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [docsMenuOpen, setDocsMenuOpen] = useState(false);
  const docsMenuTimer = useRef<number>();
  const docsTriggerRef = useRef<HTMLButtonElement>(null);
  const location = useLocation();

  // Tras elegir un enlace o pulsar Escape, el menú ignora durante un instante
  // los intentos de abrirse: al cambiar de página el navegador repite el
  // «mouseenter» sobre el panel que se está cerrando, y Escape devuelve el foco
  // al botón, que también lo abriría.
  const docsMenuQuietUntil = useRef(0);

  // El índice de la documentación se abre al pasar el cursor y se cierra con
  // un pequeño margen, para que cruzar el hueco hasta el panel no lo cierre.
  const openDocsMenu = () => {
    if (performance.now() < docsMenuQuietUntil.current) return;
    window.clearTimeout(docsMenuTimer.current);
    setDocsMenuOpen(true);
  };
  const closeDocsMenu = (delay = 140) => {
    window.clearTimeout(docsMenuTimer.current);
    docsMenuTimer.current = window.setTimeout(() => setDocsMenuOpen(false), delay);
  };
  const dismissDocsMenu = () => {
    docsMenuQuietUntil.current = performance.now() + 500;
    closeDocsMenu(0);
  };

  useEffect(() => () => window.clearTimeout(docsMenuTimer.current), []);

  useEffect(() => {
    closeDocsMenu(0);
  }, [location.pathname]);

  // Escape cierra el índice aunque se haya abierto con el cursor y el foco
  // esté en otra parte. Si el foco estaba dentro, vuelve al botón.
  useEffect(() => {
    if (!docsMenuOpen) return;
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key !== 'Escape') return;
      const focusInside = docsTriggerRef.current?.parentElement?.contains(document.activeElement);
      dismissDocsMenu();
      if (focusInside) docsTriggerRef.current?.focus();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [docsMenuOpen]);

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
            {currentPage === 'docs' && (
              <span
                className="-ml-0.5 hidden text-[24px] italic leading-none text-ink-muted lg:inline"
                style={{ fontFamily: "'Shadows Into Light', cursive" }}
              >
                Documents
              </span>
            )}
          </button>

          {/* Enlaces de escritorio */}
          <div className="hidden items-center gap-1 md:flex lg:justify-self-center">
            {NAV_LINKS.map(link => link.page === 'docs' ? (
              <div
                key={link.name}
                onMouseEnter={openDocsMenu}
                onMouseLeave={() => closeDocsMenu()}
                onFocus={openDocsMenu}
                onBlur={event => {
                  if (!event.currentTarget.contains(event.relatedTarget as Node | null)) closeDocsMenu(0);
                }}
              >
                <button
                  ref={docsTriggerRef}
                  onClick={() => {
                    dismissDocsMenu();
                    handleNavClick(link.page, link.id);
                  }}
                  aria-current={isActive(link) ? 'page' : undefined}
                  aria-expanded={docsMenuOpen}
                  aria-controls="docs-menu"
                  className={`fr-tab inline-flex items-center gap-1 whitespace-nowrap max-lg:!px-3 ${isActive(link) || docsMenuOpen ? 'is-selected' : ''}`}
                >
                  {link.name}
                  <ChevronDown
                    className={`h-3.5 w-3.5 transition-transform duration-200 ${docsMenuOpen ? 'rotate-180' : ''}`}
                    aria-hidden="true"
                  />
                </button>

                <AnimatePresence>
                  {docsMenuOpen && (
                    // Centrado respecto a la barra (que ocupa todo el ancho). El
                    // padding superior es el puente entre el botón y el panel.
                    <motion.div
                      id="docs-menu"
                      initial={{ opacity: 0, y: -6 }}
                      animate={{ opacity: 1, y: 0, transition: { duration: 0.22, ease: [0.16, 1, 0.3, 1] } }}
                      exit={{ opacity: 0, y: -4, transition: { duration: 0.14, ease: [0.4, 0, 1, 1] } }}
                      className="absolute inset-x-0 top-full mx-auto w-[min(860px,calc(100vw-32px))] pt-2"
                    >
                      <DocsMenu onNavigate={dismissDocsMenu} />
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ) : (
              <button
                key={link.name}
                onClick={() => handleNavClick(link.page, link.id)}
                aria-current={isActive(link) ? 'page' : undefined}
                className={`fr-tab whitespace-nowrap max-lg:!px-3 ${isActive(link) ? 'is-selected' : ''}`}
              >
                {link.name}
              </button>
            ))}
          </div>

          {/* Acciones */}
          <div className="ml-auto flex shrink-0 items-center gap-2 lg:ml-0 lg:justify-self-end">
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
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial="closed"
            animate="open"
            exit="exit"
            variants={mobileMenuVariants}
            className="fixed inset-0 z-40 overflow-y-auto bg-canvas pt-14 md:hidden"
          >
            <div className="flex flex-col gap-1 px-4 py-8">
              {NAV_LINKS.map(link => (
                <motion.button
                  key={link.name}
                  variants={mobileMenuItemVariants}
                  onClick={() => handleNavClick(link.page, link.id)}
                  className="flex items-center justify-between rounded-medium px-3 py-4 text-left text-[22px] font-display tracking-[-0.03em] text-ink transition-colors hover:bg-surface-1"
                >
                  {link.name}
                  <ArrowUpRight className="h-5 w-5 text-ink-muted" />
                </motion.button>
              ))}

              <motion.button
                variants={mobileMenuItemVariants}
                onClick={goToApp}
                className="fr-btn fr-btn-primary fr-btn-lg mt-6 w-full"
              >
                Abrir Zenth
                <ArrowUpRight className="h-4 w-4" />
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
