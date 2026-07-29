import React, { useMemo, useState } from 'react';
import { ArrowLeft, ArrowUpRight } from 'lucide-react';
import { BLOG_POSTS } from '../constants';
import ArticleCard from './ArticleCard';

interface BlogPageProps {
  onBack: () => void;
  onSelectPost: (id: string) => void;
}

const ALL = 'Todo';

const BlogPage: React.FC<BlogPageProps> = ({ onBack, onSelectPost }) => {
  const [category, setCategory] = useState(ALL);

  const categories = useMemo(
    () => [ALL, ...Array.from(new Set(BLOG_POSTS.map(p => p.category)))],
    []
  );

  const posts = useMemo(
    () => (category === ALL ? BLOG_POSTS : BLOG_POSTS.filter(p => p.category === category)),
    [category]
  );

  // El destacado sólo tiene sentido en la vista sin filtrar: dentro de una
  // categoría el orden ya es la jerarquía.
  const showFeatured = category === ALL;
  const featured = showFeatured ? posts[0] : null;
  const rest = showFeatured ? posts.slice(1) : posts;

  return (
    <div className="min-h-screen pt-28 pb-24 lg:pt-36">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <button
          onClick={onBack}
          className="t-caption group mb-10 inline-flex items-center gap-2 text-ink-muted transition-colors hover:text-ink"
        >
          <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-0.5" />
          Volver al inicio
        </button>

        <p className="t-eyebrow">Blog</p>
        <h1 className="t-display-xl mt-4 text-ink">Productividad sin ruido.</h1>
        <p className="t-body-lg mt-6 max-w-xl text-ink-muted">
          Novedades de la aplicación y lo que dice la neurociencia sobre atención, hábitos y
          descanso. Sin trucos de rendimiento extremo.
        </p>

        {/* Filtro por categoría */}
        <div className="-mx-1 mt-10 flex gap-1 overflow-x-auto pb-2">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setCategory(cat)}
              aria-selected={category === cat}
              role="tab"
              className="fr-tab shrink-0"
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Destacado */}
        {featured && (
          <button
            onClick={() => onSelectPost(featured.id)}
            className="fr-card-featured group mt-10 grid w-full gap-8 p-4 text-left transition-transform duration-300 hover:-translate-y-1 md:grid-cols-2 md:p-5"
          >
            <div className="aspect-[16/10] overflow-hidden rounded-large bg-canvas md:aspect-auto md:h-full">
              <img
                src={featured.imageUrl}
                alt=""
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
              />
            </div>
            <div className="flex flex-col justify-center p-2 md:p-6">
              <div className="t-micro flex items-center gap-2 text-ink-muted">
                <span>{featured.category}</span>
                <span aria-hidden="true">·</span>
                <span>{featured.date}</span>
              </div>
              <h2 className="t-display-md mt-4 text-ink">{featured.title}</h2>
              <p className="t-body-lg mt-4 text-ink-muted">{featured.excerpt}</p>
              <span className="t-caption mt-8 inline-flex items-center gap-1.5 text-ink">
                Leer artículo
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </span>
            </div>
          </button>
        )}

        {/* Rejilla */}
        <div className="mt-4 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {rest.map(post => (
            <ArticleCard key={post.id} post={post} onClick={() => onSelectPost(post.id)} />
          ))}
        </div>

        {posts.length === 0 && (
          <p className="t-body mt-16 text-center text-ink-muted">
            Todavía no hay artículos en esta categoría.
          </p>
        )}
      </div>
    </div>
  );
};

export default BlogPage;
