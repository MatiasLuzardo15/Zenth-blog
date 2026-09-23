import React from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import {
    Hand, LogOut, MessageCircle, Mic, MicOff, Minimize2, MonitorUp,
    MoreVertical, Smile,
} from 'lucide-react';

interface MeetingCallViewProps {
    elapsed: number;
    startedAt: number;
    guestJoined: boolean;
}

const formatDuration = (ms: number) => {
    const total = Math.max(0, Math.floor(ms / 1000));
    const minutes = Math.floor(total / 60);
    const seconds = total % 60;
    return `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
};

/**
 * Reunión rápida con invitados recién creada: sin fondo personalizado
 * (bg-canvas plano), a diferencia de una sala de pizarra que sí puede
 * llevar uno. Empieza con Matías solo y un invitado se suma después.
 */
export const MeetingCallView: React.FC<MeetingCallViewProps> = ({ elapsed, startedAt, guestJoined }) => {
    const duration = formatDuration(elapsed - startedAt);
    const guestJustJoined = guestJoined && elapsed - startedAt < 3600;

    return (
        <div className="flex h-full flex-col overflow-hidden bg-canvas p-4">
            <header className="flex items-start gap-3 px-2 py-2">
                <span className="min-w-0 flex-1">
                    <span className="block truncate text-[15px] font-semibold text-ink">Reunión de Zenth</span>
                    <span className="block text-[12px] text-ink-muted">Reunión rápida con invitados · {duration}</span>
                </span>
                <span className="flex h-9 w-9 items-center justify-center rounded-pill bg-surface-1 text-ink-muted">
                    <MoreVertical className="h-4 w-4" strokeWidth={2.2} />
                </span>
                <span className="flex h-9 w-9 items-center justify-center rounded-pill bg-surface-1 text-ink-muted">
                    <MessageCircle className="h-4 w-4" strokeWidth={2.2} />
                </span>
                <span className="flex h-9 w-9 items-center justify-center rounded-pill bg-surface-1 text-ink-muted">
                    <Minimize2 className="h-4 w-4" strokeWidth={2.2} />
                </span>
            </header>

            <div className="flex min-h-0 flex-1 items-center justify-center gap-4 p-6">
                <div className="flex min-w-0 flex-1 max-w-[280px] flex-col items-center justify-center gap-2 rounded-card border border-hairline p-6">
                    <span className="flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-[#0d4f5e] to-[#33236b] text-[18px] font-semibold text-white">M</span>
                    <span className="truncate text-[13px] text-ink">Matías <span className="text-ink-muted">· Tú</span></span>
                    <span className="flex items-center gap-1 text-[12px] font-semibold text-[#ea580c]">
                        <MicOff className="h-3 w-3" strokeWidth={2.4} /> silenciado
                    </span>
                </div>

                <AnimatePresence>
                    {guestJoined && (
                        <motion.div
                            initial={{ opacity: 0, scale: .92 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: .4, ease: [0.16, 1, 0.3, 1] }}
                            className="flex min-w-0 flex-1 max-w-[280px] flex-col items-center justify-center gap-2 rounded-card border border-hairline p-6"
                        >
                            <span className="flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-[#7a2c4a] to-[#c1553f] text-[18px] font-semibold text-white">S</span>
                            <span className="truncate text-[13px] text-ink">Sofía <span className="text-ink-muted">· Invitada</span></span>
                            <span className="flex items-center gap-1 text-[12px] text-ink-muted">
                                <Mic className="h-3 w-3" strokeWidth={2.4} /> activo
                            </span>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>

            <AnimatePresence>
                {guestJustJoined && (
                    <motion.span
                        initial={{ opacity: 0, y: 8, scale: .96 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: -6 }}
                        transition={{ duration: .28, ease: [0.16, 1, 0.3, 1] }}
                        className="mx-auto flex items-center gap-2 rounded-pill bg-surface-1 px-3 py-1.5 text-[11px] font-semibold text-ink shadow-card-resting"
                    >
                        <span className="h-2 w-2 rounded-full bg-accent" /> Sofía se unió a la reunión
                    </motion.span>
                )}
            </AnimatePresence>

            <footer className="flex items-center justify-center gap-2 py-3">
                <span className="flex h-11 overflow-hidden rounded-pill border border-hairline bg-surface-1">
                    <span className="flex w-12 items-center justify-center text-[#ea580c]">
                        <MicOff className="h-[17px] w-[17px]" strokeWidth={2.3} />
                    </span>
                </span>
                <span className="flex h-11 w-12 items-center justify-center rounded-pill border border-hairline bg-surface-1 text-ink">
                    <MonitorUp className="h-[17px] w-[17px]" strokeWidth={2.3} />
                </span>
                <span className="flex h-11 w-11 items-center justify-center rounded-pill border border-hairline bg-surface-1 text-ink">
                    <Smile className="h-[18px] w-[18px]" strokeWidth={2.2} />
                </span>
                <span className="flex h-11 w-11 items-center justify-center rounded-pill border border-hairline bg-surface-1 text-ink">
                    <Hand className="h-[17px] w-[17px]" strokeWidth={2.2} />
                </span>
                <span className="flex h-11 items-center justify-center gap-1.5 rounded-pill bg-[#B91C1C] px-4 text-[13px] font-semibold text-white">
                    <LogOut className="h-[15px] w-[15px]" strokeWidth={2.4} /> Salir
                </span>
            </footer>
        </div>
    );
};
