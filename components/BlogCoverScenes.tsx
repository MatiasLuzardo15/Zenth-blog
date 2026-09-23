import React from 'react';
import {
  AlignLeft, Bold, Calendar, Check, ChevronDown, Code, FileSpreadsheet, FileText, Flame, Hand, Italic,
  LayoutDashboard, LibraryBig, Link2, LogOut, Mic, MicOff, MonitorUp, MoreHorizontal, PenTool, PhoneCall,
  Plus, Quote, Search, Smile, Sparkles, Strikethrough, Target, Timer, Underline, UserPlus,
} from 'lucide-react';
import { TodayView } from './demo/TodayView';
import { FocusView } from './demo/FocusView';
import { CreatePanel } from './demo/panels';
import {
  BOARD_LISTS, CARD_ASSIGNEE, FOCUS_RUNNING_AT, FOCUS_TASK, MOMENTS, NEW_CARD_NOTES,
} from './demo/timeline';

/**
 * Escenas de las portadas del blog: interfaz de Zenth dibujada en código, sobre
 * un lienzo de 640×400. Cuando existe, se reutiliza el componente real de la demo
 * (Agenda, Enfoque, editor de tareas); lo demás replica sus clases con etiquetas
 * que existen en la app o que el propio artículo describe (paleta de ánimo,
 * niveles y constelaciones, menú de bloques, «Pedir a Zen»).
 */

export const COVER_W = 640;
export const COVER_H = 400;

/* ── Piezas comunes ─────────────────────────────────────────────────────── */

/** Coloca contenido de tamaño nativo en el lienzo, opcionalmente ampliado. */
const S: React.FC<{ x: number; y: number; k?: number; className?: string; children: React.ReactNode }> = ({
  x, y, k = 1, className = '', children,
}) => (
  <div className={`absolute origin-top-left ${className}`} style={{ left: x, top: y, transform: k === 1 ? undefined : `scale(${k})` }}>
    {children}
  </div>
);

const SHADOW = 'shadow-[0_18px_50px_-18px_rgba(0,0,0,0.45)]';

/** Una ventana o tarjeta de la interfaz. */
const Card: React.FC<{ className?: string; children: React.ReactNode }> = ({ className = '', children }) => (
  <div className={`rounded-[20px] border border-hairline bg-canvas ${SHADOW} ${className}`}>{children}</div>
);

/** Recorta un trozo de una pantalla compuesta a tamaño de diseño (p. ej. `TodayView`, de 1280×728) y lo escala. */
const Crop: React.FC<{
  design: [number, number]; x: number; y: number; scale: number; w: number; h: number; children: React.ReactNode;
}> = ({ design, x, y, scale, w, h, children }) => (
  <Card className="relative overflow-hidden">
    <div style={{ width: w, height: h }} className="relative overflow-hidden rounded-[20px]">
      <div
        className="absolute left-0 top-0 origin-top-left"
        style={{ width: design[0], height: design[1], transform: `translate(${-x * scale}px, ${-y * scale}px) scale(${scale})` }}
      >
        {children}
      </div>
    </div>
  </Card>
);

const TODAY_STATIC = { typed: '', isTyping: false, isPressing: false, added: true, completed: false, panelOpen: false } as const;

/** Tarea en una lista de Agenda o de una pizarra. */
const TaskRow: React.FC<{ title: string; time?: string; color?: string; done?: boolean }> = ({ title, time, color = '#FFB7CE', done = false }) => (
  <div className="rounded-medium bg-surface-1 px-3 py-2.5">
    <div className="flex items-center gap-2.5">
      <span className={`flex h-4 w-4 shrink-0 items-center justify-center rounded-full border-[1.5px] ${done ? 'border-ink bg-ink' : 'border-ink-muted'}`}>
        {done && <Check className="h-2.5 w-2.5 text-canvas" strokeWidth={4} />}
      </span>
      <span className={`flex-1 truncate text-[12px] font-semibold text-ink ${done ? 'line-through opacity-55' : ''}`}>{title}</span>
      <span className="h-1.5 w-1.5 shrink-0 rounded-full" style={{ backgroundColor: color }} />
    </div>
    {time && <p className="mt-1 pl-[26px] text-[10px] tabular-nums text-ink-muted">{time}</p>}
  </div>
);

/** Tarjeta de un momento del día (Mañana, Tarde, Noche), como en Agenda. */
const MomentCard: React.FC<{ moment: (typeof MOMENTS)[number]['key']; count?: number; className?: string; children?: React.ReactNode }> = ({
  moment, count, className = '', children,
}) => {
  const def = MOMENTS.find(m => m.key === moment)!;
  return (
    <div className={`overflow-hidden rounded-large border border-hairline bg-canvas ${className}`}>
      <div className="flex items-center gap-2 px-3.5 py-2.5" style={{ backgroundColor: def.color }}>
        <span className="text-[12px] font-medium text-black/80">{def.key}</span>
        {count ? (
          <span className="flex h-4 min-w-4 items-center justify-center rounded-full bg-white/70 px-1 text-[10px] font-semibold tabular-nums text-black/70">{count}</span>
        ) : null}
        <span className="ml-auto text-[13px] leading-none text-black/60">···</span>
      </div>
      <div className="space-y-2 p-2.5">
        {children ?? <p className="px-1 py-5 text-center text-[11px] text-ink-muted">{def.empty}</p>}
        <div className="flex items-center gap-1.5 px-1 pt-0.5">
          <Plus className="h-3.5 w-3.5 text-ink-muted" strokeWidth={2.2} />
          <span className="text-[11px] text-ink-muted">Añade una tarea</span>
        </div>
      </div>
    </div>
  );
};

/** La tarea lista para enfoque, tal como aparece en Agenda. */
const FocusReadyTask: React.FC = () => (
  <div className="rounded-medium bg-surface-1 px-3 py-2.5">
    <div className="flex items-center gap-2.5">
      <span className="h-4 w-4 shrink-0 rounded-full border-[1.5px] border-ink-muted" />
      <span className="flex-1 truncate text-[12px] font-semibold text-ink">{FOCUS_TASK}</span>
      <span className="h-1.5 w-1.5 shrink-0 rounded-full" style={{ backgroundColor: '#FFE082' }} />
    </div>
    <div className="mt-2 flex items-center gap-1.5 rounded-[8px] bg-canvas px-2.5 py-2">
      <Target className="h-3 w-3 shrink-0 text-ink-muted" strokeWidth={2} />
      <span className="text-[10px] italic text-ink-muted">Lista para enfoque · 25 min</span>
    </div>
  </div>
);

const Avatar: React.FC<{ letter: string; tone: string; size?: string; text?: string }> = ({ letter, tone, size = 'h-6 w-6', text = 'text-[9px]' }) => (
  <span className={`flex shrink-0 items-center justify-center rounded-full bg-gradient-to-br font-bold text-white ${tone} ${size} ${text}`}>{letter}</span>
);
const TONE_M = 'from-[#6a4cf5] to-[#d44df0]';
const TONE_S = 'from-[#7a2c4a] to-[#c1553f]';
const TONE_L = 'from-[#0d4f5e] to-[#33236b]';

/** Paleta de estados de ánimo del calendario de píxeles (la del artículo «Tu vida en píxeles»). */
const MOOD = {
  excelente: { label: 'Excelente', color: '#8B7FFF' },
  bien: { label: 'Bien', color: '#A8E6CF' },
  neutral: { label: 'Neutral', color: '#FFD3B6' },
  bajo: { label: 'Bajo', color: '#80D4FF' },
  mal: { label: 'Mal', color: '#FFAAA5' },
  sin: { label: 'Sin registro', color: '#E5E5E7' },
} as const;
type MoodKey = keyof typeof MOOD;

/** Ritmo de días de ejemplo, determinista, con predominio de «Bien». */
const MOOD_CYCLE: MoodKey[] = ['bien', 'bien', 'neutral', 'bien', 'excelente', 'bien', 'bajo', 'bien', 'neutral', 'bien', 'bien', 'mal', 'neutral', 'bien', 'excelente', 'bien', 'bien', 'bajo'];
const moodOf = (n: number): MoodKey => MOOD_CYCLE[(n * 7 + Math.floor(n / 5)) % MOOD_CYCLE.length];

/* ── Escenas ────────────────────────────────────────────────────────────── */

/** 20 · Llamadas: una llamada rápida en marcha, con el enlace de invitados de fondo. */
const SceneLink: React.FC = () => (
  <>
    <S x={110} y={48}>
      <Card className="flex w-[400px] flex-col items-center gap-4 p-8 text-center">
        <span className={`relative flex h-[92px] w-[92px] items-center justify-center rounded-full bg-gradient-to-br text-[26px] font-semibold text-white ${TONE_M}`}>
          ML
          <span className="absolute -bottom-1 -right-1 flex h-7 w-7 items-center justify-center rounded-full border-2 border-canvas bg-accent text-white">
            <Mic className="h-3.5 w-3.5" strokeWidth={2.4} />
          </span>
        </span>
        <div>
          <p className="text-[16px] font-semibold text-ink">Llamada rápida</p>
          <p className="mt-1 text-[12px] text-ink-muted">Sin agendar · 2 personas</p>
        </div>
        <div className="flex items-center gap-2">
          <span className="flex h-10 w-10 items-center justify-center rounded-pill bg-surface-1 text-ink"><Mic className="h-4 w-4" strokeWidth={2.1} /></span>
          <span className="flex h-10 w-10 items-center justify-center rounded-pill bg-surface-1 text-ink"><MonitorUp className="h-4 w-4" strokeWidth={2.1} /></span>
          <span className="flex h-10 items-center gap-1.5 rounded-pill bg-[#B91C1C] px-4 text-[12px] font-semibold text-white"><LogOut className="h-[14px] w-[14px]" strokeWidth={2.4} /> Salir</span>
        </div>
      </Card>
    </S>
    <S x={140} y={332}>
      <span className={`flex items-center gap-2 rounded-pill bg-ink px-4 py-2.5 text-[12px] font-semibold text-canvas ${SHADOW}`}>
        <Link2 className="h-3.5 w-3.5" strokeWidth={2.2} /> Entró con tu enlace, sin cuenta
      </span>
    </S>
  </>
);

/** 19 · Zenth hoy: los cuatro espacios. */
const SceneOverview: React.FC = () => (
  <>
    <S x={95} y={100} k={1.15}>
      <nav className="flex items-center gap-1 rounded-pill bg-surface-1 p-1">
        {[
          { label: 'Agenda', icon: Calendar, on: true },
          { label: 'Pizarras', icon: LayoutDashboard },
          { label: 'Biblioteca', icon: LibraryBig },
          { label: 'Reuniones', icon: PhoneCall },
        ].map(({ label, icon: Icon, on }) => (
          <span key={label} className={`flex items-center gap-2 rounded-pill px-4 py-2 text-[13px] ${on ? 'bg-canvas font-semibold text-ink shadow-card-resting' : 'text-ink-muted'}`}>
            <Icon className="h-4 w-4" strokeWidth={1.9} /> {label}
          </span>
        ))}
      </nav>
    </S>

    <S x={30} y={180} k={1}>
      <div className="grid w-[580px] grid-cols-3 gap-3">
        <MomentCard moment="Tarde" count={2}>
          <TaskRow title="Meet de 4Geeks" time="18:30" />
          <TaskRow title="Preparar la propuesta" time="16:00" />
        </MomentCard>

        <Card className="overflow-hidden p-3.5">
          <div className="flex h-7 items-center gap-2 text-ink">
            <span className="text-[11px] font-semibold">Alta</span>
            <span className="text-[10px] tabular-nums text-ink-muted">1</span>
            <MoreHorizontal className="ml-auto h-3.5 w-3.5 text-ink-muted" strokeWidth={2} />
          </div>
          <span className="block h-[3px] rounded-pill" style={{ backgroundColor: '#FFAB91' }} />
          <div className="mt-3 rounded-[10px] border border-hairline-soft bg-canvas px-3 py-2.5 dark:bg-surface-1">
            <div className="flex items-start gap-2">
              <span className="mt-0.5 h-4 w-4 shrink-0 rounded-full border" style={{ borderColor: '#FFAB91' }} />
              <span className="min-w-0 flex-1 self-center text-[12px] font-semibold leading-tight text-ink">Definir prioridades del sprint</span>
              <Avatar letter={CARD_ASSIGNEE[0]} tone={TONE_S} size="h-[18px] w-[18px]" text="text-[9px]" />
            </div>
          </div>
        </Card>

        <Card className="flex flex-col items-center justify-center gap-3 p-3.5 text-center">
          <span
            className="relative flex h-[76px] w-[76px] shrink-0 items-center justify-center rounded-full"
            style={{ background: 'repeating-conic-gradient(#0099ff 0deg 2.4deg, transparent 2.4deg 6deg)' }}
          >
            <span className="flex h-[64px] w-[64px] items-center justify-center rounded-full bg-canvas font-display text-[17px] font-semibold tracking-[-0.045em] text-ink">25:00</span>
          </span>
          <span>
            <span className="block text-[10px] font-semibold uppercase tracking-[0.14em] text-ink-muted">Enfoque</span>
            <span className="mt-1 block text-[12px] text-ink">Sesión de enfoque</span>
          </span>
        </Card>
      </div>
    </S>
  </>
);

/** 18 · La pizarra habla: la sala del equipo. */
const AURORA = 'radial-gradient(circle at 24% 16%, rgba(255,255,255,0.12), transparent 50%), linear-gradient(135deg, #1b1035 0%, #33236b 35%, #0c5a63 75%, #041018 100%)';
const SceneRoom: React.FC = () => (
  <>
    <S x={116} y={98}>
      <div className={`flex h-[266px] w-[460px] flex-col overflow-hidden rounded-[18px] ${SHADOW}`} style={{ backgroundImage: AURORA }}>
        <div className="flex items-start gap-3 px-4 py-3">
          <span className="min-w-0 flex-1">
            <span className="block truncate text-[15px] font-semibold text-white">Sala de Plan de lanzamiento</span>
            <span className="block text-[12px] text-white/60">Sala de voz del equipo · 00:24</span>
          </span>
          {[MoreHorizontal, Smile].map((Icon, i) => (
            <span key={i} className="demo-call-glass flex h-9 w-9 items-center justify-center rounded-pill border border-hairline text-white">
              <Icon className="h-4 w-4" strokeWidth={2.3} />
            </span>
          ))}
        </div>
        <div className="flex min-h-0 flex-1 items-stretch gap-3 px-4 pb-1">
          {[
            { name: 'Matías', tag: ' · Tú', tone: TONE_M, letters: 'ML', speaking: false },
            { name: 'Lucía', tag: '', tone: TONE_L, letters: 'LV', speaking: true },
          ].map(p => (
            <div key={p.name} className={`demo-call-tile flex min-w-0 flex-1 flex-col items-center justify-center gap-2 rounded-card border p-3 ${p.speaking ? 'border-accent' : 'border-hairline'}`}>
              <span className={`flex h-[72px] w-[72px] items-center justify-center rounded-full bg-gradient-to-br text-[18px] font-semibold text-white ${p.tone} ${p.speaking ? 'ring-2 ring-accent' : ''}`}>{p.letters}</span>
              <span className="text-[13px] text-white">{p.name}<span className="text-white/60">{p.tag}</span></span>
              <span className="flex items-center gap-1 text-[12px] text-white/60"><Mic className="h-3 w-3" strokeWidth={2.4} /> {p.speaking ? 'hablando' : 'activo'}</span>
            </div>
          ))}
        </div>
        <div className="flex items-center justify-center gap-2 px-4 py-3">
          <span className="demo-call-glass flex h-11 w-12 items-center justify-center rounded-pill border border-hairline text-white"><Mic className="h-[17px] w-[17px]" strokeWidth={2.3} /></span>
          <span className="demo-call-glass flex h-11 w-12 items-center justify-center rounded-pill border border-hairline text-white"><MonitorUp className="h-[17px] w-[17px]" strokeWidth={2.3} /></span>
          <span className="demo-call-glass flex h-11 w-11 items-center justify-center rounded-pill border border-hairline text-white"><Hand className="h-[17px] w-[17px]" strokeWidth={2.2} /></span>
          <span className="flex h-11 items-center justify-center gap-1.5 rounded-pill bg-[#B91C1C] px-4 text-[13px] font-semibold text-white"><LogOut className="h-[15px] w-[15px]" strokeWidth={2.4} /> Abandonar</span>
        </div>
      </div>
    </S>
    <S x={70} y={330}>
      <div className={`flex w-[276px] items-center gap-3 rounded-medium border border-hairline bg-canvas px-3 py-2.5 ${SHADOW}`}>
        <span className="relative flex h-10 w-10 shrink-0 items-center justify-center rounded-[14px] bg-surface-2 text-ink">
          <Sparkles className="h-[18px] w-[18px]" strokeWidth={2.2} />
          <span className="absolute -right-0.5 -top-0.5 h-2.5 w-2.5 rounded-full border-2 border-surface-1 bg-accent" />
        </span>
        <span className="min-w-0 flex-1">
          <span className="block truncate text-[14px] font-semibold text-ink">Plan de lanzamiento</span>
          <span className="block text-[12px] text-accent">1 persona en la sala</span>
        </span>
      </div>
    </S>
  </>
);

/** Columna de una pizarra (encabezado con barra de color y tarjetas). */
const BoardColumn: React.FC<{ listKey: string; className?: string; children: React.ReactNode }> = ({ listKey, className = '', children }) => {
  const list = BOARD_LISTS.find(l => l.key === listKey)!;
  return (
    <section className={className}>
      <div className="flex h-8 items-center gap-2 text-ink">
        <span className="text-[11px] font-semibold">{list.label}</span>
        <MoreHorizontal className="ml-auto h-3.5 w-3.5 text-ink-muted" strokeWidth={2} />
      </div>
      <span className="mt-1 block h-[3px] rounded-pill" style={{ backgroundColor: list.accent }} />
      <div className="mt-3 flex flex-col gap-2.5">{children}</div>
    </section>
  );
};
const BoardTask: React.FC<{ accent: string; title: string; note?: string; assigned?: boolean }> = ({ accent, title, note, assigned }) => (
  <div className="rounded-[10px] border border-hairline-soft bg-canvas px-3 py-2.5 dark:bg-surface-1">
    <div className="flex items-start gap-2">
      <span className="mt-0.5 flex h-4 w-4 shrink-0 rounded-full border" style={{ borderColor: accent }} />
      <span className="min-w-0 flex-1 self-center text-[12px] font-semibold leading-tight text-ink">{title}</span>
      {assigned && <Avatar letter={CARD_ASSIGNEE[0]} tone={TONE_S} size="h-[18px] w-[18px]" />}
      <MoreHorizontal className="h-3.5 w-3.5 shrink-0 text-ink-muted" strokeWidth={1.9} />
    </div>
    {note && (
      <div className="mt-2 flex items-start gap-1.5 pl-6">
        <AlignLeft className="mt-px h-3 w-3 shrink-0 text-ink-muted" strokeWidth={1.9} />
        <span className="text-[9px] italic leading-snug text-ink-muted">{note}</span>
      </div>
    )}
  </div>
);

/** 15 · Pizarras con miembros. */
const SceneBoard: React.FC = () => (
  <>
    <S x={64} y={70}>
      <Card className="w-[480px] p-5">
        <div className="flex items-center justify-between">
          <span className="font-display text-[22px] leading-none tracking-[-0.045em] text-ink">Plan de lanzamiento</span>
          <span className="flex items-center gap-1.5 rounded-pill bg-ink px-3 py-2 text-[11px] font-semibold text-canvas"><UserPlus className="h-3.5 w-3.5" strokeWidth={2} /> Compartir</span>
        </div>
        <div className="mt-4 flex gap-3">
          <BoardColumn listKey="porhacer" className="w-[214px] shrink-0">
            <BoardTask accent="#A5D6A7" title="Revisar la propuesta comercial" note={NEW_CARD_NOTES.n3} />
          </BoardColumn>
          <BoardColumn listKey="listo" className="w-[214px] shrink-0">
            <BoardTask accent="#FFAB91" title="Definir prioridades del sprint" assigned />
          </BoardColumn>
        </div>
      </Card>
    </S>
    <S x={326} y={168}>
      <div className={`w-[292px] rounded-[22px] border border-hairline bg-canvas p-4 ${SHADOW}`}>
        <div className="flex items-start gap-3">
          <span className="min-w-0 flex-1">
            <span className="block text-[13px] font-semibold text-ink">Responsables</span>
            <span className="block text-[10px] leading-snug text-ink-muted">Personas a cargo de completar la tarjeta</span>
          </span>
          <span className="shrink-0 rounded-pill bg-surface-2 px-3 py-1.5 text-[10px] font-semibold text-ink-muted">Tomar tarea</span>
        </div>
        <span className="mt-2.5 inline-flex items-center gap-2 rounded-medium bg-surface-1 px-2.5 py-1.5 text-[11px] font-semibold text-ink">
          <Avatar letter={CARD_ASSIGNEE[0]} tone={TONE_S} /> {CARD_ASSIGNEE}
        </span>
        <div className="mt-3 border-t border-hairline-soft pt-3">
          <p className="text-[12px] font-semibold text-ink">Asignar personas</p>
          <p className="text-[10px] text-ink-muted">Pulsa un miembro para añadirlo o quitarlo</p>
          <div className="mt-2.5 grid grid-cols-2 gap-2">
            {[{ n: 'Matías', t: TONE_M, on: false }, { n: CARD_ASSIGNEE, t: TONE_S, on: true }].map(m => (
              <span key={m.n} className={`flex items-center gap-2.5 rounded-medium px-3 py-2.5 text-[12px] font-semibold text-ink ${m.on ? 'bg-surface-2' : 'bg-surface-1'}`}>
                <Avatar letter={m.n[0]} tone={m.t} size="h-7 w-7" text="text-[10px]" />
                <span className="flex-1">{m.n}</span>
                {m.on && <Check className="h-3.5 w-3.5 text-ink-muted" strokeWidth={2.4} />}
              </span>
            ))}
          </div>
        </div>
      </div>
    </S>
  </>
);

/** 16 · Biblioteca + Google Drive. */
const NEW_MENU = ['Nota', 'Lienzo', 'Documento', 'Hoja de cálculo', 'Presentación', 'Formulario', 'Carpeta', 'Subir archivo', 'Desde Google Drive', 'Nota de voz'];
const SceneLibrary: React.FC = () => (
  <>
    <S x={82} y={94} k={1}>
      <Card className="w-[490px] p-5">
        <div className="flex items-center gap-2">
          <span className="flex h-8 min-w-0 flex-1 items-center gap-2 rounded-pill bg-surface-1 px-3 text-[11px] text-ink-muted">
            <Search className="h-3.5 w-3.5 shrink-0" strokeWidth={1.9} /> Buscar archivos, notas y carpetas…
          </span>
          <span className="flex h-8 shrink-0 items-center gap-1.5 rounded-pill bg-ink px-3 text-[11px] font-semibold text-canvas"><Plus className="h-3.5 w-3.5" strokeWidth={2.4} /> Nuevo</span>
        </div>
        <div className="mt-3 flex gap-1.5">
          {['Todo', 'Notas', 'Lienzos', 'Documentos', 'Hojas'].map((f, i) => (
            <span key={f} className={`rounded-pill px-2.5 py-1.5 text-[10px] font-semibold ${i === 0 ? 'bg-surface-2 text-ink' : 'bg-surface-1 text-ink-muted'}`}>{f}</span>
          ))}
        </div>
        <ul className="mt-3">
          {[
            { icon: FileText, tone: '#FFE082', name: 'Notas de la reunión', meta: 'Nota · Zenth' },
            { icon: PenTool, tone: '#FFB7CE', name: 'Mapa de la propuesta', meta: 'Lienzo · Zenth' },
            { icon: FileSpreadsheet, tone: '#A5D6A7', name: 'Presupuesto 2026', meta: 'Hoja de cálculo · Google Drive' },
            { icon: FileText, tone: '#81D4FA', name: 'Guion de lanzamiento', meta: 'Documento · Google Drive' },
          ].map(({ icon: Icon, tone, name, meta }) => (
            <li key={name} className="flex items-center gap-3 border-t border-hairline-soft py-2.5">
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-[10px]" style={{ backgroundColor: tone }}>
                <Icon className="h-4 w-4 text-black/70" strokeWidth={1.9} />
              </span>
              <span className="min-w-0 flex-1">
                <span className="block truncate text-[12px] font-semibold text-ink">{name}</span>
                <span className="block truncate text-[10px] text-ink-muted">{meta}</span>
              </span>
            </li>
          ))}
        </ul>
      </Card>
    </S>
    <S x={420} y={96} k={1.05}>
      <div className={`w-[190px] rounded-large border border-hairline bg-canvas p-1.5 ${SHADOW}`}>
        {NEW_MENU.map((o, i) => (
          <span key={o} className={`flex items-center rounded-medium px-2.5 py-1.5 text-[11px] text-ink ${i === 9 ? 'bg-surface-1 font-semibold' : ''}`}>{o}</span>
        ))}
      </div>
    </S>
  </>
);

/** 17 · Google Calendar dentro de Agenda. */
const SceneCalendar: React.FC = () => (
  <>
    <S x={70} y={100}>
      <Crop design={[1280, 728]} x={0} y={430} scale={0.8} w={540} h={290}>
        <TodayView {...TODAY_STATIC} viewMode="day" />
      </Crop>
    </S>
    <S x={300} y={350}>
      <span className={`flex items-center gap-2 rounded-pill border border-hairline bg-canvas px-3.5 py-2 text-[12px] font-semibold text-ink ${SHADOW}`}>
        <span className="h-2 w-2 rounded-full" style={{ backgroundColor: '#81D4FA' }} /> Importado desde Google Calendar
      </span>
    </S>
  </>
);

/** 14 · Notas: el editor de bloques. */
const BLOCK_MENU = ['Texto', 'Título grande', 'Lista', 'Lista de tareas', 'Cita', 'Bloque de código', 'Tabla', 'Imagen'];
const SceneNotes: React.FC = () => (
  <>
    <S x={80} y={58}>
      <Card className="w-[500px] p-6">
        <div className="flex items-center justify-between text-[11px] text-ink-muted">
          <span className="flex items-center gap-1.5"><span className="h-1.5 w-1.5 rounded-full bg-accent" /> Guardado</span>
          <span className="flex items-center gap-3">
            {[Bold, Italic, Underline, Strikethrough, Code, Quote].map((Icon, i) => <Icon key={i} className="h-3.5 w-3.5" strokeWidth={2} />)}
          </span>
        </div>
        <p className="mt-5 text-[26px]">💡</p>
        <p className="font-display text-[30px] font-semibold leading-tight tracking-[-0.045em] text-ink">Ideas para el lanzamiento</p>
        <div className="mt-4 space-y-2.5">
          <p className="text-[13px] leading-relaxed text-ink-muted">Alinear alcance, dueños y fechas del sprint.</p>
          <div className="flex items-center gap-2.5"><span className="h-4 w-4 rounded-[5px] border-[1.5px] border-ink-muted" /><span className="text-[13px] text-ink">Revisar precios y condiciones</span></div>
          <div className="flex items-center gap-2.5"><span className="flex h-4 w-4 items-center justify-center rounded-[5px] bg-ink"><Check className="h-3 w-3 text-canvas" strokeWidth={3.4} /></span><span className="text-[13px] text-ink-muted line-through">Definir prioridades</span></div>
          <p className="text-[13px] text-ink-muted">/<span className="ml-px inline-block h-3.5 w-px translate-y-0.5 bg-accent" /></p>
        </div>
      </Card>
    </S>
    <S x={352} y={158}>
      <div className={`w-[214px] rounded-large border border-hairline bg-canvas p-1.5 ${SHADOW}`}>
        {BLOCK_MENU.map((b, i) => (
          <span key={b} className={`flex items-center rounded-medium px-2.5 py-1.5 text-[12px] text-ink ${i === 3 ? 'bg-surface-1 font-semibold' : ''}`}>{b}</span>
        ))}
      </div>
    </S>
  </>
);

/** Progreso del día (columna izquierda de Agenda). */
const DayProgress: React.FC<{ className?: string }> = ({ className = '' }) => (
  <div className={className}>
    <div className="flex items-center gap-1.5">
      <Sparkles className="h-3.5 w-3.5 text-accent" strokeWidth={1.9} />
      <span className="text-[12px] font-semibold text-ink">Progreso del día</span>
    </div>
    <div className="mt-2 flex items-baseline justify-between">
      <span className="text-[11px] tabular-nums text-ink-muted">1 de 2 tareas</span>
      <span className="text-[11px] font-semibold tabular-nums text-ink">50%</span>
    </div>
    <div className="mt-1.5 h-[5px] overflow-hidden rounded-pill bg-surface-2"><div className="h-full w-1/2 rounded-pill bg-accent" /></div>
  </div>
);

const QuickCapture: React.FC<{ typed?: string }> = ({ typed }) => (
  <div>
    <div className="flex items-center gap-1.5">
      <Plus className="h-3.5 w-3.5 text-ink-muted" strokeWidth={2.2} />
      <span className="text-[10px] font-semibold uppercase tracking-[0.14em] text-ink-muted">Captura rápida</span>
    </div>
    <div className="mt-2 flex items-center gap-2 rounded-medium bg-surface-1 p-1.5 pl-3" style={typed ? { boxShadow: '0 0 0 1px rgba(0,153,255,0.45)' } : undefined}>
      <span className="flex min-w-0 flex-1 items-center text-[12px] text-ink">
        {typed ?? <span className="text-ink-muted">Añadir una tarea…</span>}
        {typed && <span className="ml-px inline-block h-3.5 w-px bg-accent" />}
      </span>
      <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-[8px] bg-accent text-white"><Plus className="h-4 w-4" strokeWidth={2.6} /></span>
    </div>
    <p className="mt-1.5 text-[10px] text-ink-muted">Se agenda automáticamente en el momento adecuado.</p>
  </div>
);

/** 1 · Libérate del caos: captura y momentos del día. */
const SceneToday: React.FC = () => (
  <>
    <S x={40} y={34} k={1.12}>
      <Card className="w-[262px] space-y-5 p-4">
        <DayProgress />
        <div>
          <div className="flex items-center gap-1.5"><span className="text-[10px] font-semibold uppercase tracking-[0.14em] text-ink-muted">Próximo</span></div>
          <div className="mt-2 flex items-center gap-2 rounded-medium bg-surface-1 px-3 py-2.5">
            <span className="h-2 w-2 shrink-0 rounded-full bg-accent" />
            <span className="min-w-0 flex-1">
              <span className="block truncate text-[12px] font-semibold text-ink">Meet de 4Geeks</span>
              <span className="mt-0.5 block text-[10px] text-ink-muted">6:30 PM · 30m · Tarde</span>
            </span>
          </div>
        </div>
        <QuickCapture typed="Preparar la propuesta" />
      </Card>
    </S>
    <S x={352} y={26} k={1.04}>
      <div className="w-[262px] space-y-3">
        <MomentCard moment="Mañana" count={1}><FocusReadyTask /></MomentCard>
        <MomentCard moment="Tarde" count={2}>
          <TaskRow title="Meet de 4Geeks" time="18:30" />
          <TaskRow title="Preparar la propuesta" time="16:00" />
        </MomentCard>
      </div>
    </S>
  </>
);

/** 2 · Las 20 constelaciones. */
const LEVEL_ROWS = [
  { label: 'XP', now: 3550, need: 6000, unit: '' },
  { label: 'Mejor racha', now: 30, need: 50, unit: ' días' },
  { label: 'Tareas', now: 138, need: 200, unit: '' },
  { label: 'Enfoque', now: 720, need: 1500, unit: ' min' },
];
const fmt = (n: number) => n.toLocaleString('es-ES');

/** Puntos de una constelación simplificada de Cisne (Cygnus), dibujada a mano sobre el lienzo 640×400. */
const CYGNUS_STARS = [
  { id: 'head', x: 452, y: 62, r: 4.5, lit: true },
  { id: 'neck', x: 410, y: 122, r: 4, lit: true },
  { id: 'hub', x: 378, y: 184, r: 6.5, lit: true },
  { id: 'wingL', x: 262, y: 158, r: 4, lit: true },
  { id: 'wingR', x: 486, y: 226, r: 4, lit: false },
  { id: 'tail', x: 320, y: 300, r: 4, lit: false },
] as const;
const CYGNUS_LINES: [string, string][] = [
  ['head', 'neck'], ['neck', 'hub'], ['hub', 'wingL'], ['hub', 'wingR'], ['hub', 'tail'],
];
const BG_STARS = [
  [58, 54], [118, 226], [566, 54], [598, 318], [70, 336], [498, 34], [156, 84], [548, 200],
  [34, 176], [614, 146], [224, 36], [352, 44], [486, 344], [140, 338], [606, 258], [24, 96],
].map(([x, y], i) => ({ x, y, r: i % 3 === 0 ? 2 : 1.2 }));

/** 2 · Las 20 constelaciones: el nivel dibujado como constelación real, no como tarjeta. */
const SceneLevels: React.FC = () => {
  const stars = Object.fromEntries(CYGNUS_STARS.map(s => [s.id, s]));
  return (
    <>
      <svg viewBox={`0 0 ${COVER_W} ${COVER_H}`} className="absolute inset-0 h-full w-full" aria-hidden="true">
        {BG_STARS.map((s, i) => (
          <circle key={i} cx={s.x} cy={s.y} r={s.r} fill="#ffffff" opacity={0.4} />
        ))}
        {CYGNUS_LINES.map(([a, b], i) => {
          const A = stars[a], B = stars[b];
          return <line key={i} x1={A.x} y1={A.y} x2={B.x} y2={B.y} stroke="#ffffff" strokeWidth={1.6} opacity={0.45} />;
        })}
        {CYGNUS_STARS.map(s => (
          <circle
            key={s.id} cx={s.x} cy={s.y} r={s.lit ? s.r : s.r * 0.65}
            fill={s.lit ? '#ffffff' : 'rgba(255,255,255,0.4)'}
            style={s.lit ? { filter: 'drop-shadow(0 0 7px rgba(255,255,255,0.95))' } : undefined}
          />
        ))}
      </svg>
      <S x={36} y={302}>
        <div className={`flex items-center gap-3 rounded-large border border-hairline bg-canvas px-4 py-3 ${SHADOW}`}>
          <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-grad-violet to-grad-magenta text-white">
            <Sparkles className="h-4 w-4" strokeWidth={2} />
          </span>
          <div>
            <p className="text-[13px] font-semibold text-ink">Nivel 5 · Cisne</p>
            <p className="text-[11px] tabular-nums text-ink-muted">{fmt(LEVEL_ROWS[0].now)} XP · Racha 12</p>
          </div>
        </div>
      </S>
      <S x={430} y={302}>
        <div className={`rounded-large border border-hairline bg-canvas px-4 py-3 text-right ${SHADOW}`}>
          <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-ink-muted">Siguiente</p>
          <p className="mt-1 text-[13px] font-semibold text-ink">Osa Menor</p>
        </div>
      </S>
    </>
  );
};

/** 3 · Tu vida en píxeles: calendario de ánimo y año en píxeles. */
const SceneMoodPixels: React.FC = () => (
  <>
    <S x={30} y={34} k={1.04}>
      <Card className="w-[262px] p-4">
        <div className="flex items-center justify-between">
          <span className="text-[13px] font-semibold text-ink">Calendario de ánimo</span>
          <span className="text-[11px] text-ink-muted">Julio</span>
        </div>
        <div className="mt-3 grid grid-cols-7 gap-1.5">
          {['L', 'M', 'X', 'J', 'V', 'S', 'D'].map(d => <span key={d} className="text-center text-[9px] text-ink-muted">{d}</span>)}
          {Array.from({ length: 35 }, (_, i) => {
            const day = i - 1;
            const off = day < 1 || day > 31;
            return (
              <span
                key={i}
                className="mx-auto h-[26px] w-[26px] rounded-full"
                style={{ backgroundColor: off ? 'transparent' : day > 29 ? MOOD.sin.color : MOOD[moodOf(day)].color, opacity: off ? 0 : 1 }}
              />
            );
          })}
        </div>
      </Card>
    </S>
    <S x={322} y={34} k={1.02}>
      <Card className="w-[296px] p-4">
        <span className="text-[13px] font-semibold text-ink">Año en píxeles</span>
        <div className="mt-3 space-y-[3px]">
          {Array.from({ length: 12 }, (_, m) => (
            <div key={m} className="flex gap-[3px]">
              {Array.from({ length: 31 }, (_, d) => {
                const valid = d < [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31][m];
                return <span key={d} className="h-[6px] w-[6px] rounded-full" style={{ backgroundColor: valid ? MOOD[moodOf(m * 31 + d + 3)].color : 'transparent' }} />;
              })}
            </div>
          ))}
        </div>
      </Card>
    </S>
    <S x={322} y={250} k={1.02}>
      <Card className="w-[296px] p-4">
        <div className="flex flex-wrap gap-x-4 gap-y-2">
          {(['excelente', 'bien', 'neutral', 'bajo', 'mal'] as MoodKey[]).map(k => (
            <span key={k} className="flex items-center gap-1.5 text-[11px] text-ink">
              <span className="h-2.5 w-2.5 rounded-full" style={{ backgroundColor: MOOD[k].color }} /> {MOOD[k].label}
            </span>
          ))}
        </div>
      </Card>
    </S>
  </>
);

/** 4 · Productividad humana: registrar cómo estás. */
const SceneCheckin: React.FC = () => (
  <S x={92} y={70}>
    <Card className="w-[456px] p-7">
      <p className="font-display text-[26px] font-semibold leading-none tracking-[-0.045em] text-ink">Actividad y ánimo</p>
      <p className="mt-2 text-[12px] text-ink-muted">Tu pulso del mes: lo que hiciste y cómo te sentiste</p>
      <div className="mt-7 flex items-start justify-between">
        {(['excelente', 'bien', 'neutral', 'bajo', 'mal'] as MoodKey[]).map(k => {
          const on = k === 'bien';
          return (
            <span key={k} className="flex flex-col items-center gap-2">
              <span
                className={`flex h-[62px] w-[62px] items-center justify-center rounded-full ${on ? 'ring-2 ring-ink ring-offset-2 ring-offset-canvas' : ''}`}
                style={{ backgroundColor: MOOD[k].color }}
              >
                {on && <Check className="h-6 w-6 text-black/70" strokeWidth={2.6} />}
              </span>
              <span className={`text-[12px] ${on ? 'font-semibold text-ink' : 'text-ink-muted'}`}>{MOOD[k].label}</span>
            </span>
          );
        })}
      </div>
    </Card>
  </S>
);

/** 5 · La «Gran meta»: 50 XP. */
const SceneGoal: React.FC = () => (
  <S x={92} y={42} k={1.08}>
    <Card className="w-[432px] p-6">
      <div className="flex items-center justify-between">
        <span className="text-[13px] text-ink-muted">Agenda · Mañana</span>
        <span className="flex items-center gap-1.5 rounded-pill bg-surface-2 px-3 py-1.5 text-[11px] font-semibold text-ink"><Flame className="h-3.5 w-3.5" strokeWidth={2} /> Racha 12</span>
      </div>
      <div className="mt-5 flex items-center gap-3 rounded-large bg-surface-1 p-4">
        <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full border-accent bg-accent"><Check className="h-3.5 w-3.5 text-white" strokeWidth={3} /></span>
        <span className="min-w-0 flex-1">
          <span className="block truncate text-[14px] text-ink-muted line-through">Lanzar la nueva versión</span>
          <span className="mt-1 flex items-center gap-1.5 text-[11px] text-ink-muted"><Target className="h-3 w-3" strokeWidth={2} /> Gran meta</span>
        </span>
        <span className="shrink-0 text-[13px] font-semibold text-accent">+50 XP</span>
      </div>
      <div className="mt-2 flex items-center gap-3 rounded-large bg-surface-1 p-4 opacity-50">
        <span className="h-6 w-6 shrink-0 rounded-full border border-hairline" />
        <span className="min-w-0 flex-1">
          <span className="block truncate text-[14px] text-ink">Sesión de enfoque</span>
          <span className="mt-1 flex items-center gap-1.5 text-[11px] text-ink-muted"><Timer className="h-3 w-3" strokeWidth={2} /> 45 min</span>
        </span>
      </div>
      <div className="mt-5 flex items-center justify-between border-t border-hairline-soft pt-4 text-[11px] text-ink-muted">
        <span>Nivel 5 · Cisne</span>
        <span className="tabular-nums">3 550 XP</span>
      </div>
    </Card>
  </S>
);

/** 6 · Fatiga de decisión: momentos en vez de horas exactas. */
const SceneMoments: React.FC = () => (
  <S x={28} y={52} k={1.02}>
    <div className="flex w-[590px] items-start gap-3">
      <MomentCard moment="Mañana" count={1} className="w-[190px] shrink-0"><FocusReadyTask /></MomentCard>
      <MomentCard moment="Tarde" count={2} className="w-[190px] shrink-0">
        <TaskRow title="Meet de 4Geeks" time="18:30" />
        <TaskRow title="Preparar la propuesta" time="16:00" />
      </MomentCard>
      <MomentCard moment="Noche" className="w-[190px] shrink-0" />
    </div>
  </S>
);

/** 7 · Cerebro TDAH: de una tarea a una sesión corta. */
const SceneAdhd: React.FC = () => (
  <>
    <S x={30} y={130} k={1.05}>
      <div className={`w-[280px] rounded-large border border-hairline bg-canvas p-3 ${SHADOW}`}><FocusReadyTask /></div>
    </S>
    <S x={318} y={14} k={0.98}>
      <FocusView elapsed={0} />
    </S>
  </>
);

/** 8 · Cambiar de contexto: el temporizador te sigue por la barra. */
const SceneContext: React.FC = () => (
  <>
    <S x={22} y={150} k={1}>
      <div className="w-[250px] space-y-3 opacity-60">
        <MomentCard moment="Tarde" count={2}>
          <TaskRow title="Meet de 4Geeks" time="18:30" />
          <TaskRow title="Preparar la propuesta" time="16:00" />
        </MomentCard>
      </div>
    </S>
    <S x={24} y={64}>
      <div className="flex w-[592px] items-center justify-between">
        <nav className="flex items-center gap-1 rounded-pill bg-surface-1 p-1">
          {[{ l: 'Agenda', i: Calendar, on: true }, { l: 'Pizarras', i: LayoutDashboard }, { l: 'Biblioteca', i: LibraryBig }].map(({ l, i: Icon, on }) => (
            <span key={l} className={`flex items-center gap-2 rounded-pill px-3.5 py-2 text-[12px] ${on ? 'bg-canvas font-semibold text-ink shadow-card-resting' : 'text-ink-muted'}`}>
              <Icon className="h-3.5 w-3.5" strokeWidth={1.9} /> {l}
            </span>
          ))}
        </nav>
        <div className="flex items-center gap-1 rounded-pill bg-surface-1 p-1">
          <span className="flex h-9 items-center justify-center gap-1.5 rounded-pill px-2.5 text-accent">
            <Timer className="h-4 w-4" strokeWidth={2.2} /><span className="text-[13px] font-semibold tabular-nums">23:30</span>
          </span>
          <span className="relative flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br from-grad-violet to-grad-magenta text-[12px] font-semibold text-white">M</span>
        </div>
      </div>
    </S>
    <S x={312} y={46} k={0.72}>
      <FocusView elapsed={FOCUS_RUNNING_AT + 90000} />
    </S>
  </>
);

/** 9 · Minimalismo digital: casi nada en pantalla — el espacio vacío es la idea. */
const SceneMinimal: React.FC = () => (
  <S x={190} y={158} k={1.3}>
    <div className="flex w-[260px] flex-col items-center gap-5 text-center">
      <div className="flex w-full items-center gap-2 rounded-medium bg-surface-1 p-1.5 pl-3 shadow-soft-lift">
        <span className="flex-1 text-left text-[12px] text-ink-muted">Añadir una tarea…</span>
        <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-[8px] bg-accent text-white"><Plus className="h-4 w-4" strokeWidth={2.6} /></span>
      </div>
      <p className="text-[11px] italic text-ink-muted">Una tarea a la vez. Nada más en pantalla.</p>
    </div>
  </S>
);

/** 10 · Nombrar para observar: el balance mensual como una rueda de color, no una barra escondida en una tarjeta. */
const SceneBalance: React.FC = () => {
  const dist: { k: MoodKey; n: number }[] = [
    { k: 'excelente', n: 3 }, { k: 'bien', n: 9 }, { k: 'neutral', n: 4 }, { k: 'bajo', n: 2 }, { k: 'mal', n: 1 },
  ];
  const total = dist.reduce((s, d) => s + d.n, 0);
  let acc = 0;
  const conic = dist
    .map(d => {
      const from = (acc / total) * 360;
      acc += d.n;
      const to = (acc / total) * 360;
      return `${MOOD[d.k].color} ${from}deg ${to}deg`;
    })
    .join(', ');
  return (
    <>
      <S x={64} y={70}>
        <div className="relative flex h-[260px] w-[260px] items-center justify-center rounded-full" style={{ backgroundImage: `conic-gradient(${conic})` }}>
          <div className="flex h-[178px] w-[178px] flex-col items-center justify-center rounded-full bg-canvas text-center">
            <span className="text-[11px] text-ink-muted">Predominante</span>
            <span className="mt-1 font-display text-[24px] font-semibold leading-none tracking-[-0.045em] text-ink">Bien</span>
            <span className="mt-2 text-[11px] tabular-nums text-ink-muted">{total} días registrados</span>
          </div>
        </div>
      </S>
      <S x={372} y={124}>
        <div className="flex flex-col gap-2.5">
          {dist.map(d => (
            <span key={d.k} className="flex items-center gap-2 text-[13px] font-semibold text-ink">
              <span className="h-2.5 w-2.5 shrink-0 rounded-full" style={{ backgroundColor: MOOD[d.k].color }} /> {MOOD[d.k].label} <span className="tabular-nums text-ink-muted">{d.n}</span>
            </span>
          ))}
        </div>
      </S>
    </>
  );
};

/** 11 · Estado de flujo: ondas concéntricas detrás del selector (no el timer en marcha, ya usado en 7 y 8). */
const SceneFlow: React.FC = () => (
  <>
    <S x={190} y={20}>
      <div className="relative h-[360px] w-[360px]">
        {[360, 260, 170].map((size, i) => (
          <span
            key={size}
            className="absolute left-1/2 top-1/2 rounded-full border border-accent"
            style={{ height: size, width: size, transform: 'translate(-50%, -50%)', opacity: 0.1 + i * 0.06 }}
          />
        ))}
      </div>
    </S>
    <S x={132} y={84} k={1.32}>
      <div className="w-[360px] overflow-hidden" style={{ height: 180 }}>
        <div style={{ marginTop: -258 }}>
          <FocusView elapsed={0} />
        </div>
      </div>
    </S>
  </>
);

/** 12 · Hábitos visibles: la repetición a la vista en la semana. */
const SceneHabits: React.FC = () => (
  <S x={48} y={48}>
    <Crop design={[1280, 728]} x={272} y={70} scale={0.6} w={572} h={320}>
      <TodayView {...TODAY_STATIC} viewMode="week" />
    </Crop>
  </S>
);

/** 13 · Zen: «Pedir a Zen» en el editor de tareas. */
const SceneZen: React.FC = () => (
  <S x={150} y={-4} k={0.74}>
    <div className={`h-[640px] w-[430px] overflow-hidden rounded-large border border-hairline bg-canvas ${SHADOW}`}>
      <CreatePanel
        typed="Cena con Ana el viernes a las 9pm"
        isTyping={false}
        isSubmitting={false}
        listLabel="Baja"
        fillProgress={1}
      />
    </div>
  </S>
);

/* ── Catálogo ───────────────────────────────────────────────────────────── */

export interface CoverScene {
  Scene: React.FC;
  /** Los dos extremos del degradado de fondo. */
  tones: [string, string];
}

/** Una escena por artículo, por id. */
export const COVER_SCENES: Record<string, CoverScene> = {
  '20': { Scene: SceneLink, tones: ['#90CAF9', '#B39DDB'] },
  '19': { Scene: SceneOverview, tones: ['#B39DDB', '#81D4FA'] },
  '18': { Scene: SceneRoom, tones: ['#80CBC4', '#B39DDB'] },
  '15': { Scene: SceneBoard, tones: ['#B39DDB', '#F8BBD0'] },
  '16': { Scene: SceneLibrary, tones: ['#81D4FA', '#A5D6A7'] },
  '17': { Scene: SceneCalendar, tones: ['#FFE082', '#FFAB91'] },
  '14': { Scene: SceneNotes, tones: ['#E6EE9C', '#A5D6A7'] },
  '1': { Scene: SceneToday, tones: ['#FFE082', '#FFB7CE'] },
  '2': { Scene: SceneLevels, tones: ['#CE93D8', '#9FA8DA'] },
  '3': { Scene: SceneMoodPixels, tones: ['#B9B2FF', '#A8E6CF'] },
  '4': { Scene: SceneCheckin, tones: ['#FFD3B6', '#FFAAA5'] },
  '5': { Scene: SceneGoal, tones: ['#FFAB91', '#FFE082'] },
  '6': { Scene: SceneMoments, tones: ['#81D4FA', '#FFE082'] },
  '7': { Scene: SceneAdhd, tones: ['#FFAB91', '#CE93D8'] },
  '8': { Scene: SceneContext, tones: ['#80CBC4', '#81D4FA'] },
  '9': { Scene: SceneMinimal, tones: ['#CFD8DC', '#E1BEE7'] },
  '10': { Scene: SceneBalance, tones: ['#A8E6CF', '#80D4FF'] },
  '11': { Scene: SceneFlow, tones: ['#80D4FF', '#B9B2FF'] },
  '12': { Scene: SceneHabits, tones: ['#FFE082', '#A5D6A7'] },
  '13': { Scene: SceneZen, tones: ['#B39DDB', '#81D4FA'] },
};
