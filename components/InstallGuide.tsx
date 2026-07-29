import React from 'react';
import { MoreVertical, Share, Smartphone, Monitor, Bell, WifiOff } from 'lucide-react';

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

const PERKS = [
  { icon: WifiOff, title: 'No ocupa espacio', text: 'Se instala desde el navegador. Sin tienda de aplicaciones, sin descarga de cientos de megas.' },
  { icon: Bell, title: 'Recordatorios push', text: 'Con la app instalada puedes recibir avisos aunque Zenth no esté abierta.' },
  { icon: Monitor, title: 'La misma app en todas partes', text: 'Móvil, tablet y escritorio comparten cuenta y datos en tiempo real.' },
];

const InstallGuide: React.FC = () => {
  return (
    <section id="install" className="scroll-mt-20 py-24 lg:py-32">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.1fr] lg:gap-20">
          <div>
            <p className="t-eyebrow">Instalación</p>
            <h2 className="t-display-lg mt-4 text-ink">
              Sin tiendas.
              <br />
              Sin descargas.
            </h2>
            <p className="t-body-lg mt-6 max-w-md text-ink-muted">
              Zenth es una aplicación web progresiva: se añade a tu pantalla de inicio desde el
              propio navegador y a partir de ahí se comporta como cualquier app nativa.
            </p>

            <ul className="mt-10 space-y-6">
              {PERKS.map(({ icon: Icon, title, text }) => (
                <li key={title} className="flex gap-4">
                  <Icon className="mt-0.5 h-5 w-5 shrink-0 text-ink" strokeWidth={1.75} />
                  <div>
                    <p className="t-caption text-ink">{title}</p>
                    <p className="t-body mt-1 text-ink-muted">{text}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
            <div className="fr-card">
              <div className="flex items-center gap-3">
                <AppleLogo />
                <h3 className="t-headline text-ink">iPhone y iPad</h3>
                <span className="t-micro ml-auto text-ink-muted">Safari</span>
              </div>
              <ol className="mt-6 space-y-3">
                <li className="flex items-center gap-3">
                  <span className="t-micro flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-canvas tabular-nums text-ink-muted">1</span>
                  <span className="t-body flex items-center gap-2 text-ink-muted">
                    Toca <Share className="h-4 w-4" strokeWidth={1.75} /> Compartir
                  </span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="t-micro flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-canvas tabular-nums text-ink-muted">2</span>
                  <span className="t-body text-ink-muted">Elige «Añadir a pantalla de inicio»</span>
                </li>
              </ol>
              <p className="t-micro mt-5 border-t border-hairline-soft pt-4 text-ink-muted">
                En iOS los recordatorios push solo funcionan con la app instalada, no desde Safari.
              </p>
            </div>

            <div className="fr-card">
              <div className="flex items-center gap-3">
                <AndroidLogo />
                <h3 className="t-headline text-ink">Android</h3>
                <span className="t-micro ml-auto text-ink-muted">Chrome</span>
              </div>
              <ol className="mt-6 space-y-3">
                <li className="flex items-center gap-3">
                  <span className="t-micro flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-canvas tabular-nums text-ink-muted">1</span>
                  <span className="t-body flex items-center gap-2 text-ink-muted">
                    Abre el menú <MoreVertical className="h-4 w-4" strokeWidth={1.75} />
                  </span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="t-micro flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-canvas tabular-nums text-ink-muted">2</span>
                  <span className="t-body text-ink-muted">Pulsa «Instalar aplicación»</span>
                </li>
              </ol>
              <p className="t-micro mt-5 flex items-center gap-2 border-t border-hairline-soft pt-4 text-ink-muted">
                <Smartphone className="h-3.5 w-3.5" strokeWidth={1.75} />
                En escritorio, busca el icono de instalar en la barra de direcciones.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InstallGuide;
