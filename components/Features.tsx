import React from 'react';
import { useNavigate } from 'react-router-dom';
import {
  ArrowUpRight, Users, LibraryBig, CircleDashed, CalendarDays, Orbit, HeartPulse,
  Sparkles, Trash2, Palette, LayoutDashboard, Mic, PhoneCall,
  PenLine, BarChart3, UserCog, BookOpen,
} from 'lucide-react';
import { AgendaFocusShot, BoardShot, LibraryShot } from './FeatureShots';

interface FeatureDetail {
  id: string;
  title: string;
  shortDesc: string;
  icon: React.ComponentType<{ className?: string; strokeWidth?: number }>;
  /** Artículo del blog al que lleva la tarjeta: sólo las tres con «captura». */
  relatedPostId?: string;
  /** Artículo de la documentación al que lleva la tarjeta: todas las demás. */
  docsPath?: string;
}

interface FeaturesProps {
  onNavigate: (page: 'home' | 'blog', targetId?: string) => void;
}

/**
 * Las funciones de Zenth: nombre, frase, icono y a dónde lleva su tarjeta. Las
 * tres con «captura» llevan a su artículo del blog; las demás, a la documentación.
 */
const FEATURE_DETAILS: Record<string, FeatureDetail> = {
  collaboration: {
    id: 'collaboration',
    title: 'Pizarras compartidas',
    shortDesc: 'Invita a quien quieras y trabajen sobre el mismo tablero, en vivo.',
    icon: Users,
    relatedPostId: '15',
  },
  entries: {
    id: 'entries',
    title: 'Biblioteca + Google Drive',
    shortDesc: 'Tus notas, lienzos y tu espacio documental de Google, en un mismo explorador.',
    icon: LibraryBig,
    relatedPostId: '16',
  },
  notes: {
    id: 'notes',
    title: 'Notas y lienzos en equipo',
    shortDesc: 'Escribe y dibuja con otras personas, en la misma nota y en vivo.',
    icon: PenLine,
    docsPath: '/docs/biblioteca/compartir-notas-y-lienzos',
  },
  voice: {
    id: 'voice',
    title: 'Sala del equipo y llamadas privadas',
    shortDesc: 'Voz y pantalla compartida dentro de la propia pizarra.',
    icon: Mic,
    docsPath: '/docs/reuniones/salas-de-pizarra-y-llamadas-privadas',
  },
  calls: {
    id: 'calls',
    title: 'Reuniones con invitados',
    shortDesc: 'Habla con tu equipo o comparte un enlace aislado con invitados externos.',
    icon: PhoneCall,
    docsPath: '/docs/reuniones/reuniones-rapidas-e-invitados',
  },
  today: {
    id: 'today',
    title: 'Agenda visual',
    shortDesc: 'Día, semana y mes para decidir cuándo cabe realmente cada cosa.',
    icon: CalendarDays,
    relatedPostId: '19',
  },
  boards: {
    id: 'boards',
    title: 'Pizarras por proyecto',
    shortDesc: 'Cada proyecto conserva sus listas, su bandeja, sus miembros y su ritmo.',
    icon: LayoutDashboard,
    docsPath: '/docs/pizarras/crear-y-organizar-pizarras',
  },
  focus: {
    id: 'focus',
    title: 'Enfoque global',
    shortDesc: 'El temporizador sigue contigo mientras te mueves por Zenth.',
    icon: CircleDashed,
    docsPath: '/docs/enfoque/usar-enfoque',
  },
  calendar: {
    id: 'calendar',
    title: 'Google Calendar',
    shortDesc: 'Tus eventos, junto a tus tareas, sin copiar nada a mano.',
    icon: CalendarDays,
    docsPath: '/docs/integraciones/google-calendar',
  },
  progress: {
    id: 'progress',
    title: 'Progreso',
    shortDesc: 'XP, niveles, racha y logros reunidos en un mismo lugar.',
    icon: Orbit,
    docsPath: '/docs/progreso/xp-niveles-y-logros',
  },
  stats: {
    id: 'stats',
    title: 'Estadísticas',
    shortDesc: 'Cuánto tiempo pasas en Zenth y qué haces con él.',
    icon: BarChart3,
    docsPath: '/docs/progreso/estadisticas',
  },
  mood: {
    id: 'mood',
    title: 'Registro de ánimo',
    shortDesc: 'Tu año en píxeles de color, y lo que te cuenta.',
    icon: HeartPulse,
    docsPath: '/docs/progreso/registro-de-animo',
  },
  accounts: {
    id: 'accounts',
    title: 'Varias cuentas',
    shortDesc: 'Personal y trabajo en el mismo dispositivo, sin cerrar sesión.',
    icon: UserCog,
    docsPath: '/docs/cuenta/varias-cuentas',
  },
  ai: {
    id: 'ai',
    title: 'Zen, el asistente',
    shortDesc: 'IA de Google donde ahorra trabajo, y en ningún otro sitio.',
    icon: Sparkles,
    docsPath: '/docs/integraciones/zen-asistente',
  },
  trash: {
    id: 'trash',
    title: 'Papelera',
    shortDesc: 'Borrar deja de dar miedo.',
    icon: Trash2,
    docsPath: '/docs/cuenta/papelera',
  },
  appearance: {
    id: 'appearance',
    title: 'Se adapta a ti',
    shortDesc: 'Cuatro temas, tu avatar y la densidad que prefieras.',
    icon: Palette,
    docsPath: '/docs/cuenta/ajustes-generales',
  },
};

/**
 * Las tres funciones con «captura» propia (ver `FeatureShots.tsx`); el resto se
 * muestra como fila de tarjetas pequeñas, en este orden.
 */
const SECONDARY_ORDER = ['boards', 'focus', 'calendar', 'progress', 'stats', 'mood', 'voice', 'calls', 'notes', 'accounts', 'ai', 'trash', 'appearance'];

/** Color de la insignia de cada función: la paleta pastel que ya usa el producto. */
const TONE: Record<string, string> = {
  collaboration: '#B39DDB',
  entries: '#81D4FA',
  today: '#FFE082',
  boards: '#81D4FA',
  focus: '#FFAB91',
  calendar: '#FFE082',
  progress: '#CE93D8',
  stats: '#A5D6A7',
  mood: '#FFB7CE',
  voice: '#80CBC4',
  calls: '#90CAF9',
  notes: '#E6EE9C',
  accounts: '#B0BEC5',
  ai: '#B39DDB',
  trash: '#BCAAA4',
  appearance: '#FFCC80',
};

/**
 * Enlace interno: es un <a> de verdad (se puede abrir en otra pestaña o copiar
 * la dirección) y, con un clic normal, navega sin recargar la página.
 */
const FeatureLink: React.FC<{
  href: string;
  onGo: () => void;
  className: string;
  children: React.ReactNode;
}> = ({ href, onGo, className, children }) => (
  <a
    href={href}
    className={className}
    onClick={e => {
      if (e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
      e.preventDefault();
      onGo();
    }}
  >
    {children}
  </a>
);

/** Tarjeta grande: categoría con su insignia, frase, «Leer el artículo» y una «captura» de la interfaz que asoma por abajo. */
const ShowcaseCard: React.FC<{
  feature: FeatureDetail;
  postId: string;
  wide?: boolean;
  onGo: (postId: string) => void;
  children: React.ReactNode;
}> = ({ feature, postId, wide = false, onGo, children }) => {
  const Icon = feature.icon;
  return (
    <FeatureLink
      href={`/blog/${postId}`}
      onGo={() => onGo(postId)}
      className={`group relative flex w-full overflow-hidden rounded-[28px] bg-surface-1 text-left ${wide ? 'flex-col lg:min-h-[440px] lg:flex-row' : 'flex-col'}`}
    >
      <div className={wide ? 'p-7 sm:p-9 lg:w-[38%] lg:shrink-0' : 'p-7 pb-0 sm:p-9 sm:pb-0'}>
        <span className="inline-flex items-center gap-2.5">
          <span className="flex h-8 w-8 items-center justify-center rounded-[10px]" style={{ backgroundColor: TONE[feature.id] }}>
            <Icon className="h-4 w-4 text-black/75" strokeWidth={1.9} />
          </span>
          <span className="text-[14px] font-semibold text-ink-muted">{feature.title}</span>
        </span>
        <h3 className="mt-4 text-[22px] font-semibold leading-[1.22] tracking-[-0.025em] text-ink sm:text-[26px]">
          {feature.shortDesc}
        </h3>
        <span className="mt-5 inline-flex items-center gap-1.5 rounded-pill bg-canvas px-3.5 py-2 text-[13px] font-semibold text-ink ring-1 ring-hairline transition-colors duration-300 group-hover:bg-ink group-hover:text-canvas group-hover:ring-transparent">
          Leer el artículo
          <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" strokeWidth={2.2} />
        </span>
      </div>
      <div className={wide ? 'mt-6 min-w-0 flex-1 lg:mt-0' : 'mt-8'} aria-hidden="true">{children}</div>
    </FeatureLink>
  );
};

/** Tarjeta pequeña: insignia, flecha en la esquina y nombre. */
const CompactCard: React.FC<{
  title: string;
  tone: string;
  icon: React.ComponentType<{ className?: string; strokeWidth?: number }>;
  href: string;
  onGo: () => void;
  className?: string;
  /** Color del icono sobre la insignia: oscuro sobre los pasteles, claro sobre la tinta. */
  iconClass?: string;
}> = ({ title, tone, icon: Icon, href, onGo, className = '', iconClass = 'text-black/75' }) => (
  <FeatureLink
    href={href}
    onGo={onGo}
    className={`group flex min-h-[148px] flex-col items-start justify-between rounded-[20px] border border-hairline bg-canvas p-5 text-left transition-colors duration-300 hover:bg-surface-1 ${className}`}
  >
    <span className="flex w-full items-start justify-between">
      <span className="flex h-10 w-10 items-center justify-center rounded-full" style={{ backgroundColor: tone }}>
        <Icon className={`h-5 w-5 ${iconClass}`} strokeWidth={1.9} />
      </span>
      <ArrowUpRight
        className="h-4 w-4 text-ink-muted opacity-60 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:opacity-100"
        strokeWidth={2}
      />
    </span>
    <span className="mt-6 text-[16px] font-semibold leading-[1.3] tracking-[-0.01em] text-ink">{title}</span>
  </FeatureLink>
);

const Features: React.FC<FeaturesProps> = ({ onNavigate }) => {
  const navigate = useNavigate();
  const goToPost = (postId: string) => onNavigate('blog', postId);

  const collaboration = FEATURE_DETAILS.collaboration;
  const entries = FEATURE_DETAILS.entries;
  const today = FEATURE_DETAILS.today;

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

        {/* Tres funciones con «captura» de la interfaz: llevan a su artículo del blog. */}
        <div className="mt-14 grid gap-4 lg:grid-cols-2">
          <ShowcaseCard feature={collaboration} postId={collaboration.relatedPostId!} onGo={goToPost}>
            <BoardShot />
          </ShowcaseCard>
          <ShowcaseCard feature={entries} postId={entries.relatedPostId!} onGo={goToPost}>
            <LibraryShot />
          </ShowcaseCard>
        </div>
        <div className="mt-4">
          <ShowcaseCard feature={today} postId={today.relatedPostId!} wide onGo={goToPost}>
            <AgendaFocusShot />
          </ShowcaseCard>
        </div>

        {/* El resto de funciones: llevan a la documentación. */}
        <p className="t-body mt-12 text-ink-muted">Y otras {SECONDARY_ORDER.length} herramientas, explicadas en la documentación.</p>
        <div className="mt-4 grid grid-cols-2 gap-3 lg:grid-cols-5">
          {SECONDARY_ORDER.map(key => {
            const feature = FEATURE_DETAILS[key];
            const path = feature.docsPath ?? '/docs';
            return (
              <CompactCard
                key={feature.id}
                title={feature.title}
                tone={TONE[key]}
                icon={feature.icon}
                href={path}
                onGo={() => navigate(path)}
              />
            );
          })}
          <CompactCard
            title="Cómo se usa cada una, paso a paso"
            tone="var(--fr-ink)"
            iconClass="text-canvas"
            icon={BookOpen}
            href="/docs"
            onGo={() => navigate('/docs')}
            className="lg:col-span-2"
          />
        </div>
      </div>
    </section>
  );
};

export default Features;
