import React from 'react';
import { motion } from 'framer-motion';
import { CalendarDays, Check, ChevronRight, Clock3, Link2, Plus, Users, Video } from 'lucide-react';

interface MeetingHubViewProps {
    stage: 'editing' | 'preparing' | 'ready';
}

/** Superficie de Reuniones que acompaña la creación de una sala desde Agenda. */
export const MeetingHubView: React.FC<MeetingHubViewProps> = ({ stage }) => {
    const isReady = stage === 'ready';

    return (
        <div className="flex h-full gap-5 bg-surface-1 p-5">
            <aside className="flex w-[272px] shrink-0 flex-col gap-3 rounded-card bg-canvas p-4">
                <div className="flex items-center justify-between">
                    <span className="text-[14px] font-semibold text-ink">Reuniones</span>
                    <span className="flex h-8 w-8 items-center justify-center rounded-medium bg-surface-2 text-ink-muted">
                        <Plus className="h-4 w-4" strokeWidth={2.2} />
                    </span>
                </div>

                <div className="grid grid-cols-2 gap-2">
                    <span className="flex min-h-[88px] flex-col justify-between rounded-medium bg-surface-1 p-3 text-ink">
                        <Video className="h-4 w-4" strokeWidth={2.1} />
                        <span className="text-[11px] font-semibold">Reunión express</span>
                    </span>
                    <span className="flex min-h-[88px] flex-col justify-between rounded-medium bg-surface-1 p-3 text-ink">
                        <Link2 className="h-4 w-4" strokeWidth={2.1} />
                        <span className="text-[11px] font-semibold">Crear enlace</span>
                    </span>
                </div>

                <div className="mt-2 border-t border-hairline-soft pt-3">
                    <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-ink-muted">Tus salas</p>
                    <div className="mt-2 flex items-center gap-2 rounded-medium bg-surface-1 px-3 py-2.5">
                        <span className="flex h-8 w-8 items-center justify-center rounded-[10px] bg-[#E1EF91] text-black">
                            <Users className="h-4 w-4" strokeWidth={2} />
                        </span>
                        <span className="min-w-0 flex-1">
                            <span className="block truncate text-[11px] font-semibold text-ink">Equipo de producto</span>
                            <span className="block text-[10px] text-ink-muted">Sin actividad</span>
                        </span>
                    </div>
                </div>
            </aside>

            <main className="flex min-w-0 flex-1 flex-col rounded-card bg-canvas p-6">
                <div className="flex items-start justify-between">
                    <div>
                        <p className="font-display text-[30px] leading-none tracking-[-0.045em] text-ink">Reuniones</p>
                        <p className="mt-2 text-[12px] text-ink-muted">Tus próximas conversaciones y salas activas.</p>
                    </div>
                    <span className="flex items-center gap-1.5 rounded-pill bg-surface-2 px-3 py-1.5 text-[11px] font-semibold text-ink">
                        <CalendarDays className="h-3.5 w-3.5" strokeWidth={2} /> Hoy
                    </span>
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: .32, ease: [0.16, 1, 0.3, 1] }}
                    className="mt-7 rounded-large border border-hairline bg-surface-1 p-5"
                >
                    <div className="flex items-start gap-4">
                        <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-medium bg-gradient-to-br from-grad-violet to-grad-magenta text-white">
                            <Video className="h-5 w-5" strokeWidth={2} />
                        </span>
                        <span className="min-w-0 flex-1">
                            <span className="flex items-center gap-2">
                                <span className="truncate text-[16px] font-semibold text-ink">Reunión de equipo</span>
                                {isReady && <span className="h-2 w-2 rounded-full bg-accent" />}
                            </span>
                            <span className="mt-1 flex items-center gap-1.5 text-[11px] text-ink-muted">
                                <Clock3 className="h-3.5 w-3.5" strokeWidth={1.9} /> Hoy · 9:00 AM
                            </span>
                        </span>
                        <span className={`flex items-center gap-1.5 rounded-pill px-3 py-1.5 text-[11px] font-semibold ${isReady ? 'bg-accent text-white' : 'bg-canvas text-ink'}`}>
                            {isReady ? <><Check className="h-3.5 w-3.5" strokeWidth={2.5} /> Lista</> : 'Preparando…'}
                        </span>
                    </div>
                    <div className="mt-5 flex items-center justify-between border-t border-hairline-soft pt-4">
                        <span className="text-[11px] text-ink-muted">Enlace de invitación creado</span>
                        <span className="flex items-center gap-1 text-[11px] font-semibold text-ink">Abrir sala <ChevronRight className="h-3.5 w-3.5" strokeWidth={2} /></span>
                    </div>
                </motion.div>
            </main>
        </div>
    );
};
