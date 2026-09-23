import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, BookOpen, ChevronRight, Mail, Search } from 'lucide-react';
import {
  DOC_ARTICLES,
  DOC_CATEGORIES,
  DOC_STARTING_POINTS,
  articlesOf,
  docHref,
  getArticleByKey,
  getCategory,
} from '../../content/docs';
import { formatDocDate } from '../../content/docs/text';
import { useDocs } from './DocsLayout';

/** Búsquedas de ejemplo: enseñan que se puede preguntar por lo que se quiere hacer. */
const SEARCH_EXAMPLES = ['Compartir una pizarra', 'Lienzos', 'Reuniones rápidas', 'Notificaciones', 'Atajos', 'Varias cuentas'];

const isApplePlatform = () =>
  typeof navigator !== 'undefined' && /Mac|iPhone|iPad/.test(navigator.platform || navigator.userAgent);

const DocsHome: React.FC = () => {
  const { openSearch } = useDocs();
  const latest = DOC_ARTICLES.reduce((max, article) => (article.updated > max ? article.updated : max), '');
  const starting = DOC_STARTING_POINTS.map(getArticleByKey).filter((article): article is NonNullable<typeof article> => Boolean(article));

  return (
    <div className="pb-8">
      <header>
        <p className="t-eyebrow">Documentación</p>
        <h1 className="t-display-xl mt-4 text-ink">
          Todo Zenth,
          <br />
          explicado.
        </h1>
        <p className="t-body-lg mt-6 max-w-xl text-ink-muted">
          Guías paso a paso de cada sección de la aplicación. Busca por lo que quieres hacer: no hace
          falta saber cómo se llama la pantalla.
        </p>

        <button
          type="button"
          onClick={() => openSearch()}
          className="fr-input mt-10 flex w-full max-w-2xl items-center gap-3 py-4 text-left text-ink-muted"
        >
          <Search className="h-[18px] w-[18px] shrink-0" strokeWidth={1.75} aria-hidden="true" />
          <span className="t-body-lg flex-1">Buscar en la documentación</span>
          <kbd className="t-micro hidden rounded-small border border-hairline px-1.5 py-0.5 font-ui sm:inline" aria-hidden="true">
            {isApplePlatform() ? '⌘ K' : 'Ctrl K'}
          </kbd>
        </button>

        <div className="mt-4 flex max-w-2xl flex-wrap items-center gap-2">
          <span className="t-micro text-ink-muted">Prueba con</span>
          {SEARCH_EXAMPLES.map(example => (
            <button key={example} type="button" onClick={() => openSearch(example)} className="fr-btn fr-btn-translucent t-micro">
              {example}
            </button>
          ))}
        </div>

        <p className="t-micro mt-8 text-ink-muted">
          {DOC_ARTICLES.length} artículos en {DOC_CATEGORIES.length} temas
          {latest && <> · Revisada contra la aplicación el {formatDocDate(latest)}</>}
        </p>
      </header>

      <section className="mt-16" aria-labelledby="docs-starting">
        <h2 id="docs-starting" className="t-headline text-ink">Por dónde empezar</h2>
        <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {starting.map(article => (
            <Link
              key={article.slug}
              to={docHref(article)}
              className="fr-card group flex flex-col transition-transform duration-300 hover:-translate-y-1"
            >
              <span className="t-micro text-ink-muted">{getCategory(article.category)?.title}</span>
              <span className="t-headline mt-3 text-ink">{article.title}</span>
              <span className="t-body mt-2 text-ink-muted">{article.summary}</span>
              <span className="t-caption mt-6 inline-flex items-center gap-1.5 pt-2 text-ink-muted transition-colors group-hover:text-ink">
                Leer
                <ArrowUpRight className="h-3.5 w-3.5" />
              </span>
            </Link>
          ))}
        </div>
      </section>

      <section className="mt-20" aria-labelledby="docs-topics">
        <h2 id="docs-topics" className="t-headline text-ink">Explora por tema</h2>
        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          {DOC_CATEGORIES.map(category => {
            const Icon = category.icon;
            const count = articlesOf(category.id).length;
            return (
              <Link
                key={category.id}
                to={`/docs/${category.id}`}
                className="fr-card group flex flex-col items-start transition-transform duration-300 hover:-translate-y-1"
              >
                <Icon className="h-5 w-5 text-ink" strokeWidth={1.75} />
                <span className="t-headline mt-5 text-ink">{category.title}</span>
                <span className="t-body mt-2 text-ink-muted">{category.description}</span>
                <span className="t-caption mt-6 inline-flex items-center gap-1 text-ink-muted transition-colors group-hover:text-ink">
                  {count} {count === 1 ? 'artículo' : 'artículos'}
                  <ChevronRight className="h-3.5 w-3.5" />
                </span>
              </Link>
            );
          })}
        </div>
      </section>

      <section className="mt-20 grid gap-4 md:grid-cols-2" aria-label="Más ayuda">
        <div className="fr-card flex flex-col items-start gap-5">
          <div>
            <h2 className="t-headline text-ink">¿Una duda rápida?</h2>
            <p className="t-body mt-2 text-ink-muted">
              Las preguntas frecuentes responden lo que más me escriben, en una o dos frases.
            </p>
          </div>
          <Link to="/faq" className="fr-btn fr-btn-secondary">
            <BookOpen className="h-4 w-4" />
            Ver las preguntas frecuentes
          </Link>
        </div>
        <div className="fr-card-featured flex flex-col items-start gap-5">
          <div>
            <h2 className="t-headline text-ink">¿Falta algo?</h2>
            <p className="t-body mt-2 text-ink-muted">
              Si no encuentras una respuesta o algo no coincide con lo que ves en la app, escríbeme.
              Contesto yo, no un formulario.
            </p>
          </div>
          <a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=matiasluzardevv@gmail.com&su=Documentaci%C3%B3n%20de%20Zenth"
            target="_blank"
            rel="noopener noreferrer"
            className="fr-btn fr-btn-primary"
          >
            <Mail className="h-4 w-4" />
            Escribirme
            <ArrowUpRight className="h-4 w-4" />
          </a>
        </div>
      </section>
    </div>
  );
};

export default DocsHome;
