import React, { useEffect, useState } from 'react';
import { Routes, Route, useNavigate, useLocation, Navigate, useParams } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import BlogPage from './components/BlogPage';
import BlogPostDetail from './components/BlogPostDetail';
import PrivacyPolicy from './components/PrivacyPolicy';
import TermsAndConditions from './components/TermsAndConditions';
import FAQ from './components/FAQ';
import DocsLayout from './components/docs/DocsLayout';
import DocsHome from './components/docs/DocsHome';
import DocsCategoryPage from './components/docs/DocsCategoryPage';
import DocsArticlePage from './components/docs/DocsArticlePage';
import Footer from './components/Footer';
import { Helmet } from 'react-helmet-async';

import { BLOG_POSTS } from './constants';
import { getArticle, getCategory } from './content/docs';

function App() {
  const [isDarkMode, setIsDarkMode] = useState(true);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    // El oscuro es la identidad de la marca: sin preferencia guardada se
    // arranca en oscuro, y sólo el claro explícito lo desactiva.
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'light') {
      setIsDarkMode(false);
      document.documentElement.classList.remove('dark');
    } else {
      setIsDarkMode(true);
      document.documentElement.classList.add('dark');
    }
  }, []);

  const toggleTheme = () => {
    if (isDarkMode) {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
      setIsDarkMode(false);
    } else {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
      setIsDarkMode(true);
    }
  };

  // Dynamic SEO management
  const getSEO = () => {
    const baseUrl = 'https://www.zenth.space';
    let title = 'Zenth: Agenda, Pizarras, Biblioteca, Reuniones y Enfoque';
    let description = 'Planifica tu tiempo, organiza proyectos, habla con tu equipo y protege tu enfoque con Zenth.';
    let url = `${baseUrl}${location.pathname}`;
    let image = `${baseUrl}/favicon.png`;

    if (location.pathname === '/') {
      title = 'Zenth: Tu agenda, tus proyectos y tu atención en un mismo ritmo';
      description = 'Agenda visual, pizarras compartidas, Biblioteca con notas, lienzos y Google Drive, Reuniones con invitados, Enfoque global y progreso personal en una sola aplicación.';
    } else if (location.pathname === '/blog') {
      title = 'Blog: Productividad y Neurociencia | Zenth Space';
      description = 'Novedades de Zenth y artículos sobre atención, hábitos, colaboración y bienestar. Organiza tu día con planificación visual y calma.';
    } else if (location.pathname.startsWith('/blog/')) {
      const postId = location.pathname.split('/').pop();
      const post = BLOG_POSTS.find(p => p.id === postId);
      if (post) {
        title = `${post.title} | Blog Zenth`;
        description = post.excerpt;
        if (post.imageUrl) {
          image = post.imageUrl.startsWith('http') ? post.imageUrl : `${baseUrl}${post.imageUrl}`;
        }
      }
    } else if (location.pathname === '/privacy') {
      title = 'Política de Privacidad | Zenth';
      description = 'Cómo protegemos tus datos y tu privacidad en Zenth. Sin venta de datos, sin rastreadores invasivos.';
    } else if (location.pathname === '/terms') {
      title = 'Términos y Condiciones de Uso | Zenth';
      description = 'Las reglas de uso de Zenth: tu cuenta, tu contenido, la colaboración, las reuniones y las integraciones. Claro y sin letra pequeña.';
    } else if (location.pathname === '/faq') {
      title = 'Preguntas Frecuentes | Zenth Space';
      description = 'Todo lo que necesitas saber sobre Agenda, Pizarras, Biblioteca, Reuniones, Enfoque, Progreso, Google Drive y Calendar.';
    } else if (location.pathname.startsWith('/docs')) {
      const [, , categoryId, slug] = location.pathname.split('/');
      const article = getArticle(categoryId, slug);
      const category = getCategory(categoryId);
      if (article) {
        title = `${article.title} | Documentación de Zenth`;
        description = article.summary;
      } else if (category) {
        title = `${category.title} | Documentación de Zenth`;
        description = category.description;
      } else {
        title = 'Documentación de Zenth: guías de uso con buscador';
        description = 'Aprende Zenth paso a paso: Agenda, Pizarras, Biblioteca, Reuniones, Enfoque, Progreso, atajos e integraciones. Con buscador.';
      }
    }

    return { title, description, url, image };
  };

  const seo = getSEO();

  // Centralized navigation handler
  const handleNavigate = (page: 'home' | 'blog' | 'privacy' | 'terms' | 'faq' | 'docs', targetId?: string) => {
    if (page === 'home') {
      if (location.pathname !== '/') {
        navigate('/');
        // Wait for navigation then scroll
        setTimeout(() => {
          if (targetId) {
            const element = document.getElementById(targetId);
            if (element) element.scrollIntoView({ behavior: 'smooth' });
          } else {
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }
        }, 100);
      } else {
        // Already on home, just scroll
        if (targetId) {
          const element = document.getElementById(targetId);
          if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
          } else if (targetId === 'hero') {
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }
        } else {
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }
      }
    } else if (page === 'blog') {
      if (targetId) {
        navigate(`/blog/${targetId}`);
      } else {
        navigate('/blog');
      }
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else if (page === 'privacy') {
      navigate('/privacy');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else if (page === 'terms') {
      navigate('/terms');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else if (page === 'faq') {
      navigate('/faq');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else if (page === 'docs') {
      navigate('/docs');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <div className="relative min-h-screen bg-canvas font-sans text-ink">
      <Helmet>
        <title>{seo.title}</title>
        <meta name="description" content={seo.description} />
        <link rel="canonical" href={seo.url} />

        {/* Open Graph */}
        <meta property="og:title" content={seo.title} />
        <meta property="og:description" content={seo.description} />
        <meta property="og:url" content={seo.url} />
        <meta property="og:image" content={seo.image} />

        {/* Twitter */}
        <meta name="twitter:title" content={seo.title} />
        <meta name="twitter:description" content={seo.description} />
        <meta name="twitter:image" content={seo.image} />
        <meta name="twitter:url" content={seo.url} />
      </Helmet>

      <Navbar
        isDarkMode={isDarkMode}
        toggleTheme={toggleTheme}
        currentPage={
          location.pathname.startsWith('/blog') ? 'blog' :
            location.pathname === '/faq' ? 'faq' :
              location.pathname.startsWith('/docs') ? 'docs' : 'home'
        }
        onNavigate={(page, id) => handleNavigate(page as any, id)}
      />

      <main>
        <Routes>
          <Route path="/" element={<Home onNavigate={handleNavigate} />} />
          <Route
            path="/blog"
            element={
              <BlogPage
                onBack={() => handleNavigate('home')}
                onSelectPost={(id) => handleNavigate('blog', id)}
              />
            }
          />
          <Route path="/blog/:id" element={<BlogPostDetailWithParams />} />
          <Route path="/privacy" element={<PrivacyPolicy onBack={() => handleNavigate('home')} />} />
          <Route path="/terms" element={<TermsAndConditions onBack={() => handleNavigate('home')} />} />
          <Route path="/faq" element={<FAQ onBack={() => handleNavigate('home')} onGoToDocs={() => handleNavigate('docs')} />} />
          <Route path="/docs" element={<DocsLayout />}>
            <Route index element={<DocsHome />} />
            <Route path=":category" element={<DocsCategoryPage />} />
            <Route path=":category/:slug" element={<DocsArticlePage />} />
          </Route>
          {/* El manual del usuario pasó a la documentación: los enlaces viejos siguen funcionando. */}
          <Route path="/guide" element={<Navigate to="/docs" replace />} />
          {/* Fallback route */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>

      <Footer onNavigate={handleNavigate} />
    </div>
  );
}

// Helper component to extract params and find post
const BlogPostDetailWithParams = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const post = BLOG_POSTS.find(p => p.id === id);

  if (!post) {
    return <Navigate to="/blog" replace />;
  }

  return (
    <BlogPostDetail
      post={post}
      onBack={() => navigate('/blog')}
    />
  );
};

export default App;
