import React from 'react';
import { Mic, Phone, ScreenShare, VideoOff, ArrowUpRight } from 'lucide-react';

interface VoiceSectionProps {
  onSelectPost: (id: string) => void;
}

const POINTS = [
  {
    icon: Mic,
    title: 'Sala siempre abierta',
    text: 'Cada pizarra compartida tiene la suya; entra y sal libremente desde el desplegable Equipo.',
  },
  {
    icon: Phone,
    title: 'Llamadas privadas',
    text: 'Llama uno a uno a cualquiera con quien compartas pizarra, sin enlaces ni salas que crear.',
  },
  {
    icon: ScreenShare,
    title: 'Pantalla compartida',
    text: 'Enseña la tarjeta o la tabla que están revisando, sin describirla por chat.',
  },
  {
    icon: VideoOff,
    title: 'Sin cámara',
    text: 'No hay videollamadas: voz y pantalla bastan para revisar el trabajo juntos.',
  },
];

/**
 * Resumen en portada de la sala del equipo. Es una tarjeta elevada, no un
 * spotlight: la página ya tiene dos y tres serían moodboard.
 */
const VoiceSection: React.FC<VoiceSectionProps> = ({ onSelectPost }) => {
  return (
    <section id="sala-del-equipo" className="scroll-mt-20 pb-24 lg:pb-32">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="fr-card-featured grid gap-10 p-7 sm:p-10 lg:grid-cols-[1.1fr_1fr] lg:items-center">
          <div>
            <p className="t-eyebrow">Nuevo</p>
            <h2 className="t-display-md mt-4 text-ink">Tu pizarra ahora habla.</h2>
            <p className="t-body-lg mt-5 max-w-lg text-ink-muted">
              Cada pizarra compartida tiene su sala del equipo: una sala de voz siempre abierta
              para sus integrantes, con llamadas privadas y pantalla compartida. Sin cámara
              y sin salir de Zenth.
            </p>
            <button onClick={() => onSelectPost('18')} className="fr-btn fr-btn-primary mt-8">
              Leer el anuncio completo
              <ArrowUpRight className="h-4 w-4" />
            </button>
          </div>

          <ul className="grid gap-3 sm:grid-cols-2">
            {POINTS.map(point => (
              <li key={point.title} className="fr-card h-full">
                <point.icon className="h-5 w-5 text-ink" strokeWidth={1.75} />
                <h3 className="t-caption mt-4 text-ink">{point.title}</h3>
                <p className="t-body mt-1.5 text-ink-muted">{point.text}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default VoiceSection;
