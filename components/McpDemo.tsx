import React, { useEffect, useRef, useState } from 'react';
import { AnimatePresence, MotionConfig, motion, useReducedMotion } from 'framer-motion';
import { ArrowUp, Check, FileText } from 'lucide-react';
import { CLAUDE_BRAND, CLAUDE_PATH, OPENAI_PATH } from './aiBrandMarks';
import { MOMENTS } from './demo/timeline';

/**
 * Demo de Zenth MCP para la portada, como una presentación en secuencia. El
 * escenario tiene tres lugares: a la izquierda el chat con tu asistente, al
 * centro Zenth (el ancla, siempre presente) y a la derecha lo que hay en tu
 * Zenth. Las líneas punteadas los unen y fluyen en el sentido real: la
 * pregunta entra a Zenth, Zenth busca o escribe, y la respuesta vuelve al chat,
 * donde la da la IA. En cada escena solo cambia lo que la historia necesita.
 *
 * Eso es en escritorio. En pantallas angostas no entran tres lugares en fila:
 * ahí cada escena muestra un solo momento al centro, que entra y sale entero,
 * y el escenario es mucho más bajo. Las dos versiones comparten guion, tiempos
 * y piezas. Sin la interfaz real de ninguna app y sin fondo; en blanco y negro
 * con los tokens del sitio. Solo avanza mientras se ve y, al volver, empieza
 * desde el principio. Con «reducir movimiento» se queda quieta en la respuesta.
 */

type Slot = 'claude' | 'chatgpt' | 'consent' | 'chat1' | 'chat2' | 'agenda' | 'doc' | 'safe';
/** `in`: fluye hacia Zenth. `out`: sale de Zenth. `still`: unida, sin tráfico. */
type Line = 'off' | 'still' | 'in' | 'out';
/** En qué punto está la conversación: escribiendo, esperando a Zenth o respondida. */
type ChatStage = 'ask' | 'wait' | 'answer';

interface SceneDef {
  id: string;
  ms: number;
  left: Slot | null;
  right: Slot | null;
  leftLine: Line;
  rightLine: Line;
  /** El estado del chat, cuando la escena lo muestra. */
  chat?: ChatStage;
  /** Una pieza sola en el centro: se va todo lo demás, incluido Zenth. */
  center?: Slot;
  caption: string;
}

const SCENES: SceneDef[] = [
  { id: 'connect', ms: 3800, left: 'claude', right: 'chatgpt', leftLine: 'in', rightLine: 'in', caption: 'Conecta Claude o ChatGPT con tu Zenth.' },
  { id: 'consent', ms: 3900, left: 'claude', right: 'consent', leftLine: 'still', rightLine: 'still', caption: 'Zenth te pide permiso. Tú decides.' },
  { id: 'ask', ms: 3000, left: 'chat1', right: null, leftLine: 'in', rightLine: 'off', chat: 'ask', caption: 'Le preguntas a tu asistente, como siempre…' },
  { id: 'lookup', ms: 2800, left: 'chat1', right: 'agenda', leftLine: 'in', rightLine: 'out', chat: 'wait', caption: '…consulta tu agenda en Zenth…' },
  { id: 'answer', ms: 4200, left: 'chat1', right: 'agenda', leftLine: 'out', rightLine: 'still', chat: 'answer', caption: '…y te responde en el chat.' },
  { id: 'write', ms: 3400, left: 'chat2', right: null, leftLine: 'in', rightLine: 'off', chat: 'ask', caption: 'También puede escribir por ti…' },
  { id: 'doc', ms: 4200, left: 'chat2', right: 'doc', leftLine: 'in', rightLine: 'out', chat: 'wait', caption: '…escribe el documento en tu Biblioteca…' },
  { id: 'docReply', ms: 3800, left: 'chat2', right: 'doc', leftLine: 'out', rightLine: 'still', chat: 'answer', caption: '…y te avisa en el chat cuando está listo.' },
  { id: 'safe', ms: 4000, left: null, right: null, leftLine: 'off', rightLine: 'off', center: 'safe', caption: 'Siempre con tu permiso.' },
  { id: 'outro', ms: 3400, left: null, right: null, leftLine: 'off', rightLine: 'off', caption: '' },
];
const STILL_SCENE = SCENES.findIndex(scene => scene.id === 'answer');

/** Una tarea por momento del día, con los cortes de la app (la Tarde va hasta las 19). */
const ITEMS: { moment: (typeof MOMENTS)[number]['key']; time: string; text: string; color: string }[] = [
  { moment: 'Mañana', time: '09:30', text: 'Llamar al banco', color: '#FFB7CE' },
  { moment: 'Tarde', time: '13:00', text: 'Almuerzo con Ana', color: '#FFE082' },
  { moment: 'Noche', time: '19:30', text: 'Gimnasio', color: '#A5D6A7' },
];
const DOC_TITLE = 'Plan de lanzamiento';
const DOC_LINES: { kind: 'h' | 'p' | 'li'; text: string }[] = [
  { kind: 'h', text: 'Objetivo' },
  { kind: 'p', text: 'Abrir la beta a 100 personas en octubre.' },
  { kind: 'h', text: 'Pasos' },
  { kind: 'li', text: 'Cerrar la lista de espera' },
  { kind: 'li', text: 'Preparar el correo de bienvenida' },
  { kind: 'li', text: 'Medir la primera semana' },
];
const PROMISES = ['No borra nada para siempre.', 'No comparte ni cambia permisos.', 'Lo desconectas cuando quieras.'];

/** La curva de todas las entradas: arranca rápido y se posa despacio. */
const EASE = [0.22, 1, 0.36, 1] as const;

const rise = (delay = 0) => ({
  initial: { opacity: 0, y: 12 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.55, delay, ease: EASE },
});

const ClaudeMark: React.FC<{ className?: string }> = ({ className = '' }) => (
  <svg viewBox="0 0 24 24" aria-hidden="true" className={className}><path d={CLAUDE_PATH} fill={CLAUDE_BRAND} /></svg>
);
const OpenAIMark: React.FC<{ className?: string }> = ({ className = '' }) => (
  <svg viewBox="0 0 24 24" aria-hidden="true" className={`text-ink ${className}`}><path d={OPENAI_PATH} fill="currentColor" /></svg>
);
const ZenthMark: React.FC<{ className?: string }> = ({ className = '' }) => (
  <img src="/blog/favicon2.png" alt="" className={`rounded-[22%] object-contain ${className}`} />
);

const Tile: React.FC<{ size?: 'sm' | 'md' | 'lg'; children: React.ReactNode }> = ({ size = 'md', children }) => {
  const box = size === 'lg' ? 'h-16 w-16 lg:h-24 lg:w-24' : size === 'sm' ? 'h-11 w-11' : 'h-14 w-14 lg:h-[72px] lg:w-[72px]';
  return (
    <span className={`relative flex shrink-0 items-center justify-center rounded-[22%] border border-hairline bg-surface-1 ${box}`}>
      {children}
    </span>
  );
};

/** Los tres puntos de «pensando»: la IA espera la respuesta de Zenth. */
const Thinking: React.FC = () => (
  <motion.div
    initial={{ opacity: 0, y: 6 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, transition: { duration: 0.15 } }}
    className="flex gap-1.5 self-start rounded-[16px] rounded-bl-[6px] border border-hairline bg-canvas px-3.5 py-3"
  >
    {[0, 1, 2].map(dot => (
      <motion.span
        key={dot}
        className="h-1.5 w-1.5 rounded-full bg-ink-muted"
        animate={{ opacity: [0.3, 1, 0.3] }}
        transition={{ duration: 0.9, repeat: Infinity, delay: dot * 0.15 }}
      />
    ))}
  </motion.div>
);

/** Lo que responde la IA en el chat, según la conversación. */
const Answer: React.FC<{ slot: 'chat1' | 'chat2' }> = ({ slot }) =>
  slot === 'chat1' ? (
    <>
      Hoy tienes <strong className="font-semibold">3 cosas</strong>:
      <ul className="mt-1.5 space-y-1">
        {ITEMS.map((item, index) => (
          <motion.li key={item.time} {...rise(0.2 + index * 0.18)} className="flex items-center gap-2 text-[13px]">
            <span className="h-1.5 w-1.5 shrink-0 rounded-full" style={{ backgroundColor: item.color }} />
            <span className="tabular-nums text-ink-muted">{item.time}</span>
            <span>{item.text}</span>
          </motion.li>
        ))}
      </ul>
    </>
  ) : (
    <>
      Listo. Lo guardé en tu Biblioteca:
      <motion.span {...rise(0.25)} className="mt-2 flex items-center gap-2 rounded-[10px] bg-surface-1 px-2.5 py-2 text-[13px] font-medium">
        <FileText className="h-4 w-4 shrink-0" strokeWidth={1.75} />
        {DOC_TITLE}
      </motion.span>
    </>
  );

/**
 * Una ventana de chat genérica con el logo del asistente: la pregunta se
 * escribe en el cuadro de texto y se envía; mientras Zenth trabaja, la IA
 * «piensa»; después responde en el mismo chat. No copia la interfaz real de
 * Claude ni la de ChatGPT.
 */
const ChatWindow: React.FC<{ slot: 'chat1' | 'chat2'; stage: ChatStage }> = ({ slot, stage }) => {
  const app = slot === 'chat1' ? 'claude' : 'chatgpt';
  const question = slot === 'chat1' ? '¿Qué tengo hoy?' : 'Escribe un plan de lanzamiento';
  const speed = slot === 'chat1' ? 65 : 45;
  // Si el chat aparece ya esperando o respondido (en móvil cada escena monta el
  // suyo), la pregunta ya está enviada y no se vuelve a escribir.
  const [typing] = useState(stage === 'ask');
  const [count, setCount] = useState(typing ? 0 : question.length);
  const [sent, setSent] = useState(!typing);

  useEffect(() => {
    if (!typing) return;
    let interval = 0;
    const start = window.setTimeout(() => {
      interval = window.setInterval(() => setCount(value => Math.min(question.length, value + 1)), speed);
    }, 500);
    const send = window.setTimeout(() => { window.clearInterval(interval); setSent(true); }, 500 + question.length * speed + 350);
    return () => { window.clearTimeout(start); window.clearInterval(interval); window.clearTimeout(send); };
  }, [typing, question, speed]);

  const draft = sent ? '' : question.slice(0, count);

  return (
    <div className="w-[300px] max-w-full rounded-[22px] border border-hairline bg-surface-1 p-2.5 text-left lg:w-[340px]">
      <div className="flex items-center gap-2 px-2 pb-1 pt-1">
        {app === 'claude' ? <ClaudeMark className="h-5 w-5" /> : <OpenAIMark className="h-5 w-5" />}
        <span className="text-[14px] font-semibold text-ink">{app === 'claude' ? 'Claude' : 'ChatGPT'}</span>
        <span className="ml-auto flex items-center gap-1.5 rounded-full bg-canvas px-2 py-1 text-[11px] font-medium text-ink-muted">
          <ZenthMark className="h-3.5 w-3.5" />
          Zenth
        </span>
      </div>

      <div className="flex h-[172px] flex-col justify-end gap-2 overflow-hidden px-1 pb-2">
        <AnimatePresence>
          {sent && (
            <motion.div
              key="question"
              layout
              initial={{ opacity: 0, y: 10, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.4, ease: EASE }}
              className="max-w-[88%] self-end rounded-[18px] rounded-br-[6px] bg-ink px-3.5 py-2 text-[14px] font-medium leading-snug text-canvas"
            >
              {question}
            </motion.div>
          )}
        </AnimatePresence>
        <AnimatePresence mode="wait">
          {sent && stage === 'wait' && <Thinking key="thinking" />}
          {stage === 'answer' && (
            <motion.div
              key="answer"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, ease: EASE }}
              className="max-w-[94%] self-start rounded-[18px] rounded-bl-[6px] border border-hairline bg-canvas px-3.5 py-2.5 text-[14px] leading-snug text-ink"
            >
              <Answer slot={slot} />
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <div className="flex h-12 items-center gap-2 rounded-[16px] border border-hairline bg-canvas pl-4 pr-1.5">
        <span className={`min-w-0 flex-1 truncate text-[14px] lg:text-[15px] ${draft ? 'text-ink' : 'text-ink-muted'}`}>
          {draft || 'Escribe un mensaje…'}
          {!sent && count > 0 && <span className="ml-0.5 inline-block h-[1em] w-px translate-y-[2px] animate-pulse bg-current" />}
        </span>
        <motion.span
          animate={{ scale: sent && typing ? [1, 0.85, 1] : 1 }}
          transition={{ duration: 0.3 }}
          className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full transition-colors ${draft ? 'bg-ink text-canvas' : 'bg-surface-2 text-ink-muted'}`}
        >
          <ArrowUp className="h-4 w-4" strokeWidth={2.5} />
        </motion.span>
      </div>
    </div>
  );
};

/**
 * Tramo punteado entre un lado y Zenth, en escritorio. Va de izquierda a
 * derecha, así que fluye «hacia adelante» cuando entra desde la izquierda o
 * sale hacia la derecha, y al revés cuando la respuesta vuelve al chat.
 */
const Connector: React.FC<{ side: 'left' | 'right'; state: Line }> = ({ side, state }) => {
  const forward = (side === 'left' && state === 'in') || (side === 'right' && state === 'out');
  const flowing = state === 'in' || state === 'out';
  const className = flowing ? (forward ? 'zenth-mcp-flow' : 'zenth-mcp-flow zenth-mcp-flow-back') : '';
  const stroke = flowing ? 'var(--fr-ink)' : 'var(--fr-ink-muted)';
  return (
    <motion.span
      aria-hidden="true"
      className="flex h-2 w-16 shrink-0 items-center justify-center xl:w-24"
      animate={{ opacity: state === 'off' ? 0 : 1, scale: state === 'off' ? 0.6 : 1 }}
      transition={{ duration: 0.5, ease: EASE }}
    >
      <svg className="h-2 w-full overflow-visible">
        <line x1="0" y1="4" x2="100%" y2="4" stroke={stroke} strokeWidth={3} strokeDasharray="0 14" strokeLinecap="round" className={className} style={{ transition: 'stroke 400ms' }} />
      </svg>
    </motion.span>
  );
};

/** En móvil: línea corta que se dibuja desde un lado y fluye hacia Zenth. */
const MiniDots: React.FC<{ from: 'left' | 'right'; delay: number; className?: string }> = ({ from, delay, className = '' }) => (
  <motion.svg
    initial={{ scaleX: 0, opacity: 0 }}
    animate={{ scaleX: 1, opacity: 1 }}
    transition={{ duration: 0.6, delay, ease: EASE }}
    style={{ originX: from === 'left' ? 0 : 1 }}
    className={`h-2 w-10 overflow-visible ${className}`}
    aria-hidden="true"
  >
    <line
      x1="0" y1="4" x2="100%" y2="4"
      stroke="var(--fr-ink)"
      strokeWidth={3}
      strokeDasharray="0 12"
      strokeLinecap="round"
      className={from === 'left' ? 'zenth-mcp-flow' : 'zenth-mcp-flow zenth-mcp-flow-back'}
    />
  </motion.svg>
);

const ZenthTile: React.FC = () => (
  <Tile size="lg">
    <span aria-hidden="true" className="zenth-mcp-pulse absolute inset-0 rounded-[22%] border border-ink-muted" />
    <ZenthMark className="h-9 w-9 lg:h-12 lg:w-12" />
  </Tile>
);

const SlotView: React.FC<{ slot: Slot; chat?: ChatStage }> = ({ slot, chat = 'ask' }) => {
  switch (slot) {
    case 'claude':
    case 'chatgpt':
      return (
        <span className="flex flex-col items-center gap-2">
          <Tile>{slot === 'claude' ? <ClaudeMark className="h-7 w-7 lg:h-9 lg:w-9" /> : <OpenAIMark className="h-7 w-7 lg:h-9 lg:w-9" />}</Tile>
          <span className="t-micro text-ink-muted">{slot === 'claude' ? 'Claude' : 'ChatGPT'}</span>
        </span>
      );

    case 'consent':
      return (
        <div className="relative w-[300px] max-w-full overflow-hidden rounded-[26px] border border-hairline bg-surface-1 p-5 text-center lg:w-[320px]">
          <p className="text-[17px] font-semibold leading-snug text-ink">Tu asistente quiere conectarse a Zenth</p>
          <p className="t-body mt-2 text-ink-muted">Podrá ver y organizar tu agenda, tus pizarras y tu Biblioteca.</p>
          <div className="mt-5 flex gap-2">
            <span className="flex h-10 flex-1 items-center justify-center rounded-full border border-hairline text-[14px] font-semibold text-ink-muted">Cancelar</span>
            <motion.span
              animate={{ scale: [1, 1, 0.9, 1] }}
              transition={{ duration: 0.5, delay: 1.6, times: [0, 0.2, 0.55, 1] }}
              className="flex h-10 flex-1 items-center justify-center rounded-full bg-ink text-[14px] font-semibold text-canvas"
            >
              Permitir
            </motion.span>
          </div>
          {/* Después de «Permitir»: la tarjeta se vuelve un ✓ */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4, delay: 2.15 }}
            className="absolute inset-0 flex flex-col items-center justify-center bg-surface-1"
          >
            <motion.span
              initial={{ scale: 0.4 }}
              animate={{ scale: 1 }}
              transition={{ type: 'spring', stiffness: 260, damping: 18, delay: 2.2 }}
              className="flex h-14 w-14 items-center justify-center rounded-full bg-ink text-canvas"
            >
              <Check className="h-7 w-7" strokeWidth={3} />
            </motion.span>
            <p className="mt-3 text-[17px] font-semibold text-ink">Conectado</p>
          </motion.div>
        </div>
      );

    case 'chat1':
    case 'chat2':
      return <ChatWindow slot={slot} stage={chat} />;

    case 'agenda':
      // Como en Agenda: una tarjeta por momento del día, con su franja de color,
      // y la tarea con su círculo para completar, su color y su hora.
      return (
        <div className="w-[300px] max-w-full lg:w-[340px]">
          <p className="mb-2 flex items-center gap-2 px-1 text-[12px] font-medium text-ink-muted">
            <ZenthMark className="h-4 w-4" />
            Hoy en tu Zenth
          </p>
          <div className="space-y-1.5">
            {ITEMS.map((item, index) => (
              <motion.div
                key={item.time}
                {...rise(0.15 + index * 0.25)}
                className="overflow-hidden rounded-[16px] border border-hairline bg-canvas"
              >
                <div className="px-3.5 py-1" style={{ backgroundColor: MOMENTS.find(moment => moment.key === item.moment)?.color }}>
                  <span className="text-[12px] font-medium text-black/80">{item.moment}</span>
                </div>
                <div className="p-1.5">
                  <div className="rounded-[12px] bg-surface-1 px-3 py-2">
                    <div className="flex items-center gap-2.5">
                      <span className="h-4 w-4 shrink-0 rounded-full border-[1.5px] border-ink-muted" />
                      <span className="flex-1 truncate text-[14px] font-semibold text-ink">{item.text}</span>
                      <span className="h-1.5 w-1.5 shrink-0 rounded-full" style={{ backgroundColor: item.color }} />
                    </div>
                    <p className="mt-0.5 pl-[26px] text-[12px] tabular-nums text-ink-muted">{item.time}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      );

    case 'doc':
      return (
        <div className="w-[300px] max-w-full rounded-[24px] border border-hairline bg-surface-1 p-5 text-left lg:w-[340px] lg:p-6">
          <p className="t-micro flex items-center gap-2 uppercase tracking-[0.08em] text-ink-muted">
            <ZenthMark className="h-4 w-4" />
            Biblioteca
            <span className="rounded-full bg-ink px-2 py-0.5 text-[10px] font-semibold tracking-normal text-canvas">Nuevo</span>
          </p>
          <p className="mt-2.5 text-[20px] font-semibold leading-tight tracking-[-0.01em] text-ink">{DOC_TITLE}</p>
          <div className="mt-3 space-y-1.5">
            {DOC_LINES.map((line, index) => (
              <motion.p
                key={line.text}
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.5 + index * 0.35, ease: EASE }}
                className={
                  line.kind === 'h'
                    ? 'pt-1 text-[14px] font-semibold text-ink'
                    : line.kind === 'li'
                      ? 'flex gap-2.5 text-[14px] leading-snug text-ink-muted'
                      : 'text-[14px] leading-snug text-ink-muted'
                }
              >
                {line.kind === 'li' && <span className="mt-[8px] h-1 w-1 shrink-0 rounded-full bg-ink-muted" />}
                {line.text}
              </motion.p>
            ))}
          </div>
        </div>
      );

    case 'safe':
      // Solo texto: tres frases centradas, sin tarjetas ni íconos.
      return (
        <div className="w-[300px] max-w-full space-y-3 text-center lg:w-auto lg:space-y-4">
          {PROMISES.map((promise, index) => (
            <motion.p
              key={promise}
              {...rise(0.15 + index * 0.35)}
              className="text-[22px] font-semibold leading-tight tracking-[-0.02em] text-ink lg:text-[34px]"
            >
              {promise}
            </motion.p>
          ))}
        </div>
      );
  }
};

/**
 * Un lugar del escenario de escritorio: lo que tiene entra y sale; si sigue
 * igual (el mismo chat de una escena a otra), se queda y solo cambia de estado.
 */
const Place: React.FC<{ slot: Slot | null; side: 'left' | 'right'; chat?: ChatStage }> = ({ slot, side, chat }) => (
  <div className={`flex min-w-0 flex-1 basis-0 ${side === 'left' ? 'justify-end' : 'justify-start'}`}>
    <AnimatePresence mode="wait">
      {slot && (
        <motion.div
          key={slot}
          initial={{ opacity: 0, x: side === 'left' ? -16 : 16, scale: 0.97 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          exit={{ opacity: 0, scale: 0.97, transition: { duration: 0.3, ease: EASE } }}
          transition={{ duration: 0.55, ease: EASE }}
          className={`flex min-w-0 max-w-full ${side === 'left' ? 'justify-end' : 'justify-start'}`}
        >
          <SlotView slot={slot} chat={chat} />
        </motion.div>
      )}
    </AnimatePresence>
  </div>
);

/** En móvil, el único momento de cada escena. */
const MobileMoment: React.FC<{ scene: SceneDef }> = ({ scene }) => {
  switch (scene.id) {
    case 'connect':
      return (
        // Alineados por arriba: los logos (56 px) bajan 4 px para compartir centro
        // con Zenth (64 px), y las líneas van a esa misma altura.
        <div className="flex items-start gap-2.5">
          <motion.span {...rise(0.1)} className="mt-1"><SlotView slot="claude" /></motion.span>
          <MiniDots from="left" delay={0.7} className="mt-7" />
          <motion.span
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.3, ease: EASE }}
          >
            <ZenthTile />
          </motion.span>
          <MiniDots from="right" delay={0.9} className="mt-7" />
          <motion.span {...rise(0.5)} className="mt-1"><SlotView slot="chatgpt" /></motion.span>
        </div>
      );
    case 'outro':
      return (
        <div className="flex flex-col items-center">
          <motion.span initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.7, ease: EASE }}>
            <ZenthTile />
          </motion.span>
          <motion.p {...rise(0.35)} className="mt-5 text-[22px] font-semibold tracking-[-0.02em] text-ink">Zenth MCP</motion.p>
          <motion.p {...rise(0.55)} className="t-body mt-1 text-ink-muted">Próximamente.</motion.p>
        </div>
      );
    default: {
      // Mientras Zenth trabaja, lo que pasa en Zenth; si hay conversación, el chat;
      // si no, la pieza del centro o lo que aparece a la derecha (el permiso).
      const slot = scene.chat === 'wait' ? scene.right : scene.chat ? scene.left : scene.center ?? scene.right ?? scene.left;
      return slot ? <SlotView slot={slot} chat={scene.chat} /> : null;
    }
  }
};

const DESKTOP_QUERY = '(min-width: 1024px)';

/** ¿Hay ancho para el escenario de tres lugares? Solo se dibuja una versión. */
const useIsDesktop = () => {
  const [desktop, setDesktop] = useState(() => typeof window !== 'undefined' && Boolean(window.matchMedia?.(DESKTOP_QUERY).matches));
  useEffect(() => {
    const media = window.matchMedia?.(DESKTOP_QUERY);
    if (!media) return;
    const update = () => setDesktop(media.matches);
    update();
    media.addEventListener('change', update);
    return () => media.removeEventListener('change', update);
  }, []);
  return desktop;
};

const McpDemo: React.FC = () => {
  const root = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion() ?? false;
  const [index, setIndex] = useState(reduced ? STILL_SCENE : 0);
  const [onScreen, setOnScreen] = useState(false);
  const scene = SCENES[index];
  const outro = scene.id === 'outro';
  const desktop = useIsDesktop();

  // Solo avanza mientras se ve; al volver a la pantalla empieza desde el principio.
  useEffect(() => {
    const node = root.current;
    if (!node || reduced) return;
    if (typeof IntersectionObserver === 'undefined') { setOnScreen(true); return; }
    const observer = new IntersectionObserver(([entry]) => {
      setOnScreen(entry.isIntersecting);
      if (!entry.isIntersecting) setIndex(0);
    }, { threshold: 0.35 });
    observer.observe(node);
    return () => observer.disconnect();
  }, [reduced]);

  useEffect(() => {
    if (reduced) { setIndex(STILL_SCENE); return; }
    if (!onScreen) return;
    const id = window.setTimeout(() => setIndex(value => (value + 1) % SCENES.length), scene.ms);
    return () => window.clearTimeout(id);
  }, [index, onScreen, reduced, scene.ms]);

  return (
    <MotionConfig reducedMotion="user">
      <div ref={root}>
        <p className="sr-only">
          Presentación: conectas Claude o ChatGPT con Zenth y das el permiso. Le preguntas a tu asistente «¿Qué tengo
          hoy?», consulta tu agenda en Zenth y te responde en el chat con tus tres tareas. Le pides un plan de lanzamiento,
          lo escribe en tu Biblioteca y te avisa en el chat. No borra nada para siempre, no comparte y lo desconectas
          cuando quieras.
        </p>

        {/* Alto fijo para que la página no salte; el escenario se centra dentro. */}
        {desktop ? (
          <div aria-hidden="true" className="relative h-[400px]">
            {/* Una pieza sola al centro (las garantías) o el escenario de tres lugares. */}
            <AnimatePresence mode="wait">
              {scene.center ? (
                <motion.div
                  key="center"
                  initial={{ opacity: 0, scale: 0.97 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.97, transition: { duration: 0.35, ease: EASE } }}
                  transition={{ duration: 0.5, ease: EASE }}
                  className="absolute inset-0 flex items-center justify-center"
                >
                  <SlotView slot={scene.center} />
                </motion.div>
              ) : (
                <motion.div
                  key="stage"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0, transition: { duration: 0.35, ease: EASE } }}
                  transition={{ duration: 0.5, ease: EASE }}
                  className="absolute inset-0 flex flex-row items-center justify-center"
                >
                  <Place slot={scene.left} side="left" chat={scene.chat} />
                  <Connector side="left" state={scene.leftLine} />

                  <motion.div className="relative shrink-0" animate={{ scale: outro ? 1.25 : 1 }} transition={{ duration: 0.7, ease: EASE }}>
                    <ZenthTile />
                    <AnimatePresence>
                      {outro && (
                        <motion.div
                          key="outro"
                          initial={{ opacity: 0, y: 8 }}
                          animate={{ opacity: 1, y: 0 }}
                          // La salida no hereda el retraso de la entrada: si no, la etiqueta
                          // seguía visible un instante cuando la demo volvía a empezar.
                          exit={{ opacity: 0, transition: { duration: 0.15, delay: 0 } }}
                          transition={{ duration: 0.6, delay: 0.35, ease: EASE }}
                          className="absolute -inset-x-40 top-full mt-5 text-center"
                        >
                          <p className="text-[22px] font-semibold tracking-[-0.02em] text-ink">Zenth MCP</p>
                          <p className="t-body mt-1 text-ink-muted">Próximamente.</p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>

                  <Connector side="right" state={scene.rightLine} />
                  <Place slot={scene.right} side="right" />
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ) : (
          <div aria-hidden="true" className="relative h-[330px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={scene.id}
                initial={{ opacity: 0, y: 16, scale: 0.97 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -12, scale: 0.97, transition: { duration: 0.35, ease: EASE } }}
                transition={{ duration: 0.55, ease: EASE }}
                className="absolute inset-0 flex items-center justify-center"
              >
                <MobileMoment scene={scene} />
              </motion.div>
            </AnimatePresence>
          </div>
        )}

        {/* El subtítulo de cada escena: pequeño, para no competir con el título de la sección. */}
        <div aria-hidden="true" className="relative mt-4 h-14 lg:h-8">
          <AnimatePresence mode="wait">
            {scene.caption && (
              <motion.p
                key={scene.caption}
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -6 }}
                transition={{ duration: 0.4, ease: EASE }}
                className="t-body-lg absolute inset-0 text-center text-ink-muted"
              >
                {scene.caption}
              </motion.p>
            )}
          </AnimatePresence>
        </div>
      </div>
    </MotionConfig>
  );
};

export default McpDemo;
