import type { DocBlock } from './types';

/** Constructores para que los artículos se lean como texto y no como objetos. */
export const h2 = (text: string): DocBlock => ({ type: 'h2', text });
export const h3 = (text: string): DocBlock => ({ type: 'h3', text });
export const p = (text: string): DocBlock => ({ type: 'p', text });
export const steps = (...items: string[]): DocBlock => ({ type: 'steps', items });
export const list = (...items: string[]): DocBlock => ({ type: 'list', items });
export const tip = (text: string, title?: string): DocBlock => ({ type: 'callout', tone: 'tip', title, text });
export const note = (text: string, title?: string): DocBlock => ({ type: 'callout', tone: 'note', title, text });
export const warn = (text: string, title?: string): DocBlock => ({ type: 'callout', tone: 'warning', title, text });
export const keys = (...rows: [string[], string][]): DocBlock => ({
  type: 'keys',
  rows: rows.map(([combo, label]) => ({ keys: combo, label })),
});
export const path = (...stepsList: string[]): DocBlock => ({ type: 'path', steps: stepsList });
export const table = (head: string[], ...rows: string[][]): DocBlock => ({ type: 'table', head, rows });
