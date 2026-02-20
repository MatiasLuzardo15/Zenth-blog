import React, { useState } from 'react';
import { Check, Flame } from 'lucide-react';

const InteractiveDemo: React.FC = () => {
    const [demoChecked, setDemoChecked] = useState(false);

    const handleDemoClick = () => {
        if (!demoChecked) {
            setDemoChecked(true);
            setTimeout(() => setDemoChecked(false), 3000);
        }
    };

    return (
        <section className="py-20 relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col lg:flex-row items-center justify-between gap-16">

                    {/* Text Content */}
                    <div className="flex-1 text-center lg:text-left">
                        <h2 className="text-4xl sm:text-5xl font-serif font-black text-black dark:text-white mb-6">
                            Siente el <span className="highlight-marker">progreso</span> <br />en tus manos.
                        </h2>
                        <p className="text-xl text-slate-600 dark:text-slate-400 font-sans max-w-lg mx-auto lg:mx-0 leading-relaxed mb-8">
                            Zenth no es solo una lista de tareas. Es una experiencia táctil y visual diseñada para darte dopamina positiva con cada pequeño logro.
                        </p>
                        <div className="flex items-center justify-center lg:justify-start gap-4 relaltive">
                            <div className="flex items-center gap-2 px-4 py-2 bg-white dark:bg-slate-800 border-2 border-black rounded-lg shadow-sketch relative">
                                {/* Círculo dibujado a mano alrededor del tag */}

                                <span className="w-3 h-3 bg-zenth-markerYellow rounded-full"></span>
                                <span className="font-bold text-black dark:text-white">Interactivo</span>
                            </div>
                            <div className="font-hand text-xl text-slate-500 animate-bounce flex items-center gap-2">
                                ¡Pruébalo aquí mismo!

                            </div>
                        </div>
                    </div>

                    {/* Interactive Card */}
                    <div className="flex-1 flex justify-center">
                        <div
                            className="relative w-full max-w-[320px] cursor-pointer group"
                            onClick={handleDemoClick}
                        >
                            {/* Post-it Background */}
                            <div className="bg-[#fff9c4] dark:bg-[#fdd835] w-full aspect-square shadow-sketch-xl dark:shadow-sketch-xl-white transform -rotate-2 group-hover:rotate-0 transition-transform duration-300 relative z-10 p-8 flex flex-col justify-between">

                                {/* Tape */}
                                <div className="absolute -top-4 left-1/2 w-32 h-10 bg-zenth-200/80 transform -translate-x-1/2 -rotate-1 shadow-sm"></div>

                                <div>
                                    <div className="flex justify-between items-start mb-6">
                                        <h3 className="font-marker text-3xl text-slate-800 opacity-90">Meta:</h3>
                                        <div className="bg-white/50 px-3 py-1 rounded font-mono text-sm text-slate-800 font-bold transform rotate-3 flex items-center gap-1">
                                            <Flame className="w-4 h-4 text-orange-500 fill-current" /> Racha: 12
                                        </div>
                                    </div>

                                    {/* Interactive Task */}
                                    <div className="flex items-center space-x-4 mb-4">
                                        <div className={`w-8 h-8 border-2 border-slate-800 rounded flex items-center justify-center transition-colors duration-300 ${demoChecked ? 'bg-zenth-400 border-zenth-400' : 'bg-white'}`}>
                                            {demoChecked && <Check className="w-6 h-6 text-white animate-in zoom-in" />}
                                        </div>
                                        <span className={`font-hand text-2xl font-bold text-slate-800 transition-all duration-300 ${demoChecked ? 'line-through opacity-50' : ''}`}>
                                            Lanzar mi proyecto
                                        </span>
                                    </div>

                                    <div className="flex items-center space-x-4 opacity-50">
                                        <div className="w-8 h-8 border-2 border-slate-800 rounded bg-white"></div>
                                        <span className="font-hand text-2xl font-bold text-slate-800">
                                            Sesión de Enfoque
                                        </span>
                                    </div>
                                </div>

                                <div className="mt-4 border-t-2 border-dashed border-slate-800/20 pt-4 flex justify-between items-end">
                                    <div className="text-slate-700 font-hand text-lg font-bold">
                                        Energía: <span className="text-purple-600">Alta ☀️</span>
                                    </div>
                                    {demoChecked && (
                                        <div className="animate-bounce font-marker text-zenth-400 text-3xl transform -rotate-12">
                                            +50 XP 🚀
                                        </div>
                                    )}
                                </div>
                            </div>

                            {/* Background Shadow elements */}
                            <div className="absolute top-6 -right-4 w-full h-full bg-slate-200 dark:bg-slate-700 border-2 border-black dark:border-white rounded-lg -z-10 transform rotate-3"></div>
                            <div className="absolute -bottom-6 -left-4 w-full h-full border-2 border-black/10 dark:border-white/5 rounded-lg -z-20 transform -rotate-1"></div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default InteractiveDemo;
