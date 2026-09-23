import React from 'react';
import {
  AlignLeft, BookOpen, Check, ChevronDown, Clock, FileSpreadsheet, FileText, GripVertical,
  HardDrive, LayoutGrid, Layers, List, MoreHorizontal, PenTool, Plus, Search, Star, Trash2, UserPlus, Users,
} from 'lucide-react';
import { TodayView } from './demo/TodayView';
import { FocusView } from './demo/FocusView';
import { BOARD_LISTS, CARD_ASSIGNEE, NEW_CARD_NOTES } from './demo/timeline';

/**
 * «Capturas» de la portada de funciones. No son imágenes: son la interfaz de
 * Zenth dibujada en código. Agenda, Enfoque y el detalle de una tarjeta usan los
 * mismos componentes que la demo del hero; el tablero y Biblioteca replican sus
 * clases con etiquetas que existen en la app (ver la documentación).
 */

/** La pantalla que asoma dentro de una tarjeta: esquinas de arriba redondeadas, recortada por abajo. */
const Pane: React.FC<{ className?: string; children: React.ReactNode }> = ({ className = '', children }) => (
  <div
    className={`overflow-hidden rounded-t-[20px] border border-b-0 border-hairline bg-canvas shadow-[0_16px_48px_-16px_rgba(0,0,0,0.35)] ${className}`}
  >
    {children}
  </div>
);

/* ── Pizarras compartidas ───────────────────────────────────────────────── */

const BOARD_COLUMNS = [
  { key: 'porhacer', cards: [{ title: 'Revisar la propuesta comercial', note: NEW_CARD_NOTES.n3 }] },
  { key: 'listo', cards: [{ title: 'Definir prioridades del sprint', assigned: true }] },
  { key: 'encurso', cards: [{ title: 'Cerrar la landing' }, { title: 'Preparar materiales de la reunión' }] },
] as const;

type BoardCardData = { title: string; note?: string; assigned?: boolean };

const BoardCard: React.FC<{ card: BoardCardData; accent: string }> = ({ card, accent }) => (
  <div className="rounded-[10px] border border-hairline-soft bg-canvas px-3 py-2.5 dark:bg-surface-1">
    <div className="flex items-start gap-2">
      <span className="mt-0.5 flex h-4 w-4 shrink-0 rounded-full border" style={{ borderColor: accent }} />
      <span className="min-w-0 flex-1 self-center text-[12px] font-semibold leading-tight text-ink">{card.title}</span>
      {card.assigned && (
        <span className="flex h-[18px] w-[18px] shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-[#7a2c4a] to-[#c1553f] text-[9px] font-bold text-white">
          {CARD_ASSIGNEE[0]}
        </span>
      )}
      <MoreHorizontal className="h-3.5 w-3.5 shrink-0 text-ink-muted" strokeWidth={1.9} />
    </div>
    {card.note && (
      <div className="mt-2 flex items-start gap-1.5 pl-6">
        <AlignLeft className="mt-px h-3 w-3 shrink-0 text-ink-muted" strokeWidth={1.9} />
        <span className="text-[9px] italic leading-snug text-ink-muted">{card.note}</span>
      </div>
    )}
  </div>
);

/** Un miembro del panel «Asignar personas». */
const Member: React.FC<{ name: string; tone: string; selected?: boolean }> = ({ name, tone, selected = false }) => (
  <span className={`flex items-center gap-2.5 rounded-medium px-3 py-2.5 text-[12px] font-semibold text-ink ${selected ? 'bg-surface-2' : 'bg-surface-1'}`}>
    <span className={`flex h-7 w-7 items-center justify-center rounded-full bg-gradient-to-br text-[10px] font-bold text-white ${tone}`}>{name[0]}</span>
    <span className="flex-1">{name}</span>
    {selected && <Check className="h-3.5 w-3.5 text-ink-muted" strokeWidth={2.4} />}
  </span>
);

/** «Responsables» y «Asignar personas» del detalle de una tarjeta: mismos textos que la app, con aire. */
const AssignCard: React.FC = () => (
  <div className="pointer-events-none absolute right-5 top-[196px] hidden w-[292px] rounded-[22px] border border-hairline bg-canvas p-4 shadow-soft-lift transition-transform duration-500 group-hover:-translate-y-2 sm:block">
    <div className="flex items-start gap-3">
      <span className="min-w-0 flex-1">
        <span className="block text-[13px] font-semibold text-ink">Responsables</span>
        <span className="block text-[10px] leading-snug text-ink-muted">Personas a cargo de completar la tarjeta</span>
      </span>
      <span className="shrink-0 rounded-pill bg-surface-2 px-3 py-1.5 text-[10px] font-semibold text-ink-muted">Tomar tarea</span>
    </div>
    <span className="mt-2.5 inline-flex items-center gap-2 rounded-medium bg-surface-1 px-2.5 py-1.5 text-[11px] font-semibold text-ink">
      <span className="flex h-6 w-6 items-center justify-center rounded-full bg-gradient-to-br from-[#7a2c4a] to-[#c1553f] text-[9px] font-bold text-white">{CARD_ASSIGNEE[0]}</span>
      {CARD_ASSIGNEE}
    </span>

    <div className="mt-3 border-t border-hairline-soft pt-3">
      <p className="text-[12px] font-semibold text-ink">Asignar personas</p>
      <p className="text-[10px] text-ink-muted">Pulsa un miembro para añadirlo o quitarlo</p>
      <div className="mt-2.5 grid grid-cols-2 gap-2">
        <Member name="Matías" tone="from-[#6a4cf5] to-[#d44df0]" />
        <Member name={CARD_ASSIGNEE} tone="from-[#7a2c4a] to-[#c1553f]" selected />
      </div>
    </div>
  </div>
);

export const BoardShot: React.FC = () => (
  <div aria-hidden="true" className="relative h-[320px] overflow-hidden px-3 sm:h-[440px] sm:px-6">
    <Pane className="min-h-[480px] transition-transform duration-500 group-hover:-translate-y-2">
      <div className="p-4 sm:p-5">
        <div className="flex items-center justify-between">
          <div className="flex min-w-0 items-center gap-2">
            <span className="truncate font-display text-[20px] leading-none tracking-[-0.045em] text-ink sm:text-[22px]">Plan de lanzamiento</span>
            <BookOpen className="hidden h-4 w-4 shrink-0 text-ink-muted sm:block" strokeWidth={1.9} />
            <ChevronDown className="hidden h-4 w-4 shrink-0 text-ink-muted sm:block" strokeWidth={1.9} />
          </div>
          <div className="ml-3 flex items-center gap-1.5">
            <span className="flex items-center gap-1.5 rounded-pill bg-ink px-3 py-2 text-[11px] font-semibold text-canvas">
              <UserPlus className="h-3.5 w-3.5" strokeWidth={2} /> Compartir
            </span>
          </div>
        </div>

        <div className="mt-5 flex gap-3">
          {BOARD_COLUMNS.map(({ key, cards }) => {
            const list = BOARD_LISTS.find(l => l.key === key)!;
            return (
              <section key={key} className="w-[196px] shrink-0">
                <header>
                  <div className="flex h-8 items-center gap-2 text-ink">
                    <GripVertical className="h-3.5 w-3.5 text-ink-muted" strokeWidth={2.1} />
                    <span className="text-[11px] font-semibold">{list.label}</span>
                    <span className="text-[10px] tabular-nums text-ink-muted">{cards.length}</span>
                    <MoreHorizontal className="ml-auto h-3.5 w-3.5 text-ink-muted" strokeWidth={2} />
                  </div>
                  <span className="mt-1 block h-[3px] rounded-pill" style={{ backgroundColor: list.accent }} />
                </header>
                <div className="mt-3 flex flex-col gap-2.5">
                  {cards.map(card => <BoardCard key={card.title} card={card} accent={list.accent} />)}
                  <span className="flex items-center gap-1.5 px-2 py-1 text-[10px] text-ink-muted">
                    <Plus className="h-3.5 w-3.5" strokeWidth={2.2} /> Añade una tarea
                  </span>
                </div>
              </section>
            );
          })}
        </div>
      </div>
    </Pane>

    {/* Asignación de personas de una tarjeta (sección Equipo), a tamaño real. */}
    <AssignCard />
  </div>
);

/* ── Biblioteca + Google Drive ──────────────────────────────────────────── */

const LIBRARY_PLACES = [
  { icon: Layers, label: 'Resumen', active: true },
  { icon: FileText, label: 'Archivos Zenth' },
  { icon: Users, label: 'Compartidos conmigo' },
  { icon: Clock, label: 'Recientes' },
  { icon: Trash2, label: 'Papelera' },
];

const LIBRARY_DRIVE = [
  { icon: HardDrive, label: 'Mi unidad' },
  { icon: Star, label: 'Destacados' },
];

const LIBRARY_FILTERS = ['Todo', 'Notas', 'Lienzos', 'Documentos', 'Hojas'];

const LIBRARY_ROWS = [
  { icon: FileText, tone: '#FFE082', name: 'Notas de la reunión', meta: 'Nota · Zenth' },
  { icon: PenTool, tone: '#FFB7CE', name: 'Mapa de la propuesta', meta: 'Lienzo · Zenth' },
  { icon: FileSpreadsheet, tone: '#A5D6A7', name: 'Presupuesto 2026', meta: 'Hoja de cálculo · Google Drive' },
  { icon: FileText, tone: '#81D4FA', name: 'Guion de lanzamiento', meta: 'Documento · Google Drive' },
  { icon: FileText, tone: '#FFE082', name: 'Brief de marca', meta: 'Nota · Zenth' },
];

/** Las opciones reales del botón «Nuevo». */
const NEW_MENU = [
  'Nota', 'Lienzo', 'Documento', 'Hoja de cálculo', 'Presentación', 'Formulario',
  'Carpeta', 'Subir archivo', 'Desde Google Drive', 'Nota de voz',
];

export const LibraryShot: React.FC = () => (
  <div aria-hidden="true" className="relative h-[320px] overflow-hidden px-3 sm:h-[440px] sm:px-6">
    <Pane className="flex min-h-[480px] transition-transform duration-500 group-hover:-translate-y-2">
      <div className="hidden w-[150px] shrink-0 border-r border-hairline-soft p-3 sm:block lg:hidden">
        <ul className="space-y-0.5">
          {LIBRARY_PLACES.map(({ icon: Icon, label, active }) => (
            <li
              key={label}
              className={`flex items-center gap-2 rounded-medium px-2 py-1.5 text-[11px] ${active ? 'bg-surface-1 font-semibold text-ink' : 'text-ink-muted'}`}
            >
              <Icon className="h-3.5 w-3.5 shrink-0" strokeWidth={1.9} />
              <span className="truncate">{label}</span>
            </li>
          ))}
        </ul>
        <p className="mt-4 px-2 text-[9px] font-semibold uppercase tracking-[0.14em] text-ink-muted">Google Drive</p>
        <ul className="mt-1.5 space-y-0.5">
          {LIBRARY_DRIVE.map(({ icon: Icon, label }) => (
            <li key={label} className="flex items-center gap-2 rounded-medium px-2 py-1.5 text-[11px] text-ink-muted">
              <Icon className="h-3.5 w-3.5 shrink-0" strokeWidth={1.9} />
              <span className="truncate">{label}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="min-w-0 flex-1 p-4 sm:p-5">
        <div className="flex items-center gap-2">
          <span className="flex h-8 min-w-0 flex-1 items-center gap-2 rounded-pill bg-surface-1 px-3 text-[11px] text-ink-muted">
            <Search className="h-3.5 w-3.5 shrink-0" strokeWidth={1.9} />
            <span className="truncate">Buscar archivos, notas y carpetas…</span>
          </span>
          <span className="hidden h-8 items-center gap-0.5 rounded-pill bg-surface-1 p-1 text-ink-muted md:flex">
            <span className="flex h-6 w-6 items-center justify-center rounded-full text-ink-muted"><LayoutGrid className="h-3 w-3" strokeWidth={2} /></span>
            <span className="flex h-6 w-6 items-center justify-center rounded-full bg-canvas text-ink"><List className="h-3 w-3" strokeWidth={2} /></span>
          </span>
          <span className="flex h-8 shrink-0 items-center gap-1.5 rounded-pill bg-ink px-3 text-[11px] font-semibold text-canvas">
            <Plus className="h-3.5 w-3.5" strokeWidth={2.4} /> Nuevo
          </span>
        </div>

        <div className="mt-3 flex flex-wrap gap-1.5">
          {LIBRARY_FILTERS.map((filter, i) => (
            <span
              key={filter}
              className={`rounded-pill px-2.5 py-1.5 text-[10px] font-semibold ${i === 0 ? 'bg-surface-2 text-ink' : 'bg-surface-1 text-ink-muted'}`}
            >
              {filter}
            </span>
          ))}
        </div>

        <ul className="mt-3">
          {LIBRARY_ROWS.map(({ icon: Icon, tone, name, meta }) => (
            <li key={name} className="flex items-center gap-3 border-t border-hairline-soft py-2.5">
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-[10px]" style={{ backgroundColor: tone }}>
                <Icon className="h-4 w-4 text-black/70" strokeWidth={1.9} />
              </span>
              <span className="min-w-0 flex-1">
                <span className="block truncate text-[12px] font-semibold text-ink">{name}</span>
                <span className="block truncate text-[10px] text-ink-muted">{meta}</span>
              </span>
              <MoreHorizontal className="h-3.5 w-3.5 shrink-0 text-ink-muted" strokeWidth={1.9} />
            </li>
          ))}
        </ul>
      </div>
    </Pane>

    {/* El menú «Nuevo», con todas sus opciones. */}
    <div className="pointer-events-none absolute right-6 top-[68px] hidden w-[190px] rounded-large border border-hairline bg-canvas p-1.5 shadow-soft-lift transition-transform duration-500 group-hover:-translate-y-2 sm:right-9 sm:block">
      {NEW_MENU.map((option, i) => (
        <span
          key={option}
          className={`flex items-center rounded-medium px-2.5 py-1.5 text-[11px] ${i === 0 ? 'bg-surface-1 font-semibold text-ink' : 'text-ink'}`}
        >
          {option}
        </span>
      ))}
    </div>
  </div>
);

/* ── Agenda visual + Enfoque ────────────────────────────────────────────── */

/**
 * `TodayView` está compuesta a 1280 px de ancho. Se muestra la vista Semana (la
 * que tiene los eventos a la vista) recortada a la izquierda, y la tarjeta de
 * Enfoque se posa encima.
 */
export const AgendaFocusShot: React.FC = () => (
  <div aria-hidden="true" className="relative h-[340px] overflow-hidden px-3 sm:h-[380px] lg:h-full lg:min-h-[480px] lg:px-0">
    <Pane className="absolute inset-x-3 bottom-0 top-6 transition-transform duration-500 group-hover:-translate-y-2 lg:inset-x-0 lg:left-0 lg:right-[34%] lg:top-10 lg:rounded-tl-[20px] lg:rounded-tr-none lg:border-r-0">
      <div className="h-[728px] w-[1280px] origin-top-left" style={{ transform: 'translate(-190px, 0) scale(0.7)' }}>
        <TodayView
          typed=""
          isTyping={false}
          isPressing={false}
          added
          completed={false}
          panelOpen={false}
          viewMode="week"
        />
      </div>
    </Pane>

    <div className="pointer-events-none absolute right-6 top-4 hidden origin-top-right scale-[0.8] transition-transform duration-500 group-hover:-translate-y-2 sm:block lg:right-8 lg:top-8">
      <FocusView elapsed={0} />
    </div>
  </div>
);
