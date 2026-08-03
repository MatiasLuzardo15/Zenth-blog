import React from 'react';
import { Mail, Linkedin, ArrowUpRight } from 'lucide-react';

interface FooterProps {
  onNavigate: (page: 'home' | 'blog' | 'privacy' | 'terms' | 'faq' | 'guide', targetId?: string) => void;
}

const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const columns: { title: string; links: { label: string; onClick: () => void }[] }[] = [
    {
      title: 'Producto',
      links: [
        { label: 'Funciones', onClick: () => onNavigate('home', 'features') },
        { label: 'Instalar', onClick: () => onNavigate('home', 'install') },
        { label: 'Abrir Zenth', onClick: () => { window.location.href = 'https://zenth.space/app'; } },
      ],
    },
    {
      title: 'Recursos',
      links: [
        { label: 'Blog', onClick: () => onNavigate('blog') },
        { label: 'Preguntas frecuentes', onClick: () => onNavigate('faq') },
        { label: 'Manual del usuario', onClick: () => onNavigate('guide') },
      ],
    },
    {
      title: 'Proyecto',
      links: [
        { label: 'Política de privacidad', onClick: () => onNavigate('privacy') },
        { label: 'Términos y condiciones', onClick: () => onNavigate('terms') },
        { label: 'Apoyar el proyecto', onClick: () => onNavigate('home', 'colaborar') },
      ],
    },
  ];

  return (
    <footer id="about" className="border-t border-hairline bg-canvas">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-12 md:grid-cols-[1.4fr_repeat(3,1fr)]">
          <div>
            <div className="flex items-center gap-2">
              <img src="/blog/favicon2.png" alt="" className="h-7 w-7 rounded-small object-contain" />
              <span className="font-display text-[19px] text-ink">Zenth</span>
            </div>
            <p className="t-body mt-4 max-w-xs text-ink-muted">
              Hecho por una sola persona. Sin inversores, sin venta de datos, sin rastreadores
              siguiéndote por la web.
            </p>
            <div className="mt-6 flex gap-2">
              <a
                href="https://mail.google.com/mail/?view=cm&fs=1&to=matiasluzardevv@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                className="fr-btn fr-btn-icon"
                aria-label="Escribir un correo"
              >
                <Mail className="h-[18px] w-[18px]" />
              </a>
              <a
                href="https://www.linkedin.com/in/matias-luzardo-a87280248"
                target="_blank"
                rel="noopener noreferrer"
                className="fr-btn fr-btn-icon"
                aria-label="Perfil de LinkedIn"
              >
                <Linkedin className="h-[18px] w-[18px]" />
              </a>
            </div>
          </div>

          {columns.map(column => (
            <div key={column.title}>
              <h3 className="t-caption text-ink">{column.title}</h3>
              <ul className="mt-4 space-y-3">
                {column.links.map(link => (
                  <li key={link.label}>
                    <button
                      onClick={link.onClick}
                      className="t-caption group flex items-center gap-1 text-ink-muted transition-colors hover:text-ink"
                    >
                      {link.label}
                      <ArrowUpRight className="h-3 w-3 opacity-0 transition-opacity group-hover:opacity-100" />
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-16 flex flex-col gap-2 border-t border-hairline-soft pt-8 sm:flex-row sm:items-center sm:justify-between">
          <p className="t-micro text-ink-muted">&copy; {new Date().getFullYear()} Zenth</p>
          <p className="t-micro text-ink-muted">
            Escríbeme a{' '}
            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=matiasluzardevv@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="fr-link"
            >
              matiasluzardevv@gmail.com
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
