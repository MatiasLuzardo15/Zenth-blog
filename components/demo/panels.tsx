import React from 'react';
import { motion } from 'framer-motion';
import {
    CalendarDays, Clock, Repeat2, Video, MapPin, ExternalLink, Eye, Target,
    ListChecks, Users, Tag, Sunrise, Timer, CalendarClock, Star, Bell, Monitor, Sparkles, AlignLeft,
    ChevronDown, ChevronRight, ChevronUp, Check, Save, BookOpen, Bold, Italic, List, ListOrdered, Quote, Code, Flag, Link2, Copy, Plus,
} from 'lucide-react';
import { FOCUS_TASK, typewriter } from './timeline';

/* ── Piezas compartidas ──────────────────────────────────────────────────── */

type IconType = React.ComponentType<{ className?: string; strokeWidth?: number }>;

/**
 * Contenedor de sección: varios campos relacionados comparten una sola
 * tarjeta redondeada (como en Drive), en vez de una caja por campo.
 */
export const GroupCard: React.FC<{ children: React.ReactNode; className?: string }> = ({ children, className }) => (
    <div className={`rounded-large bg-surface-1 p-3.5 ${className ?? ''}`}>{children}</div>
);

export const Field: React.FC<{
    icon: IconType;
    label: string;
    value: string;
    muted?: boolean;
}> = ({ icon: Icon, label, value, muted }) => (
    <div>
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
    <GroupCard>
        <div className="flex items-start gap-2">
            <Icon className="mt-0.5 h-3.5 w-3.5 shrink-0 text-ink-muted" strokeWidth={1.9} />
            <div className="min-w-0">
                <p className="text-[9px] font-semibold uppercase tracking-[0.14em] text-ink-muted">{label}</p>
                {hint && <p className="mt-0.5 text-[10px] text-ink-muted">{hint}</p>}
            </div>
        </div>
        <div className="mt-2.5">{children}</div>
    </GroupCard>
);

/** Fila de lectura: icono + etiqueta a la izquierda, valor a la derecha. */
export const DetailRow: React.FC<{ icon: IconType; label: string; value: string }> = ({ icon: Icon, label, value }) => (
    <div className="flex items-center justify-between py-1.5">
        <span className="flex items-center gap-1.5 text-[12px] text-ink-muted">
            <Icon className="h-3.5 w-3.5" strokeWidth={1.9} />
            {label}
        </span>
        <span className="text-[12px] font-semibold text-ink">{value}</span>
    </div>
);

/** Sección de lectura: separada de la anterior por una línea fina, no por caja. */
export const DetailSection: React.FC<{ label: string; hint?: string; children: React.ReactNode }> = ({ label, hint, children }) => (
    <div className="border-t border-hairline-soft pt-3">
        <div className="flex items-center justify-between">
            <span className="text-[9px] font-semibold uppercase tracking-[0.14em] text-ink-muted">{label}</span>
            {hint && <span className="text-[9px] text-ink-muted">{hint}</span>}
        </div>
        <div className="mt-1">{children}</div>
    </div>
);

const Toggle: React.FC<{ icon: IconType; label: string; on: boolean }> = ({ icon: Icon, label, on }) => (
    <div className="flex items-center gap-2">
        <Icon className="h-3.5 w-3.5 text-ink-muted" strokeWidth={1.9} />
        <span className="flex-1 text-[11px] font-semibold text-ink">{label}</span>
        <span className={`flex h-[16px] w-7 items-center rounded-pill px-0.5 ${on ? 'bg-accent' : 'bg-surface-2'}`}>
            <span className={`h-3 w-3 rounded-full ${on ? 'ml-auto bg-white' : 'bg-ink-muted'}`} />
        </span>
    </div>
);

/** Fila plana de ajustes: etiqueta a la izquierda, valor y chevron a la derecha. */
const FlatRow: React.FC<{ icon: IconType; label: string; value: string }> = ({ icon: Icon, label, value }) => (
    <div className="flex items-center gap-3 border-b border-hairline-soft py-3.5">
        <Icon className="h-4 w-4 shrink-0 text-ink-muted" strokeWidth={1.8} />
        <span className="flex-1 text-[13px] text-ink-muted">{label}</span>
        <motion.span
            key={value}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className={`text-[12px] ${value === 'Ninguna' || value === 'Ninguno' || value === 'Añadir' ? 'text-ink-muted' : 'font-semibold text-ink'}`}
        >
            {value}
        </motion.span>
        <ChevronRight className="h-3.5 w-3.5 shrink-0 text-ink-muted" strokeWidth={1.9} />
    </div>
);

/** Celda de campo: icono a la izquierda, etiqueta en versalitas y valor en negrita. */
const FlatCell: React.FC<{ icon: IconType; label: string; value: string; muted?: boolean }> = ({ icon: Icon, label, value, muted }) => (
    <div className="flex items-start gap-3">
        <Icon className="mt-1 h-4 w-4 shrink-0 text-ink-muted" strokeWidth={1.8} />
        <div className="min-w-0">
            <p className="text-[8px] font-semibold uppercase tracking-[0.14em] text-ink-muted">{label}</p>
            <motion.p
                key={value}
                initial={{ opacity: 0, y: 3 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: .24, ease: [0.16, 1, 0.3, 1] }}
                className={`mt-0.5 truncate text-[13px] font-semibold ${muted ? 'text-ink-muted' : 'text-ink'}`}
            >
                {value}
            </motion.p>
        </div>
    </div>
);

/** Momento, fecha y hora en el mismo bloque, sin caja ni marco propio. */
const WhenBlock: React.FC<{
    moment: string; date: string; time: string;
    momentMuted?: boolean; dateMuted?: boolean; timeMuted?: boolean;
    momentLabel?: string; momentIcon?: IconType;
}> = ({ moment, date, time, momentMuted, dateMuted, timeMuted, momentLabel = 'Momento', momentIcon = Sunrise }) => (
    <div className="grid grid-cols-2 gap-x-6 gap-y-3 border-b border-hairline-soft py-4">
        <FlatCell icon={momentIcon} label={momentLabel} value={moment} muted={momentMuted} />
        <FlatCell icon={CalendarDays} label="Fecha" value={date} muted={dateMuted} />
        <FlatCell icon={Clock} label="Hora" value={time} muted={timeMuted} />
    </div>
);

const DurationBlock: React.FC<{ duration: string; repeat: string; durationMuted?: boolean }> = ({ duration, repeat, durationMuted }) => (
    <div className="grid grid-cols-2 border-b border-hairline-soft py-4">
        <FlatCell icon={Timer} label="Duración" value={duration} muted={durationMuted} />
        <div className="border-l border-hairline-soft pl-5">
            <FlatCell icon={Repeat2} label="Repetición" value={repeat} />
        </div>
    </div>
);

const ToggleBlock: React.FC<{ alert: boolean }> = ({ alert }) => (
    <div className="grid grid-cols-2 py-4">
        <div className="pr-5"><Toggle icon={Star} label="Gran objetivo" on={false} /></div>
        <div className="border-l border-hairline-soft pl-5"><Toggle icon={Bell} label="Avisar" on={alert} /></div>
    </div>
);

/** Cabecera común del editor: acciones arriba, título y campo de descripción. */
const EditorHeader: React.FC<{
    action?: React.ReactNode;
    badge: React.ReactNode;
    title: React.ReactNode;
    note: React.ReactNode;
}> = ({ action, badge, title, note }) => (
    <>
        <div className="flex items-center justify-between">
            <span className="flex items-center gap-1.5 text-[12px] text-ink-muted">
                <Sparkles className="h-3.5 w-3.5" strokeWidth={1.9} />
                Pedir a Zen
            </span>
            {action}
        </div>
        <div className="mt-2 flex items-center gap-2.5">
            {badge}
            <span className="min-w-0 flex-1 truncate font-display text-[19px] leading-none tracking-[-0.04em] text-ink">{title}</span>
        </div>
        {note}
        <div className="mt-4 border-t border-hairline-soft" />
    </>
);

/** Descripción plegada: una sola línea con el texto de ayuda. */
const NoteCollapsed: React.FC<{ text: string }> = ({ text }) => (
    <div className="mt-3 flex items-center gap-2.5 rounded-large bg-surface-1 px-3.5 py-3">
        <AlignLeft className="h-3.5 w-3.5 shrink-0 text-ink-muted" strokeWidth={1.9} />
        <span className="flex-1 truncate text-[11px] text-ink-muted">{text}</span>
        <ChevronDown className="h-3.5 w-3.5 shrink-0 text-ink-muted" strokeWidth={1.9} />
    </div>
);

/** Descripción desplegada: editor con barra de formato y el texto escribiéndose. */
const NoteExpanded: React.FC<{ text: string; typing: boolean }> = ({ text, typing }) => (
    <div className="mt-3 overflow-hidden rounded-[22px] bg-surface-1">
        <div className="flex items-center gap-1 px-4 py-2.5">
            <span className="flex-1 text-[8px] font-semibold uppercase tracking-[0.14em] text-ink-muted">Notas</span>
            {[Bold, Italic, List, ListOrdered, Quote, Code, Link2, ChevronUp].map((Icon, i) => (
                <span key={i} className="flex h-6 w-6 items-center justify-center text-ink-muted">
                    <Icon className="h-3.5 w-3.5" strokeWidth={1.9} />
                </span>
            ))}
        </div>
        <div className="min-h-[76px] border-t border-hairline-soft px-4 py-3 text-[12px] leading-relaxed text-ink">
            {text}
            {typing && (
                <motion.span
                    animate={{ opacity: [1, 0, 1] }}
                    transition={{ duration: 0.85, repeat: Infinity }}
                    className="ml-px inline-block h-3.5 w-px bg-accent align-middle"
                />
            )}
        </div>
    </div>
);

const TaskBadge: React.FC = () => (
    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-surface-1">
        <Target className="h-4 w-4 text-[#f0508c]" strokeWidth={2} />
    </span>
);

/**
 * Fila "Reunión": colapsada muestra sólo "Añadir"; al elegir un servicio
 * se expande con el desplegable de Servicio; una vez creado el enlace, la
 * fila de "Crear enlace de llamada" se convierte en el enlace en sí.
 */
export const MeetingSection: React.FC<{
    stage: 'collapsed' | 'picking' | 'created';
    serviceMenuOpen?: boolean;
}> = ({ stage, serviceMenuOpen }) => (
    <div className="border-b border-hairline-soft py-3.5">
        <div className="flex items-center gap-3">
            <Video className="h-4 w-4 shrink-0 text-ink-muted" strokeWidth={1.8} />
            <span className={`flex-1 text-[13px] ${stage === 'collapsed' ? 'text-ink-muted' : 'text-ink'}`}>Reunión</span>
            <span className={`text-[12px] ${stage === 'collapsed' ? 'text-ink-muted' : 'font-semibold text-ink'}`}>{stage === 'collapsed' ? 'Añadir' : 'Zenth'}</span>
            {stage === 'collapsed'
                ? <ChevronRight className="h-3.5 w-3.5 text-ink-muted" strokeWidth={1.9} />
                : <ChevronDown className="h-3.5 w-3.5 text-ink-muted" strokeWidth={1.9} />}
        </div>

        {stage !== 'collapsed' && (
            <motion.div
                initial={{ opacity: 0, y: -4 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: .22 }}
                className="relative mt-3 space-y-2 rounded-large bg-surface-1 p-2.5"
            >
                <div className="relative flex items-center justify-between rounded-medium bg-canvas px-2.5 py-2">
                    <span className="text-[10px] text-ink-muted">Servicio</span>
                    <span className="flex items-center gap-1 text-[11px] font-semibold text-ink">
                        Zenth <ChevronDown className="h-3 w-3 text-ink-muted" strokeWidth={2} />
                    </span>

                    {serviceMenuOpen && (
                        <div className="absolute right-0 top-9 z-10 w-[150px] rounded-medium bg-canvas p-1 shadow-soft-lift">
                            {['Zenth', 'Google Meet', 'Zoom', 'Microsoft Teams', 'Otro enlace'].map(service => (
                                <div key={service} className="flex items-center justify-between rounded-[7px] px-2 py-1.5 text-[10px] text-ink">
                                    {service}
                                    {service === 'Zenth' && <Check className="h-3 w-3 text-accent" strokeWidth={2.4} />}
                                </div>
                            ))}
                        </div>
                    )}
                </div>

                {stage === 'picking' ? (
                    <div className="flex items-center gap-1.5 rounded-medium bg-canvas px-2.5 py-2">
                        <Link2 className="h-3 w-3 shrink-0 text-ink-muted" strokeWidth={1.9} />
                        <span className="flex-1 text-[10px] font-semibold text-ink">Crear enlace de llamada</span>
                    </div>
                ) : (
                    <div className="flex items-center gap-1.5 rounded-medium bg-canvas px-2.5 py-2">
                        <Link2 className="h-3 w-3 shrink-0 text-ink-muted" strokeWidth={1.9} />
                        <span className="flex-1 truncate text-[10px] text-ink">https://zenth.space/app/meeting/69a3cad3-…</span>
                        <Copy className="h-3 w-3 shrink-0 text-ink-muted" strokeWidth={1.9} />
                    </div>
                )}

                <div className="flex items-center gap-1.5 rounded-medium bg-canvas px-2.5 py-2">
                    <MapPin className="h-3 w-3 shrink-0 text-ink-muted" strokeWidth={1.9} />
                    <span className="text-[10px] text-ink-muted">Ubicación física (opcional)</span>
                </div>
                <div className="flex items-center gap-1.5 rounded-medium bg-canvas px-2.5 py-2">
                    <Plus className="h-3 w-3 shrink-0 text-ink-muted" strokeWidth={2} />
                    <span className="flex-1 truncate text-[10px] text-ink-muted">persona@correo.com</span>
                    <span className="rounded-[6px] bg-surface-2 px-2 py-1 text-[9px] font-semibold text-ink">Agregar</span>
                </div>
            </motion.div>
        )}
    </div>
);

/** Editor de una reunión nueva: misma estructura plana, con la fila Reunión activa. */
export const MeetingEditPanel: React.FC<{
    title: string;
    stage: 'collapsed' | 'picking' | 'created';
    serviceMenuOpen?: boolean;
}> = ({ title, stage, serviceMenuOpen }) => (
    <div className="flex h-full flex-col overflow-hidden p-5">
        <EditorHeader
            action={<span className="flex items-center gap-1.5 rounded-pill bg-surface-2 px-4 py-2 text-[11px] font-semibold text-ink-muted"><Check className="h-3.5 w-3.5" strokeWidth={2.4} />Agregar</span>}
            badge={<span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-surface-1"><Users className="h-4 w-4 text-[#f0508c]" strokeWidth={2} /></span>}
            title={title}
            note={<NoteCollapsed text="Agregar una nota o descripción…" />}
        />
        <FlatRow icon={Link2} label="Documentos" value="Ninguno" />
        <WhenBlock moment="Mañana" date="1 sept 2026" time="09:00" />
        <MeetingSection stage={stage} serviceMenuOpen={serviceMenuOpen} />
        <DurationBlock duration="30m" repeat="No repetir" />
        <FlatRow icon={Tag} label="Etiquetas" value="Equipo" />
        <ToggleBlock alert />
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

        <DetailSection label="Agenda" hint="Zona horaria local">
            <DetailRow icon={CalendarDays} label="Fecha" value="Mié, 29 de julio de 2026" />
            <DetailRow icon={Clock} label="Hora" value="6:30 PM" />
            <DetailRow icon={Clock} label="Duración" value="30m" />
            <DetailRow icon={Repeat2} label="Repetición" value="Semanal · hasta 22 ago" />
        </DetailSection>

        <DetailSection label="Conexión">
            <div className="flex items-center gap-2 rounded-medium bg-surface-1 px-3 py-2">
                <Video className="h-3.5 w-3.5 text-ink-muted" strokeWidth={1.9} />
                <span className="flex-1 text-[12px] font-semibold text-ink">Google Meet</span>
                <ExternalLink className="h-3.5 w-3.5 text-ink-muted" strokeWidth={1.9} />
            </div>
        </DetailSection>

        <DetailSection label="Más">
            <DetailRow icon={Eye} label="Visibilidad" value="Solo tú" />
            <DetailRow icon={Target} label="Enfoque" value="Listo para iniciar" />
        </DetailSection>
    </div>
);

/** Detalle de la reunión recién creada, mientras se prepara la sala. */
export const MeetingPreparingPanel: React.FC<{ title: string; date: string; time: string }> = ({ title, date, time }) => (
    <div className="flex h-full flex-col gap-3 overflow-hidden p-5">
        <div className="flex items-start gap-3">
            <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-medium bg-gradient-to-br from-grad-violet to-grad-magenta">
                <Target className="h-6 w-6 text-white" strokeWidth={1.9} />
            </span>
            <div className="min-w-0 flex-1">
                <div className="flex gap-1.5">
                    {['Reunión', 'Mañana'].map(p => (
                        <span key={p} className="rounded-pill bg-surface-2 px-2 py-0.5 text-[9px] font-semibold uppercase tracking-[0.1em] text-ink-muted">{p}</span>
                    ))}
                </div>
                <p className="mt-1.5 font-display text-[24px] leading-none tracking-[-0.045em] text-ink">{title}</p>
                <p className="mt-1.5 text-[10px] text-ink-muted">Reunión creada en Zenth</p>
            </div>
        </div>

        <DetailSection label="Agenda" hint="Hora local">
            <DetailRow icon={CalendarDays} label="Fecha" value={date} />
            <DetailRow icon={Clock} label="Hora" value={time} />
        </DetailSection>

        <DetailSection label="Conexión">
            <div className="flex items-center gap-2 rounded-medium bg-surface-1 px-3 py-2">
                <span className="h-3.5 w-3.5 shrink-0 animate-spin rounded-full border-2 border-ink-muted border-t-transparent" />
                <span className="flex-1 text-[12px] font-semibold text-accent">Preparando la reunión…</span>
            </div>
        </DetailSection>

        <DetailSection label="Más">
            <DetailRow icon={Eye} label="Acceso" value="Solo tú" />
        </DetailSection>
    </div>
);

/* ── Panel de edición ────────────────────────────────────────────────────── */

export const EditPanel: React.FC = () => (
    <div className="flex h-full flex-col overflow-hidden p-5">
        <EditorHeader
            action={
                <span className="flex items-center gap-1">
                    <span className="flex h-8 w-8 items-center justify-center rounded-full text-ink-muted"><CalendarClock className="h-4 w-4" strokeWidth={1.9} /></span>
                    <span className="flex h-8 w-8 items-center justify-center rounded-full text-ink-muted"><ListChecks className="h-4 w-4" strokeWidth={1.9} /></span>
                </span>
            }
            badge={<span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-medium bg-[#81D4FA]"><Monitor className="h-4 w-4 text-black" strokeWidth={1.8} /></span>}
            title="Meet de 4Geeks"
            note={<NoteCollapsed text="Reunión semanal con el equipo de 4Geeks…" />}
        />
        <FlatRow icon={Link2} label="Documentos" value="Ninguno" />
        <WhenBlock moment="Tarde" date="29 jul 2026" time="18:30" />
        <FlatRow icon={Video} label="Reunión" value="Google Meet" />
        <DurationBlock duration="30m" repeat="Semanal" />
        <FlatRow icon={Tag} label="Etiquetas" value="Ninguna" />
        <ToggleBlock alert />
    </div>
);

/* ── Detalle de una tarjeta de pizarra ───────────────────────────────────── */

const BOARD_CHIPS = [
    { icon: BookOpen, label: 'Plan de lanzamiento', on: true },
    { icon: Target, label: 'Propuesta comercial', on: false },
    { icon: Users, label: 'Equipo de producto', on: false },
];

const Person: React.FC<{ name: string; tone: string; selected: boolean; pressed?: boolean }> = ({ name, tone, selected, pressed }) => (
    <motion.span
        animate={pressed ? { scale: .96 } : { scale: 1 }}
        transition={{ duration: .14 }}
        className={`flex items-center gap-2.5 rounded-pill px-2.5 py-2 text-[11px] font-semibold text-ink transition-colors duration-300 ${selected ? 'bg-surface-2' : 'bg-surface-1'}`}
    >
        <span className={`flex h-7 w-7 items-center justify-center rounded-full bg-gradient-to-br text-[10px] font-bold text-white ${tone}`}>{name[0]}</span>
        <span className="flex-1">{name}</span>
        {selected && <Check className="h-3.5 w-3.5 text-ink-muted" strokeWidth={2.4} />}
    </motion.span>
);

/** Detalle de una tarjeta de pizarra: la sección Equipo permite asignar responsables. */
export const BoardCardPanel: React.FC<{
    title: string;
    note?: string;
    assignee: string;
    assigned: boolean;
    pressed: boolean;
}> = ({ title, note, assignee, assigned, pressed }) => (
    <div className="flex h-full flex-col gap-4 overflow-hidden p-6">
        <div className="flex items-start gap-3">
            <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-large bg-[#A5D6A7]">
                <Target className="h-6 w-6 text-[#f0508c]" strokeWidth={2} />
            </span>
            <div className="min-w-0 flex-1">
                <div className="flex gap-1.5">
                    <span className="flex items-center gap-1 rounded-pill bg-surface-2 px-2 py-0.5 text-[9px] font-semibold uppercase tracking-[0.1em] text-ink-muted"><Check className="h-2.5 w-2.5" strokeWidth={2.6} />Tarea</span>
                    <span className="rounded-pill bg-surface-2 px-2 py-0.5 text-[9px] font-semibold uppercase tracking-[0.1em] text-ink-muted">Mañana</span>
                </div>
                <p className="mt-1.5 font-display text-[24px] leading-[1.05] tracking-[-0.045em] text-ink">{title}</p>
                <p className="mt-1.5 text-[10px] text-ink-muted">Tarea creada en Zenth</p>
            </div>
        </div>

        <DetailSection label="Agenda">
            <p className="py-1.5 text-[13px] text-ink-muted">Sin programar</p>
        </DetailSection>

        <DetailSection label="Pizarra">
            <div className="mt-1.5 flex flex-wrap gap-1.5">
                {BOARD_CHIPS.map(({ icon: Icon, label, on }) => (
                    <span key={label} className={`flex items-center gap-1.5 rounded-pill px-3 py-1.5 text-[10px] font-semibold text-ink ${on ? 'bg-surface-2' : 'bg-surface-1'}`}>
                        <Icon className="h-3 w-3" strokeWidth={1.9} />
                        {label}
                        {on && <Check className="h-3 w-3" strokeWidth={2.4} />}
                    </span>
                ))}
            </div>
        </DetailSection>

        <DetailSection label="Notas">
            <p className="mt-1.5 rounded-large bg-surface-1 px-4 py-3 text-[12px] text-ink">{note ?? 'Sin notas todavía'}</p>
        </DetailSection>

        <div className="rounded-[24px] border border-hairline-soft bg-surface-1 p-3">
            <div className="flex items-center gap-3 px-1 py-1.5">
                <span className="flex h-10 w-10 items-center justify-center rounded-medium bg-canvas text-ink-muted"><Users className="h-4 w-4" strokeWidth={1.9} /></span>
                <span className="min-w-0 flex-1">
                    <span className="block text-[12px] font-semibold text-ink">Equipo</span>
                    <span className="block text-[9px] text-ink-muted">Responsables, etiquetas y seguimiento</span>
                </span>
                <motion.span key={assigned ? 1 : 0} initial={{ scale: .7 }} animate={{ scale: 1 }} className="flex h-5 min-w-5 items-center justify-center rounded-full bg-canvas px-1.5 text-[10px] font-semibold tabular-nums text-ink-muted">{assigned ? 1 : 0}</motion.span>
                <ChevronDown className="h-4 w-4 text-ink-muted" strokeWidth={1.9} />
            </div>

            <div className="mt-2 rounded-large bg-canvas p-3.5">
                <div className="flex items-start gap-2">
                    <span className="min-w-0 flex-1">
                        <span className="block text-[11px] font-semibold text-ink">Responsables</span>
                        <span className="block text-[9px] text-ink-muted">Personas a cargo de completar la tarjeta</span>
                    </span>
                    <span className="rounded-pill bg-surface-2 px-3 py-1.5 text-[9px] font-semibold text-ink-muted">Tomar tarea</span>
                </div>
                <div className="mt-2.5">
                    {assigned ? (
                        <motion.span
                            initial={{ opacity: 0, scale: .92 }}
                            animate={{ opacity: 1, scale: 1 }}
                            className="inline-flex items-center gap-2 rounded-medium bg-surface-1 px-2.5 py-2 text-[10px] font-semibold text-ink"
                        >
                            <span className="flex h-6 w-6 items-center justify-center rounded-full bg-gradient-to-br from-[#7a2c4a] to-[#c1553f] text-[9px] font-bold text-white">{assignee[0]}</span>
                            {assignee}
                        </motion.span>
                    ) : (
                        <span className="inline-block rounded-medium bg-surface-1 px-3 py-2 text-[9px] text-ink-muted">Sin responsables todavía</span>
                    )}
                </div>
            </div>

            <div className="mt-4 px-1">
                <p className="text-[11px] font-semibold text-ink">Asignar personas</p>
                <p className="text-[9px] text-ink-muted">Pulsa un miembro para añadirlo o quitarlo</p>
                <div className="mt-2 grid grid-cols-2 gap-2">
                    <Person name="Matías" tone="from-[#6a4cf5] to-[#d44df0]" selected={false} />
                    <Person name={assignee} tone="from-[#7a2c4a] to-[#c1553f]" selected={assigned} pressed={pressed} />
                </div>
            </div>

            <div className="mt-4 flex items-center gap-2 px-1">
                <span className="flex items-center gap-1.5 rounded-pill bg-canvas px-3 py-2 text-[10px] font-semibold text-ink-muted"><Bell className="h-3 w-3" strokeWidth={2} />Seguir</span>
                <span className="flex items-center gap-1.5 rounded-pill bg-ink px-3 py-2 text-[10px] font-semibold text-canvas"><Save className="h-3 w-3" strokeWidth={2} />Guardar plantilla</span>
            </div>
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

        <DetailSection label="Agenda" hint="Zona horaria local">
            <DetailRow icon={CalendarDays} label="Fecha" value="Mié, 29 de julio de 2026" />
            <DetailRow icon={Clock} label="Hora" value="3:30 PM" />
            <DetailRow icon={Clock} label="Duración" value="25m" />
            <DetailRow icon={Repeat2} label="Repetición" value="No repetir" />
        </DetailSection>

        <DetailSection label="Más">
            <DetailRow icon={Eye} label="Visibilidad" value="Solo tú" />
            <DetailRow icon={Target} label="Enfoque" value="Listo para iniciar" />
        </DetailSection>

        <div className="rounded-large bg-surface-1 p-3">
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
    description?: string;
}> = ({ typed, isTyping, isSubmitting, listLabel, fillProgress, description }) => (
    <div className="flex h-full flex-col overflow-hidden p-5">
        <EditorHeader
            action={
                <motion.span
                    animate={isSubmitting ? { scale: 0.93 } : { scale: 1 }}
                    transition={{ duration: 0.14 }}
                    className={`flex items-center gap-1.5 rounded-pill px-4 py-2 text-[11px] font-semibold ${isSubmitting ? 'bg-accent text-white' : 'bg-surface-2 text-ink-muted'}`}
                >
                    <Check className="h-3.5 w-3.5" strokeWidth={2.4} />
                    Agregar
                </motion.span>
            }
            badge={<TaskBadge />}
            title={
                <>
                    {typed || <span className="text-ink-muted">¿Cuál es tu próximo paso?</span>}
                    {isTyping && (
                        <motion.span
                            animate={{ opacity: [1, 0, 1] }}
                            transition={{ duration: 0.85, repeat: Infinity }}
                            className="ml-0.5 inline-block h-4 w-px bg-accent align-middle"
                        />
                    )}
                </>
            }
            note={description && fillProgress > 0
                ? <NoteExpanded text={typewriter(description, fillProgress, 0.02, 0.5)} typing={fillProgress > 0.02 && fillProgress < 0.5} />
                : <NoteCollapsed text="Agregar una nota o descripción…" />}
        />
        <FlatRow icon={Link2} label="Documentos" value="Ninguno" />
        <WhenBlock
            moment={fillProgress >= .16 ? listLabel : 'Seleccionar'}
            momentMuted={fillProgress < .16}
            momentLabel="Prioridad"
            momentIcon={Flag}
            date={fillProgress >= .32 ? '29 jul 2026' : 'Elegir fecha'}
            dateMuted={fillProgress < .32}
            time={fillProgress >= .48 ? '09:00' : 'Elegir hora'}
            timeMuted={fillProgress < .48}
        />
        <FlatRow icon={Video} label="Reunión" value="Añadir" />
        <DurationBlock duration={fillProgress >= .6 ? '30m' : '0m'} durationMuted={fillProgress < .6} repeat="No repetir" />
        <FlatRow icon={Tag} label="Etiquetas" value={fillProgress >= .72 ? 'Trabajo' : 'Ninguna'} />
        <ToggleBlock alert={fillProgress >= .84} />
    </div>
);
