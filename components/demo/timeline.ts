/**
 * Guion de la demo animada del hero.
 *
 * Todo el movimiento se deriva del tiempo transcurrido dentro de un ciclo, no
 * de timeouts encadenados: cada fotograma se calcula desde cero a partir de
 * `elapsed`, así que el bucle no puede desincronizarse ni acumular deriva.
 *
 * Las marcas están en milisegundos desde el inicio del ciclo. Al tocarlas,
 * conviene mantener el orden de la lista: se leen como un storyboard.
 */

/* ── Lienzo ──────────────────────────────────────────────────────────────── */

export const DESIGN_W = 1280;
export const DESIGN_H = 800;

/**
 * Por debajo de este factor la maqueta deja de leerse (el cuerpo de 13 px
 * bajaría de 8 px). A partir de ahí se deja de encoger y se recorta por los
 * lados: las proporciones internas quedan intactas, sólo se ve un trozo más
 * pequeño de la pantalla. Es un recorte, no una deformación.
 */
export const MIN_SCALE = 0.62;

/* ── Acto I · La pantalla de Hoy ─────────────────────────────────────────── */

export const TYPE_START = 800;
export const TYPE_END = 2800;
export const PRESS_AT = 3050;
export const APPEARS_AT = 3300;
export const COMPLETES_AT = 5600;
export const DETAILS_AT = 7600;
export const EDIT_AT = 11600;
export const PANEL_CLOSE_AT = 16600;

export const TODAY_TASK = 'Preparar la propuesta';

/* ── Acto II · La pizarra ────────────────────────────────────────────────── */

export const BOARD_AT = 18200;

export const NEW1_OPEN = 19400;
export const NEW1_TYPE_S = 19900;
export const NEW1_TYPE_E = 21300;
export const NEW1_ADD = 24600;
export const NEW1_CARD = 25000;

export const NEW2_OPEN = 25800;
export const NEW2_TYPE_S = 26300;
export const NEW2_TYPE_E = 27700;
export const NEW2_ADD = 31000;
export const NEW2_CARD = 31400;

export const NEW3_OPEN = 32200;
export const NEW3_TYPE_S = 32700;
export const NEW3_TYPE_E = 34200;
export const NEW3_ADD = 37500;
export const NEW3_CARD = 37900;

export const DRAG1_AT = 39200;
export const DRAG2_AT = 41200;
export const DRAG3_AT = 43200;
export const SWAP_AT = 45500;
export const ARCHIVE_AT = 48000;
export const ARCHIVE2_AT = 50300;
export const BOARD_END = 52900;

/* ── Acto III · De una tarea a una sesión de enfoque ───────────────────── */

export const RETURN_TODAY_AT = 53500;
export const TASK_OPEN_AT = 55200;
export const FOCUS_ACTION_AT = 58600;
export const FOCUS_VIEW_AT = 59300;
export const FOCUS_START_AT = 62600;
export const FOCUS_RUNNING_AT = 63200;
export const FOCUS_END = 68100;

export const FOCUS_TASK = 'Revisar la propuesta comercial';

export const CYCLE = 70000;

/* ── Datos de la pizarra ─────────────────────────────────────────────────── */

export const BOARD_NAME = 'Plan de lanzamiento';
export const BOARD_DESCRIPTION = 'Una vista clara para avanzar sin perder el foco.';

export interface DemoList {
    key: string;
    label: string;
    /** Paleta real de `constants/boardLists.ts`. */
    accent: string;
    empty: string;
}

export const BOARD_LISTS: DemoList[] = [
    { key: 'encurso', label: 'En proceso', accent: '#DCEB8A', empty: 'Suelta una tarjeta aquí' },
    { key: 'porhacer', label: 'Inicio', accent: '#DCEB8A', empty: 'Nada por clasificar' },
    { key: 'listo', label: 'Terminado', accent: '#E1EF91', empty: 'Objetivo cumplido' },
    { key: 'revision', label: 'Por hacer', accent: '#FFE082', empty: 'Cuando haya tiempo' },
];

/** Color de texto legible sobre cada acento — copiado de la aplicación. */
const ACCENT_TEXT: Record<string, string> = {
    '#FFB7CE': '#701B3F',
    '#FFE082': '#5F4B1B',
    '#81D4FA': '#01579B',
    '#B39DDB': '#4527A0',
    '#A5D6A7': '#1B4332',
};

export const accentTextColor = (accent: string) => ACCENT_TEXT[accent.toUpperCase()] || '#1A1A1A';

export interface DemoCard {
    id: string;
    title: string;
    time: string;
    /** Lista en la que nace. */
    list: string;
    /** Aparece en la pizarra a partir de este instante. */
    appearsAt: number;
    /** Momento en que se arrastra a otra lista. */
    movesAt?: number;
    toList?: string;
    /** Momento en que se completa y sale del tablero. */
    archivesAt?: number;
}

export const BOARD_CARDS: DemoCard[] = [
    { id: 'c1', title: 'Cerrar la landing', time: '10:30', list: 'encurso', appearsAt: 0, archivesAt: ARCHIVE2_AT },
    { id: 'c2', title: 'Revisar contraste', time: '12:00', list: 'revision', appearsAt: 0, archivesAt: ARCHIVE_AT },
    {
        id: 'n1', title: 'Definir prioridades del sprint', time: '09:00', list: 'porhacer',
        appearsAt: NEW1_CARD, movesAt: DRAG1_AT, toList: 'encurso',
    },
    {
        id: 'n2', title: 'Preparar materiales de la reunión', time: '11:00', list: 'porhacer',
        appearsAt: NEW2_CARD, movesAt: DRAG2_AT, toList: 'revision',
    },
    {
        id: 'n3', title: 'Revisar la propuesta comercial', time: '15:30', list: 'porhacer',
        appearsAt: NEW3_CARD, movesAt: DRAG3_AT, toList: 'listo',
    },
];

/** Lo que se teclea en cada panel de nueva tarea. */
export const NEW_CARD_TITLES: Record<'n1' | 'n2' | 'n3', string> = {
    n1: 'Definir prioridades del sprint',
    n2: 'Preparar materiales de la reunión',
    n3: 'Revisar la propuesta comercial',
};

/* ── Datos de la vista Hoy ───────────────────────────────────────────────── */

export const WEEKDAYS = ['L', 'M', 'X', 'J', 'V', 'S', 'D'];

/** Julio de 2026 empieza en miércoles; las columnas van de lunes a domingo. */
export const MONTH_CELLS: (number | null)[] = [
    null, null, 1, 2, 3, 4, 5,
    6, 7, 8, 9, 10, 11, 12,
    13, 14, 15, 16, 17, 18, 19,
    20, 21, 22, 23, 24, 25, 26,
    27, 28, 29, 30, 31, null, null,
];

export const FIRST_HOUR = 7;
export const LAST_HOUR = 21;
export const HOUR_H = 38;
/** Ancho de la columna de horas, en píxeles de diseño. */
export const GUTTER_W = 62;

export const formatHour = (h: number) => {
    const suffix = h < 12 ? 'AM' : 'PM';
    const base = h % 12 === 0 ? 12 : h % 12;
    return `${base}:00 ${suffix}`;
};

export const MOMENTS = [
    { key: 'Mañana', color: '#FFE082', empty: '¿Qué hay en tu lista matutina?' },
    { key: 'Tarde', color: '#FFB7CE', empty: 'Sin nada por ahora' },
    { key: 'Noche', color: '#81D4FA', empty: 'Termina el día a tu manera' },
] as const;

/* ── Utilidades ──────────────────────────────────────────────────────────── */

export const px = (n: number) => `${n}px`;

/** Texto revelado carácter a carácter entre dos marcas. */
export const typewriter = (text: string, elapsed: number, from: number, to: number) => {
    if (elapsed < from) return '';
    const ratio = Math.min(1, (elapsed - from) / (to - from));
    return text.slice(0, Math.round(ratio * text.length));
};
