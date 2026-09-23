import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

interface TocItem {
  id: string;
  title: string;
}

/** «En esta página»: marca la sección que se está leyendo. */
const DocsToc: React.FC<{ items: TocItem[] }> = ({ items }) => {
  const [activeId, setActiveId] = useState<string | null>(items[0]?.id ?? null);

  useEffect(() => {
    setActiveId(items[0]?.id ?? null);
    if (items.length === 0) return;

    let frame = 0;
    const update = () => {
      frame = 0;
      // La sección activa es la última cuyo título ya pasó por debajo de la barra fija.
      let current: string | null = items[0].id;
      for (const item of items) {
        const element = document.getElementById(item.id);
        if (element && element.getBoundingClientRect().top <= 140) current = item.id;
      }
      setActiveId(current);
    };
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };

    update();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', onScroll);
      if (frame) cancelAnimationFrame(frame);
    };
  }, [items]);

  if (items.length < 2) return null;

  return (
    <nav aria-label="En esta página">
      <p className="t-eyebrow">En esta página</p>
      <ul className="mt-4 space-y-1 border-l border-hairline">
        {items.map(item => (
          <li key={item.id}>
            <Link
              to={`#${item.id}`}
              aria-current={item.id === activeId ? 'location' : undefined}
              className={`t-caption -ml-px block border-l py-1.5 pl-4 font-normal leading-snug transition-colors ${item.id === activeId ? 'border-ink text-ink' : 'border-transparent text-ink-muted hover:text-ink'}`}
            >
              {item.title}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default DocsToc;
