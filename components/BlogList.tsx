import React from 'react';
import { BLOG_POSTS } from '../constants';
import ArticleCard from './ArticleCard';

interface BlogListProps {
  onSelectPost?: (id: string) => void;
  limit?: number;
}

const BlogList: React.FC<BlogListProps> = ({ onSelectPost, limit }) => {
  const postsToShow = limit ? BLOG_POSTS.slice(0, limit) : BLOG_POSTS;

  return (
    <section id="blog" className="py-24 bg-zenth-bg dark:bg-zenth-darkBg relative transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-serif font-bold text-slate-900 dark:text-white mb-6">Últimos Artículos</h2>
          <p className="text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto font-medium">
            Consejos prácticos sobre neurodivergencia, productividad y bienestar mental.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {postsToShow.map((post) => (
            <ArticleCard
              key={post.id}
              post={post}
              onClick={() => onSelectPost?.(post.id)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogList;