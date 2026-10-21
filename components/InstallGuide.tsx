import React from 'react';
import { ZenPerch } from './ZenCharacter';
import { Monitor, MonitorDown, Smartphone } from 'lucide-react';

const PLATFORMS: {
  name: string;
  browser: string;
  logo: React.FC;
  steps: React.ReactNode[];
  note?: string;
}[] = [
  {
    name: 'Teléfono',
    browser: 'El navegador',
    logo: () => <Smartphone className="h-5 w-5 text-ink" strokeWidth={1.75} aria-hidden="true" />,
    steps: [
      'Abre zenth.space en Safari o Chrome',
      'Entra con tu cuenta. No hace falta instalar nada',
    ],
    note: 'La app del teléfono la estamos rehaciendo. Por ahora, déjala en el navegador.',
  },
  {
    name: 'Escritorio',
    browser: 'Chrome o Edge',
    logo: () => <Monitor className="h-5 w-5 text-ink" strokeWidth={1.75} aria-hidden="true" />,
    steps: [
      'Ábrela en el navegador, igual que en el teléfono',
      <>O busca <MonitorDown className="inline h-4 w-4 -translate-y-px" strokeWidth={1.75} /> en la barra y pulsa «Instalar»</>,
    ],
    note: 'Instalarla solo la abre en su propia ventana. En Safari para Mac: Archivo › Añadir al Dock.',
  },
];

const PERKS = [
  { icon: Smartphone, text: 'En el teléfono, desde el navegador' },
  { icon: Monitor, text: 'La misma cuenta en el computador' },
  { icon: MonitorDown, text: 'En el escritorio, ventana propia si la instalas' },
];

/**
 * Instalación. A propósito no usa el molde de texto a la izquierda y tarjeta a
 * la derecha de «Cómo se siente», que va justo antes: título centrado, los
 * dos columnas separadas por una línea fina y las ventajas
 * en una sola línea. Se lee como una guía práctica.
 */
const InstallGuide: React.FC = () => {
  return (
    <section id="install" className="scroll-mt-20 py-24 lg:py-32">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="t-eyebrow">Instalación</p>
          <h2 className="t-display-lg mt-4 text-ink">Ábrela en el navegador.</h2>
          <p className="t-body-lg mx-auto mt-6 max-w-xl text-ink-muted">
            En el teléfono no hace falta instalarla: entra desde Safari o Chrome, con la misma cuenta
            que en el computador. En el escritorio puedes dejarla así o instalarla para que abra en su propia ventana.
          </p>
        </div>

        {/* Zen, de pie sobre la línea de arriba. Va fuera de la rejilla para no contar como columna. */}
        <div className="relative mt-20 lg:mt-24">
          <ZenPerch size={60} pose="stand" look="down" className="left-1/2 -translate-x-1/2" />
          <div className="grid divide-y divide-hairline border-y border-hairline md:grid-cols-2 md:divide-x md:divide-y-0">
            {PLATFORMS.map(({ name, browser, logo: Logo, steps, note }) => (
              <div key={name} className="py-8 md:px-8 md:py-10 md:first:pl-0 md:last:pr-0">
                <div className="flex items-center gap-3">
                  <Logo />
                  <h3 className="t-headline text-ink">{name}</h3>
                  <span className="t-micro ml-auto text-ink-muted">{browser}</span>
                </div>
                <ol className="mt-6 space-y-3">
                  {steps.map((step, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <span className="t-micro mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-surface-1 tabular-nums text-ink-muted">
                        {index + 1}
                      </span>
                      <span className="t-body text-ink-muted">{step}</span>
                    </li>
                  ))}
                </ol>
                {note && <p className="t-micro mt-6 text-ink-muted">{note}</p>}
              </div>
            ))}
          </div>
        </div>

        <ul className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:flex-wrap sm:justify-center sm:gap-x-10">
          {PERKS.map(({ icon: Icon, text }) => (
            <li key={text} className="t-body flex items-center gap-2.5 text-ink-muted">
              <Icon className="h-[18px] w-[18px] shrink-0 text-ink" strokeWidth={1.75} />
              {text}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default InstallGuide;
