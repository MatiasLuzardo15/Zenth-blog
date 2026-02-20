import React, { useState, useEffect } from 'react';
import { Clock, Trophy, Heart, LayoutGrid, X, MousePointerClick, Sun, Calendar, Activity, Sparkles } from 'lucide-react';

interface FeatureDetail {
  id: string;
  title: string;
  shortDesc: string; // Para la tarjeta
  fullDesc: React.ReactNode; // Para el modal (permite HTML/JSX)
  icon: React.ReactNode;
  colorClass: string; // Para el icono o fondo
  relatedPostId?: string; // ID del artículo del blog relacionado
}

interface FeaturesProps {
  onNavigate: (page: 'home' | 'blog', targetId?: string) => void;
}

const Features: React.FC<FeaturesProps> = ({ onNavigate }) => {
  const [selectedFeature, setSelectedFeature] = useState<FeatureDetail | null>(null);

  // Cerrar modal con tecla Escape
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setSelectedFeature(null);
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, []);

  // Datos de las funcionalidades
  const featuresData: Record<string, FeatureDetail> = {
    gamification: {
      id: 'gamification',
      title: 'Tu Historial de Victorias',
      shortDesc: 'Convierte el "deber" en un juego. XP, Rachas y Big Goals.',
      fullDesc: (
        <>
          <p className="mb-4">
            Convertimos la productividad en un juego para que no se sienta como un trabajo.
          </p>
          <ul className="list-disc pl-5 space-y-2 mb-4">
            <li><strong>Misiones Diarias:</strong> Gana +10 XP por tareas estándar.</li>
            <li><strong>Big Goals:</strong> ¡Conquista un objetivo grande y recibe +50 XP!</li>
            <li><strong>Rachas Imparables:</strong> Mantén tu consistencia diaria y mira cómo crece tu racha.</li>
          </ul>
          <p>
            Cada tarea completada te acerca a ser un "Guerrero Zen". No es solo una lista, es tu progreso visual.
          </p>
        </>
      ),
      icon: <Trophy className="w-8 h-8 text-black" />,
      colorClass: 'bg-zenth-markerYellow',
      relatedPostId: '2'
    },
    energy: {
      id: 'energy',
      title: 'Tu día en Armonía',
      shortDesc: 'Organización por Energía: Mañana, Tarde y Noche.',
      fullDesc: (
        <>
          <p className="mb-4">
            Tu energía no es la misma a las 8 AM que a las 8 PM. Zenth divide tu jornada en tres bloques: <strong>Mañana, Tarde y Noche</strong>.
          </p>
          <p className="mb-4">
            Esto te ayuda a decidir qué batallas pelear en cada momento, reduciendo la fatiga de decisión. Deja las tareas creativas para cuando tienes energía y las mecánicas para cuando estás cansado.
          </p>
          <p>
            Disfruta de tu tiempo libre sin culpas sabiendo que lo importante ya está hecho.
          </p>
        </>
      ),
      icon: <Sun className="w-8 h-8 text-black" />,
      colorClass: 'bg-zenth-markerBlue',
      relatedPostId: '1'
    },
    pixel: {
      id: 'pixel',
      title: 'Pixel View & Mood',
      shortDesc: 'Vista panorámica de tu vida. Productividad + Salud Mental.',
      fullDesc: (
        <>
          <p className="mb-4">
            ¿Cómo fue tu año? Con nuestra vista de <strong>Pixel View</strong>, cada día es un punto de color en tu lienzo anual basado en tu bienestar emocional.
          </p>
          <p className="mb-4">
            Identifica patrones (¿los lunes son siempre grises?), celebra meses de alta energía y planifica tu futuro con una perspectiva que las listas tradicionales no pueden ofrecer.
          </p>
          <p>
            <strong>Productividad sin salud mental es agotamiento.</strong> Sé más compasivo contigo mismo en los días difíciles.
          </p>
        </>
      ),
      icon: <LayoutGrid className="w-7 h-7 text-black" />,
      colorClass: 'bg-white',
      relatedPostId: '3'
    },
    focus: {
      id: 'focus',
      title: 'Minutos de Enfoque',
      shortDesc: 'Calidad sobre cantidad. Mide tu Deep Work.',
      fullDesc: (
        <>
          <p className="mb-4">
            No se trata de cuántos checks haces, sino de la calidad de tu atención.
          </p>
          <p>
            Zenth rastrea tus <strong>Minutos de Enfoque</strong> reales. Utiliza el temporizador integrado para entrar en "Zona" y al final del día obtendrás una métrica real de tu capacidad de profundidad (Deep Work).
          </p>
          <p className="font-bold">
            ¿Cuánto tiempo le dedicaste hoy a lo que de verdad mueve la aguja?
          </p>
        </>
      ),
      icon: <Activity className="w-7 h-7 text-black" />,
      colorClass: 'bg-white',
      relatedPostId: '5'
    },
    ai: {
      id: 'ai',
      title: 'Zen AI Assistant',
      shortDesc: 'Tu coach de productividad inteligente con Google Gemini.',
      fullDesc: (
        <>
          <p className="mb-4">
            Zenth integra a <strong>Zen</strong>, un asistente que utiliza la IA de Google para eliminar la carga cognitiva de organizarte.
          </p>
          <ul className="list-disc pl-5 space-y-2 mb-4">
            <li><strong>Entrada Mágica:</strong> "Cena con Ana viernes 9pm" y Zen configura el título, fecha y hora por ti.</li>
            <li><strong>Auto-Agendado:</strong> Zen sugiere el mejor momento para tus tareas basándose en el contexto.</li>
            <li><strong>Micro-pasos:</strong> Desglosa objetivos grandes en 3-5 sub-tareas accionables automáticamente.</li>
          </ul>
          <p>
            Busca los iconos de destellos ✨ dentro del editor para activar el poder de la IA.
          </p>
        </>
      ),
      icon: <Sparkles className="w-8 h-8 text-black" />,
      colorClass: 'bg-zenth-markerPink',
      relatedPostId: '13'
    }
  };

  return (
    <section id="features" className="py-24 relative z-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 max-w-3xl mx-auto relative">
          {/* Fondo subrayado */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-3/4 h-12 bg-zenth-markerYellow -z-10 rotate-1 rounded-sm mix-blend-multiply dark:mix-blend-normal dark:bg-zenth-markerYellow/80"></div>
          <h2 className="text-xl font-bold text-black dark:text-white tracking-widest uppercase mb-2 font-marker">Filosofía Zenth</h2>
          <p className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold text-black dark:text-white leading-tight transform -rotate-1 relative inline-block">
            Productividad para humanos.

          </p>
          <p className="mt-4 text-slate-500 font-hand text-xl animate-pulse">
            (Toca una tarjeta para descubrir el secreto)
          </p>
        </div>

        {/* Bento Grid Layout - Hand Drawn Style */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 auto-rows-[minmax(300px,auto)]">

          {/* Feature 1: Large Card (Gamification/XP) */}
          <div
            onClick={() => setSelectedFeature(featuresData.gamification)}
            className="md:col-span-2 bg-white dark:bg-slate-900 border-2 border-black dark:border-white shadow-sketch-lg dark:shadow-sketch-lg-white rounded-2xl p-8 sm:p-12 relative overflow-hidden group hover:-translate-y-1 hover:shadow-sketch-xl dark:hover:shadow-sketch-xl-white transition-all cursor-pointer"
          >
            <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
              <MousePointerClick className="w-6 h-6 text-slate-400" />
            </div>
            <div className="absolute top-0 right-0 p-4 opacity-10 pointer-events-none">
              <Trophy className="w-48 h-48 text-black dark:text-white transform rotate-12" />
            </div>
            <div className="relative z-10 max-w-lg pointer-events-none">
              <div className="bg-zenth-markerYellow border-2 border-black dark:border-white w-16 h-16 rounded-full flex items-center justify-center mb-6 shadow-sketch dark:shadow-sketch-white transform -rotate-6">
                <Trophy className="w-8 h-8 text-black" />
              </div>
              <h3 className="text-4xl font-serif font-bold text-black dark:text-white mb-4 underline decoration-dashed decoration-transparent group-hover:decoration-black dark:group-hover:decoration-white underline-offset-4 transition-all">
                {featuresData.gamification.title}
              </h3>
              <p className="text-xl text-black dark:text-slate-200 leading-relaxed">
                {featuresData.gamification.shortDesc} <br />
                <span className="bg-zenth-100 text-black px-1 mt-2 inline-block font-bold">¡+50 XP por Big Goals!</span>
              </p>
            </div>
          </div>

          {/* Feature 2: Tall Card (Pixel View/Mood) */}
          <div
            onClick={() => setSelectedFeature(featuresData.pixel)}
            className="md:row-span-2 bg-zenth-paper dark:bg-slate-900 border-2 border-black dark:border-white shadow-sketch-lg dark:shadow-sketch-lg-white rounded-2xl p-8 sm:p-12 flex flex-col justify-between relative overflow-hidden group hover:rotate-1 transition-all cursor-pointer"
          >
            <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
              <MousePointerClick className="w-6 h-6 text-slate-400" />
            </div>
            {/* Tape */}
            <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 w-32 h-8 bg-zenth-markerPink/80 rotate-1 z-20 pointer-events-none"></div>

            <div className="pointer-events-none">
              <div className="bg-zenth-markerBlue border-2 border-black dark:border-white w-16 h-16 rounded-lg flex items-center justify-center mb-6 shadow-sketch dark:shadow-sketch-white transform rotate-3">
                <LayoutGrid className="w-8 h-8 text-black" />
              </div>
              <h3 className="text-4xl font-serif font-bold text-black dark:text-white mb-4 underline decoration-dashed decoration-transparent group-hover:decoration-black dark:group-hover:decoration-white underline-offset-4 transition-all">
                {featuresData.pixel.title}
              </h3>
              <p className="text-xl text-black dark:text-slate-200 leading-relaxed">
                ¿Cómo fue tu año? Un lienzo de colores basado en tu bienestar.
              </p>
            </div>

            {/* Pixel Grid Sketch */}
            <div className="mt-8 flex justify-center pointer-events-none">
              <div className="grid grid-cols-7 gap-1 opacity-80">
                {[...Array(28)].map((_, i) => (
                  <div key={i} className={`w-6 h-6 border border-black dark:border-white rounded-sm ${[1, 5, 12, 15, 20].includes(i) ? 'bg-zenth-markerPink' :
                    [2, 3, 8, 9, 18].includes(i) ? 'bg-zenth-markerBlue' :
                      [0, 6, 13, 21].includes(i) ? 'bg-zenth-markerYellow' : 'bg-white dark:bg-slate-700'
                    }`}></div>
                ))}
              </div>
            </div>
          </div>

          {/* Feature 3: Standard Card (Energy/Harmony) */}
          <div
            onClick={() => setSelectedFeature(featuresData.energy)}
            className="bg-zenth-markerYellow border-2 border-black dark:border-white shadow-sketch-lg dark:shadow-sketch-lg-white rounded-2xl p-8 sm:p-10 relative group hover:-rotate-1 transition-all cursor-pointer"
          >
            <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
              <MousePointerClick className="w-6 h-6 text-black/50" />
            </div>
            <div className="relative z-10 pointer-events-none">
              <div className="bg-white border-2 border-black w-14 h-14 rounded-full flex items-center justify-center mb-6 shadow-sketch">
                <Sun className="w-7 h-7 text-black" />
              </div>
              <h3 className="text-3xl font-serif font-bold text-black mb-3 underline decoration-dashed decoration-transparent group-hover:decoration-black underline-offset-4 transition-all">
                {featuresData.energy.title}
              </h3>
              <p className="text-black text-lg font-bold">
                Organiza: Mañana, Tarde y Noche. <br />Sigue tu ritmo natural.
              </p>
            </div>
          </div>

          {/* Feature 4: Standard Card (Deep Work) */}
          <div
            onClick={() => setSelectedFeature(featuresData.focus)}
            className="bg-zenth-200 border-2 border-black dark:border-white shadow-sketch-lg dark:shadow-sketch-lg-white rounded-2xl p-8 sm:p-10 relative group hover:rotate-1 transition-all cursor-pointer"
          >
            <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
              <MousePointerClick className="w-6 h-6 text-black/50" />
            </div>
            <div className="relative z-10 pointer-events-none">
              <div className="bg-white border-2 border-black w-14 h-14 rounded-none flex items-center justify-center mb-6 shadow-sketch transform rotate-45">
                <Activity className="w-7 h-7 text-black transform -rotate-45" />
              </div>
              <h3 className="text-3xl font-serif font-bold text-black mb-3 underline decoration-dashed decoration-transparent group-hover:decoration-black underline-offset-4 transition-all">
                {featuresData.focus.title}
              </h3>
              <p className="text-black text-lg font-bold">
                Cuenta minutos de enfoque, no solo tareas. Deep Work real.
              </p>
            </div>
          </div>

          {/* Feature 5: AI Assistant (Full Width) */}
          <div
            onClick={() => setSelectedFeature(featuresData.ai)}
            className="md:col-span-3 bg-white dark:bg-slate-900 border-2 border-black dark:border-white shadow-sketch-lg dark:shadow-sketch-lg-white rounded-2xl p-8 sm:p-12 relative overflow-hidden group hover:-translate-y-1 hover:shadow-sketch-xl dark:hover:shadow-sketch-xl-white transition-all cursor-pointer"
          >
            <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
              <MousePointerClick className="w-6 h-6 text-slate-400" />
            </div>
            <div className="absolute top-0 right-0 p-4 opacity-10 pointer-events-none">
              <Sparkles className="w-48 h-48 text-black dark:text-white transform -rotate-12" />
            </div>
            <div className="relative z-10 flex flex-col md:flex-row items-center gap-8 pointer-events-none">
              <div className="bg-zenth-markerPink border-2 border-black dark:border-white w-20 h-20 rounded-full flex items-center justify-center shadow-sketch dark:shadow-sketch-white transform rotate-12 shrink-0">
                <Sparkles className="w-10 h-10 text-black" />
              </div>
              <div>
                <h3 className="text-4xl font-serif font-bold text-black dark:text-white mb-4">
                  {featuresData.ai.title}
                </h3>
                <p className="text-xl text-black dark:text-slate-200 leading-relaxed max-w-2xl">
                  {featuresData.ai.shortDesc} <br />
                  <span className="bg-zenth-markerYellow text-black px-1 mt-2 inline-block font-bold">Magic Input ✨ Auto-Agendado 📅 Micro-pasos 📝</span>
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* MODAL OVERLAY */}
      {selectedFeature && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Backdrop Blur */}
          <div
            className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm transition-opacity"
            onClick={() => setSelectedFeature(null)}
          ></div>

          {/* Modal Content */}
          <div className="bg-white dark:bg-slate-800 w-full max-w-lg border-2 border-black dark:border-white shadow-sketch-xl dark:shadow-sketch-xl-white p-8 relative z-10 rounded-lg transform rotate-1 animate-in fade-in zoom-in duration-200">

            {/* Close Button */}
            <button
              onClick={() => setSelectedFeature(null)}
              className="absolute top-4 right-4 p-2 hover:bg-slate-100 dark:hover:bg-slate-700 rounded-full transition-colors border-2 border-transparent hover:border-black dark:hover:border-white"
            >
              <X className="w-6 h-6 text-black dark:text-white" />
            </button>

            {/* Header with Icon */}
            <div className="flex items-center gap-4 mb-6">
              <div className={`${selectedFeature.colorClass} border-2 border-black dark:border-white w-16 h-16 rounded-lg flex items-center justify-center shadow-sketch dark:shadow-sketch-white`}>
                {selectedFeature.icon}
              </div>
              <h3 className="text-3xl font-serif font-bold text-black dark:text-white leading-none">
                {selectedFeature.title}
              </h3>
            </div>

            {/* Content */}
            <div className="text-lg text-slate-700 dark:text-slate-300 font-sans leading-relaxed space-y-4">
              {selectedFeature.fullDesc}
            </div>

            {/* Footer Action */}
            <div className="mt-8 pt-6 border-t-2 border-dashed border-slate-200 dark:border-slate-700 flex justify-between items-center">
              {selectedFeature.relatedPostId && (
                <button
                  onClick={() => {
                    setSelectedFeature(null);
                    onNavigate('blog', selectedFeature.relatedPostId);
                  }}
                  className="bg-black dark:bg-white text-white dark:text-black px-4 py-2 rounded-lg font-bold font-marker shadow-sketch hover:scale-105 transition-transform text-sm sm:text-base border border-transparent hover:border-white dark:hover:border-black"
                >
                  Leer artículo completo ➔
                </button>
              )}
              <button
                onClick={() => setSelectedFeature(null)}
                className="font-bold text-slate-500 hover:text-black dark:hover:text-white hover:underline transition-colors text-sm"
              >
                Cerrar
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Features;