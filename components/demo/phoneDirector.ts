/**
 * Guion de planos de la demo del hero para teléfonos. La mecánica (planos,
 * difuminado, cursor) vive en `phoneCamera.ts`; aquí sólo está qué se enseña
 * y cuándo, en píxeles de diseño y con los tiempos de `timeline.ts`.
 */

import {
    ARCHIVE2_AT, BOARD_AT, CALL_END, CALL_VIEW_AT, CARD_ASSIGN_HOVER, CARD_CLOSE_AT, CARD_OPEN_AT, COMPLETES_AT,
    DETAILS_AT, DRAG1_AT, DRAG3_AT, FOCUS_END, FOCUS_RUNNING_AT, FOCUS_VIEW_AT, LOBBY_AT,
    MEETING_CREATED_AT, MEETING_OPEN_AT, NEW1_OPEN, NEW3_CARD, NEW3_TYPE_E, PANEL_CLOSE_AT, PRESS_AT,
    RETURN_TODAY_AT, SWAP_AT, TASK_OPEN_AT, VIEWS_START_AT,
} from './timeline';
import {
    LEAD, actIndexAt as actIndexIn, actProgress as actProgressIn, captionAt as captionIn, framed,
    headerVisibleAt as headerVisibleIn, overlay, shotAt as shotIn, wide,
} from './phoneCamera';
import type { Act, Shot } from './phoneCamera';

export { CURSOR_ZOOM_STYLE, FRAME_FADE_STYLE, PHONE_ASPECT, PHONE_MAX_W } from './phoneCamera';

/** Los mismos bordes de columna que usan las vistas (ver TodayView y BoardView). */
const LEFT_COL: [number, number] = [8, 272];
const RIGHT_COL: [number, number] = [972, 1272];
/** Contenido del panel lateral: 871–1260 dentro de un panel que empieza en 850. */
const PANEL: [number, number] = [862, 1270];
/** Botonera flotante del panel de tarea, hasta el borde izquierdo del panel. */
const PANEL_ACTIONS: [number, number] = [554, 862];
/** Tarjeta flotante del temporizador: exactamente sus bordes (896–1256). */
const FOCUS_CARD: [number, number] = [896, 1256];
const LOBBY: [number, number] = [440, 840];
/**
 * Cuerpo de Agenda sin la columna izquierda: 280 es donde empieza la columna
 * central y 1264 donde acaba la derecha, en las tres vistas (Día, Semana, Mes).
 */
const AGENDA_BODY: [number, number] = [272, 1272];
/** Panel de la llamada, sin el directorio de salas (que acaba en 312). */
const CALL_AREA: [number, number] = [304, 1276];

/**
 * La pizarra sólo ocupa las primeras filas del lienzo (hasta y≈380): centrar el
 * plano en ella evita que quede una tira pequeña arriba y un vacío debajo.
 */
const BOARD_WIDE_Y = 190;
const BOARD_Y = 232;
/** Columnas de la pizarra (x = 100, 343, 586, 829; 227 de ancho): parejas y trío de columnas. */
const BOARD_COLS_0_2: [number, number] = [92, 820];
const BOARD_COLS_0_1: [number, number] = [92, 578];
const BOARD_COLS_2_3: [number, number] = [578, 1064];

export const SHOTS: Shot[] = [
    /* Acto I · Agenda */
    wide(0, 'Tu día, en una sola pantalla.'),
    framed(900, ...LEFT_COL, 450, 'Captura una tarea con una frase.'),
    framed(PRESS_AT - LEAD, ...RIGHT_COL, 294, 'Aparece en Tarde. Complétala y suma XP.'),
    /* Día, Semana y Mes cambian el ancho de la columna central: se ve todo el cuerpo. */
    framed(VIEWS_START_AT - LEAD, ...AGENDA_BODY, 436, 'Cambia entre Día, Semana y Mes.'),
    overlay(DETAILS_AT - LEAD, ...PANEL, 235, 'Abre un evento para ver y editar sus detalles.'),
    wide(PANEL_CLOSE_AT),

    /* Acto II · Pizarras */
    wide(BOARD_AT, 'Cada proyecto tiene su pizarra.', BOARD_WIDE_Y),
    overlay(NEW1_OPEN - 200, ...PANEL, 235, 'Crea tarjetas con título y notas.'),
    /*
     * Arrastrar: la cámara acompaña a la tarjeta, de una pareja de columnas a
     * otra, en vez de abrirse a un plano general donde no se lee nada. El primer
     * arrastre cruza el tablero y la cámara viaja con él; el tercero necesita tres.
     */
    framed(NEW3_CARD + 300, ...BOARD_COLS_0_1, BOARD_Y, 'Arrástralas entre listas y completa las que terminas.'),
    framed(DRAG1_AT - 200, ...BOARD_COLS_2_3, BOARD_Y),
    framed(DRAG1_AT + 1100, ...BOARD_COLS_0_1, BOARD_Y),
    framed(DRAG3_AT - LEAD, ...BOARD_COLS_0_2, BOARD_Y),
    framed(SWAP_AT - LEAD, ...BOARD_COLS_0_1, BOARD_Y),
    framed(ARCHIVE2_AT - LEAD, ...BOARD_COLS_2_3, BOARD_Y),
    overlay(CARD_OPEN_AT - LEAD, ...PANEL, 235, 'Abre una tarjeta y asígnala a alguien del equipo.'),
    /* La asignación ocurre en la parte baja del panel, fuera del plano anterior. */
    overlay(CARD_ASSIGN_HOVER - 400, ...PANEL, 560),
    wide(CARD_CLOSE_AT + 100, undefined, BOARD_WIDE_Y),

    /* Acto III · Enfoque */
    wide(RETURN_TODAY_AT, 'De una tarea a una sesión de enfoque.'),
    framed(RETURN_TODAY_AT + 600, ...RIGHT_COL, 230),
    /* El panel se abre en TASK_OPEN_AT: hasta entonces, la columna derecha donde está el clic. */
    overlay(TASK_OPEN_AT, ...PANEL, 235),
    /* Botonera y borde del panel: no caben a la vez con el contenido, y el gesto está aquí. */
    overlay(TASK_OPEN_AT + 1500, ...PANEL_ACTIONS, 257, 'Un toque en «Iniciar enfoque».'),
    /* Arranca por encima de la píldora del reloj (y 14–58) para que el conteo se vea en la barra. */
    overlay(FOCUS_VIEW_AT, ...FOCUS_CARD, 217, 'El temporizador te acompaña por toda la aplicación.', { header: true }),
    wide(FOCUS_END - 200),

    /* Acto IV · Reuniones */
    wide(MEETING_OPEN_AT, 'Crea una reunión con enlace en un toque.'),
    overlay(MEETING_OPEN_AT + 500, ...PANEL, 275),
    overlay(LOBBY_AT - 200, ...LOBBY, 420, 'Entra a la sala en un clic.'),
    framed(CALL_VIEW_AT - 100, ...CALL_AREA, 434, 'Y recibe a tu invitado.'),
    /* Al terminar la llamada la vista vuelve a Agenda: plano general hasta que el bucle reinicia. */
    wide(CALL_END - 200),
];

/**
 * Capítulos: instante de entrada y fotograma fijo para «reducir movimiento».
 * Sin cámara en movimiento, el fotograma tiene que caer en un plano cerrado
 * y legible, no en uno general.
 */
export const ACTS: readonly Act[] = [
    { id: 'agenda', label: 'Agenda', from: 0, poster: COMPLETES_AT + 800 },
    { id: 'pizarras', label: 'Pizarras', from: BOARD_AT, poster: NEW3_TYPE_E + 400 },
    { id: 'enfoque', label: 'Enfoque', from: RETURN_TODAY_AT, poster: FOCUS_RUNNING_AT + 1500 },
    { id: 'reuniones', label: 'Reuniones', from: MEETING_OPEN_AT, poster: MEETING_CREATED_AT + 400 },
];

export const shotAt = (elapsed: number) => shotIn(SHOTS, elapsed);
export const captionAt = (elapsed: number) => captionIn(SHOTS, elapsed);
export const headerVisibleAt = (elapsed: number) => headerVisibleIn(SHOTS, elapsed);
export const actIndexAt = (elapsed: number) => actIndexIn(ACTS, elapsed);
export const actProgress = (elapsed: number, cycle: number) => actProgressIn(ACTS, elapsed, cycle);
