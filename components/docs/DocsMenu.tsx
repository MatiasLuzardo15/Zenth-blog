import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { DOC_CATEGORIES, DOC_STARTING_POINTS, articlesOf, docHref, getArticleByKey } from '../../content/docs';

/** Los primeros puntos de partida curados: el resto vive en la portada de /docs. */
const STARTING_POINTS = DOC_STARTING_POINTS.slice(0, 3)
  .map(getArticleByKey)
  .filter((article): article is NonNullable<typeof article> => Boolean(article));

interface DocsMenuProps {
  onNavigate: () => void;
}

/**
 * Índice de la documentación que se despliega desde «Documentación» en la
 * barra de navegación: por dónde empezar a la izquierda y todas las secciones
 * a la derecha, en el mismo orden que la barra lateral de /docs.
 */
const DocsMenu: React.FC<DocsMenuProps> = ({ onNavigate }) => (
  <div className="grid gap-2 rounded-card border border-hairline bg-canvas p-1.5 shadow-soft-lift md:grid-cols-[216px_1fr]">
    <div className="flex flex-col rounded-large bg-surface-1 p-4">
      <p className="t-eyebrow">Documentación</p>
      <p className="t-headline mt-2 text-ink">Aprende a usar Zenth</p>

      <p className="t-micro mt-4 text-ink-muted">Por dónde empezar</p>
      <ul className="mt-1.5">
        {STARTING_POINTS.map(article => (
          <li key={article.slug}>
            <Link
              to={docHref(article)}
              onClick={onNavigate}
              className="t-caption -mx-2 block rounded-medium px-2 py-1 font-normal leading-snug text-ink transition-colors hover:bg-surface-2"
            >
              {article.title}
            </Link>
          </li>
        ))}
      </ul>

      <Link
        to="/docs"
        onClick={onNavigate}
        className="t-caption group mt-auto inline-flex items-center gap-1.5 self-start whitespace-nowrap pt-4 text-ink"
      >
        Ver toda la documentación
        <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
      </Link>
    </div>

    <div className="flex flex-col p-2.5">
      <p className="t-micro px-2 text-ink-muted">Secciones</p>
      <ul className="mb-2.5 mt-1.5 grid gap-0.5 md:grid-cols-2 lg:grid-cols-3">
        {DOC_CATEGORIES.map(category => {
          const Icon = category.icon;
          const count = articlesOf(category.id).length;
          return (
            <li key={category.id}>
              <Link
                to={`/docs/${category.id}`}
                onClick={onNavigate}
                className="group flex items-start gap-2.5 rounded-medium px-2 py-1.5 transition-colors hover:bg-surface-1"
              >
                <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-medium bg-surface-1 text-ink-muted transition-colors group-hover:bg-surface-2 group-hover:text-ink">
                  <Icon className="h-[15px] w-[15px]" strokeWidth={1.75} />
                </span>
                <span className="min-w-0">
                  <span className="t-caption block truncate text-ink">{category.title}</span>
                  <span className="t-micro mt-0.5 block text-ink-muted">
                    {count} {count === 1 ? 'artículo' : 'artículos'}
                  </span>
                </span>
              </Link>
            </li>
          );
        })}
      </ul>

      <div className="mx-2 mt-auto flex items-center justify-between gap-4 border-t border-hairline pt-2.5 pb-0.5">
        <span className="t-micro text-ink-muted">¿Buscas una respuesta rápida?</span>
        <Link
          to="/faq"
          onClick={onNavigate}
          className="t-caption group inline-flex items-center gap-1.5 text-ink"
        >
          Preguntas frecuentes
          <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
        </Link>
      </div>
    </div>
  </div>
);

export default DocsMenu;
