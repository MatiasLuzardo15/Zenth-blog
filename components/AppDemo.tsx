import React, { useEffect, useLayoutEffect, useMemo, useRef, useState } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import {
    AlignLeft, Bell, Calendar, Check, Flame, LayoutDashboard,
    LibraryBig, MousePointer2, Pencil, PhoneCall, Search, Target, Timer, Trash2, X,
} from 'lucide-react';
import { TodayView } from './demo/TodayView';
import { BoardView } from './demo/BoardView';
import { FocusView } from './demo/FocusView';
import { LobbyDialog } from './demo/LobbyDialog';
import { MeetingCallView } from './demo/MeetingCallView';
import { MeetingHubView } from './demo/MeetingHubView';
import {
    DetailsPanel, EditPanel, FocusTaskPanel, MeetingEditPanel, MeetingPreparingPanel,
} from './demo/panels';
import {
    APPEARS_AT, ARCHIVE_AT, ARCHIVE2_AT, BOARD_AT, CALL_END, CALL_VIEW_AT,
    COMPLETES_AT, CYCLE, DAY_CLICK_AT, DAY_HOVER_AT, DESIGN_H, DESIGN_W, DETAILS_AT,
    DRAG1_AT, DRAG2_AT, DRAG3_AT, EDIT_AT, FOCUS_ACTION_AT, FOCUS_END,
    FOCUS_RUNNING_AT, FOCUS_START_AT, FOCUS_VIEW_AT, GUEST_JOIN_AT, LOBBY_AT,
    LOBBY_JOIN_CLICK_AT, MEETING_ADD_CLICK_AT, MEETING_ADD_HOVER,
    MEETING_CREATED_AT, MEETING_LINK_CLICK_AT, MEETING_LINK_HOVER,
    MEETING_MENU_CLOSE_AT, MEETING_OPEN_AT, MEETING_PREPARING_AT,
    MEETING_TITLE, MIN_SCALE, MONTH_CLICK_AT, MONTH_HOVER_AT, NEW1_OPEN, PANEL_CLOSE_AT,
    PRESS_AT, RETURN_TODAY_AT, SWAP_AT, TASK_OPEN_AT, TODAY_TASK, TYPE_END,
    TYPE_START, VIEWS_END_AT, VIEWS_START_AT, WEEK_CLICK_AT, WEEK_HOVER_AT, typewriter,
} from './demo/timeline';

const NAV = [
    { label: 'Agenda', icon: Calendar },
    { label: 'Pizarras', icon: LayoutDashboard },
    { label: 'Biblioteca', icon: LibraryBig },
    { label: 'Reuniones', icon: PhoneCall },
];

/**
 * Punto horizontal que sigue la cámara en pantallas estrechas. Los cambios se
 * adelantan unos milisegundos al gesto que se va a mostrar: así la cámara ya
 * está quieta cuando aparece el panel, la tarjeta arrastrada o el checkbox.
 */
const boardCameraFocus = (elapsed: number) => {
    const lead = 650;
    if (elapsed < NEW1_OPEN) return .42;
    // Las tres altas ocurren casi seguidas: mantener el panel a la vista evita
    // que la cámara rebote entre la columna Inicio y el editor.
    if (elapsed < DRAG1_AT - lead) return .84;
    if (elapsed < DRAG2_AT - lead) return .14;
    if (elapsed < DRAG3_AT - lead) return .55;
    if (elapsed < SWAP_AT - lead) return .32;
    if (elapsed < ARCHIVE_AT - lead) return .12;
    if (elapsed < ARCHIVE2_AT - lead) return .64;
    return .16;
};

/**
 * Demo animada del producto. El primer acto muestra Agenda; cuando termina,
 * el segundo entra en Pizarras y usa un tablero completo. Todo deriva
 * de `elapsed`, por lo que el bucle no acumula timeouts ni se desincroniza.
 */
const AppDemo: React.FC = () => {
    const reduceMotion = useReducedMotion();
    const wrapRef = useRef<HTMLDivElement>(null);
    const frameRef = useRef<HTMLDivElement>(null);
    const [box, setBox] = useState({ scale: 1, width: DESIGN_W });
    const [elapsed, setElapsed] = useState(0);
    const [inView, setInView] = useState(true);

    useLayoutEffect(() => {
        const node = frameRef.current;
        if (!node) return;
        const apply = () => {
            const width = node.clientWidth;
            setBox({ scale: Math.max(width / DESIGN_W, MIN_SCALE), width });
        };
        apply();
        if (typeof ResizeObserver === 'undefined') {
            window.addEventListener('resize', apply);
            return () => window.removeEventListener('resize', apply);
        }
        const observer = new ResizeObserver(apply);
        observer.observe(node);
        return () => observer.disconnect();
    }, []);

    useEffect(() => {
        const node = wrapRef.current;
        if (!node || typeof IntersectionObserver === 'undefined') return;
        const observer = new IntersectionObserver(([entry]) => setInView(entry.isIntersecting), { threshold: 0.1 });
        observer.observe(node);
        return () => observer.disconnect();
    }, []);

    useEffect(() => {
        const DEBUG_FREEZE = Number(new URLSearchParams(window.location.search).get('freeze'));
        if (DEBUG_FREEZE) { setElapsed(DEBUG_FREEZE); return; }
        if (reduceMotion) {
            setElapsed(COMPLETES_AT + 800);
            return;
        }
        if (!inView) return;
        const startedAt = performance.now();
        const id = window.setInterval(() => setElapsed((performance.now() - startedAt) % CYCLE), 60);
        return () => window.clearInterval(id);
    }, [reduceMotion, inView]);

    const { scale, width: frameWidth } = box;
    const overflowX = Math.max(0, DESIGN_W * scale - frameWidth);
    const boardActive = elapsed >= BOARD_AT && elapsed < RETURN_TODAY_AT;
    const focusActive = elapsed >= FOCUS_VIEW_AT && elapsed < FOCUS_END;
    const returningToday = elapsed >= RETURN_TODAY_AT && elapsed < FOCUS_VIEW_AT;

    const meetingPanelActive = elapsed >= MEETING_OPEN_AT && elapsed < LOBBY_AT;
    const meetingStage: 'collapsed' | 'picking' | 'created' = elapsed < MEETING_ADD_CLICK_AT
        ? 'collapsed'
        : elapsed < MEETING_CREATED_AT ? 'picking' : 'created';
    const serviceMenuOpen = elapsed >= MEETING_ADD_CLICK_AT && elapsed < MEETING_MENU_CLOSE_AT;
    const showLinkToast = elapsed >= MEETING_CREATED_AT && elapsed < MEETING_CREATED_AT + 2000;
    const meetingPanelView: 'edit' | 'preparing' = elapsed < MEETING_PREPARING_AT ? 'edit' : 'preparing';
    const lobbyActive = elapsed >= LOBBY_AT && elapsed < CALL_VIEW_AT;
    const lobbyJoinPressed = elapsed >= LOBBY_JOIN_CLICK_AT && elapsed < LOBBY_JOIN_CLICK_AT + 280;
    const callViewActive = elapsed >= CALL_VIEW_AT && elapsed < CALL_END;
    const guestJoined = elapsed >= GUEST_JOIN_AT && elapsed < CALL_END;
    const meetingsActive = elapsed >= MEETING_OPEN_AT && elapsed < CALL_END;

    const typed = useMemo(
        () => elapsed >= PRESS_AT ? '' : typewriter(TODAY_TASK, elapsed, TYPE_START, TYPE_END),
        [elapsed]
    );
    const isTyping = elapsed >= TYPE_START && elapsed < TYPE_END;
    const isPressing = elapsed >= TYPE_END && elapsed < PRESS_AT;
    const added = elapsed >= APPEARS_AT;
    const completed = elapsed >= COMPLETES_AT;
    const celebrating = completed && elapsed < COMPLETES_AT + 1600;
    const agendaView = elapsed < WEEK_CLICK_AT || elapsed >= DAY_CLICK_AT ? 'day'
        : elapsed < MONTH_CLICK_AT ? 'week'
            : 'month';
    const hoveredAgendaView = elapsed >= WEEK_HOVER_AT && elapsed < WEEK_CLICK_AT ? 'week'
        : elapsed >= MONTH_HOVER_AT && elapsed < MONTH_CLICK_AT ? 'month'
            : elapsed >= DAY_HOVER_AT && elapsed < DAY_CLICK_AT ? 'day'
                : undefined;

    const panel: 'none' | 'details' | 'edit' | 'task' | 'meeting' = meetingPanelActive
        ? 'meeting'
        : returningToday && elapsed >= TASK_OPEN_AT
            ? 'task'
            : boardActive || focusActive || elapsed >= PANEL_CLOSE_AT
                ? 'none'
                : elapsed >= EDIT_AT
                    ? 'edit'
                    : elapsed >= DETAILS_AT
                        ? 'details'
                        : 'none';

    /** En móvil, la cámara sigue la zona donde está ocurriendo la acción. */
    const cropFocus = callViewActive || lobbyActive
        ? .5
        : meetingPanelActive
            ? .86
            : focusActive
                ? .9
                : boardActive
                    ? boardCameraFocus(elapsed)
                    : returningToday
                        ? (panel === 'task' ? .72 : .86)
                        : (elapsed < PRESS_AT || elapsed > CYCLE - 1200 ? .02 : .98);

    const journeyCursor = elapsed >= VIEWS_START_AT && elapsed < VIEWS_END_AT
        ? elapsed < WEEK_CLICK_AT + 280
            ? { x: 826, y: 127, click: elapsed >= WEEK_CLICK_AT }
            : elapsed < MONTH_HOVER_AT
                ? { x: 1126, y: 127, click: false }
                : elapsed < DAY_HOVER_AT
                    ? { x: 1204, y: 127, click: elapsed >= MONTH_CLICK_AT && elapsed < MONTH_CLICK_AT + 280 }
                    : elapsed < DAY_CLICK_AT
                        ? { x: 1048, y: 127, click: false }
                        : { x: 748, y: 127, click: elapsed < DAY_CLICK_AT + 280 }
        : elapsed < TASK_OPEN_AT
            ? { x: 1082, y: 196, click: elapsed >= TASK_OPEN_AT - 320 }
        : elapsed < FOCUS_VIEW_AT
            ? { x: 755, y: 205, click: elapsed >= FOCUS_ACTION_AT && elapsed < FOCUS_ACTION_AT + 380 }
            : elapsed < MEETING_OPEN_AT
                ? { x: 1076, y: 446, click: elapsed >= FOCUS_START_AT && elapsed < FOCUS_RUNNING_AT }
                : elapsed < MEETING_LINK_HOVER
                    ? { x: 1230, y: 420, click: elapsed >= MEETING_ADD_CLICK_AT && elapsed < MEETING_ADD_CLICK_AT + 280 }
                    : elapsed < LOBBY_AT
                        ? { x: 970, y: 495, click: elapsed >= MEETING_LINK_CLICK_AT && elapsed < MEETING_LINK_CLICK_AT + 280 }
                        : { x: 640, y: 534, click: lobbyJoinPressed };
    const showJourneyCursor = (elapsed >= WEEK_HOVER_AT - 240 && elapsed < VIEWS_END_AT)
        || (elapsed >= RETURN_TODAY_AT + 650 && elapsed < FOCUS_RUNNING_AT + 500)
        || (elapsed >= MEETING_ADD_HOVER - 300 && elapsed < LOBBY_JOIN_CLICK_AT + 400);

    return (
        <div
            ref={wrapRef}
            className="fr-card fr-elevated relative overflow-hidden p-1.5 sm:p-2"
            role="img"
            aria-label="Demostración de Zenth: organiza una tarea en Agenda, trabaja con una pizarra e inicia Enfoque sin abandonar su contexto."
        >
            <div
                ref={frameRef}
                className="relative w-full overflow-hidden rounded-large bg-canvas"
                style={{ height: `${DESIGN_H * scale}px` }}
                aria-hidden="true"
            >
                <div
                    className="absolute left-0 top-0 origin-top-left"
                    style={{
                        width: `${DESIGN_W}px`,
                        height: `${DESIGN_H}px`,
                        transform: `translateX(${-overflowX * cropFocus}px) scale(${scale})`,
                        transition: reduceMotion ? undefined : 'transform 720ms cubic-bezier(0.65, 0, 0.35, 1)',
                    }}
                >
                    <div className="flex h-[72px] items-center justify-between bg-canvas px-6">
                        <div className="flex items-center gap-2.5">
                            <img src="/blog/favicon2.png" alt="" className="h-7 w-7 rounded-[7px] object-contain" />
                            <div className="leading-tight">
                                <p className="text-[12px] text-ink-muted">Buenas tardes,</p>
                                <p className="text-[13px] font-semibold text-ink">Matías</p>
                            </div>
                        </div>

                        <nav className="flex items-center gap-1 rounded-pill bg-surface-1 p-1">
                            {NAV.map(({ label, icon: Icon }, index) => {
                                const active = meetingsActive ? index === 3 : boardActive ? index === 1 : index === 0;
                                return (
                                    <motion.span
                                        layout
                                        key={label}
                                        className={`relative flex items-center gap-2 rounded-pill px-4 py-2 text-[13px] ${active ? 'font-semibold text-ink' : 'text-ink-muted'}`}
                                    >
                                        {active && <motion.span layoutId="demo-nav-active" className="absolute inset-0 rounded-pill bg-canvas shadow-card-resting" transition={{ duration: .45, ease: [0.16, 1, 0.3, 1] }} />}
                                        <Icon className="relative h-4 w-4" strokeWidth={1.9} />
                                        <span className="relative">{label}</span>
                                    </motion.span>
                                );
                            })}
                        </nav>

                        <div className="flex items-center gap-2">
                            <span className="flex h-9 w-9 items-center justify-center rounded-pill bg-surface-1 text-ink-muted">
                                <Search className="h-4 w-4" strokeWidth={1.9} />
                            </span>
                            <span className={`flex h-9 w-9 items-center justify-center rounded-pill text-ink-muted ${focusActive ? 'bg-canvas font-semibold text-accent shadow-card-resting' : 'bg-surface-1'}`}>
                                <Timer className="h-4 w-4" strokeWidth={1.9} />
                            </span>
                            <span className="flex h-9 w-9 items-center justify-center rounded-pill bg-surface-1 text-ink-muted">
                                <Bell className="h-4 w-4" strokeWidth={1.9} />
                            </span>
                            <span className="relative flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br from-grad-violet to-grad-magenta text-[12px] font-semibold text-white">
                                M
                                <span className="absolute -bottom-0.5 -right-0.5 flex h-3.5 w-3.5 items-center justify-center rounded-full border-2 border-canvas bg-accent">
                                    <Flame className="h-2 w-2 text-white" fill="currentColor" strokeWidth={0} />
                                </span>
                            </span>
                        </div>
                    </div>

                    <div className="relative h-[728px] overflow-visible">
                        <AnimatePresence mode="wait" initial={false}>
                            {callViewActive ? (
                                <motion.div
                                    key="call-view"
                                    initial={{ opacity: 0, scale: .98 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0 }}
                                    transition={{ duration: .5, ease: [0.16, 1, 0.3, 1] }}
                                    className="absolute inset-0"
                                >
                                    <MeetingCallView elapsed={elapsed} startedAt={CALL_VIEW_AT} guestJoined={guestJoined} />
                                </motion.div>
                            ) : boardActive ? (
                                <motion.div
                                    key="board-view"
                                    initial={{ opacity: 0, x: 36 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: -24 }}
                                    transition={{ duration: .55, ease: [0.16, 1, 0.3, 1] }}
                                    className="absolute inset-0"
                                >
                                    <BoardView elapsed={elapsed} />
                                </motion.div>
                            ) : meetingsActive ? (
                                <motion.div
                                    key="meetings-view"
                                    initial={{ opacity: 0, x: 24 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: -24 }}
                                    transition={{ duration: .48, ease: [0.16, 1, 0.3, 1] }}
                                    className="absolute inset-0"
                                >
                                    <MeetingHubView stage={elapsed < MEETING_PREPARING_AT ? 'editing' : elapsed < LOBBY_AT ? 'preparing' : 'ready'} />
                                </motion.div>
                            ) : (
                                <motion.div
                                    key="today-view"
                                    initial={{ opacity: 0, x: -24 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: -36 }}
                                    transition={{ duration: .55, ease: [0.16, 1, 0.3, 1] }}
                                    className="absolute inset-0"
                                >
                                    <TodayView
                                        typed={typed}
                                        isTyping={isTyping}
                                        isPressing={isPressing}
                                        added={added}
                                        completed={completed}
                                        panelOpen={panel !== 'none'}
                                        focusTaskVisible={returningToday}
                                        focusTaskSelected={panel === 'task'}
                                        viewMode={agendaView}
                                        viewHover={hoveredAgendaView}
                                    />
                                </motion.div>
                            )}
                        </AnimatePresence>

                        {focusActive && (
                            <div className="absolute right-6 top-4 z-[75]">
                                <FocusView elapsed={elapsed} />
                            </div>
                        )}

                        <AnimatePresence>
                            {panel !== 'none' && (
                                <motion.div
                                    key="event-backdrop"
                                    initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                                    transition={{ duration: .28 }}
                                    className={`absolute left-0 right-0 bg-black/60 ${panel === 'task' ? '-top-[72px] bottom-0' : 'inset-y-0'}`}
                                />
                            )}
                        </AnimatePresence>

                        <AnimatePresence>
                            {panel !== 'none' && (
                                <motion.aside
                                    key="event-panel"
                                    initial={{ x: 440 }} animate={{ x: 0 }} exit={{ x: 440 }}
                                    transition={{ duration: .42, ease: [0.16, 1, 0.3, 1] }}
                                    className={`absolute right-0 w-[430px] border-l border-hairline bg-canvas ${panel === 'task' ? '-top-[72px] h-[800px]' : 'top-0 h-full'}`}
                                >
                                    {panel === 'task' ? (
                                        <div className="absolute -left-[154px] top-[132px] flex flex-col items-end gap-3">
                                            <span className="flex h-9 w-9 items-center justify-center rounded-medium bg-surface-2 text-ink"><AlignLeft className="h-4 w-4" strokeWidth={1.9} /></span>
                                            <motion.span
                                                animate={elapsed >= FOCUS_ACTION_AT ? { scale: .94 } : { scale: 1 }}
                                                transition={{ duration: .16 }}
                                                className="flex h-11 w-[138px] items-center justify-center gap-2 rounded-medium bg-surface-2 px-3 text-[10px] font-bold uppercase tracking-[0.04em] text-ink shadow-card-resting"
                                            >
                                                Iniciar enfoque <Target className="h-4 w-4" strokeWidth={2} />
                                            </motion.span>
                                            <span className="flex h-9 w-9 items-center justify-center rounded-medium bg-semantics-error text-white"><Trash2 className="h-4 w-4" strokeWidth={1.9} /></span>
                                        </div>
                                    ) : (
                                        <div className="absolute -left-[52px] top-4 flex flex-col gap-2">
                                            {[
                                                { icon: X, active: false, danger: false },
                                                { icon: AlignLeft, active: false, danger: false },
                                                { icon: Pencil, active: panel === 'edit', danger: false },
                                                { icon: Target, active: false, danger: false },
                                                { icon: Trash2, active: false, danger: true },
                                            ].map(({ icon: Icon, active, danger }, index) => (
                                                <span key={index} className={`flex h-9 w-9 items-center justify-center rounded-medium ${danger ? 'bg-semantics-error text-white' : active ? 'bg-ink text-canvas' : 'bg-surface-2 text-ink'}`}>
                                                    <Icon className="h-4 w-4" strokeWidth={1.9} />
                                                </span>
                                            ))}
                                        </div>
                                    )}

                                    <AnimatePresence mode="wait">
                                        <motion.div key={panel === 'meeting' ? `meeting-${meetingPanelView}` : panel} initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }} transition={{ duration: .25 }} className="h-full">
                                            {panel === 'details' ? <DetailsPanel />
                                                : panel === 'edit' ? <EditPanel />
                                                : panel === 'meeting' ? (
                                                    meetingPanelView === 'edit'
                                                        ? <MeetingEditPanel title={MEETING_TITLE} stage={meetingStage} serviceMenuOpen={serviceMenuOpen} />
                                                        : <MeetingPreparingPanel title={MEETING_TITLE} date="1 de septiembre de 2026" time="9:00 AM" />
                                                )
                                                : <FocusTaskPanel />}
                                        </motion.div>
                                    </AnimatePresence>
                                </motion.aside>
                            )}
                        </AnimatePresence>

                        <AnimatePresence>
                            {lobbyActive && (
                                <motion.div
                                    key="lobby-backdrop"
                                    initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                                    transition={{ duration: .25 }}
                                    className="absolute inset-0 z-[80] flex items-start justify-center bg-black/70 pt-[170px]"
                                >
                                    <LobbyDialog title="Llamar a Reunión de Zenth" joinPressed={lobbyJoinPressed} />
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>

                    <AnimatePresence>
                        {showJourneyCursor && (
                            <motion.span
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1, left: journeyCursor.x, top: journeyCursor.y, scale: journeyCursor.click ? .86 : 1 }}
                                exit={{ opacity: 0 }}
                                transition={{ duration: .55, ease: [0.16, 1, 0.3, 1] }}
                                className="pointer-events-none absolute z-[90] text-white drop-shadow-[0_2px_3px_rgba(0,0,0,.75)]"
                            >
                                <MousePointer2 className="h-6 w-6 fill-white text-black" strokeWidth={1.2} />
                                {journeyCursor.click && (
                                    <motion.span
                                        key={`${journeyCursor.x}-${journeyCursor.y}`}
                                        initial={{ opacity: .8, scale: .3 }}
                                        animate={{ opacity: 0, scale: 1.35 }}
                                        transition={{ duration: .52 }}
                                        className="absolute -left-2 -top-2 h-9 w-9 rounded-full border-2 border-white/80"
                                    />
                                )}
                            </motion.span>
                        )}
                    </AnimatePresence>
                </div>
            </div>

            <AnimatePresence>
                {celebrating && (
                    <motion.span
                        key="xp-badge"
                        initial={{ opacity: 0, y: 10, scale: .9 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: -10, scale: .95 }}
                        transition={{ duration: .3, ease: [0.16, 1, 0.3, 1] }}
                        className="pointer-events-none absolute bottom-4 right-4 rounded-pill bg-accent px-3 py-1.5 text-[11px] font-semibold text-white shadow-soft-lift sm:bottom-6 sm:right-6 sm:px-4 sm:py-2 sm:text-[13px]"
                    >
                        +50 XP
                    </motion.span>
                )}
            </AnimatePresence>

            <AnimatePresence>
                {showLinkToast && (
                    <motion.span
                        key="link-toast"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: .3, ease: [0.16, 1, 0.3, 1] }}
                        className="pointer-events-none absolute bottom-4 right-4 flex items-center gap-2 rounded-pill bg-ink px-3 py-1.5 text-[11px] font-semibold text-canvas shadow-soft-lift sm:bottom-6 sm:right-6 sm:px-4 sm:py-2 sm:text-[13px]"
                    >
                        <Check className="h-3.5 w-3.5" strokeWidth={2.4} /> Enlace de llamada creado
                    </motion.span>
                )}
            </AnimatePresence>
        </div>
    );
};

export default AppDemo;
