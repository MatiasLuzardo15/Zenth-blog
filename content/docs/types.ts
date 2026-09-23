import type React from 'react';

export type DocIcon = React.ComponentType<{ className?: string; strokeWidth?: number }>;

/**
 * Bloques con los que se escribe un artículo. El texto admite formato en línea
 * mínimo: **negrita**, `código` y [enlaces](/ruta o https://…). Todo lo demás
 * es texto plano; el buscador indexa exactamente lo que el lector ve.
 */
export type DocBlock =
  /** Título de sección: entra en «En esta página» y es un destino del buscador. */
  | { type: 'h2'; text: string }
  | { type: 'h3'; text: string }
  | { type: 'p'; text: string }
  /** Pasos numerados, en orden. */
  | { type: 'steps'; items: string[] }
  | { type: 'list'; items: string[] }
  | { type: 'callout'; tone: 'tip' | 'note' | 'warning'; title?: string; text: string }
  /** Atajos de teclado. Se muestran con la tecla del sistema del lector (Ctrl/⌘, Alt/⌥). */
  | { type: 'keys'; rows: { keys: string[]; label: string }[] }
  /** Ruta dentro de la app: «Ajustes › Integraciones › Google Drive». */
  | { type: 'path'; steps: string[] }
  | { type: 'table'; head: string[]; rows: string[][] };

export interface DocArticle {
  /** Único dentro de su categoría; forma parte de la URL. */
  slug: string;
  category: string;
  title: string;
  /** Una o dos frases: se muestra en listados y es la descripción SEO. */
  summary: string;
  /** Sinónimos y palabras que la gente escribiría y el texto no contiene. */
  keywords?: string[];
  /** ISO `AAAA-MM-DD` de la última revisión contra la aplicación. */
  updated: string;
  /** Otros artículos, como `categoria/slug`. */
  related?: string[];
  blocks: DocBlock[];
}

export interface DocCategory {
  id: string;
  title: string;
  description: string;
  icon: DocIcon;
}
