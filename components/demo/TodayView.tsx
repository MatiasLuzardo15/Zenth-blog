import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
    CalendarDays, ChevronLeft, ChevronRight, Clock, Sparkles, FileText,
    Layers, CalendarRange, Repeat2, History, Plus, Check, Target,
} from 'lucide-react';
import {
    WEEKDAYS, MONTH_CELLS, MOMENTS, FIRST_HOUR, LAST_HOUR, HOUR_H, GUTTER_W,
    formatHour, px, TODAY_TASK, FOCUS_TASK,
} from './timeline';

interface TodayViewProps {
    typed: string;
    isTyping: boolean;
    isPressing: boolean;
    added: boolean;
    completed: boolean;
    /** Atenúa la tarjeta del evento mientras su panel está abierto. */
    panelOpen: boolean;
    focusTaskVisible?: boolean;
    focusTaskSelected?: boolean;
}

/** La pantalla de Hoy: barra lateral, calendario del día y momentos. */
export const TodayView: React.FC<TodayViewProps> = ({
    typed, isTyping, isPressing, added, completed, panelOpen,
    focusTaskVisible = false, focusTaskSelected = false,
}) => {
    const totalTasks = added ? 3 : 2;
    const doneTasks = completed ? 2 : 1;
    const progress = Math.round((doneTasks / totalTasks) * 100);

    return (
        <div className="grid h-full grid-cols-[248px_1fr_284px] gap-4 p-4">

            {/* Columna izquierda */}
            <div className="flex flex-col gap-3 overflow-hidden">
                <div className="flex items-center gap-1.5">
                    <CalendarDays className="h-3.5 w-3.5 text-ink-muted" strokeWidth={1.9} />
                    <span className="text-[12px] font-semibold text-ink">Julio…</span>
                    <ChevronLeft className="h-3.5 w-3.5 text-ink-muted" strokeWidth={1.9} />
                    <ChevronRight className="h-3.5 w-3.5 text-ink-muted" strokeWidth={1.9} />
                    <span className="ml-auto rounded-pill bg-surface-2 px-2.5 py-1 text-[11px] font-medium text-ink">
                        Hoy
                    </span>
                    <ChevronLeft className="h-3.5 w-3.5 text-ink-muted" strokeWidth={1.9} />
                </div>

                <div className="grid grid-cols-7 gap-y-1.5 text-center">
                    {WEEKDAYS.map((d, i) => (
                        <span key={i} className="text-[10px] text-ink-muted">{d}</span>
                    ))}
                    {MONTH_CELLS.map((day, i) => (
                        <span key={i} className="flex h-6 items-center justify-center">
                            {day === 29 ? (
                                <span className="relative flex h-6 w-6 items-center justify-center rounded-full bg-ink text-[11px] font-semibold text-canvas">
                                    29
                                    <span className="absolute -bottom-1 h-[3px] w-[3px] rounded-full bg-accent" />
                                </span>
                            ) : (
                                <span className="text-[11px] text-ink-muted">{day ?? ''}</span>
                            )}
                        </span>
                    ))}
                </div>

                <div className="border-t border-hairline-soft pt-3">
                    <div className="flex items-center gap-1.5">
                        <Sparkles className="h-3.5 w-3.5 text-accent" strokeWidth={1.9} />
                        <span className="text-[12px] font-semibold text-ink">Progreso del día</span>
                    </div>
                    <div className="mt-2 flex items-baseline justify-between">
                        <span className="text-[11px] tabular-nums text-ink-muted">
                            {doneTasks} de {totalTasks} tareas
                        </span>
                        <motion.span
                            key={progress}
                            initial={{ scale: 1 }}
                            animate={{ scale: [1, 1.12, 1] }}
                            transition={{ duration: 0.35 }}
                            className="text-[11px] font-semibold tabular-nums text-ink"
                        >
                            {progress}%
                        </motion.span>
                    </div>
                    <div className="mt-1.5 h-[5px] overflow-hidden rounded-pill bg-surface-2">
                        <motion.div
                            className="h-full rounded-pill bg-accent"
                            animate={{ width: `${progress}%` }}
                            transition={{ duration: 0.55, ease: 'easeOut' }}
                        />
                    </div>
                </div>

                <div>
                    <div className="flex items-center gap-1.5">
                        <Clock className="h-3.5 w-3.5 text-ink-muted" strokeWidth={1.9} />
                        <span className="text-[10px] font-semibold uppercase tracking-[0.14em] text-ink-muted">
                            Próximo
                        </span>
                    </div>
                    <div className="mt-2 flex items-center gap-2 rounded-medium bg-surface-1 px-3 py-2.5">
                        <span className="h-2 w-2 shrink-0 rounded-full bg-accent" />
                        <span className="min-w-0 flex-1">
                            <span className="block truncate text-[12px] font-semibold text-ink">
                                Meet de 4Geeks
                            </span>
                            <span className="mt-0.5 block text-[10px] text-ink-muted">6:30 PM · 30m · Tarde</span>
                        </span>
                        <ChevronRight className="h-3.5 w-3.5 shrink-0 text-ink-muted" strokeWidth={1.9} />
                    </div>
                </div>

                {/* Captura rápida: el campo que se escribe solo */}
                <div>
                    <div className="flex items-center gap-1.5">
                        <Plus className="h-3.5 w-3.5 text-ink-muted" strokeWidth={2.2} />
                        <span className="text-[10px] font-semibold uppercase tracking-[0.14em] text-ink-muted">
                            Captura rápida
                        </span>
                    </div>
                    <div
                        className="mt-2 flex items-center gap-2 rounded-medium bg-surface-1 p-1.5 pl-3"
                        style={isTyping ? { boxShadow: '0 0 0 1px rgba(0,153,255,0.45)' } : undefined}
                    >
                        <span className="flex min-w-0 flex-1 items-center">
                            <span className="truncate text-[12px] text-ink">
                                {typed || <span className="text-ink-muted">Añadir una tarea…</span>}
                            </span>
                            {isTyping && (
                                <motion.span
                                    animate={{ opacity: [1, 0, 1] }}
                                    transition={{ duration: 0.85, repeat: Infinity }}
                                    className="ml-px inline-block h-3.5 w-px bg-accent"
                                />
                            )}
                        </span>
                        <motion.span
                            animate={isPressing ? { scale: 0.85 } : { scale: 1 }}
                            transition={{ duration: 0.14 }}
                            className="flex h-7 w-7 shrink-0 items-center justify-center rounded-[8px] bg-accent text-white"
                        >
                            <Plus className="h-4 w-4" strokeWidth={2.6} />
                        </motion.span>
                    </div>
                    <p className="mt-1.5 text-[10px] text-ink-muted">
                        Se agenda automáticamente en el momento adecuado.
                    </p>
                </div>

                <div>
                    <div className="flex items-center gap-1.5">
                        <FileText className="h-3.5 w-3.5 text-ink-muted" strokeWidth={1.9} />
                        <span className="text-[10px] font-semibold uppercase tracking-[0.14em] text-ink-muted">
                            Nota del día
                        </span>
                    </div>
                    <div className="mt-2 h-[62px] rounded-medium bg-surface-1 px-3 py-2.5">
                        <span className="text-[11px] leading-relaxed text-ink-muted">
                            Ideas, contexto o recordatorios para este día…
                        </span>
                    </div>
                    <p className="mt-1.5 text-[10px] text-ink-muted">Se guarda también como nota en Zenth.</p>
                </div>

                <div className="mt-auto">
                    <div className="flex items-center gap-1.5">
                        <Layers className="h-3.5 w-3.5 text-ink-muted" strokeWidth={1.9} />
                        <span className="text-[10px] font-semibold uppercase tracking-[0.14em] text-ink-muted">
                            Calendarios
                        </span>
                    </div>
                    <div className="mt-2 flex items-center gap-2">
                        <span className="h-2.5 w-2.5 rounded-[3px] bg-accent" />
                        <span className="flex-1 text-[12px] text-ink">Zenth</span>
                        <span className="flex h-[18px] w-8 items-center rounded-pill bg-accent px-0.5">
                            <span className="ml-auto h-3.5 w-3.5 rounded-full bg-white" />
                        </span>
                    </div>

                    <div className="mt-3 flex items-center gap-2 border-t border-hairline-soft pt-3">
                        <CalendarRange className="h-3.5 w-3.5 text-ink-muted" strokeWidth={1.9} />
                        <span className="flex-1 text-[12px] text-ink">Abrir planificador anual</span>
                        <ChevronRight className="h-3.5 w-3.5 text-ink-muted" strokeWidth={1.9} />
                    </div>
                </div>
            </div>

            {/* Columna central: el calendario del día */}
            <div className="flex min-w-0 flex-col overflow-hidden rounded-card bg-surface-1 p-5">
                <div className="flex items-start justify-between gap-4">
                    <div>
                        <p className="font-display text-[34px] leading-none tracking-[-0.045em] text-ink">
                            Miércoles
                        </p>
                        <p className="mt-2 text-[12px] text-ink-muted">29 de julio de 2026</p>
                    </div>

                    <div className="flex items-center gap-3">
                        <div className="flex items-center gap-2">
                            <ChevronLeft className="h-4 w-4 text-ink-muted" strokeWidth={1.9} />
                            <span className="text-[13px] font-medium text-ink">Hoy</span>
                            <ChevronRight className="h-4 w-4 text-ink-muted" strokeWidth={1.9} />
                        </div>
                        <div className="flex items-center gap-1 rounded-pill bg-canvas p-1">
                            {['Día', 'Semana', 'Mes'].map((v, i) => (
                                <span
                                    key={v}
                                    className={`flex items-center gap-1.5 rounded-pill px-3 py-1.5 text-[12px] ${i === 0 ? 'bg-surface-2 font-semibold text-ink' : 'text-ink-muted'
                                        }`}
                                >
                                    <CalendarDays className="h-3.5 w-3.5" strokeWidth={1.9} />
                                    {v}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Rejilla de horas */}
                <div className="mt-4 flex min-h-0 flex-1 flex-col overflow-hidden rounded-large bg-canvas">
                    <div className="flex items-center border-b border-hairline-soft py-2">
                        <span
                            className="shrink-0 pl-3 text-[9px] leading-tight text-ink-muted"
                            style={{ width: px(GUTTER_W) }}
                        >
                            TODO<br />EL DÍA
                        </span>
                        <span className="rounded-small bg-surface-2 px-2 py-0.5 text-[11px] text-ink">zeta</span>
                    </div>

                    <div className="relative min-h-0 flex-1 overflow-hidden">
                        {/* Las líneas van sólo en la zona de contenido, nunca bajo la
                            columna de horas, y en el tono más tenue del sistema. */}
                        {Array.from({ length: LAST_HOUR - FIRST_HOUR + 1 }, (_, i) => (
                            <div key={i} className="flex items-start" style={{ height: px(HOUR_H) }}>
                                <span
                                    className="shrink-0 -translate-y-[5px] pl-3 text-[10px] tabular-nums text-ink-muted"
                                    style={{ width: px(GUTTER_W) }}
                                >
                                    {formatHour(FIRST_HOUR + i)}
                                </span>
                                <span className="h-px flex-1 bg-hairline-soft" />
                            </div>
                        ))}

                        {/* Línea de «ahora» */}
                        <div
                            className="pointer-events-none absolute right-3 flex items-center"
                            style={{ left: px(GUTTER_W), top: px((18.5 - FIRST_HOUR) * HOUR_H) }}
                        >
                            <span className="h-1.5 w-1.5 -translate-x-1 rounded-full bg-semantics-error" />
                            <span className="h-px flex-1 bg-semantics-error" />
                        </div>

                        {/* Evento importado del calendario */}
                        <motion.div
                            animate={panelOpen ? { scale: 1.01 } : { scale: 1 }}
                            transition={{ duration: 0.3 }}
                            className="absolute right-3 overflow-hidden rounded-[5px] px-2 py-1"
                            style={{
                                left: px(GUTTER_W + 4),
                                top: px((18.5 - FIRST_HOUR) * HOUR_H + 2),
                                height: px(HOUR_H * 0.5 - 2),
                                backgroundColor: '#81D4FA',
                            }}
                        >
                            <p className="text-[10px] font-semibold leading-tight text-black">Meet de 4Geeks</p>
                            <p className="text-[9px] leading-tight text-black/70">6:30 PM · 30m</p>
                        </motion.div>

                        {/* La tarea recién capturada aterriza también en la rejilla */}
                        <AnimatePresence>
                            {added && (
                                <motion.div
                                    key="grid-task"
                                    initial={{ opacity: 0, x: -10, scale: 0.97 }}
                                    animate={{ opacity: 1, x: 0, scale: 1 }}
                                    exit={{ opacity: 0, scale: 0.97 }}
                                    transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                                    className="absolute right-3 overflow-hidden rounded-[5px] px-2 py-1"
                                    style={{
                                        left: px(GUTTER_W + 4),
                                        top: px((16 - FIRST_HOUR) * HOUR_H + 2),
                                        height: px(HOUR_H - 4),
                                        backgroundColor: '#FFB7CE',
                                    }}
                                >
                                    <p
                                        className={`text-[10px] font-semibold leading-tight text-black transition-opacity ${completed ? 'line-through opacity-60' : ''
                                            }`}
                                    >
                                        {TODAY_TASK}
                                    </p>
                                    <p className="text-[9px] leading-tight text-black/70">4:00 PM · 1h</p>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                </div>
            </div>

            {/* Columna derecha: momentos del día */}
            <div className="flex flex-col gap-2.5 overflow-hidden">
                <div className="flex items-center gap-2 rounded-medium bg-surface-1 px-3 py-2.5">
                    <ChevronRight className="h-3.5 w-3.5 text-ink-muted" strokeWidth={1.9} />
                    <span className="text-[12px] font-semibold text-ink">Momentos del día</span>
                </div>

                {MOMENTS.map(({ key, color, empty }) => {
                    const isTarde = key === 'Tarde';
                    const isFocusMoment = key === 'Mañana' && focusTaskVisible;
                    const count = isFocusMoment ? 1 : isTarde ? (added ? 2 : 1) : 0;
                    return (
                        <div key={key} className="overflow-hidden rounded-medium bg-surface-1">
                            <div className="flex items-center gap-2 px-3 py-2" style={{ backgroundColor: color }}>
                                <span className="text-[12px] font-semibold text-black">{key}</span>
                                {count > 0 && (
                                    <motion.span
                                        key={count}
                                        initial={{ scale: 0.7 }}
                                        animate={{ scale: 1 }}
                                        className="flex h-4 min-w-4 items-center justify-center rounded-full bg-black/15 px-1 text-[10px] font-semibold tabular-nums text-black"
                                    >
                                        {count}
                                    </motion.span>
                                )}
                                <span className="ml-auto text-[13px] leading-none text-black/60">···</span>
                            </div>

                            <div className="space-y-1.5 p-2">
                                {isFocusMoment ? (
                                    <motion.div
                                        animate={focusTaskSelected ? { scale: .975 } : { scale: 1 }}
                                        transition={{ duration: .22 }}
                                        className="rounded-[8px] px-2.5 py-2"
                                        style={{ backgroundColor: '#E1EF91' }}
                                    >
                                        <div className="flex items-center gap-2">
                                            <span className="h-3.5 w-3.5 shrink-0 rounded-full border-[1.5px] border-black/50" />
                                            <span className="flex-1 truncate text-[12px] font-semibold text-black">{FOCUS_TASK}</span>
                                        </div>
                                        <div className="mt-1 flex items-center gap-1.5 pl-5">
                                            <Target className="h-3 w-3 text-black/60" strokeWidth={2} />
                                            <span className="text-[9px] font-semibold text-black/65">Lista para enfoque</span>
                                            <span className="ml-auto text-[10px] font-semibold text-black/70">25M</span>
                                        </div>
                                    </motion.div>
                                ) : isTarde ? (
                                    <>
                                        <div className="rounded-[8px] px-2.5 py-2" style={{ backgroundColor: '#81D4FA' }}>
                                            <div className="flex items-center gap-2">
                                                <span className="h-3.5 w-3.5 shrink-0 rounded-full border-[1.5px] border-black/40" />
                                                <span className="flex-1 truncate text-[12px] font-semibold text-black">
                                                    Meet de 4Geeks
                                                </span>
                                            </div>
                                            <div className="mt-1 flex items-center gap-1.5 pl-5">
                                                <Repeat2 className="h-3 w-3 text-black/60" strokeWidth={2} />
                                                <span className="ml-auto text-[10px] font-semibold text-black/70">30M</span>
                                            </div>
                                        </div>

                                        <AnimatePresence>
                                            {added && (
                                                <motion.div
                                                    key="moment-task"
                                                    initial={{ opacity: 0, y: -8, scale: 0.96 }}
                                                    animate={{ opacity: 1, y: 0, scale: 1 }}
                                                    exit={{ opacity: 0, scale: 0.96 }}
                                                    transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                                                    className="rounded-[8px] px-2.5 py-2"
                                                    style={{ backgroundColor: '#FFB7CE' }}
                                                >
                                                    <div className="flex items-center gap-2">
                                                        <span
                                                            className={`flex h-3.5 w-3.5 shrink-0 items-center justify-center rounded-full border-[1.5px] transition-colors duration-300 ${completed ? 'border-black bg-black' : 'border-black/40'
                                                                }`}
                                                        >
                                                            {completed && <Check className="h-2 w-2 text-white" strokeWidth={4} />}
                                                        </span>
                                                        <span
                                                            className={`flex-1 truncate text-[12px] font-semibold text-black transition-opacity duration-300 ${completed ? 'opacity-55 line-through' : ''
                                                                }`}
                                                        >
                                                            {TODAY_TASK}
                                                        </span>
                                                    </div>
                                                    <div className="mt-1 flex items-center gap-1.5 pl-5">
                                                        <span className="text-[10px] font-semibold text-black/70">Gran meta</span>
                                                        <span className="ml-auto text-[10px] font-semibold text-black/70">1H</span>
                                                    </div>
                                                </motion.div>
                                            )}
                                        </AnimatePresence>
                                    </>
                                ) : (
                                    <p className="px-1 py-3 text-center text-[11px] italic text-ink-muted">{empty}</p>
                                )}

                                <div className="flex items-center gap-1.5 px-1 pt-0.5">
                                    <Plus className="h-3.5 w-3.5 text-ink-muted" strokeWidth={2.2} />
                                    <span className="text-[11px] text-ink-muted">Añade una tarea</span>
                                </div>
                            </div>
                        </div>
                    );
                })}

                <div className="mt-1 flex items-center gap-2.5 rounded-medium bg-surface-1 px-3 py-2.5">
                    <History className="h-4 w-4 text-ink-muted" strokeWidth={1.9} />
                    <span className="min-w-0 flex-1">
                        <span className="block text-[12px] font-semibold text-ink">Completado</span>
                        <span className="block text-[10px] text-ink-muted">Ver historial</span>
                    </span>
                    <motion.span
                        key={doneTasks}
                        initial={{ scale: 0.7 }}
                        animate={{ scale: 1 }}
                        className="flex h-5 min-w-5 items-center justify-center rounded-full bg-surface-2 px-1.5 text-[11px] font-semibold tabular-nums text-ink"
                    >
                        {doneTasks}
                    </motion.span>
                    <ChevronRight className="h-3.5 w-3.5 shrink-0 text-ink-muted" strokeWidth={1.9} />
                </div>
            </div>
        </div>
    );
};
