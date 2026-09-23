import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, Info, Lightbulb, Link2, TriangleAlert } from 'lucide-react';
import { sectionsOf } from '../../content/docs';
import type { DocArticle, DocBlock } from '../../content/docs';

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
