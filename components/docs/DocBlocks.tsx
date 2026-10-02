import React from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowDown, Ban, Bot, CalendarCheck, ChevronRight, CircleCheck, Database, Filter, Info, Lightbulb,
  Link2, TriangleAlert, User, Workflow, Zap,
} from 'lucide-react';
import { sectionsOf } from '../../content/docs';
import type { DocArticle, DocBlock } from '../../content/docs';
import type { DocFlowIcon } from '../../content/docs/types';
import { NoteExample } from './NoteExamples';

const INLINE_PATTERN = /(\*\*[^*]+\*\*|`[^`]+`|\[[^\]]+\]\([^)]+\))/g;
const LINK_PATTERN = /^\[([^\]]+)\]\(([^)]+)\)$/;

/** **negrita**, `código` y [enlaces](/ruta): el único formato en línea de la documentación. */
export const Inline: React.FC<{ text: string }> = ({ text }) => (
  <>
    {text.split(INLINE_PATTERN).map((part, index) => {
      if (!part) return null;
      if (part.startsWith('**') && part.endsWith('**')) {
        return <strong key={index} className="font-semibold text-ink">{part.slice(2, -2)}</strong>;
      }
      if (part.startsWith('`') && part.endsWith('`')) {
        return (
          <code key={index} className="whitespace-nowrap rounded-small bg-surface-2 px-1.5 py-0.5 text-[0.86em] font-medium text-ink">
            {part.slice(1, -1)}
          </code>
        );
      }
      const link = part.match(LINK_PATTERN);
      if (link) {
        const [, label, href] = link;
        return href.startsWith('/') ? (
          <Link key={index} to={href} className="fr-link">{label}</Link>
        ) : (
          <a key={index} href={href} target="_blank" rel="noopener noreferrer" className="fr-link">{label}</a>
        );
      }
      return <React.Fragment key={index}>{part}</React.Fragment>;
    })}
  </>
);

const isApplePlatform = () =>
  typeof navigator !== 'undefined' && /Mac|iPhone|iPad/.test(navigator.platform || navigator.userAgent);

const APPLE_KEYS: Record<string, string> = { Ctrl: '⌘', Alt: '⌥', Shift: '⇧' };

/** Ctrl, Alt y Shift se muestran como ⌘, ⌥ y ⇧ a quien lee desde un Mac. */
const displayKey = (key: string, apple: boolean) => (apple ? APPLE_KEYS[key] ?? key : key);

export const Keycap: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <kbd className="inline-flex min-h-[1.75rem] min-w-[1.75rem] items-center justify-center rounded-small border border-hairline bg-surface-1 px-2 font-ui text-[12px] font-medium text-ink shadow-[0_1px_0_var(--fr-hairline)]">
    {children}
  </kbd>
);

const CALLOUTS = {
  tip: { icon: Lightbulb, label: 'Consejo', tone: 'text-accent' },
  note: { icon: Info, label: 'Nota', tone: 'text-accent' },
  warning: { icon: TriangleAlert, label: 'Importante', tone: 'text-semantics-warning' },
} as const;

const FLOW_ICONS: Record<Exclude<DocFlowIcon, 'zenth'>, React.ComponentType<{ className?: string; strokeWidth?: number }>> = {
  person: User,
  assistant: Bot,
  database: Database,
  agenda: CalendarCheck,
};

/**
 * Tramo punteado entre un paso y el siguiente. Fluye como las líneas de
 * `McpConnectionArt` (`.zenth-mcp-flow`, quieta con «reducir movimiento»):
 * horizontal desde `sm`, vertical debajo. Las medidas salen del icono de 44 px.
 */
const FlowLine: React.FC = () => (
  <>
    <svg aria-hidden="true" className="absolute left-[calc(50%+30px)] top-[20px] hidden h-1 w-[calc(100%-60px)] overflow-visible sm:block">
      <line x1="0" y1="2" x2="100%" y2="2" stroke="var(--fr-ink-muted)" strokeWidth={3} className="zenth-mcp-flow" />
    </svg>
    <svg aria-hidden="true" className="absolute left-[20px] top-[50px] h-[calc(100%-20px)] w-1 overflow-visible sm:hidden">
      <line x1="2" y1="0" x2="2" y2="100%" stroke="var(--fr-ink-muted)" strokeWidth={3} className="zenth-mcp-flow" />
    </svg>
  </>
);

const FlowDiagram: React.FC<{ block: Extract<DocBlock, { type: 'flow' }> }> = ({ block }) => (
  <figure className="fr-card mt-6 !p-5 sm:!p-6">
    <ol className="flex flex-col gap-9 sm:flex-row sm:gap-0">
      {block.nodes.map((node, index) => {
        const Icon = node.icon === 'zenth' ? null : FLOW_ICONS[node.icon];
        return (
          <li key={index} className="relative flex gap-4 sm:flex-1 sm:flex-col sm:items-center sm:gap-3 sm:px-2 sm:text-center">
            {index < block.nodes.length - 1 && <FlowLine />}
            <span className="relative flex h-11 w-11 shrink-0 items-center justify-center rounded-[14px] border border-hairline bg-surface-1 text-ink">
              {Icon ? (
                <Icon className="h-5 w-5" strokeWidth={1.75} />
              ) : (
                <img src="/blog/favicon2.png" alt="" className="h-6 w-6 rounded-[6px] object-contain" />
              )}
            </span>
            <div className="min-w-0 pt-0.5 sm:pt-0">
              <p className="t-caption text-ink">{node.label}</p>
              {node.detail && <p className="t-body-sm mt-1 text-ink-muted"><Inline text={node.detail} /></p>}
            </div>
          </li>
        );
      })}
    </ol>
    <figcaption className="t-micro mt-6 border-t border-hairline-soft pt-4 text-ink-muted">
      <Inline text={block.caption} />
    </figcaption>
  </figure>
);

const Caption: React.FC<{ text: string }> = ({ text }) => (
  <figcaption className="t-micro mt-6 border-t border-hairline-soft pt-4 text-ink-muted">
    <Inline text={text} />
  </figcaption>
);

const RULE_PARTS = [
  { label: 'Cuando', hint: 'lo que dispara la regla', icon: Zap },
  { label: 'Si', hint: 'lo que debe cumplir la tarjeta', icon: Filter },
  { label: 'Entonces', hint: 'lo que hace Zenth, en orden', icon: Workflow },
] as const;

/**
 * Una regla como la ve el editor de la app: tres pasos numerados, de arriba
 * abajo, unidos por una línea. Cada paso muestra su ejemplo en fichas.
 */
const RuleDiagram: React.FC<{ block: Extract<DocBlock, { type: 'rule' }> }> = ({ block }) => {
  const { rule } = block;
  const contents = [
    [rule.whenScope ? `${rule.when} ${rule.whenScope}` : rule.when],
    rule.conditions,
    rule.actions,
  ];
  return (
    <figure className="fr-card mt-6 !p-5 sm:!p-6">
      <ol>
        {RULE_PARTS.map((part, index) => {
          const Icon = part.icon;
          const last = index === RULE_PARTS.length - 1;
          const items = contents[index];
          return (
            <li key={part.label} className="flex gap-4">
              <div className="flex w-7 shrink-0 flex-col items-center" aria-hidden="true">
                <span className="t-micro flex h-7 w-7 items-center justify-center rounded-full bg-ink tabular-nums text-canvas">{index + 1}</span>
                {!last && <span className="mt-1.5 w-px flex-1 bg-hairline" />}
              </div>
              <div className={`min-w-0 flex-1 ${last ? '' : 'pb-6'}`}>
                <p className="flex flex-wrap items-center gap-x-2 gap-y-0.5 pt-1">
                  <Icon className="h-4 w-4 text-ink-muted" strokeWidth={1.75} aria-hidden="true" />
                  <span className="t-caption text-ink">{part.label}</span>
                  <span className="t-micro text-ink-muted">· {part.hint}</span>
                </p>
                <ul className="mt-3 flex flex-wrap gap-2">
                  {items.length === 0 ? (
                    <li className="t-body-sm rounded-small border border-dashed border-hairline px-3 py-1.5 text-ink-muted">Sin condiciones: actúa siempre</li>
                  ) : items.map((item, itemIndex) => (
                    <li key={item} className="t-body-sm flex items-center gap-2 rounded-small border border-hairline bg-canvas px-3 py-1.5 text-ink">
                      {index === 2 && items.length > 1 && (
                        <span className="t-micro tabular-nums text-ink-muted">{itemIndex + 1}</span>
                      )}
                      <span><Inline text={item} /></span>
                    </li>
                  ))}
                  {index === 1 && items.length > 1 && (
                    <li className="t-micro self-center text-ink-muted">todas deben cumplirse</li>
                  )}
                </ul>
              </div>
            </li>
          );
        })}
      </ol>
      <Caption text={block.caption} />
    </figure>
  );
};

/** Una pizarra en miniatura con la tarjeta en una de sus listas. */
const MiniBoard: React.FC<{ lists: string[]; card: string; at: string; completed?: boolean; highlight?: boolean }> = ({
  lists, card, at, completed = false, highlight = false,
}) => (
  <div className="grid gap-2" style={{ gridTemplateColumns: `repeat(${lists.length}, minmax(0, 1fr))` }}>
    {lists.map(list => (
      <div key={list} className="min-w-0 rounded-large border border-hairline-soft bg-canvas p-1.5 sm:p-2">
        <p className="t-micro truncate px-1 pb-2 font-medium text-ink-muted">{list}</p>
        {list === at ? (
          <div className={`flex items-start gap-2 rounded-small border bg-surface-2 px-2 py-2 sm:px-2.5 ${highlight ? 'border-accent' : 'border-hairline'}`}>
            <CircleCheck className={`mt-0.5 hidden h-3.5 w-3.5 shrink-0 sm:block ${completed ? 'text-ink' : 'text-ink-muted'}`} strokeWidth={2} aria-hidden="true" />
            <span className={`t-micro min-w-0 text-ink ${completed ? 'line-through decoration-ink-muted' : ''}`}>{card}</span>
          </div>
        ) : (
          <div className="h-10 rounded-small border border-dashed border-hairline-soft" />
        )}
      </div>
    ))}
  </div>
);

/** Antes y después, una pizarra encima de la otra: lo que haces tú y lo que hace la regla. */
const BoardMoveDiagram: React.FC<{ block: Extract<DocBlock, { type: 'boardMove' }> }> = ({ block }) => {
  const { move } = block;
  return (
    <figure className="fr-card mt-6 !p-5 sm:!p-6">
      <p className="t-caption mb-3 flex items-center gap-2 text-ink">
        <span className="t-micro flex h-6 w-6 items-center justify-center rounded-full bg-surface-2 text-ink"><User className="h-3.5 w-3.5" strokeWidth={2} aria-hidden="true" /></span>
        {move.trigger}
      </p>
      <MiniBoard lists={move.lists} card={move.card} at={move.from} completed={move.completed} />
      <div className="my-3 flex items-center gap-2 text-ink-muted" aria-hidden="true">
        <span className="h-px flex-1 bg-hairline-soft" />
        <ArrowDown className="h-4 w-4" strokeWidth={1.75} />
        <span className="h-px flex-1 bg-hairline-soft" />
      </div>
      <p className="t-caption mb-3 flex items-center gap-2 text-ink">
        <span className="t-micro flex h-6 w-6 items-center justify-center rounded-full bg-ink text-canvas"><Bot className="h-3.5 w-3.5" strokeWidth={2} aria-hidden="true" /></span>
        {move.result}
      </p>
      <MiniBoard lists={move.lists} card={move.card} at={move.to} completed={move.completed} highlight />
      <Caption text={block.caption} />
    </figure>
  );
};

const CHAIN_ICONS = { person: User, rule: Bot, stop: Ban } as const;

/** Una cadena de reglas: cada nivel, un paso más a la derecha, hasta que se corta. */
const ChainDiagram: React.FC<{ block: Extract<DocBlock, { type: 'chain' }> }> = ({ block }) => (
  <figure className="fr-card mt-6 !p-5 sm:!p-6">
    <ol className="space-y-3">
      {block.steps.map((step, index) => {
        const Icon = CHAIN_ICONS[step.kind];
        const stop = step.kind === 'stop';
        return (
          <li key={index} className="flex items-start gap-3" style={{ paddingLeft: `${Math.min(step.depth, 4) * 1.25}rem` }}>
            <span className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-[12px] border ${
              stop ? 'border-semantics-warning text-semantics-warning' : 'border-hairline bg-surface-1 text-ink'
            }`}>
              <Icon className="h-[18px] w-[18px]" strokeWidth={1.75} aria-hidden="true" />
            </span>
            <div className="min-w-0 pt-1">
              <p className="t-caption flex flex-wrap items-center gap-2 text-ink">
                <span><Inline text={step.label} /></span>
                {step.kind === 'rule' && (
                  <span className="t-micro rounded-pill bg-surface-2 px-2 py-0.5 text-ink-muted">Nivel {step.depth}</span>
                )}
              </p>
              {step.detail && <p className="t-body-sm mt-0.5 text-ink-muted"><Inline text={step.detail} /></p>}
            </div>
          </li>
        );
      })}
    </ol>
    <Caption text={block.caption} />
  </figure>
);

const Block: React.FC<{ block: DocBlock; sectionId?: string | null }> = ({ block, sectionId }) => {
  switch (block.type) {
    case 'h2':
      return (
        <h2 id={sectionId ?? undefined} className="t-display-md group mt-14 flex scroll-mt-24 items-baseline gap-2 text-ink first:mt-0">
          <span>{block.text}</span>
          {sectionId && (
            <Link
              to={`#${sectionId}`}
              aria-label={`Enlace a la sección «${block.text}»`}
              className="text-ink-muted opacity-0 transition-opacity hover:text-ink focus-visible:opacity-100 group-hover:opacity-100"
            >
              <Link2 className="h-4 w-4" strokeWidth={1.75} />
            </Link>
          )}
        </h2>
      );

    case 'h3':
      return <h3 className="t-headline mt-9 text-ink">{block.text}</h3>;

    case 'p':
      return <p className="t-body-lg mt-4 text-ink-muted"><Inline text={block.text} /></p>;

    case 'steps':
      return (
        <ol className="mt-6 space-y-4">
          {block.items.map((item, index) => (
            <li key={index} className="flex gap-4">
              <span className="t-micro mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-surface-1 tabular-nums text-ink-muted">
                {index + 1}
              </span>
              <p className="t-body-lg text-ink-muted"><Inline text={item} /></p>
            </li>
          ))}
        </ol>
      );

    case 'list':
      return (
        <ul className="mt-5 space-y-3">
          {block.items.map((item, index) => (
            <li key={index} className="flex gap-3">
              <span className="mt-[11px] h-1 w-1 shrink-0 rounded-full bg-accent" />
              <span className="t-body-lg text-ink-muted"><Inline text={item} /></span>
            </li>
          ))}
        </ul>
      );

    case 'callout': {
      const { icon: Icon, label, tone } = CALLOUTS[block.tone];
      return (
        <aside className="fr-card mt-6 flex gap-3.5">
          <Icon className={`mt-0.5 h-[18px] w-[18px] shrink-0 ${tone}`} strokeWidth={1.75} aria-hidden="true" />
          <div className="min-w-0">
            <p className="t-caption text-ink">{block.title ?? label}</p>
            <p className="t-body mt-1.5 text-ink-muted"><Inline text={block.text} /></p>
          </div>
        </aside>
      );
    }

    case 'keys': {
      const apple = isApplePlatform();
      return (
        <dl className="mt-6 divide-y divide-hairline-soft overflow-hidden rounded-large border border-hairline">
          {block.rows.map((row, index) => (
            <div key={index} className="flex flex-col gap-2 px-4 py-3 sm:flex-row sm:items-center sm:justify-between sm:gap-6">
              <dt className="t-body text-ink-muted">{row.label}</dt>
              <dd className="flex shrink-0 flex-wrap items-center gap-1">
                {row.keys.map((key, keyIndex) => (
                  <React.Fragment key={keyIndex}>
                    {keyIndex > 0 && <span className="t-micro px-0.5 text-ink-muted" aria-hidden="true">+</span>}
                    <Keycap>{displayKey(key, apple)}</Keycap>
                  </React.Fragment>
                ))}
              </dd>
            </div>
          ))}
        </dl>
      );
    }

    case 'path':
      return (
        <div className="mt-5 flex flex-wrap items-center gap-1.5" aria-label={`Ruta: ${block.steps.join(', ')}`}>
          {block.steps.map((step, index) => (
            <React.Fragment key={index}>
              {index > 0 && <ChevronRight className="h-3.5 w-3.5 text-ink-muted" aria-hidden="true" />}
              <span className="t-caption rounded-pill bg-surface-2 px-3 py-1.5 text-ink">{step}</span>
            </React.Fragment>
          ))}
        </div>
      );

    case 'table':
      return (
        <div className="mt-6 overflow-x-auto rounded-large border border-hairline">
          <table className="w-full min-w-[30rem] border-collapse text-left">
            <thead>
              <tr className="border-b border-hairline bg-surface-1">
                {block.head.map((cell, index) => (
                  <th key={index} scope="col" className="t-caption px-4 py-3 text-ink">{cell}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {block.rows.map((row, rowIndex) => (
                <tr key={rowIndex} className="border-b border-hairline-soft last:border-b-0">
                  {row.map((cell, cellIndex) => (
                    <td key={cellIndex} className={`t-body px-4 py-3 align-top ${cellIndex === 0 ? 'font-medium text-ink' : 'text-ink-muted'}`}>
                      <Inline text={cell} />
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );

    case 'flow':
      return <FlowDiagram block={block} />;

    case 'rule':
      return <RuleDiagram block={block} />;

    case 'boardMove':
      return <BoardMoveDiagram block={block} />;

    case 'chain':
      return <ChainDiagram block={block} />;

    case 'noteExample':
      return (
        <figure className="mt-8 min-w-0">
          <NoteExample example={block.example} />
          <Caption text={block.caption} />
        </figure>
      );
  }
};

/** El cuerpo de un artículo. Los ids de sección salen de `sectionsOf`, igual que en el buscador. */
export const DocContent: React.FC<{ article: DocArticle }> = ({ article }) => (
  <div>
    {sectionsOf(article).map((section, index) =>
      section.blocks.map((block, blockIndex) => (
        <Block key={`${index}-${blockIndex}`} block={block} sectionId={blockIndex === 0 ? section.id : undefined} />
      )),
    )}
  </div>
);
