import React from 'react';
import { Clock } from 'lucide-react';

/** Marca de «Próximamente»: artículos, documentación y secciones de algo que todavía no está disponible. */
const ComingSoonBadge: React.FC<{ label?: string; className?: string }> = ({ label = 'Próximamente', className = '' }) => (
  <span
    className={`inline-flex items-center gap-1.5 rounded-full border border-hairline bg-surface-1 px-2.5 py-1 text-[12px] font-medium leading-none text-ink ${className}`}
  >
    <Clock className="h-3.5 w-3.5 text-accent" strokeWidth={2.2} aria-hidden="true" />
    {label}
  </span>
);

export default ComingSoonBadge;
