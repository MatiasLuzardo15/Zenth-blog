import React, { useState } from 'react';
import { ChevronDown, ChevronUp, HelpCircle, Zap, Heart, Brain, Trophy, Sparkles, Smartphone, Mail, BookOpen } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface FAQItemProps {
    question: string;
    answer: React.ReactNode;
    icon?: React.ReactNode;
}

const FAQItem: React.FC<FAQItemProps> = ({ question, answer, icon }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="border-b-2 border-black dark:border-white/20 last:border-0">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="w-full py-6 flex items-start justify-between text-left focus:outline-none group"
            >
                <div className="flex gap-4">
                    <div className="mt-1 text-black dark:text-zenth-markerBlue group-hover:scale-110 transition-transform">
                        {icon || <HelpCircle className="w-6 h-6" />}
                    </div>
                    <h3 className="text-xl font-bold text-black dark:text-white group-hover:text-zenth-400 dark:group-hover:text-zenth-markerYellow transition-colors">
                        {question}
                    </h3>
                </div>
                <div className="mt-1 ml-4 text-black dark:text-white">
                    {isOpen ? <ChevronUp className="w-6 h-6" /> : <ChevronDown className="w-6 h-6" />}
                </div>
            </button>
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.2, ease: [0.04, 0.62, 0.23, 0.98] }}
                        className="overflow-hidden"
                    >
                        <div className="pb-8 pl-14 pr-4">
                            <p className="text-lg font-medium text-slate-700 dark:text-slate-300 leading-relaxed bg-zenth-markerYellow/20 dark:bg-white/5 p-4 rounded-xl border-2 border-dashed border-black/10 dark:border-white/10">
                                {answer}
                            </p>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

const FAQS = [
    {
        question: "¿Qué es Zenth exactamente?",
        answer: "Zenth es un planificador visual diseñado para mentes inquietas. Combina gestión de tareas, gamificación (XP y niveles), seguimiento emocional y un asistente de IA para ayudarte a organizar tu vida con calma y sin el agobio de las listas tradicionales.",
        icon: <Zap className="w-6 h-6" />
    },
    {
        question: "¿Es Zenth gratuito?",
        answer: (
            <>
                Sí, puedes empezar a usar Zenth de forma gratuita. Ofrecemos todas las funciones principales de organización, gamificación y sincronización.
                Si te gusta el proyecto y quieres apoyar su mantenimiento, puedes{' '}
                <a
                    href="https://www.paypal.com/donate/?hosted_button_id=2ZXKDRWUK3M6C"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-black dark:text-zenth-markerBlue underline decoration-zenth-markerYellow decoration-2 font-bold hover:text-zenth-600 transition-colors"
                >
                    donar aquí
                </a>
                {' '}para ayudar con los costos de los servidores.
            </>
        ),
        icon: <Heart className="w-6 h-6" />
    },
    {
        question: "¿Cómo puedo cambiar mi dirección de correo?",
        answer: "Para actualizar tu correo de forma segura: ve a Perfil (Me) > Cuenta > 'Cambiar Correo'. Ingresa tu nueva dirección y recibirás un enlace de confirmación. El cambio solo se hará efectivo una vez que confirmes el enlace en tu nuevo correo.",
        icon: <Mail className="w-6 h-6" />
    },
    {
        question: "¿Por qué se dice que es ideal para personas con TDAH?",
        answer: "Zenth ha sido diseñado considerando la neurociencia del TDAH. Usamos bloques de tiempo flexibles (Mañana, Tarde, Noche) en lugar de horarios rígidos, recompensas inmediatas de dopamina a través de XP, y una interfaz limpia que reduce la carga cognitiva.",
        icon: <Brain className="w-6 h-6" />
    },
    {
        question: "¿Para qué sirven los XP y los niveles?",
        answer: "Los Puntos de Experiencia (XP) son una métrica de tu constancia. Al completar tareas y sesiones de enfoque, ganas XP que te permiten subir de nivel. Es una forma de gamificar tu disciplina.",
        icon: <Trophy className="w-6 h-6" />
    },
    {
        question: "¿Cómo funciona el asistente IA 'Zen'?",
        answer: "Zen utiliza Google Gemini para simplificar tu planificación. Puede autocompletar tareas con lenguaje natural, sugerir micro-pasos y ayudarte a agendar inteligentemente tus pendientes.",
        icon: <Sparkles className="w-6 h-6" />
    },
    {
        question: "¿Puedo usarlo en mi teléfono?",
        answer: "¡Absolutamente! Zenth es una PWA. Puedes 'Instalarla' desde el navegador y funcionará como una aplicación nativa, con iconos en tu pantalla de inicio.",
        icon: <Smartphone className="w-6 h-6" />
    }
];

const FAQ = ({ onBack, onGoToGuide }: { onBack: () => void, onGoToGuide: () => void }) => {

    return (
        <div className="min-h-screen bg-zenth-bg dark:bg-zenth-darkBg pt-24 pb-20 px-4 relative overflow-hidden">
            {/* Background elements */}
            <div className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-10">
                <div className="absolute top-[10%] left-[5%] w-96 h-96 bg-zenth-markerYellow rounded-full blur-[80px] md:blur-[120px]"></div>
                <div className="absolute bottom-[10%] right-[5%] w-96 h-96 bg-zenth-markerBlue rounded-full blur-[80px] md:blur-[120px]"></div>
            </div>

            <div className="max-w-4xl mx-auto relative z-10">
                <button
                    onClick={onBack}
                    className="mb-8 flex items-center gap-2 text-black dark:text-white font-bold hover:translate-x-[-4px] transition-transform group"
                >
                    <div className="p-2 border-2 border-black dark:border-white bg-white dark:bg-slate-800 shadow-sketch dark:shadow-sketch-white">
                        <ChevronDown className="w-5 h-5 rotate-90" />
                    </div>
                    <span className="underline decoration-zenth-markerYellow decoration-4 text-2xl">Volver al Inicio</span>
                </button>

                <div className="text-center mb-16">
                    <h1 className="text-5xl md:text-7xl font-marker text-black dark:text-white mb-6 transform -rotate-1">
                        Preguntas Frecuentes
                    </h1>
                    <p className="text-2xl font-bold text-slate-700 dark:text-slate-300 max-w-2xl mx-auto leading-tight italic">
                        Todo lo que necesitas saber para dominar tu productividad y paz mental.
                    </p>
                </div>

                {/* FAQ Section */}
                <div className="bg-white dark:bg-slate-900 border-4 border-black dark:border-white rounded-lg p-6 md:p-10 shadow-sketch-xl dark:shadow-sketch-xl-white mb-16 transform rotate-1 relative">
                    {/* Tape decorations */}
                    <div className="absolute -top-6 left-1/4 w-32 h-10 bg-zenth-markerYellow/60 -rotate-2 border-x-2 border-black/10"></div>
                    <div className="absolute -bottom-6 right-1/4 w-32 h-10 bg-zenth-markerPink/60 rotate-2 border-x-2 border-black/10"></div>

                    <div className="divide-y-2 divide-black/10 dark:divide-white/10">
                        {FAQS.map((faq, index) => (
                            <FAQItem key={index} {...faq} />
                        ))}
                    </div>
                </div>

                {/* CTA to Full Guide */}
                <div className="text-center mb-16">
                    <div className="inline-block p-1 bg-black dark:bg-white rounded-xl shadow-sketch-lg dark:shadow-sketch-lg-white">
                        <button
                            onClick={onGoToGuide}
                            className="bg-zenth-markerYellow text-black px-10 py-5 rounded-lg border-2 border-black font-black text-2xl flex items-center gap-4 hover:bg-white transition-all transform hover:-translate-y-1"
                        >
                            <BookOpen className="w-8 h-8" />
                            Ver Manual del Usuario y Guía Completa
                        </button>
                    </div>
                    <p className="mt-4 text-slate-600 dark:text-slate-400 font-bold italic">
                        Aprende a usar Zenth como un experto paso a paso
                    </p>
                </div>

                {/* Contact Section */}
                <div className="mt-20 relative px-4 md:px-0">
                    <div className="bg-black dark:bg-white text-white dark:text-black p-10 rounded-lg shadow-sketch-lg dark:shadow-sketch-lg-white border-2 border-white dark:border-black text-center transform -rotate-1">
                        <h2 className="text-4xl font-marker mb-4">¿Aún tienes dudas?</h2>
                        <p className="text-xl font-bold mb-8 opacity-90">
                            Escríbenos y estaremos encantados de ayudarte a entrar en tu estado Zen.
                        </p>
                        <div className="flex flex-col sm:flex-row justify-center gap-6">
                            <a
                                href="https://mail.google.com/mail/?view=cm&fs=1&to=matiasluzardevv@gmail.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center justify-center gap-3 bg-zenth-markerYellow text-black px-10 py-4 rounded-md font-black text-xl border-2 border-black shadow-sketch hover:shadow-none hover:translate-x-[2px] hover:translate-y-[2px] transition-all"
                            >
                                <Mail className="w-6 h-6" />
                                Contactar Soporte
                            </a>
                        </div>
                    </div>
                    <div className="absolute -inset-2 bg-zenth-markerPink -z-10 rounded-lg transform rotate-1 opacity-50"></div>
                </div>
            </div>
        </div>
    );
};

export default FAQ;
