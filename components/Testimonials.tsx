import React from 'react';
import { Mail, MessageCircle, Linkedin } from 'lucide-react';

/**
 * Mensajes reales recibidos por correo y redes. Se conservan tal cual llegaron;
 * lo único que se ha retocado es la mención a funciones que ya no existen.
 */
const reviews = [
  {
    id: 1,
    name: 'Ana G.',
    role: 'Diseñadora (TDAH)',
    content:
      'Por fin una app que no me satura la cabeza. Las otras me estresaban con las notificaciones en rojo. Zenth es muy visual, de verdad. Ver cómo sube mi nivel es mi motivación diaria. ¡Gracias por crearla!',
    via: 'Email',
    icon: Mail,
  },
  {
    id: 2,
    name: 'Carlos M.',
    role: 'Dev Junior',
    content:
      "Te quería comentar que el 'Modo Enfoque' es excelente. Pongo 45 minutos y me olvido del mundo, evito distraerme con las redes. Corta y efectiva. La verdad que funciona bárbaro.",
    via: 'LinkedIn',
    icon: Linkedin,
  },
  {
    id: 3,
    name: 'Laura S.',
    role: 'Opositora',
    content:
      'Hola! Venía muy pasada de rosca y el registro emocional me mostró la realidad: llevaba 10 días mal. Gracias a Zenth bajé un cambio a tiempo. No es solo anotar cosas, es salud.',
    via: 'Instagram DM',
    icon: MessageCircle,
  },
];

const initials = (name: string) =>
  name
    .split(' ')
    .map(part => part[0])
    .join('')
    .slice(0, 2)
    .toUpperCase();

const Testimonials: React.FC = () => {
  return (
    <section id="reviews" className="scroll-mt-20 py-24 lg:py-32">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <p className="t-eyebrow">Lo que me escriben</p>
          <h2 className="t-display-lg mt-4 text-ink">Mensajes que llegan a mi bandeja.</h2>
        </div>

        <div className="mt-14 grid gap-4 md:grid-cols-3">
          {reviews.map(review => {
            const Icon = review.icon;
            return (
              <figure key={review.id} className="fr-card flex h-full flex-col">
                <blockquote className="t-body-lg flex-1 text-ink">«{review.content}»</blockquote>

                <figcaption className="mt-8 flex items-center gap-3 border-t border-hairline-soft pt-5">
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-accent text-[12px] font-semibold text-white">
                    {initials(review.name)}
                  </span>
                  <span className="min-w-0 flex-1">
                    <span className="t-caption block truncate text-ink">{review.name}</span>
                    <span className="t-micro block truncate text-ink-muted">{review.role}</span>
                  </span>
                  <span
                    className="t-micro flex shrink-0 items-center gap-1.5 text-ink-muted"
                    title={`Recibido por ${review.via}`}
                  >
                    <Icon className="h-3.5 w-3.5" strokeWidth={1.75} />
                    {review.via}
                  </span>
                </figcaption>
              </figure>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
