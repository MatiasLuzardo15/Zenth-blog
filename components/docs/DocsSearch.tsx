import React, { useEffect, useMemo, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import { Link, useNavigate } from 'react-router-dom';
import { ArrowUpRight, ChevronRight, CornerDownLeft, Search, X } from 'lucide-react';
import { DOC_STARTING_POINTS, docHref, getArticleByKey, getCategory } from '../../content/docs';
import { highlightSegments, queryTerms, searchDocs } from '../../content/docs/search';
import type { SearchHit } from '../../content/docs/search';

interface DocsSearchProps {
  open: boolean;
  initialQuery?: string;
  onClose: () => void;
}

const Highlighted: React.FC<{ text: string; terms: string[] }> = ({ text, terms }) => (
  <>
    {highlightSegments(text, terms).map((segment, index) =>
      segment.hit ? (
        <mark key={index} className="rounded-small bg-accent/25 px-0.5 text-ink">{segment.text}</mark>
      ) : (
        <React.Fragment key={index}>{segment.text}</React.Fragment>
      ),
    )}
  </>
);

/** Sin búsqueda escrita se ofrecen los artículos por los que conviene empezar. */
const startingHits = (): SearchHit[] =>
  DOC_STARTING_POINTS.flatMap(key => {
    const article = getArticleByKey(key);
    const category = getCategory(article?.category);
    if (!article || !category) return [];
    return [{
      article,
      category,
      sectionId: null,
      sectionTitle: null,
      href: docHref(article),
      snippet: article.summary,
      score: 0,
    }];
  });

const DocsSearch: React.FC<DocsSearchProps> = ({ open, initialQuery = '', onClose }) => {
  const navigate = useNavigate();
  const [query, setQuery] = useState(initialQuery);
  const [active, setActive] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);
  const returnFocusRef = useRef<HTMLElement | null>(null);

  const idle = query.trim() === '';
  const terms = useMemo(() => queryTerms(query), [query]);
  const rows = useMemo(() => (idle ? startingHits() : searchDocs(query)), [idle, query]);

  // Al abrir: parte de cero (o de la consulta recibida), enfoca el campo y
  // bloquea el scroll de la página. Al cerrar, devuelve el foco a quien lo abrió.
  useEffect(() => {
    if (!open) return;
    returnFocusRef.current = document.activeElement instanceof HTMLElement ? document.activeElement : null;
    setQuery(initialQuery);
    setActive(0);
    const frame = requestAnimationFrame(() => inputRef.current?.focus());
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      cancelAnimationFrame(frame);
      document.body.style.overflow = previousOverflow;
      returnFocusRef.current?.focus?.({ preventScroll: true });
    };
  }, [open, initialQuery]);

  useEffect(() => { setActive(0); }, [query]);

  useEffect(() => {
    if (!open) return;
    document.getElementById(`docs-search-row-${active}`)?.scrollIntoView({ block: 'nearest' });
  }, [active, open]);

  if (!open) return null;

  const go = (hit: SearchHit) => {
    onClose();
    navigate(hit.href);
  };

  const onKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === 'Escape') {
      event.preventDefault();
      onClose();
    } else if (event.key === 'ArrowDown') {
      event.preventDefault();
      if (rows.length > 0) setActive(current => (current + 1) % rows.length);
    } else if (event.key === 'ArrowUp') {
      event.preventDefault();
      if (rows.length > 0) setActive(current => (current - 1 + rows.length) % rows.length);
    } else if (event.key === 'Enter') {
      const hit = rows[active];
      if (hit) {
        event.preventDefault();
        go(hit);
      }
    }
  };

  return createPortal(
    <div
      className="fixed inset-0 z-[70] flex items-start justify-center px-4 pt-[9vh] sm:pt-[12vh]"
      role="dialog"
      aria-modal="true"
      aria-label="Buscar en la documentación"
      onKeyDown={onKeyDown}
    >
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={onClose} />

      <div className="fr-elevated animate-fade-up relative z-10 flex max-h-[76vh] w-full max-w-2xl flex-col overflow-hidden rounded-atmos bg-surface-1">
        <div className="flex items-center gap-3 border-b border-hairline px-5">
          <Search className="h-[18px] w-[18px] shrink-0 text-ink-muted" strokeWidth={1.75} aria-hidden="true" />
          <input
            ref={inputRef}
            value={query}
            onChange={event => setQuery(event.target.value)}
            type="text"
            role="combobox"
            aria-expanded="true"
            aria-controls="docs-search-results"
            aria-activedescendant={rows.length > 0 ? `docs-search-row-${active}` : undefined}
            aria-autocomplete="list"
            autoComplete="off"
            autoCorrect="off"
            spellCheck={false}
            placeholder="Busca «lienzos», «invitados», «atajos»…"
            className="h-14 min-w-0 flex-1 bg-transparent text-[1.0625rem] text-ink outline-none placeholder:text-ink-muted focus-visible:shadow-none"
          />
          <button
            type="button"
            onClick={onClose}
            aria-label="Cerrar la búsqueda"
            className="fr-btn fr-btn-icon shrink-0"
          >
            <X className="h-[18px] w-[18px]" />
          </button>
        </div>

        <div className="min-h-0 flex-1 overflow-y-auto p-2">
          {idle && <p className="t-eyebrow px-3 pb-2 pt-3">Por dónde empezar</p>}

          {rows.length > 0 ? (
            <ul id="docs-search-results" role="listbox" aria-label="Resultados" className="space-y-0.5">
              {rows.map((hit, index) => (
                <li key={hit.href} role="presentation">
                  <Link
                    id={`docs-search-row-${index}`}
                    to={hit.href}
                    role="option"
                    aria-selected={index === active}
                    tabIndex={-1}
                    onClick={event => {
                      event.preventDefault();
                      go(hit);
                    }}
                    onMouseMove={() => { if (index !== active) setActive(index); }}
                    className={`block rounded-large px-3 py-3 transition-colors ${index === active ? 'bg-surface-2' : ''}`}
                  >
                    <span className="t-micro flex flex-wrap items-center gap-1 text-ink-muted">
                      {hit.category.title}
                      <ChevronRight className="h-3 w-3" aria-hidden="true" />
                      <span className="text-ink-muted">{hit.article.title}</span>
                    </span>
                    <span className="t-body-sm mt-1 block text-ink">
                      {hit.sectionTitle ? <Highlighted text={hit.sectionTitle} terms={terms} /> : (
                        <Highlighted text={hit.article.title} terms={terms} />
                      )}
                    </span>
                    <span className="t-caption mt-1 block font-normal leading-snug text-ink-muted">
                      <Highlighted text={hit.snippet} terms={terms} />
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          ) : (
            <div id="docs-search-results" className="px-4 py-10 text-center">
              <p className="t-body-lg text-ink">Nada por «{query.trim()}».</p>
              <p className="t-body mx-auto mt-2 max-w-sm text-ink-muted">
                Prueba con menos palabras o con otro nombre (por ejemplo «reunión» en vez de «llamada»).
                Si falta algo en la documentación, cuéntamelo.
              </p>
              <a
                href="https://mail.google.com/mail/?view=cm&fs=1&to=matiasluzardevv@gmail.com&su=Falta%20en%20la%20documentaci%C3%B3n"
                target="_blank"
                rel="noopener noreferrer"
                className="fr-btn fr-btn-secondary mt-6"
              >
                Escribirme
                <ArrowUpRight className="h-4 w-4" />
              </a>
            </div>
          )}
        </div>

        <div className="hidden items-center gap-5 border-t border-hairline px-5 py-3 sm:flex" aria-hidden="true">
          <span className="t-micro flex items-center gap-1.5 text-ink-muted">
            <kbd className="rounded-small border border-hairline px-1.5 py-0.5 font-ui">↑</kbd>
            <kbd className="rounded-small border border-hairline px-1.5 py-0.5 font-ui">↓</kbd>
            navegar
          </span>
          <span className="t-micro flex items-center gap-1.5 text-ink-muted">
            <kbd className="rounded-small border border-hairline px-1.5 py-0.5 font-ui"><CornerDownLeft className="h-3 w-3" /></kbd>
            abrir
          </span>
          <span className="t-micro flex items-center gap-1.5 text-ink-muted">
            <kbd className="rounded-small border border-hairline px-1.5 py-0.5 font-ui">esc</kbd>
            cerrar
          </span>
          {!idle && (
            <span className="t-micro ml-auto text-ink-muted">
              {rows.length} {rows.length === 1 ? 'resultado' : 'resultados'}
            </span>
          )}
        </div>
      </div>
    </div>,
    document.body,
  );
};

export default DocsSearch;
