import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { ArrowLeft, ArrowUpRight, Check, Share2 } from 'lucide-react';
import { BlogPost } from '../types';

interface BlogPostDetailProps {
    post: BlogPost;
    onBack: () => void;
}

/**
 * Formato en línea: **negrita**, *cursiva*, `código` y [texto](url).
 * El enlace se procesa primero porque su texto puede contener negritas, y al
 * revés la negrita se comería los corchetes.
 */
const renderInline = (text: string, keyPrefix: string): React.ReactNode[] => {
    const nodes: React.ReactNode[] = [];
    const pattern = /\[([^\]]+)\]\(([^)]+)\)|\*\*([^*]+)\*\*|`([^`]+)`|\*([^*]+)\*/g;
    let lastIndex = 0;
    let match: RegExpExecArray | null;
    let i = 0;

    while ((match = pattern.exec(text)) !== null) {
        if (match.index > lastIndex) nodes.push(text.slice(lastIndex, match.index));
        const key = `${keyPrefix}-i${i++}`;

        if (match[1] !== undefined) {
            const href = match[2];
            const isExternal = /^https?:\/\//.test(href);
            nodes.push(
                <a
                    key={key}
                    href={href}
                    className="fr-link"
                    {...(isExternal ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                >
                    {match[1]}
                </a>
            );
        } else if (match[3] !== undefined) {
            nodes.push(<strong key={key} className="font-semibold text-ink">{match[3]}</strong>);
        } else if (match[4] !== undefined) {
            nodes.push(
                <code key={key} className="rounded-small bg-surface-2 px-1.5 py-0.5 text-[0.9em] text-ink">
                    {match[4]}
                </code>
            );
        } else if (match[5] !== undefined) {
            nodes.push(<em key={key}>{match[5]}</em>);
        }

        lastIndex = pattern.lastIndex;
    }

    if (lastIndex < text.length) nodes.push(text.slice(lastIndex));
    return nodes;
};

const isTableRow = (line: string) => line.trim().startsWith('|');
const isListItem = (line: string) => /^\s*[-*]\s+/.test(line);
const splitRow = (line: string) =>
    line.trim().replace(/^\|/, '').replace(/\|$/, '').split('|').map(cell => cell.trim());

/**
 * Markdown reducido: sólo lo que el contenido usa de verdad. Agrupa las líneas
 * en bloques antes de pintar, porque listas y tablas necesitan ver a sus
 * vecinas para renderizarse como un elemento único.
 */
const renderContent = (content: string): React.ReactNode[] => {
    const lines = content.split('\n');
    const blocks: React.ReactNode[] = [];
    let i = 0;

    while (i < lines.length) {
        const line = lines[i];
        const trimmed = line.trim();

        if (trimmed === '') { i++; continue; }

        // Tabla
        if (isTableRow(line)) {
            const rows: string[][] = [];
            while (i < lines.length && isTableRow(lines[i])) {
                // La línea de guiones sólo separa cabecera de cuerpo.
                if (!/^[\s|:-]+$/.test(lines[i])) rows.push(splitRow(lines[i]));
                i++;
            }
            const [header, ...body] = rows;
            blocks.push(
                <div key={`t-${i}`} className="my-10 overflow-x-auto rounded-large border border-hairline">
                    <table className="w-full border-collapse text-left">
                        <thead>
                            <tr className="bg-surface-1">
                                {header?.map((cell, c) => (
                                    <th key={c} className="t-caption whitespace-nowrap px-4 py-3 text-ink">
                                        {renderInline(cell, `th-${c}`)}
                                    </th>
                                ))}
                            </tr>
                        </thead>
                        <tbody>
                            {body.map((row, r) => (
                                <tr key={r} className="border-t border-hairline-soft">
                                    {row.map((cell, c) => (
                                        <td key={c} className="t-body-sm px-4 py-3 align-top text-ink-muted">
                                            {renderInline(cell, `td-${r}-${c}`)}
                                        </td>
                                    ))}
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            );
            continue;
        }

        // Lista
        if (isListItem(line)) {
            const items: string[] = [];
            while (i < lines.length && isListItem(lines[i])) {
                items.push(lines[i].trim().replace(/^[-*]\s+/, ''));
                i++;
            }
            blocks.push(
                <ul key={`l-${i}`} className="my-6 space-y-3">
                    {items.map((item, idx) => (
                        <li key={idx} className="flex gap-3">
                            <span className="mt-[11px] h-1 w-1 shrink-0 rounded-full bg-accent" />
                            <span className="t-body-lg text-ink-muted">{renderInline(item, `li-${idx}`)}</span>
                        </li>
                    ))}
                </ul>
            );
            continue;
        }

        // Imagen
        const image = trimmed.match(/^!\[(.*?)\]\((.*?)\)$/);
        if (image) {
            blocks.push(
                <figure key={`img-${i}`} className="my-12">
                    <img
                        src={image[2]}
                        alt={image[1]}
                        loading="lazy"
                        className="w-full rounded-card border border-hairline"
                    />
                    {image[1] && (
                        <figcaption className="t-micro mt-3 text-center text-ink-muted">{image[1]}</figcaption>
                    )}
                </figure>
            );
            i++;
            continue;
        }

        if (trimmed.startsWith('### ')) {
            blocks.push(
                <h3 key={`h3-${i}`} className="t-headline mt-10 mb-3 text-ink">
                    {renderInline(trimmed.slice(4), `h3-${i}`)}
                </h3>
            );
            i++;
            continue;
        }

        if (trimmed.startsWith('## ')) {
            blocks.push(
                <h2 key={`h2-${i}`} className="t-display-md mt-14 mb-4 text-ink">
                    {renderInline(trimmed.slice(3), `h2-${i}`)}
                </h2>
            );
            i++;
            continue;
        }

        if (trimmed.startsWith('# ')) {
            blocks.push(
                <h2 key={`h1-${i}`} className="t-display-md mt-14 mb-4 text-ink">
                    {renderInline(trimmed.slice(2), `h1-${i}`)}
                </h2>
            );
            i++;
            continue;
        }

        if (trimmed.startsWith('> ')) {
            blocks.push(
                <blockquote key={`q-${i}`} className="my-8 border-l-2 border-accent pl-5">
                    <p className="t-subhead text-ink">{renderInline(trimmed.slice(2), `q-${i}`)}</p>
                </blockquote>
            );
            i++;
            continue;
        }

        if (/^-{3,}$/.test(trimmed)) {
            blocks.push(<hr key={`hr-${i}`} className="my-14 border-hairline" />);
            i++;
            continue;
        }

        blocks.push(
            <p key={`p-${i}`} className="t-body-lg my-5 text-ink-muted">
                {renderInline(trimmed, `p-${i}`)}
            </p>
        );
        i++;
    }

    return blocks;
};

const BlogPostDetail: React.FC<BlogPostDetailProps> = ({ post, onBack }) => {
    const [copied, setCopied] = useState(false);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [post.id]);

    const handleShare = async () => {
        if (navigator.share) {
            try {
                await navigator.share({ title: post.title, text: post.excerpt, url: window.location.href });
                return;
            } catch {
                // Compartir cancelado: caemos al portapapeles.
            }
        }
        await navigator.clipboard.writeText(window.location.href);
        setCopied(true);
        setTimeout(() => setCopied(false), 2500);
    };

    const ogImageUrl = post.imageUrl
        ? (post.imageUrl.startsWith('http') ? post.imageUrl : `${window.location.origin}${post.imageUrl}`)
        : `${window.location.origin}/blog/appview.png`;

    return (
        <div className="min-h-screen pt-28 pb-24 lg:pt-36">
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

            <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
                <div className="mb-10 flex items-center justify-between gap-4">
                    <button
                        onClick={onBack}
                        className="t-caption group inline-flex items-center gap-2 text-ink-muted transition-colors hover:text-ink"
                    >
                        <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-0.5" />
                        Volver al blog
                    </button>

                    <button onClick={handleShare} className="fr-btn fr-btn-secondary" aria-live="polite">
                        {copied ? <Check className="h-4 w-4" /> : <Share2 className="h-4 w-4" />}
                        {copied ? 'Enlace copiado' : 'Compartir'}
                    </button>
                </div>

                <header>
                    <div className="t-micro flex flex-wrap items-center gap-2 text-ink-muted">
                        <span>{post.category}</span>
                        <span aria-hidden="true">·</span>
                        <span>{post.date}</span>
                        <span aria-hidden="true">·</span>
                        <span>{post.readTime || '5 min lectura'}</span>
                        <span aria-hidden="true">·</span>
                        <span>{post.author}</span>
                    </div>

                    <h1 className="t-display-lg mt-5 text-ink">{post.title}</h1>
                    <p className="t-subhead mt-6 text-ink-muted">{post.excerpt}</p>
                </header>

                {post.imageUrl && (
                    <div className="my-12 overflow-hidden rounded-card border border-hairline">
                        <img src={post.imageUrl} alt="" className="aspect-[16/9] w-full object-cover" />
                    </div>
                )}

                <article>{renderContent(post.content)}</article>

                <div className="fr-card-featured mt-20 text-center">
                    <h2 className="t-display-md text-ink">¿Lo probamos?</h2>
                    <p className="t-body-lg mx-auto mt-3 max-w-md text-ink-muted">
                        Zenth es gratis y se instala desde el navegador. Diez minutos bastan para saber
                        si encaja contigo.
                    </p>
                    <a href="https://zenth.space/app" className="fr-btn fr-btn-primary fr-btn-lg mt-8">
                        Empezar gratis
                        <ArrowUpRight className="h-[18px] w-[18px]" />
                    </a>
                </div>
            </div>
        </div>
    );
};

export default BlogPostDetail;
