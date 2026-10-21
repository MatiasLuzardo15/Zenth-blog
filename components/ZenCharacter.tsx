import React from 'react';

/**
 * Zen, el personaje del asistente de la app. La cabeza y la capa son una copia
 * estática de `ZenAiCharacter` (zenith-productivity, src/app/composition/zen-ai/ui):
 * misma geometría y mismos colores fijos, idénticos en claro y oscuro, pero sin
 * gestos ni parpadeo. Si el dibujo cambia en la app, hay que copiarlo aquí.
 *
 * Lo que no existe en la app es propio del blog: pies, manos, auriculares y los
 * objetos que sostiene en cada sección de la portada.
 */
type Mood = 'calm' | 'happy';

/**
 * `head`: el dibujo original, 64 × 64, para asomarse por un borde.
 * `stand`: de pie, con los pies debajo de la capa.
 * `sit`: sentado en un borde, con las piernas colgando por delante.
 */
type Pose = 'head' | 'stand' | 'sit';

type Holding = 'book' | 'plug' | 'star' | 'phone' | 'heart';

interface ZenCharacterProps {
  size: number;
  /** `happy`: ojos felices, sonrisa abierta y mejillas encendidas. */
  mood?: Mood;
  /** Desplaza la mirada hacia un lado (en unidades del dibujo de 64). */
  look?: 'left' | 'right' | 'down';
  pose?: Pose;
  holding?: Holding;
  /** Auriculares con micrófono, para hablar en la sala del equipo. */
  headset?: boolean;
  /** Saluda con el brazo en alto: `true` o `'right'` del lado derecho, `'left'` del izquierdo. */
  wave?: boolean | 'left' | 'right';
  className?: string;
  style?: React.CSSProperties;
}

const CAPE = '#d4654e';
const CAPE_SHADE = '#b14f3c';
const FACE = '#fdf8ee';
const LINE = '#1c1714';
const CHEEK = '#f4a08c';
const HAIR = '#4a3128';
const DEVICE = '#2b2420';
const STAR = '#f5b83d';
const HEART = '#e5484d';

const LOOK_OFFSET = { left: 'translate(-1.5 0)', right: 'translate(1.5 0)', down: 'translate(0.4 1.3)' };

/** Alto del dibujo con cuerpo completo; la cabeza sola ocupa 64. */
const BODY_H = 68;

function starPoints(cx: number, cy: number, outer: number, inner: number) {
  return Array.from({ length: 10 }, (_, i) => {
    const r = i % 2 === 0 ? outer : inner;
    const a = (Math.PI / 5) * i - Math.PI / 2;
    return `${(cx + r * Math.cos(a)).toFixed(2)},${(cy + r * Math.sin(a)).toFixed(2)}`;
  }).join(' ');
}

const Hand: React.FC<{ x: number; y: number; stroke: number }> = ({ x, y, stroke }) => (
  <circle cx={x} cy={y} r="3.2" fill={FACE} stroke={LINE} strokeWidth={stroke * 0.8} />
);

/** Cada objeto con las manos que lo sostienen, dibujado delante de la capa. */
const HeldObject: React.FC<{ holding: Holding; stroke: number }> = ({ holding, stroke }) => {
  const s = stroke * 0.8;
  switch (holding) {
    case 'book':
      return (
        <g strokeLinejoin="round">
          <path d="M17.5 48.5L32 51L46.5 48.5V62L32 64.5L17.5 62Z" fill={HAIR} stroke={LINE} strokeWidth={s} />
          <path d="M32 50.5C28 48 23 47.6 19 49V60.6C23 59.4 28 59.6 32 62.2Z" fill={FACE} stroke={LINE} strokeWidth={s} />
          <path d="M32 50.5C36 48 41 47.6 45 49V60.6C41 59.4 36 59.6 32 62.2Z" fill={FACE} stroke={LINE} strokeWidth={s} />
          <g stroke={LINE} strokeWidth={s * 0.6} strokeLinecap="round" opacity="0.45">
            <path d="M22 52.4C24.5 51.8 27 52 29.4 53" />
            <path d="M22 55.4C24.5 54.8 27 55 29.4 56" />
            <path d="M34.6 53C37 52 39.5 51.8 42 52.4" />
            <path d="M34.6 56C37 55 39.5 54.8 42 55.4" />
          </g>
          <Hand x={17.5} y={57} stroke={stroke} />
          <Hand x={46.5} y={57} stroke={stroke} />
        </g>
      );
    case 'plug':
      return (
        <g strokeLinejoin="round">
          {/* El cable cae hasta el suelo y se va por la izquierda, fuera del dibujo. */}
          <path d="M45 56C45 63 36 66.4 24 66.4H-30" fill="none" stroke={DEVICE} strokeWidth={stroke * 1.1} strokeLinecap="round" />
          <rect x="42.6" y="38" width="1.9" height="5" rx="0.6" fill={LINE} />
          <rect x="46.5" y="38" width="1.9" height="5" rx="0.6" fill={LINE} />
          <rect x="39.5" y="42.5" width="12" height="11" rx="2.6" fill={FACE} stroke={LINE} strokeWidth={s} />
          <rect x="42.2" y="52.8" width="6.6" height="3.6" rx="1.2" fill={DEVICE} stroke={LINE} strokeWidth={s} />
          <Hand x={38.5} y={49} stroke={stroke} />
          <Hand x={52.5} y={49} stroke={stroke} />
        </g>
      );
    case 'star':
      return (
        <g strokeLinejoin="round">
          <polygon points={starPoints(56, 13, 8.2, 3.8)} fill={STAR} stroke={LINE} strokeWidth={s} />
          <g stroke={STAR} strokeWidth={s * 1.1} strokeLinecap="round">
            <path d="M44.5 6.5L46.6 8.4" />
            <path d="M58 1L57.6 -1.6" />
            <path d="M64.6 6.4L66.8 5" />
          </g>
          <Hand x={54.5} y={23} stroke={stroke} />
          <Hand x={11.5} y={52} stroke={stroke} />
        </g>
      );
    case 'phone':
      return (
        // Más abajo que los demás objetos para no taparle la boca.
        <g strokeLinejoin="round" transform="translate(0 2.4)">
          <rect x="25.5" y="45.5" width="13" height="19" rx="2.6" fill={DEVICE} stroke={LINE} strokeWidth={s} />
          <rect x="27.3" y="47.6" width="9.4" height="14.4" rx="1.2" fill={FACE} />
          <g fill="none" stroke={CAPE} strokeWidth={s * 0.9} strokeLinecap="round" strokeLinejoin="round">
            <path d="M32 50.4V56.2" />
            <path d="M29.7 54L32 56.3L34.3 54" />
            <path d="M29.4 58.8H34.6" />
          </g>
          <Hand x={25} y={57} stroke={stroke} />
          <Hand x={39} y={57} stroke={stroke} />
        </g>
      );
    case 'heart':
      return (
        <g strokeLinejoin="round">
          <path
            d="M32 62C23.2 56.6 22.4 51.4 24.6 49C26.8 46.7 30.2 47.3 32 50.1C33.8 47.3 37.2 46.7 39.4 49C41.6 51.4 40.8 56.6 32 62Z"
            fill={HEART}
            stroke={LINE}
            strokeWidth={s}
          />
          <path d="M26.6 50.6C27.4 49.8 28.6 49.8 29.4 50.4" fill="none" stroke={FACE} strokeWidth={s * 0.9} strokeLinecap="round" opacity="0.8" />
          <Hand x={23.8} y={55.6} stroke={stroke} />
          <Hand x={40.2} y={55.6} stroke={stroke} />
        </g>
      );
  }
};

const ZenCharacter: React.FC<ZenCharacterProps> = ({
  size,
  mood = 'calm',
  look,
  pose = 'head',
  holding,
  headset = false,
  wave = false,
  className,
  style,
}) => {
  const stroke = size >= 96 ? 1.4 : 2;
  const happy = mood === 'happy';
  const height = pose === 'head' ? 64 : BODY_H;

  return (
    <svg
      className={className}
      style={{ overflow: 'visible', ...style }}
      width={size}
      height={(size * height) / 64}
      viewBox={`0 0 64 ${height}`}
      shapeRendering="geometricPrecision"
      aria-hidden="true"
      focusable="false"
    >
      {pose === 'stand' && (
        <g fill={HAIR} stroke={LINE} strokeWidth={stroke * 0.8}>
          <ellipse cx="23.5" cy="63.6" rx="4.6" ry="2.7" />
          <ellipse cx="40.5" cy="63.6" rx="4.6" ry="2.7" />
        </g>
      )}
      <path
        d="M32 4C46.5 4 57 15 57 30.5C57 38.5 54.5 45 50.5 50C54 52.5 56.4 55 57.2 57.8C57.8 59.8 56.4 61 54.2 61H9.8C7.6 61 6.2 59.8 6.8 57.8C7.6 55 10 52.5 13.5 50C9.5 45 7 38.5 7 30.5C7 15 17.5 4 32 4Z"
        fill={CAPE}
        stroke={LINE}
        strokeWidth={stroke}
        strokeLinejoin="round"
      />
      <path d="M21 55.6C26 57.7 38 57.7 43 55.6" fill="none" stroke={LINE} strokeWidth={stroke * 0.8} strokeLinecap="round" />
      {pose === 'sit' && (
        <g stroke={LINE} strokeWidth={stroke * 0.8} strokeLinejoin="round">
          <rect x="21" y="57" width="6" height="8.4" rx="2.4" fill={CAPE_SHADE} />
          <rect x="37" y="57" width="6" height="8.4" rx="2.4" fill={CAPE_SHADE} />
          <ellipse cx="23.4" cy="65.6" rx="4.2" ry="2.4" fill={HAIR} />
          <ellipse cx="40.6" cy="65.6" rx="4.2" ry="2.4" fill={HAIR} />
        </g>
      )}
      {headset && (
        <g fill="none" stroke={DEVICE} strokeLinecap="round">
          <path d="M8.6 30C7 14 18.5 1.6 32 1.6C45.5 1.6 57 14 55.4 30" strokeWidth={stroke * 1.5} />
          <path d="M8.4 39.5C9.4 46 15 48.4 21.4 47.4" strokeWidth={stroke * 0.8} />
        </g>
      )}
      <ellipse cx="32" cy="34.8" rx="21.2" ry="15.8" fill={CAPE_SHADE} />
      <ellipse cx="32" cy="35.2" rx="19.6" ry="14.6" fill={FACE} stroke={LINE} strokeWidth={stroke} />
      <path
        d="M13.8 33.2C14.6 25.4 22.4 20.6 32 20.6C41.6 20.6 49.4 25.4 50.2 33.2C48.2 30.4 45.4 29.2 42.6 29.8C41 27.4 37.8 26.6 35 27.9C33 26.1 29.6 26 27.4 27.7C24.8 26.6 21.6 27.4 20.2 29.6C18 29 15.6 30.6 13.8 33.2Z"
        fill={HAIR}
        stroke={LINE}
        strokeWidth={stroke * 0.8}
        strokeLinejoin="round"
      />
      <g fill={CHEEK} opacity={happy ? 1 : 0.7}>
        <ellipse cx="19.6" cy="42.2" rx="2.8" ry="1.7" />
        <ellipse cx="44.4" cy="42.2" rx="2.8" ry="1.7" />
      </g>
      {happy ? (
        <g fill="none" stroke={LINE} strokeWidth={stroke * 0.95} strokeLinecap="round">
          <path d="M21.9 37.4C22.9 34.3 26.1 34.3 27.1 37.4" />
          <path d="M36.9 37.4C37.9 34.3 41.1 34.3 42.1 37.4" />
        </g>
      ) : (
        <g transform={look ? LOOK_OFFSET[look] : undefined}>
          <ellipse cx="24.5" cy="36.4" rx="2.5" ry="3.2" fill={LINE} />
          <ellipse cx="39.5" cy="36.4" rx="2.5" ry="3.2" fill={LINE} />
          <circle cx="25.4" cy="35.2" r="0.9" fill={FACE} />
          <circle cx="40.4" cy="35.2" r="0.9" fill={FACE} />
        </g>
      )}
      {happy ? (
        <path
          d="M27.4 42.4C27.4 47.6 36.6 47.6 36.6 42.4C33.6 43.2 30.4 43.2 27.4 42.4Z"
          fill={LINE}
          stroke={LINE}
          strokeWidth={stroke * 0.5}
          strokeLinejoin="round"
        />
      ) : (
        <path d="M27.5 42.8C29.8 45.9 34.2 45.9 36.5 42.8" fill="none" stroke={LINE} strokeWidth={stroke * 0.95} strokeLinecap="round" />
      )}
      {headset && (
        <g stroke={LINE} strokeWidth={stroke * 0.8}>
          <rect x="3.4" y="26.5" width="8" height="13" rx="3.4" fill={DEVICE} />
          <rect x="52.6" y="26.5" width="8" height="13" rx="3.4" fill={DEVICE} />
          <circle cx="22.6" cy="47.2" r="1.9" fill={DEVICE} />
        </g>
      )}
      {wave && (
        // Se dibuja del lado derecho; con `wave="left"` se refleja sobre x = 32.
        <g transform={wave === 'left' ? 'matrix(-1 0 0 1 64 0)' : undefined}>
          <g fill="none" stroke={LINE} strokeWidth={stroke * 0.7} strokeLinecap="round" opacity="0.55">
            <path d="M60.6 13.4C62.6 15 63.4 17.4 63 19.8" />
            <path d="M63.4 10.6C66.4 13 67.6 16.6 67 20.2" />
          </g>
          {/* Brazo: la manga de la capa con su contorno, del costado a la mano. */}
          <path d="M52.6 42C55.6 36 57 29.6 57.5 22.6" fill="none" stroke={LINE} strokeWidth={stroke + 5.4} strokeLinecap="round" />
          <path d="M52.6 42C55.6 36 57 29.6 57.5 22.6" fill="none" stroke={CAPE} strokeWidth={5.4} strokeLinecap="round" />
          <Hand x={57.5} y={20} stroke={stroke} />
        </g>
      )}
      {holding && <HeldObject holding={holding} stroke={stroke} />}
    </svg>
  );
};

interface ZenPerchProps extends Omit<ZenCharacterProps, 'className' | 'style'> {
  /** Solo con `pose="head"`: fracción del personaje que asoma por encima del borde (0–1). */
  reveal?: number;
  /** Inclinación, en grados, con el giro apoyado en la base. */
  tilt?: number;
  /** Posición horizontal dentro del contenedor `relative` sobre cuyo borde superior se apoya. */
  className?: string;
}

/**
 * Zen apoyado en el borde superior de su contenedor. Según la pose:
 * - `head`: se asoma por detrás; se recorta solo por debajo (`clip-path`) en
 *   vez de depender del orden de apilado, así funciona igual detrás de una
 *   tarjeta que de una línea fina.
 * - `stand`: de pie sobre el borde.
 * - `sit`: sentado en el borde, con las piernas colgando por delante.
 * Es decorativo y no recibe el puntero.
 */
export const ZenPerch: React.FC<ZenPerchProps> = ({ reveal = 0.9, tilt = 0, className, pose = 'head', ...character }) => {
  const { size } = character;
  const frame: React.CSSProperties =
    pose === 'head'
      ? { width: size, height: size * reveal, clipPath: 'inset(-100% -100% 0 -100%)' }
      : pose === 'stand'
        // Los pies terminan en 66.4 de 68: se hunden apenas para que pise.
        ? { width: size, marginBottom: -(1.2 / 64) * size }
        // La capa apoya en 61; las piernas cuelgan por delante del borde.
        : { width: size, marginBottom: -((BODY_H - 61) / 64) * size, zIndex: 10 };

  return (
    <div aria-hidden="true" className={`pointer-events-none absolute bottom-full ${className ?? ''}`} style={frame}>
      <ZenCharacter
        {...character}
        pose={pose}
        className={pose === 'head' ? 'absolute left-0 top-0' : 'block'}
        style={{ transform: `rotate(${tilt}deg)`, transformOrigin: '50% 100%' }}
      />
    </div>
  );
};

export default ZenCharacter;
