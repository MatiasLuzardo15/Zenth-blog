import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { BlogPost } from '../types';

interface ArticleCardProps {
  post: BlogPost;
  onClick?: () => void;
}

const ArticleCard: React.FC<ArticleCardProps> = ({ post, onClick }) => {
  return (
    <article
      onClick={onClick}
      onKeyDown={e => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          onClick?.();
        }
      }}
      role="link"
      tabIndex={0}
      className="fr-card group flex h-full cursor-pointer flex-col p-3 transition-transform duration-300 hover:-translate-y-1"
    >
      <div className="relative aspect-[16/10] overflow-hidden rounded-large bg-canvas">
        {post.imageUrl ? (
          <img
            src={post.imageUrl}
            alt=""
            loading="lazy"
            className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
          />
        ) : (
          <div className="bg-dot-grid flex h-full w-full items-center justify-center">
            <span className="font-display text-[22px] text-ink-muted">Zenth</span>
          </div>
        )}
        <span className="fr-btn fr-btn-translucent pointer-events-none absolute left-3 top-3 t-micro bg-black/55 text-white backdrop-blur-md">
          {post.category}
        </span>
      </div>

      <div className="flex flex-1 flex-col p-4 pt-5">
        <div className="t-micro flex items-center gap-2 text-ink-muted">
          <span>{post.date}</span>
          {post.readTime && (
            <>
              <span aria-hidden="true">·</span>
              <span>{post.readTime}</span>
            </>
          )}
        </div>

        <h3 className="t-headline mt-3 text-ink">{post.title}</h3>

        <p className="t-body mt-3 line-clamp-3 flex-1 text-ink-muted">{post.excerpt}</p>

        <span className="t-caption mt-6 inline-flex items-center gap-1.5 text-ink-muted transition-colors group-hover:text-ink">
          Leer artículo
          <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </span>
      </div>
    </article>
  );
};

export default ArticleCard;
