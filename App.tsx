import React, { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import InstallGuide from './components/InstallGuide';
import Testimonials from './components/Testimonials';
import BlogList from './components/BlogList'; // Mantenemos el componente para la Home (teaser)
import BlogPage from './components/BlogPage'; // Nueva página completa
import BlogPostDetail from './components/BlogPostDetail';
import Support from './components/Support';
import Footer from './components/Footer';
import { BLOG_POSTS } from './constants';

function App() {
  // Main App Component
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [currentView, setCurrentView] = useState<'home' | 'blog'>('home');
  const [selectedPost, setSelectedPost] = useState<string | null>(null);

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

    // Check query params on load
    const params = new URLSearchParams(window.location.search);
    const postId = params.get('post');
    if (postId) {
      // Verify if post exists to avoid showing undefined
      const postExists = BLOG_POSTS.some(p => p.id === postId);
      if (postExists) {
        setSelectedPost(postId);
        setCurrentView('blog');
      } else {
        // Clean URL if invalid
        window.history.replaceState({}, '', window.location.pathname);
      }
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

  // Manejador centralizado de navegación y scroll
  const handleNavigate = (page: 'home' | 'blog', targetId?: string) => {
    // Actualizar URL
    if (page === 'blog' && targetId) {
      const newUrl = `${window.location.pathname}?post=${targetId}`;
      window.history.pushState({}, '', newUrl);
    } else {
      window.history.pushState({}, '', window.location.pathname);
    }

    // Si vamos al blog con un ID específico, lo seleccionamos
    if (page === 'blog' && targetId) {
      setSelectedPost(targetId);
      setCurrentView('blog');
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    // Si cambiamos de página sin ID específico (o a home)
    if (page !== currentView) {
      if (page === 'home') setSelectedPost(null); // Solo reset si vamos a home
      setCurrentView(page);

      // Si vamos a home con un sectionId (targetId), esperamos a que renderice para scrollear
      if (page === 'home' && targetId) {
        setTimeout(() => {
          const element = document.getElementById(targetId);
          if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
          } else if (targetId === 'hero') {
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }
        }, 100);
      } else {
        // Si vamos al blog (general) o a home sin ID, scroll al top
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    } else {
      // Si ya estamos en la página
      if (page === 'home' && targetId) {
        const element = document.getElementById(targetId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        } else if (targetId === 'hero') {
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }
      } else if (page === 'blog' && !targetId) {
        // Si estamos en blog y navegamos a "blog" sin ID, volver al listado
        setSelectedPost(null);
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    }
  };

  return (
    <div className="min-h-screen font-sans selection:bg-zenth-200 selection:text-zenth-900">
      <Navbar
        isDarkMode={isDarkMode}
        toggleTheme={toggleTheme}
        currentPage={currentView}
        onNavigate={handleNavigate}
      />

      <main>
        {currentView === 'home' ? (
          <>
            <div id="hero"><Hero /></div>
            <Features onNavigate={handleNavigate} />
            <Testimonials />
            <InstallGuide />
            {/* Usamos BlogList como teaser en la Home */}
            <div className="relative pb-24">
              <BlogList onSelectPost={(id) => handleNavigate('blog', id)} limit={3} />
              <div className="absolute bottom-20 left-0 w-full flex justify-center z-10">
                <button
                  onClick={() => handleNavigate('blog')}
                  className="px-10 py-4 bg-zenth-markerBlue text-black font-marker text-2xl border-2 border-black rounded-xl shadow-sketch-lg hover:shadow-none hover:translate-x-1 hover:translate-y-1 transition-all transform -rotate-1"
                >
                  Ver Blog Completo ➔
                </button>
              </div>
              {/* Fade out effect para el teaser */}
              <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t from-zenth-bg dark:from-zenth-darkBg to-transparent pointer-events-none"></div>
            </div>
            <Support />
          </>
        ) : (
          selectedPost ? (
            <BlogPostDetail
              post={BLOG_POSTS.find(p => p.id === selectedPost) || BLOG_POSTS[0]}
              onBack={() => handleNavigate('blog')}
            />
          ) : (
            <BlogPage
              onBack={() => handleNavigate('home')}
              onSelectPost={(id) => handleNavigate('blog', id)}
            />
          )
        )}
      </main>

      <Footer />
    </div>
  );
}

export default App;