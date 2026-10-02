import React, { useId, useState } from 'react';
import { Columns2, Columns3, AlignLeft } from 'lucide-react';
import type { DocNoteExample } from '../../content/docs/types';

const controlClass = 't-caption min-h-11 rounded-small px-3 py-2 text-ink transition-colors hover:bg-surface-2 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent';

/** El índice muestra una sección del ejemplo, sin navegar fuera de la guía. */
const OutlineExample: React.FC<{ example: Extract<DocNoteExample, { kind: 'outline' }> }> = ({ example }) => {
  const id = useId();
  const [selected, setSelected] = useState(0);
  const section = example.sections[selected];
  return (
    <div className="overflow-hidden rounded-large border border-hairline bg-canvas">
      <div className="border-b border-hairline-soft px-5 py-5 sm:px-6">
        <p className="t-headline text-ink">{example.title}</p>
        <p className="t-body-sm mt-1 text-ink-muted">Ejemplo ilustrativo de una nota</p>
      </div>
      <div className="px-5 py-5 sm:px-6">
        <p className="t-caption mb-2 text-ink">Índice automático</p>
        <div role="group" aria-label="Índice del ejemplo" className="flex flex-col items-start">
          {example.sections.map((section, index) => (
            <button key={index} type="button" aria-pressed={selected === index}
              aria-controls={`${id}-section`} onClick={() => setSelected(index)}
              className={`${controlClass} flex w-full items-center gap-3 text-left ${section.level === 2 ? 'pl-7' : ''} ${selected === index ? 'bg-surface-1 font-semibold' : ''}`}>
              <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-accent" aria-hidden="true" />
              {section.title}
            </button>
          ))}
        </div>
      </div>
      <div id={`${id}-section`} className="border-t border-hairline-soft bg-surface-1 px-5 py-5 sm:px-6" aria-live="polite" aria-atomic="true">
        <p className="t-body-sm mb-4 text-ink-muted">Vista de la sección seleccionada</p>
        {section && (
          <div className="min-w-0">
            <div className="flex flex-wrap items-baseline justify-between gap-2">
              <p className={`${section.level === 1 ? 'text-lg font-semibold' : 'text-base font-medium'} text-ink`}>{section.title}</p>
              <span className="t-micro text-ink-muted">Título {section.level}</span>
            </div>
            <p className="t-body-sm mt-2 text-ink-muted">{section.text}</p>
          </div>
        )}
      </div>
      <p className="t-body-sm border-t border-hairline-soft px-5 py-4 text-ink-muted sm:px-6">
        El índice toma el nombre y el nivel de cada título del cuerpo.
      </p>
    </div>
  );
};

const COLUMN_VIEWS = [
  { count: 3, label: 'Tres columnas', icon: Columns3 },
  { count: 2, label: 'Dos columnas', icon: Columns2 },
  { count: 1, label: 'Texto continuo', icon: AlignLeft },
] as const;

/** Cada vista compara un resultado que parte del mismo grupo original de tres columnas. */
const ColumnsExample: React.FC<{ example: Extract<DocNoteExample, { kind: 'columns' }> }> = ({ example }) => {
  const [count, setCount] = useState<1 | 2 | 3>(3);
  const id = useId();
  const groups = count === 1 ? [example.sections]
    : count === 2 ? [example.sections.slice(0, 1), example.sections.slice(1)]
      : example.sections.map(section => [section]);
  return (
    <div className="overflow-hidden rounded-large border border-hairline bg-canvas">
      <div className="border-b border-hairline-soft px-4 py-4 sm:px-5">
        <p className="t-caption mb-3 text-ink">Compara resultados desde el grupo original de tres columnas</p>
        <div role="group" aria-label="Distribución del ejemplo" className="flex flex-wrap gap-1.5">
          {COLUMN_VIEWS.map(view => {
            const Icon = view.icon;
            return <button key={view.count} type="button" aria-pressed={count === view.count} aria-controls={id}
              onClick={() => setCount(view.count)}
              className={`${controlClass} flex items-center gap-2 ${count === view.count ? 'bg-surface-2 font-semibold' : ''}`}>
              <Icon className="h-4 w-4 shrink-0" strokeWidth={1.75} aria-hidden="true" />{view.label}
            </button>;
          })}
        </div>
      </div>
      <div id={id} className={`grid divide-y divide-hairline-soft ${count === 3 ? 'sm:grid-cols-3' : count === 2 ? 'sm:grid-cols-2' : ''} ${count > 1 ? 'sm:divide-x sm:divide-y-0' : ''}`}>
        {groups.map((group, index) => (
          <div key={index} className="min-w-0 space-y-6 px-5 py-6">
            {group.map(section => (
              <div key={section.title} className="min-w-0">
                <p className="t-caption mb-3 flex items-center gap-2 text-ink">
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-surface-2 tabular-nums" aria-label={`Orden ${example.sections.indexOf(section) + 1}`}>
                    {example.sections.indexOf(section) + 1}
                  </span>
                  {section.title}
                </p>
                <p className="t-body-sm text-ink-muted">{section.text}</p>
              </div>
            ))}
          </div>
        ))}
      </div>
      <div className="border-t border-hairline-soft px-5 py-4">
        <p className="t-body-sm text-ink-muted" aria-live="polite" aria-atomic="true">
          {count === 3 ? 'Tres columnas de igual ancho; el orden de lectura es 1, 2 y 3.'
            : count === 2 ? 'El contenido de la tercera columna continúa al final de la segunda.'
              : 'Al convertir en texto, las tres secciones siguen una detrás de otra.'}
        </p>
        {count > 1 && <p className="t-body-sm mt-2 text-ink-muted sm:hidden">En móvil, las columnas se apilan en ese mismo orden.</p>}
      </div>
    </div>
  );
};

const CROP_OPTIONS = [
  { value: 'original', label: 'Original (3:2 en este ejemplo)', ratio: '3 / 2', result: 'Se muestra la imagen completa.' },
  { value: 'wide', label: 'Horizontal (16:9)', ratio: '16 / 9', result: 'Se recorta arriba y abajo, manteniendo el centro.' },
  { value: 'square', label: 'Cuadrada (1:1)', ratio: '1 / 1', result: 'Se recortan los lados, manteniendo el centro.' },
  { value: 'portrait', label: 'Vertical (3:4)', ratio: '3 / 4', result: 'El marco vertical conserva la zona central y recorta más de los lados.' },
] as const;

/** Patrón geométrico de prueba: permite reconocer exactamente qué parte recorta cada marco. */
const CropPattern: React.FC<{ alt: string }> = ({ alt }) => (
  <svg viewBox="0 0 600 400" preserveAspectRatio="xMidYMid slice" role="img" aria-label={alt} className="block h-full w-full">
    <rect width="600" height="400" fill="var(--fr-surface-1)" />
    <rect x="200" width="200" height="400" fill="var(--fr-surface-2)" />
    <g stroke="var(--fr-hairline)" strokeWidth="2" fill="none">
      <rect x="16" y="16" width="568" height="368" />
      <path d="M200 0v400M400 0v400M0 200h600" />
    </g>
    {[100, 300, 500].map((x, index) => (
      <g key={x}>
        <circle cx={x} cy="200" r="54" fill={index === 1 ? 'var(--fr-accent)' : 'var(--fr-canvas)'} />
        <text x={x} y="211" textAnchor="middle" fontSize="32" fontWeight="600" fontFamily="Inter, system-ui, sans-serif" fill={index === 1 ? '#000000' : 'var(--fr-ink)'}>{index + 1}</text>
      </g>
    ))}
    <text x="300" y="55" textAnchor="middle" fontSize="20" fontFamily="Inter, system-ui, sans-serif" fill="var(--fr-ink-muted)">BORDE SUPERIOR</text>
    <text x="300" y="365" textAnchor="middle" fontSize="20" fontFamily="Inter, system-ui, sans-serif" fill="var(--fr-ink-muted)">BORDE INFERIOR</text>
  </svg>
);

const ImageCropExample: React.FC<{ example: Extract<DocNoteExample, { kind: 'imageCrop' }> }> = ({ example }) => {
  const [value, setValue] = useState<string>('square');
  const id = useId();
  const option = CROP_OPTIONS.find(item => item.value === value) ?? CROP_OPTIONS[0];
  return (
    <div className="overflow-hidden rounded-large border border-hairline bg-canvas">
      <div className="border-b border-hairline-soft px-5 py-4">
        <label htmlFor={id} className="t-caption block text-ink">Proporción del ejemplo</label>
        <select id={id} value={value} onChange={event => setValue(event.target.value)}
          className="mt-2 min-h-11 w-full rounded-small border border-hairline bg-canvas px-3 font-ui text-base text-ink focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent sm:text-sm">
          {CROP_OPTIONS.map(item => <option key={item.value} value={item.value}>{item.label}</option>)}
        </select>
      </div>
      <div className="grid gap-6 px-5 py-5 sm:grid-cols-2">
        <div className="min-w-0">
          <p className="t-caption mb-3 text-ink">Archivo original</p>
          <div className="overflow-hidden rounded-small" style={{ aspectRatio: '3 / 2' }}><CropPattern alt={example.alt} /></div>
        </div>
        <div className="min-w-0">
          <p className="t-caption mb-3 text-ink">Vista en la nota</p>
          <div className="overflow-hidden rounded-small ring-1 ring-hairline" style={{ aspectRatio: option.ratio }}><CropPattern alt={`${example.alt} Vista ${option.label}.`} /></div>
        </div>
      </div>
      <p className="t-body-sm border-t border-hairline-soft px-5 py-4 text-ink-muted" aria-live="polite" aria-atomic="true">
        {option.result} El archivo original permanece igual. Elige Original para volver a verlo completo.
      </p>
    </div>
  );
};

export const NoteExample: React.FC<{ example: DocNoteExample }> = ({ example }) => {
  switch (example.kind) {
    case 'outline': return <OutlineExample example={example} />;
    case 'columns': return <ColumnsExample example={example} />;
    case 'imageCrop': return <ImageCropExample example={example} />;
  }
};
