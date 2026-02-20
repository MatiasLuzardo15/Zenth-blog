import React from 'react';
import { ArrowRight, Rocket, Check } from 'lucide-react';

const Hero: React.FC = () => {
  const goToApp = () => {
    // CAMBIAR ESTO: La URL real de tu aplicación donde los usuarios se registran
    const APP_URL = 'https://www.zenth.space/#/auth';
    window.location.href = APP_URL;
  };

  return (
    <section className="relative pt-32 pb-16 lg:pt-48 lg:pb-32 overflow-hidden">

      {/* Doodles de fondo */}
      <div className="absolute top-20 left-10 opacity-20 transform -rotate-12 pointer-events-none">
        <svg width="100" height="100" viewBox="0 0 100 100" fill="none" stroke="currentColor" className="text-black dark:text-white">
          <path d="M10 10 C 20 20, 40 20, 50 10" strokeWidth="3" strokeLinecap="round" />
          <path d="M60 60 C 70 80, 90 80, 90 60" strokeWidth="3" strokeLinecap="round" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">

          {/* Text Content */}
          <div className="flex-1 text-center lg:text-left z-10">
            <div className="inline-block mb-4">
              <span className="bg-zenth-markerYellow text-black px-3 py-1 rounded-full border border-black text-sm font-bold font-marker transform -rotate-2 inline-block shadow-sketch animate-pulse">
                ✨ Productividad consciente
              </span>
            </div>
            <h1 className="text-6xl sm:text-7xl lg:text-8xl font-serif font-black text-black dark:text-white leading-[0.9] mb-6 relative">
              Libérate <br />
              <span className="relative inline-block mt-2">
                <span className="relative z-10">del caos.</span>
                <span className="absolute bottom-2 left-0 w-full h-6 bg-zenth-markerBlue -z-0 transform -rotate-1 skew-x-12 opacity-80 mix-blend-multiply dark:mix-blend-normal dark:bg-zenth-markerBlue/80"></span>
              </span>
            </h1>

            <p className="text-2xl text-slate-700 dark:text-slate-300 mb-8 leading-relaxed font-sans max-w-lg mx-auto lg:mx-0">
              No creemos en hacer "más", creemos en hacer lo que importa. Organiza tu día según tu energía, gana XP y recupera tu paz mental.
            </p>

            {/* Primary CTA Button (Launched State) */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-10 relative">
              <button
                onClick={goToApp}
                className="bg-black dark:bg-white text-white dark:text-black px-8 py-4 rounded-lg font-bold text-xl border-2 border-transparent hover:bg-zenth-500 transition-all shadow-sketch-lg dark:shadow-sketch-lg-white hover:translate-x-1 hover:translate-y-1 hover:shadow-sketch dark:hover:shadow-sketch-white flex items-center justify-center group"
              >
                Empezar mi ritual
                <ArrowRight className="ml-2 w-6 h-6 group-hover:translate-x-1 transition-transform" />
              </button>

              {/* Sketch arrow pointing to button */}
              <div className="absolute -right-24 top-4 hidden lg:block transform rotate-12 opacity-60">
                <span className="font-hand text-lg block mb-1 transform -rotate-12">¡Es gratis!</span>
                <svg width="60" height="40" viewBox="0 0 60 40" fill="none" stroke="currentColor" className="text-black dark:text-white">
                  <path d="M50 0 Q 10 20 0 30" strokeWidth="2" markerEnd="url(#arrowhead)" />
                </svg>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-6 items-center">
              <div className="flex items-center space-x-2 opacity-70">
                <Rocket className="w-5 h-5 text-slate-600 dark:text-slate-300" />
                <span className="font-sans text-lg text-slate-600 dark:text-slate-300">Mobile First</span>
              </div>
              <div className="hidden sm:block text-slate-400">•</div>
              <div className="flex items-center space-x-2 opacity-70">
                <Check className="w-5 h-5 text-slate-600 dark:text-slate-300" />
                <span className="font-sans text-lg text-slate-600 dark:text-slate-300">Habits Tracker</span>
              </div>
            </div>
          </div>

          {/* Main App Showcase Image Section (Simplified) */}
          <div className="flex-1 relative w-full flex justify-center lg:justify-end mt-10 lg:mt-0">
            <div className="relative w-full max-w-[600px] lg:max-w-[800px] animate-float">

              {/* The App Screenshot */}
              <img
                src="/blog/mainpage.png"
                alt="Zenth App Showcase"
                className="w-full h-auto drop-shadow-[0_20px_50px_rgba(0,0,0,0.2)] dark:drop-shadow-[0_20px_50px_rgba(255,255,255,0.05)] rounded-lg"
              />

              {/* Decorative Element */}
              <div className="absolute -top-6 -right-6 bg-zenth-markerBlue text-black px-4 py-2 rounded-lg shadow-sketch font-hand text-lg transform rotate-6 hidden lg:block">
                ¡Tu nuevo ritual! ✨
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;