import React from 'react';

const Doodles: React.FC = () => {
    return (
        <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden opacity-20 dark:opacity-10">
            {/* Esquina superior izquierda - Espiral */}
            <div className="absolute top-40 left-[5%] rotate-12">
                <svg width="120" height="120" viewBox="0 0 120 120" fill="none" stroke="currentColor" className="text-slate-900 dark:text-white">
                    <path d="M60 60c-15-15-40 0-30 20s40 10 50-10-20-40-40-20-20 40 10 50 50-10 40-40" strokeWidth="2" strokeLinecap="round" />
                </svg>
            </div>

            {/* Lado derecho - Flecha curva */}
            <div className="absolute top-[30%] right-[10%] -rotate-90">
                <svg width="100" height="150" viewBox="0 0 100 150" fill="none" stroke="currentColor" className="text-slate-900 dark:text-white">
                    <path d="M20 10c0 50 60 40 60 90s-50 40-50 40" strokeWidth="2" strokeLinecap="round" />
                    <path d="M15 130l15 10 5-20" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            </div>

            {/* Centro izquierda - Estrellas/Destellos */}
            <div className="absolute top-[55%] left-[8%]">
                <svg width="80" height="80" viewBox="0 0 80 80" fill="none" stroke="currentColor" className="text-slate-900 dark:text-white">
                    <path d="M40 10l5 25 25 5-25 5-5 25-5-25-25-5 25-5z" strokeWidth="2" strokeLinecap="round" />
                    <path d="M15 15l5 5M65 15l-5 5M15 65l5-5M65 65l-5-5" strokeWidth="2" strokeLinecap="round" />
                </svg>
            </div>

            {/* Esquina inferior derecha - Garabato redondo */}
            <div className="absolute bottom-[20%] right-[5%] rotate-45">
                <svg width="150" height="100" viewBox="0 0 150 100" fill="none" stroke="currentColor" className="text-slate-900 dark:text-white">
                    <path d="M10 50c20-30 60-30 80 0s-20 40-50 20 40-40 80-10" strokeWidth="3" strokeLinecap="round" />
                </svg>
            </div>

            {/* Líneas en zigzag - Centro derecha */}
            <div className="absolute top-[75%] right-[15%]">
                <svg width="120" height="40" viewBox="0 0 120 40" fill="none" stroke="currentColor" className="text-slate-900 dark:text-white">
                    <path d="M10 20l20-10 20 20 20-20 20 20 20-20" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            </div>

            {/* Corazón pequeño - Cerca del centro */}
            <div className="absolute top-[15%] left-[40%] opacity-40">
                <svg width="40" height="40" viewBox="0 0 40 40" fill="none" stroke="currentColor" className="text-zenth-markerPink">
                    <path d="M20 35c-5-5-15-10-15-20 0-5 5-10 10-10 3 0 5 2 5 2s2-2 5-2c5 0 10 5 10 10 0 10-10 15-15 20z" strokeWidth="2" strokeLinecap="round" />
                </svg>
            </div>
        </div>
    );
};

export default Doodles;
