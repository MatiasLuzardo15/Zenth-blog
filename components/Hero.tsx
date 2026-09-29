import React from 'react';
import {
  ArrowUpRight, Users, LibraryBig, CircleDashed, CalendarDays, Orbit, HardDrive, PhoneCall, CalendarSync, Workflow,
  History, FileAudio, Headphones, Headset, Sparkles, HeartPulse, BarChart3, UserCog, MonitorSmartphone,
} from 'lucide-react';
import AppDemo from './AppDemo';

const SIGNALS = [
  { icon: CalendarDays, label: 'Agenda visual' },
  { icon: CalendarSync, label: 'Google Calendar' },
  { icon: Users, label: 'Pizarras compartidas' },
  { icon: Workflow, label: 'Automatizaciones y plantillas' },
  { icon: LibraryBig, label: 'Biblioteca y lienzos' },
  { icon: History, label: 'Historial de versiones' },
  { icon: HardDrive, label: 'Google Drive y Workspace' },
  { icon: FileAudio, label: 'Notas de voz y PDF' },
  { icon: CircleDashed, label: 'Enfoque desde cualquier pantalla' },
  { icon: Headphones, label: 'Sonidos para enfocarte' },
  { icon: Headset, label: 'Sala del equipo y llamadas' },
  { icon: PhoneCall, label: 'Reuniones con invitados' },
  { icon: Sparkles, label: 'Zen, el asistente' },
  { icon: Orbit, label: 'Progreso y logros' },
  { icon: HeartPulse, label: 'Registro de ánimo' },
  { icon: BarChart3, label: 'Estadísticas' },
  { icon: UserCog, label: 'Varias cuentas' },
  { icon: MonitorSmartphone, label: 'Instalable en móvil y escritorio' },
];

const Hero: React.FC = () => {
  const goToApp = () => {
    window.location.href = 'https://zenth.space/app';
  };

  const scrollToFeatures = () => {
    document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative overflow-hidden pt-24 pb-16 lg:pb-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Cinta de herramientas: la pista lleva la lista dos veces (la copia va
            oculta a lectores de pantalla) para que el bucle no tenga salto. Ver
            `.zenth-marquee` en index.html; aquí el desvanecido de los bordes es más ancho. */}
        <div
          className="zenth-marquee mx-auto mb-10 max-w-4xl"
          style={{
            WebkitMaskImage: 'linear-gradient(to right, transparent, #000 15%, #000 85%, transparent)',
            maskImage: 'linear-gradient(to right, transparent, #000 15%, #000 85%, transparent)',
          }}
        >
          <div className="zenth-marquee-track" style={{ animationDuration: '70s' }}>
            {[0, 1].map(copy => (
              <ul key={copy} className="flex shrink-0 gap-7 pr-7" aria-hidden={copy === 1 ? true : undefined}>
                {SIGNALS.map(({ icon: Icon, label }) => (
                  <li key={label} className="flex shrink-0 items-center gap-2 whitespace-nowrap text-ink-muted">
                    <Icon className="h-4 w-4" strokeWidth={1.75} />
                    <span className="t-caption">{label}</span>
                  </li>
                ))}
              </ul>
            ))}
          </div>
        </div>

        <div className="mx-auto flex max-w-4xl flex-col items-center text-center">
          <h1 className="t-display-xxl text-ink">
            Tu día empieza y&nbsp;termina
            <br />
            en una sola app.
          </h1>

          <p className="t-body-lg mt-8 max-w-xl text-ink-muted">
            Tu agenda, tus proyectos, tus notas y tu enfoque en un solo lugar, conectados con Google Drive.
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
