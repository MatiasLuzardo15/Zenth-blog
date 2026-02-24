import React, { useState, useEffect } from 'react';
import { Clock, Trophy, Heart, LayoutGrid, X, MousePointerClick, Sun, Calendar, Activity, Sparkles, PenTool } from 'lucide-react';

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
    },
    entries: {
      id: 'entries',
      title: 'Entradas (Notas Zen)',
      shortDesc: 'Un lienzo infinito para tus ideas. Editor Pro, imágenes y estilos dinámicos.',
      fullDesc: (
        <>
          <p className="mb-4">
            Las <strong>Entradas</strong> son tu espacio de reflexión profunda y creatividad sin límites.
          </p>
          <ul className="list-disc pl-5 space-y-2 mb-4">
            <li><strong>Editor Pro:</strong> Jerarquía visual con títulos, citas y resaltado de texto.</li>
            <li><strong>Personalidad Única:</strong> Asigna emojis de portada y elige entre 10 estilos tipográficos.</li>
            <li><strong>Multimedia Fluida:</strong> Pega imágenes o arrástralas directamente al texto.</li>
            <li><strong>Expandir a Nota:</strong> Convierte cualquier tarea en un proyecto documentado con un clic.</li>
          </ul>
          <p>
            Diseñado con <strong>fricción cero</strong> para que nada se interponga entre tus pensamientos y la pantalla.
          </p>
        </>
      ),
      icon: <PenTool className="w-8 h-8 text-black" />,
      colorClass: 'bg-zenth-markerBlue',
      relatedPostId: '14'
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
        {/* Collage Layout - Multi-rotated and compact */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-fr">

          {/* Feature 1: Gamification */}
          <div
            onClick={() => setSelectedFeature(featuresData.gamification)}
            className="bg-white dark:bg-slate-900 border-2 border-black dark:border-white shadow-sketch dark:shadow-sketch-white rounded-xl p-6 relative overflow-hidden group hover:-translate-y-2 hover:rotate-1 transition-all cursor-pointer rotate-1"
          >
            <div className="absolute top-0 right-0 p-2 opacity-5 pointer-events-none">
              <Trophy className="w-32 h-32 text-black dark:text-white transform rotate-12" />
            </div>
            <div className="relative z-10 pointer-events-none">
              <div className="bg-zenth-markerYellow border-2 border-black dark:border-white w-12 h-12 rounded-full flex items-center justify-center mb-4 shadow-sketch transform -rotate-6">
                <Trophy className="w-6 h-6 text-black" />
              </div>
              <h3 className="text-2xl font-serif font-bold text-black dark:text-white mb-2 underline decoration-dashed decoration-transparent group-hover:decoration-black dark:group-hover:decoration-white underline-offset-4 transition-all">
                {featuresData.gamification.title}
              </h3>
              <p className="text-base text-black dark:text-slate-200 leading-snug">
                {featuresData.gamification.shortDesc} <br />
                <span className="bg-zenth-100 text-black px-1 mt-1 inline-block font-bold text-sm">¡+50 XP por Big Goals!</span>
              </p>
            </div>
          </div>

          {/* Feature 2: Pixel View */}
          <div
            onClick={() => setSelectedFeature(featuresData.pixel)}
            className="bg-zenth-paper dark:bg-slate-900 border-2 border-black dark:border-white shadow-sketch dark:shadow-sketch-white rounded-xl p-6 relative overflow-hidden group hover:-translate-y-2 hover:-rotate-1 transition-all cursor-pointer -rotate-1"
          >
            <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 w-24 h-6 bg-zenth-markerPink/60 rotate-2 z-20 pointer-events-none"></div>
            <div className="relative z-10 pointer-events-none">
              <div className="bg-zenth-markerBlue border-2 border-black dark:border-white w-12 h-12 rounded-lg flex items-center justify-center mb-4 shadow-sketch transform rotate-3">
                <LayoutGrid className="w-6 h-6 text-black" />
              </div>
              <h3 className="text-2xl font-serif font-bold text-black dark:text-white mb-2">
                {featuresData.pixel.title}
              </h3>
              <p className="text-base text-black dark:text-slate-200 leading-snug mb-4">
                ¿Cómo fue tu año? Un lienzo emocional de colores.
              </p>
              <div className="grid grid-cols-7 gap-1 opacity-60 scale-75 origin-left">
                {[...Array(14)].map((_, i) => (
                  <div key={i} className={`w-4 h-4 border border-black dark:border-white rounded-sm ${i % 3 === 0 ? 'bg-zenth-markerPink' : i % 5 === 0 ? 'bg-zenth-markerBlue' : 'bg-white dark:bg-slate-700'}`}></div>
                ))}
              </div>
            </div>
          </div>

          {/* Feature 3: Energy */}
          <div
            onClick={() => setSelectedFeature(featuresData.energy)}
            className="bg-zenth-markerYellow border-2 border-black dark:border-white shadow-sketch dark:shadow-sketch-white rounded-xl p-6 relative group hover:-translate-y-2 hover:rotate-2 transition-all cursor-pointer rotate-2"
          >
            <div className="relative z-10 pointer-events-none">
              <div className="bg-white border-2 border-black w-12 h-12 rounded-full flex items-center justify-center mb-4 shadow-sketch">
                <Sun className="w-6 h-6 text-black" />
              </div>
              <h3 className="text-2xl font-serif font-bold text-black mb-2">
                {featuresData.energy.title}
              </h3>
              <p className="text-black text-base font-bold leading-snug">
                Mañana, Tarde y Noche. <br />Organiza según tu ritmo.
              </p>
            </div>
          </div>

          {/* Feature 4: Focus */}
          <div
            onClick={() => setSelectedFeature(featuresData.focus)}
            className="bg-zenth-200 border-2 border-black dark:border-white shadow-sketch dark:shadow-sketch-white rounded-xl p-6 relative group hover:-translate-y-2 hover:-rotate-2 transition-all cursor-pointer -rotate-2"
          >
            <div className="relative z-10 pointer-events-none">
              <div className="bg-white border-2 border-black w-12 h-12 rounded-none flex items-center justify-center mb-4 shadow-sketch transform rotate-45">
                <Activity className="w-6 h-6 text-black transform -rotate-45" />
              </div>
              <h3 className="text-2xl font-serif font-bold text-black mb-2">
                {featuresData.focus.title}
              </h3>
              <p className="text-black text-base font-bold leading-snug">
                Deep Work real. <br />Mide minutos de atención.
              </p>
            </div>
          </div>

          {/* Feature 5: AI Assistant */}
          <div
            onClick={() => setSelectedFeature(featuresData.ai)}
            className="bg-white dark:bg-slate-900 border-2 border-black dark:border-white shadow-sketch dark:shadow-sketch-white rounded-xl p-6 relative overflow-hidden group hover:-translate-y-2 hover:rotate-1 transition-all cursor-pointer rotate-1"
          >
            <div className="absolute top-0 right-0 p-2 opacity-5 pointer-events-none">
              <Sparkles className="w-32 h-32 text-black dark:text-white transform -rotate-12" />
            </div>
            <div className="relative z-10 pointer-events-none">
              <div className="bg-zenth-markerPink border-2 border-black dark:border-white w-12 h-12 rounded-full flex items-center justify-center mb-4 shadow-sketch transform rotate-12 shrink-0">
                <Sparkles className="w-6 h-6 text-black" />
              </div>
              <h3 className="text-2xl font-serif font-bold text-black dark:text-white mb-2">
                {featuresData.ai.title}
              </h3>
              <p className="text-base text-black dark:text-slate-200 leading-snug">
                Tu coach inteligente. <br />
                <span className="bg-zenth-markerYellow text-black px-1 mt-1 inline-block font-bold text-sm">Magic Input ✨ AI Magic</span>
              </p>
            </div>
          </div>

          {/* Feature 6: Entradas */}
          <div
            onClick={() => setSelectedFeature(featuresData.entries)}
            className="bg-zenth-bg dark:bg-slate-900 border-2 border-black dark:border-white shadow-sketch dark:shadow-sketch-white rounded-xl p-6 relative overflow-hidden group hover:-translate-y-2 hover:-rotate-1 transition-all cursor-pointer rotate-0"
          >
            <div className="absolute -top-3 left-1/4 transform -translate-x-1/2 w-20 h-5 bg-zenth-markerYellow/60 rotate-2 z-20 pointer-events-none"></div>
            <div className="relative z-10 pointer-events-none">
              <div className="bg-zenth-markerBlue border-2 border-black dark:border-white w-12 h-12 rounded-lg flex items-center justify-center mb-4 shadow-sketch transform -rotate-3 shrink-0">
                <PenTool className="w-6 h-6 text-black" />
              </div>
              <h3 className="text-2xl font-serif font-bold text-black dark:text-white mb-2">
                {featuresData.entries.title}
              </h3>
              <p className="text-base text-black dark:text-slate-200 leading-snug">
                Lienzo infinito. <br />
                <span className="bg-zenth-200 dark:bg-zenth-200/20 text-black dark:text-white px-1 mt-1 inline-block font-bold text-sm">Editor Pro ✍️ Multitipo</span>
              </p>
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