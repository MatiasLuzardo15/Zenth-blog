import React from 'react';
import { ArrowUp } from 'lucide-react';
import ZenCharacter from './ZenCharacter';

/** Los tres ejemplos con los que abre el chat vacío. No se pueden enviar. */
const EXAMPLES = ['¿Qué tengo hoy?', '¿Qué tareas tengo pendientes?', '¿Cómo viene mi semana?'];

/**
 * Anuncio de Zen AI en la portada, dentro de una burbuja de pensamiento.
 * La pregunta, unos ejemplos y el campo donde se le escribiría.
 */
const ZenAiTeaser: React.FC = () => (
  <section aria-labelledby="zen-ai-teaser-title" className="scroll-mt-20 pb-20">
    <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
      <div className="relative mx-auto w-fit max-w-full">
        <div className="rounded-[2rem] border border-hairline bg-surface-1 px-5 py-5 sm:rounded-[2.5rem] sm:px-8 sm:py-7">
          <div className="flex items-start gap-4 sm:items-center sm:gap-10">
            <ZenCharacter
              size={120}
              pose="stand"
              mood="happy"
              look="right"
              className="mt-1 h-[5.5rem] w-[5.15rem] shrink-0 sm:mt-0 sm:h-[7.5rem] sm:w-28"
            />

            <div className="min-w-0">
              <p className="t-caption flex items-baseline gap-2.5">
                <span className="text-ink">Zen AI</span>
                <span className="text-ink-muted">Próximamente</span>
              </p>
              <h2
                id="zen-ai-teaser-title"
                className="mt-1 text-[clamp(1.85rem,4.4vw,3.15rem)] font-semibold leading-[0.95] tracking-[-0.05em] text-ink"
              >
                ¿En qué te ayudo?
              </h2>

              <ul className="mt-4 flex flex-wrap gap-2">
                {EXAMPLES.map(example => (
                  <li key={example}>
                    <span className="inline-flex rounded-full bg-surface-2 px-3.5 py-2 text-[0.8125rem] font-medium leading-none tracking-[-0.01em] text-ink">
                      {example}
                    </span>
                  </li>
                ))}
              </ul>

              <div
                aria-hidden="true"
                className="mt-3 flex w-full items-center gap-3 rounded-full border border-hairline bg-canvas py-1.5 pl-4 pr-1.5 sm:pl-5"
              >
                <span className="t-body min-w-0 flex-1 truncate text-ink-muted">Pídele algo a Zen AI…</span>
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-surface-2 text-ink-muted">
                  <ArrowUp className="h-4 w-4" strokeWidth={2} />
                </span>
              </div>
            </div>
          </div>
        </div>

        <span aria-hidden="true" className="absolute -bottom-3.5 left-12 h-3.5 w-3.5 rounded-full border border-hairline bg-surface-1 sm:left-16" />
        <span aria-hidden="true" className="absolute -bottom-7 left-7 h-2.5 w-2.5 rounded-full border border-hairline bg-surface-1 sm:left-10" />
        <span aria-hidden="true" className="absolute -bottom-10 left-3.5 h-1.5 w-1.5 rounded-full border border-hairline bg-surface-1 sm:left-6" />
      </div>
    </div>
  </section>
);

export default ZenAiTeaser;
