import React from 'react';
import { Mic, Phone, ScreenShare, Headphones, Link2, ArrowUpRight } from 'lucide-react';
import CallsDemo from './demo/CallsDemo';

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
    text: 'Llama uno a uno a cualquiera con quien compartas pizarra, directo desde el desplegable Equipo.',
  },
  {
    icon: ScreenShare,
    title: 'Pantalla compartida',
    text: 'Enseña la tarjeta o la tabla que están revisando en ese momento.',
  },
  {
    icon: Headphones,
    title: 'Preparar audio',
    text: 'Elige micrófono y auriculares y comprueba la señal antes de entrar.',
  },
  {
    icon: Link2,
    title: 'Reuniones rápidas',
    text: 'Crea un enlace para clientes o colaboradores externos: entran con su nombre, sin cuenta y sin ver tu espacio.',
  },
];

/**
 * Resumen en portada de la sala del equipo. A diferencia del hero (todo
 * centrado sobre la demo), aquí todo va alineado a la izquierda y el CTA
 * se despega a la derecha del título: misma demo animada, otra composición.
 */
const VoiceSection: React.FC<VoiceSectionProps> = ({ onSelectPost }) => {
  return (
    <section id="sala-del-equipo" className="scroll-mt-20 pb-24 lg:pb-32">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between lg:gap-10">
          <div className="max-w-xl">
            <p className="t-eyebrow">Colaboración en vivo</p>
            <h2 className="t-display-md mt-4 text-ink">Tu pizarra ahora habla.</h2>
            <p className="t-body-lg mt-5 max-w-lg text-ink-muted">
              Cada pizarra compartida tiene su sala del equipo: una sala de voz siempre abierta
              para sus integrantes, con llamadas privadas y pantalla compartida. Y si la otra
              persona no pertenece a tu pizarra, puedes crear una reunión rápida con un enlace
              aislado.
            </p>
          </div>
          <button onClick={() => onSelectPost('18')} className="fr-btn fr-btn-primary shrink-0 lg:mt-1">
            Leer el anuncio completo
            <ArrowUpRight className="h-4 w-4" />
          </button>
        </div>

        <div className="mt-10 lg:mt-12">
          <CallsDemo />
        </div>
        <p className="mt-4 text-center t-caption text-ink-muted">
          Matías entra a la sala del equipo, habla con Lucía y cuelga para llamar en privado a Sofía.
        </p>

        <ul className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
          {POINTS.map(point => (
            <li key={point.title} className="fr-card h-full">
              <point.icon className="h-5 w-5 text-ink" strokeWidth={1.75} />
              <h3 className="t-caption mt-4 text-ink">{point.title}</h3>
              <p className="t-body mt-1.5 text-ink-muted">{point.text}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default VoiceSection;
