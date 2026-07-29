import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { BLOG_POSTS } from '../constants';
import ArticleCard from './ArticleCard';

interface BlogListProps {
  onSelectPost?: (id: string) => void;
  onSeeAll?: () => void;
  limit?: number;
}

const BlogList: React.FC<BlogListProps> = ({ onSelectPost, onSeeAll, limit }) => {
  const postsToShow = limit ? BLOG_POSTS.slice(0, limit) : BLOG_POSTS;

  return (
    <section id="blog" className="scroll-mt-20 py-24 lg:py-32">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div className="max-w-2xl">
            <p className="t-eyebrow">Desde el blog</p>
            <h2 className="t-display-lg mt-4 text-ink">Novedades y por qué funcionan.</h2>
          </div>

          {onSeeAll && (
            <button onClick={onSeeAll} className="fr-btn fr-btn-secondary">
              Ver todo el blog
              <ArrowUpRight className="h-4 w-4" />
            </button>
          )}
        </div>

        <div className="mt-14 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {postsToShow.map(post => (
            <ArticleCard key={post.id} post={post} onClick={() => onSelectPost?.(post.id)} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogList;
