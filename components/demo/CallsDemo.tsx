import React, { useEffect, useLayoutEffect, useRef, useState } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import {
    ArrowRight, Bell, Calendar, CalendarClock, ChevronDown, ChevronUp, Copy,
    Expand, ExternalLink, Flame, Hand, LayoutDashboard, LibraryBig, Link2, LogOut,
    MessageCircle, Mic, MicOff, MonitorUp, MoreVertical, MousePointer2, Phone,
    PhoneCall, Search, Smile, Sparkles, Target, Timer, Video, X,
} from 'lucide-react';
import { DESIGN_H, DESIGN_W, MIN_SCALE } from './timeline';

/**
 * Guion de la demo de Reuniones. Igual que AppDemo: todo se deriva de
 * `elapsed` dentro de un ciclo, sin timeouts encadenados.
 *
 * Acto I · Reunión express: crea un enlace de invitado y lo cierra.
 * Acto II · se mira la sala de una pizarra y se entra.
 * Acto III · la conversación ocupa el escenario (voz, sin cámara).
 * Acto IV · se cuelga y se llama en privado a alguien del equipo.
 */

const CYCLE = 27800;
const HOVER_EXPRESS = 900;
const EXPRESS_CLICK_AT = 1500;
const EXPRESS_CLOSE_HOVER = 4600;
const EXPRESS_CLOSE_AT = 5000;
const HOVER_JOIN = 6000;
const JOIN_AT = 6600;
const ROOM_CALL_AT = 7000;
const HOVER_LEAVE = 14600;
const LEAVE_AT = 15200;
const SELECT_PROPOSAL = 17000;
const HOVER_CALL = 18800;
const PRIVATE_AT = 19600;

const AURORA =
    'radial-gradient(circle at 24% 16%, rgba(255,255,255,0.12), transparent 50%), linear-gradient(135deg, #1b1035 0%, #33236b 35%, #0c5a63 75%, #041018 100%)';
const FOREST =
    'radial-gradient(circle at 24% 18%, rgba(255,255,255,0.09), transparent 55%), linear-gradient(160deg, #0c2318 0%, #163d27 50%, #05100a 100%)';

const NAV = [
    { label: 'Agenda', icon: Calendar },
    { label: 'Pizarras', icon: LayoutDashboard },
    { label: 'Biblioteca', icon: LibraryBig },
    { label: 'Reuniones', icon: PhoneCall },
];

type Person = {
    id: string;
    name: string;
    initials: string;
    tone: string;
    you?: boolean;
};

const MATIAS: Person = { id: 'matias', name: 'Matías', initials: 'ML', tone: 'from-[#6a4cf5] to-[#d44df0]', you: true };
const LUCIA: Person = { id: 'lucia', name: 'Lucía', initials: 'LV', tone: 'from-[#0d4f5e] to-[#33236b]' };
const DIEGO: Person = { id: 'diego', name: 'Diego', initials: 'DR', tone: 'from-[#1a2340] to-[#5b1f66]' };
const SOFIA: Person = { id: 'sofia', name: 'Sofía', initials: 'SR', tone: 'from-[#7a2c4a] to-[#c1553f]' };

const between = (elapsed: number, from: number, to: number) => elapsed >= from && elapsed < to;

const formatDuration = (ms: number) => {
    const total = Math.max(0, Math.floor(ms / 1000));
    const minutes = Math.floor(total / 60);
    const seconds = total % 60;
    return `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
};

const Avatar: React.FC<{ person: Person; size: string; ring?: boolean; inRoom?: boolean }> = ({
    person, size, ring, inRoom,
}) => (
    <span className="relative inline-flex shrink-0">
        <span className={`flex items-center justify-center rounded-full bg-gradient-to-br font-semibold text-white ${person.tone} ${size} ${ring ? 'ring-2 ring-accent' : ''}`}>
            {person.initials}
        </span>
        {inRoom && (
            <span className="absolute -bottom-0.5 -right-0.5 h-2.5 w-2.5 rounded-full border-2 border-surface-1 bg-accent" />
        )}
    </span>
);

const CallsDemo: React.FC = () => {
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
            setElapsed(ROOM_CALL_AT + 1800);
            return;
        }
        if (!inView) return;
        const startedAt = performance.now();
        const id = window.setInterval(() => setElapsed((performance.now() - startedAt) % CYCLE), 60);
        return () => window.clearInterval(id);
    }, [reduceMotion, inView]);

    const { scale, width: frameWidth } = box;
    const overflowX = Math.max(0, DESIGN_W * scale - frameWidth);

    const selected: 'launch' | 'proposal' = elapsed >= SELECT_PROPOSAL && elapsed < PRIVATE_AT
        ? 'proposal'
        : 'launch';
    const inRoomCall = elapsed >= ROOM_CALL_AT && elapsed < LEAVE_AT;
    const inPrivateCall = elapsed >= PRIVATE_AT;
    const inCall = inRoomCall || inPrivateCall;
    const launchLive = elapsed < LEAVE_AT;
    const expressPressed = between(elapsed, EXPRESS_CLICK_AT, EXPRESS_CLICK_AT + 280);
    const showExpress = between(elapsed, EXPRESS_CLICK_AT, EXPRESS_CLOSE_AT);
    const joinPressed = between(elapsed, HOVER_JOIN, JOIN_AT + 280);
    const leavePressed = between(elapsed, HOVER_LEAVE, LEAVE_AT + 280);
    const callPressed = between(elapsed, HOVER_CALL, PRIVATE_AT + 280);
    const luciaSpeaking = inRoomCall && (Math.floor(elapsed / 1800) % 2 === 0);
    const sofiaSpeaking = inPrivateCall && (Math.floor(elapsed / 1600) % 2 === 0);

    const cropFocus = inCall
        ? 0.72
        : between(elapsed, HOVER_JOIN, JOIN_AT + 400)
            ? 0.58
            : between(elapsed, HOVER_CALL, PRIVATE_AT)
                ? 0.06
                : selected === 'proposal'
                    ? 0.18
                    : 0.12;

    const cursor = inCall
        ? null
        : between(elapsed, HOVER_CALL - 500, PRIVATE_AT + 400)
            ? { x: 280, y: 671, click: callPressed }
            : between(elapsed, SELECT_PROPOSAL - 700, SELECT_PROPOSAL + 480)
                ? { x: 150, y: 533, click: between(elapsed, SELECT_PROPOSAL - 80, SELECT_PROPOSAL + 240) }
            : between(elapsed, HOVER_LEAVE - 420, LEAVE_AT + 360)
                ? { x: 912, y: 754, click: leavePressed }
            : between(elapsed, HOVER_JOIN - 520, JOIN_AT + 360)
                ? { x: 706, y: 520, click: joinPressed }
            : between(elapsed, EXPRESS_CLOSE_HOVER, EXPRESS_CLOSE_AT + 280)
                ? { x: 830, y: 240, click: between(elapsed, EXPRESS_CLOSE_AT, EXPRESS_CLOSE_AT + 280) }
            : between(elapsed, HOVER_EXPRESS, EXPRESS_CLICK_AT + 280)
                ? { x: 156, y: 148, click: expressPressed }
            : elapsed < 500
                ? null
                : { x: 250, y: 233, click: false };

    const callStartedAt = inPrivateCall ? PRIVATE_AT : ROOM_CALL_AT;
    const duration = formatDuration(elapsed - callStartedAt);
    const stageTitle = inPrivateCall ? 'Llamada con Sofía' : 'Sala de Plan de lanzamiento';
    const stageKind = inPrivateCall ? 'Llamada de voz privada' : 'Sala de voz del equipo';

    return (
        <div
            ref={wrapRef}
            className="fr-card fr-elevated relative overflow-hidden p-1.5 sm:p-2"
            role="img"
            aria-label="Demostración de Zenth: entra a la sala de una pizarra y luego llama en privado a alguien del equipo."
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
                            {NAV.map(({ label, icon: Icon }) => {
                                const active = label === 'Reuniones';
                                return (
                                    <motion.span
                                        layout
                                        key={label}
                                        className={`relative flex items-center gap-2 rounded-pill px-4 py-2 text-[13px] ${active ? 'font-semibold text-ink' : 'text-ink-muted'}`}
                                    >
                                        {active && (
                                            <motion.span
                                                layoutId="calls-demo-nav-active"
                                                className="absolute inset-0 rounded-pill bg-canvas shadow-card-resting"
                                                transition={{ duration: .45, ease: [0.16, 1, 0.3, 1] }}
                                            />
                                        )}
                                        <span className="relative">
                                            <Icon className="h-4 w-4" strokeWidth={active ? 2.4 : 1.9} />
                                            {label === 'Reuniones' && inCall && (
                                                <span className="absolute -right-0.5 -top-0.5 h-1.5 w-1.5 rounded-full bg-accent" />
                                            )}
                                        </span>
                                        <span className="relative">{label}</span>
                                    </motion.span>
                                );
                            })}
                        </nav>

                        <div className="flex items-center gap-2">
                            <span className="flex h-9 w-9 items-center justify-center rounded-pill bg-surface-1 text-ink-muted">
                                <Search className="h-4 w-4" strokeWidth={1.9} />
                            </span>
                            <span className="flex h-9 w-9 items-center justify-center rounded-pill bg-surface-1 text-ink-muted">
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

                    <div className="flex h-[728px] bg-[#f6f7fb] dark:bg-black">
                        <aside className="flex w-[312px] shrink-0 flex-col px-4 pb-6 pt-6">
                            <div className="grid grid-cols-3 gap-2">
                                {[
                                    { icon: Link2, label: 'Crear enlace' },
                                    { icon: Video, label: 'Reunión express' },
                                    { icon: CalendarClock, label: 'Programar' },
                                ].map(({ icon: Icon, label }) => (
                                    <span
                                        key={label}
                                        className={`flex min-h-[104px] flex-col items-start justify-between rounded-large bg-canvas p-3 transition-transform duration-150 ${label === 'Reunión express' && expressPressed ? 'scale-[0.96]' : ''}`}
                                    >
                                        <span className="flex h-9 w-9 items-center justify-center rounded-[13px] bg-white text-ink shadow-card-resting dark:bg-surface-2">
                                            <Icon className="h-4 w-4" strokeWidth={2.2} />
                                        </span>
                                        <span className="text-[13px] font-semibold leading-[1.2] text-ink">{label}</span>
                                    </span>
                                ))}
                            </div>

                            <div className="relative mt-4">
                                <div className="h-px bg-hairline" />
                            </div>

                            <p className="mt-4 px-2.5 text-[13px] font-semibold text-ink">
                                Salas de tus pizarras
                                <span className="ml-2 text-[12px] font-normal tabular-nums text-ink-muted">2</span>
                            </p>

                            <ul className="mt-2 space-y-1.5">
                                <RoomRow
                                    selected={selected === 'launch' && !inPrivateCall}
                                    icon={Sparkles}
                                    name="Plan de lanzamiento"
                                    line={inRoomCall ? 'Estás dentro' : launchLive ? '1 persona en la sala' : '3 integrantes'}
                                    live={launchLive}
                                    accentLine={inRoomCall || launchLive}
                                >
                                    <MemberRow person={MATIAS} status="Tú" />
                                    <MemberRow person={LUCIA} status={launchLive ? 'En la sala' : 'En línea'} present={launchLive} />
                                    <MemberRow person={DIEGO} status="En línea" />
                                </RoomRow>
                                <RoomRow
                                    selected={selected === 'proposal' && !inCall}
                                    icon={Target}
                                    name="Propuesta comercial"
                                    line="2 integrantes"
                                    live={false}
                                >
                                    <MemberRow person={MATIAS} status="Tú" />
                                    <MemberRow
                                        person={SOFIA}
                                        status="En línea"
                                        callHighlight={between(elapsed, HOVER_CALL, PRIVATE_AT + 500)}
                                    />
                                </RoomRow>
                            </ul>

                            <div className="mt-5">
                                <p className="px-2.5 text-[13px] font-semibold text-ink">Reuniones programadas</p>
                                <p className="mt-1 px-2.5 text-[12px] leading-relaxed text-ink-muted">
                                    Una llamada aislada, sin dar acceso a tus pizarras.
                                </p>
                                <div className="mt-2 flex min-h-[56px] items-center gap-3 rounded-medium px-2.5 py-2">
                                    <span className="flex h-10 w-10 items-center justify-center rounded-[14px] bg-surface-2 text-ink">
                                        <CalendarClock className="h-[18px] w-[18px]" strokeWidth={2.2} />
                                    </span>
                                    <span className="min-w-0">
                                        <span className="block truncate text-[14px] font-semibold text-ink">Revisión con cliente</span>
                                        <span className="mt-0.5 block text-[12px] text-ink-muted">Hoy · 16:30</span>
                                    </span>
                                </div>
                            </div>
                        </aside>

                        <div className="mb-3 mr-3 mt-2 flex min-h-0 min-w-0 flex-1 overflow-hidden rounded-[16px] bg-canvas">
                            <AnimatePresence mode="wait" initial={false}>
                                {inCall ? (
                                    <motion.div
                                        key={inPrivateCall ? 'private' : 'room'}
                                        initial={{ opacity: 0, y: 8 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: -6 }}
                                        transition={{ duration: .22, ease: [0.23, 1, 0.32, 1] }}
                                        className="demo-call-stage flex min-h-0 flex-1 flex-col overflow-hidden bg-cover bg-no-repeat"
                                        style={{ backgroundImage: inPrivateCall ? FOREST : AURORA }}
                                    >
                                        <header className="flex items-start gap-3 px-4 py-3">
                                            <span className="min-w-0 flex-1">
                                                <span className="block truncate text-[15px] font-semibold text-ink">{stageTitle}</span>
                                                <span className="block text-[12px] text-ink-muted">{stageKind} · {duration}</span>
                                            </span>
                                            <span className="demo-call-glass flex h-9 w-9 items-center justify-center rounded-pill border border-hairline">
                                                <MoreVertical className="h-4 w-4" strokeWidth={2.3} />
                                            </span>
                                            <span className="demo-call-glass flex h-9 w-9 items-center justify-center rounded-pill border border-hairline">
                                                <MessageCircle className="h-4 w-4" strokeWidth={2.3} />
                                            </span>
                                            <span className="demo-call-glass flex h-9 w-9 items-center justify-center rounded-pill border border-hairline">
                                                <Expand className="h-4 w-4" strokeWidth={2.3} />
                                            </span>
                                        </header>

                                        <div className="flex min-h-0 flex-1 items-stretch gap-3 p-4">
                                            {(inPrivateCall ? [MATIAS, SOFIA] : [MATIAS, LUCIA]).map(person => {
                                                const speaking = person.id === 'lucia' ? luciaSpeaking : person.id === 'sofia' ? sofiaSpeaking : false;
                                                const muted = person.id === 'diego';
                                                return (
                                                    <div
                                                        key={person.id}
                                                        className={`demo-call-tile flex min-w-0 flex-1 flex-col items-center justify-center gap-2 rounded-card border p-4 ${speaking ? 'border-accent' : 'border-hairline'}`}
                                                    >
                                                        <span className="relative">
                                                            {speaking && (
                                                                <motion.span
                                                                    className="absolute inset-0 rounded-full border-2 border-accent"
                                                                    animate={reduceMotion
                                                                        ? { scale: 1.06, opacity: 0.6 }
                                                                        : { scale: [1, 1.22, 1], opacity: [0.65, 0, 0.65] }}
                                                                    transition={reduceMotion
                                                                        ? { duration: 0 }
                                                                        : { duration: 1.5, repeat: Infinity, ease: 'easeOut' }}
                                                                />
                                                            )}
                                                            <Avatar person={person} size="h-24 w-24 text-[20px]" ring={speaking} />
                                                        </span>
                                                        <span className="truncate text-[13px] text-ink">
                                                            {person.name}
                                                            {person.you && <span className="text-ink-muted"> · Tú</span>}
                                                        </span>
                                                        <span className={`flex items-center gap-1 text-[12px] ${muted ? 'font-semibold text-[#ea580c]' : 'text-ink-muted'}`}>
                                                            {muted ? <MicOff className="h-3 w-3" strokeWidth={2.4} /> : <Mic className="h-3 w-3" strokeWidth={2.4} />}
                                                            {speaking ? 'hablando' : muted ? 'silenciado' : 'activo'}
                                                        </span>
                                                    </div>
                                                );
                                            })}
                                        </div>

                                        <footer className="flex items-center justify-center gap-2 px-4 py-3">
                                            <span className="demo-call-glass flex h-11 overflow-hidden rounded-pill border border-hairline">
                                                <span className="flex w-12 items-center justify-center text-ink">
                                                    <Mic className="h-[17px] w-[17px]" strokeWidth={2.3} />
                                                </span>
                                                <span className="flex w-7 items-center justify-center border-l border-hairline text-ink-muted">
                                                    <ChevronUp className="h-3.5 w-3.5" strokeWidth={2.5} />
                                                </span>
                                            </span>
                                            <span className="demo-call-glass flex h-11 w-12 items-center justify-center rounded-pill border border-hairline text-ink">
                                                <MonitorUp className="h-[17px] w-[17px]" strokeWidth={2.3} />
                                            </span>
                                            <span className="demo-call-glass flex h-11 w-11 items-center justify-center rounded-pill border border-hairline text-ink">
                                                <Smile className="h-[18px] w-[18px]" strokeWidth={2.2} />
                                            </span>
                                            <span className="demo-call-glass flex h-11 w-11 items-center justify-center rounded-pill border border-hairline text-ink">
                                                <Hand className="h-[17px] w-[17px]" strokeWidth={2.2} />
                                            </span>
                                            <span className={`flex h-11 items-center justify-center gap-1.5 rounded-pill bg-[#B91C1C] px-4 text-[13px] font-semibold text-white ${leavePressed && inRoomCall ? 'scale-95' : ''}`}>
                                                <LogOut className="h-[15px] w-[15px]" strokeWidth={2.4} />
                                                {inPrivateCall ? 'Colgar' : 'Abandonar'}
                                            </span>
                                        </footer>
                                    </motion.div>
                                ) : (
                                    <motion.div
                                        key={selected}
                                        initial={{ opacity: 0, y: 8 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: -6 }}
                                        transition={{ duration: .22, ease: [0.23, 1, 0.32, 1] }}
                                        className="demo-call-stage relative flex min-h-0 flex-1 flex-col overflow-hidden"
                                    >
                                        <div
                                            className="pointer-events-none absolute inset-0 bg-cover bg-no-repeat"
                                            style={{ backgroundImage: selected === 'launch' ? AURORA : FOREST }}
                                        />
                                        <div className="relative z-10 flex min-h-full flex-1 flex-col items-center justify-center px-8 py-12 text-center">
                                            <span className="demo-call-glass flex h-16 w-16 items-center justify-center rounded-[22px] border border-hairline text-ink">
                                                {selected === 'launch'
                                                    ? <Sparkles className="h-7 w-7" strokeWidth={2.1} />
                                                    : <Target className="h-7 w-7" strokeWidth={2.1} />}
                                            </span>
                                            <h2 className="mt-5 text-[32px] font-semibold tracking-[-0.031em] text-ink">
                                                {selected === 'launch' ? 'Plan de lanzamiento' : 'Propuesta comercial'}
                                            </h2>
                                            <p className={`mt-2 text-[14px] ${selected === 'launch' && launchLive ? 'text-accent' : 'text-ink-muted'}`}>
                                                {selected === 'launch'
                                                    ? (launchLive ? 'Lucía está dentro.' : 'Nadie está conectado actualmente.')
                                                    : 'Nadie está conectado actualmente.'}
                                            </p>
                                            <div className="mt-6 flex flex-wrap items-center justify-center gap-2">
                                                <span className={`flex h-11 items-center gap-2 rounded-pill bg-white px-5 text-[13px] font-semibold text-black ${joinPressed && selected === 'launch' ? 'scale-95' : ''}`}>
                                                    <Mic className="h-4 w-4" strokeWidth={2.3} />
                                                    {selected === 'launch' && launchLive ? 'Unirse a la sala' : 'Entrar a la sala'}
                                                </span>
                                                <span className="demo-call-glass flex h-11 items-center gap-2 rounded-pill border border-hairline px-4 text-[13px] font-semibold text-ink">
                                                    <ExternalLink className="h-[15px] w-[15px]" strokeWidth={2.3} />
                                                    Abrir la pizarra
                                                </span>
                                            </div>
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    </div>

                    <AnimatePresence>
                        {showExpress && (
                            <motion.div
                                key="express-modal-backdrop"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                transition={{ duration: .25 }}
                                className="absolute inset-0 z-[80] flex items-start justify-center bg-black/70 pt-[210px]"
                            >
                                <motion.div
                                    initial={{ opacity: 0, y: 10, scale: .97 }}
                                    animate={{ opacity: 1, y: 0, scale: 1 }}
                                    exit={{ opacity: 0, y: 8, scale: .97 }}
                                    transition={{ duration: .3, ease: [0.16, 1, 0.3, 1] }}
                                    className="relative w-[440px] rounded-large border border-hairline bg-canvas p-7 shadow-soft-lift"
                                >
                                    <span className="absolute right-5 top-5 flex h-8 w-8 items-center justify-center rounded-pill bg-surface-2 text-ink-muted">
                                        <X className="h-4 w-4" strokeWidth={2} />
                                    </span>
                                    <div className="flex items-start gap-3 pr-8">
                                        <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-medium bg-surface-2 text-ink">
                                            <Link2 className="h-[18px] w-[18px]" strokeWidth={2.1} />
                                        </span>
                                        <div>
                                            <h3 className="text-[17px] font-semibold text-ink">Tu enlace está listo</h3>
                                            <p className="mt-1 text-[12px] leading-relaxed text-ink-muted">
                                                Cualquier persona con el enlace puede entrar como invitada, sin ver tu pizarra.
                                            </p>
                                        </div>
                                    </div>

                                    <p className="mt-5 text-[11px] font-semibold text-ink-muted">Enlace para invitados</p>
                                    <div className="mt-1.5 flex items-center gap-2">
                                        <span className="flex-1 truncate rounded-medium border border-hairline bg-surface-1 px-3 py-2.5 text-[12px] text-ink">
                                            992db-8b2b-4c13-a4a7-dabd0e751d9d
                                        </span>
                                        <span className="flex shrink-0 items-center gap-1.5 rounded-medium bg-surface-2 px-3 py-2.5 text-[12px] font-semibold text-ink">
                                            <Copy className="h-3.5 w-3.5" strokeWidth={2} /> Copiar
                                        </span>
                                    </div>

                                    <div className="mt-3 rounded-medium bg-surface-1 p-3">
                                        <p className="text-[12px] font-semibold text-ink">Acceso limitado a esta llamada</p>
                                        <p className="mt-1 text-[11px] leading-relaxed text-ink-muted">
                                            Los invitados no pueden abrir pizarras, archivos, historial ni otras salas de Zenth.
                                        </p>
                                    </div>

                                    <span className="mt-4 flex h-11 items-center justify-center gap-2 rounded-pill bg-white text-[13px] font-semibold text-black">
                                        Preparar audio y entrar <ArrowRight className="h-4 w-4" strokeWidth={2.2} />
                                    </span>
                                </motion.div>
                            </motion.div>
                        )}
                    </AnimatePresence>

                    <AnimatePresence>
                        {cursor && (
                            <motion.span
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1, left: cursor.x, top: cursor.y, scale: cursor.click ? .86 : 1 }}
                                exit={{ opacity: 0 }}
                                transition={{ duration: .55, ease: [0.16, 1, 0.3, 1] }}
                                className="pointer-events-none absolute z-[90] text-white drop-shadow-[0_2px_3px_rgba(0,0,0,.75)]"
                            >
                                <MousePointer2 className="h-6 w-6 fill-white text-black" strokeWidth={1.2} />
                                {cursor.click && (
                                    <motion.span
                                        key={`${cursor.x}-${cursor.y}-${elapsed.toFixed(0)}`}
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
        </div>
    );
};

const RoomRow: React.FC<{
    selected: boolean;
    icon: React.ComponentType<{ className?: string; strokeWidth?: number }>;
    name: string;
    line: string;
    live: boolean;
    accentLine?: boolean;
    children: React.ReactNode;
}> = ({ selected, icon: Icon, name, line, live, accentLine, children }) => (
    <li>
        <div className="relative flex items-center">
            {selected && (
                <span className="absolute inset-0 rounded-medium bg-canvas" />
            )}
            <div className="relative z-10 flex min-h-[56px] min-w-0 flex-1 items-center gap-3 rounded-medium py-2 pl-2.5 pr-1">
                <span className="relative flex h-10 w-10 shrink-0 items-center justify-center rounded-[14px] bg-surface-2 text-ink">
                    <Icon className="h-[18px] w-[18px]" strokeWidth={2.2} />
                    {live && <span className="absolute -right-0.5 -top-0.5 h-2.5 w-2.5 rounded-full border-2 border-surface-1 bg-accent" />}
                </span>
                <span className="min-w-0 flex-1">
                    <span className="block truncate text-[14px] font-semibold text-ink">{name}</span>
                    <span className={`mt-0.5 block truncate text-[12px] ${accentLine || live ? 'text-accent' : 'text-ink-muted'}`}>{line}</span>
                </span>
            </div>
            <span className="relative z-10 flex h-11 w-11 items-center justify-center text-ink-muted">
                <ChevronDown className="h-4 w-4" strokeWidth={2.2} />
            </span>
        </div>
        <ul className="relative ml-[1.875rem] border-l border-hairline pb-1.5">
            <li>
                <div className="flex min-h-11 items-center gap-2.5 py-1 pl-3 pr-2">
                    <span className="flex h-7 w-7 items-center justify-center rounded-[9px] bg-surface-2 text-ink">
                        <Mic className="h-3.5 w-3.5" strokeWidth={2.2} />
                    </span>
                    <span className="truncate text-[13px] font-semibold text-ink">
                        {line === 'Estás dentro' ? 'Volver a la conversación' : live ? 'Unirse a la sala' : 'Entrar a la sala'}
                    </span>
                </div>
            </li>
            {children}
        </ul>
    </li>
);

const MemberRow: React.FC<{
    person: Person;
    status: string;
    present?: boolean;
    callHighlight?: boolean;
}> = ({ person, status, present, callHighlight }) => (
    <li>
        <div className={`flex min-h-11 items-center gap-2.5 rounded-r-medium py-1 pl-3 pr-2 ${callHighlight ? 'bg-surface-2' : ''}`}>
            <Avatar person={person} size="h-7 w-7 text-[9px]" inRoom={present} />
            <span className="min-w-0 flex-1">
                <span className="block truncate text-[13px] font-semibold text-ink">{person.name}</span>
                <span className={`block text-[12px] ${present ? 'text-accent' : 'text-ink-muted'}`}>{status}</span>
            </span>
            {!person.you && !present && (
                <Phone className={`h-[15px] w-[15px] ${callHighlight ? 'text-ink' : 'text-ink-muted'}`} strokeWidth={2.2} />
            )}
        </div>
    </li>
);

export default CallsDemo;
