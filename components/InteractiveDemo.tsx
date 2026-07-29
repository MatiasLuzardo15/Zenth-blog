import React, { useState, useEffect, useRef } from 'react';
import { Check, Flame, Timer, Target } from 'lucide-react';

const InteractiveDemo: React.FC = () => {
    const [checked, setChecked] = useState(false);
    const timeoutRef = useRef<number | null>(null);

    useEffect(() => () => {
        if (timeoutRef.current) window.clearTimeout(timeoutRef.current);
    }, []);

    const toggle = () => {
        if (checked) return;
        setChecked(true);
        timeoutRef.current = window.setTimeout(() => setChecked(false), 2600);
    };

    return (
        <section className="py-24 lg:py-32">
            <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
                <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
                    <div>
                        <p className="t-eyebrow">Cómo se siente</p>
                        <h2 className="t-display-lg mt-4 text-ink">
                            Completar algo
                            <br />
                            tiene que notarse.
                        </h2>
                        <p className="t-body-lg mt-6 max-w-md text-ink-muted">
                            Cada tarea completada suma 10 XP. Las grandes metas, las que de verdad mueven
                            la aguja, suman 50. No es decoración: esos puntos, tu racha y tus minutos de
                            enfoque son exactamente lo que decide tu nivel.
                        </p>
                        <p className="t-caption mt-8 text-ink-muted">
                            Marca la tarjeta de al lado para probarlo.
                        </p>
                    </div>

                    <div className="fr-card fr-elevated relative">
                        <div className="flex items-center justify-between">
                            <span className="t-caption text-ink-muted">Hoy · Mañana</span>
                            <span className="fr-btn fr-btn-translucent pointer-events-none t-micro">
                                <Flame className="h-3.5 w-3.5" strokeWidth={2} />
                                Racha 12
                            </span>
                        </div>

                        <button
                            onClick={toggle}
                            aria-pressed={checked}
                            className="mt-5 flex w-full items-center gap-3 rounded-large bg-canvas p-4 text-left transition-colors hover:brightness-95 dark:hover:brightness-125"
                        >
                            <span
                                className={`flex h-6 w-6 shrink-0 items-center justify-center rounded-full border transition-colors ${checked ? 'border-accent bg-accent' : 'border-hairline'
                                    }`}
                            >
                                {checked && <Check className="h-3.5 w-3.5 text-white" strokeWidth={3} />}
                            </span>
                            <span className="min-w-0 flex-1">
                                <span
                                    className={`t-body-sm block truncate transition-colors ${checked ? 'text-ink-muted line-through' : 'text-ink'
                                        }`}
                                >
                                    Lanzar la nueva versión
                                </span>
                                <span className="t-micro mt-1 flex items-center gap-1.5 text-ink-muted">
                                    <Target className="h-3 w-3" strokeWidth={2} />
                                    Gran meta
                                </span>
                            </span>
                            {checked && (
                                <span className="t-caption shrink-0 animate-fade-up text-accent">+50 XP</span>
                            )}
                        </button>

                        <div className="mt-2 flex w-full items-center gap-3 rounded-large bg-canvas p-4 opacity-50">
                            <span className="h-6 w-6 shrink-0 rounded-full border border-hairline" />
                            <span className="min-w-0 flex-1">
                                <span className="t-body-sm block truncate text-ink">Sesión de enfoque</span>
                                <span className="t-micro mt-1 flex items-center gap-1.5 text-ink-muted">
                                    <Timer className="h-3 w-3" strokeWidth={2} />
                                    45 min
                                </span>
                            </span>
                        </div>

                        <div className="mt-5 flex items-center justify-between border-t border-hairline-soft pt-4">
                            <span className="t-micro text-ink-muted">Nivel 5 · Sistema Sólido</span>
                            <span className="t-micro tabular-nums text-ink-muted">
                                {checked ? '3 550' : '3 500'} XP
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default InteractiveDemo;
