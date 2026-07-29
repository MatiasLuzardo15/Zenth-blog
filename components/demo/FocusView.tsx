import React from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Minus, Pause, Pencil, Play, Plus, X } from 'lucide-react';
import { FOCUS_RUNNING_AT, FOCUS_START_AT, FOCUS_TASK } from './timeline';

interface FocusViewProps {
    elapsed: number;
}

const formatCountdown = (seconds: number) => {
    const minutes = Math.floor(seconds / 60).toString().padStart(2, '0');
    const rest = (seconds % 60).toString().padStart(2, '0');
    return `${minutes}:${rest}`;
};

const TimerRing: React.FC<{ elapsed: number; running: boolean }> = ({ elapsed, running }) => {
    const spent = running ? Math.max(0, Math.floor((elapsed - FOCUS_RUNNING_AT) / 1000)) : 0;
    const remaining = Math.max(0, 25 * 60 - spent);

    return (
        <motion.div
            initial={{ scale: .96, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: .55, ease: [0.16, 1, 0.3, 1] }}
            className="relative flex h-[238px] w-[238px] items-center justify-center rounded-full"
            style={{
                background: 'repeating-conic-gradient(#DCEB72 0deg 2.1deg, transparent 2.1deg 5.2deg)',
                filter: 'drop-shadow(0 12px 24px rgba(190, 215, 65, 0.12))',
            }}
        >
            <div className="flex h-[204px] w-[204px] flex-col items-center justify-center rounded-full bg-canvas">
                <motion.span
                    key={remaining}
                    initial={running ? { opacity: .55, y: 2 } : false}
                    animate={{ opacity: 1, y: 0 }}
                    className="font-display text-[54px] font-semibold leading-none tracking-[-0.055em] text-ink"
                >
                    {formatCountdown(remaining)}
                </motion.span>
                <span className="mt-3 max-w-[150px] truncate text-[10px] text-ink-muted">{running ? FOCUS_TASK : 'Sesión de enfoque'}</span>
            </div>
        </motion.div>
    );
};

/** Acto III: configuración e inicio de una sesión vinculada a una tarea. */
export const FocusView: React.FC<FocusViewProps> = ({ elapsed }) => {
    const running = elapsed >= FOCUS_RUNNING_AT;
    const pressingStart = elapsed >= FOCUS_START_AT && elapsed < FOCUS_RUNNING_AT;

    return (
        <div className="relative h-full overflow-hidden bg-canvas">
            <AnimatePresence mode="wait" initial={false}>
                {!running ? (
                    <motion.div
                        key="focus-setup"
                        initial={{ opacity: 0, y: 18 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, scale: .97 }}
                        transition={{ duration: .52, ease: [0.16, 1, 0.3, 1] }}
                        className="absolute inset-0 px-[140px] pt-[86px]"
                    >
                        <div className="text-center">
                            <h2 className="font-display text-[42px] font-semibold leading-none tracking-[-0.055em] text-ink">Enfoque</h2>
                            <p className="mx-auto mt-3 max-w-[470px] text-[10px] font-semibold uppercase tracking-[0.28em] text-ink-muted">No hay secreto. Solo atención sostenida sobre lo que vale la pena.</p>
                        </div>

                        <div className="mt-12 grid grid-cols-[1fr_340px] items-start gap-[86px]">
                            <div className="flex flex-col items-center">
                                <span className="mb-5 flex max-w-[320px] items-center gap-2 rounded-pill border border-hairline bg-surface-1 px-3 py-2 text-[10px] font-semibold uppercase text-ink">
                                    <span className="h-2 w-2 shrink-0 rounded-full bg-[#DCEB72] shadow-[0_0_8px_rgba(220,235,114,.7)]" />
                                    <span className="truncate">Misión: {FOCUS_TASK}</span>
                                    <X className="h-3 w-3 shrink-0 text-ink-muted" strokeWidth={2} />
                                </span>

                                <div className="flex items-center gap-4">
                                    <span className="flex h-8 w-8 items-center justify-center rounded-full bg-surface-1 text-ink-muted"><Minus className="h-3.5 w-3.5" /></span>
                                    <TimerRing elapsed={elapsed} running={false} />
                                    <span className="flex h-8 w-8 items-center justify-center rounded-full bg-surface-1 text-ink-muted"><Plus className="h-3.5 w-3.5" /></span>
                                </div>

                                <span className="mt-3 flex items-center gap-1 text-[9px] text-ink-muted"><Pencil className="h-3 w-3" /> 0 / 90 min hoy</span>
                                <div className="mt-4 flex gap-2">
                                    {['15m', '25m', '45m', '60m'].map((duration, index) => <span key={duration} className={`rounded-pill px-3 py-1.5 text-[9px] font-semibold ${index === 1 ? 'bg-surface-2 text-ink' : 'bg-surface-1 text-ink-muted'}`}>{duration}</span>)}
                                </div>

                                <motion.span
                                    animate={pressingStart ? { scale: .94 } : { scale: 1 }}
                                    transition={{ duration: .16 }}
                                    className="mt-5 flex h-12 w-[205px] items-center justify-center gap-4 rounded-pill bg-ink text-[11px] font-bold uppercase tracking-[0.3em] text-canvas shadow-soft-lift"
                                >
                                    Enfocar <Play className="h-4 w-4 fill-current" strokeWidth={1.7} />
                                </motion.span>
                            </div>

                            <div className="space-y-5 pt-5">
                                <div className="rounded-card border border-hairline bg-surface-1 p-5">
                                    <p className="font-display text-[18px] font-semibold italic text-ink">Racha semanal</p>
                                    <p className="mt-1 text-[9px] font-semibold uppercase tracking-[0.14em] text-ink-muted">Últimos 7 días</p>
                                    <div className="mt-5 grid grid-cols-7 gap-2">
                                        {['J', 'V', 'S', 'D', 'L', 'M', 'M'].map((day, index) => <span key={`${day}-${index}`} className="text-center"><span className={`block h-9 rounded-[7px] border border-dashed ${index === 6 ? 'border-accent' : 'border-hairline'}`} /><small className={`mt-1 block text-[8px] ${index === 6 ? 'text-accent' : 'text-ink-muted'}`}>{day}</small></span>)}
                                    </div>
                                </div>
                                <div className="rounded-card border border-hairline bg-surface-1 p-5">
                                    <div className="flex items-center justify-between"><p className="font-display text-[22px] font-semibold italic text-ink">Tu enfoque</p><span className="text-[23px] text-accent">0<small className="ml-1 text-[9px]">MIN</small></span></div>
                                    <p className="mt-1 text-[9px] font-semibold uppercase tracking-[0.14em] text-ink-muted">Sesiones de hoy</p>
                                    <div className="mt-5 rounded-medium border border-dashed border-hairline py-7 text-center text-[9px] font-semibold uppercase text-ink-muted">Sin sesiones aún</div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                ) : (
                    <motion.div
                        key="focus-running"
                        initial={{ opacity: 0, scale: 1.025 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: .65, ease: [0.16, 1, 0.3, 1] }}
                        className="absolute inset-0 flex flex-col items-center pt-[136px]"
                    >
                        <p className="max-w-[420px] text-center text-[10px] font-semibold uppercase tracking-[0.28em] text-ink-muted">Estás aquí. Eso es lo único que importa ahora.</p>
                        <span className="mb-6 mt-12 flex max-w-[330px] items-center gap-2 rounded-pill border border-hairline bg-surface-1 px-3 py-2 text-[10px] font-semibold uppercase text-ink">
                            <span className="h-2 w-2 rounded-full bg-[#DCEB72] shadow-[0_0_8px_rgba(220,235,114,.7)]" />
                            <span className="truncate">Misión: {FOCUS_TASK}</span>
                        </span>
                        <TimerRing elapsed={elapsed} running />
                        <span className="mt-16 flex h-12 w-[205px] items-center justify-center gap-4 rounded-pill bg-surface-2 text-[11px] font-bold uppercase tracking-[0.3em] text-ink">
                            Pausa <Pause className="h-4 w-4 fill-current" strokeWidth={1.7} />
                        </span>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};
