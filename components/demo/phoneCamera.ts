/**
 * Cámara compartida por las demos animadas cuando se ven en un teléfono.
 *
 * Las maquetas miden 1280×800, y en un móvil sólo caben unos 330 px. Escalarlas
 * hasta que quepan deja el texto ilegible; recortarlas con una ventana fija
 * corta los componentes por la mitad. Aquí se hace lo que haría un montaje de
 * vídeo: un plano general cuando lo que importa es la composición y planos
 * cerrados cuando lo que importa es leer (escribir, un panel, un diálogo). Los
 * planos cerrados empiezan y terminan en los bordes de columnas y paneles, no
 * en mitad de un elemento.
 *
 * Todo se expresa en píxeles de diseño (los de `timeline.ts`) y se deriva de
 * `elapsed`, igual que el resto de cada demo. Cada demo define su propio guion
 * de planos (`phoneDirector.ts`, `callsDirector.ts`) con estas piezas.
 */

import type { CSSProperties } from 'react';
import { DESIGN_H, DESIGN_W } from './timeline';

/** Por debajo de este ancho del contenedor la demo se dirige para móvil. */
export const PHONE_MAX_W = 576;
/** Alto del marco = ancho × esta razón. */
export const PHONE_ASPECT = 1.15;

/** Adelanto respecto al gesto: la cámara ya está quieta cuando ocurre. */
export const LEAD = 650;

/** Ventana de la cámara sobre el lienzo de 1280×800. El alto sale del ancho. */
export interface Shot {
    at: number;
    x: number;
    y: number;
    w: number;
    /** Lo que se cuenta en este plano. Si falta, se mantiene el anterior. */
    caption?: string;
    /** Mantener visible la barra superior aunque el plano sea cerrado (ver `headerVisibleAt`). */
    header?: boolean;
    /**
     * Ocultar la vista de fondo mientras dure el plano. Es para planos sobre un
     * panel, un diálogo o una tarjeta flotante: en cuanto se cierran, o aún no
     * han entrado, el fondo asomaría cortado por el borde de la ventana.
     */
    isolate?: boolean;
}

/** Capítulo de una demo: dónde entra y qué fotograma fijo la representa. */
export interface Act {
    readonly id: string;
    readonly label: string;
    readonly from: number;
    /** Fotograma para «reducir movimiento»: tiene que caer en un plano cerrado y legible. */
    readonly poster: number;
}

/**
 * Una ventana más alta que el lienzo se deja donde se pidió (puede salirse por
 * arriba y por abajo, y ahí no hay nada que ver); una más baja no se sale.
 */
const clampY = (y: number, h: number) => (h >= DESIGN_H ? y : Math.min(Math.max(y, 0), DESIGN_H - h));

type ShotFlags = Pick<Shot, 'header' | 'isolate'>;

/** Ventana entre dos bordes verticales, centrada en `yc`. */
export const framed = (at: number, x0: number, x1: number, yc: number, caption?: string, flags?: ShotFlags): Shot => {
    const w = x1 - x0;
    const h = w * PHONE_ASPECT;
    return { at, x: x0, y: clampY(yc - h / 2, h), w, caption, ...flags };
};

/** Plano cerrado sobre un panel, un diálogo o una tarjeta flotante: el fondo no aporta y se oculta. */
export const overlay = (at: number, x0: number, x1: number, yc: number, caption?: string, flags?: ShotFlags): Shot =>
    framed(at, x0, x1, yc, caption, { isolate: true, ...flags });

/** Plano general: toda la pantalla, con `yc` en el centro del contenido. */
export const wide = (at: number, caption?: string, yc = DESIGN_H / 2): Shot => framed(at, 0, DESIGN_W, yc, caption);

/**
 * En móvil la demo no va dentro de una tarjeta: la interfaz flota sobre la
 * página. Sin borde que delimite, un recorte seco se ve como un error; el
 * difuminado hace que el contenido se disuelva en vez de cortarse. Es corto en
 * los lados, porque los planos ya terminan en bordes de columna o de panel.
 */
const EDGE_FADE = [
    'linear-gradient(to right, transparent, #000 8px, #000 calc(100% - 8px), transparent)',
    'linear-gradient(to bottom, transparent, #000 22px, #000 calc(100% - 22px), transparent)',
].join(', ');

export const FRAME_FADE_STYLE: CSSProperties = {
    maskImage: EDGE_FADE,
    WebkitMaskImage: EDGE_FADE,
    maskComposite: 'intersect',
    WebkitMaskComposite: 'source-in',
};

/**
 * En un plano general el puntero de 24 px de diseño queda en unos 6 px reales.
 * La demo publica `--demo-k` (>1 sólo cuando hace falta) y el puntero lo aplica.
 */
export const CURSOR_ZOOM_STYLE: CSSProperties = {
    transform: 'scale(var(--demo-k, 1))',
    transformOrigin: '2px 2px',
};

/** Los planos van ordenados por `at`: el vigente es el último que ya empezó. */
export const shotAt = (shots: readonly Shot[], elapsed: number): Shot => {
    let current = shots[0];
    for (const shot of shots) {
        if (shot.at <= elapsed) current = shot;
        else break;
    }
    return current;
};

/** La leyenda del plano vigente: el último plano con texto hasta este instante. */
export const captionAt = (shots: readonly Shot[], elapsed: number): string => {
    let caption = shots[0].caption ?? '';
    for (const shot of shots) {
        if (shot.at > elapsed) break;
        if (shot.caption) caption = shot.caption;
    }
    return caption;
};

/**
 * La barra superior (saludo, navegación, reloj) mide 1280 de ancho: en un plano
 * intermedio la cortaría por la mitad. Sólo se ve en planos generales o cuando
 * el plano la encuadra a propósito (el reloj del temporizador).
 */
export const headerVisibleAt = (shots: readonly Shot[], elapsed: number) => {
    const shot = shotAt(shots, elapsed);
    return shot.w >= DESIGN_W * 0.85 || Boolean(shot.header);
};

export const actIndexAt = (acts: readonly Act[], elapsed: number) => {
    let index = 0;
    acts.forEach((act, i) => { if (elapsed >= act.from) index = i; });
    return index;
};

/** Fracción recorrida del capítulo en curso, para la barra de progreso del chip. */
export const actProgress = (acts: readonly Act[], elapsed: number, cycle: number) => {
    const i = actIndexAt(acts, elapsed);
    const end = i + 1 < acts.length ? acts[i + 1].from : cycle;
    return Math.min(1, Math.max(0, (elapsed - acts[i].from) / (end - acts[i].from)));
};
