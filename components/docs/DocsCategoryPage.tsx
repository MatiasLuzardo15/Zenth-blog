import React from 'react';
import { Link, Navigate, useParams } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';
import { articlesOf, docHref, getCategory } from '../../content/docs';

const DocsCategoryPage: React.FC = () => {
  const { category: categoryId } = useParams();
  const category = getCategory(categoryId);

  if (!category) return <Navigate to="/docs" replace />;

  const Icon = category.icon;
  const articles = articlesOf(category.id);

  return (
    <div className="pb-8">
      <nav aria-label="Ruta" className="t-caption flex items-center gap-1.5 text-ink-muted">
        <Link to="/docs" className="transition-colors hover:text-ink">Documentación</Link>
        <ChevronRight className="h-3.5 w-3.5" aria-hidden="true" />
        <span className="text-ink" aria-current="page">{category.title}</span>
      </nav>

      <header className="mt-8">
        <Icon className="h-7 w-7 text-ink" strokeWidth={1.5} />
        <h1 className="t-display-lg mt-5 text-ink">{category.title}</h1>
        <p className="t-body-lg mt-5 max-w-xl text-ink-muted">{category.description}</p>
      </header>

      <ul className="mt-12 border-t border-hairline-soft">
        {articles.map(article => (
          <li key={article.slug} className="border-b border-hairline-soft">
            <Link to={docHref(article)} className="group flex items-start justify-between gap-6 py-6">
              <span className="min-w-0">
                <span className="t-headline block text-ink">{article.title}</span>
                <span className="t-body mt-2 block max-w-2xl text-ink-muted">{article.summary}</span>
              </span>
              <ChevronRight className="mt-1 h-5 w-5 shrink-0 text-ink-muted transition-transform group-hover:translate-x-0.5 group-hover:text-ink" />
            </Link>
          </li>
        ))}
      </ul>

      {articles.length === 0 && (
        <p className="t-body mt-12 text-ink-muted">Todavía no hay artículos en este tema.</p>
      )}
    </div>
  );
};

export default DocsCategoryPage;
