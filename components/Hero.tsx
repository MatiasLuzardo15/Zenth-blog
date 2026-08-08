import React from 'react';
import { ArrowUpRight, Users, LibraryBig, CircleDashed, CalendarDays, Orbit, HardDrive } from 'lucide-react';
import AppDemo from './AppDemo';

const SIGNALS = [
  { icon: CalendarDays, label: 'Agenda visual' },
  { icon: Users, label: 'Pizarras compartidas' },
  { icon: LibraryBig, label: 'Biblioteca' },
  { icon: HardDrive, label: 'Google Drive y Workspace' },
  { icon: CircleDashed, label: 'Enfoque desde cualquier pantalla' },
  { icon: Orbit, label: 'Mi ritmo' },
];

const Hero: React.FC = () => {
  const goToApp = () => {
    window.location.href = 'https://zenth.space/app';
  };

  const scrollToFeatures = () => {
    document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative overflow-hidden pt-28 pb-16 lg:pt-40 lg:pb-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto flex max-w-4xl flex-col items-center text-center">
          <span className="fr-btn fr-btn-translucent pointer-events-none mb-6">
            <span className="h-1.5 w-1.5 rounded-full bg-accent" />
            Productividad consciente
          </span>

          <h1 className="t-display-xxl text-ink">
            Tu tiempo, tus proyectos
            <br />
            y tu atención, en calma.
          </h1>

          <p className="t-body-lg mt-8 max-w-xl text-ink-muted">
            Zenth reúne una agenda visual, pizarras para tus proyectos, una Biblioteca conectada con
            Google Drive y un temporizador de enfoque que te acompaña por toda la aplicación.
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-3">
            <button onClick={goToApp} className="fr-btn fr-btn-primary fr-btn-lg">
              Empezar gratis
              <ArrowUpRight className="h-[18px] w-[18px]" />
            </button>
            <button onClick={scrollToFeatures} className="fr-btn fr-btn-secondary fr-btn-lg">
              Ver qué incluye
            </button>
          </div>

          <ul className="mt-10 flex max-w-3xl flex-wrap justify-center gap-x-6 gap-y-3">
            {SIGNALS.map(({ icon: Icon, label }) => (
              <li key={label} className="flex items-center gap-2 text-ink-muted">
                <Icon className="h-4 w-4" strokeWidth={1.75} />
                <span className="t-caption">{label}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Demo del producto: DOM real animado en bucle, no una captura. */}
        <div className="mt-16 lg:mt-24">
          <AppDemo />
        </div>
      </div>
    </section>
  );
};

export default Hero;
