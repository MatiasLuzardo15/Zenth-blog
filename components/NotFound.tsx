import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

const NotFound = () => (
  <section className="mx-auto flex min-h-[65vh] max-w-3xl flex-col items-center justify-center gap-6 px-6 py-28 text-center">
    <Helmet>
      <title>Página no encontrada | Zenth</title>
      <meta name="robots" content="noindex" />
    </Helmet>
    <p className="t-caption text-ink-muted">Error 404</p>
    <h1 className="t-display-lg text-ink">No encontramos esta página.</h1>
    <p className="t-body-lg text-ink-muted">Revisá la dirección o volvé al inicio para seguir explorando Zenth.</p>
    <Link to="/" className="rounded-full bg-ink px-6 py-3 text-canvas">Volver al inicio</Link>
  </section>
);

export default NotFound;
