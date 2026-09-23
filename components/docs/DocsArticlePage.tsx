import React, { useMemo } from 'react';
import { Link, Navigate, useParams } from 'react-router-dom';
import { ArrowLeft, ArrowRight, ArrowUpRight, ChevronRight, Mail } from 'lucide-react';
import {
  docHref,
  getArticle,
  getArticleByKey,
  getCategory,
  neighborsOf,
  sectionsOf,
} from '../../content/docs';
import type { DocArticle, DocCategory } from '../../content/docs';
import { formatDocDate } from '../../content/docs/text';
import { DocContent } from './DocBlocks';
import DocsToc from './DocsToc';

const ArticleView: React.FC<{ article: DocArticle; category: DocCategory }> = ({ article, category }) => {
  const toc = useMemo(
    () =>
      sectionsOf(article)
        .filter((section): section is typeof section & { id: string } => section.id !== null)
        .map(section => ({ id: section.id, title: section.title })),
    [article],
  );
  const { previous, next } = neighborsOf(article);
  const related = (article.related ?? [])
    .map(getArticleByKey)
    .filter((candidate): candidate is DocArticle => Boolean(candidate));

  const feedbackHref = `https://mail.google.com/mail/?view=cm&fs=1&to=matiasluzardevv@gmail.com&su=${encodeURIComponent(`Documentación: ${article.title}`)}`;

  return (
    <div className="xl:grid xl:grid-cols-[minmax(0,1fr)_13rem] xl:gap-12">
      <article className="min-w-0 max-w-3xl pb-8">
        <nav aria-label="Ruta" className="t-caption flex flex-wrap items-center gap-1.5 text-ink-muted">
          <Link to="/docs" className="transition-colors hover:text-ink">Documentación</Link>
          <ChevronRight className="h-3.5 w-3.5" aria-hidden="true" />
          <Link to={`/docs/${category.id}`} className="transition-colors hover:text-ink">{category.title}</Link>
        </nav>

        <header className="mt-8">
          <h1 className="t-display-lg text-ink">{article.title}</h1>
          <p className="t-body-lg mt-5 max-w-2xl text-ink-muted">{article.summary}</p>
          <p className="t-micro mt-5 text-ink-muted">Revisado el {formatDocDate(article.updated)}</p>
        </header>

        {toc.length >= 3 && (
          <details className="fr-card mt-8 xl:hidden">
            <summary className="t-caption cursor-pointer text-ink">En esta página</summary>
            <ul className="mt-4 space-y-2">
              {toc.map(item => (
                <li key={item.id}>
                  <Link to={`#${item.id}`} className="t-body text-ink-muted transition-colors hover:text-ink">{item.title}</Link>
                </li>
              ))}
            </ul>
          </details>
        )}

        <div className="mt-10 border-t border-hairline-soft pt-2">
          <DocContent article={article} />
        </div>

        {related.length > 0 && (
          <section className="mt-16" aria-labelledby="docs-related">
            <h2 id="docs-related" className="t-headline text-ink">Sigue leyendo</h2>
            <div className="mt-5 grid gap-3 sm:grid-cols-2">
              {related.map(candidate => (
                <Link key={docHref(candidate)} to={docHref(candidate)} className="fr-card group transition-transform duration-300 hover:-translate-y-0.5">
                  <span className="t-micro text-ink-muted">{getCategory(candidate.category)?.title}</span>
                  <span className="t-body-sm mt-2 flex items-start justify-between gap-3 text-ink">
                    {candidate.title}
                    <ArrowUpRight className="mt-0.5 h-4 w-4 shrink-0 text-ink-muted transition-colors group-hover:text-ink" />
                  </span>
                </Link>
              ))}
            </div>
          </section>
        )}

        {(previous || next) && (
          <nav aria-label="Artículos de este tema" className="mt-12 grid gap-3 sm:grid-cols-2">
            {previous ? (
              <Link to={docHref(previous)} className="fr-btn-secondary group flex flex-col items-start gap-1 rounded-large p-4 transition-colors hover:bg-surface-2">
                <span className="t-micro flex items-center gap-1.5 text-ink-muted">
                  <ArrowLeft className="h-3.5 w-3.5" /> Anterior
                </span>
                <span className="t-body-sm whitespace-normal text-left text-ink">{previous.title}</span>
              </Link>
            ) : <span />}
            {next && (
              <Link to={docHref(next)} className="fr-btn-secondary group flex flex-col items-end gap-1 rounded-large p-4 transition-colors hover:bg-surface-2 sm:col-start-2">
                <span className="t-micro flex items-center gap-1.5 text-ink-muted">
                  Siguiente <ArrowRight className="h-3.5 w-3.5" />
                </span>
                <span className="t-body-sm whitespace-normal text-right text-ink">{next.title}</span>
              </Link>
            )}
          </nav>
        )}

        <aside className="fr-card-featured mt-12 flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h2 className="t-headline text-ink">¿Algo no coincide con lo que ves?</h2>
            <p className="t-body mt-2 max-w-md text-ink-muted">
              La documentación sigue a Zenth de cerca, pero puede quedarse atrás. Cuéntamelo y lo corrijo.
            </p>
          </div>
          <a href={feedbackHref} target="_blank" rel="noopener noreferrer" className="fr-btn fr-btn-primary shrink-0">
            <Mail className="h-4 w-4" />
            Avisarme
            <ArrowUpRight className="h-4 w-4" />
          </a>
        </aside>
      </article>

      <aside className="hidden xl:block">
        <div className="sticky top-24 pt-1">
          <DocsToc items={toc} />
        </div>
      </aside>
    </div>
  );
};

const DocsArticlePage: React.FC = () => {
  const { category: categoryId, slug } = useParams();
  const article = getArticle(categoryId, slug);
  const category = getCategory(categoryId);

  if (!article || !category) return <Navigate to={category ? `/docs/${category.id}` : '/docs'} replace />;

  return <ArticleView article={article} category={category} />;
};

export default DocsArticlePage;
