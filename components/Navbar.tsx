import React, { useState, useEffect } from 'react';
import { Menu, X, PenTool, Moon, Sun } from 'lucide-react';

interface NavbarProps {
  isDarkMode: boolean;
  toggleTheme: () => void;
  currentPage: 'home' | 'blog';
  onNavigate: (page: 'home' | 'blog', sectionId?: string) => void;
}

const Navbar: React.FC<NavbarProps> = ({ isDarkMode, toggleTheme, currentPage, onNavigate }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const goToLogin = () => {
    const LOGIN_URL = 'https://www.zenth.space/#/auth';
    window.location.href = LOGIN_URL;
  };

  const handleNavClick = (e: React.MouseEvent, page: 'home' | 'blog', sectionId?: string) => {
    e.preventDefault();
    setIsOpen(false);
    onNavigate(page, sectionId);
  };

  const navLinks = [
    { name: 'Funciones', page: 'home', id: 'features' },
    { name: 'Opiniones', page: 'home', id: 'reviews' },
    { name: 'Instalar', page: 'home', id: 'install' },
    { name: 'Blog', page: 'blog', id: '' }, // Link al Blog
    { name: 'Colaborar', page: 'home', id: 'colaborar' }
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'pt-2 px-2' : 'pt-4 px-4'}`}>
      <div className={`max-w-6xl mx-auto transition-all duration-300 ${scrolled
        ? 'bg-white dark:bg-slate-900 border-2 border-black dark:border-white shadow-sketch dark:shadow-sketch-white rounded-lg py-2 px-4'
        : 'bg-transparent py-4 px-2'
        }`}>
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div
            className="flex-shrink-0 flex items-center cursor-pointer group"
            onClick={(e) => handleNavClick(e, 'home', 'hero')}
          >
            <div className="relative">
              <div className="absolute inset-0 bg-zenth-markerYellow rounded-full blur-sm transform group-hover:scale-125 transition-transform"></div>
              <img src="/blog/favicon2.png" alt="Zenth Logo" className="h-8 w-8 relative z-10 transform -rotate-12 object-contain" />
            </div>
            <span className="text-3xl font-serif font-black text-black dark:text-white tracking-tighter decoration-wavy underline decoration-zenth-400">enth</span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-4">
            {navLinks.map((item) => (
              <button
                key={item.name}
                onClick={(e) => handleNavClick(e, item.page as 'home' | 'blog', item.id)}
                className={`px-4 py-1 text-lg font-bold transition-colors relative group ${currentPage === 'blog' && item.name === 'Blog'
                  ? 'text-zenth-400 dark:text-zenth-300'
                  : 'text-black dark:text-white hover:text-zenth-400 dark:hover:text-zenth-300'
                  }`}
              >
                {item.name}
                <span className={`absolute bottom-0 left-0 w-full h-0.5 bg-black dark:bg-white transform transition-transform origin-left ${currentPage === 'blog' && item.name === 'Blog' ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                  }`}></span>
              </button>
            ))}

            {/* Dark Mode Toggle */}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors text-black dark:text-white border-2 border-transparent hover:border-black dark:hover:border-white"
            >
              {isDarkMode ? <Sun className="w-6 h-6" /> : <Moon className="w-6 h-6" />}
            </button>
          </div>

          {/* CTA Button */}
          <div className="hidden md:flex ml-2">
            <button
              className="bg-black dark:bg-white text-white dark:text-black px-6 py-2 rounded-md font-bold text-lg border-2 border-transparent hover:bg-white hover:text-black hover:border-black dark:hover:bg-slate-900 dark:hover:text-white dark:hover:border-white transition-all shadow-sketch dark:shadow-sketch-white hover:shadow-none hover:translate-x-[2px] hover:translate-y-[2px]"
              onClick={goToLogin}
            >
              Iniciar Sesión
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center space-x-4">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full text-black dark:text-white border-2 border-black dark:border-white bg-white dark:bg-slate-800 shadow-sketch dark:shadow-sketch-white active:shadow-none active:translate-x-[2px] active:translate-y-[2px]"
            >
              {isDarkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>

            <button onClick={() => setIsOpen(!isOpen)} className="text-black dark:text-white focus:outline-none p-2 border-2 border-black dark:border-white bg-white dark:bg-slate-900 rounded-md shadow-sketch dark:shadow-sketch-white active:shadow-none active:translate-x-[2px] active:translate-y-[2px]">
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div className="absolute top-24 left-4 right-4 bg-white dark:bg-slate-900 border-2 border-black dark:border-white rounded-lg shadow-sketch-xl dark:shadow-sketch-xl-white p-6 md:hidden z-50 transform rotate-1">
          {/* Tape effect */}
          <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 w-32 h-6 bg-zenth-200/80 rotate-2"></div>

          <div className="space-y-4">
            {navLinks.map((item) => (
              <button
                key={item.name}
                onClick={(e) => handleNavClick(e, item.page as 'home' | 'blog', item.id)}
                className="block w-full text-left text-2xl font-bold text-black dark:text-white hover:underline decoration-zenth-markerPink decoration-4"
              >
                {item.name}
              </button>
            ))}

            <div className="h-0.5 bg-black/10 dark:bg-white/20 my-4 border-t-2 border-dashed border-black dark:border-white"></div>
            <button
              className="w-full text-center block px-4 py-3 rounded-md text-xl bg-zenth-markerYellow text-black border-2 border-black font-bold shadow-sketch hover:shadow-none hover:translate-x-[2px] hover:translate-y-[2px]"
              onClick={() => {
                setIsOpen(false);
                goToLogin();
              }}
            >
              Iniciar Sesión
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;