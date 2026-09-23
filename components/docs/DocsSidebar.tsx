import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown, Search } from 'lucide-react';
import { DOC_CATEGORIES, articlesOf } from '../../content/docs';

interface DocsSidebarProps {
  categoryId?: string;
  slug?: string;
  onOpenSearch: () => void;
  /** Se llama al elegir un destino: en móvil cierra el panel. */
  onNavigate?: () => void;
}

const isApplePlatform = () =>
  typeof navigator !== 'undefined' && /Mac|iPhone|iPad/.test(navigator.platform || navigator.userAgent);

const DocsSidebar: React.FC<DocsSidebarProps> = ({ categoryId, slug, onOpenSearch, onNavigate }) => {
  const [expanded, setExpanded] = useState<Set<string>>(() => new Set(categoryId ? [categoryId] : []));

  // Al llegar a un artículo por un enlace o por el buscador, su categoría se abre sola.
  useEffect(() => {
    if (!categoryId) return;
    setExpanded(current => (current.has(categoryId) ? current : new Set(current).add(categoryId)));
  }, [categoryId]);

  const toggle = (id: string) =>
    setExpanded(current => {
      const next = new Set(current);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });

  return (
    <nav aria-label="Documentación" className="space-y-1">
      <button
        type="button"
        onClick={onOpenSearch}
        className="fr-input mb-4 flex w-full items-center gap-2.5 text-left text-ink-muted"
      >
        <Search className="h-4 w-4 shrink-0" strokeWidth={1.75} aria-hidden="true" />
        <span className="flex-1">Buscar</span>
        <kbd className="t-micro rounded-small border border-hairline px-1.5 py-0.5 font-ui" aria-hidden="true">
          {isApplePlatform() ? '⌘ K' : 'Ctrl K'}
        </kbd>
      </button>

      <Link
        to="/docs"
        onClick={onNavigate}
        aria-current={!categoryId ? 'page' : undefined}
        className={`t-body-sm block rounded-medium px-2.5 py-2 transition-colors ${!categoryId ? 'bg-surface-2 text-ink' : 'text-ink-muted hover:bg-surface-1 hover:text-ink'}`}
      >
        Inicio
      </Link>

      {DOC_CATEGORIES.map(category => {
        const Icon = category.icon;
        const isOpen = expanded.has(category.id);
        const onCategoryPage = category.id === categoryId && !slug;
        return (
          <div key={category.id}>
            <div className="flex items-center gap-0.5">
              <Link
                to={`/docs/${category.id}`}
                onClick={onNavigate}
                aria-current={onCategoryPage ? 'page' : undefined}
                className={`t-body-sm flex min-w-0 flex-1 items-center gap-2.5 rounded-medium px-2.5 py-2 transition-colors ${onCategoryPage || (category.id === categoryId && !isOpen) ? 'bg-surface-2 text-ink' : 'text-ink hover:bg-surface-1'}`}
              >
                <Icon className="h-4 w-4 shrink-0 text-ink-muted" strokeWidth={1.75} />
                <span className="truncate">{category.title}</span>
              </Link>
              <button
                type="button"
                onClick={() => toggle(category.id)}
                aria-expanded={isOpen}
                aria-label={`${isOpen ? 'Contraer' : 'Expandir'} ${category.title}`}
                className="flex h-9 w-9 shrink-0 items-center justify-center rounded-medium text-ink-muted transition-colors hover:bg-surface-1 hover:text-ink"
              >
                <ChevronDown className={`h-4 w-4 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
              </button>
            </div>

            {isOpen && (
              <ul className="ml-[1.15rem] mt-0.5 space-y-0.5 border-l border-hairline pl-2">
                {articlesOf(category.id).map(article => {
                  const isActive = category.id === categoryId && article.slug === slug;
                  return (
                    <li key={article.slug}>
                      <Link
                        to={`/docs/${article.category}/${article.slug}`}
                        onClick={onNavigate}
                        aria-current={isActive ? 'page' : undefined}
                        className={`t-caption block rounded-medium px-2.5 py-1.5 font-normal leading-snug transition-colors ${isActive ? 'bg-surface-2 font-medium text-ink' : 'text-ink-muted hover:bg-surface-1 hover:text-ink'}`}
                      >
                        {article.title}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            )}
          </div>
        );
      })}
    </nav>
  );
};

export default DocsSidebar;
