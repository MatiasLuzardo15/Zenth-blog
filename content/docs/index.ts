import { DOC_CATEGORIES } from './categories';
import { slugify } from './text';
import type { DocArticle, DocBlock, DocCategory } from './types';
import { primerosPasosArticles } from './articles/primeros-pasos';
import { agendaArticles } from './articles/agenda';
import { pizarrasArticles } from './articles/pizarras';
import { bibliotecaArticles } from './articles/biblioteca';
import { reunionesArticles } from './articles/reuniones';
import { enfoqueArticles } from './articles/enfoque';
import { progresoArticles } from './articles/progreso';
import { cuentaArticles } from './articles/cuenta';
import { atajosArticles } from './articles/atajos';
import { integracionesArticles } from './articles/integraciones';
import { privacidadArticles } from './articles/privacidad';
import { ayudaArticles } from './articles/ayuda';

export { DOC_CATEGORIES };
export type { DocArticle, DocBlock, DocCategory };

const ARTICLES_BY_CATEGORY: Record<string, DocArticle[]> = {
  'primeros-pasos': primerosPasosArticles,
  agenda: agendaArticles,
  pizarras: pizarrasArticles,
  biblioteca: bibliotecaArticles,
  reuniones: reunionesArticles,
  enfoque: enfoqueArticles,
  progreso: progresoArticles,
  cuenta: cuentaArticles,
  atajos: atajosArticles,
  integraciones: integracionesArticles,
  privacidad: privacidadArticles,
  ayuda: ayudaArticles,
};

/** Todos los artículos, en el orden de las categorías y luego el de cada archivo. */
export const DOC_ARTICLES: DocArticle[] = DOC_CATEGORIES.flatMap(category => ARTICLES_BY_CATEGORY[category.id] ?? []);

/**
 * Por dónde empezar. Es una lista curada y no un contador de visitas: no
 * medimos qué lee la gente, así que no podemos ordenar por popularidad.
 */
export const DOC_STARTING_POINTS = [
  'primeros-pasos/que-es-zenth',
  'primeros-pasos/recorrido-de-cinco-minutos',
  'agenda/crear-tareas-eventos-y-reuniones',
  'pizarras/compartir-una-pizarra',
  'reuniones/reuniones-rapidas-e-invitados',
  'atajos/atajos-de-la-aplicacion',
];

export const docKey = (article: Pick<DocArticle, 'category' | 'slug'>) => `${article.category}/${article.slug}`;

export const docHref = (article: Pick<DocArticle, 'category' | 'slug'>, sectionId?: string | null) =>
  `/docs/${article.category}/${article.slug}${sectionId ? `#${sectionId}` : ''}`;

export const getCategory = (id: string | undefined) => DOC_CATEGORIES.find(category => category.id === id);

export const getArticle = (categoryId: string | undefined, slug: string | undefined) =>
  DOC_ARTICLES.find(article => article.category === categoryId && article.slug === slug);

export const getArticleByKey = (key: string) => DOC_ARTICLES.find(article => docKey(article) === key);

export const articlesOf = (categoryId: string) => DOC_ARTICLES.filter(article => article.category === categoryId);

/** Artículo anterior y siguiente dentro de la misma categoría. */
export const neighborsOf = (article: DocArticle) => {
  const siblings = articlesOf(article.category);
  const index = siblings.findIndex(candidate => candidate.slug === article.slug);
  return {
    previous: index > 0 ? siblings[index - 1] : null,
    next: index >= 0 && index < siblings.length - 1 ? siblings[index + 1] : null,
  };
};

export interface DocSection {
  /** `null` es la introducción: lo que hay antes del primer título. */
  id: string | null;
  title: string;
  blocks: DocBlock[];
}

/**
 * Parte un artículo en secciones por sus títulos `h2`. El renderizador y el
 * buscador usan esta misma función, así los enlaces del buscador
 * (`#seccion`) siempre apuntan a un id que existe.
 */
export const sectionsOf = (article: DocArticle): DocSection[] => {
  const sections: DocSection[] = [{ id: null, title: article.title, blocks: [] }];
  const used = new Set<string>();

  for (const block of article.blocks) {
    if (block.type === 'h2') {
      const base = slugify(block.text) || 'seccion';
      let id = base;
      for (let n = 2; used.has(id); n++) id = `${base}-${n}`;
      used.add(id);
      sections.push({ id, title: block.text, blocks: [block] });
    } else {
      sections[sections.length - 1].blocks.push(block);
    }
  }

  return sections;
};
