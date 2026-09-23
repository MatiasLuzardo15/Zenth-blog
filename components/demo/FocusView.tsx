import React from 'react';
import { motion } from 'framer-motion';
import {
    BarChart3, ChevronRight, History, Pause, Play, Shuffle, SkipBack,
    SkipForward, Waves, X,
} from 'lucide-react';
import { FOCUS_RUNNING_AT, FOCUS_START_AT, FOCUS_TASK } from './timeline';

interface FocusViewProps {
    elapsed: number;
}

/** Único acento del sistema real — nunca se combina con otro color cromático. */
const RING_ACCENT = '#0099ff';

const formatCountdown = (seconds: number) => {
    const minutes = Math.floor(seconds / 60).toString().padStart(2, '0');
    const rest = (seconds % 60).toString().padStart(2, '0');
    return `${minutes}:${rest}`;
};

const TimerRing: React.FC<{ remaining: number; label: string }> = ({ remaining, label }) => (
    <div
        className="relative flex h-[148px] w-[148px] items-center justify-center rounded-full"
        style={{ background: `repeating-conic-gradient(${RING_ACCENT} 0deg 2.4deg, transparent 2.4deg 6deg)` }}
    >
        <div className="flex h-[126px] w-[126px] flex-col items-center justify-center rounded-full bg-canvas">
            <motion.span
                key={remaining}
                initial={{ opacity: .6, y: 2 }}
                animate={{ opacity: 1, y: 0 }}
                className="font-display text-[28px] font-semibold leading-none tracking-[-0.045em] text-ink"
            >
                {formatCountdown(remaining)}
            </motion.span>
            <span className="mt-1.5 max-w-[104px] truncate text-[9px] text-ink-muted">{label}</span>
        </div>
    </div>
);

/**
 * Panel flotante de Enfoque, no una vista de página: en la app real se abre
 * como un popover de ~360px sobre lo que estabas haciendo, nunca reemplaza
 * la sección activa.
 */
export const FocusView: React.FC<FocusViewProps> = ({ elapsed }) => {
    const running = elapsed >= FOCUS_RUNNING_AT;
    const pressingStart = elapsed >= FOCUS_START_AT && elapsed < FOCUS_RUNNING_AT;
    const spent = running ? Math.max(0, Math.floor((elapsed - FOCUS_RUNNING_AT) / 1000)) : 0;
    const remaining = Math.max(0, 25 * 60 - spent);
    const minutesToday = Math.floor(spent / 60);

    return (
        <motion.div
            initial={{ opacity: 0, y: -8, scale: .97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: .45, ease: [0.16, 1, 0.3, 1] }}
            className="w-[360px] rounded-large border border-hairline bg-canvas p-5 shadow-soft-lift"
        >
            <div className="flex items-center justify-between">
                <span className="text-[10px] font-semibold uppercase tracking-[0.14em] text-ink-muted">Enfoque</span>
                <div className="flex items-center gap-1">
                    {[History, BarChart3, Shuffle].map((Icon, i) => (
                        <span key={i} className="flex h-7 w-7 items-center justify-center rounded-medium text-ink-muted">
                            <Icon className="h-3.5 w-3.5" strokeWidth={1.9} />
                        </span>
                    ))}
                    <span className="flex h-7 w-7 items-center justify-center rounded-medium text-ink-muted">
                        <X className="h-3.5 w-3.5" strokeWidth={2.1} />
                    </span>
                </div>
            </div>

            <div className="mt-3 flex flex-col items-center">
                <span className="mb-3 flex max-w-full items-center gap-1.5 rounded-pill border border-hairline bg-surface-1 px-2.5 py-1.5 text-[9px] font-semibold text-ink">
                    <span className="h-1.5 w-1.5 shrink-0 rounded-full" style={{ backgroundColor: RING_ACCENT }} />
                    <span className="truncate">Misión: {FOCUS_TASK}</span>
                    <X className="h-2.5 w-2.5 shrink-0 text-ink-muted" strokeWidth={2.4} />
                </span>

                <TimerRing remaining={remaining} label={running ? FOCUS_TASK : 'Sesión de enfoque'} />

                <p className="mt-3 text-[11px] text-ink-muted">{minutesToday} min hoy</p>

                <div className="mt-4 flex flex-wrap items-center justify-center gap-1.5">
                    {['15m', '25m', '45m', '60m', 'Sin duración'].map((duration, i) => (
                        <span
                            key={duration}
                            className={`rounded-pill px-2.5 py-1.5 text-[10px] font-semibold ${i === 1 ? 'bg-surface-2 text-ink' : 'bg-surface-1 text-ink-muted'}`}
                        >
                            {duration}
                        </span>
                    ))}
                </div>

                <motion.span
                    animate={pressingStart ? { scale: .95 } : { scale: 1 }}
                    transition={{ duration: .16 }}
                    className="mt-4 flex h-11 w-full items-center justify-center gap-2 rounded-pill bg-ink text-[12px] font-bold text-canvas"
                >
                    {running
                        ? <>Pausar <Pause className="h-4 w-4 fill-current" strokeWidth={1.7} /></>
                        : <>Enfocar <Play className="h-4 w-4 fill-current" strokeWidth={1.7} /></>}
                </motion.span>
            </div>

            <div className="mt-4 flex items-center gap-2 rounded-medium bg-surface-1 px-3 py-2.5">
                <Waves className="h-4 w-4 shrink-0 text-ink-muted" strokeWidth={1.9} />
                <span className="min-w-0 flex-1">
                    <span className="block text-[11px] font-semibold text-ink">Sin sonido</span>
                    <span className="block text-[9px] text-ink-muted">Toca para elegir</span>
                </span>
                <SkipBack className="h-3.5 w-3.5 shrink-0 text-ink-muted" strokeWidth={1.9} />
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-surface-2 text-ink">
                    <Play className="h-3 w-3 fill-current" strokeWidth={0} />
                </span>
                <SkipForward className="h-3.5 w-3.5 shrink-0 text-ink-muted" strokeWidth={1.9} />
                <ChevronRight className="h-3.5 w-3.5 shrink-0 text-ink-muted" strokeWidth={1.9} />
            </div>
        </motion.div>
    );
};
