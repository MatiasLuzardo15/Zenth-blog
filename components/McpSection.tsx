import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import McpDemo from './McpDemo';

interface McpSectionProps {
  onSelectPost: (id: string) => void;
}

/** La ficha: cada fila une el tema y la respuesta con la misma línea punteada de la demo. */
const SPECS = [
  { label: 'Asistentes', value: 'Claude y Codex' },
  { label: 'Permiso', value: 'Lo das tú, con tu cuenta' },
  { label: 'Borrar', value: 'Nunca para siempre' },
  { label: 'Compartir', value: 'Solo tú, desde la app' },
  { label: 'Control', value: 'Desconectas cuando quieras' },
];

/**
 * Anuncio de Zenth MCP, después de las herramientas. A propósito no sigue el molde
 * de las demás secciones (título a la izquierda, demo y rejilla de tarjetas):
 * todo va dentro de un bloque invertido (`.fr-inverse`: negro en claro, blanco
 * en oscuro) con el título centrado, la demo (`McpDemo`) sin fondo propio y,
 * debajo, el texto con los botones junto a una ficha de filas punteadas. En
 * móvil, debajo de la demo quedan solo los botones, para que el bloque entre
 * en una pantalla.
 * Todavía no está abierto a todas las cuentas: lleva «Próximamente» y conduce
 * al adelanto (21) y a la documentación, no a un botón de conectar.
 */
const McpSection: React.FC<McpSectionProps> = ({ onSelectPost }) => {
  return (
    <section id="zenth-mcp" aria-labelledby="zenth-mcp-title" className="scroll-mt-20 pb-24 lg:pb-32">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="fr-inverse rounded-[32px] px-5 py-10 sm:px-10 sm:py-14 lg:px-12 lg:py-20">
          <div className="mx-auto flex max-w-3xl flex-col items-center text-center">
            <span className="fr-btn fr-btn-translucent pointer-events-none">
              <span className="relative flex h-1.5 w-1.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-70 motion-reduce:animate-none" />
                <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-accent" />
              </span>
              Próximamente · Zenth MCP
            </span>
            <h2 id="zenth-mcp-title" className="t-display-lg mt-6 text-ink">
              Tu IA, ahora
              <br />
              habla con Zenth.
            </h2>
          </div>

          <div className="mt-6 lg:mt-10">
            <McpDemo />
          </div>

          <div className="mt-6 grid gap-8 lg:mt-16 lg:grid-cols-[1fr_1.1fr] lg:gap-16 lg:border-t lg:border-hairline lg:pt-10">
            <div>
              <p className="t-body-lg hidden max-w-md text-ink-muted lg:block">
                Conecta <strong className="font-semibold text-ink">Claude</strong> o{' '}
                <strong className="font-semibold text-ink">Codex</strong> y pídele, con tus palabras, que revise tu
                día, cree tareas, mueva tarjetas o escriba un documento en tu Biblioteca. Todo pasa en tu cuenta
                y con tu permiso.
              </p>
              <div className="flex flex-wrap justify-center gap-3 lg:mt-8 lg:justify-start">
                <button onClick={() => onSelectPost('21')} className="fr-btn fr-btn-primary">
                  Leer el anuncio
                  <ArrowUpRight className="h-4 w-4" />
                </button>
                <Link to="/docs/integraciones/zenth-mcp" className="fr-btn fr-btn-secondary">
                  Cómo va a funcionar
                </Link>
              </div>
            </div>

            <dl className="hidden space-y-4 lg:block">
              {SPECS.map(spec => (
                <div key={spec.label} className="flex items-baseline gap-3">
                  <dt className="t-caption shrink-0 text-ink">{spec.label}</dt>
                  <span aria-hidden="true" className="min-w-[24px] flex-1 -translate-y-1 border-b-2 border-dotted border-hairline" />
                  <dd className="t-body text-right text-ink-muted">{spec.value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </section>
  );
};

export default McpSection;
