import React from 'react';
import { Check } from 'lucide-react';
import { CLAUDE_BRAND, CLAUDE_PATH, OPENAI_PATH } from './aiBrandMarks';

/**
 * Zenth MCP en una imagen: Claude y Codex a los lados, Zenth al centro y, entre
 * cada asistente y Zenth, dos líneas punteadas que fluyen. Por la de arriba
 * viajan los pedidos hacia Zenth; por la de abajo vuelven las respuestas. Es la
 * misma idea que la línea que une los logos en la pantalla de consentimiento
 * de la app. La animación vive en `.zenth-mcp-flow` (index.html) y se detiene
 * con «reducir movimiento».
 *
 * El lienzo es de 720×320; las piezas HTML se ubican en porcentajes de ese
 * lienzo, así la ilustración escala sin deformarse. Con `fixed` (portadas, que
 * ya se escalan enteras) no se achica en pantallas angostas.
 */

const W = 720;
const H = 320;
const CENTER = { x: 360, y: 168 };
const LEFT = { x: 118, y: 168 };
const RIGHT = { x: 602, y: 168 };

/** Curva entre dos puntos; `bend` la separa del centro para las dos vías. */
const curve = (from: { x: number; y: number }, to: { x: number; y: number }, bend: number) => {
  const midX = (from.x + to.x) / 2;
  return `M ${from.x} ${from.y + bend * 0.35} Q ${midX} ${from.y + bend} ${to.x} ${to.y + bend * 0.35}`;
};

const at = (x: number, y: number): React.CSSProperties => ({
  left: `${(x / W) * 100}%`,
  top: `${(y / H) * 100}%`,
});

const Tile: React.FC<{ x: number; y: number; label: string; large?: boolean; fixed: boolean; children: React.ReactNode }> = ({
  x, y, label, large = false, fixed, children,
}) => {
  const size = large
    ? `h-[92px] w-[92px] ${fixed ? '' : 'max-sm:h-[64px] max-sm:w-[64px]'}`
    : `h-[68px] w-[68px] ${fixed ? '' : 'max-sm:h-[48px] max-sm:w-[48px]'}`;
  return (
    <div className="absolute flex -translate-x-1/2 -translate-y-1/2 flex-col items-center gap-2" style={at(x, y)}>
      <div
        className={`relative flex items-center justify-center rounded-[22%] border border-hairline bg-canvas shadow-[0_18px_50px_-18px_rgba(0,0,0,0.45)] ${size}`}
      >
        {large && <span aria-hidden="true" className="zenth-mcp-pulse absolute inset-0 rounded-[22%] border border-ink-muted" />}
        {children}
      </div>
      <span className={`t-micro whitespace-nowrap text-ink-muted ${fixed ? '' : 'max-sm:text-[10px]'}`}>{label}</span>
    </div>
  );
};

const Bubble: React.FC<{ x: number; y: number; fixed: boolean; children: React.ReactNode }> = ({ x, y, fixed, children }) => (
  <div
    className={`absolute flex -translate-x-1/2 -translate-y-1/2 items-center gap-1.5 whitespace-nowrap rounded-full border border-hairline bg-canvas px-3 py-1.5 text-[12px] font-medium text-ink shadow-[0_10px_30px_-14px_rgba(0,0,0,0.45)] ${fixed ? '' : 'max-sm:hidden'}`}
    style={at(x, y)}
  >
    {children}
  </div>
);

const Mark: React.FC<{ path: string; fill: string; className?: string }> = ({ path, fill, className = '' }) => (
  <svg viewBox="0 0 24 24" aria-hidden="true" className={`h-[42%] w-[42%] ${className}`}>
    <path d={path} fill={fill} />
  </svg>
);

const McpConnectionArt: React.FC<{ className?: string; fixed?: boolean }> = ({ className = '', fixed = false }) => {
  const routes = [
    { from: LEFT, to: CENTER },
    { from: RIGHT, to: CENTER },
  ];
  return (
    <div
      role="img"
      aria-label="Claude y Codex conectados a Zenth por líneas punteadas: los pedidos viajan hacia Zenth y las respuestas vuelven."
      className={`relative w-full ${className}`}
      style={{ aspectRatio: `${W} / ${H}` }}
    >
      <svg viewBox={`0 0 ${W} ${H}`} className="absolute inset-0 h-full w-full" aria-hidden="true">
        {routes.map(({ from, to }, index) => {
          // Los caminos van siempre del asistente hacia Zenth; la vía de vuelta
          // es la misma curva recorrida en sentido contrario.
          const request = curve(from, to, -40);
          const reply = curve(from, to, 40);
          return (
            <g key={index}>
              <path d={request} fill="none" stroke="var(--fr-hairline)" strokeWidth={2} />
              <path d={reply} fill="none" stroke="var(--fr-hairline)" strokeWidth={2} />
              <path d={request} fill="none" stroke="var(--fr-ink)" strokeWidth={3.2} className="zenth-mcp-flow" />
              <path d={reply} fill="none" stroke="var(--fr-ink-muted)" strokeWidth={3.2} className="zenth-mcp-flow zenth-mcp-flow-back" />
            </g>
          );
        })}
      </svg>

      <Bubble x={206} y={44} fixed={fixed}>¿Qué tengo hoy?</Bubble>
      <Bubble x={516} y={44} fixed={fixed}>Mueve la tarjeta a «Completado»</Bubble>
      <Bubble x={CENTER.x} y={290} fixed={fixed}>
        <Check className="h-3.5 w-3.5 text-accent" strokeWidth={2.5} />
        Hecho, con tu permiso
      </Bubble>

      <Tile x={LEFT.x} y={LEFT.y} label="Claude" fixed={fixed}>
        <Mark path={CLAUDE_PATH} fill={CLAUDE_BRAND} />
      </Tile>
      <Tile x={RIGHT.x} y={RIGHT.y} label="Codex" fixed={fixed}>
        <Mark path={OPENAI_PATH} fill="currentColor" className="text-ink" />
      </Tile>
      <Tile x={CENTER.x} y={CENTER.y} label="Zenth" large fixed={fixed}>
        <img src="/blog/favicon2.png" alt="" className="h-[56%] w-[56%] rounded-[18%] object-contain" />
      </Tile>
    </div>
  );
};

export default McpConnectionArt;
