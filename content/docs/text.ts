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
    case 'flow':
      return [block.caption, ...block.nodes.flatMap(node => [node.label, node.detail ?? ''])].map(stripInline).join(' ');
    case 'rule':
      return [
        block.caption, 'Cuando', block.rule.when, block.rule.whenScope ?? '',
        'Si', ...block.rule.conditions, 'Entonces', ...block.rule.actions,
      ].map(stripInline).join(' ');
    case 'boardMove':
      return [block.caption, block.move.trigger, block.move.result, block.move.card, ...block.move.lists].map(stripInline).join(' ');
    case 'chain':
      return [block.caption, ...block.steps.flatMap(step => [step.label, step.detail ?? ''])].map(stripInline).join(' ');
    case 'noteExample': {
      const { example } = block;
      if (example.kind === 'imageCrop') return stripInline(`${block.caption} ${example.alt}`);
      return [block.caption, example.kind === 'outline' ? example.title : '',
        ...example.sections.flatMap(section => [section.title, section.text])].map(stripInline).join(' ');
    }
  }
};

/** Formato «23 de septiembre de 2026» a partir de `AAAA-MM-DD`. */
export const formatDocDate = (iso: string) =>
  new Date(`${iso}T12:00:00`).toLocaleDateString('es-ES', { day: 'numeric', month: 'long', year: 'numeric' });
