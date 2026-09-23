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

export const TODAY_TASK = 'Preparar la propuesta';

/* ── Acto I·b · Día, Semana y Mes ────────────────────────────────────────── */

export const VIEWS_START_AT = 7200;
export const WEEK_HOVER_AT = 7800;
export const WEEK_CLICK_AT = 8400;
export const MONTH_HOVER_AT = 11000;
export const MONTH_CLICK_AT = 11600;
export const DAY_HOVER_AT = 14200;
export const DAY_CLICK_AT = 14800;
export const VIEWS_END_AT = 15400;

export const DETAILS_AT = 15800;
export const EDIT_AT = 19800;
export const PANEL_CLOSE_AT = 24800;

/* ── Acto II · La pizarra ────────────────────────────────────────────────── */

export const BOARD_AT = 26400;

export const NEW1_OPEN = 27600;
export const NEW1_TYPE_S = 28100;
export const NEW1_TYPE_E = 29500;
export const NEW1_ADD = 32800;
export const NEW1_CARD = 33200;

export const NEW2_OPEN = 34000;
export const NEW2_TYPE_S = 34500;
export const NEW2_TYPE_E = 35900;
export const NEW2_ADD = 39200;
export const NEW2_CARD = 39600;

export const NEW3_OPEN = 40400;
export const NEW3_TYPE_S = 40900;
export const NEW3_TYPE_E = 42400;
export const NEW3_ADD = 45700;
export const NEW3_CARD = 46100;

export const DRAG1_AT = 47400;
export const DRAG2_AT = 49400;
export const DRAG3_AT = 51400;
export const SWAP_AT = 53700;
export const ARCHIVE_AT = 56200;
export const ARCHIVE2_AT = 58500;
export const CARD_OPEN_AT = 59900;
export const CARD_ASSIGN_HOVER = 62200;
export const CARD_ASSIGN_CLICK_AT = 62800;
export const CARD_CLOSE_AT = 65800;
export const BOARD_END = 66200;

/* ── Acto III · De una tarea a una sesión de enfoque ───────────────────── */

export const RETURN_TODAY_AT = 66800;
export const TASK_OPEN_AT = 68500;
export const FOCUS_ACTION_AT = 71900;
export const FOCUS_VIEW_AT = 72600;
export const FOCUS_START_AT = 75900;
export const FOCUS_RUNNING_AT = 76500;
export const FOCUS_OUTSIDE_HOVER = 78100;
export const FOCUS_END = 79500;

export const FOCUS_TASK = 'Revisar la propuesta comercial';

/* ── Acto IV · Crear una reunión, entrar y recibir a un invitado ────────── */

/** Tarjeta que se abre en la pizarra y persona a la que se asigna. */
export const CARD_ASSIGNEE = 'Sofía';

export const MEETING_TITLE = 'Reunión de equipo';

export const MEETING_OPEN_AT = 80100;
export const MEETING_ADD_HOVER = 80700;
export const MEETING_ADD_CLICK_AT = 81300;
export const MEETING_MENU_CLOSE_AT = 82200;
export const MEETING_LINK_HOVER = 82800;
export const MEETING_LINK_CLICK_AT = 83400;
export const MEETING_CREATED_AT = 83700;
export const MEETING_PREPARING_AT = 85900;
export const LOBBY_AT = 87300;
export const LOBBY_JOIN_HOVER = 89700;
export const LOBBY_JOIN_CLICK_AT = 90300;
export const CALL_VIEW_AT = 90750;
export const GUEST_JOIN_AT = 93100;
export const CALL_END = 97500;

export const CYCLE = 99300;

/* ── Datos de la pizarra ─────────────────────────────────────────────────── */

export const BOARD_NAME = 'Plan de lanzamiento';

export interface DemoList {
    key: string;
    label: string;
    /** Paleta real de `constants/boardLists.ts`. */
    accent: string;
    empty: string;
}

export const BOARD_LISTS: DemoList[] = [
    { key: 'encurso', label: 'En curso', accent: '#81D4FA', empty: 'Nada en curso' },
    { key: 'porhacer', label: 'Baja', accent: '#A5D6A7', empty: 'Nada por clasificar' },
    { key: 'listo', label: 'Alta', accent: '#FFAB91', empty: 'Nada urgente todavía' },
    { key: 'revision', label: 'Media', accent: '#E6EE9C', empty: 'Cuando haya tiempo' },
];

/** Notas que acompañan a algunas tarjetas nuevas (la segunda no lleva). */
export const NEW_CARD_NOTES: Record<'n1' | 'n2' | 'n3', string | undefined> = {
    n1: 'Alinear alcance, dueños y fechas del sprint.',
    n2: undefined,
    n3: 'Revisar precios y condiciones antes de enviar.',
};

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
    /** Nota que se escribe en el panel y luego se ve en la tarjeta. */
    description?: string;
}

export const BOARD_CARDS: DemoCard[] = [
    { id: 'c1', title: 'Cerrar la landing', time: '10:30', list: 'encurso', appearsAt: 0, archivesAt: ARCHIVE2_AT },
    { id: 'c2', title: 'Revisar contraste', time: '12:00', list: 'revision', appearsAt: 0, archivesAt: ARCHIVE_AT },
    {
        id: 'n1', title: 'Definir prioridades del sprint', time: '09:00', list: 'porhacer',
        description: NEW_CARD_NOTES.n1,
        appearsAt: NEW1_CARD, movesAt: DRAG1_AT, toList: 'encurso',
    },
    {
        id: 'n2', title: 'Preparar materiales de la reunión', time: '11:00', list: 'porhacer',
        appearsAt: NEW2_CARD, movesAt: DRAG2_AT, toList: 'revision',
    },
    {
        id: 'n3', title: 'Revisar la propuesta comercial', time: '15:30', list: 'porhacer',
        description: NEW_CARD_NOTES.n3,
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
