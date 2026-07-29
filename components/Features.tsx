import React, { useState, useEffect } from 'react';
import {
  X, ArrowUpRight, Users, PenLine, Timer, CalendarDays, Trophy, HeartPulse,
  Sparkles, Trash2, Palette, LayoutDashboard, Sun,
} from 'lucide-react';

interface FeatureDetail {
  id: string;
  title: string;
  shortDesc: string;
  bullets: string[];
  icon: React.ComponentType<{ className?: string; strokeWidth?: number }>;
  /** Id del artículo del blog relacionado, si lo hay. */
  relatedPostId?: string;
}

interface FeaturesProps {
  onNavigate: (page: 'home' | 'blog', targetId?: string) => void;
}

/**
 * El detalle de cada función. Vive en un solo objeto para que la tarjeta y el
 * modal no puedan contar cosas distintas de la misma función.
 */
const FEATURE_DETAILS: Record<string, FeatureDetail> = {
  collaboration: {
    id: 'collaboration',
    title: 'Pizarras compartidas',
    shortDesc: 'Invita a quien quieras y trabajad sobre el mismo tablero, en vivo.',
    bullets: [
      'Tres roles claros: Administrador gestiona la pizarra y a sus miembros, Miembro crea y edita tarjetas, Observador solo mira.',
      'Invita por correo electrónico o genera un enlace de invitación que caduca cuando tú decidas.',
      'Visibilidad configurable: una pizarra nace privada y puedes abrirla con un enlace público de solo lectura.',
      'Los cambios de tus compañeros aparecen en tiempo real, sin recargar.',
      'El propietario puede transferir la pizarra, y una pizarra nunca puede quedarse sin administradores.',
    ],
    icon: Users,
    relatedPostId: '15',
  },
  entries: {
    id: 'entries',
    title: 'Entradas: notas, tablas y archivos',
    shortDesc: 'Un espacio de trabajo completo, no solo un bloc de notas.',
    bullets: [
      'Notas con editor de texto enriquecido: títulos, listas, citas, código, resaltador e imágenes que se pegan y se redimensionan.',
      'Tablas con fórmulas, formato de celda, orden y exportación a CSV.',
      'Sube archivos —PDF, imágenes, documentos— y consúltalos desde la propia app.',
      'Graba notas de voz directamente desde el micrófono.',
      'Organízalo todo en carpetas y etiquetas, con buscador global.',
    ],
    icon: PenLine,
    relatedPostId: '16',
  },
  today: {
    id: 'today',
    title: 'Hoy, a tu ritmo',
    shortDesc: 'Mañana, tarde y noche. Y cuando lo necesites, hora exacta.',
    bullets: [
      'Tres bloques de energía en lugar de una agenda rígida: Mañana, Tarde y Noche.',
      'Cambia entre vista de día, semana y mes según lo lejos que quieras mirar.',
      'Tareas recurrentes, prioridades, grandes metas y etiquetas de color.',
      'Define a qué hora empieza tu mañana y Zenth reordena los bloques por ti.',
      'El historial de completadas guarda lo que ya hiciste, por si necesitas mirar atrás.',
    ],
    icon: Sun,
  },
  boards: {
    id: 'boards',
    title: 'Listas estilo tablero',
    shortDesc: 'Varias pizarras, cada una con sus propias columnas.',
    bullets: [
      'Crea todas las pizarras que necesites, cada una con su nombre e icono.',
      'Columnas personalizables: renómbralas, cámbiales el color y reordénalas.',
      'Arrastra y suelta tarjetas entre columnas, o entre la bandeja de entrada rápida y el tablero.',
      'Dos diseños de tablero: horizontal estilo Trello o ajustado al espacio en varias filas.',
    ],
    icon: LayoutDashboard,
  },
  focus: {
    id: 'focus',
    title: 'Modo enfoque',
    shortDesc: 'Un temporizador que mide atención real, no buenas intenciones.',
    bullets: [
      'Cuatro duraciones rápidas —15, 25, 45 y 60 minutos— o la que tú escribas.',
      'Asocia la sesión a una tarea concreta para saber cuánto le dedicaste de verdad.',
      'Cada sesión suma minutos de enfoque, la métrica que gobierna los niveles altos.',
      'Al terminar, ves las sesiones del día y tu constancia de la semana.',
    ],
    icon: Timer,
    relatedPostId: '5',
  },
  calendar: {
    id: 'calendar',
    title: 'Google Calendar',
    shortDesc: 'Tus eventos, junto a tus tareas, sin copiar nada a mano.',
    bullets: [
      'Conecta tu cuenta con permiso de solo lectura y elige qué calendarios quieres ver.',
      'Los eventos aparecen en Hoy junto a tus tareas, no en una pestaña aparte.',
      'La sincronización se actualiza sola cada cinco minutos, y puedes pausarla cuando quieras.',
      'Si te interesa, lleva calendarios concretos a una pizarra con la acción de exportar.',
    ],
    icon: CalendarDays,
    relatedPostId: '17',
  },
  progress: {
    id: 'progress',
    title: 'Niveles y rachas',
    shortDesc: 'Diez niveles que miden constancia, no velocidad.',
    bullets: [
      'Cada tarea completada suma 10 XP; las grandes metas, 50.',
      'Diez niveles, de Punto de Partida a Zenth, con requisitos de XP, racha, tareas y minutos de enfoque.',
      'Los niveles son permanentes: si pierdes la racha, no pierdes el nivel.',
      'La ruta de progreso te enseña qué te falta exactamente para el siguiente.',
    ],
    icon: Trophy,
    relatedPostId: '2',
  },
  mood: {
    id: 'mood',
    title: 'Registro de ánimo',
    shortDesc: 'Tu año en píxeles de color, y lo que te cuenta.',
    bullets: [
      'Registra cómo te sientes con un toque: excelente, bien, neutral, bajo o mal.',
      'El calendario mensual y el año en píxeles convierten meses de datos en un patrón visible.',
      'El balance del mes te dice qué estado predominó y cuántos días registraste.',
      'Sirve para lo que importa: notar a tiempo que llevas dos semanas en rojo.',
    ],
    icon: HeartPulse,
    relatedPostId: '3',
  },
  ai: {
    id: 'ai',
    title: 'Zen, el asistente',
    shortDesc: 'IA de Google donde ahorra trabajo, y en ningún otro sitio.',
    bullets: [
      'Escribe «Cena con Ana el viernes a las 21 h» y Zen rellena título, fecha, hora y prioridad.',
      'Auto-agendar propone el mejor momento para una tarea a partir de su texto.',
      'Sugerir pasos parte una tarea grande en tres a cinco micro-pasos accionables.',
      'Dentro del editor de notas, Zen AI mejora la redacción, resume o expande el texto seleccionado.',
    ],
    icon: Sparkles,
    relatedPostId: '13',
  },
  trash: {
    id: 'trash',
    title: 'Papelera',
    shortDesc: 'Borrar deja de dar miedo.',
    bullets: [
      'Las tareas y las entradas eliminadas van a la papelera, no al vacío.',
      'Restaura cualquier elemento a su sitio original con un clic.',
      'Vacíala cuando quieras para liberar espacio de verdad.',
      'Al mandar una tarea recurrente a la papelera, Zenth detiene sus repeticiones.',
    ],
    icon: Trash2,
  },
  appearance: {
    id: 'appearance',
    title: 'Se adapta a ti',
    shortDesc: 'Tres temas, tu color y la densidad que prefieras.',
    bullets: [
      'Temas Claro, Oscuro y Zen —este último con un fondo cálido, más suave de noche.',
      'Elige el color de acento que se usa en acciones y estados activos.',
      'Modo compacto para ver más tareas de una vez, y ancho de contenido fluido o contenido.',
      'Formato de hora de 12 o 24 h, efectos de sonido y recordatorios push opcionales.',
    ],
    icon: Palette,
  },
};

const SECONDARY_ORDER = ['today', 'boards', 'focus', 'calendar', 'progress', 'mood', 'ai', 'trash', 'appearance'];

const Features: React.FC<FeaturesProps> = ({ onNavigate }) => {
  const [selected, setSelected] = useState<FeatureDetail | null>(null);

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setSelected(null);
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, []);

  useEffect(() => {
    document.body.style.overflow = selected ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [selected]);

  const collaboration = FEATURE_DETAILS.collaboration;
  const entries = FEATURE_DETAILS.entries;

  return (
    <section id="features" className="scroll-mt-20 py-24 lg:py-32">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <p className="t-eyebrow">Qué incluye</p>
          <h2 className="t-display-lg mt-4 text-ink">
            Once herramientas
            <br />
            que se hablan entre sí.
          </h2>
          <p className="t-body-lg mt-6 max-w-xl text-ink-muted">
            Nada de módulos sueltos: una tarea puede convertirse en nota, una nota vivir en una
            carpeta y una pizarra tener miembros. Toca cualquier tarjeta para ver el detalle.
          </p>
        </div>

        {/* Fila destacada: las dos funciones que definen esta versión. */}
        <div className="mt-14 grid gap-4 lg:grid-cols-2">
          <button
            onClick={() => setSelected(collaboration)}
            className="fr-spotlight fr-spotlight--violet group text-left transition-transform duration-300 hover:-translate-y-1"
          >
            <Users className="h-7 w-7" strokeWidth={1.5} />
            <h3 className="t-display-md mt-6">{collaboration.title}</h3>
            <p className="t-body-lg mt-3 max-w-md text-white/80">{collaboration.shortDesc}</p>
            <span className="t-caption mt-8 inline-flex items-center gap-1.5">
              Ver el detalle
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </span>
          </button>

          <button
            onClick={() => setSelected(entries)}
            className="fr-card-featured group flex flex-col items-start p-8 text-left transition-transform duration-300 hover:-translate-y-1"
          >
            <PenLine className="h-7 w-7 text-ink" strokeWidth={1.5} />
            <h3 className="t-display-md mt-6 text-ink">{entries.title}</h3>
            <p className="t-body-lg mt-3 max-w-md text-ink-muted">{entries.shortDesc}</p>
            <span className="t-caption mt-8 inline-flex items-center gap-1.5 text-ink">
              Ver el detalle
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </span>
          </button>
        </div>

        {/* Resto de funciones */}
        <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {SECONDARY_ORDER.map(key => {
            const feature = FEATURE_DETAILS[key];
            const Icon = feature.icon;
            return (
              <button
                key={feature.id}
                onClick={() => setSelected(feature)}
                className="fr-card group flex h-full flex-col items-start text-left transition-transform duration-300 hover:-translate-y-1"
              >
                <Icon className="h-5 w-5 text-ink" strokeWidth={1.75} />
                <h3 className="t-headline mt-5 text-ink">{feature.title}</h3>
                <p className="t-body mt-2 text-ink-muted">{feature.shortDesc}</p>
                <span className="t-caption mt-6 inline-flex items-center gap-1.5 text-ink-muted transition-colors group-hover:text-ink">
                  Detalle
                  <ArrowUpRight className="h-3.5 w-3.5" />
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Modal de detalle */}
      {selected && (
        <div
          className="fixed inset-0 z-50 flex items-end justify-center p-0 sm:items-center sm:p-4"
          role="dialog"
          aria-modal="true"
          aria-label={selected.title}
        >
          <div
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            onClick={() => setSelected(null)}
          />

          <div className="fr-elevated relative z-10 max-h-[85vh] w-full max-w-lg overflow-y-auto rounded-t-atmos bg-surface-1 p-7 sm:rounded-atmos">
            <div className="flex items-start justify-between gap-4">
              <div className="flex items-center gap-3">
                <selected.icon className="h-6 w-6 text-ink" strokeWidth={1.5} />
                <h3 className="t-display-md text-ink">{selected.title}</h3>
              </div>
              <button
                onClick={() => setSelected(null)}
                className="fr-btn fr-btn-icon shrink-0"
                aria-label="Cerrar"
              >
                <X className="h-[18px] w-[18px]" />
              </button>
            </div>

            <ul className="mt-7 space-y-4">
              {selected.bullets.map((bullet, i) => (
                <li key={i} className="flex gap-3">
                  <span className="mt-[9px] h-1 w-1 shrink-0 rounded-full bg-accent" />
                  <span className="t-body text-ink-muted">{bullet}</span>
                </li>
              ))}
            </ul>

            {selected.relatedPostId && (
              <button
                onClick={() => {
                  const postId = selected.relatedPostId!;
                  setSelected(null);
                  onNavigate('blog', postId);
                }}
                className="fr-btn fr-btn-primary mt-8 w-full"
              >
                Leer el artículo completo
                <ArrowUpRight className="h-4 w-4" />
              </button>
            )}
          </div>
        </div>
      )}
    </section>
  );
};

export default Features;
