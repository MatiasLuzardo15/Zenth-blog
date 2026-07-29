import React from 'react';
import { motion } from 'framer-motion';
import {
    CalendarDays, Clock, Repeat2, Video, MapPin, ExternalLink, Eye, Target,
    ListChecks, Users, Zap, Tag, Star, Bell, Monitor, Sparkles, AlignLeft,
    ChevronDown, ChevronRight, X, Check, Flag,
} from 'lucide-react';
import { WEEKDAYS } from './timeline';
import { FOCUS_TASK } from './timeline';

/* ── Piezas compartidas ──────────────────────────────────────────────────── */

type IconType = React.ComponentType<{ className?: string; strokeWidth?: number }>;

export const Field: React.FC<{
    icon: IconType;
    label: string;
    value: string;
    muted?: boolean;
}> = ({ icon: Icon, label, value, muted }) => (
    <div className="rounded-medium bg-surface-1 px-3 py-2.5">
        <div className="flex items-center gap-1.5">
            <Icon className="h-3 w-3 text-ink-muted" strokeWidth={1.9} />
            <span className="text-[9px] font-semibold uppercase tracking-[0.14em] text-ink-muted">
                {label}
            </span>
        </div>
        <motion.p
            key={value}
            initial={{ opacity: 0, y: 3 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: .24, ease: [0.16, 1, 0.3, 1] }}
            className={`mt-1 truncate text-[12px] font-semibold ${muted ? 'text-ink-muted' : 'text-ink'}`}
        >
            {value}
        </motion.p>
    </div>
);

export const SectionCard: React.FC<{
    icon: IconType;
    label: string;
    hint?: string;
    children: React.ReactNode;
}> = ({ icon: Icon, label, hint, children }) => (
    <div className="rounded-medium bg-surface-1 p-3">
        <div className="flex items-start gap-2">
            <Icon className="mt-0.5 h-3.5 w-3.5 shrink-0 text-ink-muted" strokeWidth={1.9} />
            <div className="min-w-0">
                <p className="text-[9px] font-semibold uppercase tracking-[0.14em] text-ink-muted">{label}</p>
                {hint && <p className="mt-0.5 text-[10px] text-ink-muted">{hint}</p>}
            </div>
        </div>
        <div className="mt-2.5">{children}</div>
    </div>
);

const EVENT_TYPES = [
    { icon: ListChecks, label: 'Tarea', hint: 'Acción concreta' },
    { icon: CalendarDays, label: 'Evento', hint: 'Bloque en agenda' },
    { icon: Users, label: 'Reunión', hint: 'Con otras personas' },
    { icon: Zap, label: 'Enfoque', hint: 'Tiempo protegido' },
];

/** Selector de tipo. `selected` es el índice del tipo activo. */
const EventTypePicker: React.FC<{ selected: number }> = ({ selected }) => (
    <SectionCard icon={AlignLeft} label="Tipo de evento" hint="Define cómo aparece en tu calendario">
        <div className="grid grid-cols-4 gap-1.5">
            {EVENT_TYPES.map(({ icon: Icon, label, hint }, i) => (
                <div
                    key={label}
                    className={`rounded-[8px] px-1.5 py-2 ${i === selected ? 'bg-surface-2' : 'bg-canvas'}`}
                    // Sin `ring-ink/20`: el modificador de opacidad de Tailwind
                    // no funciona sobre colores declarados como `var()`.
                    style={i === selected ? { boxShadow: 'inset 0 0 0 1px var(--fr-hairline)' } : undefined}
                >
                    <Icon className="h-3 w-3 text-ink-muted" strokeWidth={1.9} />
                    <p className="mt-1 truncate text-[10px] font-semibold text-ink">{label}</p>
                    <p className="truncate text-[8px] text-ink-muted">{hint}</p>
                </div>
            ))}
        </div>
    </SectionCard>
);

const Toggle: React.FC<{ icon: IconType; label: string; on: boolean }> = ({ icon: Icon, label, on }) => (
    <div className="flex items-center gap-2 rounded-medium bg-surface-1 px-3 py-2.5">
        <Icon className="h-3.5 w-3.5 text-ink-muted" strokeWidth={1.9} />
        <span className="flex-1 text-[11px] font-semibold text-ink">{label}</span>
        <span className={`flex h-[16px] w-7 items-center rounded-pill px-0.5 ${on ? 'bg-accent' : 'bg-surface-2'}`}>
            <span className={`h-3 w-3 rounded-full ${on ? 'ml-auto bg-white' : 'bg-ink-muted'}`} />
        </span>
    </div>
);

const TagsRow: React.FC<{ value?: string }> = ({ value = 'Ninguna' }) => (
    <div className="flex items-center gap-2 rounded-medium bg-surface-1 px-3 py-2.5">
        <Tag className="h-3.5 w-3.5 text-ink-muted" strokeWidth={1.9} />
        <span className="flex-1 text-[9px] font-semibold uppercase tracking-[0.14em] text-ink-muted">
            Etiquetas
        </span>
        <motion.span
            key={value}
            initial={{ opacity: 0, y: 3 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: .24, ease: [0.16, 1, 0.3, 1] }}
            className={`text-[10px] ${value === 'Ninguna' ? 'italic text-ink-muted' : 'rounded-pill bg-canvas px-2 py-0.5 font-semibold text-ink'}`}
        >{value}</motion.span>
        <ChevronRight className="h-3 w-3 text-ink-muted" strokeWidth={1.9} />
    </div>
);

const NotesBox: React.FC<{ text?: string }> = ({ text = 'Escribe tus notas aquí…' }) => (
    <div className="h-[62px] rounded-medium bg-surface-1 px-3 py-2.5">
        <motion.span key={text} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: .3 }} className="text-[11px] text-ink-muted">{text}</motion.span>
    </div>
);

/* ── Panel de previsualización ───────────────────────────────────────────── */

export const DetailsPanel: React.FC = () => (
    <div className="flex h-full flex-col gap-3 overflow-hidden p-5">
        <div className="flex items-start gap-3">
            <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-medium bg-[#81D4FA]">
                <Monitor className="h-6 w-6 text-black" strokeWidth={1.7} />
            </span>
            <div className="min-w-0 flex-1">
                <div className="flex gap-1.5">
                    {['Evento', 'Tarde'].map(p => (
                        <span
                            key={p}
                            className="rounded-pill bg-surface-2 px-2 py-0.5 text-[9px] font-semibold uppercase tracking-[0.1em] text-ink-muted"
                        >
                            {p}
                        </span>
                    ))}
                </div>
                <p className="mt-1.5 font-display text-[24px] leading-none tracking-[-0.045em] text-ink">
                    Meet de 4Geeks
                </p>
                <p className="mt-1.5 text-[10px] text-ink-muted">Evento creado en Zenth</p>
            </div>
        </div>

        <div className="mt-1 flex items-center justify-between">
            <span className="text-[9px] font-semibold uppercase tracking-[0.14em] text-ink-muted">Agenda</span>
            <span className="text-[9px] text-ink-muted">Zona horaria local</span>
        </div>

        <div className="grid grid-cols-2 gap-2">
            <Field icon={CalendarDays} label="Fecha" value="Mié, 29 de julio de 2026" />
            <Field icon={Clock} label="Hora" value="6:30 PM" />
            <Field icon={Clock} label="Duración" value="30m" />
            <Field icon={Repeat2} label="Repetición" value="Semanal · hasta 22 ago" />
        </div>

        <SectionCard icon={Video} label="Conexión">
            <div className="flex items-center gap-2 rounded-[8px] bg-surface-2 px-3 py-2">
                <Video className="h-3.5 w-3.5 text-ink-muted" strokeWidth={1.9} />
                <span className="flex-1 text-[12px] font-semibold text-ink">Google Meet</span>
                <ExternalLink className="h-3.5 w-3.5 text-ink-muted" strokeWidth={1.9} />
            </div>
        </SectionCard>

        <div className="grid grid-cols-2 gap-2">
            <Field icon={Eye} label="Visibilidad" value="Solo tú" />
            <Field icon={Target} label="Focus" value="Listo para iniciar" />
        </div>
    </div>
);

/* ── Panel de edición ────────────────────────────────────────────────────── */

export const EditPanel: React.FC = () => (
    <div className="flex h-full flex-col gap-2.5 overflow-hidden p-5">
        <div className="flex gap-1.5">
            <span className="flex items-center gap-1 rounded-pill bg-surface-2 px-2 py-1 text-[9px] font-semibold uppercase tracking-[0.1em] text-ink">
                <Sparkles className="h-2.5 w-2.5" strokeWidth={2.2} />
                Pedir a Zen
            </span>
            <span className="flex items-center gap-1 rounded-pill bg-surface-2 px-2 py-1 text-[9px] font-semibold uppercase tracking-[0.1em] text-ink-muted">
                <Repeat2 className="h-2.5 w-2.5" strokeWidth={2.2} />
                Serie
            </span>
        </div>

        <div className="flex items-center gap-2.5">
            <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-[8px] bg-[#81D4FA]">
                <Monitor className="h-4 w-4 text-black" strokeWidth={1.8} />
            </span>
            <p className="font-display text-[19px] leading-none tracking-[-0.04em] text-ink">
                Meet de 4Geeks
            </p>
        </div>

        <div className="grid grid-cols-2 gap-2">
            <span className="flex items-center justify-center gap-1.5 rounded-medium bg-surface-1 py-2 text-[10px] font-semibold uppercase tracking-[0.1em] text-ink">
                <CalendarDays className="h-3 w-3" strokeWidth={2} />
                Auto-agendar
            </span>
            <span className="flex items-center justify-center gap-1.5 rounded-medium bg-surface-1 py-2 text-[10px] font-semibold uppercase tracking-[0.1em] text-ink">
                <ListChecks className="h-3 w-3" strokeWidth={2} />
                Sugerir pasos
            </span>
        </div>

        <EventTypePicker selected={1} />

        <SectionCard icon={Video} label="Videoconferencia" hint="Guarda el acceso para abrirlo desde el evento">
            <div className="flex gap-1.5">
                <span className="flex w-[38%] items-center justify-between rounded-[8px] bg-canvas px-2 py-1.5 text-[10px] text-ink">
                    Google Meet
                    <ChevronDown className="h-3 w-3 text-ink-muted" strokeWidth={2} />
                </span>
                <span className="flex-1 truncate rounded-[8px] bg-canvas px-2 py-1.5 text-[10px] text-ink">
                    https://meet.google.com/ehg-ddnn-xqx
                </span>
            </div>
            <div className="mt-1.5 flex items-center gap-1.5 rounded-[8px] bg-canvas px-2 py-1.5">
                <MapPin className="h-3 w-3 text-ink-muted" strokeWidth={1.9} />
                <span className="text-[10px] text-ink-muted">Ubicación física (opcional)</span>
            </div>
        </SectionCard>

        <div className="grid grid-cols-2 gap-2">
            <Field icon={CalendarDays} label="Momento" value="Tarde" />
            <Field icon={CalendarDays} label="Fecha" value="29 jul 2026" />
        </div>
        <Field icon={Clock} label="Hora inicio" value="6:30 PM" />

        <div className="grid grid-cols-2 gap-2">
            <Field icon={Clock} label="Duración" value="30m" />
            <Field icon={Repeat2} label="Repetición" value="Semanal" />
        </div>

        <div className="flex gap-1 rounded-medium bg-surface-1 p-1.5">
            {WEEKDAYS.map((d, i) => (
                <span
                    key={i}
                    className={`flex-1 rounded-[7px] py-1.5 text-center text-[10px] font-semibold ${i === 2 || i === 4 ? 'bg-surface-2 text-ink' : 'text-ink-muted'
                        }`}
                >
                    {d}
                </span>
            ))}
        </div>

        <div className="flex items-center justify-between">
            <span className="text-[9px] font-semibold uppercase tracking-[0.14em] text-ink-muted">
                Finalizar repetición
            </span>
            <span className="flex items-center gap-1.5 rounded-[8px] bg-surface-1 px-2 py-1 text-[10px] text-ink">
                <CalendarDays className="h-3 w-3 text-ink-muted" strokeWidth={1.9} />
                22/8/2026
                <X className="h-2.5 w-2.5 text-ink-muted" strokeWidth={2.4} />
            </span>
        </div>

        <TagsRow />

        <div className="grid grid-cols-2 gap-2">
            <Toggle icon={Star} label="Gran objetivo" on={false} />
            <Toggle icon={Bell} label="Avisar" on />
        </div>
    </div>
);

/* ── Panel de tarea lista para iniciar enfoque ───────────────────────────── */

export const FocusTaskPanel: React.FC = () => (
    <div className="flex h-full flex-col gap-4 overflow-hidden p-5">
        <div className="flex items-start gap-3">
            <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-medium bg-[#E1EF91]">
                <Target className="h-6 w-6 text-black" strokeWidth={1.9} />
            </span>
            <div className="min-w-0 flex-1">
                <div className="flex gap-1.5">
                    <span className="rounded-pill bg-surface-2 px-2 py-0.5 text-[9px] font-semibold uppercase tracking-[0.1em] text-ink-muted">Tarea</span>
                    <span className="rounded-pill bg-surface-2 px-2 py-0.5 text-[9px] font-semibold uppercase tracking-[0.1em] text-ink-muted">Tarde</span>
                </div>
                <p className="mt-2 font-display text-[22px] font-semibold leading-tight tracking-[-0.04em] text-ink">{FOCUS_TASK}</p>
                <p className="mt-1 text-[10px] text-ink-muted">Tarea creada en Zenth</p>
            </div>
        </div>

        <div className="mt-2 flex items-center justify-between">
            <span className="text-[9px] font-semibold uppercase tracking-[0.14em] text-ink-muted">Agenda</span>
            <span className="text-[9px] text-ink-muted">Zona horaria local</span>
        </div>

        <div className="grid grid-cols-2 gap-2">
            <Field icon={CalendarDays} label="Fecha" value="Mié, 29 de julio de 2026" />
            <Field icon={Clock} label="Hora" value="3:30 PM" />
            <Field icon={Clock} label="Duración" value="25m" />
            <Field icon={Repeat2} label="Repetición" value="No repetir" />
        </div>

        <div className="grid grid-cols-2 gap-2">
            <Field icon={Eye} label="Visibilidad" value="Solo tú" />
            <Field icon={Target} label="Focus" value="Listo para iniciar" />
        </div>

        <div className="rounded-medium bg-surface-1 p-3">
            <p className="text-[9px] font-semibold uppercase tracking-[0.14em] text-ink-muted">Notas</p>
            <p className="mt-2 text-[11px] leading-relaxed text-ink-muted">Revisar los últimos cambios y dejar lista la versión para enviar.</p>
        </div>
    </div>
);

/* ── Panel de nueva tarea ────────────────────────────────────────────────── */

/**
 * El mismo editor, en modo creación: cabecera con el botón Agregar, el título
 * todavía vacío y la prioridad fijada a la lista desde la que se abrió.
 */
export const CreatePanel: React.FC<{
    typed: string;
    isTyping: boolean;
    isSubmitting: boolean;
    listLabel: string;
    fillProgress: number;
}> = ({ typed, isTyping, isSubmitting, listLabel, fillProgress }) => (
    <div className="flex h-full flex-col gap-2.5 overflow-hidden p-5">
        <div className="flex items-center justify-end">
            <motion.span
                animate={isSubmitting ? { scale: 0.93 } : { scale: 1 }}
                transition={{ duration: 0.14 }}
                className={`flex items-center gap-1.5 rounded-medium px-4 py-2 text-[11px] font-semibold ${isSubmitting ? 'bg-accent text-white' : 'bg-surface-2 text-ink'
                    }`}
            >
                <Check className="h-3.5 w-3.5" strokeWidth={2.4} />
                Agregar
            </motion.span>
        </div>

        <span className="flex w-fit items-center gap-1 rounded-pill bg-surface-2 px-2 py-1 text-[9px] font-semibold uppercase tracking-[0.1em] text-ink">
            <Sparkles className="h-2.5 w-2.5" strokeWidth={2.2} />
            Pedir a Zen
        </span>

        <div className="flex items-center gap-2.5">
            <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-grad-violet to-grad-magenta">
                <Target className="h-4 w-4 text-white" strokeWidth={2} />
            </span>
            <span className="flex min-w-0 flex-1 items-center">
                <span className="truncate font-display text-[19px] leading-none tracking-[-0.04em] text-ink">
                    {typed || <span className="text-ink-muted">¿Cuál es tu próximo paso?</span>}
                </span>
                {isTyping && (
                    <motion.span
                        animate={{ opacity: [1, 0, 1] }}
                        transition={{ duration: 0.85, repeat: Infinity }}
                        className="ml-0.5 inline-block h-4 w-px bg-accent"
                    />
                )}
            </span>
        </div>

        <EventTypePicker selected={0} />

        <div className="grid grid-cols-2 gap-2">
            <Field icon={Flag} label="Prioridad" value={fillProgress >= .16 ? listLabel : 'Seleccionar'} muted={fillProgress < .16} />
            <Field icon={CalendarDays} label="Fecha" value={fillProgress >= .32 ? '29 jul 2026' : 'Elegir fecha'} muted={fillProgress < .32} />
        </div>
        <Field icon={Clock} label="Hora inicio" value={fillProgress >= .48 ? '9:00 AM' : 'Elegir hora'} muted={fillProgress < .48} />

        <div className="grid grid-cols-2 gap-2">
            <Field icon={Clock} label="Duración" value={fillProgress >= .6 ? '30m' : '0m'} muted={fillProgress < .6} />
            <Field icon={Repeat2} label="Repetición" value="No repetir" />
        </div>

        <TagsRow value={fillProgress >= .72 ? 'Trabajo' : 'Ninguna'} />

        <div className="grid grid-cols-2 gap-2">
            <Toggle icon={Star} label="Gran objetivo" on={false} />
            <Toggle icon={Bell} label="Avisar" on={fillProgress >= .84} />
        </div>

        <NotesBox text={fillProgress >= .95 ? 'Revisar avances y dejar el próximo paso claro.' : 'Escribe tus notas aquí…'} />
    </div>
);
