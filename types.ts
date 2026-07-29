export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  /** Markdown reducido: títulos, listas, tablas, citas, imágenes y formato en línea. */
  content: string;
  author: string;
  date: string;
  imageUrl?: string;
  category: string;
  readTime?: string;
}
