import React, { useEffect, useLayoutEffect, useMemo, useRef, useState } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import {
    AlignLeft, Bell, Calendar, Check, Flame, LayoutDashboard,
    ChevronUp, LibraryBig, MousePointer2, Pencil, PhoneCall, Search, Target, Timer, Trash2, X,
} from 'lucide-react';
import { TodayView } from './demo/TodayView';
import { BoardView } from './demo/BoardView';
import { FocusView } from './demo/FocusView';
import { LobbyDialog } from './demo/LobbyDialog';
import { MeetingCallView } from './demo/MeetingCallView';
import {
    DetailsPanel, EditPanel, FocusTaskPanel, MeetingEditPanel, MeetingPreparingPanel,
} from './demo/panels';
import {
    APPEARS_AT, ARCHIVE_AT, ARCHIVE2_AT, BOARD_AT, CALL_END, CALL_VIEW_AT, CARD_CLOSE_AT, CARD_OPEN_AT,
    COMPLETES_AT, CYCLE, DAY_CLICK_AT, DAY_HOVER_AT, DESIGN_H, DESIGN_W, DETAILS_AT,
    DRAG1_AT, DRAG2_AT, DRAG3_AT, EDIT_AT, FOCUS_ACTION_AT, FOCUS_END, FOCUS_OUTSIDE_HOVER,
    FOCUS_RUNNING_AT, FOCUS_START_AT, FOCUS_VIEW_AT, GUEST_JOIN_AT, LOBBY_AT,
    LOBBY_JOIN_CLICK_AT, MEETING_ADD_CLICK_AT, MEETING_ADD_HOVER,
    MEETING_CREATED_AT, MEETING_LINK_CLICK_AT, MEETING_LINK_HOVER,
    MEETING_MENU_CLOSE_AT, MEETING_OPEN_AT, MEETING_PREPARING_AT,
    MEETING_TITLE, MIN_SCALE, MONTH_CLICK_AT, MONTH_HOVER_AT, NEW1_OPEN, PANEL_CLOSE_AT,
    PRESS_AT, RETURN_TODAY_AT, SWAP_AT, TASK_OPEN_AT, TODAY_TASK, TYPE_END,
    TYPE_START, VIEWS_END_AT, VIEWS_START_AT, WEEK_CLICK_AT, WEEK_HOVER_AT, typewriter,
} from './demo/timeline';
import {
    ACTS, CURSOR_ZOOM_STYLE, FRAME_FADE_STYLE, PHONE_ASPECT, PHONE_MAX_W, actIndexAt, actProgress, captionAt, headerVisibleAt, shotAt,
} from './demo/phoneDirector';

const NAV = [
    { label: 'Agenda', icon: Calendar },
    { label: 'Pizarras', icon: LayoutDashboard },
    { label: 'Biblioteca', icon: LibraryBig },
    { label: 'Reuniones', icon: PhoneCall },
];

/**
 * Punto horizontal que sigue la cámara en anchos intermedios (tabletas), donde
 * la maqueta sólo pierde una parte por los lados. En teléfonos manda
 * `demo/phoneDirector.ts`. Los cambios se adelantan unos milisegundos al gesto
 * que se va a mostrar: así la cámara ya está quieta cuando aparece el panel,
 * la tarjeta arrastrada o el checkbox.
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
    if (elapsed < CARD_OPEN_AT - lead) return .16;
    return elapsed < CARD_CLOSE_AT ? .9 : .5;
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
    const [box, setBox] = useState({ scale: 1, width: DESIGN_W, compact: false });
    const [elapsed, setElapsed] = useState(0);
    const [inView, setInView] = useState(true);
    const originRef = useRef(0);
    const elapsedRef = useRef(0);

    const apply = (ms: number) => {
        elapsedRef.current = ms;
        setElapsed(ms);
    };

    useLayoutEffect(() => {
        const node = frameRef.current;
        if (!node) return;
        const apply = () => {
            const width = node.clientWidth;
            // El modo móvil no lleva tarjeta (ni su padding): se decide con el contenedor
            // exterior, que no cambia al alternar, para no oscilar cerca del umbral.
            const compact = (wrapRef.current?.clientWidth ?? width) < PHONE_MAX_W;
            setBox({ scale: Math.max(width / DESIGN_W, MIN_SCALE), width, compact });
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
        if (reduceMotion) {
            if (elapsedRef.current === 0) apply(COMPLETES_AT + 800);
            return;
        }
        if (!inView) return;
        originRef.current = performance.now() - elapsedRef.current;
        const id = window.setInterval(() => apply((performance.now() - originRef.current) % CYCLE), 60);
        return () => window.clearInterval(id);
    }, [reduceMotion, inView]);

    /** Capítulos de la versión móvil: saltar al inicio de un acto (o a su fotograma fijo). */
    const goToAct = (index: number) => {
        const act = ACTS[index];
        if (reduceMotion) return apply(act.poster);
        originRef.current = performance.now() - act.from;
        apply(act.from);
    };

    const { scale, width: frameWidth, compact } = box;
    const shot = shotAt(elapsed);
    const camScale = frameWidth / shot.w;
    /** Planos sobre un panel: la vista de fondo se apaga para que no asome cortada. */
    const isolationStyle: React.CSSProperties | undefined = compact ? {
        opacity: shot.isolate ? 0 : 1,
        transition: reduceMotion ? undefined : 'opacity 300ms ease',
    } : undefined;
    const actIndex = actIndexAt(elapsed);
    const overflowX = Math.max(0, DESIGN_W * scale - frameWidth);
    const boardActive = elapsed >= BOARD_AT && elapsed < RETURN_TODAY_AT;
    const focusActive = elapsed >= FOCUS_VIEW_AT && elapsed < FOCUS_END;
    const returningToday = elapsed >= RETURN_TODAY_AT && elapsed < FOCUS_VIEW_AT;

    const focusRunning = elapsed >= FOCUS_RUNNING_AT;
    const focusRemaining = Math.max(0, 25 * 60 - Math.floor((elapsed - FOCUS_RUNNING_AT) / 1000));
    const focusClock = `${String(Math.floor(focusRemaining / 60)).padStart(2, '0')}:${String(focusRemaining % 60).padStart(2, '0')}`;

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

    /** En anchos intermedios, la cámara sigue la zona donde está ocurriendo la acción. */
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
                ? elapsed < FOCUS_OUTSIDE_HOVER
                    ? { x: 1076, y: 446, click: elapsed >= FOCUS_START_AT && elapsed < FOCUS_RUNNING_AT }
                    : { x: 520, y: 430, click: elapsed >= FOCUS_END - 250 && elapsed < FOCUS_END + 150 }
                : elapsed < MEETING_LINK_HOVER
                    ? { x: 1230, y: 348, click: elapsed >= MEETING_ADD_CLICK_AT && elapsed < MEETING_ADD_CLICK_AT + 280 }
                    : elapsed < LOBBY_AT
                        ? { x: 970, y: 423, click: elapsed >= MEETING_LINK_CLICK_AT && elapsed < MEETING_LINK_CLICK_AT + 280 }
                        : { x: 640, y: 534, click: lobbyJoinPressed };
    const showJourneyCursor = (elapsed >= WEEK_HOVER_AT - 240 && elapsed < VIEWS_END_AT)
        || (elapsed >= RETURN_TODAY_AT + 650 && elapsed < FOCUS_END + 500)
        || (elapsed >= MEETING_ADD_HOVER - 300 && elapsed < LOBBY_JOIN_CLICK_AT + 400);

    return (
        <div ref={wrapRef}>
            <div
                className={compact ? 'relative' : 'fr-card fr-elevated relative overflow-hidden p-1.5 sm:p-2'}
                role="img"
                aria-label="Demostración de Zenth: organiza una tarea en Agenda, trabaja con una pizarra e inicia Enfoque sin abandonar su contexto."
            >
                <div
                    ref={frameRef}
                    className={compact ? 'relative w-full overflow-hidden' : 'relative w-full overflow-hidden rounded-large bg-canvas'}
                    style={{
                        height: `${compact ? frameWidth * PHONE_ASPECT : DESIGN_H * scale}px`,
                        ...(compact ? FRAME_FADE_STYLE : undefined),
                    }}
                    aria-hidden="true"
                >
                    <div
                        className="absolute left-0 top-0 origin-top-left"
                        style={{
                            width: `${DESIGN_W}px`,
                            height: `${DESIGN_H}px`,
                            transform: compact
                                ? `translate(${-shot.x * camScale}px, ${-shot.y * camScale}px) scale(${camScale})`
                                : `translateX(${-overflowX * cropFocus}px) scale(${scale})`,
                            transition: reduceMotion ? undefined : `transform ${compact ? 900 : 720}ms cubic-bezier(0.65, 0, 0.35, 1)`,
                            '--demo-k': compact ? Math.max(1, 0.67 / camScale) : 1,
                        } as React.CSSProperties}
                    >
                        <div
                            className="flex h-[72px] items-center justify-between bg-canvas px-6"
                            style={compact ? {
                                opacity: headerVisibleAt(elapsed) ? 1 : 0,
                                transition: reduceMotion ? undefined : 'opacity 600ms ease',
                            } : undefined}
                        >
                            <div className="flex items-center gap-2.5">
                                <img src="/blog/favicon2.png" alt="" className="h-7 w-7 rounded-[7px] object-contain" />
                                <div className="leading-tight">
                                    <p className="text-[12px] text-ink-muted">Buenas tardes,</p>
                                    <p className="text-[13px] font-semibold text-ink">Matías</p>
                                </div>
                            </div>

                            <nav className="flex items-center gap-1 rounded-pill bg-surface-1 p-1">
                                {NAV.map(({ label, icon: Icon }, index) => {
                                    const active = callViewActive ? index === 3 : boardActive ? index === 1 : index === 0;
                                    return (
                                        <motion.span
                                            layout
                                            key={label}
                                            className={`relative flex items-center gap-2 rounded-pill px-4 py-2 text-[13px] ${active ? 'font-semibold text-ink' : 'text-ink-muted'}`}
                                        >
                                            {active && <motion.span layoutId="demo-nav-active" className="absolute inset-0 rounded-pill bg-canvas shadow-card-resting" transition={{ duration: .45, ease: [0.16, 1, 0.3, 1] }} />}
                                            <span className="relative">
                                                <Icon className="h-4 w-4" strokeWidth={1.9} />
                                                {label === 'Reuniones' && callViewActive && (
                                                    <span className="absolute -right-0.5 -top-0.5 h-1.5 w-1.5 rounded-full bg-accent" />
                                                )}
                                            </span>
                                            <span className="relative">{label}</span>
                                        </motion.span>
                                    );
                                })}
                            </nav>

                            <div className="flex items-center gap-1 rounded-pill bg-surface-1 p-1">
                                <span className="flex h-9 w-9 items-center justify-center text-ink-muted">
                                    <Search className="h-4 w-4" strokeWidth={1.9} />
                                </span>
                                <span className={`flex h-9 items-center justify-center gap-1.5 rounded-pill ${focusRunning ? 'px-2.5 text-accent' : 'w-9 text-ink-muted'}`}>
                                    <Timer className="h-4 w-4" strokeWidth={focusRunning ? 2.2 : 1.9} />
                                    {focusRunning && <span className="text-[13px] font-semibold tabular-nums">{focusClock}</span>}
                                </span>
                                <span className="flex h-9 w-9 items-center justify-center text-ink-muted">
                                    <Bell className="h-4 w-4" strokeWidth={1.9} />
                                </span>
                                <span className="relative flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br from-grad-violet to-grad-magenta text-[12px] font-semibold text-white">
                                    M
                                    <span className="absolute -bottom-0.5 -right-0.5 flex h-3.5 w-3.5 items-center justify-center rounded-full border-2 border-surface-1 bg-accent">
                                        <Flame className="h-2 w-2 text-white" fill="currentColor" strokeWidth={0} />
                                    </span>
                                </span>
                                <ChevronUp className="mx-1 h-4 w-4 text-ink-muted" strokeWidth={1.9} />
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
                                        <MeetingCallView elapsed={elapsed} startedAt={CALL_VIEW_AT} guestJoined={guestJoined} bare={compact} />
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
                                        <BoardView elapsed={elapsed} isolationStyle={isolationStyle} bare={compact} />
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
                                        <div className="h-full" style={isolationStyle}>
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
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>

                            <AnimatePresence>
                                {focusActive && (
                                    <motion.div
                                        key="focus-panel"
                                        exit={{ opacity: 0, y: -8, scale: .97 }}
                                        transition={{ duration: .28, ease: [0.16, 1, 0.3, 1] }}
                                        className="absolute right-6 top-4 z-[75]"
                                    >
                                        <FocusView elapsed={elapsed} />
                                    </motion.div>
                                )}
                            </AnimatePresence>

                            <AnimatePresence>
                                {panel !== 'none' && (
                                    <motion.div
                                        key="event-backdrop"
                                        initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                                        transition={{ duration: .28 }}
                                        className={`absolute left-0 right-0 -top-[72px] bottom-0 ${compact ? '' : 'bg-black/60'}`}
                                    />
                                )}
                            </AnimatePresence>

                            <AnimatePresence>
                                {panel !== 'none' && (
                                    <motion.aside
                                        key="event-panel"
                                        initial={{ x: 440 }} animate={{ x: 0 }} exit={{ x: 440 }}
                                        transition={{ duration: .42, ease: [0.16, 1, 0.3, 1] }}
                                        className={`absolute right-0 w-[430px] border-l border-hairline bg-canvas -top-[72px] h-[800px]`}
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
                                        className={`absolute -top-[72px] bottom-0 left-0 right-0 z-[80] flex items-start justify-center pt-[242px] ${compact ? '' : 'bg-black/70'}`}
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
                                    <MousePointer2 className="h-6 w-6 fill-white text-black" strokeWidth={1.2} style={CURSOR_ZOOM_STYLE} />
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

            {compact && (
                <div className="mt-4 px-1">
                    <p className="t-caption min-h-[2.75rem] text-center text-ink-muted">{captionAt(elapsed)}</p>
                    <div role="group" aria-label="Capítulos de la demostración" className="mt-2 flex flex-wrap justify-center gap-1">
                        {ACTS.map((act, index) => (
                            <button
                                key={act.id}
                                type="button"
                                aria-current={index === actIndex ? 'true' : undefined}
                                onClick={() => goToAct(index)}
                                className={`fr-tab relative !px-3 !text-[13px] ${index === actIndex ? 'is-selected' : ''}`}
                            >
                                {act.label}
                                {index === actIndex && !reduceMotion && (
                                    <span
                                        className="absolute inset-x-3 bottom-1 h-[2px] origin-left rounded-full bg-accent"
                                        style={{ transform: `scaleX(${actProgress(elapsed, CYCLE)})` }}
                                    />
                                )}
                            </button>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
};

export default AppDemo;
