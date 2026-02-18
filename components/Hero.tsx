import React, { useState } from 'react';
import { ArrowRight, Sparkles, Pencil, Rocket, Check, PlayCircle, Flame } from 'lucide-react';

const Hero: React.FC = () => {
  const [demoChecked, setDemoChecked] = useState(false);

  const handleDemoClick = () => {
    if (!demoChecked) {
      // Simular sonido o satisfacción visual
      setDemoChecked(true);
      setTimeout(() => setDemoChecked(false), 3000); // Reset para jugar de nuevo
    }
  };

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

          {/* Interactive Demo - Sticky Note Style */}
          <div className="flex-1 relative w-full flex justify-center lg:justify-end mt-10 lg:mt-0">
            <div className="relative w-full max-w-[400px] cursor-pointer group" onClick={handleDemoClick}>

              {/* Post-it Background */}
              <div className="bg-[#fff9c4] dark:bg-[#fdd835] w-full aspect-square shadow-sketch-xl dark:shadow-sketch-xl-white transform rotate-2 transition-transform group-hover:rotate-0 relative z-10 p-8 flex flex-col justify-between">

                {/* Tape */}
                <div className="absolute -top-4 left-1/2 w-32 h-10 bg-zenth-200/80 transform -translate-x-1/2 -rotate-2 shadow-sm"></div>

                <div>
                  <div className="flex justify-between items-start mb-6">
                    <h3 className="font-marker text-3xl text-slate-800 opacity-90">Mi Meta de Hoy:</h3>
                    <div className="bg-white/50 px-2 py-1 rounded font-mono text-xs text-slate-800 font-bold transform rotate-3 flex items-center gap-1">
                      <Flame className="w-3 h-3 text-orange-500 fill-current" /> Racha: 12
                    </div>
                  </div>

                  {/* Interactive Task */}
                  <div className="flex items-center space-x-4 mb-4 group/item">
                    <div className={`w-8 h-8 border-2 border-slate-800 rounded flex items-center justify-center transition-colors ${demoChecked ? 'bg-zenth-400 border-zenth-400' : 'bg-white'}`}>
                      {demoChecked && <Check className="w-6 h-6 text-white" />}
                    </div>
                    <span className={`font-hand text-2xl font-bold text-slate-800 transition-all ${demoChecked ? 'line-through opacity-50 decoration-2 decoration-slate-800' : ''}`}>
                      Lanzar mi proyecto personal
                    </span>
                  </div>

                  <div className="flex items-center space-x-4 opacity-50">
                    <div className="w-8 h-8 border-2 border-slate-800 rounded bg-white"></div>
                    <span className="font-hand text-2xl font-bold text-slate-800">
                      Sesión de Enfoque (45 min)
                    </span>
                  </div>
                </div>

                <div className="mt-4 border-t-2 border-dashed border-slate-800/20 pt-4 flex justify-between items-end">
                  <div className="text-slate-700 font-hand text-lg">
                    Energía: <span className="text-purple-600 font-bold">Mañana ☀️</span>
                  </div>
                  {demoChecked && (
                    <div className="animate-bounce font-marker text-zenth-400 text-2xl transform -rotate-12">
                      +50 XP
                    </div>
                  )}
                </div>
              </div>

              {/* Background elements */}
              <div className="absolute top-10 -right-4 w-full h-full bg-white dark:bg-slate-700 border-2 border-black dark:border-white rounded-lg -z-10 transform rotate-6"></div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;