import React from 'react';
import { MoreVertical, Share, Monitor, MonitorDown, Bell, WifiOff } from 'lucide-react';

const AppleLogo = () => (
  <svg className="h-5 w-5 fill-current text-ink" viewBox="0 0 384 512" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 52.3-11.4 69.5-34.3z" />
  </svg>
);

const AndroidLogo = () => (
  <svg className="h-5 w-5 fill-current text-ink" viewBox="0 0 576 512" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <path d="M420.6 301.9a24 24 0 1 1 24-24 24 24 0 0 1 -24 24m-265.1 0a24 24 0 1 1 24-24 24 24 0 0 1 -24 24m273.7-144.5 47.9-83a10 10 0 1 0 -17.3-10h0l-48.5 84.1a301.3 301.3 0 0 0 -246.6 0L116.2 64.5a10 10 0 1 0 -17.3 10h0l47.9 83C64.5 202.2 8.2 285.6 0 384H576c-8.2-98.5-64.5-181.8-146.9-226.6" />
  </svg>
);

const DesktopLogo = () => <Monitor className="h-5 w-5 text-ink" strokeWidth={1.75} aria-hidden="true" />;

const PLATFORMS: {
  name: string;
  browser: string;
  logo: React.FC;
  steps: React.ReactNode[];
  note?: string;
}[] = [
  {
    name: 'iPhone y iPad',
    browser: 'Safari',
    logo: AppleLogo,
    steps: [
      <>Toca <Share className="inline h-4 w-4 -translate-y-px" strokeWidth={1.75} /> Compartir</>,
      'Elige «Añadir a pantalla de inicio»',
    ],
    note: 'En iOS los recordatorios push solo funcionan con la app instalada, no desde Safari.',
  },
  {
    name: 'Android',
    browser: 'Chrome',
    logo: AndroidLogo,
    steps: [
      <>Abre el menú <MoreVertical className="inline h-4 w-4 -translate-y-px" strokeWidth={1.75} /></>,
      'Pulsa «Instalar aplicación»',
    ],
  },
  {
    name: 'Escritorio',
    browser: 'Chrome o Edge',
    logo: DesktopLogo,
    steps: [
      <>Busca <MonitorDown className="inline h-4 w-4 -translate-y-px" strokeWidth={1.75} /> en la barra de direcciones</>,
      'Pulsa «Instalar»',
    ],
    note: 'En Safari para Mac: Archivo › Añadir al Dock.',
  },
];

const PERKS = [
  { icon: WifiOff, text: 'No ocupa espacio' },
  { icon: Bell, text: 'Avisos aunque Zenth esté cerrada' },
  { icon: Monitor, text: 'La misma cuenta en móvil y escritorio' },
];

/**
 * Instalación. A propósito no usa el molde de texto a la izquierda y tarjeta a
 * la derecha de «Cómo se siente», que va justo antes: título centrado, los
 * tres sistemas en columnas iguales separadas por líneas finas y las ventajas
 * en una sola línea. Se lee como una guía práctica.
 */
const InstallGuide: React.FC = () => {
  return (
    <section id="install" className="scroll-mt-20 py-24 lg:py-32">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="t-eyebrow">Instalación</p>
          <h2 className="t-display-lg mt-4 text-ink">Sin tiendas. Sin descargas.</h2>
          <p className="t-body-lg mx-auto mt-6 max-w-xl text-ink-muted">
            Zenth es una aplicación web progresiva: se añade a tu pantalla de inicio desde el navegador,
            abre en su propia ventana y conserva la misma cuenta en móvil y escritorio.
          </p>
        </div>

        <div className="mt-14 grid divide-y divide-hairline border-y border-hairline md:grid-cols-3 md:divide-x md:divide-y-0 lg:mt-16">
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
