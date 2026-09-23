import React from 'react';
import { AnimatePresence, LayoutGroup, motion } from 'framer-motion';
import {
    AlignLeft, BookOpen, Check, Pencil, Target, Trash2, X, ChevronDown, ChevronRight, Columns3, Filter, GripVertical,
    History, Inbox, Lock, MoreHorizontal, MousePointer2, Plus, UserPlus,
} from 'lucide-react';
import {
    ARCHIVE_AT, ARCHIVE2_AT, BOARD_CARDS, BOARD_LISTS,
    BOARD_NAME, DRAG1_AT, DRAG2_AT, DRAG3_AT, NEW1_ADD, NEW1_CARD, NEW1_OPEN,
    NEW1_TYPE_E, NEW1_TYPE_S, NEW2_ADD, NEW2_CARD, NEW2_OPEN, NEW2_TYPE_E,
    NEW2_TYPE_S, NEW3_ADD, NEW3_CARD, NEW3_OPEN, NEW3_TYPE_E, NEW3_TYPE_S,
    CARD_ASSIGNEE, CARD_ASSIGN_CLICK_AT, CARD_ASSIGN_HOVER, CARD_CLOSE_AT, CARD_OPEN_AT,
    NEW_CARD_NOTES, SWAP_AT, typewriter,
} from './timeline';
import { BoardCardPanel, CreatePanel } from './panels';
import { CURSOR_ZOOM_STYLE } from './phoneDirector';

interface BoardViewProps {
    elapsed: number;
    /** Estilo para apagar el tablero (rail y listas) sin tocar sus paneles ni el puntero. */
    isolationStyle?: React.CSSProperties;
    /** En móvil los diálogos no oscurecen el fondo: no hay tarjeta que lo enmarque. */
    bare?: boolean;
}

const DRAG_MS = 1050;
const ARCHIVE_CHECK_MS = 700;
const ARCHIVE_EXIT_MS = 1350;

const initialOrder = ['porhacer', 'revision', 'listo', 'encurso'];
const swappedOrder = ['revision', 'porhacer', 'listo', 'encurso'];

const clamp = (value: number) => Math.max(0, Math.min(1, value));
const between = (elapsed: number, from: number, to: number) => elapsed >= from && elapsed < to;

const TaskCard: React.FC<{
    card: (typeof BOARD_CARDS)[number];
    elapsed: number;
    accent: string;
}> = ({ card, elapsed, accent }) => {
    const dragging = Boolean(card.movesAt && between(elapsed, card.movesAt, card.movesAt + DRAG_MS));
    const checked = Boolean(card.archivesAt && elapsed >= card.archivesAt);
    const archiving = Boolean(card.archivesAt && elapsed >= card.archivesAt + ARCHIVE_CHECK_MS);

    return (
        <motion.div
            layout
            layoutId={`board-card-${card.id}`}
            initial={{ opacity: 0, y: 10, scale: 0.96 }}
            animate={{
                opacity: archiving ? 0 : 1,
                y: archiving ? -8 : 0,
                rotate: 0,
                scale: archiving ? 0.94 : 1,
            }}
            exit={{ opacity: 0, y: -8, scale: 0.94 }}
            transition={{
                layout: { duration: .78, ease: [0.16, 1, 0.3, 1] },
                duration: dragging ? .18 : .42,
                ease: [0.16, 1, 0.3, 1],
            }}
            className="relative z-10 rounded-[10px] border border-hairline-soft bg-canvas px-3 py-2.5 dark:bg-surface-1"
            style={dragging ? { zIndex: 30 } : undefined}
        >
            <div className="flex items-start gap-2">
                <motion.span
                    animate={checked ? { scale: [1, .82, 1], backgroundColor: 'var(--fr-ink)' } : { scale: 1, backgroundColor: 'transparent' }}
                    transition={{ duration: .28 }}
                    className="mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full border"
                    style={{ borderColor: accent }}
                >
                    {checked && <Check className="h-2.5 w-2.5 text-canvas" strokeWidth={3.2} />}
                </motion.span>
                <span className="min-w-0 flex-1 self-center">
                    <span className={`block text-[12px] font-semibold leading-tight text-ink transition-opacity duration-300 ${checked ? 'line-through opacity-55' : ''}`}>{card.title}</span>
                </span>
                {card.id === 'n1' && elapsed >= CARD_ASSIGN_CLICK_AT + 200 && (
                    <motion.span
                        initial={{ scale: .4, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        className="flex h-[18px] w-[18px] shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-[#7a2c4a] to-[#c1553f] text-[9px] font-bold text-white"
                    >
                        {CARD_ASSIGNEE[0]}
                    </motion.span>
                )}
                <MoreHorizontal className="h-3.5 w-3.5 shrink-0 text-ink-muted" strokeWidth={1.9} />
            </div>
            {card.description && (
                <div className="mt-2 flex items-start gap-1.5 pl-6">
                    <AlignLeft className="mt-px h-3 w-3 shrink-0 text-ink-muted" strokeWidth={1.9} />
                    <span className="text-[9px] italic leading-snug text-ink-muted">{card.description}</span>
                </div>
            )}
        </motion.div>
    );
};

/**
 * Coordenadas medidas sobre el DOM real del tablero (px de diseño, origen en
 * la esquina del contenedor): columnas en x=100/343/586/829, primera tarjeta
 * centrada en y≈169, botón «Agregar» del panel en (1213, -36).
 */
const COL_X = [100, 343, 586, 829];
const GRAB = { x: COL_X[0] + 78, y: 169 };
const ADD_TASK = { x: 150, y: [215, 253, 315] };
const PANEL_TITLE = { x: 1000, y: 8 };
const PANEL_ADD = { x: 1213, y: -36 };
const CARD_TITLE = { x: 890, y: 165 };
const ASSIGN_PILL = { x: 1161, y: 571 };

const cursorState = (elapsed: number) => {
    const opens = [
        [NEW1_OPEN, NEW1_ADD, NEW1_CARD],
        [NEW2_OPEN, NEW2_ADD, NEW2_CARD],
        [NEW3_OPEN, NEW3_ADD, NEW3_CARD],
    ] as const;
    for (const [i, [open, add, card]] of opens.entries()) {
        if (between(elapsed, open - 650, open + 300)) return { x: ADD_TASK.x, y: ADD_TASK.y[i], click: elapsed >= open - 100 };
        if (between(elapsed, open + 300, card)) {
            const adding = elapsed >= add - 180;
            return adding
                ? { ...PANEL_ADD, click: elapsed >= add - 120 }
                : { ...PANEL_TITLE, click: false };
        }
    }

    const drag = (at: number, toX: number, toY: number) => {
        const p = clamp((elapsed - at) / DRAG_MS);
        return {
            x: GRAB.x + (toX - GRAB.x) * p,
            y: GRAB.y + (toY - GRAB.y) * p - 18 * Math.sin(p * Math.PI),
            click: elapsed >= at,
        };
    };
    if (between(elapsed, DRAG1_AT - 350, DRAG1_AT + DRAG_MS)) return drag(DRAG1_AT, COL_X[3] + 78, 222);
    if (between(elapsed, DRAG2_AT - 350, DRAG2_AT + DRAG_MS)) return drag(DRAG2_AT, COL_X[1] + 78, 222);
    if (between(elapsed, DRAG3_AT - 350, DRAG3_AT + DRAG_MS)) return drag(DRAG3_AT, COL_X[2] + 78, 169);
    if (between(elapsed, SWAP_AT - 350, SWAP_AT + 1150)) {
        const p = clamp((elapsed - SWAP_AT) / 850);
        return { x: COL_X[0] + 45 + (COL_X[1] - COL_X[0]) * p, y: 108, click: elapsed >= SWAP_AT };
    }
    if (between(elapsed, ARCHIVE_AT - 350, ARCHIVE_AT + ARCHIVE_EXIT_MS)) {
        return { x: COL_X[0] + 20, y: 163, click: between(elapsed, ARCHIVE_AT, ARCHIVE_AT + 360) };
    }
    if (between(elapsed, ARCHIVE2_AT - 350, ARCHIVE2_AT + ARCHIVE_EXIT_MS)) {
        return { x: COL_X[3] + 20, y: 163, click: between(elapsed, ARCHIVE2_AT, ARCHIVE2_AT + 360) };
    }
    if (between(elapsed, CARD_OPEN_AT - 650, CARD_OPEN_AT + 350)) {
        return { ...CARD_TITLE, click: elapsed >= CARD_OPEN_AT - 100 };
    }
    if (between(elapsed, CARD_OPEN_AT + 350, CARD_CLOSE_AT - 900)) {
        return elapsed < CARD_ASSIGN_HOVER
            ? { x: 1100, y: 300, click: false }
            : { ...ASSIGN_PILL, click: elapsed >= CARD_ASSIGN_CLICK_AT && elapsed < CARD_ASSIGN_CLICK_AT + 280 };
    }
    if (between(elapsed, CARD_CLOSE_AT - 900, CARD_CLOSE_AT + 200)) {
        return { x: 420, y: 470, click: elapsed >= CARD_CLOSE_AT - 200 };
    }
    return { x: 600, y: 66, click: false };
};

/** Acto II: pizarra con creación, movimiento, reordenado y archivado. */
export const BoardView: React.FC<BoardViewProps> = ({ elapsed, isolationStyle, bare = false }) => {
    const order = elapsed >= SWAP_AT ? swappedOrder : initialOrder;
    const listByKey = new Map(BOARD_LISTS.map(list => [list.key, list]));

    const firstPanel = between(elapsed, NEW1_OPEN, NEW1_CARD);
    const secondPanel = between(elapsed, NEW2_OPEN, NEW2_CARD);
    const thirdPanel = between(elapsed, NEW3_OPEN, NEW3_CARD);
    const panelOpen = firstPanel || secondPanel || thirdPanel;
    const cardOpen = between(elapsed, CARD_OPEN_AT, CARD_CLOSE_AT);
    const cardAssigned = elapsed >= CARD_ASSIGN_CLICK_AT;
    const cardPressed = between(elapsed, CARD_ASSIGN_CLICK_AT, CARD_ASSIGN_CLICK_AT + 280);
    const cardPending = BOARD_CARDS.find(card => card.id === 'n1');
    const panelDescription = firstPanel ? NEW_CARD_NOTES.n1 : secondPanel ? NEW_CARD_NOTES.n2 : NEW_CARD_NOTES.n3;
    const panelTitle = firstPanel
        ? typewriter('Definir prioridades del sprint', elapsed, NEW1_TYPE_S, NEW1_TYPE_E)
        : secondPanel
            ? typewriter('Preparar materiales de la reunión', elapsed, NEW2_TYPE_S, NEW2_TYPE_E)
            : typewriter('Revisar la propuesta comercial', elapsed, NEW3_TYPE_S, NEW3_TYPE_E);
    const panelTyping = firstPanel
        ? between(elapsed, NEW1_TYPE_S, NEW1_TYPE_E)
        : secondPanel
            ? between(elapsed, NEW2_TYPE_S, NEW2_TYPE_E)
            : between(elapsed, NEW3_TYPE_S, NEW3_TYPE_E);
    const panelSubmitting = firstPanel
        ? between(elapsed, NEW1_ADD - 180, NEW1_CARD)
        : secondPanel
            ? between(elapsed, NEW2_ADD - 180, NEW2_CARD)
            : between(elapsed, NEW3_ADD - 180, NEW3_CARD);
    const panelFillProgress = firstPanel
        ? clamp((elapsed - NEW1_TYPE_E) / (NEW1_ADD - NEW1_TYPE_E - 120))
        : secondPanel
            ? clamp((elapsed - NEW2_TYPE_E) / (NEW2_ADD - NEW2_TYPE_E - 120))
            : clamp((elapsed - NEW3_TYPE_E) / (NEW3_ADD - NEW3_TYPE_E - 120));

    const visibleCards = BOARD_CARDS.filter(card => {
        if (elapsed < card.appearsAt) return false;
        return !card.archivesAt || elapsed < card.archivesAt + ARCHIVE_EXIT_MS;
    });

    const archived = BOARD_CARDS.filter(card => card.archivesAt && elapsed >= card.archivesAt + ARCHIVE_EXIT_MS).length;
    const cursor = cursorState(elapsed);

    const currentList = (card: (typeof BOARD_CARDS)[number]) => {
        if (!card.movesAt || !card.toList || elapsed < card.movesAt + 120) return card.list;
        return card.toList;
    };

    return (
        <div className="relative flex h-full overflow-visible">
            <aside className="flex w-[68px] shrink-0 flex-col items-center gap-4 py-5" style={isolationStyle}>
                <span className="flex h-10 w-10 items-center justify-center rounded-medium bg-surface-2 text-accent">
                    <Inbox className="h-4 w-4" strokeWidth={2} />
                </span>
                <span className="h-px w-7 bg-hairline-soft" />
                <span className="flex h-9 w-9 items-center justify-center rounded-medium text-ink-muted">
                    <Plus className="h-4 w-4" strokeWidth={2.1} />
                </span>
            </aside>

            <main className="min-w-0 flex-1 p-3" style={isolationStyle}>
                <div className="flex h-full flex-col overflow-hidden rounded-card bg-canvas">
                    <header className="flex h-[76px] shrink-0 items-center justify-between px-5">
                        <div className="flex min-w-0 items-center gap-2">
                            <span className="truncate font-display text-[28px] leading-none tracking-[-0.045em] text-ink">{BOARD_NAME}</span>
                            <BookOpen className="h-4 w-4 shrink-0 text-ink-muted" strokeWidth={1.9} />
                            <ChevronDown className="h-4 w-4 shrink-0 text-ink-muted" strokeWidth={1.9} />
                        </div>

                        <div className="ml-4 flex items-center gap-2">
                            <span className="flex h-9 w-9 items-center justify-center rounded-medium text-ink-muted">
                                <Filter className="h-4 w-4" strokeWidth={1.9} />
                            </span>
                            <span className="flex h-9 w-9 items-center justify-center rounded-medium text-ink-muted">
                                <Columns3 className="h-4 w-4" strokeWidth={1.9} />
                            </span>
                            <span className="flex h-9 w-9 items-center justify-center rounded-medium text-ink-muted">
                                <Lock className="h-4 w-4" strokeWidth={1.9} />
                            </span>
                            <span className="flex items-center gap-1.5 rounded-pill bg-ink px-3 py-2 text-[11px] font-semibold text-canvas">
                                <UserPlus className="h-3.5 w-3.5" strokeWidth={2} /> Compartir
                            </span>
                            <span className="flex h-9 w-9 items-center justify-center rounded-medium text-ink-muted">
                                <MoreHorizontal className="h-4 w-4" strokeWidth={2} />
                            </span>
                        </div>
                    </header>

                    <LayoutGroup id="zenth-demo-board">
                     <div className="grid flex-1 grid-cols-[repeat(4,minmax(0,1fr))_176px] items-start gap-4 px-5 pb-4 pt-1">
                        {order.map((key) => {
                            const list = listByKey.get(key)!;
                            const cards = visibleCards.filter(card => currentList(card) === key);
                            return (
                                <motion.section
                                    layout
                                    key={key}
                                    transition={{ layout: { duration: .72, ease: [0.16, 1, 0.3, 1] } }}
                                    className="flex min-w-0 flex-col overflow-visible"
                                >
                                    <header className="shrink-0">
                                        <div className="flex h-8 items-center gap-2 text-ink">
                                            <GripVertical className="h-3.5 w-3.5 text-ink-muted" strokeWidth={2.1} />
                                            <span className="text-[11px] font-semibold">{list.label}</span>
                                            {cards.length > 0 && <span className="text-[10px] tabular-nums text-ink-muted">{cards.length}</span>}
                                            <MoreHorizontal className="ml-auto h-3.5 w-3.5 text-ink-muted" strokeWidth={2} />
                                        </div>
                                        <span className="mt-1 block h-[3px] rounded-pill" style={{ backgroundColor: list.accent }} />
                                    </header>

                                    <div className="relative flex min-h-0 flex-1 flex-col gap-2.5 pt-3">
                                        <AnimatePresence mode="popLayout">
                                            {cards.map(card => <TaskCard key={card.id} card={card} elapsed={elapsed} accent={list.accent} />)}
                                        </AnimatePresence>

                                        {cards.length === 0 && (
                                            <span className="mt-8 text-center text-[10px] italic text-ink-muted">{list.empty}</span>
                                        )}

                                        <motion.span
                                            animate={((firstPanel || secondPanel || thirdPanel) && key === 'porhacer') ? { backgroundColor: 'var(--fr-surface-2)' } : { backgroundColor: 'transparent' }}
                                            className="flex items-center gap-1.5 rounded-[8px] px-2 py-2 text-[10px] text-ink-muted"
                                        >
                                            <Plus className="h-3.5 w-3.5" strokeWidth={2.2} /> Añade una tarea
                                        </motion.span>
                                    </div>
                                </motion.section>
                            );
                        })}
                        <aside className="flex min-w-0 flex-col gap-3">
                            <span className="flex h-10 items-center gap-2 rounded-medium border border-dashed border-hairline px-3 text-[10px] text-ink-muted">
                                <Plus className="h-3.5 w-3.5" strokeWidth={2.2} /> Añade otra lista
                            </span>
                            <div className="flex items-center gap-2 rounded-medium border border-hairline-soft px-3 py-3">
                                <History className="h-4 w-4 shrink-0 text-ink-muted" strokeWidth={1.9} />
                                <span className="min-w-0 flex-1">
                                    <span className="block text-[11px] font-semibold text-ink">Completado</span>
                                    <span className="block text-[9px] text-ink-muted">Ver historial</span>
                                </span>
                                <motion.span key={archived} initial={{ scale: .7 }} animate={{ scale: 1 }} className="flex h-5 min-w-5 items-center justify-center rounded-full bg-canvas px-1 text-[10px] font-semibold text-ink">{226 + archived}</motion.span>
                                <ChevronRight className="h-3.5 w-3.5 shrink-0 text-ink-muted" strokeWidth={2} />
                            </div>
                        </aside>
                     </div>
                    </LayoutGroup>
                </div>
            </main>

            <AnimatePresence>
                {panelOpen && (
                    <>
                        <motion.div key="create-backdrop" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className={`absolute -top-[72px] bottom-0 left-0 right-0 z-40 ${bare ? '' : 'bg-black/70'}`} />
                        <motion.aside
                            key={firstPanel ? 'new-one' : secondPanel ? 'new-two' : 'new-three'}
                            initial={{ x: 440 }} animate={{ x: 0 }} exit={{ x: 440 }}
                            transition={{ duration: .42, ease: [0.16, 1, 0.3, 1] }}
                            className="absolute -top-[72px] right-0 z-50 h-[800px] w-[430px] border-l border-hairline bg-canvas"
                        >
                            <CreatePanel typed={panelTitle} isTyping={panelTyping} isSubmitting={panelSubmitting} listLabel="Baja" fillProgress={panelFillProgress} description={panelDescription} />
                        </motion.aside>
                    </>
                )}
            </AnimatePresence>

            <AnimatePresence>
                {cardOpen && (
                    <>
                        <motion.div key="card-backdrop" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className={`absolute -top-[72px] bottom-0 left-0 right-0 z-40 ${bare ? '' : 'bg-black/60'}`} />
                        <motion.aside
                            key="card-panel"
                            initial={{ x: 440 }} animate={{ x: 0 }} exit={{ x: 440 }}
                            transition={{ duration: .42, ease: [0.16, 1, 0.3, 1] }}
                            className="absolute -top-[72px] right-0 z-50 h-[800px] w-[430px] border-l border-hairline bg-canvas"
                        >
                            <div className="absolute -left-[52px] top-[88px] flex flex-col gap-2">
                                {[X, AlignLeft, Pencil, Target, Trash2].map((Icon, index) => (
                                    <span key={index} className={`flex h-9 w-9 items-center justify-center rounded-medium ${index === 4 ? 'bg-semantics-error text-white' : 'bg-surface-2 text-ink'}`}>
                                        <Icon className="h-4 w-4" strokeWidth={1.9} />
                                    </span>
                                ))}
                            </div>
                            <BoardCardPanel title={cardPending?.title ?? ''} note={cardPending?.description} assignee={CARD_ASSIGNEE} assigned={cardAssigned} pressed={cardPressed} />
                        </motion.aside>
                    </>
                )}
            </AnimatePresence>

            <motion.span
                animate={{ left: cursor.x, top: cursor.y, scale: cursor.click ? .86 : 1 }}
                transition={{ duration: .12, ease: 'linear' }}
                className="pointer-events-none absolute z-[70] text-white drop-shadow-[0_2px_3px_rgba(0,0,0,.75)]"
            >
                <MousePointer2 className="h-6 w-6 fill-white text-black" strokeWidth={1.2} style={CURSOR_ZOOM_STYLE} />
                {cursor.click && <motion.span initial={{ opacity: .8, scale: .3 }} animate={{ opacity: 0, scale: 1.35 }} className="absolute -left-2 -top-2 h-9 w-9 rounded-full border-2 border-white/80" />}
            </motion.span>
        </div>
    );
};
