import React from 'react';
import { motion } from 'framer-motion';
import { Check, ChevronDown, Headphones, Mic, Volume2 } from 'lucide-react';

/**
 * Antesala: mismo paso que aparece siempre antes de entrar a una llamada,
 * sea sala de pizarra o reunión de invitados — elegir micrófono/salida y
 * decidir si entrar en silencio.
 */
export const LobbyDialog: React.FC<{ title: string; joinPressed: boolean }> = ({ title, joinPressed }) => (
    <motion.div
        initial={{ opacity: 0, y: 12, scale: .97 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 8, scale: .97 }}
        transition={{ duration: .3, ease: [0.16, 1, 0.3, 1] }}
        className="w-[380px] rounded-large border border-hairline bg-canvas p-6 shadow-soft-lift"
    >
        <p className="text-[16px] font-semibold text-ink">{title}</p>
        <p className="mt-1 text-[11px] text-ink-muted">Reunión rápida con invitados</p>

        <p className="mt-4 text-[9px] font-semibold uppercase tracking-[0.14em] text-ink-muted">Micrófono</p>
        <div className="mt-1.5 flex items-center justify-between gap-2 rounded-medium bg-surface-1 px-3 py-2.5 text-[12px] text-ink">
            <span className="truncate">Comunicaciones - Microphone Array (Realtek(R) A…</span>
            <ChevronDown className="h-3.5 w-3.5 shrink-0 text-ink-muted" strokeWidth={2} />
        </div>

        <p className="mt-3 text-[9px] font-semibold uppercase tracking-[0.14em] text-ink-muted">Nivel de entrada</p>
        <div className="mt-1.5 flex gap-1">
            {Array.from({ length: 12 }).map((_, i) => (
                <span key={i} className={`h-2 flex-1 rounded-full ${i < 3 ? 'bg-accent' : 'bg-surface-2'}`} />
            ))}
        </div>
        <p className="mt-1 text-[10px] text-ink-muted">Se te oye bien.</p>

        <p className="mt-3 text-[9px] font-semibold uppercase tracking-[0.14em] text-ink-muted">Salida</p>
        <div className="mt-1.5 flex items-center justify-between rounded-medium bg-surface-1 px-3 py-2.5 text-[12px] text-ink">
            Speakers (Realtek(R) Audio)
            <ChevronDown className="h-3.5 w-3.5 text-ink-muted" strokeWidth={2} />
        </div>
        <span className="mt-2 flex items-center gap-1.5 text-[11px] font-semibold text-ink-muted">
            <Volume2 className="h-3.5 w-3.5" strokeWidth={1.9} /> Probar sonido
        </span>

        <label className="mt-3 flex items-center gap-2 text-[11px] text-ink">
            <span className="flex h-4 w-4 items-center justify-center rounded-[4px] bg-ink text-canvas">
                <Check className="h-3 w-3" strokeWidth={3} />
            </span>
            Entrar con el micrófono silenciado
        </label>

        <motion.span
            animate={joinPressed ? { scale: .97 } : { scale: 1 }}
            transition={{ duration: .14 }}
            className="mt-4 flex h-11 items-center justify-center gap-2 rounded-pill bg-ink text-[13px] font-semibold text-canvas"
        >
            <Mic className="h-4 w-4" strokeWidth={2} /> Entrar a la reunión
        </motion.span>
        <span className="mt-2 flex h-11 items-center justify-center gap-2 rounded-pill bg-surface-1 text-[13px] font-semibold text-ink">
            <Headphones className="h-4 w-4" strokeWidth={2} /> Entrar solo para escuchar
        </span>
    </motion.div>
);
