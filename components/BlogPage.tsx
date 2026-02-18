import React from 'react';
import { BLOG_POSTS } from '../constants';
import ArticleCard from './ArticleCard';
import { ArrowLeft, Sparkles } from 'lucide-react';

interface BlogPageProps {
  onBack: () => void;
  onSelectPost: (id: string) => void;
}

const BlogPage: React.FC<BlogPageProps> = ({ onBack, onSelectPost }) => {
  // Destacamos el primer post
  const featuredPost = BLOG_POSTS[0];
  const otherPosts = BLOG_POSTS.slice(1);

  return (
    <div className="pt-24 pb-20 min-h-screen bg-zenth-bg dark:bg-zenth-darkBg">

      {/* Header del Blog */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <button
          onClick={onBack}
          className="group flex items-center text-lg font-bold text-slate-600 dark:text-slate-400 hover:text-black dark:hover:text-white mb-8 transition-colors"
        >
          <ArrowLeft className="w-5 h-5 mr-2 group-hover:-translate-x-1 transition-transform" />
          Volver al inicio
        </button>

        <div className="text-center md:text-left relative">
          <div className="absolute -top-10 left-0 text-6xl animate-pulse opacity-20 hidden md:block">✏️</div>
          <h1 className="text-5xl md:text-7xl font-serif font-black text-slate-900 dark:text-white mb-4">
            El Blog de <span className="underline decoration-wavy decoration-zenth-markerBlue">Zenth</span>
          </h1>
          <p className="text-xl text-slate-600 dark:text-slate-300 font-sans max-w-2xl">
            Reflexiones sobre productividad consciente, actualizaciones de la app y consejos para sobrevivir al caos moderno.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Featured Post */}
        <div className="mb-16">
          <h2 className="text-2xl font-marker text-black dark:text-white mb-6 flex items-center">
            <Sparkles className="w-5 h-5 mr-2 text-zenth-markerYellow fill-current" /> Destacado
          </h2>
          <div
            onClick={() => onSelectPost(featuredPost.id)}
            className="grid md:grid-cols-2 gap-8 bg-white dark:bg-slate-900 border-2 border-black dark:border-white p-6 rounded-lg shadow-sketch-xl dark:shadow-sketch-xl-white transform hover:-translate-y-1 transition-transform cursor-pointer group"
          >
            <div className="h-64 md:h-auto overflow-hidden border-2 border-black dark:border-white rounded bg-gray-100">
              <img
                src={featuredPost.imageUrl}
                alt={featuredPost.title}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>
            <div className="flex flex-col justify-center">
              <span className="text-zenth-400 font-bold tracking-widest uppercase text-sm mb-2">{featuredPost.category}</span>
              <h3 className="text-3xl md:text-4xl font-serif font-bold text-black dark:text-white mb-4 leading-tight">
                {featuredPost.title}
              </h3>
              <p className="text-lg text-slate-600 dark:text-slate-300 font-sans mb-6">
                {featuredPost.excerpt}
              </p>
              <div className="mt-auto pt-6 border-t-2 border-dashed border-slate-200 dark:border-slate-700 flex items-center justify-between">
                <span className="font-bold text-sm text-slate-500">{featuredPost.date} • Por {featuredPost.author}</span>
                <button
                  onClick={(e) => { e.stopPropagation(); onSelectPost(featuredPost.id); }}
                  className="bg-black dark:bg-white text-white dark:text-black px-4 py-2 rounded font-bold hover:bg-zenth-markerYellow hover:text-black dark:hover:bg-zenth-markerYellow dark:hover:text-black border-2 border-transparent hover:border-black transition-all"
                >
                  Leer artículo
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Post Grid */}
        <h2 className="text-2xl font-marker text-black dark:text-white mb-6">Últimas entradas</h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {otherPosts.map((post) => (
            <ArticleCard
              key={post.id}
              post={post}
              onClick={() => onSelectPost(post.id)}
            />
          ))}
        </div>

      </div>
    </div>
  );
};

export default BlogPage;