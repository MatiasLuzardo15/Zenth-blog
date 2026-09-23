import React, { useEffect, useLayoutEffect, useRef, useState } from 'react';
import { BlogPost } from '../types';
import { COVER_H, COVER_SCENES, COVER_W } from './BlogCoverScenes';

/**
 * Portada de un artículo: una escena de la interfaz de Zenth (ver
 * `BlogCoverScenes.tsx`) sobre un degradado pastel. Ocupa todo su contenedor
 * (que debe ser `relative` y tener tamaño) y recorta como una foto de portada.
 *
 * `imageUrl` sigue existiendo para las vistas previas al compartir (Open Graph),
 * que necesitan una imagen de verdad; aquí sólo se usa si un artículo no tiene escena.
 */
const BlogCover: React.FC<{ post: BlogPost }> = ({ post }) => {
  const entry = COVER_SCENES[post.id];
  const ref = useRef<HTMLDivElement>(null);
  const [box, setBox] = useState({ w: 0, h: 0 });
  const [near, setNear] = useState(false);

  useLayoutEffect(() => {
    const node = ref.current;
    if (!node) return;
    const measure = () => setBox({ w: node.clientWidth, h: node.clientHeight });
    measure();
    if (typeof ResizeObserver === 'undefined') return;
    const observer = new ResizeObserver(measure);
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  // La lista muestra hasta veinte portadas: la escena sólo se monta al acercarse.
  useEffect(() => {
    const node = ref.current;
    if (!node || !entry) return;
    if (typeof IntersectionObserver === 'undefined') { setNear(true); return; }
    const observer = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) { setNear(true); observer.disconnect(); }
    }, { rootMargin: '300px' });
    observer.observe(node);
    return () => observer.disconnect();
  }, [entry]);

  if (!entry) {
    return post.imageUrl ? (
      <img
        src={post.imageUrl}
        alt=""
        loading="lazy"
        className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
      />
    ) : (
      <div className="bg-dot-grid absolute inset-0 flex items-center justify-center">
        <span className="font-display text-[22px] text-ink-muted">Zenth</span>
      </div>
    );
  }

  const { Scene, tones } = entry;
  const scale = box.w && box.h ? Math.max(box.w / COVER_W, box.h / COVER_H) : 0;

  return (
    <div
      ref={ref}
      aria-hidden="true"
      className="absolute inset-0 overflow-hidden"
      style={{
        backgroundImage: `radial-gradient(circle at 18% 12%, rgba(255,255,255,0.4), transparent 55%), linear-gradient(135deg, ${tones[0]} 0%, ${tones[1]} 100%)`,
      }}
    >
      {near && scale > 0 && (
        <div className="absolute inset-0 transition-transform duration-700 group-hover:scale-[1.03]">
          <div
            className="absolute left-1/2 top-1/2 origin-center"
            style={{ width: COVER_W, height: COVER_H, transform: `translate(-50%, -50%) scale(${scale})` }}
          >
            <Scene />
          </div>
        </div>
      )}
    </div>
  );
};

/** ¿Tiene portada (una escena o, al menos, una imagen)? */
export const hasCover = (post: BlogPost) => Boolean(COVER_SCENES[post.id] || post.imageUrl);

export default BlogCover;
