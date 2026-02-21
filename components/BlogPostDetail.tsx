import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { BlogPost } from '../types';
import { ArrowLeft, Calendar, User, Clock, Share2 } from 'lucide-react';

interface BlogPostDetailProps {
    post: BlogPost;
    onBack: () => void;
}

const BlogPostDetail: React.FC<BlogPostDetailProps> = ({ post, onBack }) => {
    const [showToast, setShowToast] = useState(false);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const handleShare = async () => {
        if (navigator.share) {
            try {
                await navigator.share({
                    title: post.title,
                    text: post.excerpt,
                    url: window.location.href,
                });
            } catch (error) {
                console.log('Error sharing:', error);
            }
        } else {
            navigator.clipboard.writeText(window.location.href);
            setShowToast(true);
            setTimeout(() => setShowToast(false), 3000);
        }
    };

    // Construct absolute URL for OG Image
    const ogImageUrl = post.imageUrl
        ? (post.imageUrl.startsWith('http') ? post.imageUrl : `${window.location.origin}${post.imageUrl}`)
        : `${window.location.origin}/blog/appview.png`;

    // Función para renderizar el contenido de forma "sketchy"
    const renderContent = (content: string) => {
        const lines = content.split('\n');
        return lines.map((line, index) => {
            if (line.startsWith('# ')) {
                return (
                    <h1 key={index} className="text-4xl md:text-6xl font-marker text-black dark:text-white mb-8 mt-12 leading-tight">
                        <span className="relative">
                            {line.replace('# ', '')}
                            <svg className="absolute -bottom-2 left-0 w-full h-3 text-zenth-markerBlue/40" viewBox="0 0 100 10" preserveAspectRatio="none">
                                <path d="M0,5 Q25,0 50,5 T100,5" fill="none" stroke="currentColor" strokeWidth="4" />
                            </svg>
                        </span>
                    </h1>
                );
            }
            if (line.startsWith('## ')) {
                return (
                    <h2 key={index} className="text-3xl md:text-4xl font-serif font-bold text-slate-800 dark:text-white mb-6 mt-12 flex items-center">
                        <span className="bg-zenth-markerYellow dark:bg-zenth-markerYellow/20 px-2 mr-2 transform -rotate-1">
                            {line.replace('## ', '')}
                        </span>
                    </h2>
                );
            }
            if (line.startsWith('### ')) {
                return (
                    <h3 key={index} className="text-2xl md:text-3xl font-serif font-bold text-slate-800 dark:text-white mb-4 mt-8">
                        {line.replace('### ', '')}
                    </h3>
                );
            }
            if (line.startsWith('---')) {
                return <hr key={index} className="my-12 border-t-2 border-dashed border-slate-300 dark:border-slate-700" />;
            }
            if (line.startsWith('|')) {
                // Simple table rendering logic for the levels table
                if (line.includes('---')) return null;
                const cells = line.split('|').filter(c => c.trim() !== '');
                const isHeader = index === lines.findIndex(l => l.startsWith('|')) && !lines[index - 1]?.startsWith('|');

                return (
                    <div key={index} className={`grid grid-cols-4 gap-4 p-4 ${isHeader ? 'bg-slate-100 dark:bg-slate-800 font-bold border-2 border-black dark:border-white' : 'border-b border-slate-200 dark:border-slate-800'} font-sans`}>
                        {cells.map((cell, i) => (
                            <div key={i} className="text-sm md:text-base">{cell.trim().replace(/\*\*/g, '')}</div>
                        ))}
                    </div>
                );
            }
            if (line.trim().startsWith('![') && line.includes('](')) {
                // Parse markdown image: ![Alt Text](url)
                const match = line.match(/!\[(.*?)\]\((.*?)\)/);
                if (match) {
                    const altText = match[1];
                    const imageUrl = match[2];
                    return (
                        <div key={index} className="my-12 flex flex-col items-center">
                            <img
                                src={imageUrl}
                                alt={altText}
                                className="max-w-full h-auto object-contain hover:scale-[1.01] transition-transform duration-500 drop-shadow-2xl"
                            />
                            {altText && <p className="text-center text-sm text-slate-500 italic mt-4">{altText}</p>}
                        </div>
                    );
                }
            }
            if (line.trim().startsWith('- ') || line.trim().startsWith('* ')) {
                const isAsterisk = line.trim().startsWith('* ');
                const listContent = line.trim().replace(/^[-*]\s+/, '');
                return (
                    <li key={index} className="ml-6 mb-3 list-none relative flex items-start text-lg text-slate-700 dark:text-slate-300 font-sans">
                        <span className={`${isAsterisk ? 'text-zenth-markerPink' : 'text-zenth-markerBlue'} mr-2 text-2xl leading-none`}>
                            {isAsterisk ? '✦' : '○'}
                        </span>
                        <span>{listContent}</span>
                    </li>
                );
            }
            if (line.trim() === '') return <br key={index} />;

            // Procesa negritas básicas
            const processedLine = line.split('**').map((part, i) =>
                i % 2 === 1 ? <strong key={i} className="text-black dark:text-white font-bold bg-zenth-markerYellow/30 px-1">{part}</strong> : part
            );

            return (post.title.includes('Zenth') && line.includes('Nivel')) ? (
                <p key={index} className="text-xl md:text-2xl text-slate-700 dark:text-slate-300 font-serif leading-relaxed mb-6 italic border-l-4 border-zenth-markerBlue pl-6">
                    {processedLine}
                </p>
            ) : (
                <p key={index} className="text-lg md:text-xl text-slate-700 dark:text-slate-300 font-sans leading-relaxed mb-6">
                    {processedLine}
                </p>
            );
        });
    };

    return (
        <div className="pt-24 pb-20 bg-zenth-bg dark:bg-zenth-darkBg min-h-screen relative">
            <Helmet>
                <title>{post.title} | Zenth Blog</title>
                <meta property="og:title" content={post.title} />
                <meta property="og:description" content={post.excerpt} />
                <meta property="og:image" content={ogImageUrl} />
                <meta property="og:url" content={window.location.href} />

                <meta name="twitter:title" content={post.title} />
                <meta name="twitter:description" content={post.excerpt} />
                <meta name="twitter:image" content={ogImageUrl} />
            </Helmet>

            {/* Toast Notification */}
            {showToast && (
                <div className="fixed top-24 right-4 z-50 bg-zenth-markerYellow text-black px-6 py-3 rounded-lg border-2 border-black shadow-sketch animate-fade-in-down flex items-center gap-2">
                    <Share2 className="w-5 h-5" />
                    <span className="font-bold font-sans">¡Enlace copiado!</span>
                </div>
            )}

            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Navigation / Actions */}
                <div className="flex items-center justify-between mb-12">
                    <button
                        onClick={onBack}
                        className="group flex items-center text-lg font-bold text-slate-600 dark:text-slate-400 hover:text-black dark:hover:text-white transition-colors"
                    >
                        <ArrowLeft className="w-5 h-5 mr-2 group-hover:-translate-x-1 transition-transform" />
                        Volver al blog
                    </button>
                    <div className="flex space-x-4">
                        <button
                            onClick={handleShare}
                            className="p-2 rounded-full border-2 border-slate-200 dark:border-slate-800 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors group relative"
                            title="Compartir artículo"
                        >
                            <Share2 className="w-5 h-5 text-slate-600 dark:text-slate-400 group-hover:text-zenth-markerBlue transition-colors" />
                        </button>
                    </div>
                </div>

                {/* Hero Image */}
                {post.imageUrl && (
                    <div className="relative mb-12 group">
                        <div className="absolute inset-0 bg-black dark:bg-white rounded-lg translate-x-2 translate-y-2 group-hover:translate-x-3 group-hover:translate-y-3 transition-transform duration-300 opacity-20"></div>
                        <div className="relative aspect-video overflow-hidden border-2 border-black dark:border-white rounded-lg bg-gray-100">
                            <img
                                src={post.imageUrl}
                                alt={post.title}
                                className="w-full h-full object-cover"
                            />
                            <div className="absolute top-4 right-4 bg-zenth-markerYellow text-black px-4 py-1 font-bold transform rotate-2 border-2 border-black">
                                {post.category}
                            </div>
                        </div>
                    </div>
                )}

                {/* Article Info */}
                <div className="mb-12 border-b-2 border-dashed border-slate-200 dark:border-slate-800 pb-8">
                    <div className="flex flex-wrap items-center gap-6 text-slate-500 dark:text-slate-400 font-bold mb-6">
                        <div className="flex items-center">
                            <User className="w-4 h-4 mr-2" />
                            <span>{post.author}</span>
                        </div>
                        <div className="flex items-center">
                            <Calendar className="w-4 h-4 mr-2" />
                            <span>{post.date}</span>
                        </div>
                        <div className="flex items-center">
                            <Clock className="w-4 h-4 mr-2" />
                            <span>{post.readTime || '5 min lectura'}</span>
                        </div>
                    </div>
                    <h1 className="text-4xl md:text-6xl font-serif font-black text-slate-900 dark:text-white leading-tight mb-6">
                        {post.title}
                    </h1>
                    <p className="text-xl md:text-2xl text-slate-600 dark:text-slate-300 font-sans italic leading-relaxed">
                        {post.excerpt}
                    </p>
                </div>

                {/* Content Area */}
                <article className="prose prose-slate dark:prose-invert max-w-none">
                    {renderContent(post.content)}
                </article>

                {/* Call to Action */}
                <div className="mt-20 bg-zenth-markerBlue/10 dark:bg-zenth-markerBlue/5 border-2 border-zenth-markerBlue rounded-2xl p-8 md:p-12 relative overflow-hidden">
                    <div className="absolute -top-10 -right-10 w-40 h-40 bg-zenth-markerBlue opacity-10 rounded-full blur-3xl"></div>
                    <div className="relative z-10 text-center">
                        <h3 className="text-3xl font-marker mb-4 text-slate-900 dark:text-white">¿Quieres vivir la experiencia Zenth?</h3>
                        <p className="text-xl font-sans text-slate-600 dark:text-slate-300 mb-8 max-w-lg mx-auto">
                            Empieza hoy mismo a subir de nivel y transforma tu caos en calma absoluta.
                        </p>
                        <a
                            href="/app"
                            className="inline-block bg-black dark:bg-white text-white dark:text-black px-10 py-4 rounded-xl font-marker text-xl shadow-sketch-lg dark:shadow-sketch-lg-white hover:scale-105 transition-transform"
                        >
                            Empezar ahora ✨
                        </a>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default BlogPostDetail;
