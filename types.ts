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
  /**
   * `soon`: adelanto de algo que todavía no está disponible. Se muestra como
   * «Próximamente» en lugar de la fecha y el artículo abre con un aviso.
   * `hidden`: no se lista ni se abre. Sin este campo, el artículo está publicado.
   */
  status?: 'soon' | 'hidden';
}

export const isComingSoon = (post: Pick<BlogPost, 'status'>) => post.status === 'soon';
