import { BLOG_POSTS } from '../constants';
import { DOC_ARTICLES, DOC_CATEGORIES, docHref } from '../content/docs';

/** Shared with the build: only published content gets an HTTP 200. */
export const PUBLIC_PATHS = [
  '/', '/blog', '/privacy', '/terms', '/faq', '/docs',
  ...BLOG_POSTS.map(post => `/blog/${post.id}`),
  ...DOC_CATEGORIES.map(category => `/docs/${category.id}`),
  ...DOC_ARTICLES.map(article => docHref(article)),
];
