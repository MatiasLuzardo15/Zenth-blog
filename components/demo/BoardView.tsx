import React from 'react';
import { AnimatePresence, LayoutGroup, motion } from 'framer-motion';
import {
    Check, ChevronRight, GripVertical, History, Inbox, MoreHorizontal,
    MousePointer2, Plus, Sparkles, UserPlus,
} from 'lucide-react';
import {
    ARCHIVE_AT, ARCHIVE2_AT, BOARD_CARDS, BOARD_DESCRIPTION, BOARD_LISTS,
    BOARD_NAME, DRAG1_AT, DRAG2_AT, DRAG3_AT, NEW1_ADD, NEW1_CARD, NEW1_OPEN,
    NEW1_TYPE_E, NEW1_TYPE_S, NEW2_ADD, NEW2_CARD, NEW2_OPEN, NEW2_TYPE_E,
    NEW2_TYPE_S, NEW3_ADD, NEW3_CARD, NEW3_OPEN, NEW3_TYPE_E, NEW3_TYPE_S,
    SWAP_AT, accentTextColor, typewriter,
} from './timeline';
import { CreatePanel } from './panels';

interface BoardViewProps {
    elapsed: number;
}

const DRAG_MS = 1050;
const COLUMN_STEP = 251;
const ARCHIVE_CHECK_MS = 700;
const ARCHIVE_EXIT_MS = 1350;

const initialOrder = ['encurso', 'porhacer', 'listo', 'revision'];
const swappedOrder = ['porhacer', 'encurso', 'listo', 'revision'];

const clamp = (value: number) => Math.max(0, Math.min(1, value));
const between = (elapsed: number, from: number, to: number) => elapsed >= from && elapsed < to;

const TaskCard: React.FC<{
    card: (typeof BOARD_CARDS)[number];
    elapsed: number;
}> = ({ card, elapsed }) => {
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
                y: dragging ? -5 : archiving ? -8 : 0,
                rotate: dragging ? 1.2 : 0,
                scale: dragging ? 1.018 : archiving ? 0.94 : 1,
            }}
            exit={{ opacity: 0, y: -8, scale: 0.94 }}
            transition={{
                layout: { duration: .78, ease: [0.16, 1, 0.3, 1] },
                duration: dragging ? .18 : .42,
                ease: [0.16, 1, 0.3, 1],
            }}
            className="relative z-10 rounded-[10px] bg-canvas px-3 py-2.5 shadow-card-resting"
            style={dragging ? { zIndex: 30, boxShadow: '0 16px 34px rgba(0,0,0,0.3)' } : undefined}
        >
            <div className="flex items-start gap-2">
                <motion.span
                    animate={checked ? { scale: [1, .82, 1], backgroundColor: 'var(--fr-ink)' } : { scale: 1, backgroundColor: 'transparent' }}
                    transition={{ duration: .28 }}
                    className="mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full border"
                    style={{ borderColor: 'var(--fr-ink-muted)' }}
                >
                    {checked && <Check className="h-2.5 w-2.5 text-canvas" strokeWidth={3.2} />}
                </motion.span>
                <span className="min-w-0 flex-1">
                    <span className={`block text-[12px] font-semibold leading-tight text-ink transition-opacity duration-300 ${checked ? 'line-through opacity-55' : ''}`}>{card.title}</span>
                    <span className="mt-1 block text-[9px] tabular-nums text-ink-muted">{card.time} · 30m</span>
                </span>
                <MoreHorizontal className="h-3.5 w-3.5 shrink-0 text-ink-muted" strokeWidth={1.9} />
            </div>
        </motion.div>
    );
};

const cursorState = (elapsed: number) => {
    if (between(elapsed, NEW1_OPEN - 650, NEW1_OPEN + 300)) return { x: 405, y: 350, click: elapsed >= NEW1_OPEN - 100 };
    if (between(elapsed, NEW1_OPEN, NEW1_CARD)) return { x: elapsed >= NEW1_ADD - 180 ? 1195 : 1010, y: elapsed >= NEW1_ADD - 180 ? -48 : 28, click: elapsed >= NEW1_ADD - 120 };
    if (between(elapsed, NEW2_OPEN - 650, NEW2_OPEN + 300)) return { x: 405, y: 350, click: elapsed >= NEW2_OPEN - 100 };
    if (between(elapsed, NEW2_OPEN, NEW2_CARD)) return { x: elapsed >= NEW2_ADD - 180 ? 1195 : 1010, y: elapsed >= NEW2_ADD - 180 ? -48 : 28, click: elapsed >= NEW2_ADD - 120 };
    if (between(elapsed, NEW3_OPEN - 650, NEW3_OPEN + 300)) return { x: 405, y: 350, click: elapsed >= NEW3_OPEN - 100 };
    if (between(elapsed, NEW3_OPEN, NEW3_CARD)) return { x: elapsed >= NEW3_ADD - 180 ? 1195 : 1010, y: elapsed >= NEW3_ADD - 180 ? -48 : 28, click: elapsed >= NEW3_ADD - 120 };

    if (between(elapsed, DRAG1_AT - 350, DRAG1_AT + DRAG_MS)) {
        const p = clamp((elapsed - DRAG1_AT) / DRAG_MS);
        return { x: 455 - COLUMN_STEP * p, y: 310 - 20 * Math.sin(p * Math.PI), click: elapsed >= DRAG1_AT };
    }
    if (between(elapsed, DRAG2_AT - 350, DRAG2_AT + DRAG_MS)) {
        const p = clamp((elapsed - DRAG2_AT) / DRAG_MS);
        return { x: 455 + COLUMN_STEP * 2 * p, y: 365 - 26 * Math.sin(p * Math.PI), click: elapsed >= DRAG2_AT };
    }
    if (between(elapsed, DRAG3_AT - 350, DRAG3_AT + DRAG_MS)) {
        const p = clamp((elapsed - DRAG3_AT) / DRAG_MS);
        return { x: 455 + COLUMN_STEP * p, y: 420 - 28 * Math.sin(p * Math.PI), click: elapsed >= DRAG3_AT };
    }
    if (between(elapsed, SWAP_AT - 350, SWAP_AT + 1150)) {
        const p = clamp((elapsed - SWAP_AT) / 850);
        return { x: 204 + COLUMN_STEP * p, y: 203, click: elapsed >= SWAP_AT };
    }
    if (between(elapsed, ARCHIVE_AT - 350, ARCHIVE_AT + ARCHIVE_EXIT_MS)) {
        return { x: 858, y: 178, click: between(elapsed, ARCHIVE_AT, ARCHIVE_AT + 360) };
    }
    if (between(elapsed, ARCHIVE2_AT - 350, ARCHIVE2_AT + ARCHIVE_EXIT_MS)) {
        return { x: 356, y: 178, click: between(elapsed, ARCHIVE2_AT, ARCHIVE2_AT + 360) };
    }
    return { x: 600, y: 66, click: false };
};

/** Acto II: pizarra con creación, movimiento, reordenado y archivado. */
export const BoardView: React.FC<BoardViewProps> = ({ elapsed }) => {
    const order = elapsed >= SWAP_AT ? swappedOrder : initialOrder;
    const listByKey = new Map(BOARD_LISTS.map(list => [list.key, list]));

    const firstPanel = between(elapsed, NEW1_OPEN, NEW1_CARD);
    const secondPanel = between(elapsed, NEW2_OPEN, NEW2_CARD);
    const thirdPanel = between(elapsed, NEW3_OPEN, NEW3_CARD);
    const panelOpen = firstPanel || secondPanel || thirdPanel;
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
            <aside className="flex w-[68px] shrink-0 flex-col items-center gap-4 border-r border-hairline-soft py-5">
                <span className="flex h-10 w-10 items-center justify-center rounded-medium bg-surface-2 text-accent">
                    <Inbox className="h-4 w-4" strokeWidth={2} />
                </span>
                <span className="h-px w-7 bg-hairline-soft" />
                <span className="flex h-9 w-9 items-center justify-center rounded-medium text-ink-muted">
                    <Plus className="h-4 w-4" strokeWidth={2.1} />
                </span>
            </aside>

            <main className="min-w-0 flex-1 p-4">
                <div className="flex h-full flex-col overflow-hidden rounded-card border border-hairline bg-surface-1">
                    <header className="flex h-[104px] shrink-0 items-center justify-between border-b border-hairline-soft px-5">
                        <div className="flex min-w-0 items-center gap-3">
                            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-medium bg-canvas text-accent shadow-card-resting">
                                <Sparkles className="h-5 w-5" strokeWidth={1.9} />
                            </span>
                            <span className="min-w-0">
                                <span className="flex items-center gap-2">
                                    <span className="truncate font-display text-[28px] leading-none tracking-[-0.045em] text-ink">{BOARD_NAME}</span>
                                    <span className="rounded-pill bg-canvas px-2 py-1 text-[9px] font-semibold text-ink-muted">Compartida</span>
                                </span>
                                <span className="mt-1.5 block text-[11px] text-ink-muted">{BOARD_DESCRIPTION}</span>
                            </span>
                        </div>

                        <div className="ml-4 flex items-center gap-3">
                            <span className="flex -space-x-2">
                                <span className="flex h-7 w-7 items-center justify-center rounded-full border-2 border-surface-1 bg-grad-magenta text-[10px] font-bold text-white">M</span>
                                <span className="flex h-7 w-7 items-center justify-center rounded-full border-2 border-surface-1 bg-grad-violet text-[10px] font-bold text-white">J</span>
                            </span>
                            <span className="flex items-center gap-1.5 rounded-pill bg-canvas px-3 py-2 text-[11px] font-semibold text-ink shadow-card-resting">
                                <UserPlus className="h-3.5 w-3.5" strokeWidth={2} /> Compartir
                            </span>
                            <span className="w-[150px]">
                                <span className="flex justify-between text-[9px] text-ink-muted"><span>{224 + archived} de 226 tareas de hoy</span><b className="text-ink">{Math.round(((224 + archived) / 226) * 100)}%</b></span>
                                <span className="mt-1.5 block h-1 overflow-hidden rounded-pill bg-canvas"><motion.span className="block h-full rounded-pill bg-accent" animate={{ width: `${((224 + archived) / 226) * 100}%` }} transition={{ duration: .5 }} /></span>
                            </span>
                        </div>
                    </header>

                    <LayoutGroup id="zenth-demo-board">
                     <div className="grid flex-1 grid-cols-[repeat(4,minmax(0,1fr))_176px] items-start gap-3 p-4">
                        {order.map((key) => {
                            const list = listByKey.get(key)!;
                            const cards = visibleCards.filter(card => currentList(card) === key);
                            return (
                                <motion.section
                                    layout
                                    key={key}
                                    transition={{ layout: { duration: .72, ease: [0.16, 1, 0.3, 1] } }}
                                    className="flex h-[238px] min-w-0 flex-col overflow-visible rounded-medium bg-canvas"
                                >
                                    <header
                                        className="flex h-10 shrink-0 items-center gap-2 rounded-t-medium px-3"
                                        style={{ backgroundColor: list.accent, color: accentTextColor(list.accent) }}
                                    >
                                        <GripVertical className="h-3.5 w-3.5" strokeWidth={2.1} />
                                        <span className="text-[11px] font-semibold">{list.label}</span>
                                        {cards.length > 0 && <span className="flex h-4 min-w-4 items-center justify-center rounded-full bg-white/45 px-1 text-[9px] font-bold">{cards.length}</span>}
                                        <MoreHorizontal className="ml-auto h-3.5 w-3.5" strokeWidth={2} />
                                    </header>

                                    <div className="relative flex min-h-0 flex-1 flex-col gap-2 p-2">
                                        <AnimatePresence mode="popLayout">
                                            {cards.map(card => <TaskCard key={card.id} card={card} elapsed={elapsed} />)}
                                        </AnimatePresence>

                                        {cards.length === 0 && (
                                            <span className="mt-8 text-center text-[10px] italic text-ink-muted">{list.empty}</span>
                                        )}

                                        <motion.span
                                            animate={((firstPanel || secondPanel || thirdPanel) && key === 'porhacer') ? { backgroundColor: 'var(--fr-surface-2)' } : { backgroundColor: 'transparent' }}
                                            className="mt-auto flex items-center gap-1.5 rounded-[8px] px-2 py-2 text-[10px] text-ink-muted"
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
                            <div className="flex items-center gap-2 rounded-medium bg-surface-2 px-3 py-3 shadow-card-resting">
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
                        <motion.div key="create-backdrop" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="absolute -top-[72px] bottom-0 left-0 right-0 z-40 bg-black/70" />
                        <motion.aside
                            key={firstPanel ? 'new-one' : secondPanel ? 'new-two' : 'new-three'}
                            initial={{ x: 440 }} animate={{ x: 0 }} exit={{ x: 440 }}
                            transition={{ duration: .42, ease: [0.16, 1, 0.3, 1] }}
                            className="absolute -top-[72px] right-0 z-50 h-[800px] w-[430px] border-l border-hairline bg-canvas"
                        >
                            <CreatePanel typed={panelTitle} isTyping={panelTyping} isSubmitting={panelSubmitting} listLabel="Inicio" fillProgress={panelFillProgress} />
                        </motion.aside>
                    </>
                )}
            </AnimatePresence>

            <motion.span
                animate={{ left: cursor.x, top: cursor.y, scale: cursor.click ? .86 : 1 }}
                transition={{ duration: .12, ease: 'linear' }}
                className="pointer-events-none absolute z-[70] text-white drop-shadow-[0_2px_3px_rgba(0,0,0,.75)]"
            >
                <MousePointer2 className="h-6 w-6 fill-white text-black" strokeWidth={1.2} />
                {cursor.click && <motion.span initial={{ opacity: .8, scale: .3 }} animate={{ opacity: 0, scale: 1.35 }} className="absolute -left-2 -top-2 h-9 w-9 rounded-full border-2 border-white/80" />}
            </motion.span>
        </div>
    );
};
