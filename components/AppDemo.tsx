import React, { useEffect, useLayoutEffect, useMemo, useRef, useState } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import {
    AlignLeft, BarChart3, BookOpen, CalendarDays, CheckSquare, ChevronUp,
    MousePointer2, Pencil, Sun, Target, Timer, Trash2, X,
} from 'lucide-react';
import { TodayView } from './demo/TodayView';
import { BoardView } from './demo/BoardView';
import { FocusView } from './demo/FocusView';
import { DetailsPanel, EditPanel, FocusTaskPanel } from './demo/panels';
import {
    APPEARS_AT, BOARD_AT, COMPLETES_AT, CYCLE, DESIGN_H, DESIGN_W, DETAILS_AT,
    EDIT_AT, FOCUS_ACTION_AT, FOCUS_RUNNING_AT, FOCUS_START_AT, FOCUS_VIEW_AT,
    MIN_SCALE, PANEL_CLOSE_AT, PRESS_AT, RETURN_TODAY_AT, TASK_OPEN_AT,
    TODAY_TASK, TYPE_END, TYPE_START, typewriter,
} from './demo/timeline';

const NAV = [
    { label: 'Hoy', icon: CalendarDays },
    { label: 'Lista', icon: CheckSquare },
    { label: 'Enfoque', icon: Timer },
    { label: 'Notas', icon: BookOpen },
    { label: 'Objetivos', icon: BarChart3 },
];

/**
 * Demo animada del producto. El primer acto muestra la agenda de Hoy; cuando
 * termina, el segundo entra en Lista y usa una pizarra completa. Todo deriva
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
    const focusActive = elapsed >= FOCUS_VIEW_AT;
    const returningToday = elapsed >= RETURN_TODAY_AT && elapsed < FOCUS_VIEW_AT;

    const typed = useMemo(
        () => elapsed >= PRESS_AT ? '' : typewriter(TODAY_TASK, elapsed, TYPE_START, TYPE_END),
        [elapsed]
    );
    const isTyping = elapsed >= TYPE_START && elapsed < TYPE_END;
    const isPressing = elapsed >= TYPE_END && elapsed < PRESS_AT;
    const added = elapsed >= APPEARS_AT;
    const completed = elapsed >= COMPLETES_AT;
    const celebrating = completed && elapsed < COMPLETES_AT + 1600;

    const panel: 'none' | 'details' | 'edit' | 'task' = returningToday && elapsed >= TASK_OPEN_AT
        ? 'task'
        : boardActive || focusActive || elapsed >= PANEL_CLOSE_AT
            ? 'none'
            : elapsed >= EDIT_AT
                ? 'edit'
                : elapsed >= DETAILS_AT
                    ? 'details'
                    : 'none';

    /** En móvil, la cámara sigue la zona donde está ocurriendo la acción. */
    const cropFocus = focusActive
        ? .5
        : boardActive
            ? (elapsed < BOARD_AT + 1200 ? .48 : .7)
            : returningToday
                ? (panel === 'task' ? .72 : .98)
                : (elapsed < PRESS_AT || elapsed > CYCLE - 1200 ? .02 : .98);

    const journeyCursor = elapsed < TASK_OPEN_AT
        ? { x: 1082, y: 196, click: elapsed >= TASK_OPEN_AT - 320 }
        : elapsed < FOCUS_VIEW_AT
            ? { x: 755, y: 205, click: elapsed >= FOCUS_ACTION_AT && elapsed < FOCUS_ACTION_AT + 380 }
            : { x: 420, y: 680, click: elapsed >= FOCUS_START_AT && elapsed < FOCUS_RUNNING_AT };
    const showJourneyCursor = elapsed >= RETURN_TODAY_AT + 650 && elapsed < FOCUS_RUNNING_AT + 500;

    return (
        <div
            ref={wrapRef}
            className="fr-card fr-elevated relative overflow-hidden p-1.5 sm:p-2"
            role="img"
            aria-label="Demostración de Zenth: organiza una tarea en Hoy, trabaja con una pizarra y convierte una tarea pendiente en una sesión de enfoque activa."
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
                        transition: reduceMotion ? undefined : 'transform 900ms cubic-bezier(0.65, 0, 0.35, 1)',
                    }}
                >
                    <div className="flex h-[72px] items-center justify-between border-b border-hairline-soft bg-canvas px-6">
                        <div className="flex items-center gap-2.5">
                            <img src="/blog/favicon2.png" alt="" className="h-7 w-7 rounded-[7px] object-contain" />
                            <div className="leading-tight">
                                <p className="text-[12px] text-ink-muted">Buenas tardes,</p>
                                <p className="text-[13px] font-semibold text-ink">Matías</p>
                            </div>
                        </div>

                        <nav className="flex items-center gap-1 rounded-pill bg-surface-1 p-1">
                            {NAV.map(({ label, icon: Icon }, index) => {
                                const active = focusActive ? index === 2 : boardActive ? index === 1 : index === 0;
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

                        <div className="flex items-center gap-2 rounded-pill bg-surface-1 px-3 py-2">
                            <Sun className="h-4 w-4 text-ink-muted" strokeWidth={1.9} />
                            <span className="relative h-6 w-6 rounded-full bg-gradient-to-br from-grad-violet to-grad-magenta">
                                <span className="absolute -right-0.5 -top-0.5 h-2 w-2 rounded-full bg-accent" />
                            </span>
                            <ChevronUp className="h-4 w-4 text-ink-muted" strokeWidth={1.9} />
                        </div>
                    </div>

                    <div className="relative h-[728px] overflow-visible">
                        <AnimatePresence mode="wait" initial={false}>
                            {focusActive ? (
                                <motion.div
                                    key="focus-view"
                                    initial={{ opacity: 0, x: 36 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, scale: .98 }}
                                    transition={{ duration: .58, ease: [0.16, 1, 0.3, 1] }}
                                    className="absolute inset-0"
                                >
                                    <FocusView elapsed={elapsed} />
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
                                    />
                                </motion.div>
                            )}
                        </AnimatePresence>

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
                                                Iniciar focus <Target className="h-4 w-4" strokeWidth={2} />
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
                                        <motion.div key={panel} initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }} transition={{ duration: .25 }} className="h-full">
                                            {panel === 'details' ? <DetailsPanel /> : panel === 'edit' ? <EditPanel /> : <FocusTaskPanel />}
                                        </motion.div>
                                    </AnimatePresence>
                                </motion.aside>
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
        </div>
    );
};

export default AppDemo;
