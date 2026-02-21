import React, { useEffect, useState } from 'react';
import { Routes, Route, useNavigate, useLocation, Navigate, useParams } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import BlogPage from './components/BlogPage';
import BlogPostDetail from './components/BlogPostDetail';
import PrivacyPolicy from './components/PrivacyPolicy';
import Footer from './components/Footer';

import { BLOG_POSTS } from './constants';

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    // Check local storage or system preference
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark' || (!savedTheme && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      setIsDarkMode(true);
      document.documentElement.classList.add('dark');
    } else {
      setIsDarkMode(false);
      document.documentElement.classList.remove('dark');
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
  useEffect(() => {
    let title = 'Zenth: Planificación Visual y Productividad para Mentes Inquietas';
    let description = 'Organiza tu vida con Zenth, el planificador visual que convierte tu productividad en un juego.';

    if (location.pathname === '/') {
      title = 'Zenth: Planificación Visual, Gamificación y Productividad para TDAH';
      description = 'Organiza tu día, gestiona hábitos y recupera tu enfoque con Zenth. El planificador visual diseñado para mentes creativas y TDAH.';
    } else if (location.pathname === '/blog') {
      title = 'Blog: Productividad y Neurociencia | Zenth Space';
      description = 'Consejos sobre TDAH, gestión del tiempo y bienestar mental. Aprende a dominar tu día con planificación visual y calma.';
    } else if (location.pathname.startsWith('/blog/')) {
      // Find post for specific title
      const postId = location.pathname.split('/').pop();
      const post = BLOG_POSTS.find(p => p.id === postId);
      if (post) {
        title = `${post.title} | Blog Zenth`;
        description = post.excerpt;
      }
    } else if (location.pathname === '/privacy') {
      title = 'Política de Privacidad | Zenth';
      description = 'Cómo protegemos tus datos y tu privacidad en Zenth. Sin venta de datos, sin rastreadores invasivos.';
    }

    document.title = title;
    // Update meta description
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute('content', description);
    }
  }, [location.pathname]);

  // Centralized navigation handler
  const handleNavigate = (page: 'home' | 'blog' | 'privacy', targetId?: string) => {
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
    }
  };

  return (
    <div className="min-h-screen font-sans selection:bg-zenth-200 selection:text-zenth-900 border-x-0 relative">

      <Navbar
        isDarkMode={isDarkMode}
        toggleTheme={toggleTheme}
        currentPage={location.pathname.startsWith('/blog') ? 'blog' : 'home'}
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