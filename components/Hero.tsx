import React from 'react';
import { ArrowRight, Brain, Trophy, Timer, Sparkles, Smile, PenTool } from 'lucide-react';

const Hero: React.FC = () => {
  const goToApp = () => {
    // Apunta a la subruta donde vivirá la aplicación
    window.location.href = 'https://zenth.space/app';
  };

  return (
    <section className="relative pt-32 pb-16 lg:pt-48 lg:pb-32 overflow-hidden">



      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">

          {/* Text Content */}
          <div className="flex-1 lg:flex-[1.4] text-center lg:text-left z-10">
            <div className="inline-block mb-4">
              <span className="bg-zenth-markerYellow text-black px-3 py-1 rounded-full border border-black text-sm font-bold font-marker transform -rotate-2 inline-block shadow-sketch animate-pulse">
                ✨ Productividad consciente
              </span>
            </div>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-serif font-black text-black dark:text-white leading-[1.1] mb-6 relative">
              Construye <br />
              <span className="relative inline-block mt-2">
                <span className="relative z-10 whitespace-nowrap">tu progreso diario.</span>
                <span className="absolute bottom-2 left-0 w-full h-4 bg-zenth-markerBlue -z-0 transform -rotate-1 skew-x-12 opacity-80 mix-blend-multiply dark:mix-blend-normal dark:bg-zenth-markerBlue/80"></span>
              </span>
            </h1>

            <p className="text-xl text-slate-700 dark:text-slate-300 mb-6 leading-relaxed font-sans max-w-lg mx-auto lg:mx-0">
              Zenth es el gestor de tareas y hábitos que transforma tu esfuerzo en paz mental. Organiza tu vida según tu energía, gana XP y domina tu rutina con IA.
            </p>

            {/* Primary CTA Button (Launched State) */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-10 relative">
              <button
                onClick={goToApp}
                className="bg-black dark:bg-white text-white dark:text-black px-8 py-4 rounded-lg font-bold text-xl border-2 border-transparent hover:bg-zenth-500 transition-all shadow-sketch-lg dark:shadow-sketch-lg-white hover:translate-x-1 hover:translate-y-1 hover:shadow-sketch dark:hover:shadow-sketch-white flex items-center justify-center group"
              >
                Comenzar ahora ✨
                <ArrowRight className="ml-2 w-6 h-6 group-hover:translate-x-1 transition-transform" />
              </button>


            </div>

            <div className="flex flex-wrap justify-center lg:justify-start gap-y-3 gap-x-5 items-center">
              <div className="flex items-center space-x-2 opacity-70">
                <Brain className="w-4 h-4 text-slate-600 dark:text-slate-300" />
                <span className="font-sans text-base text-slate-600 dark:text-slate-300">Gestión de Energía</span>
              </div>
              <div className="flex items-center space-x-2 opacity-70">
                <Trophy className="w-4 h-4 text-slate-600 dark:text-slate-300" />
                <span className="font-sans text-base text-slate-600 dark:text-slate-300">Hábitos & XP</span>
              </div>
              <div className="flex items-center space-x-2 opacity-70">
                <Sparkles className="w-4 h-4 text-slate-600 dark:text-slate-300" />
                <span className="font-sans text-base text-slate-600 dark:text-slate-300">Asistente IA "Zen"</span>
              </div>
              <div className="flex items-center space-x-2 opacity-70">
                <Smile className="w-4 h-4 text-slate-600 dark:text-slate-300" />
                <span className="font-sans text-base text-slate-600 dark:text-slate-300">Control de Ánimo</span>
              </div>
              <div className="flex items-center space-x-2 opacity-70">
                <Timer className="w-4 h-4 text-slate-600 dark:text-slate-300" />
                <span className="font-sans text-base text-slate-600 dark:text-slate-300">Modo Enfoque</span>
              </div>
              <div className="flex items-center space-x-2 opacity-70">
                <PenTool className="w-4 h-4 text-slate-600 dark:text-slate-300" />
                <span className="font-sans text-base text-slate-600 dark:text-slate-300">Entradas (Notas Zen)</span>
              </div>
            </div>
          </div>

          {/* Main App Showcase Image Section (Simplified) */}
          <div className="flex-1 lg:flex-1 relative w-full flex justify-center lg:justify-end mt-10 lg:mt-0 lg:scale-110 origin-right transition-transform duration-1000">
            <div className="relative w-full max-w-[560px]">

              {/* The App Screenshot */}
              <img
                src="/blog/mainpage.png"
                alt="Zenth App Showcase"
                className="w-full h-auto drop-shadow-xl lg:drop-shadow-[0_15px_30px_rgba(0,0,0,0.15)] dark:drop-shadow-lg lg:dark:drop-shadow-[0_15px_30px_rgba(255,255,255,0.05)]"
              />

              {/* Decorative Element */}
              <div className="absolute -top-6 -right-6 bg-zenth-markerBlue text-black px-4 py-2 rounded-lg shadow-sketch font-hand text-lg transform rotate-6 hidden lg:block">
                ¡Tu nuevo ritual! ⚡
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;