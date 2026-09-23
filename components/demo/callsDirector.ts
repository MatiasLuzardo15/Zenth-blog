/**
 * Guion de planos de la demo de Reuniones (`CallsDemo`) para teléfonos. Ver
 * `phoneCamera.ts` para la mecánica y `callsTimeline.ts` para los tiempos.
 *
 * Geometría del lienzo: directorio de salas en x 16–296, escenario de la
 * llamada en 312–1268 (y 80–788) y, sobre todo, un fondo en degradado que no
 * tiene bordes: una ventana dentro del escenario no corta nada.
 */

import {
    EXPRESS_CLICK_AT, EXPRESS_CLOSE_AT, HOVER_CALL, JOIN_AT, LEAVE_AT, PRIVATE_AT, ROOM_CALL_AT,
} from './callsTimeline';
import {
    actIndexAt as actIndexIn, actProgress as actProgressIn, captionAt as captionIn, framed,
    headerVisibleAt as headerVisibleIn, overlay, shotAt as shotIn, wide,
} from './phoneCamera';
import type { Act, Shot } from './phoneCamera';

/** Directorio de salas, con 8 px de margen a cada lado. */
const DIRECTORY: [number, number] = [8, 304];
/** Diálogo «Tu enlace está listo»: 440 de ancho centrado en x=640. */
const EXPRESS_DIALOG: [number, number] = [412, 868];
/** Contenido centrado del escenario (botones, pie de la llamada): sobre el degradado. */
const STAGE_CENTER: [number, number] = [600, 980];
/** Todo el escenario de la llamada. */
const STAGE: [number, number] = [304, 1276];

export const SHOTS: Shot[] = [
    /* Acto I · Reunión express */
    wide(0, 'Salas de voz, llamadas privadas y enlaces para invitados.'),
    framed(700, ...DIRECTORY, 150, 'Crea un enlace para invitados con «Reunión express».'),
    overlay(EXPRESS_CLICK_AT - 200, ...EXPRESS_DIALOG, 410, 'Entran sin cuenta y sin ver tu espacio.'),

    /* Acto II · Entrar a la sala de una pizarra */
    framed(EXPRESS_CLOSE_AT + 100, ...STAGE_CENTER, 434, 'Cada pizarra tiene su sala de voz siempre abierta.'),

    /*
     * Acto III · La conversación. Se queda en el escenario completo hasta colgar:
     * un plano cerrado sobre el botón de abandonar cortaría las dos tarjetas de
     * la llamada por los lados, y el botón ya se ve en este plano.
     */
    framed(ROOM_CALL_AT - 200, ...STAGE, 434, 'Entra y habla con tu equipo.'),

    /* Acto IV · Llamada privada */
    framed(LEAVE_AT + 300, ...DIRECTORY, 540, 'Llama en privado a cualquiera de tu pizarra.'),
    framed(PRIVATE_AT - 200, ...STAGE, 434, 'Y habla con esa persona, uno a uno.'),
];

/**
 * Capítulos y fotograma fijo para «reducir movimiento» (siempre en un plano
 * cerrado y legible: sin cámara en movimiento, uno general no se lee).
 */
export const ACTS: readonly Act[] = [
    { id: 'enlace', label: 'Enlace', from: 0, poster: EXPRESS_CLICK_AT + 1800 },
    { id: 'sala', label: 'Sala', from: EXPRESS_CLOSE_AT, poster: JOIN_AT - 300 },
    { id: 'privada', label: 'Privada', from: LEAVE_AT, poster: HOVER_CALL + 300 },
];

export const shotAt = (elapsed: number) => shotIn(SHOTS, elapsed);
export const captionAt = (elapsed: number) => captionIn(SHOTS, elapsed);
export const headerVisibleAt = (elapsed: number) => headerVisibleIn(SHOTS, elapsed);
export const actIndexAt = (elapsed: number) => actIndexIn(ACTS, elapsed);
export const actProgress = (elapsed: number, cycle: number) => actProgressIn(ACTS, elapsed, cycle);
