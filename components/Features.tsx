import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  X, ArrowUpRight, Users, LibraryBig, CircleDashed, CalendarDays, Orbit, HeartPulse,
  Sparkles, Trash2, Palette, LayoutDashboard, ChevronDown, Mic, PhoneCall,
  PenLine, BarChart3, UserCog, BookOpen,
} from 'lucide-react';

interface FeatureDetail {
  id: string;
  title: string;
  shortDesc: string;
  bullets: string[];
  icon: React.ComponentType<{ className?: string; strokeWidth?: number }>;
  /** Id del artículo del blog relacionado, si lo hay. */
  relatedPostId?: string;
  /** Ruta del artículo de la documentación donde se explica a fondo. */
  docsPath?: string;
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
    shortDesc: 'Invita a quien quieras y trabajen sobre el mismo tablero, en vivo.',
    bullets: [
      'Tres roles claros: Administrador gestiona la pizarra y a sus miembros, Miembro crea y edita tarjetas, Observador solo mira.',
      'Invita por correo electrónico o genera un enlace de invitación que puedes revocar cuando quieras.',
      'Visibilidad configurable: una pizarra nace privada y puedes abrirla con un enlace público de solo lectura.',
      'Comentarios, menciones, asignaciones, votos, aprobaciones y actividad compartida viven junto al trabajo.',
      'Responsables múltiples, Tomar tarea, etiquetas compartidas y filtros con carga de trabajo ayudan a repartir el trabajo.',
      'Checklists con responsable, fecha y progreso, además de adjuntos privados y notificaciones, mantienen el contexto en la tarjeta.',
      'Automatizaciones y plantillas de tarjeta, lista o pizarra aceleran los flujos que repites.',
      'Los cambios y la presencia de tus compañeros aparecen en tiempo real, sin recargar.',
      'El propietario puede transferir la pizarra, y una pizarra nunca puede quedarse sin administradores.',
    ],
    icon: Users,
    relatedPostId: '15',
    docsPath: '/docs/pizarras/compartir-una-pizarra',
  },
  entries: {
    id: 'entries',
    title: 'Biblioteca + Google Drive',
    shortDesc: 'Tus notas, lienzos y tu espacio documental de Google, en un mismo explorador.',
    bullets: [
      'Las notas de Zenth usan un editor de bloques: menú «/», Markdown al escribir, tablas, imágenes, buscar y reemplazar, modo concentración y exportación a Markdown, HTML o PDF.',
      'Los lienzos, con Excalidraw, sirven para diagramas y bocetos, con figuras reutilizables.',
      'Conecta Google Drive para recorrer Mi unidad, recientes, destacados y compartidos contigo desde Biblioteca.',
      'Crea documentos, hojas, presentaciones y formularios de Google; puedes editarlos en Zenth o abrirlos en Google para usar el editor completo.',
      'Sube archivos, elige existentes con Google Picker, crea carpetas reales y graba notas de voz directamente en tu Drive.',
      'Busca, filtra, ordena, mueve, comparte y exporta sin salir del mismo espacio.',
    ],
    icon: LibraryBig,
    relatedPostId: '19',
    docsPath: '/docs/biblioteca/explorar-la-biblioteca',
  },
  notes: {
    id: 'notes',
    title: 'Notas y lienzos en equipo',
    shortDesc: 'Escribe y dibuja con otras personas, en la misma nota y en vivo.',
    bullets: [
      'Comparte una nota o un lienzo por correo con permiso de ver, sugerir o editar.',
      'Ve quién está en el documento y qué hace: escribiendo, sugiriendo, mirando o dibujando.',
      'El modo Sugerencias deja proponer cambios que tú revisas y aplicas o descartas.',
      'Lo que te comparten aparece en Compartidos conmigo y puedes guardarlo en tu Biblioteca.',
      'Vincula notas y lienzos a tareas y decide si la pizarra puede leerlos o editarlos.',
    ],
    icon: PenLine,
    docsPath: '/docs/biblioteca/compartir-notas-y-lienzos',
  },
  voice: {
    id: 'voice',
    title: 'Sala del equipo y llamadas privadas',
    shortDesc: 'Voz y pantalla compartida dentro de la propia pizarra.',
    bullets: [
      'Cada pizarra compartida tiene su sala de voz, abierta a sus integrantes: entra y sal libremente desde Reuniones.',
      'Llama en privado a cualquiera con quien compartas pizarra: uno a uno, directo desde la cara de la persona.',
      'Pantalla de preparación antes de entrar: eliges micrófono y auriculares, compruebas la señal y decides si entrar callado o solo a escuchar.',
      'El chat de la sala se guarda con la pizarra: quien llega tarde lo lee. Y cada sala puede tener su propio fondo.',
      'La conversación sigue viva mientras navegas por la app: minimiza u oculta el panel y el audio continúa.',
    ],
    icon: Mic,
    relatedPostId: '18',
    docsPath: '/docs/reuniones/salas-de-pizarra-y-llamadas-privadas',
  },
  calls: {
    id: 'calls',
    title: 'Reuniones con invitados',
    shortDesc: 'Habla con tu equipo o comparte un enlace aislado con invitados externos.',
    bullets: [
      'Reuniones reúne en un solo panel las salas de tus pizarras, las llamadas privadas y las reuniones rápidas, sin cambiar de sección.',
      'Crea un enlace para más tarde, inicia una reunión ahora o prográmala en Agenda con fecha, hora e invitados.',
      'Quien recibe un enlace entra desde el navegador con su nombre, sin crear una cuenta y sin acceder a tus pizarras, archivos ni historial.',
      'Tú decides quién entra: sala de espera con admisión, permisos de micrófono y pantalla para invitados, silenciar a todos y cerrar la reunión para todos.',
      'Las conversaciones usan voz y pantalla compartida, además de reacciones, mano levantada y chat. Zenth no activa cámara ni graba las llamadas.',
    ],
    icon: PhoneCall,
    relatedPostId: '20',
    docsPath: '/docs/reuniones/reuniones-rapidas-e-invitados',
  },
  today: {
    id: 'today',
    title: 'Agenda visual',
    shortDesc: 'Día, semana y mes para decidir cuándo cabe realmente cada cosa.',
    bullets: [
      'Cambia entre día, semana y mes, y abre el planificador anual para ver los doce meses de un vistazo.',
      'En la vista diaria puedes mover y redimensionar los bloques directamente.',
      'Usa Mañana, Tarde y Noche cuando no necesites una hora exacta, o define inicio y duración cuando sí.',
      'Crea tareas, eventos y reuniones con repetición, recordatorios, etiquetas, pasos, documentos, ubicación y enlace de videollamada.',
      'Invita por correo a una reunión y sigue quién aceptó.',
      'Elige por separado si las tareas nuevas de Agenda también pertenecen a la pizarra activa.',
    ],
    icon: CalendarDays,
    docsPath: '/docs/agenda/vistas-y-planificacion',
  },
  boards: {
    id: 'boards',
    title: 'Pizarras por proyecto',
    shortDesc: 'Cada proyecto conserva sus listas, su bandeja, sus miembros y su ritmo.',
    bullets: [
      'Crea todas las pizarras que necesites, cada una con su nombre, icono y color.',
      'Listas personalizables: renómbralas, cámbiales el color y reordénalas.',
      'Captura primero en la bandeja rápida y clasifica después, o crea la tarjeta directamente en una lista.',
      'Arrastra tarjetas entre listas; las completadas pasan a un historial que puedes buscar y restaurar.',
      'Dos diseños de tablero: horizontal estilo Trello o ajustado al espacio en varias filas.',
    ],
    icon: LayoutDashboard,
    docsPath: '/docs/pizarras/crear-y-organizar-pizarras',
  },
  focus: {
    id: 'focus',
    title: 'Enfoque global',
    shortDesc: 'El temporizador sigue contigo mientras te mueves por Zenth.',
    bullets: [
      'No es una sección aparte: se abre desde la cabecera y continúa aunque cambies de pantalla.',
      'Usa 15, 25, 45 o 60 minutos, una duración propia o el modo sin duración.',
      'Asocia la sesión a una tarea concreta para saber cuánto le dedicaste de verdad, y apunta ideas con la nota rápida.',
      'Mezcla lluvia, bosque, cafetería, olas, chimenea y ruidos; guarda combinaciones o reproduce música de Zenth.',
      'Configura tu objetivo diario, descansos y avisos. Puedes revisar, corregir o borrar sesiones desde el historial.',
      'Si lo permites, tu equipo ve hasta qué hora estás enfocado, nunca el nombre de la tarea.',
    ],
    icon: CircleDashed,
    relatedPostId: '5',
    docsPath: '/docs/enfoque/usar-enfoque',
  },
  calendar: {
    id: 'calendar',
    title: 'Google Calendar',
    shortDesc: 'Tus eventos, junto a tus tareas, sin copiar nada a mano.',
    bullets: [
      'Conecta tu cuenta con permiso de solo lectura y elige qué calendarios quieres ver.',
      'Los eventos aparecen en Agenda junto a tus tareas, no en una pestaña aparte.',
      'La sincronización se actualiza sola cada cinco minutos, y puedes pausarla cuando quieras.',
      'Si te interesa, lleva calendarios concretos a una pizarra con una acción explícita y reversible.',
    ],
    icon: CalendarDays,
    relatedPostId: '17',
    docsPath: '/docs/integraciones/google-calendar',
  },
  progress: {
    id: 'progress',
    title: 'Progreso',
    shortDesc: 'XP, niveles, racha y logros reunidos en un mismo lugar.',
    bullets: [
      'Cada tarea completada suma 10 XP; las grandes metas, 50.',
      'Veinte niveles inspirados en constelaciones, con requisitos de XP, mejor racha, tareas y minutos de enfoque.',
      'Los niveles son permanentes: si pierdes la racha, no pierdes el nivel.',
      'Veinticinco logros recorren ejecución, constancia, enfoque y el mapa completo.',
      'La ruta de progreso muestra qué has hecho y qué falta para el siguiente nivel.',
    ],
    icon: Orbit,
    relatedPostId: '2',
    docsPath: '/docs/progreso/xp-niveles-y-logros',
  },
  stats: {
    id: 'stats',
    title: 'Estadísticas',
    shortDesc: 'Cuánto tiempo pasas en Zenth y qué haces con él.',
    bullets: [
      'Tiempo en cada sección, por hora y por día, medido solo con la pestaña visible.',
      'Calidad de tu enfoque, tareas cerradas, creadas y atrasadas, y notas creadas o editadas.',
      'Compáralo con el período anterior o con el rango que elijas.',
      'Exporta el informe a Excel, CSV o PDF.',
      'Es tuyo: nadie más ve tus estadísticas, ni siquiera los miembros de tus pizarras.',
    ],
    icon: BarChart3,
    docsPath: '/docs/progreso/estadisticas',
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
    docsPath: '/docs/progreso/registro-de-animo',
  },
  accounts: {
    id: 'accounts',
    title: 'Varias cuentas',
    shortDesc: 'Personal y trabajo en el mismo dispositivo, sin cerrar sesión.',
    bullets: [
      'Añade otra cuenta desde el menú de tu avatar sin salir de la pantalla en la que estás.',
      'Cambia entre cuentas en un clic; cada una conserva sus datos, ajustes e integraciones por separado.',
      'Si hay una llamada, una sesión de Enfoque o cambios sin guardar, Zenth te avisa antes de cambiar.',
      'Cierra la sesión de una cuenta, de todas, o quítalas de este dispositivo.',
    ],
    icon: UserCog,
    docsPath: '/docs/cuenta/varias-cuentas',
  },
  ai: {
    id: 'ai',
    title: 'Zen, el asistente',
    shortDesc: 'IA de Google donde ahorra trabajo, y en ningún otro sitio.',
    bullets: [
      'Escribe «Cena con Ana el viernes a las 21 h» y Zen rellena título, fecha, hora y prioridad.',
      'Auto-agendar propone el mejor momento para una tarea a partir de su texto.',
      'Sugerir pasos parte una tarea grande en tres a cinco micro-pasos accionables.',
      'Solo actúa cuando se lo pides, y solo recibe el texto de esa solicitud.',
    ],
    icon: Sparkles,
    relatedPostId: '13',
    docsPath: '/docs/integraciones/zen-asistente',
  },
  trash: {
    id: 'trash',
    title: 'Papelera',
    shortDesc: 'Borrar deja de dar miedo.',
    bullets: [
      'Las tareas, las notas y los lienzos eliminados van a la papelera de Zenth, no al vacío.',
      'Restaura cualquier elemento a su sitio original con un clic.',
      'Vacíala cuando quieras para liberar espacio de verdad.',
      'Al mandar una tarea recurrente a la papelera, Zenth detiene sus repeticiones.',
      'Los archivos de Google que envías a la papelera de Drive también se pueden restaurar desde la pestaña Drive.',
    ],
    icon: Trash2,
    docsPath: '/docs/cuenta/papelera',
  },
  appearance: {
    id: 'appearance',
    title: 'Se adapta a ti',
    shortDesc: 'Cuatro temas, tu avatar y la densidad que prefieras.',
    bullets: [
      'Elige Sistema, Claro, Oscuro o Zen —este último con un fondo cálido, más suave de noche.',
      'Personaliza tu avatar con degradados, ilustraciones o una foto.',
      'Modo compacto para ver más tareas de una vez, y ancho de contenido fluido o contenido.',
      'Formato de hora de 12 o 24 h, efectos de sonido y avisos por app, push o correo, canal por canal.',
    ],
    icon: Palette,
    docsPath: '/docs/cuenta/ajustes-generales',
  },
};

const SECONDARY_ORDER = ['today', 'boards', 'focus', 'calendar', 'progress', 'stats', 'mood', 'voice', 'calls', 'notes', 'accounts', 'ai', 'trash', 'appearance'];

const Features: React.FC<FeaturesProps> = ({ onNavigate }) => {
  const navigate = useNavigate();
  const [selected, setSelected] = useState<FeatureDetail | null>(null);
  const [showAllMobile, setShowAllMobile] = useState(false);

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
            Dieciséis herramientas
            <br />
            que se hablan entre sí.
          </h2>
          <p className="t-body-lg mt-6 max-w-xl text-ink-muted">
            Una tarea puede vivir en Agenda y en una pizarra, convertirse en nota y terminar en una
            sesión de enfoque. Biblioteca conecta el contenido de Zenth con tu Drive sin duplicarlo.
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
            <LibraryBig className="h-7 w-7 text-ink" strokeWidth={1.5} />
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
          {SECONDARY_ORDER.map((key, index) => {
            const feature = FEATURE_DETAILS[key];
            const Icon = feature.icon;
            const isInitiallyHiddenOnMobile = index >= 3 && !showAllMobile;
            return (
              <button
                key={feature.id}
                onClick={() => setSelected(feature)}
                className={`fr-card group h-full flex-col items-start text-left transition-transform duration-300 hover:-translate-y-1 ${isInitiallyHiddenOnMobile ? 'hidden sm:flex' : 'flex'}`}
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

        <button
          type="button"
          onClick={() => setShowAllMobile(current => !current)}
          aria-expanded={showAllMobile}
          className="fr-btn fr-btn-translucent mx-auto mt-5 flex sm:hidden"
        >
          {showAllMobile ? 'Mostrar menos' : `Ver las ${SECONDARY_ORDER.length - 3} restantes`}
          <ChevronDown
            className={`h-4 w-4 transition-transform ${showAllMobile ? 'rotate-180' : ''}`}
            aria-hidden="true"
          />
        </button>
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

            {selected.docsPath && (
              <button
                onClick={() => {
                  const target = selected.docsPath!;
                  setSelected(null);
                  navigate(target);
                }}
                className="fr-btn fr-btn-primary mt-8 w-full"
              >
                <BookOpen className="h-4 w-4" />
                Ver cómo se usa
              </button>
            )}

            {selected.relatedPostId && (
              <button
                onClick={() => {
                  const postId = selected.relatedPostId!;
                  setSelected(null);
                  onNavigate('blog', postId);
                }}
                className={`fr-btn w-full ${selected.docsPath ? 'fr-btn-secondary mt-3' : 'fr-btn-primary mt-8'}`}
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
