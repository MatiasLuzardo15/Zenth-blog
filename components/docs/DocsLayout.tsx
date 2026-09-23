import React, { useCallback, useEffect, useRef, useState } from 'react';
import { Outlet, useLocation, useOutletContext, useSearchParams } from 'react-router-dom';
import { Menu, Search, X } from 'lucide-react';
import DocsSearch from './DocsSearch';
import DocsSidebar from './DocsSidebar';

export interface DocsOutletContext {
  /** Abre el buscador, opcionalmente con una consulta ya escrita. */
  openSearch: (query?: string) => void;
}

export const useDocs = () => useOutletContext<DocsOutletContext>();

const isTypingTarget = (target: EventTarget | null) => {
  const element = target as HTMLElement | null;
  if (!element) return false;
  return element.isContentEditable || ['INPUT', 'TEXTAREA', 'SELECT'].includes(element.tagName);
};

/**
 * Marco de la documentación: barra lateral, buscador y el artículo en el
 * centro. El buscador se abre con Ctrl/⌘+K o con «/», igual que en la app.
 */
const DocsLayout: React.FC = () => {
  const location = useLocation();
  const [searchParams, setSearchParams] = useSearchParams();
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchSeed, setSearchSeed] = useState('');
  const [menuOpen, setMenuOpen] = useState(false);
  const previousPath = useRef(location.pathname);

  const [, , categoryId, slug] = location.pathname.split('/');

  const openSearch = useCallback((query = '') => {
    setMenuOpen(false);
    setSearchSeed(query);
    setSearchOpen(true);
  }, []);

  // `/docs?q=texto` abre el buscador ya escrito: es el destino de la búsqueda del sitio.
  useEffect(() => {
    const query = searchParams.get('q');
    if (query === null) return;
    openSearch(query);
    const next = new URLSearchParams(searchParams);
    next.delete('q');
    setSearchParams(next, { replace: true });
  }, [searchParams, setSearchParams, openSearch]);

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if ((event.ctrlKey || event.metaKey) && !event.altKey && event.key.toLowerCase() === 'k') {
        event.preventDefault();
        setSearchOpen(open => !open);
        setSearchSeed('');
        return;
      }
      if (event.key === '/' && !event.ctrlKey && !event.metaKey && !event.altKey && !isTypingTarget(event.target)) {
        event.preventDefault();
        openSearch();
      }
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [openSearch]);

  // Cada artículo empieza arriba; un enlace con #sección baja hasta ella.
  // La página ya tiene scroll suave global: aquí solo se anima al saltar
  // dentro del mismo artículo, no al cambiar de página.
  useEffect(() => {
    const samePage = previousPath.current === location.pathname;
    previousPath.current = location.pathname;
    setMenuOpen(false);

    const frame = requestAnimationFrame(() => {
      const id = decodeURIComponent(location.hash.slice(1));
      const target = id ? document.getElementById(id) : null;
      if (target) target.scrollIntoView({ behavior: samePage ? 'smooth' : 'instant', block: 'start' });
      else if (!samePage || !id) window.scrollTo({ top: 0, behavior: 'instant' });
    });
    return () => cancelAnimationFrame(frame);
  }, [location.pathname, location.hash]);

  useEffect(() => {
    if (!menuOpen) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => { document.body.style.overflow = previous; };
  }, [menuOpen]);

  return (
    <div className="min-h-screen pb-24 pt-14">
      {/* Barra móvil: menú y búsqueda a mano sin ocupar una columna. */}
      <div className="sticky top-14 z-30 border-b border-hairline bg-canvas-blur backdrop-blur-xl lg:hidden">
        <div className="mx-auto flex h-12 max-w-7xl items-center gap-2 px-4 sm:px-6">
          <button
            type="button"
            onClick={() => setMenuOpen(true)}
            className="fr-btn fr-btn-translucent"
            aria-expanded={menuOpen}
            aria-controls="docs-drawer"
          >
            <Menu className="h-4 w-4" />
            Temas
          </button>
          <button
            type="button"
            onClick={() => openSearch()}
            className="fr-btn fr-btn-translucent ml-auto"
            aria-label="Buscar en la documentación"
          >
            <Search className="h-4 w-4" />
            Buscar
          </button>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:grid lg:grid-cols-[15.5rem_minmax(0,1fr)] lg:gap-12 lg:px-8">
        <aside className="hidden lg:block">
          <div className="sticky top-20 max-h-[calc(100vh-6rem)] overflow-y-auto py-10 pr-2">
            <DocsSidebar categoryId={categoryId} slug={slug} onOpenSearch={() => openSearch()} />
          </div>
        </aside>

        <div className="min-w-0 pt-10 lg:pt-14">
          <Outlet context={{ openSearch } satisfies DocsOutletContext} />
        </div>
      </div>

      {/* Panel móvil de temas */}
      {menuOpen && (
        <div id="docs-drawer" className="fixed inset-0 z-[60] lg:hidden" role="dialog" aria-modal="true" aria-label="Temas de la documentación">
          <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={() => setMenuOpen(false)} />
          <div className="fr-elevated animate-fade-up absolute inset-y-0 left-0 flex w-[min(20rem,88vw)] flex-col bg-canvas">
            <div className="flex h-14 items-center justify-between border-b border-hairline px-4">
              <span className="t-caption text-ink">Documentación</span>
              <button type="button" onClick={() => setMenuOpen(false)} className="fr-btn fr-btn-icon" aria-label="Cerrar temas">
                <X className="h-[18px] w-[18px]" />
              </button>
            </div>
            <div className="flex-1 overflow-y-auto px-4 py-5">
              <DocsSidebar
                categoryId={categoryId}
                slug={slug}
                onOpenSearch={() => openSearch()}
                onNavigate={() => setMenuOpen(false)}
              />
            </div>
          </div>
        </div>
      )}

      <DocsSearch open={searchOpen} initialQuery={searchSeed} onClose={() => setSearchOpen(false)} />
    </div>
  );
};

export default DocsLayout;
