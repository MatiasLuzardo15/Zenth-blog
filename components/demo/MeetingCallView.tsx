import React from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import {
    AudioLines, CalendarClock, ChevronRight, Expand, Hand, Link2, LogOut,
    MessageCircle, Mic, MicOff, MonitorUp, MoreVertical, Smile, Sparkles,
    Target, Users, Video, ChevronUp,
} from 'lucide-react';
import { GUEST_JOIN_AT, MEETING_TITLE } from './timeline';

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

const ROOMS = [
    { icon: Sparkles, name: 'Plan de lanzamiento' },
    { icon: Target, name: 'Propuesta comercial' },
    { icon: Users, name: 'Equipo de producto' },
];

/**
 * Sección Reuniones con la reunión rápida recién creada ya abierta: a la
 * izquierda el directorio (con la reunión marcada «Estás dentro») y a la
 * derecha la llamada, sin fondo personalizado. Un invitado se suma después.
 */
export const MeetingCallView: React.FC<MeetingCallViewProps> = ({ elapsed, startedAt, guestJoined }) => {
    const duration = formatDuration(elapsed - startedAt);
    const justJoined = guestJoined && elapsed < GUEST_JOIN_AT + 2600;

    return (
        <div className="flex h-full bg-[#f6f7fb] dark:bg-black">
            <aside className="flex w-[312px] shrink-0 flex-col px-4 pb-6 pt-6">
                <div className="grid grid-cols-3 gap-2">
                    {[
                        { icon: Link2, label: 'Crear enlace', off: false },
                        { icon: Video, label: 'Reunión express', off: true },
                        { icon: CalendarClock, label: 'Programar', off: false },
                    ].map(({ icon: Icon, label, off }) => (
                        <span key={label} className={`flex min-h-[104px] flex-col items-start justify-between rounded-large bg-canvas p-3 ${off ? 'opacity-45' : ''}`}>
                            <span className="flex h-9 w-9 items-center justify-center rounded-[13px] bg-white text-ink shadow-card-resting dark:bg-surface-2">
                                <Icon className="h-4 w-4" strokeWidth={2.2} />
                            </span>
                            <span className="text-[13px] font-semibold leading-[1.2] text-ink">{label}</span>
                        </span>
                    ))}
                </div>

                <div className="mt-4 h-px bg-hairline" />

                <p className="mt-4 px-2.5 text-[13px] font-semibold text-ink">
                    Salas de tus pizarras
                    <span className="ml-2 text-[12px] font-normal tabular-nums text-ink-muted">3</span>
                </p>
                <ul className="mt-2 space-y-1.5">
                    {ROOMS.map(({ icon: Icon, name }) => (
                        <li key={name} className="flex min-h-[56px] items-center gap-3 rounded-medium py-2 pl-2.5 pr-1">
                            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-[14px] bg-surface-2 text-ink">
                                <Icon className="h-[18px] w-[18px]" strokeWidth={2.2} />
                            </span>
                            <span className="min-w-0 flex-1">
                                <span className="block truncate text-[14px] font-semibold text-ink">{name}</span>
                                <span className="mt-0.5 block text-[12px] text-ink-muted">2 integrantes</span>
                            </span>
                            <Mic className="h-4 w-4 text-ink-muted opacity-50" strokeWidth={2} />
                            <ChevronRight className="mr-2 h-4 w-4 text-ink-muted" strokeWidth={2.2} />
                        </li>
                    ))}
                </ul>

                <div className="mt-5">
                    <p className="px-2.5 text-[13px] font-semibold text-ink">Reuniones programadas</p>
                    <p className="mt-1 px-2.5 text-[12px] leading-relaxed text-ink-muted">
                        Una llamada aislada, sin dar acceso a tus pizarras.
                    </p>
                    <div className="mt-2 flex min-h-[56px] items-center gap-3 rounded-medium bg-canvas px-2.5 py-2">
                        <span className="relative flex h-10 w-10 shrink-0 items-center justify-center rounded-[14px] bg-surface-2 text-ink">
                            <CalendarClock className="h-[18px] w-[18px]" strokeWidth={2.2} />
                            <span className="absolute -right-0.5 -top-0.5 h-2.5 w-2.5 rounded-full border-2 border-surface-1 bg-accent" />
                        </span>
                        <span className="min-w-0 flex-1">
                            <span className="block truncate text-[14px] font-semibold text-ink">{MEETING_TITLE}</span>
                            <span className="mt-0.5 block text-[12px] text-accent">Estás dentro</span>
                        </span>
                        <AudioLines className="h-4 w-4 shrink-0 text-ink-muted" strokeWidth={2} />
                    </div>
                </div>
            </aside>

            <div className="relative mb-3 mr-3 mt-2 flex min-h-0 min-w-0 flex-1 flex-col overflow-hidden rounded-[16px] bg-canvas">
                <header className="flex items-start gap-3 px-4 py-3">
                    <span className="min-w-0 flex-1">
                        <span className="block truncate text-[15px] font-semibold text-ink">{MEETING_TITLE}</span>
                        <span className="block text-[12px] text-ink-muted">Reunión rápida con invitados · {duration}</span>
                    </span>
                    {[MoreVertical, MessageCircle, Expand].map((Icon, i) => (
                        <span key={i} className="flex h-9 w-9 items-center justify-center rounded-pill border border-hairline text-ink">
                            <Icon className="h-4 w-4" strokeWidth={2.2} />
                        </span>
                    ))}
                </header>

                <div className="flex min-h-0 flex-1 items-center justify-center gap-3 px-4">
                    <div className="flex min-w-0 flex-1 flex-col items-center justify-center gap-2 rounded-card border border-hairline bg-surface-1 py-6">
                        <span className="flex h-24 w-24 items-center justify-center rounded-full bg-gradient-to-br from-[#0d4f5e] to-[#33236b] text-[20px] font-semibold text-white">M</span>
                        <span className="truncate text-[13px] text-ink">Matías <span className="text-ink-muted">· Tú</span></span>
                        <span className="flex items-center gap-1 text-[12px] font-semibold text-[#ea580c]">
                            <MicOff className="h-3 w-3" strokeWidth={2.4} /> silenciado
                        </span>
                    </div>

                    <AnimatePresence>
                        {guestJoined && (
                            <motion.div
                                initial={{ opacity: 0, scale: .94 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: .4, ease: [0.16, 1, 0.3, 1] }}
                                className="flex min-w-0 flex-1 flex-col items-center justify-center gap-2 rounded-card border border-hairline bg-surface-1 py-6"
                            >
                                <span className="flex h-24 w-24 items-center justify-center rounded-full bg-gradient-to-br from-[#7a2c4a] to-[#c1553f] text-[20px] font-semibold text-white">S</span>
                                <span className="truncate text-[13px] text-ink">Sofía <span className="text-ink-muted">· Invitada</span></span>
                                <span className="flex items-center gap-1 text-[12px] text-ink-muted">
                                    <Mic className="h-3 w-3" strokeWidth={2.4} /> activo
                                </span>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>

                <AnimatePresence>
                    {justJoined && (
                        <motion.span
                            initial={{ opacity: 0, y: -8 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -6 }}
                            transition={{ duration: .3, ease: [0.16, 1, 0.3, 1] }}
                            className="absolute left-1/2 top-16 flex -translate-x-1/2 items-center gap-2 rounded-pill border border-hairline bg-canvas px-3 py-1.5 text-[11px] font-semibold text-ink"
                        >
                            <span className="h-2 w-2 rounded-full bg-accent" /> Sofía se unió a la reunión
                        </motion.span>
                    )}
                </AnimatePresence>

                <footer className="flex items-center justify-center gap-2 px-4 py-3">
                    <span className="flex h-11 overflow-hidden rounded-pill border border-[#ea580c]/35 bg-[#ea580c]/12 text-[#ea580c]">
                        <span className="flex w-12 items-center justify-center"><MicOff className="h-[17px] w-[17px]" strokeWidth={2.3} /></span>
                        <span className="flex w-7 items-center justify-center border-l border-[#ea580c]/35"><ChevronUp className="h-3.5 w-3.5" strokeWidth={2.5} /></span>
                    </span>
                    {[MonitorUp, Smile, Hand].map((Icon, i) => (
                        <span key={i} className="flex h-11 w-11 items-center justify-center rounded-pill border border-hairline text-ink">
                            <Icon className="h-[17px] w-[17px]" strokeWidth={2.2} />
                        </span>
                    ))}
                    <span className="flex h-11 items-center justify-center gap-1.5 rounded-pill bg-[#B91C1C] px-4 text-[13px] font-semibold text-white">
                        <LogOut className="h-[15px] w-[15px]" strokeWidth={2.4} /> Salir
                    </span>
                </footer>
            </div>
        </div>
    );
};
