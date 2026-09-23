import type { DocBlock } from './types';

/** Sin tildes ni mayúsculas: «Ánimo» y «animo» tienen que ser la misma búsqueda. */
export const normalizeText = (value: string) =>
  value.normalize('NFD').replace(/\p{M}/gu, '').toLowerCase();

/** Quita el formato en línea y deja lo que el lector ve. */
export const stripInline = (value: string) =>
  value
    .replace(/\[([^\]]+)\]\([^)]+\)/g, '$1')
    .replace(/\*\*([^*]+)\*\*/g, '$1')
    .replace(/`([^`]+)`/g, '$1');

export const slugify = (value: string) =>
  normalizeText(stripInline(value))
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');

/** Texto plano de un bloque: es lo que indexa el buscador. */
export const blockText = (block: DocBlock): string => {
  switch (block.type) {
    case 'h2':
    case 'h3':
    case 'p':
      return stripInline(block.text);
    case 'steps':
    case 'list':
      return block.items.map(stripInline).join(' ');
    case 'callout':
      return stripInline(`${block.title ?? ''} ${block.text}`);
    case 'keys':
      return block.rows.map(row => `${row.label} ${row.keys.join(' ')}`).join(' ');
    case 'path':
      return block.steps.join(' ');
    case 'table':
      return [...block.head, ...block.rows.flat()].map(stripInline).join(' ');
  }
};

/** Formato «23 de septiembre de 2026» a partir de `AAAA-MM-DD`. */
export const formatDocDate = (iso: string) =>
  new Date(`${iso}T12:00:00`).toLocaleDateString('es-ES', { day: 'numeric', month: 'long', year: 'numeric' });
