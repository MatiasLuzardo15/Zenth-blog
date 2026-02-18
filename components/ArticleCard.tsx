import React from 'react';
import { BlogPost } from '../types';
import { ArrowRight } from 'lucide-react';

interface ArticleCardProps {
  post: BlogPost;
  onClick?: () => void;
}

const ArticleCard: React.FC<ArticleCardProps> = ({ post, onClick }) => {
  return (
    <div
      onClick={onClick}
      className="flex flex-col bg-white dark:bg-slate-900 p-4 pb-8 border-2 border-black dark:border-white shadow-sketch-lg dark:shadow-sketch-lg-white transform hover:-translate-y-2 hover:rotate-1 transition-all duration-300 relative cursor-pointer group"
    >

      {/* Tape effect at the top */}
      <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 w-24 h-6 bg-zenth-markerYellow/60 rotate-2 z-10"></div>

      <div className="relative h-56 overflow-hidden border-2 border-black dark:border-white bg-gray-100 dark:bg-slate-800 mb-4">
        <img
          src={post.imageUrl}
          alt={post.title}
          className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
        />

        <div className="absolute bottom-2 right-2 bg-black dark:bg-white text-white dark:text-black px-3 py-1 text-xs font-bold uppercase tracking-wide border border-white dark:border-black transform -rotate-2">
          {post.category}
        </div>
      </div>

      <div className="flex-1 flex flex-col px-2">
        <div className="mb-2">
          <span className="text-slate-500 dark:text-slate-400 text-sm font-bold font-sans">{post.date}</span>
          <h3 className="text-2xl font-serif font-bold text-black dark:text-white leading-tight mt-1 mb-2 decoration-zenth-400 hover:underline decoration-2 underline-offset-2">
            {post.title}
          </h3>
        </div>

        <p className="text-slate-800 dark:text-slate-300 font-sans text-lg mb-4 flex-1 line-clamp-3">
          {post.excerpt}
        </p>

        <div className="flex items-center justify-between mt-auto pt-4 border-t-2 border-dashed border-gray-300 dark:border-slate-700">
          <div className="flex items-center">
            <span className="text-sm font-bold text-slate-500 dark:text-slate-400 font-marker">Por {post.author}</span>
          </div>
          <button className="w-10 h-10 flex items-center justify-center border-2 border-black dark:border-white rounded-full text-black dark:text-white hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-colors">
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ArticleCard;